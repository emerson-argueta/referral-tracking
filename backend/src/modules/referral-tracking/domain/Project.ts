export interface ProjectProps {
    id?: string,
    clientId: string;
    estimate: string;
    title: string;
}

export class Project {
    props: ProjectProps

    get id(): string {
        return this.props.id || ""
    }

    private constructor(props: ProjectProps) {
        this.props = props
    }

    public static create(props: ProjectProps): Project {
        const project = new Project(props)
        return project
    }
}