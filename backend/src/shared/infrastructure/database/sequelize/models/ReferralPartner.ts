import { Sequelize, DataTypes } from "sequelize/types";
import Lead from "./Lead";

export default (sequelize: Sequelize) => {
    // When timestamps are enabled in options, createdAt and updatedAt fields
    // are created automatically for every model
    const ReferralPartner = sequelize.define('referral_partner', {
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

    ReferralPartner.hasMany(Lead(sequelize), { foreignKey: 'lead_id', as: 'Leads' })


    return ReferralPartner;
};