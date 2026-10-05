import { useState } from "react";

import {
    Mail,
    Eye,
    EyeOff,
    CheckCircle2,
    AlertCircle,
} from "lucide-react";

import shiyoraLogo from "../../assets/shiyora.logo.png";


// Renders the login panel + its welcome text.
// Must be placed inside <div className="auth-wrapper">.

function Login({
    loginEmail,
    setLoginEmail,

    loginPassword,
    setLoginPassword,

    rememberMe,
    setRememberMe,

    handleLogin,

    handleGoogleAuth,
    handleLinkedInAuth,
    handleForgotPassword,

    goToSignup,

    error,
    success,
    loading,
}) {

    const [showPassword, setShowPassword] =
        useState(false);


    return (
        <>

            {/* =====================================================
                LOGIN PANEL
            ====================================================== */}

            <div className="credentials-panel signin">

                <h2
                    className="slide-element"
                    style={{ "--i": 0 }}
                >
                    Login
                </h2>


                {/* ERROR */}

                {error && (
                    <div
                        className="auth-message error slide-element"
                        style={{ "--i": 0 }}
                        role="alert"
                    >
                        <AlertCircle size={16} />

                        <span>
                            {error}
                        </span>
                    </div>
                )}


                {/* SUCCESS */}

                {success && (
                    <div
                        className="auth-message success slide-element"
                        style={{ "--i": 0 }}
                        role="status"
                    >
                        <CheckCircle2 size={16} />

                        <span>
                            {success}
                        </span>
                    </div>
                )}


                {/* =================================================
                    LOGIN FORM
                ================================================== */}

                <form
                    onSubmit={(e) => {

                        e.preventDefault();

                        handleLogin();

                    }}
                >

                    {/* EMAIL */}

                    <div
                        className="field-wrapper slide-element"
                        style={{ "--i": 1 }}
                    >

                        <input
                            id="login-email"
                            type="email"
                            value={loginEmail}
                            onChange={(e) =>
                                setLoginEmail(
                                    e.target.value
                                )
                            }
                            placeholder=" "
                            autoComplete="email"
                            required
                        />

                        <label htmlFor="login-email">
                            Email address
                        </label>

                        <span className="field-icon">
                            <Mail size={18} />
                        </span>

                    </div>


                    {/* PASSWORD */}

                    <div
                        className="field-wrapper slide-element"
                        style={{ "--i": 2 }}
                    >

                        <input
                            id="login-password"
                            type={
                                showPassword
                                    ? "text"
                                    : "password"
                            }
                            value={loginPassword}
                            onChange={(e) =>
                                setLoginPassword(
                                    e.target.value
                                )
                            }
                            placeholder=" "
                            autoComplete="current-password"
                            required
                        />

                        <label htmlFor="login-password">
                            Password
                        </label>


                        <button
                            type="button"
                            className="eye-btn"
                            aria-label={
                                showPassword
                                    ? "Hide password"
                                    : "Show password"
                            }
                            onClick={() =>
                                setShowPassword(
                                    (prev) => !prev
                                )
                            }
                        >
                            {showPassword ? (
                                <EyeOff size={18} />
                            ) : (
                                <Eye size={18} />
                            )}
                        </button>

                    </div>


                    {/* REMEMBER */}

                    <div
                        className="row-between slide-element"
                        style={{ "--i": 3 }}
                    >

                        <label className="check-label">

                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) =>
                                    setRememberMe(
                                        e.target.checked
                                    )
                                }
                            />

                            <span>
                                Remember me
                            </span>

                        </label>


                        <button
                            type="button"
                            className="link-btn"
                            onClick={
                                handleForgotPassword
                            }
                        >
                            Forgot password?
                        </button>

                    </div>


                    {/* LOGIN BUTTON */}

                    <div
                        className="submit-wrap slide-element"
                        style={{ "--i": 4 }}
                    >

                        <button
                            className="submit-button"
                            type="submit"
                            disabled={loading}
                        >
                            {loading
                                ? "Signing in..."
                                : "Login"
                            }
                        </button>

                    </div>


                    {/* SOCIAL */}

                    <div
                        className="slide-element"
                        style={{ "--i": 5 }}
                    >

                        <div className="divider">
                            or continue with
                        </div>


                        <div className="social">

                            <button
                                type="button"
                                onClick={
                                    handleGoogleAuth
                                }
                            >
                                Google
                            </button>


                            <button
                                type="button"
                                onClick={
                                    handleLinkedInAuth
                                }
                            >
                                LinkedIn
                            </button>

                        </div>

                    </div>


                    {/* SWITCH */}

                    <div
                        className="switch-link slide-element"
                        style={{ "--i": 6 }}
                    >

                        <p>

                            Don't have an account?

                            <br />

                            <button
                                type="button"
                                className="link-btn"
                                onClick={
                                    goToSignup
                                }
                            >
                                Sign Up
                            </button>

                        </p>

                    </div>

                </form>

            </div>


            {/* =====================================================
                LOGIN WELCOME
            ====================================================== */}

            <div className="welcome-section signin">

                <div
                    className="welcome-brand slide-element"
                    style={{ "--i": 0 }}
                >

                    <img
                        className="welcome-logo"
                        src={shiyoraLogo}
                        alt="Shiyora"
                    />

                    <span className="welcome-brand-name">
                        Shiyora
                    </span>

                </div>


                <h2
                    className="slide-element"
                    style={{ "--i": 1 }}
                >
                    Welcome back!
                </h2>


                <p
                    className="slide-element"
                    style={{ "--i": 2 }}
                >
                    Sign in and continue your
                    learning journey.
                </p>

            </div>

        </>
    );
}


export default Login;