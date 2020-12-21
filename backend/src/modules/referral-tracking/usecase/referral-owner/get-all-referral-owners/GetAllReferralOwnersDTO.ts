import { ReferralOwnerDTO } from "../../../dtos/ReferralOwnerDTO";

export interface GetAllReferralOwnersDTO {
    offset?: number;
}

export interface AllReferralOwnersDTO {
    referralowners: Array<ReferralOwnerDTO>;
}