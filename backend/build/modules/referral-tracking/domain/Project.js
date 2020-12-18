"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
const Entity_1 = require("../../../shared/domain/Entity");
const ProjectId_1 = require("./ProjectId");
class Project extends Entity_1.Entity {
    get projectId() {
        return ProjectId_1.ProjectId.create(this._id);
    }
    get clientId() {
        return this.props.clientId;
    }
    get estimate() {
        return this.props.estimate;
    }
    get title() {
        return this.props.title;
    }
    constructor(props, id) {
        super(props, id);
    }
    static create(props, id) {
        const project = new Project(props, id);
        return project;
    }
}
exports.Project = Project;
//# sourceMappingURL=Project.js.map