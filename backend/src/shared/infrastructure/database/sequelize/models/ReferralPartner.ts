import { Sequelize, DataTypes } from "sequelize/types";
import Lead from "./Lead";

export default (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
    // When timestamps are enabled in options, createdAt and updatedAt fields
    // are created automatically for every model
    const ReferralPartner = sequelize.define('referral_partner', {
        id: {
            type: dataTypes.UUID,
            defaultValue: dataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        username: {
            type: dataTypes.STRING,
            allowNull: false,
        }
    }, {
        timestamps: true,
        underscored: true,
        tableName: 'referral-owner'
    });

    ReferralPartner.hasMany(Lead(sequelize, dataTypes), { foreignKey: 'lead_id', as: 'Leads' })


    return ReferralPartner;
};