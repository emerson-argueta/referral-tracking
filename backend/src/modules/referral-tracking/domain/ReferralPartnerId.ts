export interface ReferralPartnerIdProps {
    id?: string | number
}
export class ReferralPartnerId {
    props: ReferralPartnerIdProps;

    private constructor(props: ReferralPartnerIdProps) {
        this.props = props
    }

    public static create(props: ReferralPartnerIdProps) {
        const referralPartnerId = new ReferralPartnerId(props)

        return referralPartnerId
    }


}