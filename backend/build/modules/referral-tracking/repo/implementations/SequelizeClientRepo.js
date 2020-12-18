"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientRepo = void 0;
// import { TModels } from "../../../../shared/infrastructure/database/sequelize/models";
const Client_1 = require("../../domain/Client");
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
        // const ClientModel = this.models.Client as any
        // const detailsQuery = this.createBaseQuery();
        // detailsQuery.where['email'] = clientEmail;
        // const client = await ClientModel.findOne(detailsQuery);
        // const found = !!client === true;
        // if (!found) throw new Error('Client not found');
        const client = {
            name: "test",
            email: clientEmail,
        };
        return ClientMapper_1.ClientMapper.toDomain(client);
    }
    async save(client) {
        return null;
        // const ClientModel = this.models.Client as any;
        // const exists = await this.exists(client.clientId);
        // const isNewClient = !exists;
        // const rawSequelizeClient = await ClientMapper.toPersistence(client);
        // if (isNewClient) {
        //     try {
        //         await ClientModel.create(rawSequelizeClient);
        //     } catch (err) {
        //         await this.delete(client.clientId);
        //         throw new Error(err.toString())
        //     }
        // } else {
        //     await ClientModel.update(rawSequelizeClient, {
        //         // To make sure your hooks always run, make sure to include this in
        //         // the query
        //         individualHooks: true,
        //         hooks: true,
        //         where: { client_id: client.clientId }
        //     });
        // }
    }
    async getClientById(clientId) {
        const clientProps = {
            name: "Peter Parker",
            email: "yourfriendlyneighborhoodspiderman@yourmom.com"
        };
        const client = Client_1.Client.create(clientProps);
        return await client;
    }
    async exists(clientId) {
        // const ClientModel = this.models.Client as any;
        // const baseQuery = this.createBaseQuery();
        // baseQuery.where['id'] = clientId;
        // const client = await ClientModel.findOne(baseQuery);
        // const found = !!client === true;
        // return found;
        return await true;
    }
    delete(clientId) {
        // const ClientModel = this.models.Client as any;
        // return ClientModel.destroy({ where: { id: clientId } });
        return null;
    }
}
exports.ClientRepo = ClientRepo;
//# sourceMappingURL=SequelizeClientRepo.js.map