import { ClientDTO } from "../../../dtos/ClientDTO";
import { LeadDTO } from "../../../dtos/LeadDTO";
import { ProjectDTO } from "../../../dtos/ProjectDTO";


export interface GetLeadsForPartnerDTO {
    referralPartnerUsername: string;
}

export interface PartnerLeadsDTO {
    leads: Array<{
        project: ProjectDTO;
        lead: LeadDTO;
        client: ClientDTO;
    }>;
}