import { Lead } from "../domain/Lead";
import { IUniqueLead } from "./UniqueLead";

export interface ILeadRepo {
    findLead(lead: IUniqueLead): Promise<Lead>
    save(lead: Lead): Promise<void>
}