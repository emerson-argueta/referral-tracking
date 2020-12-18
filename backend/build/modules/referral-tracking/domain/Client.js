"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const AggregateRoot_1 = require("../../../shared/domain/AggregateRoot");
const ClientId_1 = require("./ClientId");
class Client extends AggregateRoot_1.AggregateRoot {
    get clientId() {
        return ClientId_1.ClientId.create(this._id);
    }
    get email() {
        return this.props.email;
    }
    get name() {
        return this.props.name;
    }
    constructor(props, id) {
        super(props, id);
    }
    static create(props, id) {
        const client = new Client(props, id);
        return client;
    }
}
exports.Client = Client;
//# sourceMappingURL=Client.js.map