import { ReferralPartnerId } from "./ReferralPartnerId"

interface ReferralPartnerProps {
    username: string;
}

export class ReferralPartner {
    id?: string;
    props: ReferralPartnerProps

    get referralPartnerId(): ReferralPartnerId {
        return ReferralPartnerId.create({ id: this.id })
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