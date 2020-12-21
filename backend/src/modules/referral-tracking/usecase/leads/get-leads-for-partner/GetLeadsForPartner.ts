import { Client } from "../../../domain/Client";
import { Lead } from "../../../domain/Lead";
import { Project } from "../../../domain/Project";
import { IClientRepo } from "../../../repo/ClientRepo";
import { ILeadRepo } from "../../../repo/LeadRepo";
import { IProjectRepo } from "../../../repo/ProjectRepo";
import { GetLeadsForPartnerDTO } from "./GetLeadsForPartnerDTO";


type GetLeadsForPartnerResult = Array<{
    project: Project;
    lead: Lead;
    client: Client;
}>

export class GetLeadsForPartner {
    private leadRepo: ILeadRepo
    private clientRepo: IClientRepo
    private projectRepo: IProjectRepo

    constructor(leadRepo: ILeadRepo, clientRepo: IClientRepo, projectRepo: IProjectRepo) {
        this.leadRepo = leadRepo
        this.clientRepo = clientRepo
        this.projectRepo = projectRepo
    }

    async execute(dto: GetLeadsForPartnerDTO): Promise<GetLeadsForPartnerResult> {
        const leads = await this.leadRepo.findLeadsByPartnerUsername(dto.referralPartnerUsername);

        const promises = leads.map(async lead => {
            const project = await this.projectRepo.getProjectById(lead.projectId)
            const client = await this.clientRepo.getClientById(lead.ClientId)

            return {
                project: project,
                lead: lead, 
                client: client
            }
        })
        const result = Promise.all(promises)

        return result;
    }

}