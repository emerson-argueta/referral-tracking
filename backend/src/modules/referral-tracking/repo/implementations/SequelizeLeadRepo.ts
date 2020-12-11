import { Lead } from "../../domain/Lead";
import { LeadId } from "../../domain/LeadId";
import { LeadMapper } from "../../mapper/LeadMapper";
import { ILeadRepo } from "../LeadRepo";
import { IUniqueLead } from "../UniqueLead";

export class LeadRepo implements ILeadRepo {
    private models: any;

    constructor(models: any) {
        this.models = models

    }

    private createBaseQuery(): any {
        return {
            where: {},
        }
    }

    async findLead(uniqueLeadProps: IUniqueLead): Promise<Lead> {
        const LeadModel = this.models.Lead as any

        const detailsQuery = this.createBaseQuery()
        detailsQuery.where = uniqueLeadProps

        const lead = await LeadModel.findOne(detailsQuery);
        const found = !!lead === true;

        if (!found) throw new Error('Lead not found');

        return LeadMapper.toDomain(lead);

    }
    async save(lead: Lead): Promise<void> {
        const LeadModel = this.models.Lead;
        const exists = await this.exists(lead.leadId);
        const isNewLead = !exists;
        const rawSequelizeLead = await LeadMapper.toPersistence(lead);

        if (isNewLead) {

            try {
                await LeadModel.create(rawSequelizeLead);

            } catch (err) {
                await this.delete(lead.leadId);
                throw new Error(err.toString())
            }

        } else {


            await LeadModel.update(rawSequelizeLead, {
                // To make sure your hooks always run, make sure to include this in
                // the query
                individualHooks: true,
                hooks: true,
                where: { lead_id: lead.leadId }
            });
        }

    }
    public async exists(leadId: LeadId): Promise<boolean> {
        const LeadModel = this.models.Lead;
        const baseQuery = this.createBaseQuery();
        baseQuery.where['id'] = leadId;
        const lead = await LeadModel.findOne(baseQuery);
        const found = !!lead === true;
        return found;
    }
    public delete(leadId: LeadId): Promise<void> {
        const LeadModel = this.models.Lead;
        return LeadModel.destroy({ where: { id: leadId } });
    }
}