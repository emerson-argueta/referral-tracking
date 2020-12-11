import { Lead } from "./Lead";
import { ReferralOwnerId } from "./ReferralOwnerId"

interface ReferralOwnerProps {
    username: string;
    leads: Array<Lead>
}

export class ReferralOwner {
    id?: string;
    props: ReferralOwnerProps

    get referralOwnerId(): ReferralOwnerId {
        return ReferralOwnerId.create({ id: this.id })
    }

    get username(): string {
        return this.props.username
    }

    private constructor(props: ReferralOwnerProps) {
        this.props = props
    }

    public static create(props: ReferralOwnerProps): ReferralOwner {
        const referralOwner = new ReferralOwner(props)

        return referralOwner

    }

}