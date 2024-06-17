import mysql from 'mysql2';
import 'dotenv/config';

export const pool =  mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
}).promise();

export const query = async (sql, args) => {
    return await pool.query(sql, args);
} 