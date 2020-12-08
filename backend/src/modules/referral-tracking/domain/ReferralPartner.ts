interface ReferralPartnerProps {
    id: string;
    username: string;
}

export class ReferralPartner {
    props: ReferralPartnerProps

    get id(): string {
        return this.props.id
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