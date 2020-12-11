import { ProjectId } from "./ProjectId"

export interface ProjectProps {
    id?: string,
    clientId: string;
    estimate: string;
    title: string;
}

export class Project {
    id?: string
    props: ProjectProps

    get projectId(): ProjectId {
        return ProjectId.create({ id: this.id })
    }

    private constructor(props: ProjectProps) {
        this.props = props
    }

    public static create(props: ProjectProps): Project {
        const project = new Project(props)
        return project
    }
}