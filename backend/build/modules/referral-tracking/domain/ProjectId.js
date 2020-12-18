"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectId = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const Entity_1 = require("../../../shared/domain/Entity");
class ProjectId extends Entity_1.Entity {
    get id() {
        return this._id;
    }
    constructor(id) {
        super(null, id);
    }
    static create(id) {
        return new ProjectId(id);
    }
}
exports.ProjectId = ProjectId;
//# sourceMappingURL=ProjectId.js.map