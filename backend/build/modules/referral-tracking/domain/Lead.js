"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lead = void 0;
const AggregateRoot_1 = require("../../../shared/domain/AggregateRoot");
const LeadId_1 = require("./LeadId");
class Lead extends AggregateRoot_1.AggregateRoot {
    get leadId() {
        return LeadId_1.LeadId.create(this._id);
    }
    get ReferraPartnerId() {
        return this.props.referralPartnerId;
    }
    get ReferralOwnerId() {
        return this.props.referralOwnerId;
    }
    get ClientId() {
        return this.props.clientId;
    }
    get projectId() {
        return this.props.projectId;
    }
    get dateTime() {
        return this.props.dateTime;
    }
    get status() {
        return this.props.status;
    }
    constructor(props, id) {
        super(props, id);
    }
    static create(props, id) {
        const lead = new Lead(props, id);
        return lead;
    }
}
exports.Lead = Lead;
//# sourceMappingURL=Lead.js.map