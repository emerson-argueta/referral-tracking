"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
const Client_1 = require("./Client");
exports.Project = (sequelize, dataTypes) => {
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
    project.belongsTo(Client_1.Client(sequelize, dataTypes), { foreignKey: 'client_id', targetKey: 'id', as: 'Client' });
    return project;
};
//# sourceMappingURL=Project.js.map