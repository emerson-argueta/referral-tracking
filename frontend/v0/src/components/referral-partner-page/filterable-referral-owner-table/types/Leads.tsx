

export interface Client {
    name: string;
    email: string;
}
export interface Project {
    estimate: string;
    title: string;
}

export interface Lead {
    dateTime: string;
    status: string
}
export interface ReferralOwnerLead {
    client: Client,
    project: Project,
    lead: Lead
}

export type Leads = Array<ReferralOwnerLead>


