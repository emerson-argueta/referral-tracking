/* eslint-disable @typescript-eslint/interface-name-prefix */
import { ReferralOwner } from "../domain/ReferralOwner";


export interface IReferralOwnerRepo {
    getAllReferralOwners(): Promise<Array<ReferralOwner>>;
}