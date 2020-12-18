import { UniqueEntityID } from "../../../shared/domain/UniqueEntityID";
import { ClientId } from "../domain/ClientId";
import { Project, ProjectProps } from "../domain/Project";
import { ProjectDTO } from "../dtos/ProjectDTO";

export class ProjectMapper {
    public static toDomain(raw: any): Project {
        const clientId = raw.clientId as string
        const projectProps: ProjectProps = {
            clientId: ClientId.create(new UniqueEntityID(clientId)),
            estimate: raw.estimate,
            title: raw.title
        }

        const projectId = raw.id as string
        const project = Project.create(projectProps, new UniqueEntityID(projectId))

        return project
    }

    public static toPersistence(project: Project): any {
        return {
            id: project.projectId.id.toValue(),
            clientId: project.clientId.id.toValue(),
            estimate: project.estimate,
            title: project.title
        }
    }

    public static toDTO(project: Project): ProjectDTO {
        return {
            title: project.title,
            estimate: project.estimate
        }
    }
}