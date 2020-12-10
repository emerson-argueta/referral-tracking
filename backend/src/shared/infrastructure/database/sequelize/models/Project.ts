import { Sequelize, DataTypes } from "sequelize/types";

export default (sequelize, DataTypes) => {
    const Project = sequelize.define('project', {
        project_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
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
        estimate: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'projects',
                key: 'estimate'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        },
        title: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'projects',
                key: 'title'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        }
    }, {
        timestamps: true,
        underscored: true,
        tableName: 'lead'
    });

    Project.associate = (models) => {
        Project.belongsTo(models.Member, { foreignKey: 'member_id', targetKey: 'member_id', as: 'Member' })
        Project.belongsTo(models.Post, { foreignKey: 'post_id', targetKey: 'post_id', as: 'Post' })
        Project.hasMany(models.leadVote, { foreignKey: 'lead_id', as: 'leadVotes' })
    }

    return Project;
};