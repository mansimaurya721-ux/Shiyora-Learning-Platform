const pool = require("./db");

// =====================================================
// INITIALIZE DATABASE
// =====================================================

const initializeDatabase = async() => {

    try {

        // ==============================================
        // ORGANIZATIONS TABLE
        // ==============================================

        await pool.query(`
            CREATE TABLE IF NOT EXISTS organizations (
                id SERIAL PRIMARY KEY,
                name VARCHAR(150) NOT NULL,
                email VARCHAR(150) UNIQUE NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);

        console.log("Organizations table is ready!");


        // ==============================================
        // USERS TABLE
        // ==============================================

        await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                name VARCHAR(150) NOT NULL,
                email VARCHAR(150) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                role VARCHAR(30) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);

        console.log("Users table is ready!");


    } catch (error) {

        console.error(
            "Database initialization error:",
            error.message
        );

        throw error;
    }
};


// =====================================================
// EXPORT
// =====================================================

module.exports = initializeDatabase;