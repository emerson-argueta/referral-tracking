import { Sequelize, DataTypes } from "sequelize/types";
import { Client } from "./Client";
import { Project } from "./Project";
import { ReferralOwner } from "./ReferralOwner";
import ReferralPartner from "./ReferralPartner";

export default (sequelize: Sequelize) => {
    // When timestamps are enabled in options, createdAt and updatedAt fields
    // are created automatically for every model
    const Lead = sequelize.define('lead', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
    }, {
        timestamps: true,
        underscored: true,
        tableName: 'leads'
    });


    Lead.belongsTo(ReferralPartner(sequelize), { foreignKey: 'referral_partner_id', targetKey: 'id', as: 'ReferralPartner' })
    Lead.belongsTo(ReferralOwner(sequelize), { foreignKey: 'referral_owner_id', targetKey: 'id', as: 'ReferralOwner' })
    Lead.hasOne(Client(sequelize), { foreignKey: 'client_id', as: 'Client' })

    return Lead;
};
