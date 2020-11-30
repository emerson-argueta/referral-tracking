interface ReferralPartnerProps {
    userId: string;
    username: string;
}

export class ReferralPartner {
    props: ReferralPartnerProps

    get userId(): string {
        return this.props.userId
    }

    get username(): string {
        return this.props.username
    }

    private constructor(props: ReferralPartnerProps) {
        this.props = props
    }

    public static create(props: ReferralPartnerProps): ReferralPartner {
        const referralPartner = new ReferralPartner(props)

        return referralPartner

    }

}