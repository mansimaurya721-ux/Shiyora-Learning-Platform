const API_URL = "/api/users";


// =====================================================
// GET USERS
// =====================================================

export const getUsers = async() => {
    const response = await fetch(API_URL);

    const data = await response.json();

    if (!response.ok) {
        throw new Error(
            data.message || "Failed to fetch users"
        );
    }

    return data;
};


// =====================================================
// GET USER
// =====================================================

export const getUserById = async(id) => {
    const response = await fetch(`${API_URL}/${id}`);

    const data = await response.json();

    if (!response.ok) {
        throw new Error(
            data.message || "Failed to fetch user"
        );
    }

    return data;
};


// =====================================================
// GET USER STATS
// =====================================================

export const getUserStats = async() => {
    const response = await fetch(`${API_URL}/stats`);

    const data = await response.json();

    if (!response.ok) {
        throw new Error(
            data.message || "Failed to fetch user statistics"
        );
    }

    return data;
};


// =====================================================
// CREATE USER
// =====================================================

export const createUser = async(userData) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(
            data.message || "Failed to create user"
        );
    }

    return data;
};


// =====================================================
// UPDATE USER
// =====================================================

export const updateUser = async(id, userData) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(
            data.message || "Failed to update user"
        );
    }

    return data;
};


// =====================================================
// UPDATE STATUS
// =====================================================

export const updateUserStatus = async(id, status) => {
    const response = await fetch(
        `${API_URL}/${id}/status`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ status }),
        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(
            data.message || "Failed to update user status"
        );
    }

    return data;
};


// =====================================================
// DELETE USER
// =====================================================

export const deleteUser = async(id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(
            data.message || "Failed to delete user"
        );
    }

    return data;
};