"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { PostgresConnection } from '../config/postgresConfig';
// const sequelize = PostgresConnection;
// // turns base_user => BaseUser
// const toCamelCase = (str: string): string => {
//     const _ = str.indexOf("_");
//     if (~_) {
//         return toCamelCase(str.substring(0, _)
//             + str.substring(_ + 1)
//                 .substring(0, 1)
//                 .toUpperCase()
//             + str.substring(_ + 2)
//         )
//     }
//     else {
//         return str.substring(0, 1).toUpperCase() + str.substring(1);
//     }
// }
// const getAllModels = (): Array<typeof Sequelize.Model> => {
//     return fs.readdirSync(path.resolve(__dirname, "./"))
//         .filter((t) => (~t.indexOf('.ts') || ~t.indexOf('.js')) && !~t.indexOf("index") && !~t.indexOf(".map"))
//         .map((model) => sequelize.import(__dirname + '/' + model))
// }
// export type TModels = { [modelName: string]: typeof Sequelize.Model | Sequelize.Sequelize | typeof Sequelize }
// let models: TModels
// // eslint-disable-next-line prefer-const
// let modelsLoaded = false;
// // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
// const createModels = () => {
//     if (modelsLoaded) return models;
//     // Get all models
//     const modelsList = getAllModels()
//     // Camel case the models
//     modelsList.forEach(model => {
//         const modelName = toCamelCase(model.name);
//         models[modelName] = model;
//     })
//     models['sequelize'] = sequelize;
//     models['Sequelize'] = Sequelize;
//     return models;
// }
// export const Models = createModels();
//# sourceMappingURL=index.js.map