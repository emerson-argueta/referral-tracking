export interface ClientProps {
    id?: string;
    name: string;
    email: string
}



export class Client {
    props: ClientProps


    get id(): string {
        return this.props.id || ""
    }
    get email(): string {
        return this.props.email
    }


    get name(): string {
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