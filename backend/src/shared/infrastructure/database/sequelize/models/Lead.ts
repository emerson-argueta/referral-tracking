import { Sequelize, DataTypes } from "sequelize/types";
import { Client } from "./Client";
import { Project } from "./Project";
import { ReferralOwner } from "./ReferralOwner";
import ReferralPartner from "./ReferralPartner";

export default (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
    // When timestamps are enabled in options, createdAt and updatedAt fields
    // are created automatically for every model
    const lead = sequelize.define('lead', {
        id: {
            type: dataTypes.UUID,
            defaultValue: dataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
    }, {
        timestamps: true,
        underscored: true,
        tableName: 'leads'
    });

    lead.belongsTo(ReferralPartner(sequelize, dataTypes), { foreignKey: 'referral_partner_id', targetKey: 'id', as: 'ReferralPartner' })
    lead.belongsTo(ReferralOwner(sequelize, dataTypes), { foreignKey: 'referral_owner_id', targetKey: 'id', as: 'ReferralOwner' })
    lead.belongsTo(Client(sequelize, dataTypes), { foreignKey: 'client_id', as: 'Client' })

    return lead;
};
