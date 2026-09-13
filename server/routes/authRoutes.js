const jwt = require("jsonwebtoken");
const express = require("express");
const bcrypt = require("bcrypt");

const router = express.Router();

const {
    findUserByEmail,
    createUser
} = require("../models/userModel");


// ==========================================
// SIGNUP
// ==========================================

router.post("/signup", async(req, res) => {

    try {

        const { name, email, password, role } = req.body;


        // Check required fields
        if (!name || !email || !password || !role) {

            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });

        }


        // Check if user already exists
        const existingUser = await findUserByEmail(email);

        if (existingUser) {

            return res.status(409).json({
                success: false,
                message: "Email is already registered"
            });

        }


        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);


        // Create user
        const user = await createUser(
            name,
            email,
            hashedPassword,
            role
        );


        // Response
        res.status(201).json({
            success: true,
            message: "Account created successfully",
            data: user
        });

    } catch (error) {

        console.error(
            "Signup error:",
            error.message
        );

        res.status(500).json({
            success: false,
            message: "Failed to create account"
        });

    }

});


// ==========================================
// LOGIN
// ==========================================

router.post("/login", async(req, res) => {

    try {

        const { email, password } = req.body;


        // Check required fields
        if (!email || !password) {

            return res.status(400).json({
                success: false,
                message: "Email and password are required"
            });

        }


        // Find user by email
        const user = await findUserByEmail(email);


        // User not found
        if (!user) {

            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });

        }


        // Compare password with hashed password
        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        );


        // Wrong password
        if (!isPasswordCorrect) {

            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });

        }
        const token = jwt.sign({
                id: user.id,
                email: user.email,
                role: user.role
            },
            process.env.JWT_SECRET, {
                expiresIn: "id"
            });


        // Login successful
        res.status(200).json({

            success: true,

            message: "Login successful",

            data: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
            },
            token: token

        });

    } catch (error) {

        console.error(
            "Login error:",
            error.message
        );

        res.status(500).json({
            success: false,
            message: "Failed to login"
        });

    }

});


module.exports = router;