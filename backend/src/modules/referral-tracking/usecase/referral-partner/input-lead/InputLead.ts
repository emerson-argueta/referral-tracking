import { idText } from "typescript";
import { Client, ClientProps } from "../../../domain/Client";
import { Lead, LeadProps } from "../../../domain/Lead";
import { Project, ProjectProps } from "../../../domain/Project";
import { ReferralOwner } from "../../../domain/ReferralOwner";
import { ReferralPartner } from "../../../domain/ReferralPartner";
import { IUniqueLead } from "../../../repo/UniqueLead";
import { InputLeadDTO } from "./InputLeadDTO";
import { InputLeadErrors } from "./InputLeadErrors";

type Response = string |
    typeof InputLeadErrors.InputLeadExists |
    typeof InputLeadErrors.InputLeadInvalid

export class InputLead {
    referralPartnerRepo: any
    clientRepo: any
    leadRepo: any

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
            clientId: client.id,
            title: projectTitle,
            estimate: projectEstimate
        }
        const project = Project.create(projectProps)

        const leadProps: LeadProps = {
            referralPartner: referralPartner,
            referralOwner: referralOwner,
            client: client,
            dateTime: new Date(),
            project: project
        }

        try {
            const leadExistsProps: IUniqueLead = {
                referralPartnerId: referralPartner.id,
                referralOwnerId: referralOwner.id,
                clientId: client.id,
                projectId: project.id
            }
            const leadExists = this.leadRepo.findLead(leadExistsProps)

            return InputLeadErrors.InputLeadExists
        } catch (error) {
            const lead = Lead.create(leadProps)
            await this.leadRepo.save(lead)
        }

        return 'success'
    }
}