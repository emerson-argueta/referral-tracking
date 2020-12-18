"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const Project_1 = require("./Project");
exports.Client = (sequelize, dataTypes) => {
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
    client.hasMany(Project_1.Project(sequelize, dataTypes), { foreignKey: 'project_id', as: 'Projects' });
    return client;
};
//# sourceMappingURL=Client.js.map