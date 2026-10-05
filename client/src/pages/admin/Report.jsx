import { useMemo, useState } from "react";
import {
    BarChart3,
    Download,
    Users,
    IndianRupee,
    Star,
    CheckCircle2,
    FileText,
    Search,
} from "lucide-react";

const Report = () => {
    const [search, setSearch] = useState("");
    const [typeFilter, setTypeFilter] = useState("All");

    // ============================================================
    // MONTHLY ENROLLMENT DATA
    // ============================================================

    const monthlyEnrollments = [
        { month: "Apr", value: 62 },
        { month: "May", value: 78 },
        { month: "Jun", value: 54 },
        { month: "Jul", value: 91 },
        { month: "Aug", value: 88 },
        { month: "Sep", value: 104 },
    ];

    const maxEnrollment = Math.max(
        ...monthlyEnrollments.map((item) => item.value)
    );

    // ============================================================
    // GENERATED REPORTS
    // ============================================================

    const reports = [
        {
            id: 1,
            name: "Monthly Enrollment Summary",
            type: "Enrollments",
            generatedOn: "01 Sep 2026",
            format: "PDF",
        },
        {
            id: 2,
            name: "Course Completion Overview",
            type: "Courses",
            generatedOn: "28 Aug 2026",
            format: "XLSX",
        },
        {
            id: 3,
            name: "Teacher Performance Report",
            type: "Teachers",
            generatedOn: "20 Aug 2026",
            format: "PDF",
        },
        {
            id: 4,
            name: "Subscription Revenue Report",
            type: "Billing",
            generatedOn: "12 Aug 2026",
            format: "XLSX",
        },
        {
            id: 5,
            name: "Student Progress Report",
            type: "Students",
            generatedOn: "04 Aug 2026",
            format: "PDF",
        },
    ];

    const typeOptions = [
        "All",
        ...Array.from(new Set(reports.map((item) => item.type))),
    ];

    // ============================================================
    // FILTERING
    // ============================================================

    const filteredReports = useMemo(() => {
        const searchText = search.toLowerCase().trim();

        return reports.filter((item) => {
            const matchesSearch = item.name
                .toLowerCase()
                .includes(searchText);

            const matchesType =
                typeFilter === "All" || item.type === typeFilter;

            return matchesSearch && matchesType;
        });
    }, [search, typeFilter]);

    // ============================================================
    // ACTIONS
    // ============================================================

    const handleDownload = (report) => {
        alert(`Downloading: ${report.name} (${report.format})`);
    };

    const handleExportAll = () => {
        alert("Export All functionality will be connected later.");
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

                <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    <div>
                        <p className="mb-1 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                            Administration
                        </p>

                        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
                            Reports
                        </h1>

                        <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                            A graded summary of how your organization is
                            performing — enrollments, revenue and completion.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={handleExportAll}
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-600 bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600"
                    >
                        <Download size={18} />
                        Export All
                    </button>
                </div>

                {/* =====================================================
                    STAT CARDS
                ====================================================== */}

                <div className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

                    {/* TOTAL REVENUE */}

                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                    Total Revenue
                                </p>

                                <h2 className="mt-2 font-mono text-2xl font-bold text-slate-900 dark:text-slate-50">
                                    ₹4,82,300
                                </h2>

                                <p className="mt-1 text-xs text-teal-600 dark:text-teal-400">
                                    +12.4% this quarter
                                </p>
                            </div>

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
                                <IndianRupee size={23} />
                            </div>
                        </div>
                    </div>

                    {/* ACTIVE STUDENTS */}

                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                    Active Students
                                </p>

                                <h2 className="mt-2 font-mono text-2xl font-bold text-slate-900 dark:text-slate-50">
                                    1,284
                                </h2>

                                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                    Across 6 courses
                                </p>
                            </div>

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-teal-100 bg-teal-50 text-teal-600 dark:border-teal-500/20 dark:bg-teal-500/10 dark:text-teal-400">
                                <Users size={23} />
                            </div>
                        </div>
                    </div>

                    {/* COMPLETION RATE */}

                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                    Completion Rate
                                </p>

                                <h2 className="mt-2 font-mono text-2xl font-bold text-slate-900 dark:text-slate-50">
                                    68%
                                </h2>

                                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                    Avg across courses
                                </p>
                            </div>

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-600 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300">
                                <CheckCircle2 size={23} />
                            </div>
                        </div>
                    </div>

                    {/* AVG RATING */}

                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                    Avg. Rating
                                </p>

                                <h2 className="mt-2 font-mono text-2xl font-bold text-slate-900 dark:text-slate-50">
                                    4.6
                                </h2>

                                <p className="mt-1 text-xs text-amber-600 dark:text-amber-400">
                                    Based on 940 reviews
                                </p>
                            </div>

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-100 bg-amber-50 text-amber-500 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-400">
                                <Star size={23} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* =====================================================
                    MONTHLY ENROLLMENTS CHART
                ====================================================== */}

                <div className="mb-7 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">

                    <div className="mb-6 flex items-center justify-between">
                        <div>
                            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                                Monthly Enrollments
                            </h2>

                            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                Last 6 months
                            </p>
                        </div>

                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-100 bg-blue-50 text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
                            <BarChart3 size={19} />
                        </div>
                    </div>

                    <div className="flex h-48 items-end justify-between gap-3 sm:gap-6">

                        {monthlyEnrollments.map((item) => (
                            <div
                                key={item.month}
                                className="flex flex-1 flex-col items-center gap-3"
                            >
                                <span className="font-mono text-xs font-semibold text-slate-600 dark:text-slate-300">
                                    {item.value}
                                </span>

                                <div
                                    className="flex w-full items-end justify-center"
                                    style={{ height: "140px" }}
                                >
                                    <div
                                        className="w-full max-w-9.5 rounded-t-md bg-gradient-to-t from-blue-600 to-teal-500 transition-all duration-500 dark:from-blue-500 dark:to-teal-400"
                                        style={{
                                            height: `${(item.value / maxEnrollment) * 100}%`,
                                        }}
                                    />
                                </div>

                                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-500">
                                    {item.month}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* =====================================================
                    SEARCH + FILTER
                ====================================================== */}

                <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727] lg:flex-row lg:items-center lg:justify-between">

                    <div className="relative w-full lg:max-w-md">

                        <Search
                            size={19}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500"
                        />

                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search reports..."
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-[#1e334a] dark:bg-[#102337] dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus:border-blue-400"
                        />
                    </div>

                    <select
                        value={typeFilter}
                        onChange={(e) => setTypeFilter(e.target.value)}
                        className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-[#1e334a] dark:bg-[#102337] dark:text-slate-200 dark:focus:border-blue-400 lg:w-56"
                    >
                        {typeOptions.map((type) => (
                            <option key={type} value={type}>
                                {type === "All"
                                    ? "All Report Types"
                                    : type}
                            </option>
                        ))}
                    </select>
                </div>

                {/* =====================================================
                    REPORTS TABLE
                ====================================================== */}

                <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">

                    {/* TABLE HEADER */}

                    <div className="border-b border-slate-200 px-5 py-5 dark:border-[#1e334a] sm:px-6">
                        <h2 className="text-lg font-bold text-slate-900 dark:text-slate-50">
                            Generated Reports
                        </h2>

                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                            {filteredReports.length} of {reports.length} reports
                            shown
                        </p>
                    </div>

                    {/* EMPTY STATE */}

                    {filteredReports.length === 0 ? (
                        <div className="flex flex-col items-center justify-center gap-3 px-6 py-16 text-center">

                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                                <FileText size={26} />
                            </div>

                            <p className="text-base font-semibold text-slate-800 dark:text-slate-200">
                                No reports found
                            </p>

                            <p className="max-w-xs text-sm text-slate-500 dark:text-slate-400">
                                Try a different search term or report type.
                            </p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">

                            <table className="w-full min-w-200">

                                <thead className="bg-slate-50 dark:bg-[#102337]">
                                    <tr>

                                        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                            Report
                                        </th>

                                        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                            Type
                                        </th>

                                        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                            Generated On
                                        </th>

                                        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                            Format
                                        </th>

                                        <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                            Action
                                        </th>

                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-slate-200 dark:divide-[#1e334a]">

                                    {filteredReports.map((report) => (
                                        <tr
                                            key={report.id}
                                            className="transition-colors hover:bg-slate-50 dark:hover:bg-[#102337]/70"
                                        >

                                            {/* REPORT */}

                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-3">

                                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-blue-100 bg-blue-50 text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
                                                        <FileText size={18} />
                                                    </div>

                                                    <p className="font-semibold text-slate-800 dark:text-slate-200">
                                                        {report.name}
                                                    </p>

                                                </div>
                                            </td>

                                            {/* TYPE */}

                                            <td className="px-6 py-5">
                                                <span className="inline-flex rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700 dark:bg-teal-500/10 dark:text-teal-300">
                                                    {report.type}
                                                </span>
                                            </td>

                                            {/* DATE */}

                                            <td className="px-6 py-5">
                                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                                    {report.generatedOn}
                                                </p>
                                            </td>

                                            {/* FORMAT */}

                                            <td className="px-6 py-5">
                                                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                                    {report.format}
                                                </span>
                                            </td>

                                            {/* ACTION */}

                                            <td className="px-6 py-5 text-right">

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        handleDownload(report)
                                                    }
                                                    className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-blue-400 dark:hover:bg-blue-500/10 dark:focus-visible:outline-blue-400"
                                                >
                                                    <Download size={15} />
                                                    Download
                                                </button>

                                            </td>

                                        </tr>
                                    ))}

                                </tbody>

                            </table>
                        </div>
                    )}

                    {/* =================================================
                        FOOTER
                    ================================================== */}

                    <div className="flex flex-col gap-2 border-t border-slate-200 bg-slate-50 px-6 py-4 dark:border-[#1e334a] dark:bg-[#102337] sm:flex-row sm:items-center sm:justify-between">

                        <p className="font-mono text-[9px] uppercase tracking-wider text-slate-400 dark:text-slate-500">
                            Showing{" "}
                            <span className="font-semibold text-slate-700 dark:text-slate-300">
                                {filteredReports.length}
                            </span>{" "}
                            reports
                        </p>

                        <p className="font-mono text-[9px] uppercase tracking-wider text-slate-400 dark:text-slate-500">
                            Shiyora LMS
                        </p>

                    </div>
                </section>

                {/* =====================================================
                    FOOTER NOTE
                ====================================================== */}

                <div className="mt-5 flex items-center justify-between">

                    <p className="font-mono text-[9px] uppercase tracking-wider text-slate-400 dark:text-slate-600">
                        Shiyora Administration
                    </p>

                    <p className="font-mono text-[9px] uppercase tracking-wider text-slate-400 dark:text-slate-600">
                        Reports &amp; Analytics
                    </p>

                </div>

            </div>
        </main>
    );
};

export default Report;