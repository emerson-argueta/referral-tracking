"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
var Project = /** @class */ (function () {
    function Project(props) {
        this.props = props;
    }
    Project.create = function (props) {
        var project = new Project(props);
        return project;
    };
    return Project;
}());
exports.Project = Project;
