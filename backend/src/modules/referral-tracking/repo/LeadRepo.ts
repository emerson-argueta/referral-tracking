/* eslint-disable @typescript-eslint/interface-name-prefix */
import { Lead } from "../domain/Lead";
import { IUniqueLead } from "./UniqueLead";

export interface ILeadRepo {
    findLead(lead: IUniqueLead): Promise<Lead>;
    save(lead: Lead): Promise<void>;
    findLeadsByOwnerUsername(referralOwnerUsername: string): Promise<Array<Lead>>;
}