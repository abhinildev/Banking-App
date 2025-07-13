import { DataTypes,Model } from "sequelize";
import sequelize from "../config/neon.js";

class User extends Model{}


User.init(
    {
        id:{type:DataTypes.UUID,defaultValue:DataTypes.UUIDV4,primaryKey:true},
        name:{type:DataTypes.STRING,allowNull:false},
        email:{type:DataTypes.STRING,allowNull:false,unique:true},
        password:{type:DataTypes.STRING,allowNull:false},
        role:{type:DataTypes.STRING,defaultValue:'user'}
    },{sequelize,modelName:"user"}
)
export default User