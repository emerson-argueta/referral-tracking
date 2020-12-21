import express from "express";
import { ReferralOwnerMapper } from "../../../mapper/ReferralOwnerMapper";
import { GetAllReferralOwners } from "./GetAllReferralOwners";
import { AllReferralOwnersDTO } from "./GetAllReferralOwnersDTO";

export class GetAllReferralOwnersController {
    private usecase: GetAllReferralOwners


    constructor(useCase: GetAllReferralOwners) {
        this.usecase = useCase;
    }

    async execute(req: express.Request, res: express.Response): Promise<any> {
        try {
            const result = await this.usecase.execute()

            const mappedReferralOwners = result.map(r => {
                return ReferralOwnerMapper.toDTO(r)
            })
            const resBody: AllReferralOwnersDTO = {
                referralowners: mappedReferralOwners
            }

            res.type('application/json')
            return res.status(200).json(resBody)
        } catch (error) {
            return res.sendStatus(500)
        }

    }
}