"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferralPartnerRepo = void 0;
const ReferralPartnerMapper_1 = require("../../mapper/ReferralPartnerMapper");
class ReferralPartnerRepo {
    constructor(models) {
        this.models = models;
    }
    createBaseQuery() {
        return {
            where: {},
        };
    }
    async getReferralPartnerByUsername(ReferralPartnerUsername) {
        const ReferralPartnerModel = this.models.ReferralPartner;
        const detailsQuery = this.createBaseQuery();
        detailsQuery.where['username'] = ReferralPartnerUsername;
        const referralPartner = await ReferralPartnerModel.findOne(detailsQuery);
        const found = !!referralPartner === true;
        if (!found)
            throw new Error('Referral Partner found.');
        return ReferralPartnerMapper_1.ReferralPartnerMapper.toDomain(referralPartner);
    }
    async save(ReferralPartner) {
        const ReferralPartnerModel = this.models.ReferralPartner;
        const exists = await this.exists(ReferralPartner.referralPartnerId);
        const isNewReferralPartner = !exists;
        const rawSequelizeClient = await ReferralPartnerMapper_1.ReferralPartnerMapper.toPersistance(ReferralPartner);
        if (isNewReferralPartner) {
            try {
                await ReferralPartnerModel.create(rawSequelizeClient);
            }
            catch (error) {
                await this.delete(ReferralPartner.referralPartnerId);
                throw new Error(error.toString());
            }
        }
        else {
            await ReferralPartnerModel.update(rawSequelizeClient, {
                individualHooks: true,
                hooks: true,
                where: { referral_partner_id: ReferralPartner.referralPartnerId }
            });
        }
    }
    async delete(ReferralPartnerId) {
        const ReferralPartnerModel = this.models.ReferralPartner;
        return ReferralPartnerModel.destroy({ where: { id: ReferralPartnerId } });
    }
    async exists(ReferralPartnerId) {
        const ReferralPartnerModel = this.models.ReferralPartner;
        const baseQuery = this.createBaseQuery();
        baseQuery.where['id'] = ReferralPartnerId;
        const referralPartner = await ReferralPartnerModel.findOne(baseQuery);
        const found = !!referralPartner === true;
        return found;
    }
}
exports.ReferralPartnerRepo = ReferralPartnerRepo;
//# sourceMappingURL=SequelizeReferralPartnerRepo.js.map