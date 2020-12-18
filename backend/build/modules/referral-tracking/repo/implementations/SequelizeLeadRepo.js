"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadRepo = void 0;
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */
const UniqueEntityID_1 = require("../../../../shared/domain/UniqueEntityID");
const ClientId_1 = require("../../domain/ClientId");
const Lead_1 = require("../../domain/Lead");
const ProjectId_1 = require("../../domain/ProjectId");
const ReferralPartnerId_1 = require("../../domain/ReferralPartnerId");
const LeadMapper_1 = require("../../mapper/LeadMapper");
class LeadRepo {
    constructor(models) {
        this.models = models;
    }
    createBaseQuery() {
        return {
            where: {},
        };
    }
    async findLeadsByOwnerId(referralOwnerId) {
        const leadProps = {
            referralPartnerId: ReferralPartnerId_1.ReferralPartnerId.create(new UniqueEntityID_1.UniqueEntityID("RANDOM_UUID_FOR_REFERRAL_PARTNER")),
            referralOwnerId: referralOwnerId,
            clientId: ClientId_1.ClientId.create(new UniqueEntityID_1.UniqueEntityID("RANDOM_UUID_FOR_CLIENT")),
            projectId: ProjectId_1.ProjectId.create(new UniqueEntityID_1.UniqueEntityID("RANDOM_UUID_FOR_PROJECT")),
            dateTime: new Date(),
            status: "open",
        };
        const lead = Lead_1.Lead.create(leadProps);
        return await [lead, lead, lead];
    }
    async findLead(uniqueLeadProps) {
        // const LeadModel = this.models.Lead as any
        // const detailsQuery = this.createBaseQuery()
        // detailsQuery.where = uniqueLeadProps
        // const lead = await LeadModel.findOne(detailsQuery);
        // const found = !!lead === true;
        // if (!found) throw new Error('Lead not found');
        const lead = {
            projectId: uniqueLeadProps.projectId,
            clientId: uniqueLeadProps.clientId,
            referralOwnerId: uniqueLeadProps.referralOwnerId,
            referralPartnerId: uniqueLeadProps.referralPartnerId,
            updatedAt: new Date().toISOString(),
            status: "open"
        };
        return LeadMapper_1.LeadMapper.toDomain(lead);
    }
    async save(lead) {
        return null;
        // const LeadModel = this.models.Lead;
        // const exists = await this.exists(lead.leadId);
        // const isNewLead = !exists;
        // const rawSequelizeLead = await LeadMapper.toPersistence(lead);
        // if (isNewLead) {
        //     try {
        //         await LeadModel.create(rawSequelizeLead);
        //     } catch (err) {
        //         await this.delete(lead.leadId);
        //         throw new Error(err.toString())
        //     }
        // } else {
        //     await LeadModel.update(rawSequelizeLead, {
        //         // To make sure your hooks always run, make sure to include this in
        //         // the query
        //         individualHooks: true,
        //         hooks: true,
        //         where: { lead_id: lead.leadId }
        //     });
        // }
    }
    async exists(leadId) {
        // const LeadModel = this.models.Lead;
        // const baseQuery = this.createBaseQuery();
        // baseQuery.where['id'] = leadId;
        // const lead = await LeadModel.findOne(baseQuery);
        // const found = !!lead === true;
        // return found;
        return await true;
    }
    delete(leadId) {
        return null;
        // const LeadModel = this.models.Lead;
        // return LeadModel.destroy({ where: { id: leadId } });
    }
}
exports.LeadRepo = LeadRepo;
//# sourceMappingURL=SequelizeLeadRepo.js.map