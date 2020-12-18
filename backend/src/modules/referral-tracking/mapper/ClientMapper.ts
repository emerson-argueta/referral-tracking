import { Client, ClientProps } from "../domain/Client";
import { ClientDTO } from "../dtos/ClientDTO";

export class ClientMapper {
    public static toDomain(raw: any): Client {
        const clientProps: ClientProps = {
            name: raw.name,
            email: raw.email,
        }
        const client = Client.create(clientProps, raw.id)
        return client
    }
    public static toPersistence(client: Client): any {
        return {
            name: client.name,
            email: client.email,
            id: client.clientId
        }
    }
    public static toDTO(client: Client): ClientDTO {
        return {
            name: client.name,
            email: client.email
        }
    }
}