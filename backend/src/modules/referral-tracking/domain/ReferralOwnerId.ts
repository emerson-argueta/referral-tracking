export interface ReferralOwnerIdProps {
    id?: string | number
}

export class ReferralOwnerId {
    props: ReferralOwnerIdProps;

    private constructor(props: ReferralOwnerIdProps) {
        this.props = props
    }

    public static create(props: ReferralOwnerIdProps) {
        const referralOwnerId = new ReferralOwnerId(props)

        return referralOwnerId
    }

}