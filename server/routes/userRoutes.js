const express = require("express");

const router = express.Router();

const {
    getUsers,
    getUserById,
    getUserStats,
    createUser,
    updateUser,
    deleteUser,
    updateUserStatus
} = require("../models/userModel");

const bcrypt = require("bcrypt");

// =====================================================
// USER STATISTICS
// IMPORTANT: Keep /stats before /:id
// =====================================================

router.get("/stats", async(req, res) => {
    try {
        const stats = await getUserStats();

        res.status(200).json({
            success: true,
            data: stats
        });

    } catch (error) {
        console.error(
            "Error fetching user stats:",
            error.message
        );

        res.status(500).json({
            success: false,
            message: "Failed to fetch user statistics"
        });
    }
});


// =====================================================
// GET ALL USERS
// =====================================================

router.get("/", async(req, res) => {
    try {
        const users = await getUsers();

        res.status(200).json({
            success: true,
            count: users.length,
            data: users
        });

    } catch (error) {
        console.error(
            "Error fetching users:",
            error.message
        );

        res.status(500).json({
            success: false,
            message: "Failed to fetch users"
        });
    }
});


// =====================================================
// GET USER BY ID
// =====================================================

router.get("/:id", async(req, res) => {
    try {
        const userId = Number(req.params.id);

        if (!Number.isInteger(userId) || userId <= 0) {
            return res.status(400).json({
                success: false,
                message: "Invalid user ID"
            });
        }

        const user = await getUserById(userId);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            data: user
        });

    } catch (error) {
        console.error(
            "Error fetching user:",
            error.message
        );

        res.status(500).json({
            success: false,
            message: "Failed to fetch user"
        });
    }
});


// =====================================================
// CREATE USER
// =====================================================

router.post("/", async(req, res) => {
    try {
        const {
            name,
            email,
            password,
            role,
            organizationId,
            status
        } = req.body;

        if (!name || !email || !password || !role) {
            return res.status(400).json({
                success: false,
                message: "Name, email, password and role are required"
            });
        }

        const normalizedEmail =
            email.trim().toLowerCase();

        const hashedPassword =
            await bcrypt.hash(password, 10);

        const user = await createUser(
            name.trim(),
            normalizedEmail,
            hashedPassword,
            role,
            organizationId || null,
            status || "Active"
        );

        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: user
        });

    } catch (error) {
        console.error(
            "Error creating user:",
            error.message
        );

        if (error.code === "23505") {
            return res.status(409).json({
                success: false,
                message: "Email is already registered"
            });
        }

        res.status(500).json({
            success: false,
            message: "Failed to create user"
        });
    }
});


// =====================================================
// UPDATE USER
// =====================================================

router.put("/:id", async(req, res) => {
    try {
        const userId = Number(req.params.id);

        if (!Number.isInteger(userId) || userId <= 0) {
            return res.status(400).json({
                success: false,
                message: "Invalid user ID"
            });
        }

        const {
            name,
            email,
            role,
            organizationId,
            status
        } = req.body;

        if (!name || !email || !role) {
            return res.status(400).json({
                success: false,
                message: "Name, email and role are required"
            });
        }

        const user = await updateUser(
            userId,
            name.trim(),
            email.trim().toLowerCase(),
            role,
            organizationId || null,
            status || "Active"
        );

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "User updated successfully",
            data: user
        });

    } catch (error) {
        console.error(
            "Error updating user:",
            error.message
        );

        if (error.code === "23505") {
            return res.status(409).json({
                success: false,
                message: "Email is already registered"
            });
        }

        res.status(500).json({
            success: false,
            message: "Failed to update user"
        });
    }
});


// =====================================================
// UPDATE USER STATUS
// =====================================================

router.patch("/:id/status", async(req, res) => {
    try {
        const userId = Number(req.params.id);
        const { status } = req.body;

        if (!Number.isInteger(userId) || userId <= 0) {
            return res.status(400).json({
                success: false,
                message: "Invalid user ID"
            });
        }

        if (!status) {
            return res.status(400).json({
                success: false,
                message: "Status is required"
            });
        }

        const user = await updateUserStatus(
            userId,
            status
        );

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "User status updated successfully",
            data: user
        });

    } catch (error) {
        console.error(
            "Error updating user status:",
            error.message
        );

        res.status(500).json({
            success: false,
            message: "Failed to update user status"
        });
    }
});


// =====================================================
// DELETE USER
// =====================================================

router.delete("/:id", async(req, res) => {
    try {
        const userId = Number(req.params.id);

        if (!Number.isInteger(userId) || userId <= 0) {
            return res.status(400).json({
                success: false,
                message: "Invalid user ID"
            });
        }

        const user = await deleteUser(userId);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "User deleted successfully",
            data: user
        });

    } catch (error) {
        console.error(
            "Error deleting user:",
            error.message
        );

        res.status(500).json({
            success: false,
            message: "Failed to delete user"
        });
    }
});


module.exports = router;