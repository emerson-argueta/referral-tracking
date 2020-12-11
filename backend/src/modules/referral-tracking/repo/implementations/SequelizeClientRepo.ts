import sequelize, { BuildOptions, Model } from "sequelize";
import { TModels } from "../../../../shared/infrastructure/database/sequelize/models";
import { Client } from "../../domain/Client";
import { ClientId } from "../../domain/ClientId";
import { ClientMapper } from "../../mapper/ClientMapper";
import { IClientRepo } from "../ClientRepo";

export class ClientRepo implements IClientRepo {
    private models: TModels

    constructor(models: TModels) {
        this.models = models

    }
    private createBaseQuery(): any {
        return {
            where: {},
        }
    }

    async getClientByEmail(clientEmail: string): Promise<Client> {
        const ClientModel = this.models.Client as any

        const detailsQuery = this.createBaseQuery();

        detailsQuery.where['email'] = clientEmail;

        const client = await ClientModel.findOne(detailsQuery);
        const found = !!client === true;
        if (!found) throw new Error('Comment not found');
        return ClientMapper.toDomain(client);
    }
    async save(client: Client): Promise<void> {
        const ClientModel = this.models.Client as any;
        const exists = await this.exists(client.clientId);
        const isNewClient = !exists;
        const rawSequelizeClient = await ClientMapper.toPersistence(client);

        if (isNewClient) {

            try {
                await ClientModel.create(rawSequelizeClient);

            } catch (err) {
                await this.delete(client.clientId);
                throw new Error(err.toString())
            }

        } else {


            await ClientModel.update(rawSequelizeClient, {
                // To make sure your hooks always run, make sure to include this in
                // the query
                individualHooks: true,
                hooks: true,
                where: { client_id: client.clientId }
            });
        }

    }
    public async exists(clientId: ClientId): Promise<boolean> {
        const ClientModel = this.models.Client as any;
        const baseQuery = this.createBaseQuery();
        baseQuery.where['id'] = clientId;
        const client = await ClientModel.findOne(baseQuery);
        const found = !!client === true;
        return found;
    }
    public delete(clientId: ClientId): Promise<void> {
        const ClientModel = this.models.Client as any;
        return ClientModel.destroy({ where: { id: clientId } });
    }
}