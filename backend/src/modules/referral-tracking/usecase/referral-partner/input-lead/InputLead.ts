import { UniqueEntityID } from "../../../../../shared/domain/UniqueEntityID";
import { Client, ClientProps } from "../../../domain/Client";
import { Lead, LeadProps } from "../../../domain/Lead";
import { Project, ProjectProps } from "../../../domain/Project";
import { ReferralOwnerId } from "../../../domain/ReferralOwnerId";
import { ReferralPartnerId } from "../../../domain/ReferralPartnerId";
import { IClientRepo } from "../../../repo/ClientRepo";
import { ILeadRepo } from "../../../repo/LeadRepo";
import { IProjectRepo } from "../../../repo/ProjectRepo";
import { IUniqueLead } from "../../../repo/UniqueLead";
import { InputLeadDTO } from "./InputLeadDTO";
import { InputLeadErrors } from "./InputLeadErrors";

type Response = string |
    typeof InputLeadErrors.InputLeadExists |
    typeof InputLeadErrors.InputLeadInvalid

export class InputLead {
    private clientRepo: IClientRepo
    private leadRepo: ILeadRepo
    private projectRepo: IProjectRepo

    constructor(leadRepo: ILeadRepo, clientRepo: IClientRepo, projectRepo: IProjectRepo) {
        this.leadRepo = leadRepo
        this.clientRepo = clientRepo
        this.projectRepo = projectRepo

    }
    async execute(dto: InputLeadDTO): Promise<Response> {
        const {
            referralPartnerId,
            referralOwnerId,
            clientEmail,
            clientName,
            projectTitle,
            projectEstimate
        } = dto

        let client: Client

        // Finding the client, if the client is not found creates a new client
        try {
            client = await this.clientRepo.getClientByEmail(clientEmail)
        } catch (error) {
            const clientProps: ClientProps = {
                name: clientName,
                email: clientEmail
            }
            client = Client.create(clientProps)

            try {
                await this.clientRepo.save(client)
            } catch (error) {
                return error
            }
        }
        const projectProps: ProjectProps = {
            clientId: client.clientId,
            title: projectTitle,
            estimate: projectEstimate
        }
        const project = Project.create(projectProps)

        // If lead exists return error, otherwise create and save lead, and save project
        try {
            const leadExistsProps: IUniqueLead = {
                referralPartnerId: ReferralPartnerId.create(new UniqueEntityID(referralPartnerId)),
                referralOwnerId: ReferralOwnerId.create(new UniqueEntityID(referralOwnerId)),
                clientId: client.clientId,
                projectId: project.projectId
            }

            await this.leadRepo.findLead(leadExistsProps)

            return InputLeadErrors.InputLeadExists
        } catch (error) {
            const leadProps: LeadProps = {
                referralPartnerId: ReferralPartnerId.create(new UniqueEntityID(referralPartnerId)),
                referralOwnerId: ReferralOwnerId.create(new UniqueEntityID(referralOwnerId)),
                clientId: client.clientId,
                dateTime: new Date(),
                projectId: project.projectId,
                status: "open"
            }

            const lead = Lead.create(leadProps)
            try {
                await this.leadRepo.save(lead)
            } catch (error) {
                return error
            }
            try {
                await this.projectRepo.save(project)
            } catch (error) {
                return error
            }

        }

        return 'success'
    }
}