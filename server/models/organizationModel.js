const pool = require("../config/db");


// =====================================================
// GET ALL ORGANIZATIONS
// =====================================================

const getOrganizations = async() => {

    const result = await pool.query(`
        SELECT
            o.id,
            o.name,
            o.email,
            o.plan,
            o.status,
            o.created_at,

            COUNT(DISTINCT u.id)::int AS users,
            COUNT(DISTINCT c.id)::int AS courses

        FROM organizations o

        LEFT JOIN users u
            ON u.organization_id = o.id

        LEFT JOIN courses c
            ON c.organization_id = o.id

        GROUP BY
            o.id,
            o.name,
            o.email,
            o.plan,
            o.status,
            o.created_at

        ORDER BY o.id DESC
    `);

    return result.rows;
};


// =====================================================
// GET SINGLE ORGANIZATION
// =====================================================

const getOrganizationById = async(id) => {

    const result = await pool.query(`
        SELECT
            o.id,
            o.name,
            o.email,
            o.plan,
            o.status,
            o.created_at,

            COUNT(DISTINCT u.id)::int AS users,
            COUNT(DISTINCT c.id)::int AS courses

        FROM organizations o

        LEFT JOIN users u
            ON u.organization_id = o.id

        LEFT JOIN courses c
            ON c.organization_id = o.id

        WHERE o.id = $1

        GROUP BY
            o.id,
            o.name,
            o.email,
            o.plan,
            o.status,
            o.created_at
    `, [id]);

    return result.rows[0];
};


// =====================================================
// CREATE ORGANIZATION
// =====================================================

const createOrganization = async(
    name,
    email,
    plan = "Basic"
) => {

    const result = await pool.query(`
        INSERT INTO organizations
        (
            name,
            email,
            plan
        )

        VALUES ($1, $2, $3)

        RETURNING
            id,
            name,
            email,
            plan,
            status,
            created_at
    `, [
        name,
        email,
        plan
    ]);

    return result.rows[0];
};


// =====================================================
// UPDATE ORGANIZATION
// =====================================================

const updateOrganization = async(
    id,
    name,
    email,
    plan,
    status
) => {

    const result = await pool.query(`
        UPDATE organizations

        SET
            name = $1,
            email = $2,
            plan = $3,
            status = $4

        WHERE id = $5

        RETURNING
            id,
            name,
            email,
            plan,
            status,
            created_at
    `, [
        name,
        email,
        plan,
        status,
        id
    ]);

    return result.rows[0];
};


// =====================================================
// DELETE ORGANIZATION
// =====================================================

const deleteOrganization = async(id) => {

    const result = await pool.query(`
        DELETE FROM organizations

        WHERE id = $1

        RETURNING id
    `, [id]);

    return result.rows[0];
};


// =====================================================
// ORGANIZATION STATISTICS
// =====================================================

const getOrganizationStats = async() => {

    const result = await pool.query(`
        SELECT

            COUNT(*)::int AS total_organizations,

            COUNT(*) FILTER (
                WHERE LOWER(status) = 'active'
            )::int AS active_organizations,

            COALESCE(
                (
                    SELECT COUNT(*)
                    FROM users
                ),
                0
            )::int AS total_users,

            COALESCE(
                (
                    SELECT COUNT(*)
                    FROM courses
                ),
                0
            )::int AS total_courses

        FROM organizations
    `);

    return result.rows[0];
};


// =====================================================
// EXPORT
// =====================================================

module.exports = {

    getOrganizations,

    getOrganizationById,

    createOrganization,

    updateOrganization,

    deleteOrganization,

    getOrganizationStats

};