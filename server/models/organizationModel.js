const pool = require("../config/db");
const getOrganizations = async() => {
    const result = await pool.query(
        "SELECT * FROM organizations ORDER BY id DESC"
    );

    return result.rows;
};
const createOrganization = async(name, email) => {

    const result = await pool.query(
        `
        INSERT INTO organizations (name, email)
        VALUES ($1, $2)
        RETURNING *
        `, [name, email]
    );

    return result.rows[0];
};
module.exports = {
    getOrganizations,
    createOrganization
};