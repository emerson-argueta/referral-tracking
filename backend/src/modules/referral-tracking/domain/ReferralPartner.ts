import { AggregateRoot } from "../../../shared/domain/AggregateRoot";
import { UniqueEntityID } from "../../../shared/domain/UniqueEntityID";
import { Lead } from "./Lead";
import { ReferralPartnerId } from "./ReferralPartnerId"

export interface ReferralPartnerProps {
    username: string;
    leads?: Array<Lead>;
}

export class ReferralPartner extends AggregateRoot<ReferralPartnerProps>  {


    get referralPartnerId(): ReferralPartnerId {
        return ReferralPartnerId.create(this._id)
    }

    get username(): string {
        return this.props.username
    }


    public get leads(): Array<Lead> | undefined {
        return this.props.leads
    }

    private constructor(props: ReferralPartnerProps, id?: UniqueEntityID) {
        super(props, id)
    }

    public static create(props: ReferralPartnerProps, id?: UniqueEntityID): ReferralPartner {
        const referralPartner = new ReferralPartner(props, id)

        return referralPartner

    }

}