import express from "express";
import Lead from "../../../../../shared/infrastructure/database/sequelize/models/Lead";
import { ClientMapper } from "../../../mapper/ClientMapper";
import { LeadMapper } from "../../../mapper/LeadMapper";
import { ProjectMapper } from "../../../mapper/ProjectMapper";
import { GetLeadsForOwner } from "./GetLeadsForOwner";
import { GetLeadsForOwnerDTO } from "./GetLeadsForOwnerDTO";
import { GetLeadsForOwnerErrors } from "./GetLeadsForOwnerErrors";


export class GetLeadsForOwnerController {
    private useCase: GetLeadsForOwner;

    constructor(useCase: GetLeadsForOwner) {
        this.useCase = useCase;
    }

    async execute(req: express.Request, res: express.Response): Promise<any> {
        const dto: GetLeadsForOwnerDTO = {
            referralOwnerId: req.query.referralOwnerId.toString(),
        }


        try {
            console.log("this is the dto", dto)
            const result = await this.useCase.execute(dto);
            res.type('application/json')
            return res.status(200).json(result.map(r => {
                return {
                    lead: LeadMapper.toDTO(r.lead),
                    project: ProjectMapper.toDTO(r.project),
                    client: ClientMapper.toDTO(r.client)
                }

            }))

            //return res.sendStatus(200);
        } catch (error) {
            switch (error) {
                case typeof GetLeadsForOwnerErrors.ReferralOwnerDoesNotExist:
                    // Conflict--> Indicates that the request could not be processed 
                    // because of conflict in the current state of the resource
                    return res.sendStatus(409)
                default:
                    break;
            }
        }



    }
}