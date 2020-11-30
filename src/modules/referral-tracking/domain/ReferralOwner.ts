
interface ReferralOwnerProps {
    userId: string;
    username: string;
}

export class ReferralOwner {
    props: ReferralOwnerProps

    get userId(): string {
        return this.props.userId
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