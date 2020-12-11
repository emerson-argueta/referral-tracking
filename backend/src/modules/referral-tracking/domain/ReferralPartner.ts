import { Lead } from "./Lead";
import { ReferralPartnerId } from "./ReferralPartnerId"

export interface ReferralPartnerProps {
    username: string;
    leads?: Array<Lead>
}

export class ReferralPartner {
    private id?: string;
    private props: ReferralPartnerProps

    get referralPartnerId(): ReferralPartnerId {
        return ReferralPartnerId.create({ id: this.id })
    }

    get username(): string {
        return this.props.username
    }


    public get leads(): Array<Lead> | undefined {
        return this.props.leads
    }

    private constructor(props: ReferralPartnerProps, id?: string) {
        this.props = props
        this.id = id
    }

    public static create(props: ReferralPartnerProps, id?: string): ReferralPartner {
        const referralPartner = new ReferralPartner(props)

        return referralPartner

    }

}