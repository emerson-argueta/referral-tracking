"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputLead = void 0;
const Client_1 = require("../../../domain/Client");
const Lead_1 = require("../../../domain/Lead");
const Project_1 = require("../../../domain/Project");
const InputLeadErrors_1 = require("./InputLeadErrors");
class InputLead {
    constructor(leadRepo, clientRepo, projectRepo) {
        this.leadRepo = leadRepo;
        this.clientRepo = clientRepo;
        this.projectRepo = projectRepo;
    }
    async execute(request) {
        const { referralPartnerId, referralOwnerId, clientEmail, clientName, projectTitle, projectEstimate } = request;
        let client;
        // Finding the client, if the client is not found creates a new client
        try {
            client = await this.clientRepo.getClientByEmail(clientEmail);
        }
        catch (error) {
            const clientProps = {
                name: clientName,
                email: clientEmail
            };
            client = Client_1.Client.create(clientProps);
            try {
                await this.clientRepo.save(client);
            }
            catch (error) {
                return error;
            }
        }
        const projectProps = {
            clientId: client.clientId,
            title: projectTitle,
            estimate: projectEstimate
        };
        const project = Project_1.Project.create(projectProps);
        // If lead exists return error, otherwise create and save lead, and save project
        try {
            const leadExistsProps = {
                referralPartnerId: referralPartnerId,
                referralOwnerId: referralOwnerId,
                clientId: client.clientId,
                projectId: project.projectId
            };
            await this.leadRepo.findLead(leadExistsProps);
            return InputLeadErrors_1.InputLeadErrors.InputLeadExists;
        }
        catch (error) {
            const leadProps = {
                referralPartnerId: referralPartnerId,
                referralOwnerId: referralOwnerId,
                clientId: client.clientId,
                dateTime: new Date(),
                projectId: project.projectId,
                status: "open"
            };
            const lead = Lead_1.Lead.create(leadProps);
            try {
                await this.leadRepo.save(lead);
            }
            catch (error) {
                return error;
            }
            try {
                await this.projectRepo.save(project);
            }
            catch (error) {
                return error;
            }
        }
        return 'success';
    }
}
exports.InputLead = InputLead;
//# sourceMappingURL=InputLead.js.map