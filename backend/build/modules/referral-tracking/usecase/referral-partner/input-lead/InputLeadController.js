"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputLeadController = void 0;
const InputLeadErrors_1 = require("./InputLeadErrors");
class InputLeadController {
    constructor(useCase) {
        this.useCase = useCase;
    }
    async execute(req, res) {
        const dto = {
            referralPartnerId: req.body.referralPartnerId,
            referralOwnerId: req.body.referralOwnerId,
            projectTitle: req.body.projectTitle,
            projectEstimate: req.body.projectEstimate,
            clientName: req.body.clientName,
            clientEmail: req.body.clientEmail
        };
        try {
            await this.useCase.execute(dto);
            return res.sendStatus(200);
        }
        catch (error) {
            switch (error) {
                case typeof InputLeadErrors_1.InputLeadErrors.InputLeadExists:
                    // Conflict--> Indicates that the request could not be processed 
                    // because of conflict in the current state of the resource
                    return res.sendStatus(409);
                case typeof InputLeadErrors_1.InputLeadErrors.InputLeadInvalid:
                    // Bad request Indicates that the request could not be processed because of 
                    //conflict in the current state of the resource, such as an edit conflict 
                    //between multiple simultaneous updates.
                    return res.sendStatus(400);
                default:
                    break;
            }
        }
    }
}
exports.InputLeadController = InputLeadController;
//# sourceMappingURL=InputLeadController.js.map