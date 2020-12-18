/* eslint-disable @typescript-eslint/interface-name-prefix */

import { Project } from "../domain/Project";
import { ProjectId } from "../domain/ProjectId";


export interface IProjectRepo {
    save(project: Project): void;
    getProjectById(projectId: ProjectId): Promise<Project>;

}