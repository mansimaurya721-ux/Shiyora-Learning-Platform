import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Login from "./Login";
import Signup from "./Signup";

import {
    signupUser,
    loginUser
} from "../../services/authService";


function Auth() {

    const location = useLocation();
    const navigate = useNavigate();


    // ==========================================
    // AUTH MODE
    // ==========================================

    const [isSignup, setIsSignup] = useState(
        location.pathname === "/signup"
    );


    // ==========================================
    // LOGIN STATE
    // ==========================================

    const [loginEmail, setLoginEmail] = useState(
        localStorage.getItem(
            "shiyoraRememberedEmail"
        ) || ""
    );

    const [loginPassword, setLoginPassword] =
        useState("");

    const [rememberMe, setRememberMe] = useState(
        Boolean(
            localStorage.getItem(
                "shiyoraRememberedEmail"
            )
        )
    );


    // ==========================================
    // SIGNUP STATE
    // ==========================================

    const [signupName, setSignupName] =
        useState("");

    const [signupEmail, setSignupEmail] =
        useState("");

    const [signupRole, setSignupRole] =
        useState("");

    const [signupPassword, setSignupPassword] =
        useState("");

    const [confirmPassword, setConfirmPassword] =
        useState("");

    const [agreeTerms, setAgreeTerms] =
        useState(false);


    // ==========================================
    // UI STATE
    // ==========================================

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);


    // ==========================================
    // ROUTE SYNC
    // ==========================================

    useEffect(() => {

        setIsSignup(
            location.pathname === "/signup"
        );

        setError("");
        setSuccess("");

    }, [location.pathname]);


    // ==========================================
    // GO TO LOGIN
    // ==========================================

    const goToLogin = () => {

        setError("");
        setSuccess("");

        setIsSignup(false);

        navigate("/login", {
            replace: true
        });

    };


    // ==========================================
    // GO TO SIGNUP
    // ==========================================

    const goToSignup = () => {

        setError("");
        setSuccess("");

        setIsSignup(true);

        navigate("/signup", {
            replace: true
        });

    };


    // ==========================================
    // LOGIN
    // ==========================================

    const handleLogin = async () => {

        setError("");
        setSuccess("");


        // ==========================================
        // CLEAN EMAIL
        // ==========================================

        const email =
            loginEmail.trim().toLowerCase();


        // ==========================================
        // VALIDATION
        // ==========================================

        if (!email || !loginPassword) {

            setError(
                "Please enter your email and password."
            );

            return;
        }


        try {

            setLoading(true);


            // ==========================================
            // LOGIN WITH BACKEND
            // ==========================================

            const response = await loginUser({

                email: email,

                password: loginPassword

            });


            // ==========================================
            // GET USER
            // ==========================================

            const user = response.data;


            // ==========================================
            // SAVE USER
            // ==========================================

            localStorage.setItem(
                "shiyoraUser",
                JSON.stringify(user)
            );

            localStorage.setItem(
                "isLoggedIn",
                "true"
            );

            localStorage.setItem(
                "userRole",
                user.role
            );


            // ==========================================
            // REMEMBER EMAIL
            // ==========================================

            if (rememberMe) {

                localStorage.setItem(
                    "shiyoraRememberedEmail",
                    email
                );

            } else {

                localStorage.removeItem(
                    "shiyoraRememberedEmail"
                );

            }


            // ==========================================
            // ROLE REDIRECT
            // ==========================================

            switch (user.role) {

                case "teacher":

                    navigate(
                        "/teacher/dashboard"
                    );

                    break;


                case "organization":

                    navigate(
                        "/admin/dashboard"
                    );

                    break;


                case "superadmin":

                    navigate(
                        "/superadmin/dashboard"
                    );

                    break;


                case "student":

                    navigate(
                        "/student/dashboard"
                    );

                    break;


                default:

                    setError(
                        "Invalid user role."
                    );

                    break;
            }


        } catch (err) {

            console.error(
                "Login error:",
                err
            );

            setError(
                err.message ||
                "Invalid email or password."
            );


        } finally {

            setLoading(false);

        }

    };


    // ==========================================
    // SIGNUP
    // ==========================================

    const handleSignup = async () => {

        setError("");
        setSuccess("");


        // ==========================================
        // CLEAN INPUT
        // ==========================================

        const name =
            signupName.trim();

        const email =
            signupEmail.trim().toLowerCase();


        // ==========================================
        // REQUIRED FIELD VALIDATION
        // ==========================================

        if (
            !name ||
            !email ||
            !signupRole
        ) {

            setError(
                "Please complete all required fields."
            );

            return;
        }


        // ==========================================
        // PASSWORD VALIDATION
        // ==========================================

        if (
            !signupPassword ||
            !confirmPassword
        ) {

            setError(
                "Please enter your password."
            );

            return;
        }


        if (
            signupPassword.length < 6
        ) {

            setError(
                "Password must contain at least 6 characters."
            );

            return;
        }


        if (
            signupPassword !==
            confirmPassword
        ) {

            setError(
                "Passwords do not match."
            );

            return;
        }


        // ==========================================
        // TERMS VALIDATION
        // ==========================================

        if (!agreeTerms) {

            setError(
                "Please accept the Terms and Privacy Policy."
            );

            return;
        }


        // ==========================================
        // SEND SIGNUP TO BACKEND
        // ==========================================

        try {

            setLoading(true);


            const response =
                await signupUser({

                    name: name,

                    email: email,

                    password: signupPassword,

                    role: signupRole

                });


            // ==========================================
            // SUCCESS
            // ==========================================

            setSuccess(
                response.message ||
                "Account created successfully!"
            );


            // ==========================================
            // CLEAR SIGNUP FORM
            // ==========================================

            setSignupName("");
            setSignupEmail("");
            setSignupRole("");
            setSignupPassword("");
            setConfirmPassword("");
            setAgreeTerms(false);


            // ==========================================
            // MOVE TO LOGIN
            // ==========================================

            setTimeout(() => {

                goToLogin();

            }, 1200);


        } catch (err) {

            console.error(
                "Signup error:",
                err
            );

            setError(
                err.message ||
                "Unable to create account."
            );


        } finally {

            setLoading(false);

        }

    };


    // ==========================================
    // GOOGLE AUTH
    // ==========================================

    const handleGoogleAuth = () => {

        window.location.href =
            "/api/auth/google";

    };


    // ==========================================
    // LINKEDIN AUTH
    // ==========================================

    const handleLinkedInAuth = () => {

        window.location.href =
            "/api/auth/linkedin";

    };


    // ==========================================
    // FORGOT PASSWORD
    // ==========================================

    const handleForgotPassword =
        async () => {

            setError("");
            setSuccess("");


            const email =
                loginEmail
                    .trim()
                    .toLowerCase();


            if (!email) {

                setError(
                    "Enter your email address first."
                );

                return;
            }


            try {

                setLoading(true);


                const response =
                    await fetch(
                        "/api/auth/forgot-password",
                        {
                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "application/json"
                            },

                            body: JSON.stringify({
                                email
                            })
                        }
                    );


                const data =
                    await response.json();


                if (!response.ok) {

                    throw new Error(
                        data.message ||
                        "Unable to reset password."
                    );

                }


                setSuccess(
                    data.message ||
                    "Password reset instructions have been sent."
                );


            } catch (err) {

                setError(
                    err.message ||
                    "Password reset service is not available yet."
                );


            } finally {

                setLoading(false);

            }

        };


    // ==========================================
    // UI
    // ==========================================

    return (

        <main className="min-h-screen bg-slate-50 dark:bg-[#06101d]">

            <div className="flex min-h-screen items-center justify-center px-3 py-4 sm:px-5">

                {/* ======================================
                    AUTH VIEWPORT
                ======================================= */}

                <div className="w-full max-w-5xl overflow-hidden rounded-[24px]">

                    {/* ==================================
                        HORIZONTAL SLIDER
                    =================================== */}

                    <div
                        className="flex w-[200%] items-start transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
                        style={{
                            transform:
                                isSignup
                                    ? "translateX(-50%)"
                                    : "translateX(0)"
                        }}
                    >

                        {/* ==================================
                            LOGIN
                        =================================== */}

                        <div className="w-1/2 shrink-0">

                            <Login

                                loginEmail={
                                    loginEmail
                                }

                                setLoginEmail={
                                    setLoginEmail
                                }

                                loginPassword={
                                    loginPassword
                                }

                                setLoginPassword={
                                    setLoginPassword
                                }

                                rememberMe={
                                    rememberMe
                                }

                                setRememberMe={
                                    setRememberMe
                                }

                                handleLogin={
                                    handleLogin
                                }

                                handleGoogleAuth={
                                    handleGoogleAuth
                                }

                                handleLinkedInAuth={
                                    handleLinkedInAuth
                                }

                                handleForgotPassword={
                                    handleForgotPassword
                                }

                                goToSignup={
                                    goToSignup
                                }

                                error={
                                    error
                                }

                                success={
                                    success
                                }

                                loading={
                                    loading
                                }

                            />

                        </div>


                        {/* ==================================
                            SIGNUP
                        =================================== */}

                        <div className="w-1/2 shrink-0">

                            <Signup

                                signupName={
                                    signupName
                                }

                                setSignupName={
                                    setSignupName
                                }

                                signupEmail={
                                    signupEmail
                                }

                                setSignupEmail={
                                    setSignupEmail
                                }

                                signupRole={
                                    signupRole
                                }

                                setSignupRole={
                                    setSignupRole
                                }

                                signupPassword={
                                    signupPassword
                                }

                                setSignupPassword={
                                    setSignupPassword
                                }

                                confirmPassword={
                                    confirmPassword
                                }

                                setConfirmPassword={
                                    setConfirmPassword
                                }

                                agreeTerms={
                                    agreeTerms
                                }

                                setAgreeTerms={
                                    setAgreeTerms
                                }

                                handleSignup={
                                    handleSignup
                                }

                                handleGoogleAuth={
                                    handleGoogleAuth
                                }

                                handleLinkedInAuth={
                                    handleLinkedInAuth
                                }

                                goToLogin={
                                    goToLogin
                                }

                                error={
                                    error
                                }

                                success={
                                    success
                                }

                                loading={
                                    loading
                                }

                            />

                        </div>

                    </div>

                </div>

            </div>

        </main>

    );

}


export default Auth;