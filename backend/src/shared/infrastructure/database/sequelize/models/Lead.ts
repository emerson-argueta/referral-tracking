import { Sequelize, DataTypes } from "sequelize/types";

export default (sequelize: Sequelize, DataTypes) => {
    // When timestamps are enabled in options, createdAt and updatedAt fields
    // are created automatically for every model
    const Lead = sequelize.define('lead', {
        lead_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        referral_partner_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'referral_partner',
                key: 'referral_partner_id'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        },
        referral_owner_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'referral_owner',
                key: 'referral_owner_id'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        },
        client_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'client',
                key: 'client_id'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        },
        project_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'project',
                key: 'project_id'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        }
    }, {
        timestamps: true,
        underscored: true,
        tableName: 'leads'
    });

    Lead.associate = (models) => {
        Lead.belongsTo(models.Member, { foreignKey: 'member_id', targetKey: 'member_id', as: 'Member' })
        Lead.belongsTo(models.Post, { foreignKey: 'post_id', targetKey: 'post_id', as: 'Post' })
        Lead.hasMany(models.leadVote, { foreignKey: 'lead_id', as: 'leadVotes' })
    }

    return Lead;
};
