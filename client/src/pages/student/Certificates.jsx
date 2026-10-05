import React, { useState } from "react";
import {
    Award,
    Download,
    Eye,
    CalendarDays,
    BookOpen,
    CheckCircle2,
    Search,
    X,
    ShieldCheck,
    BadgeCheck,
    GraduationCap,
    ExternalLink,
} from "lucide-react";

const Certificates = () => {
    const [search, setSearch] = useState("");
    const [selectedCertificate, setSelectedCertificate] =
        useState(null);

    const certificates = [
        {
            id: 1,
            title: "HTML & CSS Fundamentals",
            course: "HTML & CSS Fundamentals",
            instructor: "Neha Gupta",
            issueDate: "15 August 2026",
            certificateId: "SHY-HTML-2026-001",
            verificationId: "SHY-VER-92841",
            score: "92%",
            duration: "8 Weeks",
            grade: "A",
        },
        {
            id: 2,
            title: "JavaScript Essentials",
            course: "JavaScript Essentials",
            instructor: "Rohit Kumar",
            issueDate: "28 July 2026",
            certificateId: "SHY-JS-2026-002",
            verificationId: "SHY-VER-73162",
            score: "88%",
            duration: "10 Weeks",
            grade: "A-",
        },
    ];

    const filteredCertificates = certificates.filter((certificate) =>
        `${certificate.title} ${certificate.course} ${certificate.instructor}`
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-slate-50 text-slate-700 dark:bg-[#07111f] dark:text-slate-300">
            <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">

                {/* =====================================================
                    HEADER
                ====================================================== */}
                <section className="mb-8">
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                        <div>
                            <div className="mb-3 flex items-center gap-2">
                                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
                                    <Award size={19} />
                                </div>

                                <span className="text-sm font-semibold text-blue-600 dark:text-teal-400">
                                    Achievements
                                </span>
                            </div>

                            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                                My Certificates
                            </h1>

                            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400 sm:text-base">
                                View, verify and manage the certificates
                                you have earned through your completed
                                courses.
                            </p>
                        </div>

                        {/* Certificate count */}
                        <div className="flex w-fit items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600 dark:bg-teal-950/40 dark:text-teal-400">
                                <BadgeCheck size={21} />
                            </div>

                            <div>
                                <p className="text-xs text-slate-500 dark:text-slate-400">
                                    Certificates Earned
                                </p>

                                <p className="text-lg font-bold text-slate-900 dark:text-white">
                                    {certificates.length}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    STATS
                ====================================================== */}
                <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">

                    <StatCard
                        icon={Award}
                        title="Certificates Earned"
                        value="02"
                        color="blue"
                    />

                    <StatCard
                        icon={CheckCircle2}
                        title="Courses Completed"
                        value="02"
                        color="teal"
                    />

                    <StatCard
                        icon={BookOpen}
                        title="Courses In Progress"
                        value="04"
                        color="blue"
                    />

                </section>

                {/* =====================================================
                    SEARCH
                ====================================================== */}
                <section className="mb-6">
                    <div className="relative max-w-xl">
                        <Search
                            size={19}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500"
                        />

                        <input
                            type="text"
                            value={search}
                            onChange={(e) =>
                                setSearch(e.target.value)
                            }
                            placeholder="Search certificates..."
                            className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-[#1e334a] dark:bg-[#0b1727] dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus:border-teal-500 dark:focus:ring-teal-500/10"
                        />
                    </div>
                </section>

                {/* =====================================================
                    CERTIFICATE LIST
                ====================================================== */}
                {filteredCertificates.length > 0 ? (
                    <section className="grid grid-cols-1 gap-6 xl:grid-cols-2">

                        {filteredCertificates.map((certificate) => (
                            <CertificateCard
                                key={certificate.id}
                                certificate={certificate}
                                onView={() =>
                                    setSelectedCertificate(
                                        certificate
                                    )
                                }
                            />
                        ))}

                    </section>
                ) : (
                    <EmptyState />
                )}

                {/* =====================================================
                    INFORMATION
                ====================================================== */}
                <section className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">

                    <div className="relative p-6 sm:p-7">

                        {/* Background decoration */}
                        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/5 blur-2xl dark:bg-teal-400/5" />

                        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center">

                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-teal-500 text-white shadow-sm">
                                <GraduationCap size={23} />
                            </div>

                            <div>
                                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                                    Keep building your achievements
                                </h2>

                                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
                                    Complete your remaining courses and
                                    assessments to unlock more verified
                                    certificates on your Shiyora profile.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* =====================================================
                    CERTIFICATE MODAL
                ====================================================== */}
                {selectedCertificate && (
                    <CertificateModal
                        certificate={selectedCertificate}
                        onClose={() =>
                            setSelectedCertificate(null)
                        }
                    />
                )}

            </div>
        </div>
    );
};

/* =========================================================
   STAT CARD
========================================================= */

const StatCard = ({
    icon: Icon,
    title,
    value,
    color = "blue",
}) => {
    const iconStyle =
        color === "teal"
            ? "bg-teal-50 text-teal-600 dark:bg-teal-950/40 dark:text-teal-400"
            : "bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400";

    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-[#1e334a] dark:bg-[#0b1727]">

            <div className="flex items-center justify-between">

                <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        {title}
                    </p>

                    <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
                        {value}
                    </p>
                </div>

                <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${iconStyle}`}
                >
                    <Icon size={22} />
                </div>

            </div>
        </div>
    );
};

/* =========================================================
   CERTIFICATE CARD
========================================================= */

const CertificateCard = ({
    certificate,
    onView,
}) => {
    return (
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg dark:border-[#1e334a] dark:bg-[#0b1727] dark:hover:border-teal-800">

            {/* =====================================================
                REALISTIC CERTIFICATE PREVIEW
            ====================================================== */}
            <div className="relative overflow-hidden bg-slate-100 p-4 dark:bg-[#102337] sm:p-6">

                {/* Certificate */}
                <div className="relative min-h-[260px] overflow-hidden rounded-lg border border-slate-300 bg-white shadow-xl dark:border-slate-600">

                    {/* Top gradient line */}
                    <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500" />

                    {/* Decorative circles */}
                    <div className="absolute -left-16 -top-16 h-32 w-32 rounded-full border border-blue-200/70 dark:border-blue-900/40" />

                    <div className="absolute -bottom-20 -right-16 h-40 w-40 rounded-full border border-teal-200/70 dark:border-teal-900/40" />

                    {/* Outer border */}
                    <div className="absolute inset-3 rounded border border-slate-200 dark:border-slate-700" />

                    {/* Inner border */}
                    <div className="absolute inset-5 rounded border border-blue-100 dark:border-slate-600" />

                    {/* Certificate content */}
                    <div className="relative z-10 flex min-h-[260px] flex-col items-center justify-center px-8 py-10 text-center">

                        {/* Brand */}
                        <div className="flex items-center gap-2">
                            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-teal-500 text-white">
                                <span className="text-xs font-bold">
                                    S
                                </span>
                            </div>

                            <span className="text-sm font-bold tracking-[0.18em] text-slate-700 dark:text-slate-800">
                                SHIYORA
                            </span>
                        </div>

                        <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.35em] text-slate-400">
                            Learning Management Platform
                        </p>

                        {/* Award icon */}
                        <div className="my-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-blue-200 bg-blue-50 text-blue-600 dark:border-blue-300 dark:bg-blue-50">
                            <Award size={25} />
                        </div>

                        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-400">
                            Certificate of Completion
                        </p>

                        <h3 className="mt-2 max-w-md font-serif text-xl font-bold text-slate-800 sm:text-2xl">
                            {certificate.course}
                        </h3>

                        <div className="mt-4 h-px w-32 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />

                        <p className="mt-3 text-[10px] text-slate-400">
                            Successfully completed with a score of
                        </p>

                        <p className="mt-1 text-lg font-bold text-blue-600">
                            {certificate.score}
                        </p>

                    </div>
                </div>

                {/* Verified badge */}
                <div className="absolute right-7 top-7 flex items-center gap-1.5 rounded-full border border-teal-200 bg-white px-2.5 py-1.5 text-[10px] font-semibold text-teal-700 shadow-sm dark:border-teal-800 dark:bg-[#0b1727] dark:text-teal-300">
                    <ShieldCheck size={13} />
                    Verified
                </div>
            </div>

            {/* =====================================================
                DETAILS
            ====================================================== */}
            <div className="p-5">

                <div className="flex items-start justify-between gap-4">

                    <div className="min-w-0">
                        <h3 className="truncate text-base font-semibold text-slate-900 dark:text-white">
                            {certificate.title}
                        </h3>

                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                            {certificate.instructor}
                        </p>
                    </div>

                    <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700 dark:border-teal-800 dark:bg-teal-950/30 dark:text-teal-300">
                        <CheckCircle2 size={13} />
                        Completed
                    </span>

                </div>

                {/* Details */}
                <div className="mt-5 grid grid-cols-2 gap-3">

                    <DetailBox
                        icon={CalendarDays}
                        label="Issue Date"
                        value={certificate.issueDate}
                    />

                    <DetailBox
                        icon={CheckCircle2}
                        label="Final Score"
                        value={certificate.score}
                    />

                    <DetailBox
                        icon={BookOpen}
                        label="Duration"
                        value={certificate.duration}
                    />

                    <DetailBox
                        icon={Award}
                        label="Grade"
                        value={certificate.grade}
                    />

                </div>

                {/* Verification ID */}
                <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-[#1e334a] dark:bg-[#102337]">

                    <div className="flex items-center justify-between gap-3">

                        <div>
                            <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                                Certificate ID
                            </p>

                            <p className="mt-1 font-mono text-xs font-medium text-slate-700 dark:text-slate-200">
                                {certificate.certificateId}
                            </p>
                        </div>

                        <BadgeCheck
                            size={21}
                            className="shrink-0 text-teal-500"
                        />

                    </div>
                </div>

                {/* Actions */}
                <div className="mt-5 flex gap-3">

                    <button
                        type="button"
                        onClick={onView}
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 dark:border-[#1e334a] dark:bg-[#0b1727] dark:text-slate-200 dark:hover:border-teal-700 dark:hover:bg-[#102337] dark:hover:text-teal-300"
                    >
                        <Eye size={16} />
                        View Certificate
                    </button>

                    <button
                        type="button"
                        onClick={() =>
                            alert(
                                "Certificate download will be connected to the backend later."
                            )
                        }
                        className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:from-blue-700 hover:to-teal-600"
                    >
                        <Download size={16} />
                        <span className="hidden sm:inline">
                            Download
                        </span>
                    </button>

                </div>
            </div>
        </article>
    );
};

/* =========================================================
   DETAIL BOX
========================================================= */

const DetailBox = ({
    icon: Icon,
    label,
    value,
}) => {
    return (
        <div className="rounded-xl bg-slate-50 p-3 dark:bg-[#102337]">

            <div className="flex items-center gap-2">
                <Icon
                    size={14}
                    className="text-blue-600 dark:text-teal-400"
                />

                <span className="text-xs text-slate-500 dark:text-slate-400">
                    {label}
                </span>
            </div>

            <p className="mt-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                {value}
            </p>

        </div>
    );
};

/* =========================================================
   CERTIFICATE MODAL
========================================================= */

const CertificateModal = ({
    certificate,
    onClose,
}) => {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="max-h-[94vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-[#1e334a] dark:bg-[#0b1727]"
                onClick={(e) => e.stopPropagation()}
            >

                {/* =================================================
                    MODAL HEADER
                ================================================== */}
                <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-[#1e334a]">

                    <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-blue-600 dark:text-teal-400">
                            Certificate Verification
                        </p>

                        <h2 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">
                            Certificate of Completion
                        </h2>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close certificate"
                        className="rounded-xl p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-[#102337] dark:hover:text-white"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* =================================================
                    CERTIFICATE
                ================================================== */}
                <div className="bg-slate-100 p-4 sm:p-8 dark:bg-[#07111f]">

                    <div className="relative overflow-hidden border-4 border-slate-300 bg-white p-3 shadow-xl sm:p-5">

                        {/* Gradient edge */}
                        <div className="absolute left-0 right-0 top-0 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500" />

                        {/* Decorative corners */}
                        <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full border border-blue-200" />

                        <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full border border-teal-200" />

                        {/* Main certificate border */}
                        <div className="relative border border-slate-300 p-5 sm:p-10">

                            {/* Inner border */}
                            <div className="pointer-events-none absolute inset-3 border border-slate-200 sm:inset-5" />

                            <div className="relative z-10 text-center">

                                {/* Logo */}
                                <div className="flex items-center justify-center gap-2">

                                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-teal-500 text-white shadow-sm">
                                        <span className="text-base font-bold">
                                            S
                                        </span>
                                    </div>

                                    <span className="text-lg font-bold tracking-[0.2em] text-slate-800">
                                        SHIYORA
                                    </span>

                                </div>

                                <p className="mt-2 text-[9px] uppercase tracking-[0.4em] text-slate-400">
                                    Learning Management Platform
                                </p>

                                {/* Seal */}
                                <div className="mx-auto mt-7 flex h-16 w-16 items-center justify-center rounded-full border-2 border-blue-300 bg-blue-50">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-200">
                                        <Award
                                            size={27}
                                            className="text-blue-600"
                                        />
                                    </div>
                                </div>

                                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
                                    Certificate of Completion
                                </p>

                                <h1 className="mt-4 font-serif text-2xl font-bold text-slate-800 sm:text-4xl">
                                    {certificate.course}
                                </h1>

                                <p className="mx-auto mt-5 max-w-xl text-xs leading-6 text-slate-500 sm:text-sm">
                                    This certificate is proudly presented
                                    in recognition of successfully completing
                                    the course requirements and demonstrating
                                    the required level of knowledge and
                                    achievement.
                                </p>

                                {/* Score */}
                                <div className="mx-auto mt-6 flex w-fit items-center gap-3 rounded-full border border-teal-200 bg-teal-50 px-5 py-2">
                                    <CheckCircle2
                                        size={17}
                                        className="text-teal-600"
                                    />

                                    <span className="text-xs font-semibold text-teal-700">
                                        Completed with {certificate.score}
                                    </span>
                                </div>

                                {/* Instructor */}
                                <div className="mt-7">

                                    <p className="text-[10px] uppercase tracking-wider text-slate-400">
                                        Instructor
                                    </p>

                                    <p className="mt-1 font-serif text-lg font-semibold text-slate-800">
                                        {certificate.instructor}
                                    </p>

                                </div>

                                {/* Bottom Information */}
                                <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-6 border-t border-slate-200 pt-6 sm:grid-cols-3">

                                    <CertificateMeta
                                        label="Issue Date"
                                        value={
                                            certificate.issueDate
                                        }
                                    />

                                    <CertificateMeta
                                        label="Certificate ID"
                                        value={
                                            certificate.certificateId
                                        }
                                        mono
                                    />

                                    <CertificateMeta
                                        label="Verification ID"
                                        value={
                                            certificate.verificationId
                                        }
                                        mono
                                    />

                                </div>

                                {/* Signature area */}
                                <div className="mt-8 grid grid-cols-2 gap-10 sm:mt-10">

                                    <div>
                                        <div className="mx-auto max-w-[140px] border-b border-slate-400 pb-2 font-serif text-lg italic text-slate-600">
                                            Shiyora
                                        </div>

                                        <p className="mt-2 text-[9px] uppercase tracking-wider text-slate-400">
                                            Authorized Signature
                                        </p>
                                    </div>

                                    <div>
                                        <div className="mx-auto max-w-[140px] border-b border-slate-400 pb-2 text-sm font-semibold text-slate-600">
                                            {certificate.issueDate}
                                        </div>

                                        <p className="mt-2 text-[9px] uppercase tracking-wider text-slate-400">
                                            Date of Issue
                                        </p>
                                    </div>

                                </div>

                                {/* Verification */}
                                <div className="mt-8 flex flex-col items-center justify-center gap-2 text-center sm:flex-row">

                                    <ShieldCheck
                                        size={17}
                                        className="text-teal-600"
                                    />

                                    <p className="text-[9px] text-slate-400">
                                        Digitally verified certificate •
                                        Shiyora Learning Platform
                                    </p>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* =================================================
                    MODAL FOOTER
                ================================================== */}
                <div className="flex flex-col gap-3 border-t border-slate-200 p-5 sm:flex-row sm:items-center sm:justify-between dark:border-[#1e334a]">

                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                        <ShieldCheck
                            size={16}
                            className="text-teal-500"
                        />

                        <span>
                            Certificate ID:{" "}
                            <span className="font-mono font-medium text-slate-700 dark:text-slate-300">
                                {certificate.certificateId}
                            </span>
                        </span>
                    </div>

                    <div className="flex gap-3">

                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-[#1e334a] dark:text-slate-200 dark:hover:bg-[#102337]"
                        >
                            Close
                        </button>

                        <button
                            type="button"
                            onClick={() =>
                                alert(
                                    "Certificate download will be connected to the backend later."
                                )
                            }
                            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:from-blue-700 hover:to-teal-600"
                        >
                            <Download size={16} />
                            Download Certificate
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

/* =========================================================
   CERTIFICATE META
========================================================= */

const CertificateMeta = ({
    label,
    value,
    mono = false,
}) => {
    return (
        <div>
            <p className="text-[9px] uppercase tracking-wider text-slate-400">
                {label}
            </p>

            <p
                className={`mt-1 text-xs font-semibold text-slate-700 ${mono ? "font-mono" : ""
                    }`}
            >
                {value}
            </p>
        </div>
    );
};

/* =========================================================
   EMPTY STATE
========================================================= */

const EmptyState = () => {
    return (
        <section className="rounded-2xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
                <Award size={30} />
            </div>

            <h2 className="mt-5 text-lg font-semibold text-slate-900 dark:text-white">
                No certificates found
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">
                Complete your enrolled courses to earn certificates
                that will appear here.
            </p>

        </section>
    );
};

export default Certificates;