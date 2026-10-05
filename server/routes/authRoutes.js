const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router();

const {
    findUserByEmail,
    createUser
} = require("../models/userModel");


// =====================================================
// SIGNUP
// =====================================================

router.post("/signup", async(req, res) => {
    try {
        const {
            name,
            email,
            password,
            role
        } = req.body;

        console.log("=================================");
        console.log("SIGNUP REQUEST");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Role:", role);
        console.log("Password received:", !!password);
        console.log("=================================");

        // Validate fields
        if (!name || !email || !password || !role) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        // Check existing user
        const existingUser =
            await findUserByEmail(email);

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "Email is already registered"
            });
        }

        // Hash password
        const hashedPassword =
            await bcrypt.hash(password, 10);

        console.log("Password hashed successfully");

        // Create user
        const user = await createUser(
            name,
            email,
            hashedPassword,
            role
        );

        console.log("User created successfully:", {
            id: user.id,
            email: user.email,
            role: user.role
        });

        res.status(201).json({
            success: true,
            message: "Account created successfully",
            data: user
        });

    } catch (error) {

        console.error("Signup error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to create account"
        });
    }
});


// =====================================================
// LOGIN
// =====================================================

router.post("/login", async(req, res) => {
    try {

        const {
            email,
            password
        } = req.body;


        console.log("");
        console.log("=================================");
        console.log("LOGIN REQUEST");
        console.log("Email:", email);
        console.log("Password received:", !!password);
        console.log("=================================");


        // ---------------------------------------------
        // Validate fields
        // ---------------------------------------------

        if (!email || !password) {

            console.log("Login validation failed");

            return res.status(400).json({
                success: false,
                message: "Email and password are required"
            });
        }


        // ---------------------------------------------
        // Find user
        // ---------------------------------------------

        const user =
            await findUserByEmail(email);


        console.log(
            "USER FOUND:", !!user
        );


        // ---------------------------------------------
        // User does not exist
        // ---------------------------------------------

        if (!user) {

            console.log(
                "NO USER FOUND FOR:",
                email
            );

            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }


        // ---------------------------------------------
        // User information
        // ---------------------------------------------

        console.log("USER DETAILS:", {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            organization_id: user.organization_id,
            status: user.status,
            hasPassword: !!user.password
        });


        // ---------------------------------------------
        // Check password
        // ---------------------------------------------

        const isPasswordCorrect =
            await bcrypt.compare(
                password,
                user.password
            );


        console.log(
            "PASSWORD MATCH:",
            isPasswordCorrect
        );


        // ---------------------------------------------
        // Wrong password
        // ---------------------------------------------

        if (!isPasswordCorrect) {

            console.log(
                "PASSWORD DOES NOT MATCH"
            );

            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }


        // ---------------------------------------------
        // Check JWT secret
        // ---------------------------------------------

        if (!process.env.JWT_SECRET) {

            console.error(
                "JWT_SECRET is missing from .env"
            );

            return res.status(500).json({
                success: false,
                message: "Server authentication configuration error"
            });
        }


        // ---------------------------------------------
        // Generate JWT token
        // ---------------------------------------------

        const token = jwt.sign({
                id: user.id,
                email: user.email,
                role: user.role
            },
            process.env.JWT_SECRET, {
                expiresIn: "1d"
            }
        );


        console.log(
            "JWT TOKEN GENERATED"
        );


        // ---------------------------------------------
        // Login successful
        // ---------------------------------------------

        console.log(
            "LOGIN SUCCESS:",
            user.email
        );

        console.log("=================================");
        console.log("");


        res.status(200).json({

            success: true,

            message: "Login successful",

            data: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
                organization_id: user.organization_id,
                status: user.status
            },

            token: token
        });


    } catch (error) {

        console.error("");
        console.error("=================================");
        console.error("LOGIN ERROR");
        console.error(error);
        console.error("=================================");
        console.error("");

        res.status(500).json({
            success: false,
            message: "Failed to login"
        });
    }
});


module.exports = router;