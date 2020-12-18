"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLeadsForOwnerController = exports.getLeadsForOwner = void 0;
const repo_1 = require("../../../repo");
const GetLeadsForOwner_1 = require("./GetLeadsForOwner");
const GetLeadsForOwnerController_1 = require("./GetLeadsForOwnerController");
const getLeadsForOwner = new GetLeadsForOwner_1.GetLeadsForOwner(repo_1.leadRepo, repo_1.clientRepo, repo_1.projectRepo);
exports.getLeadsForOwner = getLeadsForOwner;
const getLeadsForOwnerController = new GetLeadsForOwnerController_1.GetLeadsForOwnerController(getLeadsForOwner);
exports.getLeadsForOwnerController = getLeadsForOwnerController;
//# sourceMappingURL=index.js.map