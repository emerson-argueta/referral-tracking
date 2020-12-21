import { AggregateRoot } from "../../../shared/domain/AggregateRoot";
import { UniqueEntityID } from "../../../shared/domain/UniqueEntityID";
import { Lead } from "./Lead";
import { ReferralOwnerId } from "./ReferralOwnerId"

export interface ReferralOwnerProps {
    username: string;
    leads?: Array<Lead>;
}

export class ReferralOwner extends AggregateRoot<ReferralOwnerProps>{

    get referralOwnerId(): ReferralOwnerId {
        return ReferralOwnerId.create(this._id)
    }

    get username(): string {
        return this.props.username
    }

    private constructor(props: ReferralOwnerProps, id?: UniqueEntityID) {
        super(props, id)
    }

    public static create(props: ReferralOwnerProps, id?: UniqueEntityID): ReferralOwner {
        const referralOwner = new ReferralOwner(props, id)

        return referralOwner

    }

}