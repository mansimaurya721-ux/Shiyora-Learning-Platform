import { useState } from "react";
import {
    Settings as SettingsIcon,
    User,
    Bell,
    Shield,
    Save,
    CheckCircle,
    LockKeyhole,
    Mail,
    UserCog,
    Check,
} from "lucide-react";

const Settings = () => {
    const [notifications, setNotifications] = useState(true);
    const [emailAlerts, setEmailAlerts] = useState(true);
    const [saved, setSaved] = useState(false);

    const handleSave = () => {
        setSaved(true);

        setTimeout(() => {
            setSaved(false);
        }, 2500);
    };

    return (
        <main className="relative min-h-screen overflow-hidden bg-slate-50 px-4 py-6 text-slate-700 transition-colors duration-300 dark:bg-[#07111f] dark:text-slate-300 sm:px-6 lg:px-8">

            {/* =====================================================
                BACKGROUND GLOW
            ====================================================== */}

            <div className="pointer-events-none fixed -left-32 -top-32 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-500/[0.07]" />

            <div className="pointer-events-none fixed -bottom-40 -right-32 h-96 w-96 rounded-full bg-teal-400/10 blur-[130px] dark:bg-teal-400/[0.06]" />

            {/* =====================================================
                CONTENT
            ====================================================== */}

            <div className="relative z-10 mx-auto max-w-[1500px]">

                {/* =================================================
                    HEADER
                ================================================== */}

                <div className="mb-7">

                    <div className="mb-2 flex items-center gap-2">

                        <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-teal-400" />

                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-teal-400">
                            Administration
                        </p>

                    </div>

                    <div className="flex items-center gap-4">

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
                            <SettingsIcon size={22} />
                        </div>

                        <div>

                            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
                                Settings
                            </h1>

                            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                Manage your SuperAdmin account and platform
                                preferences.
                            </p>

                        </div>

                    </div>

                </div>

                {/* =================================================
                    SETTINGS GRID
                ================================================== */}

                <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">

                    {/* =================================================
                        ACCOUNT INFORMATION
                    ================================================== */}

                    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-md dark:border-[#1e334a] dark:bg-[#0b1727] dark:hover:border-blue-500/30">

                        <div className="mb-6 flex items-center gap-3">

                            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
                                <UserCog size={19} />
                            </div>

                            <div>

                                <h2 className="font-semibold text-slate-900 dark:text-white">
                                    Account Information
                                </h2>

                                <p className="text-xs text-slate-500 dark:text-slate-400">
                                    Manage your account details
                                </p>

                            </div>

                        </div>

                        <div className="space-y-5">

                            {/* NAME */}

                            <div>

                                <label className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                    Name
                                </label>

                                <div className="relative">

                                    <User
                                        size={16}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                                    />

                                    <input
                                        type="text"
                                        defaultValue="SuperAdmin"
                                        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-[#1e334a] dark:bg-[#07111f] dark:text-white dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
                                    />

                                </div>

                            </div>

                            {/* EMAIL */}

                            <div>

                                <label className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                    Email
                                </label>

                                <div className="relative">

                                    <Mail
                                        size={16}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                                    />

                                    <input
                                        type="email"
                                        defaultValue="admin@shiyora.com"
                                        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-[#1e334a] dark:bg-[#07111f] dark:text-white dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
                                    />

                                </div>

                            </div>

                        </div>

                    </section>

                    {/* =================================================
                        NOTIFICATIONS
                    ================================================== */}

                    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-teal-300 hover:shadow-md dark:border-[#1e334a] dark:bg-[#0b1727] dark:hover:border-teal-500/30">

                        <div className="mb-6 flex items-center gap-3">

                            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-teal-200 bg-teal-50 text-teal-600 dark:border-teal-500/20 dark:bg-teal-500/10 dark:text-teal-400">
                                <Bell size={19} />
                            </div>

                            <div>

                                <h2 className="font-semibold text-slate-900 dark:text-white">
                                    Notifications
                                </h2>

                                <p className="text-xs text-slate-500 dark:text-slate-400">
                                    Manage notification preferences
                                </p>

                            </div>

                        </div>

                        <div className="space-y-5">

                            {/* PLATFORM NOTIFICATIONS */}

                            <div className="flex items-center justify-between gap-5 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-[#1e334a] dark:bg-[#102337]">

                                <div>

                                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                                        Platform Notifications
                                    </p>

                                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                        Receive important platform updates
                                    </p>

                                </div>

                                <button
                                    type="button"
                                    onClick={() =>
                                        setNotifications(!notifications)
                                    }
                                    aria-label="Toggle platform notifications"
                                    aria-pressed={notifications}
                                    className={`relative h-6 w-11 shrink-0 rounded-full p-1 transition-colors duration-200 ${notifications
                                        ? "bg-blue-600 dark:bg-teal-500"
                                        : "bg-slate-300 dark:bg-slate-700"
                                        }`}
                                >

                                    <span
                                        className={`block h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-200 ${notifications
                                            ? "translate-x-5"
                                            : "translate-x-0"
                                            }`}
                                    />

                                </button>

                            </div>

                            {/* EMAIL ALERTS */}

                            <div className="flex items-center justify-between gap-5 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-[#1e334a] dark:bg-[#102337]">

                                <div>

                                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                                        Email Alerts
                                    </p>

                                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                        Receive important alerts through email
                                    </p>

                                </div>

                                <button
                                    type="button"
                                    onClick={() =>
                                        setEmailAlerts(!emailAlerts)
                                    }
                                    aria-label="Toggle email alerts"
                                    aria-pressed={emailAlerts}
                                    className={`relative h-6 w-11 shrink-0 rounded-full p-1 transition-colors duration-200 ${emailAlerts
                                        ? "bg-blue-600 dark:bg-teal-500"
                                        : "bg-slate-300 dark:bg-slate-700"
                                        }`}
                                >

                                    <span
                                        className={`block h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-200 ${emailAlerts
                                            ? "translate-x-5"
                                            : "translate-x-0"
                                            }`}
                                    />

                                </button>

                            </div>

                        </div>

                    </section>

                    {/* =================================================
                        SECURITY
                    ================================================== */}

                    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-md dark:border-[#1e334a] dark:bg-[#0b1727] dark:hover:border-blue-500/30">

                        <div className="flex items-center gap-3">

                            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
                                <Shield size={19} />
                            </div>

                            <div>

                                <h2 className="font-semibold text-slate-900 dark:text-white">
                                    Security
                                </h2>

                                <p className="text-xs text-slate-500 dark:text-slate-400">
                                    Account security settings
                                </p>

                            </div>

                        </div>

                        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-[#1e334a] dark:bg-[#102337]">

                            <div className="flex items-start gap-3">

                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-slate-500 shadow-sm dark:bg-[#0b1727] dark:text-slate-400">
                                    <LockKeyhole size={17} />
                                </div>

                                <div className="flex-1">

                                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                                        Password & Authentication
                                    </p>

                                    <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                                        Keep your SuperAdmin account secure by
                                        updating your password regularly.
                                    </p>

                                </div>

                            </div>

                            <button
                                type="button"
                                className="mt-4 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition-all hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 dark:border-[#1e334a] dark:bg-[#0b1727] dark:text-slate-300 dark:hover:border-teal-500/30 dark:hover:bg-teal-500/5 dark:hover:text-teal-400"
                            >
                                Change Password
                            </button>

                        </div>

                    </section>

                    {/* =================================================
                        SYSTEM STATUS
                    ================================================== */}

                    <section className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm dark:border-emerald-500/20 dark:bg-[#0b1727]">

                        <div className="flex items-center gap-3">

                            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-600 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400">
                                <CheckCircle size={19} />
                            </div>

                            <div>

                                <h2 className="font-semibold text-slate-900 dark:text-white">
                                    System Status
                                </h2>

                                <p className="text-xs text-slate-500 dark:text-slate-400">
                                    Current Shiyora platform status
                                </p>

                            </div>

                        </div>

                        <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 dark:border-emerald-500/20 dark:bg-emerald-500/5">

                            <div className="flex items-center gap-3">

                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-500/10">

                                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.45)]" />

                                </div>

                                <div>

                                    <p className="text-sm font-semibold text-emerald-800 dark:text-emerald-400">
                                        All systems operational
                                    </p>

                                    <p className="mt-0.5 text-xs text-emerald-700/70 dark:text-emerald-400/60">
                                        Shiyora services are running normally
                                    </p>

                                </div>

                                <Check
                                    size={17}
                                    className="ml-auto text-emerald-600 dark:text-emerald-400"
                                />

                            </div>

                        </div>

                    </section>

                </div>

                {/* =================================================
                    SAVE BUTTON
                ================================================== */}

                <div className="mt-6 flex justify-end">

                    <button
                        type="button"
                        onClick={handleSave}
                        className={`flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 ${saved
                            ? "bg-emerald-600 shadow-emerald-500/20"
                            : "bg-gradient-to-r from-blue-600 to-teal-500 shadow-blue-500/20 hover:from-blue-700 hover:to-teal-600"
                            }`}
                    >

                        {saved ? (
                            <>
                                <Check size={18} />
                                Settings Saved
                            </>
                        ) : (
                            <>
                                <Save size={18} />
                                Save Settings
                            </>
                        )}

                    </button>

                </div>

                {/* =================================================
                    FOOTER
                ================================================== */}

                <div className="mt-5 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">

                    <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-400 dark:text-slate-600">
                        Shiyora Administration
                    </p>

                    <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-400 dark:text-slate-600">
                        System Configuration
                    </p>

                </div>

            </div>

        </main>
    );
};

export default Settings;