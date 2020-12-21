import express from "express";
import { Client } from "../../../../../shared/infrastructure/database/sequelize/models/Client";
import { DecodedExpressRequest } from "../../../../users/infrastructure/http/models/DecodedExpressRequest";
import { ClientMapper } from "../../../mapper/ClientMapper";
import { LeadMapper } from "../../../mapper/LeadMapper";
import { ProjectMapper } from "../../../mapper/ProjectMapper";
import { GetLeadsForPartner } from "./GetLeadsforPartner";
import { GetLeadsForPartnerDTO, PartnerLeadsDTO } from "./GetLeadsForPartnerDTO";
import { GetLeadsForPartnerErrors } from "./GetLeadsForPartnerErrors";


export class GetLeadsForPartnerController {
    private useCase: GetLeadsForPartner;

    constructor(useCase: GetLeadsForPartner) {
        this.useCase = useCase;
    }

    async execute(req: express.Request, res: express.Response): Promise<any> {
        const dto: GetLeadsForPartnerDTO = {
            referralPartnerUsername: req.query.referralPartnerUsername.toString(),
        }

        try {
            console.log("Here is the Referral Partner DTO", dto);

            const mappedLeads = result.map(r => {
                return {
                    lead: LeadMapper.toDTO(r.lead),
                    project: ProjectMapper.toDTO(r.project),
                    client: ClientMapper.toDTO(r.client)
                }
            })

            const resBody: PartnerLeadsDTO = {
                leads: mappedLeads
            }

            res.type('application/json')
            return res.status(200).json(resBody)
        } catch (error) {
            switch (error) {
                case typeof GetLeadsForPartnerErrors.ReferralPartnerDoesNotExist:
                    return res.sendStatus(409)
                default:
                    break;
            }
        }
    }
}