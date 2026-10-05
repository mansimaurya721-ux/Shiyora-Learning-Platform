import { useState } from "react";

import {
    User,
    Mail,
    Eye,
    EyeOff,
    ChevronDown,
    CheckCircle2,
    AlertCircle,
} from "lucide-react";

import shiyoraLogo from "../../assets/shiyora.logo.png";


// Renders the signup panel + its welcome text.
// Must be placed inside <div className="auth-wrapper">.

function Signup({
    signupName,
    setSignupName,

    signupEmail,
    setSignupEmail,

    signupRole,
    setSignupRole,

    signupPassword,
    setSignupPassword,

    confirmPassword,
    setConfirmPassword,

    agreeTerms,
    setAgreeTerms,

    handleSignup,

    handleGoogleAuth,
    handleLinkedInAuth,

    goToLogin,

    error,
    success,
    loading,
}) {

    const [showPassword, setShowPassword] =
        useState(false);

    const [showConfirm, setShowConfirm] =
        useState(false);


    return (
        <>

            {/* =====================================================
                SIGNUP PANEL
            ====================================================== */}

            <div className="credentials-panel signup">

                <h2
                    className="slide-element"
                    style={{ "--i": 0 }}
                >
                    Register
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
                    SIGNUP FORM
                ================================================== */}

                <form
                    className="signup-form"
                    onSubmit={(e) => {

                        e.preventDefault();

                        handleSignup();

                    }}
                >

                    {/* =================================================
                        FULL NAME
                    ================================================== */}

                    <div
                        className="field-wrapper slide-element"
                        style={{ "--i": 1 }}
                    >

                        <input
                            id="signup-name"
                            type="text"
                            value={signupName}
                            onChange={(e) =>
                                setSignupName(
                                    e.target.value
                                )
                            }
                            placeholder=" "
                            autoComplete="name"
                            required
                        />

                        <label htmlFor="signup-name">
                            Full name
                        </label>

                        <span className="field-icon">
                            <User size={18} />
                        </span>

                    </div>


                    {/* =================================================
                        EMAIL
                    ================================================== */}

                    <div
                        className="field-wrapper slide-element"
                        style={{ "--i": 2 }}
                    >

                        <input
                            id="signup-email"
                            type="email"
                            value={signupEmail}
                            onChange={(e) =>
                                setSignupEmail(
                                    e.target.value
                                )
                            }
                            placeholder=" "
                            autoComplete="email"
                            required
                        />

                        <label htmlFor="signup-email">
                            Email address
                        </label>

                        <span className="field-icon">
                            <Mail size={18} />
                        </span>

                    </div>


                    {/* =================================================
                        ACCOUNT TYPE
                    ================================================== */}

                    <div
                        className={
                            `field-wrapper role-field slide-element${signupRole
                                ? " filled"
                                : ""
                            }`
                        }
                        style={{ "--i": 3 }}
                    >

                        <select
                            id="signup-role"
                            value={signupRole}
                            onChange={(e) =>
                                setSignupRole(
                                    e.target.value
                                )
                            }
                            required
                            className="role-select"
                            aria-label="Account type"
                        >

                            {/* 
                                Hidden placeholder.
                                The label itself acts as
                                the visible placeholder.
                            */}

                            <option
                                value=""
                                disabled
                                hidden
                            >
                                Select account type
                            </option>


                            <option value="student">
                                Student
                            </option>


                            <option value="teacher">
                                Teacher
                            </option>


                            <option value="organization">
                                Organization
                            </option>

                        </select>


                        <label htmlFor="signup-role">
                            Account type
                        </label>


                        <span
                            className="field-icon role-arrow"
                            aria-hidden="true"
                        >
                            <ChevronDown size={18} />
                        </span>

                    </div>


                    {/* =================================================
                        PASSWORD
                    ================================================== */}

                    <div
                        className="field-wrapper slide-element"
                        style={{ "--i": 4 }}
                    >

                        <input
                            id="signup-password"
                            type={
                                showPassword
                                    ? "text"
                                    : "password"
                            }
                            value={signupPassword}
                            onChange={(e) =>
                                setSignupPassword(
                                    e.target.value
                                )
                            }
                            placeholder=" "
                            autoComplete="new-password"
                            required
                        />

                        <label htmlFor="signup-password">
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


                    {/* =================================================
                        CONFIRM PASSWORD
                    ================================================== */}

                    <div
                        className="field-wrapper slide-element"
                        style={{ "--i": 5 }}
                    >

                        <input
                            id="signup-confirm"
                            type={
                                showConfirm
                                    ? "text"
                                    : "password"
                            }
                            value={confirmPassword}
                            onChange={(e) =>
                                setConfirmPassword(
                                    e.target.value
                                )
                            }
                            placeholder=" "
                            autoComplete="new-password"
                            required
                        />

                        <label htmlFor="signup-confirm">
                            Confirm password
                        </label>


                        <button
                            type="button"
                            className="eye-btn"
                            aria-label={
                                showConfirm
                                    ? "Hide password"
                                    : "Show password"
                            }
                            onClick={() =>
                                setShowConfirm(
                                    (prev) => !prev
                                )
                            }
                        >

                            {showConfirm ? (
                                <EyeOff size={18} />
                            ) : (
                                <Eye size={18} />
                            )}

                        </button>

                    </div>


                    {/* =================================================
                        TERMS
                    ================================================== */}

                    <label
                        className="terms slide-element"
                        style={{ "--i": 6 }}
                    >

                        <input
                            type="checkbox"
                            checked={agreeTerms}
                            onChange={(e) =>
                                setAgreeTerms(
                                    e.target.checked
                                )
                            }
                            required
                        />

                        <span>
                            I agree to the{" "}
                            <b>Terms</b>
                            {" "}and{" "}
                            <b>Privacy Policy</b>
                        </span>

                    </label>


                    {/* =================================================
                        SUBMIT
                    ================================================== */}

                    <div
                        className="submit-wrap slide-element"
                        style={{ "--i": 7 }}
                    >

                        <button
                            className="submit-button"
                            type="submit"
                            disabled={loading}
                        >

                            {loading
                                ? "Creating..."
                                : "Register"
                            }

                        </button>

                    </div>


                    {/* =================================================
                        SOCIAL
                    ================================================== */}

                    <div
                        className="slide-element"
                        style={{ "--i": 8 }}
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


                    {/* =================================================
                        SWITCH TO LOGIN
                    ================================================== */}

                    <div
                        className="switch-link slide-element"
                        style={{ "--i": 9 }}
                    >

                        <p>

                            Already have an account?

                            <br />

                            <button
                                type="button"
                                className="link-btn"
                                onClick={
                                    goToLogin
                                }
                            >
                                Sign In
                            </button>

                        </p>

                    </div>

                </form>

            </div>


            {/* =====================================================
                SIGNUP WELCOME
            ====================================================== */}

            <div className="welcome-section signup">

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
                    Welcome!
                </h2>


                <p
                    className="slide-element"
                    style={{ "--i": 2 }}
                >
                    Create your account and start
                    learning, growing and achieving.
                </p>

            </div>

        </>
    );
}


export default Signup;