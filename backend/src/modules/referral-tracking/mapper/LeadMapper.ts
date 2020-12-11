import { Lead, LeadProps } from "../domain/Lead";


export class LeadMapper {
    public static toDomain(raw: any): Lead {
        const leadProps: LeadProps = {
            dateTime: raw.updatedAt,
            status: raw.status
        }
        const lead = Lead.create(leadProps, raw.id)

        return lead
    }
    public static toPersistence(lead: Lead): any {
        return {
            updatedAt: new Date().toString(),
            status: lead.status,
            id: lead.leadId,
        }
    }
}