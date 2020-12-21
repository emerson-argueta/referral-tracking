import { ClientDTO } from "../../../dtos/ClientDTO";
import { LeadDTO } from "../../../dtos/LeadDTO";
import { ProjectDTO } from "../../../dtos/ProjectDTO";


export interface GetLeadsForOwnerDTO {
    referralOwnerUsername: string;
}

export interface OwnerLeadsDTO {
    leads: Array<{
        project: ProjectDTO;
        lead: LeadDTO;
        client: ClientDTO;
    }>;
}
