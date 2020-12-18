"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Models = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const Sequelize = __importStar(require("sequelize"));
const postgresConfig_1 = require("../config/postgresConfig");
const sequelize = postgresConfig_1.PostgresConnection;
// turns base_user => BaseUser
const toCamelCase = (str) => {
    const _ = str.indexOf("_");
    if (~_) {
        return toCamelCase(str.substring(0, _)
            + str.substring(_ + 1)
                .substring(0, 1)
                .toUpperCase()
            + str.substring(_ + 2));
    }
    else {
        return str.substring(0, 1).toUpperCase() + str.substring(1);
    }
};
const getAllModels = () => {
    return fs.readdirSync(path.resolve(__dirname, "./"))
        .filter((t) => (~t.indexOf('.ts') || ~t.indexOf('.js')) && !~t.indexOf("index") && !~t.indexOf(".map"))
        .map((model) => sequelize.import(__dirname + '/' + model));
};
let models;
// eslint-disable-next-line prefer-const
let modelsLoaded = false;
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const createModels = () => {
    if (modelsLoaded)
        return models;
    // Get all models
    const modelsList = getAllModels();
    // Camel case the models
    modelsList.forEach(model => {
        const modelName = toCamelCase(model.name);
        models[modelName] = model;
    });
    models['sequelize'] = sequelize;
    models['Sequelize'] = Sequelize;
    return models;
};
exports.Models = createModels();
//# sourceMappingURL=index.js.map