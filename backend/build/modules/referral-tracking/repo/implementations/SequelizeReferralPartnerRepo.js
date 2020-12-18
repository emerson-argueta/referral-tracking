"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferralPartnerRepo = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */
const UniqueEntityID_1 = require("../../../../shared/domain/UniqueEntityID");
const ClientId_1 = require("../../domain/ClientId");
const Lead_1 = require("../../domain/Lead");
const ProjectId_1 = require("../../domain/ProjectId");
const ReferralOwnerId_1 = require("../../domain/ReferralOwnerId");
const ReferralPartner_1 = require("../../domain/ReferralPartner");
const ReferralPartnerId_1 = require("../../domain/ReferralPartnerId");
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
        const leadProps = {
            referralPartnerId: ReferralPartnerId_1.ReferralPartnerId.create(new UniqueEntityID_1.UniqueEntityID("RANDOM_UUID_FOR_REFERRAL_PARTNER")),
            referralOwnerId: ReferralOwnerId_1.ReferralOwnerId.create(new UniqueEntityID_1.UniqueEntityID("RANDOM_UUID_FOR_REFERRAL_OWNER")),
            clientId: ClientId_1.ClientId.create(new UniqueEntityID_1.UniqueEntityID("RANDOM_UUID_FOR_CLIENT")),
            projectId: ProjectId_1.ProjectId.create(new UniqueEntityID_1.UniqueEntityID("RANDOM_UUID_FOR_PROJECT")),
            dateTime: new Date(),
            status: "open",
        };
        const lead = Lead_1.Lead.create(leadProps);
        const referralPartnerProps = {
            username: 'partnerUserName',
            leads: [lead, lead, lead]
        };
        const referralPartner = ReferralPartner_1.ReferralPartner.create(referralPartnerProps);
        // const ReferralPartnerModel = this.models.ReferralPartner as any
        // const detailsQuery = this.createBaseQuery();
        // detailsQuery.where['username'] = ReferralPartnerUsername;
        // const referralPartner = await ReferralPartnerModel.findOne(detailsQuery);
        // const found = !!referralPartner === true;
        // if (!found) throw new Error('Referral Partner found.');
        // return ReferralPartnerMapper.toDomain(referralPartner)
        return await referralPartner;
    }
    async save(ReferralPartner) {
        return null;
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
    async delete(ReferralPartnerId) {
        // const ReferralPartnerModel = this.models.ReferralPartner as any;
        // return ReferralPartnerModel.destroy({ where: { id: ReferralPartnerId } })
        return null;
    }
    async exists(ReferralPartnerId) {
        // const ReferralPartnerModel = this.models.ReferralPartner as any
        // const baseQuery = this.createBaseQuery();
        // baseQuery.where['id'] = ReferralPartnerId;
        // const referralPartner = await ReferralPartnerModel.findOne(baseQuery)
        // const found = !!referralPartner === true;
        // return found;
        return await true;
    }
}
exports.ReferralPartnerRepo = ReferralPartnerRepo;
//# sourceMappingURL=SequelizeReferralPartnerRepo.js.map