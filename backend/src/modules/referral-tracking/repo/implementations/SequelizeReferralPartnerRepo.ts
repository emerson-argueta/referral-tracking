import { ReferralPartner } from "../../domain/ReferralPartner";
import { ReferralPartnerId } from "../../domain/ReferralPartnerId";
import { ClientMapper } from "../../mapper/ClientMapper";
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

    async getReferralPartnerByUsername(ReferralPartnerUsername:string): Promise<ReferralPartner> {
        const ReferralPartnerModel = this.models.ReferralPartner as any
        const detailsQuery = this.createBaseQuery();

        detailsQuery.where['username'] = ReferralPartnerUsername;

        const referralPartner = await ReferralPartnerModel.findOne(detailsQuery);
        const found = !!referralPartner === true;

        if(!found) throw new Error('Referral Partner username not found.');
        return ReferralPartnerMapper.toDomain(referralPartner)
    }
    
    
    async save(ReferralPartner: ReferralPartner): Promise<void> { 
        const ReferralPartnerModel = this.models.ReferralPartner as any;
        const exists = await this.exists(ReferralPartner.referralPartnerId);
        const isNewReferralPartner = !exists;
        const rawSequelizeClient = await ReferralPartnerMapper.toPersistance(ReferralPartner);

        if(isNewReferralPartner) {
            try {
                await ReferralPartnerModel.create(rawSequelizeClient);
            } catch (error) {
                await this.delete(ReferralPartner.referralPartnerId)
                throw new Error(error.toString());
            }
        } else {
            await ReferralPartnerModel.update(rawSequelizeClient, {
                individualHooks: true,
                hooks: true,
                where: {referral_partner_id: ReferralPartner.referralPartnerId}
            });
        }

     }

     private async delete(ReferralPartnerId: ReferralPartnerId){
         const ReferralPartnerModel = this.models.ReferralPartner as any;
         return ReferralPartnerModel.destroy({where: {id: ReferralPartnerId}})
     }


     private async exists(ReferralPartnerId: ReferralPartnerId) {
        const ReferralPartnerModel = this.models.ReferralPartner as any
        const baseQuery = this.createBaseQuery();
        baseQuery.where['id'] = ReferralPartnerId;
        const referralPartner = await ReferralPartnerModel.findOne(baseQuery)
        const found = !!referralPartner === true;
        return found;
     }
}

