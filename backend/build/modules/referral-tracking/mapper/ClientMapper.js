"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientMapper = void 0;
const Client_1 = require("../domain/Client");
class ClientMapper {
    static toDomain(raw) {
        const clientProps = {
            name: raw.name,
            email: raw.email,
        };
        const client = Client_1.Client.create(clientProps, raw.id);
        return client;
    }
    static toPersistence(client) {
        return {
            name: client.name,
            email: client.email,
            id: client.clientId
        };
    }
    static toDTO(client) {
        return {
            name: client.name,
            email: client.email
        };
    }
}
exports.ClientMapper = ClientMapper;
//# sourceMappingURL=ClientMapper.js.map