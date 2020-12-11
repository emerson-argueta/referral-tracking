export interface ClientIdProps {
    id?: string | number
}
export class ClientId {
    props: ClientIdProps;

    private constructor(props: ClientIdProps) {
        this.props = props
    }

    public static create(props: ClientIdProps) {
        const clientId = new ClientId(props)

        return clientId
    }


}