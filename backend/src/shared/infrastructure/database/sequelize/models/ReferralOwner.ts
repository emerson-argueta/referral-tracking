import { Sequelize, DataTypes } from "sequelize/types";

export default (sequelize: Sequelize, DataTypes) => {
    // When timestamps are enabled in options, createdAt and updatedAt fields
    // are created automatically for every model
    const Referral_owner = sequelize.define('referral_owner', {
        referral_owner_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        referral_owner_username: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'referral_owner',
                key: 'referral_owner_username'
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
    Referral_owner.associate = (models) => {
        Referral_owner.belongsTo(models.Member, { foreignKey: 'member_id', targetKey: 'member_id', as: 'Member' })
        Referral_owner.belongsTo(models.Post, { foreignKey: 'post_id', targetKey: 'post_id', as: 'Post' })
        Referral_owner.hasMany(models.leadVote, { foreignKey: 'client_id', as: 'leadVotes' })
    }

    return Referral_owner;
};