"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectRepo = exports.leadRepo = exports.referralPartnerRepo = exports.clientRepo = void 0;
// import { Models } from "../../../shared/infrastructure/database/sequelize/models";
const SequelizeClientRepo_1 = require("./implementations/SequelizeClientRepo");
const SequelizedProjectRepo_1 = require("./implementations/SequelizedProjectRepo");
const SequelizeLeadRepo_1 = require("./implementations/SequelizeLeadRepo");
const SequelizeReferralPartnerRepo_1 = require("./implementations/SequelizeReferralPartnerRepo");
const clientRepo = new SequelizeClientRepo_1.ClientRepo({});
exports.clientRepo = clientRepo;
const referralPartnerRepo = new SequelizeReferralPartnerRepo_1.ReferralPartnerRepo({});
exports.referralPartnerRepo = referralPartnerRepo;
const leadRepo = new SequelizeLeadRepo_1.LeadRepo({});
exports.leadRepo = leadRepo;
const projectRepo = new SequelizedProjectRepo_1.ProjectRepo({});
exports.projectRepo = projectRepo;
//# sourceMappingURL=index.js.map