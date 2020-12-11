export interface ProjectIdProps {
    id?: string | number
}
export class ProjectId {
    props: ProjectIdProps;

    private constructor(props: ProjectIdProps) {
        this.props = props
    }

    public static create(props: ProjectIdProps) {
        const projectId = new ProjectId(props)

        return projectId
    }


}