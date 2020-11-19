export type TLead = {
    status: string,
    customerInfo: string,
    service: string,
    referralPartnerID: number,
    commissionRate: number,
    customerCharge: number
}
export interface ILead {
    read: () => TLead
    update: (lead: TLead) => TLead
}

export type LeadOrigin = {
    customerInfo: string,
    service: string,
    referralPartnerID: number
}

export interface ILeadReferralPartner {
    createLead: (leadOrigin: LeadOrigin) => TLead
}