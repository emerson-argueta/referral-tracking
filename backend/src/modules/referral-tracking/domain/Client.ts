import { ClientId } from "./ClientId";
import { Project } from "./Project";

export interface ClientProps {
    name: string;
    email: string
    projects?: Array<Project>
}



export class Client {
    private id?: string;
    private props: ClientProps

    get clientId(): ClientId {
        return ClientId.create({ id: this.id })
    }
    get email(): string {
        return this.props.email
    }

    get name(): string {
        return this.props.name
    }


    private constructor(props: ClientProps, id?: string) {
        this.props = props
        this.id = id
    }

    public static create(props: ClientProps, id?: string): Client {
        const client = new Client(props, id)

        return client
    }
}