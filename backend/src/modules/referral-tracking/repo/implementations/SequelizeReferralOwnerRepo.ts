import { ReferralOwner, ReferralOwnerProps } from "../../domain/ReferralOwner";
import { IReferralOwnerRepo } from "../ReferralOwnerRepo";

export class ReferralOwnerRepo implements IReferralOwnerRepo {
    private models: any;

    constructor(models: any) {
        this.models = models
    }

    async getAllReferralOwners(): Promise<Array<ReferralOwner>> {
        const mockProps1: ReferralOwnerProps = {
            username: 'TEST_1'
        }

        const referralOwner1 = ReferralOwner.create(mockProps1)
        const mockProps2: ReferralOwnerProps = {
            username: 'TEST_2'
        }
        const referralOwner2 = ReferralOwner.create(mockProps2)
        const mockProps3: ReferralOwnerProps = {
            username: 'TEST_3'
        }
        const referralOwner3 = ReferralOwner.create(mockProps3)

        return await [referralOwner1, referralOwner2, referralOwner3]
    }

    private createBaseQuery(): any {
        return {
            where: {},
        }
    }
}