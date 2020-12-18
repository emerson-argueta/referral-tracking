/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReferralPartner } from "../../domain/ReferralPartner";
import { ReferralPartnerId } from "../../domain/ReferralPartnerId";
import { ReferralPartnerMapper } from "../../mapper/ReferralPartnerMapper";
import { IReferralPartnerRepo } from "../ReferralPartnerRepo";

export class ReferralPartnerRepo implements IReferralPartnerRepo {
    private models: any

    constructor(models: any) {
        this.models = models

    }

    private createBaseQuery(): any {
        return {
            where: {},
        }
    }

    async getReferralPartnerByUsername(ReferralPartnerUsername: string): Promise<ReferralPartner> {
        const partner = {
            username: 'partnerUserName'
        }

        // const ReferralPartnerModel = this.models.ReferralPartner as any
        // const detailsQuery = this.createBaseQuery();

        // detailsQuery.where['username'] = ReferralPartnerUsername;

        // const referralPartner = await ReferralPartnerModel.findOne(detailsQuery);
        // const found = !!referralPartner === true;

        // if (!found) throw new Error('Referral Partner found.');
        // return ReferralPartnerMapper.toDomain(referralPartner)
    }


    async save(ReferralPartner: ReferralPartner): Promise<void> {
        return null
        // const ReferralPartnerModel = this.models.ReferralPartner as any;
        // const exists = await this.exists(ReferralPartner.referralPartnerId);
        // const isNewReferralPartner = !exists;
        // const rawSequelizeClient = await ReferralPartnerMapper.toPersistance(ReferralPartner);

        // if (isNewReferralPartner) {
        //     try {
        //         await ReferralPartnerModel.create(rawSequelizeClient);
        //     } catch (error) {
        //         await this.delete(ReferralPartner.referralPartnerId)
        //         throw new Error(error.toString());
        //     }
        // } else {
        //     await ReferralPartnerModel.update(rawSequelizeClient, {
        //         individualHooks: true,
        //         hooks: true,
        //         where: { referral_partner_id: ReferralPartner.referralPartnerId }
        //     });
        // }

    }

    private async delete(ReferralPartnerId: ReferralPartnerId): Promise<void> {
        // const ReferralPartnerModel = this.models.ReferralPartner as any;
        // return ReferralPartnerModel.destroy({ where: { id: ReferralPartnerId } })

        return null
    }


    private async exists(ReferralPartnerId: ReferralPartnerId): Promise<boolean> {
        // const ReferralPartnerModel = this.models.ReferralPartner as any
        // const baseQuery = this.createBaseQuery();
        // baseQuery.where['id'] = ReferralPartnerId;
        // const referralPartner = await ReferralPartnerModel.findOne(baseQuery)
        // const found = !!referralPartner === true;
        // return found;

        return await true
    }
}

