export interface ClientProps {
    clientId?: string;
    name: string;
    email: string
}



export class Client {
    props: ClientProps


    get email(): string {
        return this.props.email
    }


    name(): string {
        return this.props.name
    }


    private constructor(props: ClientProps) {
        this.props = props
    }

    public static create(props: ClientProps): Client {
        const client = new Client(props)

        return client
    }
}