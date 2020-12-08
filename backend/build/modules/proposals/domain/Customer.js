"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(props) {
        this.props = props;
    }
    Object.defineProperty(Customer.prototype, "customerName", {
        get: function () {
            return this.props.customerName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "customerContact", {
        get: function () {
            return this.props.customerContact;
        },
        enumerable: false,
        configurable: true
    });
    Customer.create = function (props) {
        var customer = new Customer(props);
        return customer;
    };
    return Customer;
}());
exports.Customer = Customer;
