import { ReferralPartner } from "../../domain/ReferralPartner";
import { IReferralPartnerRepo } from "../ReferralPartnerRepo";

export class ReferralPartnerRepo implements IReferralPartnerRepo {
    private models: any

    constructor(models: any) {
        this.models = models

    }

    getReferralPartnerById(referralPartnerId: string): Promise<ReferralPartner> {
        throw new Error("Method not implemented.");
    }
}

