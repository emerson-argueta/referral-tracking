import { Sequelize, DataTypes, Optional, Model } from "sequelize/types";
import { Client } from "./Client";

export const Project = (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
    const project = sequelize.define('project', {
        id: {
            type: dataTypes.UUID,
            defaultValue: dataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        estimate: {
            type: dataTypes.NUMBER,
            allowNull: false,
        },
        title: {
            type: dataTypes.STRING,
            allowNull: false,
        }
    }, {
        timestamps: true,
        underscored: true,
        tableName: 'lead',
    });


    project.belongsTo(Client(sequelize, dataTypes), { foreignKey: 'client_id', targetKey: 'id', as: 'Client' })

    return project;
};