"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lead = void 0;
var Lead = /** @class */ (function () {
    function Lead(props) {
        this.props = props;
    }
    Object.defineProperty(Lead.prototype, "dateTime", {
        get: function () {
            return this.props.dateTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lead.prototype, "project", {
        get: function () {
            return this.props.project;
        },
        enumerable: false,
        configurable: true
    });
    Lead.create = function (props) {
        var lead = new Lead(props);
        return lead;
    };
    return Lead;
}());
exports.Lead = Lead;
