/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Project } from "../../domain/Project";
import { ProjectId } from "../../domain/ProjectId";
import { ProjectMapper } from "../../mapper/ProjectMapper";
import { IProjectRepo } from "../ProjectRepo";


export class ProjectRepo implements IProjectRepo {

    private models: any

    constructor(models: any) {
        this.models = models;
    }

    private createBaseQuery(): any {
        return {
            where: {},
        }
    }

    async save(project: Project): Promise<void> {
        return null
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


    private async exists(projectId: ProjectId): Promise<boolean> {
        // const ProjectModel = this.models.Project as any
        // const baseQuery = this.createBaseQuery();
        // baseQuery.where['id'] = projectId;
        // const project = await ProjectModel.findOne(baseQuery)
        // const found = !!project === true;
        // return found;
        return await true
    }

    private async delete(projectId: ProjectId): Promise<void> {
        // const ReferralPartnerModel = this.models.ReferralPartner as any;
        // return ReferralPartnerModel.destroy({ where: { id: projectId } })
        return null
    }

}