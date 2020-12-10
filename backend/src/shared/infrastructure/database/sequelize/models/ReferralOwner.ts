import { Sequelize, DataTypes } from "sequelize/types";

export default (sequelize: Sequelize, DataTypes) => {
    // When timestamps are enabled in options, createdAt and updatedAt fields
    // are created automatically for every model
    const Client = sequelize.define('client', {
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
                model: 'client',
                key: 'client_name'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        }
    }, {
        timestamps: true,
        underscored: true,
        tableName: 'clients'
    });
    //Below needs to be changed to match the schema we create within Postgres.
    Client.associate = (models) => {
        Client.belongsTo(models.Member, { foreignKey: 'member_id', targetKey: 'member_id', as: 'Member' })
        Client.belongsTo(models.Post, { foreignKey: 'post_id', targetKey: 'post_id', as: 'Post' })
        Client.hasMany(models.leadVote, { foreignKey: 'client_id', as: 'leadVotes' })
    }

    return Client;
};