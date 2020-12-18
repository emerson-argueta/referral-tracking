"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferralPartner = void 0;
const AggregateRoot_1 = require("../../../shared/domain/AggregateRoot");
const ReferralPartnerId_1 = require("./ReferralPartnerId");
class ReferralPartner extends AggregateRoot_1.AggregateRoot {
    get referralPartnerId() {
        return ReferralPartnerId_1.ReferralPartnerId.create(this._id);
    }
    get username() {
        return this.props.username;
    }
    get leads() {
        return this.props.leads;
    }
    constructor(props, id) {
        super(props, id);
    }
    static create(props, id) {
        const referralPartner = new ReferralPartner(props, id);
        return referralPartner;
    }
}
exports.ReferralPartner = ReferralPartner;
//# sourceMappingURL=ReferralPartner.js.map