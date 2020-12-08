import { Client } from "../../../domain/Client";
import { Project } from "../../../domain/Project";

export interface InputLeadDTO {
    referralPartnerId: string;
    referralOwnerId: string;
    projectTitle: string;
    projectEstimate: string;
    clientName: string;
    clientEmail: string;
}