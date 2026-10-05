import { useState } from "react";
import {
    Settings as SettingsIcon,
    Building2,
    Bell,
    ShieldCheck,
    CreditCard,
    Save,
} from "lucide-react";

// ============================================================
// TOGGLE SWITCH
// ============================================================

function Toggle({ checked, onChange, label, description }) {
    return (
        <div className="flex items-center justify-between gap-4 py-4">
            <div>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {label}
                </p>

                {description && (
                    <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                        {description}
                    </p>
                )}
            </div>

            <button
                type="button"
                role="switch"
                aria-checked={checked}
                aria-label={label}
                onClick={() => onChange(!checked)}
                className={`relative h-6 w-11 shrink-0 rounded-full transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:focus-visible:outline-teal-400 ${checked
                    ? "bg-blue-600 dark:bg-blue-500"
                    : "bg-slate-300 dark:bg-slate-700"
                    }`}
            >
                <span
                    className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-md transition-transform duration-300 ${checked ? "translate-x-5.5" : "translate-x-0.5"
                        }`}
                />
            </button>
        </div>
    );
}

const Settings = () => {
    const [activeTab, setActiveTab] = useState("organization");

    // ------------------------------------------------------------
    // ORGANIZATION FORM STATE
    // ------------------------------------------------------------

    const [orgName, setOrgName] = useState("Shiyora Academy");
    const [orgEmail, setOrgEmail] = useState("contact@shiyora.com");
    const [orgPhone, setOrgPhone] = useState("+91 98765 43210");
    const [orgTimezone, setOrgTimezone] = useState("Asia/Kolkata");

    // ------------------------------------------------------------
    // NOTIFICATION STATE
    // ------------------------------------------------------------

    const [notifyEnrollments, setNotifyEnrollments] = useState(true);
    const [notifyCompletions, setNotifyCompletions] = useState(true);
    const [notifyBilling, setNotifyBilling] = useState(true);
    const [notifyMarketing, setNotifyMarketing] = useState(false);
    const [weeklyDigest, setWeeklyDigest] = useState(true);

    // ------------------------------------------------------------
    // SECURITY STATE
    // ------------------------------------------------------------

    const [twoFactor, setTwoFactor] = useState(false);
    const [loginAlerts, setLoginAlerts] = useState(true);
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // ------------------------------------------------------------
    // TABS
    // ------------------------------------------------------------

    const tabs = [
        {
            id: "organization",
            label: "Organization",
            icon: Building2,
        },
        {
            id: "notifications",
            label: "Notifications",
            icon: Bell,
        },
        {
            id: "security",
            label: "Security",
            icon: ShieldCheck,
        },
        {
            id: "billing",
            label: "Billing",
            icon: CreditCard,
        },
    ];

    const handleSave = (section) => {
        alert(
            `${section} settings saved (this will be connected to the API later).`
        );
    };

    // ============================================================
    // RETURN
    // ============================================================

    return (
        <main className="relative min-h-screen overflow-hidden bg-slate-50 px-4 py-6 text-slate-700 dark:bg-[#07111f] dark:text-slate-300 sm:px-6 lg:px-8">

            {/* =====================================================
                BACKGROUND GLOWS
            ====================================================== */}

            <div className="pointer-events-none fixed -left-40 -top-40 h-125 w-125 rounded-full bg-blue-500/5 blur-[130px] dark:bg-blue-500/10" />

            <div className="pointer-events-none fixed -right-40 bottom-0 h-125 w-125 rounded-full bg-teal-500/[0.05] blur-[140px] dark:bg-teal-500/[0.08]" />

            <div className="relative z-10">

                {/* =====================================================
                    HEADER
                ====================================================== */}

                <div className="mb-7 flex items-center gap-3">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
                        <SettingsIcon size={22} />
                    </div>

                    <div>
                        <p className="mb-1 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                            Administration
                        </p>

                        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
                            Settings
                        </h1>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-[240px_1fr]">

                    {/* =================================================
                        TAB NAVIGATION
                    ================================================= */}

                    <nav className="h-fit rounded-2xl border border-slate-200 bg-white p-2 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">

                        {tabs.map((tab) => {
                            const isActive = activeTab === tab.id;

                            return (
                                <button
                                    key={tab.id}
                                    type="button"
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:focus-visible:outline-teal-400 ${isActive
                                        ? "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400"
                                        : "text-slate-500 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-[#102337] dark:hover:text-slate-200"
                                        }`}
                                >
                                    <tab.icon size={17} />
                                    {tab.label}
                                </button>
                            );
                        })}
                    </nav>

                    {/* =================================================
                        PANEL
                    ================================================= */}

                    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">

                        {/* =================================================
                            ORGANIZATION
                        ================================================= */}

                        {activeTab === "organization" && (
                            <div className="p-6 sm:p-8">

                                <h2 className="text-lg font-bold text-slate-900 dark:text-slate-50">
                                    Organization Details
                                </h2>

                                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                    Basic information about your organization.
                                </p>

                                <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">

                                    {/* ORGANIZATION NAME */}

                                    <div>
                                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                                            Organization Name
                                        </label>

                                        <input
                                            type="text"
                                            value={orgName}
                                            onChange={(e) =>
                                                setOrgName(e.target.value)
                                            }
                                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-[#1e334a] dark:bg-[#102337] dark:text-slate-200 dark:focus:border-blue-400 dark:focus:ring-blue-400/10"
                                        />
                                    </div>

                                    {/* CONTACT EMAIL */}

                                    <div>
                                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                                            Contact Email
                                        </label>

                                        <input
                                            type="email"
                                            value={orgEmail}
                                            onChange={(e) =>
                                                setOrgEmail(e.target.value)
                                            }
                                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-[#1e334a] dark:bg-[#102337] dark:text-slate-200 dark:focus:border-blue-400 dark:focus:ring-blue-400/10"
                                        />
                                    </div>

                                    {/* PHONE */}

                                    <div>
                                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                                            Phone Number
                                        </label>

                                        <input
                                            type="text"
                                            value={orgPhone}
                                            onChange={(e) =>
                                                setOrgPhone(e.target.value)
                                            }
                                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-[#1e334a] dark:bg-[#102337] dark:text-slate-200 dark:focus:border-blue-400 dark:focus:ring-blue-400/10"
                                        />
                                    </div>

                                    {/* TIMEZONE */}

                                    <div>
                                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                                            Timezone
                                        </label>

                                        <select
                                            value={orgTimezone}
                                            onChange={(e) =>
                                                setOrgTimezone(e.target.value)
                                            }
                                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-[#1e334a] dark:bg-[#102337] dark:text-slate-200 dark:focus:border-blue-400"
                                        >
                                            <option value="Asia/Kolkata">
                                                Asia/Kolkata (IST)
                                            </option>

                                            <option value="Asia/Dubai">
                                                Asia/Dubai (GST)
                                            </option>

                                            <option value="Europe/London">
                                                Europe/London (GMT)
                                            </option>

                                            <option value="America/New_York">
                                                America/New York (EST)
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                {/* SAVE */}

                                <div className="mt-8 flex justify-end border-t border-slate-200 pt-6 dark:border-[#1e334a]">

                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleSave("Organization")
                                        }
                                        className="inline-flex items-center gap-2 rounded-xl border border-blue-600 bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus-visible:outline-blue-400"
                                    >
                                        <Save size={16} />
                                        Save Changes
                                    </button>

                                </div>
                            </div>
                        )}

                        {/* =================================================
                            NOTIFICATIONS
                        ================================================= */}

                        {activeTab === "notifications" && (
                            <div className="p-6 sm:p-8">

                                <h2 className="text-lg font-bold text-slate-900 dark:text-slate-50">
                                    Notification Preferences
                                </h2>

                                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                    Choose what you want to be notified about.
                                </p>

                                <div className="mt-4 divide-y divide-slate-200 dark:divide-[#1e334a]">

                                    <Toggle
                                        checked={notifyEnrollments}
                                        onChange={setNotifyEnrollments}
                                        label="New Enrollments"
                                        description="Get notified whenever a student enrolls in a course."
                                    />

                                    <Toggle
                                        checked={notifyCompletions}
                                        onChange={setNotifyCompletions}
                                        label="Course Completions"
                                        description="Get notified when a student completes a course."
                                    />

                                    <Toggle
                                        checked={notifyBilling}
                                        onChange={setNotifyBilling}
                                        label="Billing Alerts"
                                        description="Get notified about invoices, renewals and payment issues."
                                    />

                                    <Toggle
                                        checked={weeklyDigest}
                                        onChange={setWeeklyDigest}
                                        label="Weekly Digest"
                                        description="A weekly summary of activity across your organization."
                                    />

                                    <Toggle
                                        checked={notifyMarketing}
                                        onChange={setNotifyMarketing}
                                        label="Product Updates"
                                        description="Occasional news about new Shiyora features."
                                    />

                                </div>

                                <div className="mt-6 flex justify-end border-t border-slate-200 pt-6 dark:border-[#1e334a]">

                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleSave("Notification")
                                        }
                                        className="inline-flex items-center gap-2 rounded-xl border border-blue-600 bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus-visible:outline-blue-400"
                                    >
                                        <Save size={16} />
                                        Save Preferences
                                    </button>

                                </div>
                            </div>
                        )}

                        {/* =================================================
                            SECURITY
                        ================================================= */}

                        {activeTab === "security" && (
                            <div className="p-6 sm:p-8">

                                <h2 className="text-lg font-bold text-slate-900 dark:text-slate-50">
                                    Security
                                </h2>

                                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                    Manage your password and account protection.
                                </p>

                                <div className="mt-6 grid grid-cols-1 gap-5">

                                    {/* CURRENT PASSWORD */}

                                    <div>
                                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                                            Current Password
                                        </label>

                                        <input
                                            type="password"
                                            value={currentPassword}
                                            onChange={(e) =>
                                                setCurrentPassword(
                                                    e.target.value
                                                )
                                            }
                                            placeholder="••••••••"
                                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-[#1e334a] dark:bg-[#102337] dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus:border-blue-400"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                                        {/* NEW PASSWORD */}

                                        <div>
                                            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                                                New Password
                                            </label>

                                            <input
                                                type="password"
                                                value={newPassword}
                                                onChange={(e) =>
                                                    setNewPassword(
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="••••••••"
                                                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-[#1e334a] dark:bg-[#102337] dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus:border-blue-400"
                                            />
                                        </div>

                                        {/* CONFIRM PASSWORD */}

                                        <div>
                                            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                                                Confirm New Password
                                            </label>

                                            <input
                                                type="password"
                                                value={confirmPassword}
                                                onChange={(e) =>
                                                    setConfirmPassword(
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="••••••••"
                                                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-[#1e334a] dark:bg-[#102337] dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus:border-blue-400"
                                            />
                                        </div>

                                    </div>
                                </div>

                                {/* SECURITY TOGGLES */}

                                <div className="mt-2 divide-y divide-slate-200 border-t border-slate-200 dark:divide-[#1e334a] dark:border-[#1e334a]">

                                    <Toggle
                                        checked={twoFactor}
                                        onChange={setTwoFactor}
                                        label="Two-Factor Authentication"
                                        description="Require a verification code in addition to your password."
                                    />

                                    <Toggle
                                        checked={loginAlerts}
                                        onChange={setLoginAlerts}
                                        label="New Login Alerts"
                                        description="Get an email when your account is signed in from a new device."
                                    />

                                </div>

                                <div className="mt-6 flex justify-end border-t border-slate-200 pt-6 dark:border-[#1e334a]">

                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleSave("Security")
                                        }
                                        className="inline-flex items-center gap-2 rounded-xl border border-blue-600 bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus-visible:outline-blue-400"
                                    >
                                        <Save size={16} />
                                        Update Security
                                    </button>

                                </div>
                            </div>
                        )}

                        {/* =================================================
                            BILLING
                        ================================================= */}

                        {activeTab === "billing" && (
                            <div className="p-6 sm:p-8">

                                <h2 className="text-lg font-bold text-slate-900 dark:text-slate-50">
                                    Billing
                                </h2>

                                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                    Your current plan and payment details.
                                </p>

                                {/* CURRENT PLAN */}

                                <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-[#1e334a] dark:bg-[#102337] sm:flex-row sm:items-center">

                                    <div>

                                        <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                                            Professional Plan
                                        </span>

                                        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                                            ₹5,999 / month · renews on 14 Oct
                                            2026
                                        </p>

                                    </div>

                                    <button
                                        type="button"
                                        className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-[#1e334a] dark:bg-[#0b1727] dark:text-slate-200 dark:hover:border-blue-500/50 dark:hover:text-blue-400"
                                    >
                                        Manage Plan
                                    </button>

                                </div>

                                {/* PAYMENT METHOD */}

                                <div className="mt-6 flex items-center gap-3 rounded-xl border border-slate-200 p-5 dark:border-[#1e334a]">

                                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-teal-100 bg-teal-50 text-teal-600 dark:border-teal-500/20 dark:bg-teal-500/10 dark:text-teal-400">
                                        <CreditCard size={20} />
                                    </div>

                                    <div>
                                        <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                                            Visa ending in 4242
                                        </p>

                                        <p className="text-xs text-slate-500 dark:text-slate-400">
                                            Expires 08/28
                                        </p>
                                    </div>

                                </div>
                            </div>
                        )}
                    </section>
                </div>

                {/* =====================================================
                    FOOTER NOTE
                ====================================================== */}

                <div className="mt-5 flex items-center justify-between">

                    <p className="font-mono text-[9px] uppercase tracking-wider text-slate-400 dark:text-slate-600">
                        Shiyora Administration
                    </p>

                    <p className="font-mono text-[9px] uppercase tracking-wider text-slate-400 dark:text-slate-600">
                        Account Settings
                    </p>

                </div>

            </div>
        </main>
    );
};

export default Settings;