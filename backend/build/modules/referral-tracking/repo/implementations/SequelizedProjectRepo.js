"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRepo = void 0;
const ProjectMapper_1 = require("../../mapper/ProjectMapper");
class ProjectRepo {
    constructor(models) {
        this.models = models;
    }
    createBaseQuery() {
        return {
            where: {},
        };
    }
    async save(project) {
        const ProjectModel = this.models.Project;
        const exists = await this.exists(project.projectId);
        const isNewProject = !exists;
        const rawSequelizeClient = await ProjectMapper_1.ProjectMapper.toPersistence(project);
        if (isNewProject) {
            try {
                await ProjectModel.create(rawSequelizeClient);
            }
            catch (error) {
                await this.delete(project.projectId);
                throw new Error(error.toString());
            }
        }
        else {
            await ProjectModel.update(rawSequelizeClient, {
                individualHooks: true,
                hooks: true,
                where: { project_id: project.projectId }
            });
        }
    }
    async exists(projectId) {
        const ProjectModel = this.models.Project;
        const baseQuery = this.createBaseQuery();
        baseQuery.where['id'] = projectId;
        const project = await ProjectModel.findOne(baseQuery);
        const found = !!project === true;
        return found;
    }
    async delete(projectId) {
        const ReferralPartnerModel = this.models.ReferralPartner;
        return ReferralPartnerModel.destroy({ where: { id: projectId } });
    }
}
exports.ProjectRepo = ProjectRepo;
//# sourceMappingURL=SequelizedProjectRepo.js.map