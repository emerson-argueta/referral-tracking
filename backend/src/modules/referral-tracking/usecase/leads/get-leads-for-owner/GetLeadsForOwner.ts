import { UniqueEntityID } from "../../../../../shared/domain/UniqueEntityID"
import { Client } from "../../../domain/Client"
import { Lead } from "../../../domain/Lead"
import { Project } from "../../../domain/Project"
import { ReferralOwnerId } from "../../../domain/ReferralOwnerId"
import { IClientRepo } from "../../../repo/ClientRepo"
import { ILeadRepo } from "../../../repo/LeadRepo"
import { IProjectRepo } from "../../../repo/ProjectRepo"
import { GetLeadsForOwnerDTO } from "./GetLeadsForOwnerDTO"

type GetLeadsForOwnerResult = Array<{
    project: Project;
    lead: Lead;
    client: Client;
}>

export class GetLeadsForOwner {
    private leadRepo: ILeadRepo
    private clientRepo: IClientRepo
    private projectRepo: IProjectRepo

    constructor(leadRepo: ILeadRepo, clientRepo: IClientRepo, projectRepo: IProjectRepo) {
        this.leadRepo = leadRepo
        this.clientRepo = clientRepo
        this.projectRepo = projectRepo
    }

    async execute(dto: GetLeadsForOwnerDTO): Promise<GetLeadsForOwnerResult> {
        const referralOwnerId = ReferralOwnerId.create(new UniqueEntityID(dto.referralOwnerId))

        const leads = await this.leadRepo.findLeadsByOwnerId(referralOwnerId)

        const promises = leads.map(async lead => {
            const project = await this.projectRepo.getProjectById(lead.projectId)
            const client = await this.clientRepo.getClientById(lead.ClientId)

            console.log("this is what should be sent ---->", {
                project: project,
                lead: lead,
                client: client
            });

            return {
                project: project,
                lead: lead,
                client: client
            }
        })

        // eslint-disable-next-line no-undef
        const result = Promise.all(promises)

        return result

    }


}

