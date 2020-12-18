/* eslint-disable @typescript-eslint/interface-name-prefix */
import { Lead } from "../domain/Lead";
import { ReferralOwnerId } from "../domain/ReferralOwnerId";
import { IUniqueLead } from "./UniqueLead";

export interface ILeadRepo {
    findLead(lead: IUniqueLead): Promise<Lead>;
    save(lead: Lead): Promise<void>;
    findLeadsByOwnerId(referralOwnerId: ReferralOwnerId): Promise<Array<Lead>>;
}