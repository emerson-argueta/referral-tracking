/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { UniqueEntityID } from "../../../../shared/domain/UniqueEntityID";
import { ClientId } from "../../domain/ClientId";
import { Lead, LeadProps } from "../../domain/Lead";
import { LeadId } from "../../domain/LeadId";
import { ProjectId } from "../../domain/ProjectId";
import { ReferralOwnerId } from "../../domain/ReferralOwnerId";
import { ReferralPartnerId } from "../../domain/ReferralPartnerId";
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
    async findLeadsByOwnerUsername(referralOwnerUsername: string): Promise<Array<Lead>> {

        const leadProps: LeadProps = {
            referralPartnerId: ReferralPartnerId.create(new UniqueEntityID("RANDOM_UUID_FOR_REFERRAL_PARTNER")),
            referralOwnerId: ReferralOwnerId.create(new UniqueEntityID("RANDOM_UUID_FOR_REFERRAL_OWNER")),
            clientId: ClientId.create(new UniqueEntityID("RANDOM_UUID_FOR_CLIENT")),
            projectId: ProjectId.create(new UniqueEntityID("RANDOM_UUID_FOR_PROJECT")),
            dateTime: new Date(),
            status: "open",
        }
        const lead = Lead.create(leadProps)
        return await [lead, lead, lead]
    }

    async findLeadsByPartnerUsername(referralPartnerUsername: string): Promise<Array<Lead>> {

        const leadProps: LeadProps = {
            referralPartnerId: ReferralPartnerId.create(new UniqueEntityID("RANDOM_UUID_FOR_REFERRAL_PARTNER")),
            referralOwnerId: ReferralOwnerId.create(new UniqueEntityID("RANDOM_UUID_FOR_REFERRAL_OWNER")),
            clientId: ClientId.create(new UniqueEntityID("RANDOM_UUID_FOR_CLIENT")),
            projectId: ProjectId.create(new UniqueEntityID("RANDOM_UUID_FOR_PROJECT")),
            dateTime: new Date(),
            status: "open",
        }
        const lead = Lead.create(leadProps)
        return await [lead, lead, lead]
    }

    
    async findLead(uniqueLeadProps: IUniqueLead): Promise<Lead> {
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
        }

        return LeadMapper.toDomain(lead);

    }
    async save(lead: Lead): Promise<void> {
        return null
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

    private async exists(leadId: LeadId): Promise<boolean> {
        // const LeadModel = this.models.Lead;
        // const baseQuery = this.createBaseQuery();
        // baseQuery.where['id'] = leadId;
        // const lead = await LeadModel.findOne(baseQuery);
        // const found = !!lead === true;
        // return found;
        return await true
    }
    private delete(leadId: LeadId): Promise<void> {
        return null
        // const LeadModel = this.models.Lead;
        // return LeadModel.destroy({ where: { id: leadId } });
    }
}