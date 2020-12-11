
import * as fs from 'fs'
import * as path from 'path'

import * as Sequelize from 'sequelize'
import { MysqlConnection } from '../config/mysqlConfig';

const sequelize = MysqlConnection;

// turns base_user => BaseUser
const toCamelCase = (str: string): string => {
    const _ = str.indexOf("_");
    if (~_) {
        return toCamelCase(str.substring(0, _)
            + str.substring(_ + 1)
                .substring(0, 1)
                .toUpperCase()
            + str.substring(_ + 2)
        )
    }
    else {
        return str.substring(0, 1).toUpperCase() + str.substring(1);
    }
}
const getAllModels = (): Array<typeof Sequelize.Model> => {
    return fs.readdirSync(path.resolve(__dirname, "./"))
        .filter((t) => (~t.indexOf('.ts') || ~t.indexOf('.js')) && !~t.indexOf("index") && !~t.indexOf(".map"))
        .map((model) => sequelize.import(__dirname + '/' + model))
}

let models: { [modelName: string]: typeof Sequelize.Model | Sequelize.Sequelize | typeof Sequelize }
let modelsLoaded = false;
const createModels = () => {
    if (modelsLoaded) return models;

    // Get all models
    const modelsList = getAllModels()

    // Camel case the models
    modelsList.forEach(model => {
        const modelName = toCamelCase(model.name);
        models[modelName] = model;
    })

    models['sequelize'] = sequelize;
    models['Sequelize'] = Sequelize;

    return models;
}

export const Models = createModels();