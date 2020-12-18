/* eslint-disable @typescript-eslint/interface-name-prefix */
import { ReferralPartner } from "../domain/ReferralPartner";

export interface IReferralPartnerRepo {
    getReferralPartnerByUsername(referralPartnerUsername: string): Promise<ReferralPartner>;
    save(referralPartner: ReferralPartner): Promise<void>;
}