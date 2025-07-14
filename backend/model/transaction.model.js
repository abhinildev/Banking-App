import DataTypes from "sequelize";
import sequelize from "../config/neon.js";
import User from "./user.model.js";

const Transaction=sequelize.define("Transaction",{
    type:{
        type:DataTypes.STRING,
        allowNull:false
    },
    amount:{
        type:DataTypes.FLOAT,
        allowNull:false
    },
    date:{
        type:DataTypes.DATE,
        defaultValue:DataTypes.NOW
    },
    category:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:'Uncategorized'
    }
})

User.hasMany(Transaction,{foreignKey:"userId"})
Transaction.belongsTo(User,{foreignKey:"userId"})
export default Transaction