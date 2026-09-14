const express = require("express");

const router = express.Router();

const {
    getOrganizations,
    getOrganizationById,
    createOrganization,
    updateOrganization,
    deleteOrganization,
    getOrganizationStats
} = require("../models/organizationModel");


// =====================================================
// GET ORGANIZATION STATISTICS
// GET /api/organizations/stats
// IMPORTANT: MUST BE BEFORE /:id
// =====================================================

router.get("/stats", async(req, res) => {

    try {

        const stats = await getOrganizationStats();

        res.status(200).json({
            success: true,
            data: stats
        });

    } catch (error) {

        console.error(
            "Error fetching organization stats:",
            error.message
        );

        res.status(500).json({
            success: false,
            message: "Failed to fetch organization statistics"
        });
    }
});


// =====================================================
// GET ALL ORGANIZATIONS
// GET /api/organizations
// =====================================================

router.get("/", async(req, res) => {

    try {

        const organizations = await getOrganizations();

        res.status(200).json({
            success: true,
            count: organizations.length,
            data: organizations
        });

    } catch (error) {

        console.error(
            "Error fetching organizations:",
            error.message
        );

        res.status(500).json({
            success: false,
            message: "Failed to fetch organizations"
        });
    }
});


// =====================================================
// GET ORGANIZATION BY ID
// GET /api/organizations/:id
// =====================================================

router.get("/:id", async(req, res) => {

    try {

        const { id } = req.params;


        // ----------------------------------------------
        // VALIDATE ID
        // ----------------------------------------------

        const organizationId = Number(id);

        if (!Number.isInteger(organizationId) || organizationId <= 0) {

            return res.status(400).json({
                success: false,
                message: "Invalid organization ID"
            });
        }


        // ----------------------------------------------
        // GET ORGANIZATION
        // ----------------------------------------------

        const organization =
            await getOrganizationById(organizationId);


        if (!organization) {

            return res.status(404).json({
                success: false,
                message: "Organization not found"
            });
        }


        res.status(200).json({
            success: true,
            data: organization
        });

    } catch (error) {

        console.error(
            "Error fetching organization:",
            error.message
        );

        res.status(500).json({
            success: false,
            message: "Failed to fetch organization"
        });
    }
});


// =====================================================
// CREATE ORGANIZATION
// POST /api/organizations
// =====================================================

router.post("/", async(req, res) => {

    try {

        const {
            name,
            email,
            plan
        } = req.body;


        // ----------------------------------------------
        // VALIDATION
        // ----------------------------------------------

        if (!name || !email) {

            return res.status(400).json({
                success: false,
                message: "Organization name and email are required"
            });
        }


        // ----------------------------------------------
        // CREATE ORGANIZATION
        // ----------------------------------------------

        const organization = await createOrganization(
            name.trim(),
            email.trim().toLowerCase(),
            plan || "Basic"
        );


        res.status(201).json({
            success: true,
            message: "Organization created successfully",
            data: organization
        });

    } catch (error) {

        console.error(
            "Error creating organization:",
            error.message
        );


        // PostgreSQL UNIQUE violation

        if (error.code === "23505") {

            return res.status(409).json({
                success: false,
                message: "Organization email is already registered"
            });
        }


        res.status(500).json({
            success: false,
            message: "Failed to create organization"
        });
    }
});


// =====================================================
// UPDATE ORGANIZATION
// PUT /api/organizations/:id
// =====================================================

router.put("/:id", async(req, res) => {

    try {

        const { id } = req.params;


        // ----------------------------------------------
        // VALIDATE ID
        // ----------------------------------------------

        const organizationId = Number(id);

        if (!Number.isInteger(organizationId) || organizationId <= 0) {

            return res.status(400).json({
                success: false,
                message: "Invalid organization ID"
            });
        }


        const {
            name,
            email,
            plan,
            status
        } = req.body;


        // ----------------------------------------------
        // VALIDATE DATA
        // ----------------------------------------------

        if (!name || !email) {

            return res.status(400).json({
                success: false,
                message: "Organization name and email are required"
            });
        }


        // ----------------------------------------------
        // UPDATE ORGANIZATION
        // ----------------------------------------------

        const organization = await updateOrganization(
            organizationId,
            name.trim(),
            email.trim().toLowerCase(),
            plan || "Basic",
            status || "Active"
        );


        if (!organization) {

            return res.status(404).json({
                success: false,
                message: "Organization not found"
            });
        }


        res.status(200).json({
            success: true,
            message: "Organization updated successfully",
            data: organization
        });

    } catch (error) {

        console.error(
            "Error updating organization:",
            error.message
        );


        // PostgreSQL UNIQUE violation

        if (error.code === "23505") {

            return res.status(409).json({
                success: false,
                message: "Organization email is already registered"
            });
        }


        res.status(500).json({
            success: false,
            message: "Failed to update organization"
        });
    }
});


// =====================================================
// DELETE ORGANIZATION
// DELETE /api/organizations/:id
// =====================================================

router.delete("/:id", async(req, res) => {

    try {

        const { id } = req.params;


        // ----------------------------------------------
        // VALIDATE ID
        // ----------------------------------------------

        const organizationId = Number(id);

        if (!Number.isInteger(organizationId) || organizationId <= 0) {

            return res.status(400).json({
                success: false,
                message: "Invalid organization ID"
            });
        }


        // ----------------------------------------------
        // DELETE ORGANIZATION
        // ----------------------------------------------

        const organization =
            await deleteOrganization(organizationId);


        if (!organization) {

            return res.status(404).json({
                success: false,
                message: "Organization not found"
            });
        }


        res.status(200).json({
            success: true,
            message: "Organization deleted successfully",
            data: organization
        });

    } catch (error) {

        console.error(
            "Error deleting organization:",
            error.message
        );

        res.status(500).json({
            success: false,
            message: "Failed to delete organization"
        });
    }
});


// =====================================================
// EXPORT
// =====================================================

module.exports = router;