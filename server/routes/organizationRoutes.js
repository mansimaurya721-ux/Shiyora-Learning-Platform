const express = require("express");

const router = express.Router();

const {
    getOrganizations,
    createOrganization
} = require("../models/organizationModel");

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


router.post("/", async(req, res) => {

    try {

        const { name, email } = req.body;


        // Check required fields
        if (!name || !email) {

            return res.status(400).json({
                success: false,
                message: "Organization name and email are required"
            });

        }


        // Create organization
        const organization = await createOrganization(
            name,
            email
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

        res.status(500).json({
            success: false,
            message: "Failed to create organization"
        });

    }

});



module.exports = router;