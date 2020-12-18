"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferralPartnerId = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const Entity_1 = require("../../../shared/domain/Entity");
class ReferralPartnerId extends Entity_1.Entity {
    get id() {
        return this._id;
    }
    constructor(id) {
        super(null, id);
    }
    static create(id) {
        return new ReferralPartnerId(id);
    }
}
exports.ReferralPartnerId = ReferralPartnerId;
//# sourceMappingURL=ReferralPartnerId.js.map