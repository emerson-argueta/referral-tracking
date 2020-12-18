"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor(props) {
        this.props = props;
    }
    get customerName() {
        return this.props.customerName;
    }
    get customerContact() {
        return this.props.customerContact;
    }
    static create(props) {
        const customer = new Customer(props);
        return customer;
    }
}
exports.Customer = Customer;
//# sourceMappingURL=Customer.js.map