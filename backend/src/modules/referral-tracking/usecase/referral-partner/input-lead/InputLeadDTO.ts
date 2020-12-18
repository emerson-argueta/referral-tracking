import { ReferralOwnerId } from "../../../domain/ReferralOwnerId";
import { ReferralPartnerId } from "../../../domain/ReferralPartnerId";

export interface InputLeadDTO {
    referralPartnerId: ReferralPartnerId;
    referralOwnerId: ReferralOwnerId;
    projectTitle: string;
    projectEstimate: string;
    clientName: string;
    clientEmail: string;
}