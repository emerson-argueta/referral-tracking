interface ProjectProps {
    customerId: string;
    estimate: string;
    title: string;
}

export class Project {
    props: ProjectProps

    private constructor(props: ProjectProps) {
        this.props = props
    }

    public static create(props: ProjectProps): Project {
        const project = new Project(props)
        return project
    }
}