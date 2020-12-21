import { clientRepo, leadRepo, projectRepo } from "../../../repo";
import { GetLeadsForPartner } from "./GetLeadsforPartner";
import { GetLeadsForPartnerController } from "./GetLeadsForPartnerController";


const getLeadsForPartner = new GetLeadsForPartner(leadRepo, clientRepo, projectRepo);
const getLeadsForPartnerController = new GetLeadsForPartnerController(getLeadsForPartner);

export {
    getLeadsForPartner,
    getLeadsForPartnerController
}