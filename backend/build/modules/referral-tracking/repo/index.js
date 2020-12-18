"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectRepo = exports.leadRepo = exports.referralPartnerRepo = exports.clientRepo = void 0;
const models_1 = require("../../../shared/infrastructure/database/sequelize/models");
const SequelizeClientRepo_1 = require("./implementations/SequelizeClientRepo");
const SequelizedProjectRepo_1 = require("./implementations/SequelizedProjectRepo");
const SequelizeLeadRepo_1 = require("./implementations/SequelizeLeadRepo");
const SequelizeReferralPartnerRepo_1 = require("./implementations/SequelizeReferralPartnerRepo");
const clientRepo = new SequelizeClientRepo_1.ClientRepo(models_1.Models);
exports.clientRepo = clientRepo;
const referralPartnerRepo = new SequelizeReferralPartnerRepo_1.ReferralPartnerRepo(models_1.Models);
exports.referralPartnerRepo = referralPartnerRepo;
const leadRepo = new SequelizeLeadRepo_1.LeadRepo(models_1.Models);
exports.leadRepo = leadRepo;
const projectRepo = new SequelizedProjectRepo_1.ProjectRepo(models_1.Models);
exports.projectRepo = projectRepo;
//# sourceMappingURL=index.js.map