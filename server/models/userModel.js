const pool = require("../config/db");


// =====================================================
// GET ALL USERS
// =====================================================

const getUsers = async() => {

    const result = await pool.query(`
        SELECT
            u.id,
            u.name,
            u.email,
            u.role,
            u.status,
            u.organization_id,
            o.name AS organization,
            u.created_at
        FROM users u
        LEFT JOIN organizations o
            ON u.organization_id = o.id
        ORDER BY u.id DESC
    `);

    return result.rows;
};


// =====================================================
// GET USER BY ID
// =====================================================

const getUserById = async(id) => {

    const result = await pool.query(`
        SELECT
            u.id,
            u.name,
            u.email,
            u.role,
            u.status,
            u.organization_id,
            o.name AS organization,
            u.created_at
        FROM users u
        LEFT JOIN organizations o
            ON u.organization_id = o.id
        WHERE u.id = $1
    `, [id]);

    return result.rows[0];
};


// =====================================================
// FIND USER BY EMAIL
// =====================================================

const findUserByEmail = async(email) => {

    const result = await pool.query(`
        SELECT
            id,
            name,
            email,
            password,
            role,
            organization_id,
            status,
            created_at
        FROM users
        WHERE LOWER(email) = LOWER($1)
    `, [email]);

    return result.rows[0];
};


// =====================================================
// GET USER STATISTICS
// =====================================================

const getUserStats = async() => {

    const result = await pool.query(`
        SELECT
            COUNT(*)::int AS total_users,

            COUNT(*) FILTER (
                WHERE LOWER(status) = 'active'
            )::int AS active_users,

            COUNT(*) FILTER (
                WHERE LOWER(status) = 'inactive'
            )::int AS inactive_users,

            COUNT(*) FILTER (
                WHERE LOWER(role) = 'teacher'
            )::int AS total_teachers,

            COUNT(*) FILTER (
                WHERE LOWER(role) = 'student'
            )::int AS total_students,

            COUNT(*) FILTER (
                WHERE LOWER(role) = 'admin'
            )::int AS total_admins

        FROM users
    `);

    return result.rows[0];
};


// =====================================================
// CREATE USER
// =====================================================

const createUser = async(
    name,
    email,
    password,
    role,
    organizationId = null,
    status = "Active"
) => {

    const result = await pool.query(`
        INSERT INTO users (
            name,
            email,
            password,
            role,
            organization_id,
            status
        )
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING
            id,
            name,
            email,
            role,
            organization_id,
            status,
            created_at
    `, [
        name,
        email,
        password,
        role,
        organizationId,
        status
    ]);

    return result.rows[0];
};


// =====================================================
// UPDATE USER
// =====================================================

const updateUser = async(
    id,
    name,
    email,
    role,
    organizationId,
    status
) => {

    const result = await pool.query(`
        UPDATE users
        SET
            name = $1,
            email = $2,
            role = $3,
            organization_id = $4,
            status = $5
        WHERE id = $6
        RETURNING
            id,
            name,
            email,
            role,
            organization_id,
            status,
            created_at
    `, [
        name,
        email,
        role,
        organizationId,
        status,
        id
    ]);

    return result.rows[0];
};


// =====================================================
// DELETE USER
// =====================================================

const deleteUser = async(id) => {

    const result = await pool.query(`
        DELETE FROM users
        WHERE id = $1
        RETURNING id
    `, [id]);

    return result.rows[0];
};


// =====================================================
// UPDATE USER STATUS
// =====================================================

const updateUserStatus = async(id, status) => {

    const result = await pool.query(`
        UPDATE users
        SET status = $1
        WHERE id = $2
        RETURNING
            id,
            name,
            email,
            role,
            organization_id,
            status,
            created_at
    `, [status, id]);

    return result.rows[0];
};


// =====================================================
// EXPORT
// =====================================================

module.exports = {

    getUsers,

    getUserById,

    findUserByEmail,

    getUserStats,

    createUser,

    updateUser,

    deleteUser,

    updateUserStatus

};