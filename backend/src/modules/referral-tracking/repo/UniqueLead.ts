import { ClientId } from "../domain/ClientId";
import { ProjectId } from "../domain/ProjectId";
import { ReferralOwnerId } from "../domain/ReferralOwnerId";
import { ReferralPartnerId } from "../domain/ReferralPartnerId";

export interface IUniqueLead {
    referralPartnerId: ReferralPartnerId
    referralOwnerId: ReferralOwnerId
    clientId: ClientId
    projectId: ProjectId
}