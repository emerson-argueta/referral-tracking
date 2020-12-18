"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Lead_1 = __importDefault(require("./Lead"));
exports.default = (sequelize, dataTypes) => {
    // When timestamps are enabled in options, createdAt and updatedAt fields
    // are created automatically for every model
    const ReferralPartner = sequelize.define('referral_partner', {
        id: {
            type: dataTypes.UUID,
            defaultValue: dataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        username: {
            type: dataTypes.STRING,
            allowNull: false,
        }
    }, {
        timestamps: true,
        underscored: true,
        tableName: 'referral-owner'
    });
    ReferralPartner.hasMany(Lead_1.default(sequelize, dataTypes), { foreignKey: 'lead_id', as: 'Leads' });
    return ReferralPartner;
};
//# sourceMappingURL=ReferralPartner.js.map