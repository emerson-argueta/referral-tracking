"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadRepo = void 0;
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
    async findLead(uniqueLeadProps) {
        const LeadModel = this.models.Lead;
        const detailsQuery = this.createBaseQuery();
        detailsQuery.where = uniqueLeadProps;
        const lead = await LeadModel.findOne(detailsQuery);
        const found = !!lead === true;
        if (!found)
            throw new Error('Lead not found');
        return LeadMapper_1.LeadMapper.toDomain(lead);
    }
    async save(lead) {
        const LeadModel = this.models.Lead;
        const exists = await this.exists(lead.leadId);
        const isNewLead = !exists;
        const rawSequelizeLead = await LeadMapper_1.LeadMapper.toPersistence(lead);
        if (isNewLead) {
            try {
                await LeadModel.create(rawSequelizeLead);
            }
            catch (err) {
                await this.delete(lead.leadId);
                throw new Error(err.toString());
            }
        }
        else {
            await LeadModel.update(rawSequelizeLead, {
                // To make sure your hooks always run, make sure to include this in
                // the query
                individualHooks: true,
                hooks: true,
                where: { lead_id: lead.leadId }
            });
        }
    }
    async exists(leadId) {
        const LeadModel = this.models.Lead;
        const baseQuery = this.createBaseQuery();
        baseQuery.where['id'] = leadId;
        const lead = await LeadModel.findOne(baseQuery);
        const found = !!lead === true;
        return found;
    }
    delete(leadId) {
        const LeadModel = this.models.Lead;
        return LeadModel.destroy({ where: { id: leadId } });
    }
}
exports.LeadRepo = LeadRepo;
//# sourceMappingURL=SequelizeLeadRepo.js.map