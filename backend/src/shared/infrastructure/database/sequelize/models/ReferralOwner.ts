import { Sequelize, DataTypes } from "sequelize/types";
import Lead from "./Lead";
import ReferralPartner from "./ReferralPartner";

export const ReferralOwner = (sequelize: Sequelize) => {
    // When timestamps are enabled in options, createdAt and updatedAt fields
    // are created automatically for every model
    const ReferralOwner = sequelize.define('referral_owner', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        timestamps: true,
        underscored: true,
        tableName: 'referral-owner'
    });

    //Below needs to be changed to match the schema we create within Postgres.
    ReferralOwner.hasMany(Lead(sequelize), { foreignKey: 'lead_id', as: 'Leads' })

    return ReferralOwner;
};