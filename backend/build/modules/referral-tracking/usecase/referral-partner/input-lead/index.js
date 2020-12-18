"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inputLeadController = exports.inputLead = void 0;
const repo_1 = require("../../../repo");
const InputLead_1 = require("./InputLead");
const InputLeadController_1 = require("./InputLeadController");
const inputLead = new InputLead_1.InputLead(repo_1.leadRepo, repo_1.clientRepo, repo_1.projectRepo);
exports.inputLead = inputLead;
const inputLeadController = new InputLeadController_1.InputLeadController(inputLead);
exports.inputLeadController = inputLeadController;
//# sourceMappingURL=index.js.map