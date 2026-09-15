const express = require("express");
const cors = require("cors");

const pool = require("./config/db");
const initializeDatabase = require("./config/initDb");

require("dotenv").config();

const organizationRoutes = require("./routes/organizationRoutes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();


// =====================================================
// MIDDLEWARE
// =====================================================

app.use(cors());

app.use(express.json());


// =====================================================
// HOME ROUTE
// =====================================================

app.get("/", (req, res) => {
    res.send("Shiyora server is running!");
});


// =====================================================
// ORGANIZATION ROUTES
// =====================================================

app.use(
    "/api/organizations",
    organizationRoutes
);


// =====================================================
// AUTH ROUTES
// =====================================================

app.use(
    "/api/auth",
    authRoutes
);
//user routes
app.use(
    "/api/users",
    userRoutes
);

// =====================================================
// START SERVER
// =====================================================

const PORT = process.env.PORT || 5000;

const startServer = async() => {

    try {

        // Create database tables automatically
        await initializeDatabase();


        // Test PostgreSQL connection
        const result = await pool.query(
            "SELECT NOW()"
        );


        console.log(
            "Postgres connection successful!"
        );

        console.log(
            "Database time:",
            result.rows[0]
        );


        // Start Express server
        app.listen(PORT, () => {

            console.log(
                `Shiyora server is running on port ${PORT}`
            );

        });

    } catch (error) {

        console.error(
            "Failed to start Shiyora server:",
            error.message
        );

    }

};


startServer();