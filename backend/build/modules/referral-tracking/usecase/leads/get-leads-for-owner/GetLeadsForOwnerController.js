"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetLeadsForOwnerController = void 0;
const ClientMapper_1 = require("../../../mapper/ClientMapper");
const LeadMapper_1 = require("../../../mapper/LeadMapper");
const ProjectMapper_1 = require("../../../mapper/ProjectMapper");
const GetLeadsForOwnerErrors_1 = require("./GetLeadsForOwnerErrors");
class GetLeadsForOwnerController {
    constructor(useCase) {
        this.useCase = useCase;
    }
    async execute(req, res) {
        const dto = {
            referralOwnerId: req.query.referralOwnerId.toString(),
        };
        try {
            console.log("this is the dto", dto);
            const result = await this.useCase.execute(dto);
            res.type('application/json');
            return res.status(200).json(result.map(r => {
                return {
                    lead: LeadMapper_1.LeadMapper.toDTO(r.lead),
                    project: ProjectMapper_1.ProjectMapper.toDTO(r.project),
                    client: ClientMapper_1.ClientMapper.toDTO(r.client)
                };
            }));
            //return res.sendStatus(200);
        }
        catch (error) {
            switch (error) {
                case typeof GetLeadsForOwnerErrors_1.GetLeadsForOwnerErrors.ReferralOwnerDoesNotExist:
                    // Conflict--> Indicates that the request could not be processed 
                    // because of conflict in the current state of the resource
                    return res.sendStatus(409);
                default:
                    break;
            }
        }
    }
}
exports.GetLeadsForOwnerController = GetLeadsForOwnerController;
//# sourceMappingURL=GetLeadsForOwnerController.js.map