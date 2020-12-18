"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferralPartnerMapper = void 0;
const ReferralPartner_1 = require("../domain/ReferralPartner");
class ReferralPartnerMapper {
    static toDomain(raw) {
        const referralPartnerProps = {
            username: raw.username
        };
        const referralPartner = ReferralPartner_1.ReferralPartner.create(referralPartnerProps, raw.id);
        return referralPartner;
    }
    static toPersistance(ReferralPartner) {
        return {
            username: ReferralPartner.username,
            id: ReferralPartner.referralPartnerId
        };
    }
}
exports.ReferralPartnerMapper = ReferralPartnerMapper;
//# sourceMappingURL=ReferralPartnerMapper.js.map