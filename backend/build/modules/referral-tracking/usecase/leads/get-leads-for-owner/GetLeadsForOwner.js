"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetLeadsForOwner = void 0;
const UniqueEntityID_1 = require("../../../../../shared/domain/UniqueEntityID");
const ReferralOwnerId_1 = require("../../../domain/ReferralOwnerId");
class GetLeadsForOwner {
    constructor(leadRepo, clientRepo, projectRepo) {
        this.leadRepo = leadRepo;
        this.clientRepo = clientRepo;
        this.projectRepo = projectRepo;
    }
    async execute(dto) {
        const referralOwnerId = ReferralOwnerId_1.ReferralOwnerId.create(new UniqueEntityID_1.UniqueEntityID(dto.referralOwnerId));
        const leads = await this.leadRepo.findLeadsByOwnerId(referralOwnerId);
        const promises = leads.map(async (lead) => {
            const project = await this.projectRepo.getProjectById(lead.projectId);
            const client = await this.clientRepo.getClientById(lead.ClientId);
            console.log("this is what should be sent ---->", {
                project: project,
                lead: lead,
                client: client
            });
            return {
                project: project,
                lead: lead,
                client: client
            };
        });
        const result = Promise.all(promises);
        return result;
    }
}
exports.GetLeadsForOwner = GetLeadsForOwner;
//# sourceMappingURL=GetLeadsForOwner.js.map