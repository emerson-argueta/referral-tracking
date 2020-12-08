import express from 'express'
import { DecodedExpressRequest } from '../../../../users/infrastructure/http/models/DecodedExpressRequest';
import { InputLead } from './InputLead';
import { InputLeadDTO } from './InputLeadDTO';
import { InputLeadErrors } from './InputLeadErrors';


export class InputLeadController {
    private useCase: InputLead;

    constructor(useCase: InputLead) {
        this.useCase = useCase;
    }

    async execute(req: DecodedExpressRequest, res: express.Response): Promise<any> {
        const referralPartnerId = req.decoded.userId

        const dto: InputLeadDTO = {
            referralPartnerId: req.body.referralPartnerId,
            referralOwnerId: req.body.referralOwnerId,
            projectTitle: req.body.projectTitle,
            projectEstimate: req.body.projectEstimate,
            clientName: req.body.clientName,
            clientEmail: req.body.clientEmail

        }

        try {
            const result = await this.useCase.execute(dto);
            return res.sendStatus(200);
        } catch (error) {
            switch (error) {
                case typeof InputLeadErrors.InputLeadExists:
                    // Conflict--> Indicates that the request could not be processed 
                    // because of conflict in the current state of the resource
                    return res.sendStatus(409)
                case typeof InputLeadErrors.InputLeadInvalid:
                    // Bad request Indicates that the request could not be processed because of 
                    //conflict in the current state of the resource, such as an edit conflict 
                    //between multiple simultaneous updates.
                    return res.sendStatus(400)
                default:
                    break;
            }
        }

    }
}