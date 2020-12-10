import { ReferralPartner } from "../domain/ReferralPartner";

export interface IReferralPartnerRepo {
    getReferralPartnerById(referralPartnerId: string): Promise<ReferralPartner>;
}