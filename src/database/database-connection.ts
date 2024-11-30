import { Sequelize } from "sequelize";
import "dotenv/config";
const dbName = `${process.env.DB_NAME}`;
const username = `${process.env.DB_USERNAME}`;
const password = `${process.env.DB_PASSWORD}`;


export const DbConfig = new Sequelize(
  dbName,
  username,
  password,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 30000,
    },
    logging: true,
  }
);
