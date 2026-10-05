import React from "react";
import {
    BarChart3,
    Users,
    Building2,
    BookOpen,
    CreditCard,
    TrendingUp,
    Download,
    ArrowUpRight,
} from "lucide-react";

const Reports = () => {
    const reportCards = [
        {
            title: "Organizations",
            value: "128",
            change: "+12.5%",
            icon: Building2,
            tone: "blue",
        },
        {
            title: "Users",
            value: "12,480",
            change: "+18.2%",
            icon: Users,
            tone: "teal",
        },
        {
            title: "Courses",
            value: "1,245",
            change: "+8.4%",
            icon: BookOpen,
            tone: "blue",
        },
        {
            title: "Revenue",
            value: "₹8.42L",
            change: "+24.6%",
            icon: CreditCard,
            tone: "teal",
        },
    ];

    const userGrowth = [
        35, 48, 42, 60, 55, 70, 64, 82, 76, 90, 84, 96,
    ];

    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    const revenueData = [
        {
            name: "Subscriptions",
            value: "₹5.20L",
            width: "72%",
            tone: "teal",
        },
        {
            name: "Courses",
            value: "₹2.10L",
            width: "48%",
            tone: "blue",
        },
        {
            name: "Other",
            value: "₹1.12L",
            width: "28%",
            tone: "slate",
        },
    ];

    return (
        <main className="relative min-h-screen overflow-hidden bg-slate-50 px-4 py-6 text-slate-700 transition-colors duration-300 dark:bg-[#07111f] dark:text-slate-300 sm:px-6 lg:px-8">

            {/* =====================================================
                BACKGROUND
            ====================================================== */}

            <div className="pointer-events-none fixed -left-32 -top-32 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-500/[0.08]" />

            <div className="pointer-events-none fixed -bottom-40 -right-32 h-96 w-96 rounded-full bg-teal-400/10 blur-[130px] dark:bg-teal-400/[0.07]" />

            {/* =====================================================
                CONTENT
            ====================================================== */}

            <div className="relative z-10 mx-auto max-w-[1600px]">

                {/* =================================================
                    HEADER
                ================================================== */}

                <div className="mb-7 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

                    <div>

                        <div className="mb-2 flex items-center gap-2">

                            <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-teal-400" />

                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-teal-400">
                                Analytics
                            </p>

                        </div>

                        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
                            Reports
                        </h1>

                        <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                            Monitor Shiyora LMS platform performance,
                            growth and financial analytics.
                        </p>

                    </div>

                    {/* EXPORT BUTTON */}

                    <button
                        type="button"
                        className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-700 hover:to-teal-600 hover:shadow-xl hover:shadow-blue-500/25"
                    >
                        <Download
                            size={17}
                            className="transition-transform duration-300 group-hover:-translate-y-0.5"
                        />

                        Export Report
                    </button>

                </div>

                {/* =================================================
                    REPORT CARDS
                ================================================== */}

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

                    {reportCards.map((report) => {
                        const Icon = report.icon;
                        const isBlue = report.tone === "blue";

                        return (
                            <div
                                key={report.title}
                                className={`group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-[#1e334a] dark:bg-[#0b1727] ${isBlue
                                    ? "hover:border-blue-300 dark:hover:border-blue-500/40"
                                    : "hover:border-teal-300 dark:hover:border-teal-500/40"
                                    }`}
                            >

                                <div className="flex items-start justify-between">

                                    <div>

                                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                                            {report.title}
                                        </p>

                                        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                                            {report.value}
                                        </h2>

                                        <div
                                            className={`mt-2 flex items-center gap-1 text-[11px] font-semibold ${isBlue
                                                ? "text-blue-600 dark:text-blue-400"
                                                : "text-teal-600 dark:text-teal-400"
                                                }`}
                                        >
                                            <TrendingUp size={14} />
                                            {report.change}
                                        </div>

                                    </div>

                                    <div
                                        className={`flex h-12 w-12 items-center justify-center rounded-xl border ${isBlue
                                            ? "border-blue-200 bg-blue-50 text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400"
                                            : "border-teal-200 bg-teal-50 text-teal-600 dark:border-teal-500/20 dark:bg-teal-500/10 dark:text-teal-400"
                                            }`}
                                    >
                                        <Icon size={21} />
                                    </div>

                                </div>

                                <div className="mt-5 flex items-center gap-1 text-[10px] font-medium text-slate-400">
                                    Compared with previous period
                                    <ArrowUpRight size={12} />
                                </div>

                            </div>
                        );
                    })}

                </div>

                {/* =================================================
                    ANALYTICS
                ================================================== */}

                <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">

                    {/* =================================================
                        USER GROWTH
                    ================================================== */}

                    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">

                        {/* HEADER */}

                        <div className="flex items-center justify-between border-b border-slate-200 p-5 dark:border-[#1e334a] sm:p-6">

                            <div>

                                <div className="mb-1 flex items-center gap-2">

                                    <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400" />

                                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
                                        Analytics
                                    </p>

                                </div>

                                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                                    User Growth
                                </h2>

                                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                    Monthly user registrations
                                </p>

                            </div>

                            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
                                <BarChart3 size={19} />
                            </div>

                        </div>

                        {/* CHART */}

                        <div className="p-5 sm:p-6">

                            <div className="relative">

                                {/* GRID */}

                                <div className="pointer-events-none absolute inset-0 flex flex-col justify-between pb-7">

                                    {[1, 2, 3, 4].map((line) => (
                                        <div
                                            key={line}
                                            className="border-t border-dashed border-slate-200 dark:border-slate-800"
                                        />
                                    ))}

                                </div>

                                {/* BARS */}

                                <div className="relative flex h-56 items-end gap-1.5 sm:gap-2.5">

                                    {userGrowth.map((height, index) => (
                                        <div
                                            key={index}
                                            className="group flex h-full flex-1 items-end"
                                        >

                                            <div
                                                style={{
                                                    height: `${height}%`,
                                                }}
                                                className="w-full rounded-t-md bg-gradient-to-t from-blue-600 to-blue-400 transition-all duration-300 group-hover:from-blue-700 group-hover:to-teal-400 dark:from-blue-500 dark:to-teal-400"
                                            />

                                        </div>
                                    ))}

                                </div>

                            </div>

                            {/* MONTHS */}

                            <div className="mt-4 grid grid-cols-12 gap-1 text-center text-[9px] font-medium text-slate-400">

                                {months.map((month) => (
                                    <span key={month}>
                                        {month}
                                    </span>
                                ))}

                            </div>

                        </div>

                    </section>

                    {/* =================================================
                        REVENUE OVERVIEW
                    ================================================== */}

                    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">

                        {/* HEADER */}

                        <div className="flex items-center justify-between border-b border-slate-200 p-5 dark:border-[#1e334a] sm:p-6">

                            <div>

                                <div className="mb-1 flex items-center gap-2">

                                    <span className="h-2 w-2 rounded-full bg-teal-500 dark:bg-teal-400" />

                                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-teal-600 dark:text-teal-400">
                                        Financial
                                    </p>

                                </div>

                                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                                    Revenue Overview
                                </h2>

                                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                    Monthly revenue performance
                                </p>

                            </div>

                            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-teal-200 bg-teal-50 text-teal-600 dark:border-teal-500/20 dark:bg-teal-500/10 dark:text-teal-400">
                                <CreditCard size={19} />
                            </div>

                        </div>

                        {/* REVENUE DATA */}

                        <div className="space-y-7 p-5 sm:p-6">

                            {revenueData.map((item) => {

                                const isTeal = item.tone === "teal";
                                const isBlue = item.tone === "blue";

                                return (
                                    <div key={item.name}>

                                        <div className="mb-2 flex items-center justify-between">

                                            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                                                {item.name}
                                            </span>

                                            <span className="text-xs font-bold text-slate-900 dark:text-white">
                                                {item.value}
                                            </span>

                                        </div>

                                        <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">

                                            <div
                                                style={{
                                                    width: item.width,
                                                }}
                                                className={`h-full rounded-full transition-all duration-500 ${isTeal
                                                    ? "bg-gradient-to-r from-teal-500 to-emerald-400"
                                                    : isBlue
                                                        ? "bg-gradient-to-r from-blue-600 to-blue-400"
                                                        : "bg-gradient-to-r from-slate-500 to-slate-400"
                                                    }`}
                                            />

                                        </div>

                                        <div className="mt-1 text-right text-[10px] font-medium text-slate-400">
                                            {item.width}
                                        </div>

                                    </div>
                                );
                            })}

                        </div>

                        {/* TOTAL */}

                        <div className="mx-5 mb-5 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-[#1e334a] dark:bg-[#102337] sm:mx-6 sm:mb-6">

                            <div className="flex items-center justify-between">

                                <div>

                                    <p className="text-xs text-slate-500 dark:text-slate-400">
                                        Total Revenue
                                    </p>

                                    <p className="mt-1 text-xl font-bold text-slate-900 dark:text-white">
                                        ₹8.42L
                                    </p>

                                </div>

                                <div className="flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                                    <TrendingUp size={14} />
                                    +24.6%
                                </div>

                            </div>

                        </div>

                    </section>

                </div>

                {/* =================================================
                    REPORT SUMMARY
                ================================================== */}

                <section className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">

                    {/* HEADER */}

                    <div className="border-b border-slate-200 p-5 dark:border-[#1e334a] sm:p-6">

                        <div className="mb-1 flex items-center gap-2">

                            <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-teal-400" />

                            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-teal-400">
                                Overview
                            </p>

                        </div>

                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                            Report Summary
                        </h2>

                    </div>

                    {/* CONTENT */}

                    <div className="p-5 sm:p-6">

                        <div className="flex items-start gap-4">

                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">

                                <TrendingUp size={20} />

                            </div>

                            <div>

                                <p className="max-w-4xl text-sm leading-7 text-slate-600 dark:text-slate-300">
                                    Shiyora currently manages 128 organizations
                                    with more than 12,000 registered users and
                                    1,200 courses. Platform revenue and user
                                    activity continue to show positive monthly
                                    growth.
                                </p>

                                <div className="mt-4 flex flex-wrap gap-2">

                                    <span className="rounded-lg border border-blue-200 bg-blue-50 px-3 py-1.5 text-[11px] font-semibold text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
                                        128 Organizations
                                    </span>

                                    <span className="rounded-lg border border-teal-200 bg-teal-50 px-3 py-1.5 text-[11px] font-semibold text-teal-700 dark:border-teal-500/20 dark:bg-teal-500/10 dark:text-teal-400">
                                        12,480 Users
                                    </span>

                                    <span className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] font-semibold text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                                        1,245 Courses
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

                {/* =================================================
                    FOOTER NOTE
                ================================================== */}

                <div className="mt-5 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">

                    <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-400 dark:text-slate-600">
                        Shiyora Administration
                    </p>

                    <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-400 dark:text-slate-600">
                        Platform Reports
                    </p>

                </div>

            </div>

        </main>
    );
};

export default Reports;