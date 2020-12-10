import { Client } from "../domain/Client";

export interface IClientRepo {
    getClientByEmail(clientEmail: string): Promise<Client>
}