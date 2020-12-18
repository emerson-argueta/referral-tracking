"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientId = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const Entity_1 = require("../../../shared/domain/Entity");
class ClientId extends Entity_1.Entity {
    get id() {
        return this._id;
    }
    constructor(id) {
        super(null, id);
    }
    static create(id) {
        return new ClientId(id);
    }
}
exports.ClientId = ClientId;
//# sourceMappingURL=ClientId.js.map