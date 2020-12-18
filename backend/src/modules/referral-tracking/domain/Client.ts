import { AggregateRoot } from "../../../shared/domain/AggregateRoot";
import { UniqueEntityID } from "../../../shared/domain/UniqueEntityID";
import { ClientId } from "./ClientId";
import { Project } from "./Project";

export interface ClientProps {
    name: string;
    email: string;
    projects?: Array<Project>;
}



export class Client extends AggregateRoot<ClientProps>{

    get clientId(): ClientId {
        return ClientId.create(this._id)
    }
    get email(): string {
        return this.props.email
    }

    get name(): string {
        return this.props.name
    }


    private constructor(props: ClientProps, id?: UniqueEntityID) {
        super(props, id)
    }

    public static create(props: ClientProps, id?: UniqueEntityID): Client {
        const client = new Client(props, id)

        return client
    }
}