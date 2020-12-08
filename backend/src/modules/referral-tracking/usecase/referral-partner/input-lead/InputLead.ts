import { Client, ClientProps } from "../../../domain/Client";
import { Lead, LeadProps } from "../../../domain/Lead";
import { Project, ProjectProps } from "../../../domain/Project";
import { InputLeadDTO } from "./InputLeadDTO";

export class InputLead {
    referralPartnerRepo: any
    clientRepo: any
    leadRepo: any

    async execute(request: InputLeadDTO): Promise<string> {
        const {
            referralPartnerId,
            referralOwnerId,
            clientEmail,
            clientName,
            projectTitle,
            projectEstimate
        } = request

        let referralPartner: any
        let referralOwner: any
        let client: any

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
            ReferralPartner: referralPartner,
            ReferralOwner: referralOwner,
            client: client,
            dateTime: new Date(),
            project: project
        }

        const lead = Lead.create(leadProps)

        await this.leadRepo.save(lead)

        return 'success'
    }
}