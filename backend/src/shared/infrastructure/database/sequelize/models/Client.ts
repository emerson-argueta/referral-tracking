import { Sequelize, DataTypes } from "sequelize/types";
import { Project } from "./Project";

export const Client = (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
    // When timestamps are enabled in options, createdAt and updatedAt fields
    // are created automatically for every model
    const client = sequelize.define('client', {
        id: {
            type: dataTypes.UUID,
            defaultValue: dataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false,
        },
    }, {
        timestamps: true,
        underscored: true,
        tableName: 'clients'
    });

    client.hasMany(Project(sequelize, dataTypes), { foreignKey: 'project_id', as: 'Projects' })

    return client;
};

