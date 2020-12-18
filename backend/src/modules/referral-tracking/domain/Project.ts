import { Entity } from "../../../shared/domain/Entity"
import { UniqueEntityID } from "../../../shared/domain/UniqueEntityID"
import { ClientId } from "./ClientId"
import { ProjectId } from "./ProjectId"

export interface ProjectProps {
    clientId: ClientId;
    estimate: string;
    title: string;
}

export class Project extends Entity<ProjectProps> {

    get projectId(): ProjectId {
        return ProjectId.create(this._id)
    }
    get clientId(): ProjectId {
        return this.props.clientId
    }

    get estimate(): string {
        return this.props.estimate
    }

    get title(): string {
        return this.props.title
    }
    private constructor(props: ProjectProps, id?: UniqueEntityID) {
        super(props, id);
    }

    public static create(props: ProjectProps, id?: UniqueEntityID): Project {
        const project = new Project(props, id)
        return project
    }
}