const API_URL = "/api/organizations";


// =====================================================
// GET ALL ORGANIZATIONS
// =====================================================

export const getOrganizations = async() => {

    const response = await fetch(API_URL);

    const data = await response.json();

    if (!response.ok) {
        throw new Error(
            data.message || "Failed to fetch organizations"
        );
    }

    return data;
};


// =====================================================
// GET SINGLE ORGANIZATION
// =====================================================

export const getOrganizationById = async(id) => {

    const response = await fetch(`${API_URL}/${id}`);

    const data = await response.json();

    if (!response.ok) {
        throw new Error(
            data.message || "Failed to fetch organization"
        );
    }

    return data;
};


// =====================================================
// CREATE ORGANIZATION
// =====================================================

export const createOrganization = async(organizationData) => {

    const response = await fetch(API_URL, {
        method: "POST",

        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify(organizationData),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(
            data.message || "Failed to create organization"
        );
    }

    return data;
};


// =====================================================
// UPDATE ORGANIZATION
// =====================================================

export const updateOrganization = async(
    id,
    organizationData
) => {

    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",

        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify(organizationData),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(
            data.message || "Failed to update organization"
        );
    }

    return data;
};


// =====================================================
// DELETE ORGANIZATION
// =====================================================

export const deleteOrganization = async(id) => {

    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(
            data.message || "Failed to delete organization"
        );
    }

    return data;
};


// =====================================================
// GET ORGANIZATION STATISTICS
// =====================================================

export const getOrganizationStats = async() => {

    const response = await fetch(`${API_URL}/stats`);

    const data = await response.json();

    if (!response.ok) {
        throw new Error(
            data.message ||
            "Failed to fetch organization statistics"
        );
    }

    return data;
};