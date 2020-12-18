"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRepo = void 0;
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */
const UniqueEntityID_1 = require("../../../../shared/domain/UniqueEntityID");
const ClientId_1 = require("../../domain/ClientId");
const Project_1 = require("../../domain/Project");
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
        return null;
        // const ProjectModel = this.models.Project as any;
        // const exists = await this.exists(project.projectId);
        // const isNewProject = !exists;
        // const rawSequelizeClient = await ProjectMapper.toPersistence(project);
        // if (isNewProject) {
        //     try {
        //         await ProjectModel.create(rawSequelizeClient);
        //     } catch (error) {
        //         await this.delete(project.projectId)
        //         throw new Error(error.toString());
        //     }
        // } else {
        //     await ProjectModel.update(rawSequelizeClient, {
        //         individualHooks: true,
        //         hooks: true,
        //         where: { project_id: project.projectId }
        //     });
        // }
    }
    async getProjectById(projectId) {
        const projectProps = {
            clientId: ClientId_1.ClientId.create(new UniqueEntityID_1.UniqueEntityID("Bruce Banner")),
            title: "thehulk@notyourmom.com",
            estimate: "9001"
        };
        const project = Project_1.Project.create(projectProps);
        return await project;
    }
    async exists(projectId) {
        // const ProjectModel = this.models.Project as any
        // const baseQuery = this.createBaseQuery();
        // baseQuery.where['id'] = projectId;
        // const project = await ProjectModel.findOne(baseQuery)
        // const found = !!project === true;
        // return found;
        return await true;
    }
    async delete(projectId) {
        // const ReferralPartnerModel = this.models.ReferralPartner as any;
        // return ReferralPartnerModel.destroy({ where: { id: projectId } })
        return null;
    }
}
exports.ProjectRepo = ProjectRepo;
//# sourceMappingURL=SequelizedProjectRepo.js.map