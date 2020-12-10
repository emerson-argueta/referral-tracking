import { Sequelize, DataTypes } from "sequelize/types";

export default (sequelize: Sequelize, DataTypes) => {
    // When timestamps are enabled in options, createdAt and updatedAt fields
    // are created automatically for every model
    const Referral_partner = sequelize.define('referral_partner', {
        referral_partner_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        referral_partner_username: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'referral_partner',
                key: 'referral_partner_username'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        }
    }, {
        timestamps: true,
        underscored: true,
        tableName: 'referral-owner'
    });
    //Below needs to be changed to match the schema we create within Postgres.
    Referral_partner.associate = (models) => {
        Referral_partner.belongsTo(models.Member, { foreignKey: 'member_id', targetKey: 'member_id', as: 'Member' })
        Referral_partner.belongsTo(models.Post, { foreignKey: 'post_id', targetKey: 'post_id', as: 'Post' })
        Referral_partner.hasMany(models.leadVote, { foreignKey: 'client_id', as: 'leadVotes' })
    }

    return Referral_partner;
};