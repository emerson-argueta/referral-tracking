import { leadRepo, clientRepo, projectRepo } from "../../../repo";
import { GetLeadsForOwner } from "./GetLeadsForOwner";
import { GetLeadsForOwnerController } from "./GetLeadsForOwnerController";

const getLeadsForOwner = new GetLeadsForOwner(leadRepo, clientRepo, projectRepo);
const getLeadsForOwnerController = new GetLeadsForOwnerController(getLeadsForOwner);

export {
    getLeadsForOwner,
    getLeadsForOwnerController
}