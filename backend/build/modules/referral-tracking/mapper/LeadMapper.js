"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadMapper = void 0;
const Lead_1 = require("../domain/Lead");
class LeadMapper {
    static toDomain(raw) {
        const leadProps = {
            dateTime: raw.updatedAt,
            status: raw.status
        };
        const lead = Lead_1.Lead.create(leadProps, raw.id);
        return lead;
    }
    static toPersistence(lead) {
        return {
            updatedAt: new Date().toString(),
            status: lead.status,
            id: lead.leadId,
        };
    }
    static toDTO(lead) {
        return {
            dateTime: lead.dateTime.toDateString(),
            status: lead.status
        };
    }
}
exports.LeadMapper = LeadMapper;
//# sourceMappingURL=LeadMapper.js.map