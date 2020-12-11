import { ClientId } from "./ClientId";
import { Project } from "./Project";

export interface ClientProps {
    name: string;
    email: string
    projects: Array<Project>
}



export class Client {
    id?: string;
    props: ClientProps

    get clientId(): ClientId {
        return ClientId.create({ id: this.id })
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