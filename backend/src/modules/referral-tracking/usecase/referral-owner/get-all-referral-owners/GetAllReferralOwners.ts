import { ReferralOwner } from "../../../domain/ReferralOwner"
import { IReferralOwnerRepo } from "../../../repo/ReferralOwnerRepo"



export class GetAllReferralOwners {
    private referralOwnerRepo: IReferralOwnerRepo

    constructor(referralOwnerRepo: IReferralOwnerRepo) {
        this.referralOwnerRepo = referralOwnerRepo
    }

    async execute(): Promise<Array<ReferralOwner>> {
        const referralOwners = await this.referralOwnerRepo.getAllReferralOwners();
        return referralOwners;
    }

}