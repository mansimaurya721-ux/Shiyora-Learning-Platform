import React, { useState } from "react";
import {
    User,
    Mail,
    Phone,
    MapPin,
    CalendarDays,
    GraduationCap,
    Pencil,
    Lock,
    Save,
    X,
    CheckCircle2,
    ShieldCheck,
    BookOpen,
    Clock3,
    Award,
    Edit3,
    Camera,
    Sparkles,
} from "lucide-react";

const Profile = () => {
    const [profile, setProfile] = useState({
        name: "Mansi Maurya",
        email: "student@example.com",
        phone: "+91 98765 43210",
        location: "Gonda, Uttar Pradesh",
        dob: "10 June 2008",
        course: "BCA",
        bio: "Passionate about learning technology and building modern web applications.",
    });

    const [showEditModal, setShowEditModal] = useState(false);

    const handleSaveProfile = (updatedProfile) => {
        setProfile(updatedProfile);
        setShowEditModal(false);
    };

    return (
        <div className="min-h-screen bg-slate-50 px-4 py-6 text-slate-700 dark:bg-[#07111f] dark:text-slate-300 sm:px-6 lg:px-8">

            {/* PAGE HEADER */}
            <div className="mx-auto mb-6 max-w-5xl">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <div className="mb-2 flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-teal-400">
                            <User size={17} />
                            Student Profile
                        </div>

                        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                            My Profile
                        </h1>

                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                            Manage your personal information and learning account.
                        </p>
                    </div>

                    <button
                        onClick={() => setShowEditModal(true)}
                        className="inline-flex w-fit items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:from-blue-700 hover:to-teal-600"
                    >
                        <Edit3 size={17} />
                        Edit Profile
                    </button>
                </div>
            </div>

            {/* PROFILE HERO */}
            <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-[#0b1727]">

                {/* COVER */}
                <div className="relative h-32 overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-teal-500 sm:h-40">
                    <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
                    <div className="absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-teal-300/20 blur-3xl" />

                    <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                        <Sparkles size={14} />
                        Shiyora Student
                    </div>
                </div>

                {/* PROFILE INFORMATION */}
                <div className="px-5 pb-6 sm:px-8">
                    <div className="-mt-12 flex flex-col gap-5 sm:-mt-14 sm:flex-row sm:items-end sm:justify-between">

                        {/* AVATAR */}
                        <div className="flex items-end gap-4">
                            <div className="relative">
                                <div className="flex h-24 w-24 items-center justify-center rounded-2xl border-4 border-white bg-gradient-to-br from-blue-600 to-teal-500 text-2xl font-bold text-white shadow-xl dark:border-[#0b1727] sm:h-28 sm:w-28 sm:text-3xl">
                                    MM
                                </div>

                                <div className="absolute bottom-1 right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-emerald-500 dark:border-[#0b1727]">
                                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                                </div>

                                <button
                                    type="button"
                                    className="absolute -bottom-2 -left-2 flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 shadow-md transition hover:text-blue-600 dark:border-slate-700 dark:bg-[#102337] dark:text-slate-300 dark:hover:text-teal-400"
                                >
                                    <Camera size={15} />
                                </button>
                            </div>

                            <div className="pb-1">
                                <div className="flex flex-wrap items-center gap-2">
                                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                                        {profile.name}
                                    </h2>

                                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                                        <CheckCircle2 size={12} />
                                        Verified Student
                                    </span>
                                </div>

                                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                    {profile.course} Student
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* BIO */}
                    <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 dark:border-slate-800 dark:bg-[#102337]">
                        <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                            {profile.bio}
                        </p>
                    </div>
                </div>
            </div>

            {/* =====================================================
                MAIN PROFILE CONTENT
                REDUCED WIDTH + CENTERED
            ====================================================== */}
            <div className="mx-auto mt-6 max-w-5xl">

                {/* PERSONAL INFORMATION */}
                <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-[#0b1727] sm:p-6">

                    <div className="mb-5 flex items-center justify-between">
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                                Personal Information
                            </h3>

                            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                Your basic account information
                            </p>
                        </div>

                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                            <User size={18} />
                        </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <InfoItem
                            icon={<User size={18} />}
                            label="Full Name"
                            value={profile.name}
                        />

                        <InfoItem
                            icon={<Mail size={18} />}
                            label="Email Address"
                            value={profile.email}
                        />

                        <InfoItem
                            icon={<Phone size={18} />}
                            label="Phone Number"
                            value={profile.phone}
                        />

                        <InfoItem
                            icon={<MapPin size={18} />}
                            label="Location"
                            value={profile.location}
                        />

                        <InfoItem
                            icon={<CalendarDays size={18} />}
                            label="Date of Birth"
                            value={profile.dob}
                        />

                        <InfoItem
                            icon={<GraduationCap size={18} />}
                            label="Program"
                            value={profile.course}
                        />
                    </div>
                </section>

                {/* LEARNING OVERVIEW */}
                <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-[#0b1727] sm:p-6">

                    <div className="mb-6 flex items-center justify-between">
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                                Learning Overview
                            </h3>

                            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                Your progress on Shiyora
                            </p>
                        </div>

                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-50 text-teal-600 dark:bg-teal-500/10 dark:text-teal-400">
                            <BookOpen size={18} />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                        <MiniStat
                            icon={<BookOpen size={18} />}
                            value="06"
                            label="Enrolled Courses"
                        />

                        <MiniStat
                            icon={<CheckCircle2 size={18} />}
                            value="02"
                            label="Completed"
                        />

                        <MiniStat
                            icon={<Clock3 size={18} />}
                            value="42h"
                            label="Learning Time"
                        />

                        <MiniStat
                            icon={<Award size={18} />}
                            value="02"
                            label="Certificates"
                        />
                    </div>

                    {/* OVERALL PROGRESS */}
                    <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-[#102337]">

                        <div className="mb-3 flex items-center justify-between">
                            <div>
                                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                                    Overall Learning Progress
                                </p>

                                <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                                    Keep learning to reach your next milestone.
                                </p>
                            </div>

                            <span className="text-sm font-bold text-blue-600 dark:text-teal-400">
                                61%
                            </span>
                        </div>

                        <div className="h-2.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                            <div
                                className="h-full rounded-full bg-gradient-to-r from-blue-600 to-teal-500"
                                style={{ width: "61%" }}
                            />
                        </div>
                    </div>
                </section>

                {/* ACCOUNT SECURITY */}
                <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-[#0b1727] sm:p-6">

                    <div className="mb-5 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                            <ShieldCheck size={20} />
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                                Account Security
                            </h3>

                            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                Keep your Shiyora account secure
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between dark:border-slate-800 dark:bg-[#102337]">

                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-slate-600 shadow-sm dark:bg-[#0b1727] dark:text-slate-300">
                                <Lock size={18} />
                            </div>

                            <div>
                                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                                    Password
                                </p>

                                <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                                    Your password is securely protected.
                                </p>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={() => alert("Change Password feature coming soon.")}
                            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:bg-[#0b1727] dark:text-slate-300 dark:hover:border-teal-500 dark:hover:text-teal-400"
                        >
                            <Pencil size={15} />
                            Change Password
                        </button>
                    </div>
                </section>

                {/* ACCOUNT STATUS */}
                <div className="mt-6 grid gap-4 sm:grid-cols-2">

                    <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-5 dark:border-blue-500/20 dark:from-blue-500/10 dark:to-[#0b1727]">
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                                    Account Status
                                </p>

                                <h4 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                                    Active
                                </h4>

                                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                    Your student account is active.
                                </p>
                            </div>

                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-500/20">
                                <CheckCircle2 size={19} />
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-teal-100 bg-gradient-to-br from-teal-50 to-white p-5 dark:border-teal-500/20 dark:from-teal-500/10 dark:to-[#0b1727]">
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                                    Student Level
                                </p>

                                <h4 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                                    Intermediate
                                </h4>

                                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                    Keep progressing through your courses.
                                </p>
                            </div>

                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-600 text-white shadow-lg shadow-teal-500/20">
                                <GraduationCap size={19} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* EDIT PROFILE MODAL */}
            {showEditModal && (
                <EditProfileModal
                    profile={profile}
                    onClose={() => setShowEditModal(false)}
                    onSave={handleSaveProfile}
                />
            )}
        </div>
    );
};

/* =========================================================
   INFO ITEM
========================================================= */

const InfoItem = ({ icon, label, value }) => {
    return (
        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-[#102337]">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm dark:bg-[#0b1727] dark:text-teal-400">
                {icon}
            </div>

            <div className="min-w-0">
                <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500">
                    {label}
                </p>

                <p className="mt-1 truncate text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {value}
                </p>
            </div>
        </div>
    );
};

/* =========================================================
   MINI STAT
========================================================= */

const MiniStat = ({ icon, value, label }) => {
    return (
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-[#102337]">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm dark:bg-[#0b1727] dark:text-teal-400">
                {icon}
            </div>

            <p className="text-xl font-bold text-slate-900 dark:text-white">
                {value}
            </p>

            <p className="mt-1 text-[11px] leading-4 text-slate-500 dark:text-slate-400">
                {label}
            </p>
        </div>
    );
};

/* =========================================================
   EDIT PROFILE MODAL
========================================================= */

const EditProfileModal = ({ profile, onClose, onSave }) => {
    const [form, setForm] = useState(profile);

    const handleChange = (field, value) => {
        setForm((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(form);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm">

            <div className="w-full max-w-lg overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-[#0b1727]">

                {/* MODAL HEADER */}
                <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-slate-800">
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                            Edit Profile
                        </h3>

                        <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                            Update your personal information.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-slate-800 dark:hover:text-white"
                    >
                        <X size={19} />
                    </button>
                </div>

                {/* FORM */}
                <form onSubmit={handleSubmit} className="p-5">

                    <div className="grid gap-4 sm:grid-cols-2">

                        <FormInput
                            label="Full Name"
                            value={form.name}
                            onChange={(value) => handleChange("name", value)}
                        />

                        <FormInput
                            label="Email"
                            type="email"
                            value={form.email}
                            onChange={(value) => handleChange("email", value)}
                        />

                        <FormInput
                            label="Phone"
                            value={form.phone}
                            onChange={(value) => handleChange("phone", value)}
                        />

                        <FormInput
                            label="Location"
                            value={form.location}
                            onChange={(value) => handleChange("location", value)}
                        />

                        <FormInput
                            label="Date of Birth"
                            value={form.dob}
                            onChange={(value) => handleChange("dob", value)}
                        />

                        <FormInput
                            label="Program"
                            value={form.course}
                            onChange={(value) => handleChange("course", value)}
                        />

                    </div>

                    <div className="mt-4">
                        <label className="mb-1.5 block text-xs font-semibold text-slate-600 dark:text-slate-300">
                            Bio
                        </label>

                        <textarea
                            rows={3}
                            value={form.bio}
                            onChange={(e) => handleChange("bio", e.target.value)}
                            className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-[#102337] dark:text-slate-200 dark:focus:border-teal-500"
                        />
                    </div>

                    {/* BUTTONS */}
                    <div className="mt-5 flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:from-blue-700 hover:to-teal-600"
                        >
                            <Save size={16} />
                            Save Changes
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

/* =========================================================
   FORM INPUT
========================================================= */

const FormInput = ({
    label,
    value,
    onChange,
    type = "text",
}) => {
    return (
        <div>
            <label className="mb-1.5 block text-xs font-semibold text-slate-600 dark:text-slate-300">
                {label}
            </label>

            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-[#102337] dark:text-slate-200 dark:focus:border-teal-500"
            />
        </div>
    );
};

export default Profile;