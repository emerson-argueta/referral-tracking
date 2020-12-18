/* eslint-disable @typescript-eslint/interface-name-prefix */
import { Client } from "../domain/Client";
import { ClientId } from "../domain/ClientId";

export interface IClientRepo {
    getClientByEmail(clientEmail: string): Promise<Client>;
    save(client: Client): Promise<void>;
    getClientById(clientId: ClientId): Promise<Client>;
}