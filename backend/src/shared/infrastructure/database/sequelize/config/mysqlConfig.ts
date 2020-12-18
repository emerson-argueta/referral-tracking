/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/camelcase */
import { Sequelize } from 'sequelize'

const {
    REFERRAL_TRACKING_DB_USER,
    REFERRAL_TRACKING_DB_PASS,
    REFERRAL_TRACKING_DB_HOST,
    REFERRAL_TRACKING_DB_DEV_DB_NAME,
    REFERRAL_TRACKING_DB_TEST_DB_NAME,
    REFERRAL_TRACKING_DB_PROD_DB_NAME,
    NODE_ENV,
    REFERRAL_TRACKING_IS_PRODUCTION,
    CLEARDB_DATABASE_URL
} = process.env;

export const databaseCredentials = {
    "development": {
        "username": REFERRAL_TRACKING_DB_USER,
        "password": REFERRAL_TRACKING_DB_PASS,
        "database": REFERRAL_TRACKING_DB_DEV_DB_NAME,
        "host": REFERRAL_TRACKING_DB_HOST,
        "dialect": "mysql"
    },
    "test": {
        "username": REFERRAL_TRACKING_DB_USER,
        "password": REFERRAL_TRACKING_DB_PASS,
        "database": REFERRAL_TRACKING_DB_TEST_DB_NAME,
        "host": REFERRAL_TRACKING_DB_HOST,
        "dialect": "mysql"
    },
    "production": {
        "username": REFERRAL_TRACKING_DB_USER,
        "password": REFERRAL_TRACKING_DB_PASS,
        "database": REFERRAL_TRACKING_DB_PROD_DB_NAME,
        "host": REFERRAL_TRACKING_DB_HOST,
        "dialect": "mysql"
    }
};

const node_env = NODE_ENV as 'development' | 'production' | 'test'
const {
    username, password, database, host, dialect
} = databaseCredentials[node_env];

const mode = REFERRAL_TRACKING_IS_PRODUCTION === "true" ? 'prod' : 'dev';

console.log(`[DB]: Connecting to the database in ${mode} mode.`)

const squelizeDialect = dialect as "mysql" | "postgres"

// export const MysqlConnection = REFERRAL_TRACKING_IS_PRODUCTION === "true"
//     ? new Sequelize(CLEARDB_DATABASE_URL || '')
//     : new Sequelize(database || '', username || '', password || '', {
//         host: host || '',
//         dialect: squelizeDialect,
//         port: 3306,
//         dialectOptions: {
//             multipleStatements: true,
//         },
//         pool: {
//             max: 5,
//             min: 0,
//             idle: 10000
//         },
//         logging: false
//     }
//     );
