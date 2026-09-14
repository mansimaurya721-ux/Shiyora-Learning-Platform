import { useState } from "react";
import { Link } from "react-router-dom";

function Profile() {
    const [profile, setProfile] = useState({
        firstName: "Mansi",
        lastName: "Maurya",
        email: "teacher@shiyora.com",
        phone: "+91 98765 43210",
        specialization: "Web Development",
        experience: "3 Years",
        bio: "Passionate educator focused on helping students build strong foundations in web development and modern programming.",
    });

    const [passwords, setPasswords] = useState({
        current: "",
        newPassword: "",
        confirm: "",
    });

    const [showCurrent, setShowCurrent] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const [saved, setSaved] = useState(false);

    const handleProfileChange = (e) => {
        const { name, value } = e.target;

        setProfile((prev) => ({
            ...prev,
            [name]: value,
        }));

        setSaved(false);
    };

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;

        setPasswords((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleProfileSubmit = (e) => {
        e.preventDefault();

        console.log("Updated Teacher Profile:", profile);

        setSaved(true);

        setTimeout(() => {
            setSaved(false);
        }, 3000);
    };

    const handlePasswordSubmit = (e) => {
        e.preventDefault();

        if (!passwords.current || !passwords.newPassword) {
            return;
        }

        if (passwords.newPassword !== passwords.confirm) {
            alert("New password and confirm password do not match.");
            return;
        }

        console.log("Password change requested");

        setPasswords({
            current: "",
            newPassword: "",
            confirm: "",
        });

        alert("Password updated successfully.");
    };

    return (
        <div className="space-y-8">
            {/* =========================================
                HEADER
            ========================================== */}
            <section className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div>
                    <div className="mb-3 flex items-center gap-3">
                        <span className="h-px w-10 bg-[#F2B84B]" />

                        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#F2B84B]">
                            Account
                        </span>
                    </div>

                    <h1 className="text-3xl font-bold tracking-tight text-[#F3EEDD] md:text-4xl">
                        My Profile
                    </h1>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-[#A9AAA1]">
                        Manage your teacher profile, professional information,
                        and account settings.
                    </p>
                </div>

                <Link
                    to="/teacher/dashboard"
                    className="inline-flex w-fit items-center gap-2 rounded-xl border border-[#F3EEDD]/10 bg-[#1B241E] px-5 py-3 text-sm font-semibold text-[#A9AAA1] transition hover:border-[#F2B84B]/30 hover:text-[#F2B84B]"
                >
                    <svg
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                    >
                        <path d="m15 18-6-6 6-6" />
                    </svg>

                    Dashboard
                </Link>
            </section>

            {/* =========================================
                PROFILE HERO
            ========================================== */}
            <section className="relative overflow-hidden rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-6 md:p-8">
                <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#F2B84B]/5 blur-3xl" />

                <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                        {/* AVATAR */}
                        <div className="relative flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border border-[#F2B84B]/20 bg-[#F2B84B]/10">
                            <span className="text-3xl font-bold text-[#F2B84B]">
                                MM
                            </span>

                            <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-[#1B241E] bg-[#7C9A82]" />
                        </div>

                        <div>
                            <div className="flex flex-wrap items-center gap-3">
                                <h2 className="text-2xl font-bold text-[#F3EEDD]">
                                    {profile.firstName} {profile.lastName}
                                </h2>

                                <span className="rounded-full border border-[#7C9A82]/20 bg-[#7C9A82]/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-[#9EB7A2]">
                                    Active Teacher
                                </span>
                            </div>

                            <p className="mt-2 text-sm text-[#A9AAA1]">
                                {profile.specialization}
                            </p>

                            <p className="mt-1 font-mono text-xs text-[#777C74]">
                                teacher@shiyora.com
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                        <ProfileStat
                            value="08"
                            label="Courses"
                        />

                        <ProfileStat
                            value="342"
                            label="Students"
                        />

                        <ProfileStat
                            value="94%"
                            label="Rating"
                        />
                    </div>
                </div>
            </section>

            {/* =========================================
                MAIN GRID
            ========================================== */}
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
                {/* =========================================
                    PROFILE INFORMATION
                ========================================== */}
                <section className="rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-6 xl:col-span-2">
                    <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#7C9A82]">
                                Personal Information
                            </p>

                            <h2 className="mt-2 text-xl font-bold text-[#F3EEDD]">
                                Profile details
                            </h2>

                            <p className="mt-1 text-sm text-[#777C74]">
                                Update the information visible on your teacher
                                profile.
                            </p>
                        </div>

                        {saved && (
                            <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#9EB7A2]">
                                <span className="h-2 w-2 rounded-full bg-[#7C9A82]" />
                                Changes saved
                            </span>
                        )}
                    </div>

                    <form
                        onSubmit={handleProfileSubmit}
                        className="space-y-5"
                    >
                        {/* NAME */}
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                            <InputField
                                label="First Name"
                                name="firstName"
                                value={profile.firstName}
                                onChange={handleProfileChange}
                                placeholder="First name"
                            />

                            <InputField
                                label="Last Name"
                                name="lastName"
                                value={profile.lastName}
                                onChange={handleProfileChange}
                                placeholder="Last name"
                            />
                        </div>

                        {/* EMAIL + PHONE */}
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                            <InputField
                                label="Email Address"
                                name="email"
                                type="email"
                                value={profile.email}
                                onChange={handleProfileChange}
                                placeholder="Email address"
                            />

                            <InputField
                                label="Phone Number"
                                name="phone"
                                value={profile.phone}
                                onChange={handleProfileChange}
                                placeholder="Phone number"
                            />
                        </div>

                        {/* SPECIALIZATION + EXPERIENCE */}
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                            <div>
                                <label className="mb-2 block text-sm font-semibold text-[#F3EEDD]">
                                    Specialization
                                </label>

                                <select
                                    name="specialization"
                                    value={profile.specialization}
                                    onChange={handleProfileChange}
                                    className="w-full rounded-xl border border-[#F3EEDD]/10 bg-[#141C17] px-4 py-3 text-sm text-[#F3EEDD] outline-none focus:border-[#F2B84B]/40"
                                >
                                    <option value="Web Development">
                                        Web Development
                                    </option>

                                    <option value="Frontend Development">
                                        Frontend Development
                                    </option>

                                    <option value="Backend Development">
                                        Backend Development
                                    </option>

                                    <option value="Database Management">
                                        Database Management
                                    </option>

                                    <option value="Programming">
                                        Programming
                                    </option>
                                </select>
                            </div>

                            <InputField
                                label="Teaching Experience"
                                name="experience"
                                value={profile.experience}
                                onChange={handleProfileChange}
                                placeholder="e.g. 3 Years"
                            />
                        </div>

                        {/* BIO */}
                        <div>
                            <label className="mb-2 block text-sm font-semibold text-[#F3EEDD]">
                                About Me
                            </label>

                            <textarea
                                name="bio"
                                value={profile.bio}
                                onChange={handleProfileChange}
                                rows="5"
                                placeholder="Write something about yourself..."
                                className="w-full resize-none rounded-xl border border-[#F3EEDD]/10 bg-[#141C17] px-4 py-3 text-sm leading-6 text-[#F3EEDD] outline-none placeholder:text-[#777C74] focus:border-[#F2B84B]/40"
                            />

                            <p className="mt-2 text-right font-mono text-[10px] text-[#777C74]">
                                {profile.bio.length} characters
                            </p>
                        </div>

                        {/* SAVE */}
                        <div className="flex justify-end border-t border-[#F3EEDD]/10 pt-5">
                            <button
                                type="submit"
                                className="rounded-xl bg-[#F2B84B] px-6 py-3 text-sm font-bold text-[#161F19] transition hover:bg-[#f5c766]"
                            >
                                Save Changes
                            </button>
                        </div>
                    </form>
                </section>

                {/* =========================================
                    ORGANIZATION
                ========================================== */}
                <section className="rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-6">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#7C9A82]">
                        Organization
                    </p>

                    <h2 className="mt-2 text-xl font-bold text-[#F3EEDD]">
                        Teaching Workspace
                    </h2>

                    <div className="mt-6 space-y-5">
                        <OrganizationRow
                            label="Organization"
                            value="Shiyora Academy"
                        />

                        <OrganizationRow
                            label="Role"
                            value="Teacher"
                        />

                        <OrganizationRow
                            label="Department"
                            value="Computer Science"
                        />

                        <OrganizationRow
                            label="Member Since"
                            value="January 2026"
                        />

                        <OrganizationRow
                            label="Account Status"
                            value="Active"
                            active
                        />
                    </div>

                    <div className="mt-6 rounded-xl border border-[#7C9A82]/15 bg-[#7C9A82]/5 p-4">
                        <div className="flex items-start gap-3">
                            <div className="mt-0.5 text-[#9EB7A2]">
                                <svg
                                    width="19"
                                    height="19"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                >
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                                    <path d="m9 12 2 2 4-4" />
                                </svg>
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold text-[#F3EEDD]">
                                    Verified account
                                </h3>

                                <p className="mt-1 text-xs leading-5 text-[#777C74]">
                                    Your teacher account is active and verified
                                    by the organization administrator.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* =========================================
                PASSWORD + PREFERENCES
            ========================================== */}
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                {/* CHANGE PASSWORD */}
                <section className="rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-6">
                    <div className="mb-6">
                        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#7C9A82]">
                            Security
                        </p>

                        <h2 className="mt-2 text-xl font-bold text-[#F3EEDD]">
                            Change Password
                        </h2>

                        <p className="mt-1 text-sm text-[#777C74]">
                            Keep your account secure with a strong password.
                        </p>
                    </div>

                    <form
                        onSubmit={handlePasswordSubmit}
                        className="space-y-5"
                    >
                        <PasswordField
                            label="Current Password"
                            name="current"
                            value={passwords.current}
                            onChange={handlePasswordChange}
                            visible={showCurrent}
                            onToggle={() =>
                                setShowCurrent((prev) => !prev)
                            }
                        />

                        <PasswordField
                            label="New Password"
                            name="newPassword"
                            value={passwords.newPassword}
                            onChange={handlePasswordChange}
                            visible={showNew}
                            onToggle={() =>
                                setShowNew((prev) => !prev)
                            }
                        />

                        <PasswordField
                            label="Confirm New Password"
                            name="confirm"
                            value={passwords.confirm}
                            onChange={handlePasswordChange}
                            visible={showConfirm}
                            onToggle={() =>
                                setShowConfirm((prev) => !prev)
                            }
                        />

                        <div className="rounded-xl border border-[#F3EEDD]/10 bg-[#141C17] p-4">
                            <p className="text-xs font-semibold text-[#F3EEDD]">
                                Password requirements
                            </p>

                            <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                                <Requirement
                                    text="At least 8 characters"
                                    valid={
                                        passwords.newPassword.length >= 8
                                    }
                                />

                                <Requirement
                                    text="Contains a number"
                                    valid={/\d/.test(
                                        passwords.newPassword
                                    )}
                                />

                                <Requirement
                                    text="Uppercase letter"
                                    valid={/[A-Z]/.test(
                                        passwords.newPassword
                                    )}
                                />

                                <Requirement
                                    text="Passwords match"
                                    valid={
                                        passwords.newPassword.length > 0 &&
                                        passwords.newPassword ===
                                        passwords.confirm
                                    }
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="rounded-xl border border-[#F2B84B]/20 bg-[#F2B84B]/10 px-6 py-3 text-sm font-semibold text-[#F2B84B] transition hover:bg-[#F2B84B]/15"
                        >
                            Update Password
                        </button>
                    </form>
                </section>

                {/* PREFERENCES */}
                <section className="rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-6">
                    <div className="mb-6">
                        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#7C9A82]">
                            Preferences
                        </p>

                        <h2 className="mt-2 text-xl font-bold text-[#F3EEDD]">
                            Account preferences
                        </h2>

                        <p className="mt-1 text-sm text-[#777C74]">
                            Control how your teacher workspace behaves.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <PreferenceToggle
                            title="Email Notifications"
                            description="Receive updates about courses, students and assignments."
                            defaultChecked
                        />

                        <PreferenceToggle
                            title="Student Activity Alerts"
                            description="Get notified when students submit important work."
                            defaultChecked
                        />

                        <PreferenceToggle
                            title="Weekly Analytics"
                            description="Receive a weekly summary of teaching performance."
                            defaultChecked
                        />

                        <PreferenceToggle
                            title="Course Comments"
                            description="Receive notifications when students comment on lessons."
                        />
                    </div>

                    <div className="mt-6 border-t border-[#F3EEDD]/10 pt-5">
                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <p className="text-sm font-semibold text-[#F3EEDD]">
                                    Workspace Theme
                                </p>

                                <p className="mt-1 text-xs text-[#777C74]">
                                    Current Shiyora teacher workspace theme.
                                </p>
                            </div>

                            <span className="rounded-lg border border-[#F2B84B]/20 bg-[#F2B84B]/10 px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-[#F2B84B]">
                                Dark
                            </span>
                        </div>
                    </div>
                </section>
            </div>

            {/* =========================================
                FOOTER NOTE
            ========================================== */}
            <section className="rounded-2xl border border-[#F3EEDD]/10 bg-[#141C17] p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-start gap-3">
                        <div className="mt-0.5 text-[#F2B84B]">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.7"
                            >
                                <circle cx="12" cy="12" r="9" />
                                <path d="M12 11v5" />
                                <path d="M12 8h.01" />
                            </svg>
                        </div>

                        <div>
                            <p className="text-sm font-semibold text-[#F3EEDD]">
                                Profile visibility
                            </p>

                            <p className="mt-1 text-xs leading-5 text-[#777C74]">
                                Your profile information may be visible to
                                students enrolled in your courses.
                            </p>
                        </div>
                    </div>

                    <Link
                        to="/teacher/courses"
                        className="text-sm font-semibold text-[#F2B84B] transition hover:text-[#f5c766]"
                    >
                        View My Courses →
                    </Link>
                </div>
            </section>
        </div>
    );
}

/* =========================================
   REUSABLE COMPONENTS
========================================= */

function InputField({
    label,
    name,
    type = "text",
    value,
    onChange,
    placeholder,
}) {
    return (
        <div>
            <label className="mb-2 block text-sm font-semibold text-[#F3EEDD]">
                {label}
            </label>

            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full rounded-xl border border-[#F3EEDD]/10 bg-[#141C17] px-4 py-3 text-sm text-[#F3EEDD] outline-none placeholder:text-[#777C74] focus:border-[#F2B84B]/40"
            />
        </div>
    );
}

function PasswordField({
    label,
    name,
    value,
    onChange,
    visible,
    onToggle,
}) {
    return (
        <div>
            <label className="mb-2 block text-sm font-semibold text-[#F3EEDD]">
                {label}
            </label>

            <div className="relative">
                <input
                    type={visible ? "text" : "password"}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-[#F3EEDD]/10 bg-[#141C17] px-4 py-3 pr-12 text-sm text-[#F3EEDD] outline-none placeholder:text-[#777C74] focus:border-[#F2B84B]/40"
                />

                <button
                    type="button"
                    onClick={onToggle}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#777C74] transition hover:text-[#F2B84B]"
                    aria-label={visible ? "Hide password" : "Show password"}
                >
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                    >
                        {visible ? (
                            <>
                                <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
                                <circle cx="12" cy="12" r="2.5" />
                            </>
                        ) : (
                            <>
                                <path d="M3 3l18 18" />
                                <path d="M10.6 6.2A10.5 10.5 0 0 1 12 6c6.5 0 10 6 10 6a18 18 0 0 1-3.1 3.8" />
                                <path d="M6.6 6.7C3.8 8.5 2 12 2 12s3.5 6 10 6a9.8 9.8 0 0 0 4.2-.9" />
                            </>
                        )}
                    </svg>
                </button>
            </div>
        </div>
    );
}

function ProfileStat({ value, label }) {
    return (
        <div className="min-w-21.25 rounded-xl border border-[#F3EEDD]/10 bg-[#141C17] px-4 py-3 text-center">
            <p className="text-lg font-bold text-[#F2B84B]">
                {value}
            </p>

            <p className="mt-1 font-mono text-[9px] uppercase tracking-wider text-[#777C74]">
                {label}
            </p>
        </div>
    );
}

function OrganizationRow({ label, value, active = false }) {
    return (
        <div className="flex items-center justify-between gap-4 border-b border-[#F3EEDD]/10 pb-4 last:border-0 last:pb-0">
            <span className="text-xs text-[#777C74]">
                {label}
            </span>

            <span
                className={`text-right text-sm font-semibold ${active ? "text-[#9EB7A2]" : "text-[#F3EEDD]"
                    }`}
            >
                {value}
            </span>
        </div>
    );
}

function Requirement({ text, valid }) {
    return (
        <div className="flex items-center gap-2">
            <span
                className={`flex h-4 w-4 items-center justify-center rounded-full ${valid
                    ? "bg-[#7C9A82]/15 text-[#9EB7A2]"
                    : "bg-[#F3EEDD]/5 text-[#555B54]"
                    }`}
            >
                <svg
                    width="9"
                    height="9"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                >
                    <path d="m5 12 4 4L19 6" />
                </svg>
            </span>

            <span
                className={`text-xs ${valid ? "text-[#A9AAA1]" : "text-[#777C74]"
                    }`}
            >
                {text}
            </span>
        </div>
    );
}

function PreferenceToggle({
    title,
    description,
    defaultChecked = false,
}) {
    const [checked, setChecked] = useState(defaultChecked);

    return (
        <div className="flex items-start justify-between gap-4 rounded-xl border border-[#F3EEDD]/10 bg-[#141C17] p-4">
            <div>
                <p className="text-sm font-semibold text-[#F3EEDD]">
                    {title}
                </p>

                <p className="mt-1 max-w-md text-xs leading-5 text-[#777C74]">
                    {description}
                </p>
            </div>

            <button
                type="button"
                onClick={() => setChecked((prev) => !prev)}
                className={`relative mt-1 h-6 w-11 shrink-0 rounded-full transition ${checked ? "bg-[#7C9A82]" : "bg-[#3A433D]"
                    }`}
                aria-label={`Toggle ${title}`}
            >
                <span
                    className={`absolute top-1 h-4 w-4 rounded-full bg-[#F3EEDD] transition ${checked ? "left-6" : "left-1"
                        }`}
                />
            </button>
        </div>
    );
}

export default Profile;