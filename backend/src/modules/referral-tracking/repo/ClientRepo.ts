import { Client } from "../domain/Client";

export interface IClientRepo {
    getClientByEmail(clientEmail: string): Promise<Client>
    save(client: Client): Promise<void>
}