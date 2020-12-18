import { AggregateRoot } from "../../../shared/domain/AggregateRoot"
import { UniqueEntityID } from "../../../shared/domain/UniqueEntityID"
import { ClientId } from "./ClientId"
import { LeadId } from "./LeadId"
import { LeadStatus } from "./LeadStatus"
import { ProjectId } from "./ProjectId"
import { ReferralOwnerId } from "./ReferralOwnerId"
import { ReferralPartnerId } from "./ReferralPartnerId"

export interface LeadProps {
    referralPartnerId?: ReferralPartnerId;
    referralOwnerId?: ReferralOwnerId;
    clientId?: ClientId;
    projectId?: ProjectId;
    dateTime: Date;
    status: LeadStatus;
}

export class Lead extends AggregateRoot<LeadProps>{
    get leadId(): LeadId {
        return LeadId.create(this._id)
    }

    public get ReferraPartnerId(): ReferralPartnerId | undefined {
        return this.props.referralPartnerId;
    }

    public get ReferralOwnerId(): ReferralOwnerId | undefined {
        return this.props.referralOwnerId
    }

    public get ClientId(): ClientId | undefined {
        return this.props.clientId;
    }

    get projectId(): ProjectId | undefined {
        return this.props.projectId
    }

    get dateTime(): Date {
        return this.props.dateTime
    }

    public get status(): LeadStatus {
        return this.props.status
    }


    private constructor(props: LeadProps, id?: UniqueEntityID) {
        super(props, id)
    }

    public static create(props: LeadProps, id?: UniqueEntityID): Lead {
        const lead = new Lead(props, id)

        return lead
    }
}