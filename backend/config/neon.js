import {Sequelize} from "sequelize-typescript"
import dotenv from "dotenv"

dotenv.config()

const dburi=process.env.DB_URI
const sequelize= new Sequelize(dburi,{
    dialect:'postgres',
    protocol:'postgres',
    logging:false,
    dialectOptions:{
        ssl:{
            require:false,
            rejectUnauthorized:false
        }
    }
})
export default sequelize