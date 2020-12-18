import { ReferralPartner, ReferralPartnerProps } from "../domain/ReferralPartner"

export class ReferralPartnerMapper {
    public static toDomain(raw: any): ReferralPartner {
        const referralPartnerProps: ReferralPartnerProps = {
            username: raw.username
        }
        const referralPartner = ReferralPartner.create(referralPartnerProps, raw.id)
        return referralPartner
    }

    public static toPersistance(ReferralPartner: ReferralPartner): any {
        return {
            username: ReferralPartner.username,
            id: ReferralPartner.referralPartnerId
        }
    }
}