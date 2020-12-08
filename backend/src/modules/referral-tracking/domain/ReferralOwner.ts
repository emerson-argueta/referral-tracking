
interface ReferralOwnerProps {
    id: string;
    username: string;
}

export class ReferralOwner {
    props: ReferralOwnerProps

    get id(): string {
        return this.props.id
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