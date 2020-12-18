"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Proposal = void 0;
class Proposal {
    constructor(props) {
        this.props = props;
    }
    static create(props) {
        const proposal = new Proposal(props);
        return proposal;
    }
}
exports.Proposal = Proposal;
//# sourceMappingURL=Proposal.js.map