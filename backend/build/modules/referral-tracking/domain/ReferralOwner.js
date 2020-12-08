"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferralOwner = void 0;
var ReferralOwner = /** @class */ (function () {
    function ReferralOwner(props) {
        this.props = props;
    }
    Object.defineProperty(ReferralOwner.prototype, "userId", {
        get: function () {
            return this.props.userId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReferralOwner.prototype, "username", {
        get: function () {
            return this.props.username;
        },
        enumerable: false,
        configurable: true
    });
    ReferralOwner.create = function (props) {
        var referralOwner = new ReferralOwner(props);
        return referralOwner;
    };
    return ReferralOwner;
}());
exports.ReferralOwner = ReferralOwner;
