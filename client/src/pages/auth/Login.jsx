import { useState } from "react";

import {
    Mail,
    Lock,
    Eye,
    EyeOff,
    CheckCircle2,
    AlertCircle,
    ArrowRight,
} from "lucide-react";

import shiyoraLogo from "../../assets/shiyora.logo.png";

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
        <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-[#0c1929]">

            <div className="grid lg:grid-cols-2">

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
                            SHIYORA LMS
                        </span>

                        <h1 className="mt-3 text-3xl font-extrabold leading-tight">
                            Welcome back.
                            <span className="block text-teal-100">
                                Keep learning.
                            </span>
                        </h1>

                        <p className="mt-3 text-xs leading-5 text-white/80">
                            Sign in to continue your
                            courses, track progress
                            and achieve your learning
                            goals.
                        </p>

                    </div>

                    <p className="relative z-10 text-[10px] text-white/60">
                        Learn • Grow • Achieve
                    </p>

                </section>

                {/* =================================
                    LOGIN FORM
                ================================== */}

                <section className="flex items-center justify-center px-5 py-6 sm:px-8">

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
                            Welcome back
                        </p>

                        <h2 className="mt-1 text-2xl font-extrabold text-slate-900 dark:text-white">
                            Sign in
                        </h2>

                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                            Access your Shiyora account.
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
                                handleLogin();
                            }}
                            className="mt-4 space-y-3"
                        >

                            {/* EMAIL */}

                            <div>

                                <label className="mb-1 block text-[11px] font-semibold text-slate-700 dark:text-slate-200">
                                    Email address
                                </label>

                                <div className="relative">

                                    <Mail
                                        size={16}
                                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                                    />

                                    <input
                                        type="email"
                                        value={
                                            loginEmail
                                        }
                                        onChange={(e) =>
                                            setLoginEmail(
                                                e.target.value
                                            )
                                        }
                                        placeholder="you@example.com"
                                        required
                                        className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-3 text-xs outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-[#102337] dark:text-white dark:focus:border-teal-400"
                                    />

                                </div>

                            </div>

                            {/* PASSWORD */}

                            <div>

                                <label className="mb-1 block text-[11px] font-semibold text-slate-700 dark:text-slate-200">
                                    Password
                                </label>

                                <div className="relative">

                                    <Lock
                                        size={16}
                                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                                    />

                                    <input
                                        type={
                                            showPassword
                                                ? "text"
                                                : "password"
                                        }
                                        value={
                                            loginPassword
                                        }
                                        onChange={(e) =>
                                            setLoginPassword(
                                                e.target.value
                                            )
                                        }
                                        placeholder="Enter your password"
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

                            {/* OPTIONS */}

                            <div className="flex items-center justify-between text-[10px]">

                                <label className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">

                                    <input
                                        type="checkbox"
                                        checked={
                                            rememberMe
                                        }
                                        onChange={(e) =>
                                            setRememberMe(
                                                e.target.checked
                                            )
                                        }
                                        className="h-3 w-3"
                                    />

                                    Remember me

                                </label>

                                <button
                                    type="button"
                                    onClick={
                                        handleForgotPassword
                                    }
                                    className="font-semibold text-blue-600 dark:text-teal-400"
                                >
                                    Forgot password?
                                </button>

                            </div>

                            {/* LOGIN BUTTON */}

                            <button
                                type="submit"
                                disabled={loading}
                                className="group flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-teal-500 py-2.5 text-xs font-bold text-white shadow-md shadow-blue-500/20 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
                            >

                                {loading
                                    ? "Signing in..."
                                    : "Sign In"}

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

                        {/* SIGNUP */}

                        <div className="mt-3 text-center">

                            <span className="text-[10px] text-slate-500 dark:text-slate-400">
                                Don't have an account?{" "}
                            </span>

                            <button
                                type="button"
                                onClick={
                                    goToSignup
                                }
                                className="text-[10px] font-bold text-blue-600 dark:text-teal-400"
                            >
                                Create Account
                            </button>

                        </div>

                    </div>

                </section>
            </div>
        </div>
    );
}

export default Login;