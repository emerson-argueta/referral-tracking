import { clientRepo, leadRepo, projectRepo } from "../../../repo";
import { InputLead } from "./InputLead";
import { InputLeadController } from "./InputLeadController";


const inputLead = new InputLead(leadRepo, clientRepo, projectRepo);
const inputLeadController = new InputLeadController(inputLead);

export {
    inputLead,
    inputLeadController
}