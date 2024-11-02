import { Sequelize } from 'sequelize'; 
import dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize('node_todo_simples', 'root', '', {
    host: 'localhost',
    dialect: 'mysql', 
    port: 3306, 
});