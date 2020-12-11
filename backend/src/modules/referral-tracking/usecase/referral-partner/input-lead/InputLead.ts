import { idText } from "typescript";
import { Client, ClientProps } from "../../../domain/Client";
import { Lead, LeadProps } from "../../../domain/Lead";
import { Project, ProjectProps } from "../../../domain/Project";
import { ReferralOwner } from "../../../domain/ReferralOwner";
import { ReferralPartner } from "../../../domain/ReferralPartner";
import { IClientRepo } from "../../../repo/ClientRepo";
import { LeadRepo } from "../../../repo/implementations/SequelizeLeadRepo";
import { ILeadRepo } from "../../../repo/LeadRepo";
import { IUniqueLead } from "../../../repo/UniqueLead";
import { InputLeadDTO } from "./InputLeadDTO";
import { InputLeadErrors } from "./InputLeadErrors";

type Response = string |
    typeof InputLeadErrors.InputLeadExists |
    typeof InputLeadErrors.InputLeadInvalid

export class InputLead {
    referralPartnerRepo: any
    private clientRepo: IClientRepo
    private leadRepo: ILeadRepo

    constructor(leadRepo: ILeadRepo, clientRepo: IClientRepo) {
        this.leadRepo = leadRepo
        this.clientRepo = clientRepo

    }
    async execute(request: InputLeadDTO): Promise<Response> {
        const {
            referralPartnerId,
            referralOwnerId,
            clientEmail,
            clientName,
            projectTitle,
            projectEstimate
        } = request

        let referralPartner: ReferralPartner
        let referralOwner: ReferralOwner
        let client: Client

        try {
            referralPartner = await this.referralPartnerRepo.getReferralPartnerById(referralPartnerId)
        } catch (error) {
            return error
        }

        try {
            referralOwner = await this.referralPartnerRepo.getReferralOwnerById(referralOwnerId)
        } catch (error) {
            return error
        }

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



        try {
            const leadExistsProps: IUniqueLead = {
                referralPartnerId: referralPartner.referralPartnerId,
                referralOwnerId: referralOwner.referralOwnerId,
                clientId: client.clientId,
                projectId: project.projectId
            }

            await this.leadRepo.findLead(leadExistsProps)

            return InputLeadErrors.InputLeadExists
        } catch (error) {
            const leadProps: LeadProps = {
                referralPartner: referralPartner,
                referralOwner: referralOwner,
                client: client,
                dateTime: new Date(),
                project: project,
                status: "open"
            }

            const lead = Lead.create(leadProps)
            await this.leadRepo.save(lead)
        }

        return 'success'
    }
}