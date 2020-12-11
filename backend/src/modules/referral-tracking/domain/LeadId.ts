export interface LeadIdProps {
    id?: string | number
}
export class LeadId {
    props: LeadIdProps;

    private constructor(props: LeadIdProps) {
        this.props = props
    }

    public static create(props: LeadIdProps) {
        const leadId = new LeadId(props)

        return leadId
    }


}