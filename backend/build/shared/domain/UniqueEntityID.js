"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniqueEntityID = void 0;
const uuid_1 = require("uuid");
const Identifier_1 = require("./Identifier");
class UniqueEntityID extends Identifier_1.Identifier {
    constructor(id) {
        super(id ? id : uuid_1.v4());
    }
}
exports.UniqueEntityID = UniqueEntityID;
//# sourceMappingURL=UniqueEntityID.js.map