"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Proposal = void 0;
var Proposal = /** @class */ (function () {
    function Proposal(props) {
        this.props = props;
    }
    Proposal.create = function (props) {
        var proposal = new Proposal(props);
        return proposal;
    };
    return Proposal;
}());
exports.Proposal = Proposal;
