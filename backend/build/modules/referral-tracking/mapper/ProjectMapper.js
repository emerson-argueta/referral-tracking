"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectMapper = void 0;
const UniqueEntityID_1 = require("../../../shared/domain/UniqueEntityID");
const ClientId_1 = require("../domain/ClientId");
const Project_1 = require("../domain/Project");
class ProjectMapper {
    static toDomain(raw) {
        const clientId = raw.clientId;
        const projectProps = {
            clientId: ClientId_1.ClientId.create(new UniqueEntityID_1.UniqueEntityID(clientId)),
            estimate: raw.estimate,
            title: raw.title
        };
        const projectId = raw.id;
        const project = Project_1.Project.create(projectProps, new UniqueEntityID_1.UniqueEntityID(projectId));
        return project;
    }
    static toPersistence(project) {
        return {
            id: project.projectId.id.toValue(),
            clientId: project.clientId.id.toValue(),
            estimate: project.estimate,
            title: project.title
        };
    }
}
exports.ProjectMapper = ProjectMapper;
//# sourceMappingURL=ProjectMapper.js.map