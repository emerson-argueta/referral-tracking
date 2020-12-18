"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferralOwner = void 0;
const AggregateRoot_1 = require("../../../shared/domain/AggregateRoot");
const ReferralOwnerId_1 = require("./ReferralOwnerId");
class ReferralOwner extends AggregateRoot_1.AggregateRoot {
    get referralOwnerId() {
        return ReferralOwnerId_1.ReferralOwnerId.create(this._id);
    }
    get username() {
        return this.props.username;
    }
    constructor(props, id) {
        super(props, id);
    }
    static create(props, id) {
        const referralOwner = new ReferralOwner(props, id);
        return referralOwner;
    }
}
exports.ReferralOwner = ReferralOwner;
//# sourceMappingURL=ReferralOwner.js.map