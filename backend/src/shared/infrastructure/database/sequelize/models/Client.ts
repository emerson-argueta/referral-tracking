import { Sequelize, DataTypes, Model, BuildOptions, InstanceUpdateOptions, ModelStatic, Optional } from "sequelize/types";
import { Project } from "./Project";
import { ReferralOwner } from "./ReferralOwner";
import ReferralPartner from "./ReferralPartner";

export const Client = (sequelize: Sequelize) => {
    // When timestamps are enabled in options, createdAt and updatedAt fields
    // are created automatically for every model
    const Client = sequelize.define('client', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        timestamps: true,
        underscored: true,
        tableName: 'clients'
    });

    Client.hasMany(Project(sequelize), { foreignKey: 'project_id', as: 'Projects' })

    return Client;
};