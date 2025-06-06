import { Sequelize } from "sequelize";
   const db = new Sequelize('cruddb','root','',{
    host:'localhost',
    dialect:'mysql'
   });
   export default db;