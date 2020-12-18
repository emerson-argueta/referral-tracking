/* eslint-disable @typescript-eslint/interface-name-prefix */

import { Project } from "../domain/Project";


export interface IProjectRepo {
    save(project: Project): void;
}