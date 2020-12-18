"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientRepo = void 0;
const ClientMapper_1 = require("../../mapper/ClientMapper");
class ClientRepo {
    constructor(models) {
        this.models = models;
    }
    createBaseQuery() {
        return {
            where: {},
        };
    }
    async getClientByEmail(clientEmail) {
        const ClientModel = this.models.Client;
        const detailsQuery = this.createBaseQuery();
        detailsQuery.where['email'] = clientEmail;
        const client = await ClientModel.findOne(detailsQuery);
        const found = !!client === true;
        if (!found)
            throw new Error('Client not found');
        return ClientMapper_1.ClientMapper.toDomain(client);
    }
    async save(client) {
        const ClientModel = this.models.Client;
        const exists = await this.exists(client.clientId);
        const isNewClient = !exists;
        const rawSequelizeClient = await ClientMapper_1.ClientMapper.toPersistence(client);
        if (isNewClient) {
            try {
                await ClientModel.create(rawSequelizeClient);
            }
            catch (err) {
                await this.delete(client.clientId);
                throw new Error(err.toString());
            }
        }
        else {
            await ClientModel.update(rawSequelizeClient, {
                // To make sure your hooks always run, make sure to include this in
                // the query
                individualHooks: true,
                hooks: true,
                where: { client_id: client.clientId }
            });
        }
    }
    async exists(clientId) {
        const ClientModel = this.models.Client;
        const baseQuery = this.createBaseQuery();
        baseQuery.where['id'] = clientId;
        const client = await ClientModel.findOne(baseQuery);
        const found = !!client === true;
        return found;
    }
    delete(clientId) {
        const ClientModel = this.models.Client;
        return ClientModel.destroy({ where: { id: clientId } });
    }
}
exports.ClientRepo = ClientRepo;
//# sourceMappingURL=SequelizeClientRepo.js.map