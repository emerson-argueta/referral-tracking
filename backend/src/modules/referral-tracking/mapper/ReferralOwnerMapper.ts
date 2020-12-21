import { ReferralOwner } from "../domain/ReferralOwner";
import { ReferralOwnerDTO } from "../dtos/ReferralOwnerDTO";

export class ReferralOwnerMapper {
    public static toDTO(referralOwner: ReferralOwner): ReferralOwnerDTO {
        return {
            username: referralOwner.username,
        }
    }
}