const API_URL = "/api/auth";


// ==========================================
// SIGNUP
// ==========================================

export const signupUser = async(userData) => {

    const response = await fetch(`${API_URL}/signup`, {
        method: "POST",

        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(
            data.message || "Failed to create account"
        );
    }

    return data;
};


// ==========================================
// LOGIN
// ==========================================

export const loginUser = async(loginData) => {

    const response = await fetch(`${API_URL}/login`, {
        method: "POST",

        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify(loginData),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(
            data.message || "Failed to login"
        );
    }

    return data;
};