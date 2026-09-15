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
                plan VARCHAR(50) DEFAULT 'Basic',
                status VARCHAR(30) DEFAULT 'Active',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);

        // Add columns if organizations table already existed
        await pool.query(`
            ALTER TABLE organizations
            ADD COLUMN IF NOT EXISTS plan VARCHAR(50) DEFAULT 'Basic';
        `);

        await pool.query(`
            ALTER TABLE organizations
            ADD COLUMN IF NOT EXISTS status VARCHAR(30) DEFAULT 'Active';
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
                organization_id INTEGER REFERENCES organizations(id)
                    ON DELETE SET NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);



        // Add organization_id if users table already existed
        await pool.query(`
            ALTER TABLE users
            ADD COLUMN IF NOT EXISTS organization_id INTEGER
            REFERENCES organizations(id)
            ON DELETE SET NULL;
        `);
        await pool.query(`
             ALTER TABLE users
             ADD COLUMN IF NOT EXISTS status VARCHAR(30) DEFAULT 'Active';
             `);

        console.log("Users table is ready!");


        // ==============================================
        // COURSES TABLE
        // ==============================================

        await pool.query(`
            CREATE TABLE IF NOT EXISTS courses (
                id SERIAL PRIMARY KEY,
                title VARCHAR(200) NOT NULL,
                description TEXT,
                organization_id INTEGER REFERENCES organizations(id)
                    ON DELETE CASCADE,
                created_by INTEGER REFERENCES users(id)
                    ON DELETE SET NULL,
                status VARCHAR(30) DEFAULT 'Active',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);

        console.log("Courses table is ready!");


        // ==============================================
        // LESSONS TABLE
        // ==============================================

        await pool.query(`
            CREATE TABLE IF NOT EXISTS lessons (
                id SERIAL PRIMARY KEY,
                course_id INTEGER NOT NULL REFERENCES courses(id)
                    ON DELETE CASCADE,
                title VARCHAR(200) NOT NULL,
                description TEXT,
                video_url TEXT,
                pdf_url TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);

        console.log("Lessons table is ready!");


        // ==============================================
        // ENROLLMENTS TABLE
        // ==============================================

        await pool.query(`
            CREATE TABLE IF NOT EXISTS enrollments (
                id SERIAL PRIMARY KEY,
                user_id INTEGER NOT NULL REFERENCES users(id)
                    ON DELETE CASCADE,
                course_id INTEGER NOT NULL REFERENCES courses(id)
                    ON DELETE CASCADE,
                enrolled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

                UNIQUE(user_id, course_id)
            );
        `);

        console.log("Enrollments table is ready!");


        // ==============================================
        // SUBSCRIPTIONS TABLE
        // ==============================================

        await pool.query(`
            CREATE TABLE IF NOT EXISTS subscriptions (
                id SERIAL PRIMARY KEY,
                organization_id INTEGER NOT NULL
                    REFERENCES organizations(id)
                    ON DELETE CASCADE,
                plan VARCHAR(50) NOT NULL,
                status VARCHAR(30) DEFAULT 'Active',
                start_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                end_date TIMESTAMP
            );
        `);

        console.log("Subscriptions table is ready!");


        // ==============================================
        // DATABASE INITIALIZATION COMPLETE
        // ==============================================

        console.log("Shiyora database initialization completed!");

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