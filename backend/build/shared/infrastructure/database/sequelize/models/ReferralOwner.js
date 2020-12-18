"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferralOwner = void 0;
const Lead_1 = __importDefault(require("./Lead"));
exports.ReferralOwner = (sequelize, dataTypes) => {
    // When timestamps are enabled in options, createdAt and updatedAt fields
    // are created automatically for every model
    const referralOwner = sequelize.define('referral_owner', {
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
    referralOwner.hasMany(Lead_1.default(sequelize, dataTypes), { foreignKey: 'lead_id', as: 'Leads' });
    return referralOwner;
};
//# sourceMappingURL=ReferralOwner.js.map