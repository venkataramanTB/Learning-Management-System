const mysql = require('mysql2/promise');
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();
// Database configuration
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: 3306,
  ssl: { ca: fs.readFileSync('./DigiCertGlobalRootCA.crt.pem') },
  connectionLimit: 10, // Adjust the connection limit as needed
};

// Create a connection pool
const pool = mysql.createPool(dbConfig);

const executeQuery = async(query) => {
  let connection;
  try {
    connection = await pool.getConnection();

    const [rows] = await connection.execute(query);
    console.log("Connection Successful....!");
    return rows;
  } catch (error) {
    // Handle the error or log it
    console.error('Error executing query:', error.message);
    throw error; // Re-throw the error to be handled by the calling code
  } finally {
    if (connection) {
      connection.release(); // Always release the connection, even if an error occurred
    }
  }
}

// Export the executeQuery function for use in other modules
module.exports = { executeQuery };