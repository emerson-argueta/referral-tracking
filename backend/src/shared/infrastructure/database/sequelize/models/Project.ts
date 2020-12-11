import { Sequelize, DataTypes, Optional, Model } from "sequelize/types";
import { Client } from "./Client";

export const Project = (sequelize: Sequelize) => {
    const Project = sequelize.define('project', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        estimate: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        timestamps: true,
        underscored: true,
        tableName: 'lead',
    });


    Project.belongsTo(Client(sequelize), { foreignKey: 'client_id', targetKey: 'id', as: 'Client' })

    return Project;
};