/* eslint-disable @typescript-eslint/no-explicit-any */
import { Entity } from "../../../shared/domain/Entity";
import { UniqueEntityID } from "../../../shared/domain/UniqueEntityID";

export class ReferralPartnerId extends Entity<any> {
    get id(): UniqueEntityID {
        return this._id;
    }

    private constructor(id?: UniqueEntityID) {
        super(null, id);
    }

    public static create(id?: UniqueEntityID): ReferralPartnerId {
        return new ReferralPartnerId(id);
    }


}