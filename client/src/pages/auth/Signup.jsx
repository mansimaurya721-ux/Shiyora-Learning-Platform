import { useState } from "react";

import {
    User,
    Mail,
    Lock,
    Eye,
    EyeOff,
    CheckCircle2,
    AlertCircle,
    ArrowRight,
} from "lucide-react";

import shiyoraLogo from "../../assets/shiyora.logo.png";

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
        <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-[#0c1929]">

            <div className="grid lg:grid-cols-2">

                {/* =================================
                    SIGNUP FORM
                ================================== */}

                <section className="flex items-center justify-center px-5 py-5 sm:px-8">

                    <div className="w-full max-w-sm">

                        {/* MOBILE LOGO */}

                        <div className="mb-4 lg:hidden">
                            <img
                                src={shiyoraLogo}
                                alt="Shiyora"
                                className="h-10 w-auto"
                            />
                        </div>

                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-teal-400">
                            Get started
                        </p>

                        <h2 className="mt-1 text-2xl font-extrabold text-slate-900 dark:text-white">
                            Create Account
                        </h2>

                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                            Join Shiyora and start learning.
                        </p>

                        {/* ERROR */}

                        {error && (
                            <div className="mt-3 flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-2.5 text-[11px] text-red-700 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-300">

                                <AlertCircle
                                    size={14}
                                    className="mt-0.5 shrink-0"
                                />

                                <span>
                                    {error}
                                </span>

                            </div>
                        )}

                        {/* SUCCESS */}

                        {success && (
                            <div className="mt-3 flex items-start gap-2 rounded-lg border border-emerald-200 bg-emerald-50 p-2.5 text-[11px] text-emerald-700 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-300">

                                <CheckCircle2
                                    size={14}
                                    className="mt-0.5 shrink-0"
                                />

                                <span>
                                    {success}
                                </span>

                            </div>
                        )}

                        {/* FORM */}

                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleSignup();
                            }}
                            className="mt-3 space-y-2.5"
                        >

                            {/* NAME */}

                            <div>

                                <label className="mb-1 block text-[11px] font-semibold text-slate-700 dark:text-slate-200">
                                    Full name
                                </label>

                                <div className="relative">

                                    <User
                                        size={15}
                                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                                    />

                                    <input
                                        type="text"
                                        value={
                                            signupName
                                        }
                                        onChange={(e) =>
                                            setSignupName(
                                                e.target.value
                                            )
                                        }
                                        placeholder="Your full name"
                                        required
                                        className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-3 text-xs outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-[#102337] dark:text-white dark:focus:border-teal-400"
                                    />

                                </div>

                            </div>

                            {/* EMAIL */}

                            <div>

                                <label className="mb-1 block text-[11px] font-semibold text-slate-700 dark:text-slate-200">
                                    Email address
                                </label>

                                <div className="relative">

                                    <Mail
                                        size={15}
                                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                                    />

                                    <input
                                        type="email"
                                        value={
                                            signupEmail
                                        }
                                        onChange={(e) =>
                                            setSignupEmail(
                                                e.target.value
                                            )
                                        }
                                        placeholder="you@example.com"
                                        required
                                        className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-3 text-xs outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-[#102337] dark:text-white dark:focus:border-teal-400"
                                    />

                                </div>

                            </div>

                            {/* ACCOUNT TYPE */}

                            <div>

                                <label className="mb-1 block text-[11px] font-semibold text-slate-700 dark:text-slate-200">
                                    Account type
                                </label>

                                <select
                                    value={
                                        signupRole
                                    }
                                    onChange={(e) =>
                                        setSignupRole(
                                            e.target.value
                                        )
                                    }
                                    required
                                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-[#102337] dark:text-white dark:focus:border-teal-400"
                                >

                                    <option value="">
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

                            </div>

                            {/* PASSWORD */}

                            <div>

                                <label className="mb-1 block text-[11px] font-semibold text-slate-700 dark:text-slate-200">
                                    Password
                                </label>

                                <div className="relative">

                                    <Lock
                                        size={15}
                                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                                    />

                                    <input
                                        type={
                                            showPassword
                                                ? "text"
                                                : "password"
                                        }
                                        value={
                                            signupPassword
                                        }
                                        onChange={(e) =>
                                            setSignupPassword(
                                                e.target.value
                                            )
                                        }
                                        placeholder="Create a password"
                                        required
                                        className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-10 text-xs outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-[#102337] dark:text-white dark:focus:border-teal-400"
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(
                                                !showPassword
                                            )
                                        }
                                        className="absolute right-1 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
                                    >
                                        {showPassword ? (
                                            <EyeOff
                                                size={15}
                                            />
                                        ) : (
                                            <Eye
                                                size={15}
                                            />
                                        )}
                                    </button>

                                </div>

                            </div>

                            {/* CONFIRM PASSWORD */}

                            <div>

                                <label className="mb-1 block text-[11px] font-semibold text-slate-700 dark:text-slate-200">
                                    Confirm password
                                </label>

                                <div className="relative">

                                    <Lock
                                        size={15}
                                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                                    />

                                    <input
                                        type={
                                            showConfirm
                                                ? "text"
                                                : "password"
                                        }
                                        value={
                                            confirmPassword
                                        }
                                        onChange={(e) =>
                                            setConfirmPassword(
                                                e.target.value
                                            )
                                        }
                                        placeholder="Confirm password"
                                        required
                                        className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-10 text-xs outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-[#102337] dark:text-white dark:focus:border-teal-400"
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowConfirm(
                                                !showConfirm
                                            )
                                        }
                                        className="absolute right-1 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
                                    >
                                        {showConfirm ? (
                                            <EyeOff
                                                size={15}
                                            />
                                        ) : (
                                            <Eye
                                                size={15}
                                            />
                                        )}
                                    </button>

                                </div>

                            </div>

                            {/* TERMS */}

                            <label className="flex items-start gap-2 py-0.5 text-[10px] leading-4 text-slate-500 dark:text-slate-400">

                                <input
                                    type="checkbox"
                                    checked={
                                        agreeTerms
                                    }
                                    onChange={(e) =>
                                        setAgreeTerms(
                                            e.target.checked
                                        )
                                    }
                                    required
                                    className="mt-0.5 h-3 w-3 shrink-0"
                                />

                                <span>
                                    I agree to the{" "}
                                    <b className="text-blue-600 dark:text-teal-400">
                                        Terms
                                    </b>{" "}
                                    and{" "}
                                    <b className="text-blue-600 dark:text-teal-400">
                                        Privacy Policy
                                    </b>
                                </span>

                            </label>

                            {/* CREATE ACCOUNT */}

                            <button
                                type="submit"
                                disabled={loading}
                                className="group flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-teal-500 py-2.5 text-xs font-bold text-white shadow-md shadow-blue-500/20 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
                            >

                                {loading
                                    ? "Creating..."
                                    : "Create Account"}

                                {!loading && (
                                    <ArrowRight
                                        size={15}
                                        className="transition-transform group-hover:translate-x-1"
                                    />
                                )}

                            </button>

                        </form>

                        {/* DIVIDER */}

                        <div className="my-3 flex items-center gap-2">

                            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />

                            <span className="text-[9px] text-slate-400">
                                OR
                            </span>

                            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />

                        </div>

                        {/* SOCIAL */}

                        <div className="grid grid-cols-2 gap-2">

                            <button
                                type="button"
                                onClick={
                                    handleGoogleAuth
                                }
                                className="rounded-lg border border-slate-200 bg-white py-2 text-[11px] font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-[#102337] dark:text-white dark:hover:bg-slate-800"
                            >
                                <span className="mr-1.5 font-extrabold">
                                    G
                                </span>

                                Google
                            </button>

                            <button
                                type="button"
                                onClick={
                                    handleLinkedInAuth
                                }
                                className="rounded-lg border border-slate-200 bg-white py-2 text-[11px] font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-[#102337] dark:text-white dark:hover:bg-slate-800"
                            >
                                <span className="mr-1.5 font-extrabold">
                                    in
                                </span>

                                LinkedIn
                            </button>

                        </div>

                        {/* LOGIN */}

                        <div className="mt-3 text-center">

                            <span className="text-[10px] text-slate-500 dark:text-slate-400">
                                Already have an account?{" "}
                            </span>

                            <button
                                type="button"
                                onClick={
                                    goToLogin
                                }
                                className="text-[10px] font-bold text-blue-600 dark:text-teal-400"
                            >
                                Sign In
                            </button>

                        </div>

                    </div>
                </section>

                {/* =================================
                    BRAND SECTION
                ================================== */}

                <section className="relative hidden overflow-hidden bg-gradient-to-br from-blue-600 to-teal-500 p-8 text-white lg:flex lg:min-h-[570px] lg:flex-col lg:justify-between">

                    <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/10" />

                    <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-white/10" />

                    <img
                        src={shiyoraLogo}
                        alt="Shiyora"
                        className="relative z-10 h-11 w-auto object-contain"
                    />

                    <div className="relative z-10 max-w-sm">

                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                            JOIN SHIYORA
                        </span>

                        <h1 className="mt-3 text-3xl font-extrabold leading-tight">
                            Start your
                            <span className="block text-teal-100">
                                learning journey.
                            </span>
                        </h1>

                        <p className="mt-3 text-xs leading-5 text-white/80">
                            Create your account
                            and get access to
                            courses, progress
                            tracking, quizzes and
                            modern learning tools.
                        </p>

                        <div className="mt-5 space-y-2.5">

                            <div className="flex items-center gap-2.5">
                                <CheckCircle2
                                    size={16}
                                />

                                <span className="text-xs">
                                    Learn at your own pace
                                </span>
                            </div>

                            <div className="flex items-center gap-2.5">
                                <CheckCircle2
                                    size={16}
                                />

                                <span className="text-xs">
                                    Track your progress
                                </span>
                            </div>

                            <div className="flex items-center gap-2.5">
                                <CheckCircle2
                                    size={16}
                                />

                                <span className="text-xs">
                                    Learn with modern tools
                                </span>
                            </div>

                        </div>

                    </div>

                    <p className="relative z-10 text-[10px] text-white/60">
                        Learn • Grow • Achieve
                    </p>

                </section>

            </div>
        </div>
    );
}

export default Signup;