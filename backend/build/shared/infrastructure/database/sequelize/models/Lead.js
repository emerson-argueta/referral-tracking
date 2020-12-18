"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = require("./Client");
const ReferralOwner_1 = require("./ReferralOwner");
const ReferralPartner_1 = __importDefault(require("./ReferralPartner"));
exports.default = (sequelize, dataTypes) => {
    // When timestamps are enabled in options, createdAt and updatedAt fields
    // are created automatically for every model
    const lead = sequelize.define('lead', {
        id: {
            type: dataTypes.UUID,
            defaultValue: dataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
    }, {
        timestamps: true,
        underscored: true,
        tableName: 'leads'
    });
    lead.belongsTo(ReferralPartner_1.default(sequelize, dataTypes), { foreignKey: 'referral_partner_id', targetKey: 'id', as: 'ReferralPartner' });
    lead.belongsTo(ReferralOwner_1.ReferralOwner(sequelize, dataTypes), { foreignKey: 'referral_owner_id', targetKey: 'id', as: 'ReferralOwner' });
    lead.belongsTo(Client_1.Client(sequelize, dataTypes), { foreignKey: 'client_id', as: 'Client' });
    return lead;
};
//# sourceMappingURL=Lead.js.map