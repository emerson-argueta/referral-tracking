"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferralPartner = void 0;
var ReferralPartner = /** @class */ (function () {
    function ReferralPartner(props) {
        this.props = props;
    }
    Object.defineProperty(ReferralPartner.prototype, "userId", {
        get: function () {
            return this.props.userId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReferralPartner.prototype, "username", {
        get: function () {
            return this.props.username;
        },
        enumerable: false,
        configurable: true
    });
    ReferralPartner.create = function (props) {
        var referralPartner = new ReferralPartner(props);
        return referralPartner;
    };
    return ReferralPartner;
}());
exports.ReferralPartner = ReferralPartner;
