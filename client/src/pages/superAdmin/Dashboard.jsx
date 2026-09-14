import React from "react";
import {
    Users,
    Building2,
    BookOpen,
    CreditCard,
    TrendingUp,
    UserCheck,
    GraduationCap,
    Activity,
    ArrowUpRight,
    ArrowDownRight,
    MoreVertical,
    CheckCircle2,
    Clock3,
    Bell,
    MessageCircle,
    Search,
    ChevronDown,
    CalendarDays,
    ShieldCheck,
    Layers3,
} from "lucide-react";

const Dashboard = () => {
    // =========================================================
    // STATISTICS
    // =========================================================

    const stats = [
        {
            title: "Total Organizations",
            value: "128",
            change: "+12.5%",
            comparison: "vs last month",
            icon: Building2,
            iconStyle:
                "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400",
            trend: "up",
        },
        {
            title: "Total Users",
            value: "12,480",
            change: "+18.2%",
            comparison: "vs last month",
            icon: Users,
            iconStyle:
                "bg-teal-50 text-teal-600 dark:bg-teal-500/10 dark:text-teal-400",
            trend: "up",
        },
        {
            title: "Total Courses",
            value: "1,245",
            change: "+8.4%",
            comparison: "vs last month",
            icon: BookOpen,
            iconStyle:
                "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400",
            trend: "up",
        },
        {
            title: "Total Revenue",
            value: "₹8.42L",
            change: "+24.6%",
            comparison: "vs last month",
            icon: CreditCard,
            iconStyle:
                "bg-cyan-50 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-400",
            trend: "up",
        },
    ];

    // =========================================================
    // CHART
    // =========================================================

    const chartData = [
        45,
        60,
        48,
        72,
        58,
        82,
        68,
        90,
        75,
        95,
        84,
        100,
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

    // =========================================================
    // USER DISTRIBUTION
    // =========================================================

    const userDistribution = [
        {
            title: "Students",
            value: "9,850",
            percentage: 79,
            icon: GraduationCap,
            iconStyle:
                "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400",
            barStyle: "bg-blue-500",
        },
        {
            title: "Teachers",
            value: "2,140",
            percentage: 17,
            icon: UserCheck,
            iconStyle:
                "bg-teal-50 text-teal-600 dark:bg-teal-500/10 dark:text-teal-400",
            barStyle: "bg-teal-500",
        },
        {
            title: "Admins",
            value: "490",
            percentage: 4,
            icon: ShieldCheck,
            iconStyle:
                "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400",
            barStyle: "bg-indigo-500",
        },
    ];

    // =========================================================
    // ORGANIZATIONS
    // =========================================================

    const organizations = [
        {
            name: "Bright Future Academy",
            email: "admin@brightfuture.com",
            users: "850",
            courses: "42",
            status: "Active",
            initials: "BF",
        },
        {
            name: "TechVision Institute",
            email: "admin@techvision.com",
            users: "620",
            courses: "35",
            status: "Active",
            initials: "TV",
        },
        {
            name: "SkillHub Learning",
            email: "admin@skillhub.com",
            users: "430",
            courses: "28",
            status: "Pending",
            initials: "SL",
        },
        {
            name: "Knowledge Point",
            email: "admin@knowledgepoint.com",
            users: "310",
            courses: "21",
            status: "Active",
            initials: "KP",
        },
    ];

    // =========================================================
    // RECENT ACTIVITIES
    // =========================================================

    const activities = [
        {
            title: "New organization registered",
            description: "Bright Future Academy joined Shiyora",
            time: "12 min ago",
            icon: Building2,
            iconStyle: "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400",
        },
        {
            title: "New course published",
            description: "React Advanced was published",
            time: "34 min ago",
            icon: BookOpen,
            iconStyle: "bg-teal-50 text-teal-600 dark:bg-teal-500/10 dark:text-teal-400",
        },
        {
            title: "Subscription upgraded",
            description: "TechVision upgraded their plan",
            time: "1 hour ago",
            icon: CreditCard,
            iconStyle:
                "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400",
        },
        {
            title: "New teacher registered",
            description: "A new teacher joined SkillHub",
            time: "2 hours ago",
            icon: UserCheck,
            iconStyle:
                "bg-cyan-50 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-400",
        },
    ];

    // =========================================================
    // MESSAGES
    // =========================================================

    const messages = [
        {
            name: "Bright Future Academy",
            message: "We need help with our subscription.",
            time: "10m",
            initials: "BF",
            style: "from-blue-500 to-indigo-500",
        },
        {
            name: "TechVision Institute",
            message: "Course analytics are not updating.",
            time: "28m",
            initials: "TV",
            style: "from-teal-500 to-cyan-500",
        },
        {
            name: "SkillHub Learning",
            message: "Can you review our account?",
            time: "1h",
            initials: "SL",
            style: "from-violet-500 to-blue-500",
        },
    ];

    // =========================================================
    // HELPER
    // =========================================================

    const getChartHeight = (value) => {
        return `${Math.max(18, value * 0.75)}%`;
    };

    return (
        <main className="min-h-screen bg-slate-50 text-slate-700 dark:bg-[#07111f] dark:text-slate-200">
            {/* =================================================
                BACKGROUND DECORATION
            ================================================= */}

            <div className="pointer-events-none fixed inset-0 overflow-hidden">
                <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />

                <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-teal-500/5 blur-3xl" />
            </div>

            {/* =================================================
                CONTENT
            ================================================= */}

            <div className="relative mx-auto max-w-[1600px] px-4 py-5 sm:px-6 lg:px-8 lg:py-7">
                {/* =================================================
                    TOP HEADER
                ================================================= */}

                <header className="mb-7 flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
                    {/* Left */}

                    <div>
                        <div className="mb-2 flex items-center gap-2">
                            <span className="flex h-6 items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-2.5 text-[9px] font-bold uppercase tracking-wider text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
                                <Activity size={11} />
                                Administration
                            </span>

                            <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700" />

                            <span className="text-[10px] font-medium text-slate-400">
                                Overview
                            </span>
                        </div>

                        <h1 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl dark:text-white">
                            SuperAdmin Dashboard
                        </h1>

                        <p className="mt-1.5 text-xs text-slate-500 sm:text-sm dark:text-slate-400">
                            Monitor your Shiyora learning platform and manage
                            everything from one place.
                        </p>
                    </div>

                    {/* Right */}

                    <div className="flex items-center gap-2">
                        {/* Search */}

                        <button
                            type="button"
                            className="
                                hidden h-10 items-center gap-2
                                rounded-xl border border-slate-200
                                bg-white px-3
                                text-slate-400
                                shadow-sm
                                transition
                                hover:border-slate-300
                                hover:text-slate-600
                                md:flex

                                dark:border-slate-800
                                dark:bg-slate-900/60
                                dark:hover:border-slate-700
                                dark:hover:text-slate-200
                            "
                        >
                            <Search size={16} />

                            <span className="text-xs">
                                Search
                            </span>

                            <span className="ml-3 rounded-md bg-slate-100 px-1.5 py-0.5 text-[9px] font-semibold text-slate-400 dark:bg-slate-800">
                                /
                            </span>
                        </button>

                        {/* Notifications */}

                        <button
                            type="button"
                            aria-label="Notifications"
                            className="
                                relative flex h-10 w-10
                                items-center justify-center
                                rounded-xl border
                                border-slate-200
                                bg-white
                                text-slate-500
                                shadow-sm
                                transition
                                hover:border-blue-200
                                hover:text-blue-600

                                dark:border-slate-800
                                dark:bg-slate-900/60
                                dark:text-slate-400
                                dark:hover:text-blue-400
                            "
                        >
                            <Bell size={17} />

                            <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-red-500 ring-2 ring-white dark:ring-slate-900" />
                        </button>

                        {/* Messages */}

                        <button
                            type="button"
                            aria-label="Messages"
                            className="
                                relative flex h-10 w-10
                                items-center justify-center
                                rounded-xl border
                                border-slate-200
                                bg-white
                                text-slate-500
                                shadow-sm
                                transition
                                hover:border-teal-200
                                hover:text-teal-600

                                dark:border-slate-800
                                dark:bg-slate-900/60
                                dark:text-slate-400
                                dark:hover:text-teal-400
                            "
                        >
                            <MessageCircle size={17} />

                            <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-teal-500 ring-2 ring-white dark:ring-slate-900" />
                        </button>

                        {/* Date */}

                        <div className="hidden h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 shadow-sm lg:flex dark:border-slate-800 dark:bg-slate-900/60">
                            <CalendarDays
                                size={15}
                                className="text-slate-400"
                            />

                            <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                                Sep 14, 2026
                            </span>
                        </div>
                    </div>
                </header>

                {/* =================================================
                    KPI CARDS
                ================================================= */}

                <section className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {stats.map((stat) => {
                        const Icon = stat.icon;

                        return (
                            <div
                                key={stat.title}
                                className="
                                    group relative overflow-hidden
                                    rounded-2xl
                                    border border-slate-200
                                    bg-white
                                    p-5
                                    shadow-sm
                                    transition-all duration-300
                                    hover:-translate-y-0.5
                                    hover:border-blue-200
                                    hover:shadow-md

                                    dark:border-slate-800
                                    dark:bg-[#0b1727]
                                    dark:hover:border-slate-700
                                "
                            >
                                <div className="flex items-start justify-between">
                                    <div>
                                        <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                                            {stat.title}
                                        </p>

                                        <p className="mt-2 text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
                                            {stat.value}
                                        </p>
                                    </div>

                                    <div
                                        className={`flex h-10 w-10 items-center justify-center rounded-xl ${stat.iconStyle}`}
                                    >
                                        <Icon size={19} />
                                    </div>
                                </div>

                                <div className="mt-4 flex items-center gap-2">
                                    <span className="flex items-center gap-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                                        <ArrowUpRight size={12} />
                                        {stat.change}
                                    </span>

                                    <span className="text-[10px] text-slate-400">
                                        {stat.comparison}
                                    </span>
                                </div>

                                <div className="pointer-events-none absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-blue-500/5 blur-2xl transition group-hover:bg-blue-500/10" />
                            </div>
                        );
                    })}
                </section>

                {/* =================================================
                    ANALYTICS
                ================================================= */}

                <section className="mb-7 grid grid-cols-1 gap-5 xl:grid-cols-[1.7fr_1fr]">
                    {/* Platform Overview */}

                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-[#0b1727]">
                        <div className="mb-6 flex items-center justify-between">
                            <div>
                                <h2 className="text-sm font-bold text-slate-950 dark:text-white">
                                    Platform Overview
                                </h2>

                                <p className="mt-1 text-[10px] text-slate-400">
                                    Monthly platform activity
                                </p>
                            </div>

                            <button
                                type="button"
                                className="
                                    flex items-center gap-1.5
                                    rounded-lg
                                    border border-slate-200
                                    bg-slate-50
                                    px-2.5 py-1.5
                                    text-[10px]
                                    font-semibold
                                    text-slate-500

                                    dark:border-slate-700
                                    dark:bg-slate-800
                                    dark:text-slate-300
                                "
                            >
                                This year
                                <ChevronDown size={12} />
                            </button>
                        </div>

                        {/* Chart */}

                        <div className="relative h-[250px]">
                            {/* Horizontal lines */}

                            <div className="absolute inset-0 flex flex-col justify-between">
                                {[100, 75, 50, 25, 0].map((value) => (
                                    <div
                                        key={value}
                                        className="flex items-center gap-3"
                                    >
                                        <span className="w-7 text-right text-[8px] text-slate-400">
                                            {value}
                                        </span>

                                        <div className="h-px flex-1 border-t border-dashed border-slate-200 dark:border-slate-800" />
                                    </div>
                                ))}
                            </div>

                            {/* Bars */}

                            <div className="absolute bottom-0 left-10 right-0 top-0 flex items-end justify-between gap-1 sm:gap-2">
                                {chartData.map((value, index) => (
                                    <div
                                        key={months[index]}
                                        className="flex h-full flex-1 flex-col items-center justify-end gap-2"
                                    >
                                        <div className="relative flex h-full w-full items-end justify-center">
                                            <div
                                                className="
                                                    w-full max-w-[26px]
                                                    rounded-t-md
                                                    bg-gradient-to-t
                                                    from-blue-600
                                                    to-teal-400
                                                    opacity-90
                                                    transition-all duration-300
                                                    hover:opacity-100
                                                "
                                                style={{
                                                    height: getChartHeight(
                                                        value
                                                    ),
                                                }}
                                            />
                                        </div>

                                        <span className="text-[8px] font-medium text-slate-400">
                                            {months[index]}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* User Distribution */}

                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-[#0b1727]">
                        <div className="mb-6">
                            <h2 className="text-sm font-bold text-slate-950 dark:text-white">
                                Platform Users
                            </h2>

                            <p className="mt-1 text-[10px] text-slate-400">
                                User distribution by role
                            </p>
                        </div>

                        <div className="space-y-6">
                            {userDistribution.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div key={item.title}>
                                        <div className="mb-2 flex items-center justify-between">
                                            <div className="flex items-center gap-2.5">
                                                <span
                                                    className={`flex h-9 w-9 items-center justify-center rounded-lg ${item.iconStyle}`}
                                                >
                                                    <Icon size={16} />
                                                </span>

                                                <div>
                                                    <p className="text-xs font-bold text-slate-700 dark:text-slate-200">
                                                        {item.title}
                                                    </p>

                                                    <p className="text-[9px] text-slate-400">
                                                        {item.value} users
                                                    </p>
                                                </div>
                                            </div>

                                            <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
                                                {item.percentage}%
                                            </span>
                                        </div>

                                        <div className="h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                                            <div
                                                className={`h-full rounded-full ${item.barStyle}`}
                                                style={{
                                                    width: `${item.percentage}%`,
                                                }}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-7 flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2.5 dark:bg-slate-900/70">
                            <Layers3
                                size={15}
                                className="text-teal-500"
                            />

                            <p className="text-[10px] text-slate-500 dark:text-slate-400">
                                Total active platform users
                            </p>

                            <span className="ml-auto text-xs font-bold text-slate-800 dark:text-white">
                                12,480
                            </span>
                        </div>
                    </div>
                </section>

                {/* =================================================
                    ORGANIZATIONS + ACTIVITY
                ================================================= */}

                <section className="grid grid-cols-1 gap-5 xl:grid-cols-[1.7fr_1fr]">
                    {/* Organizations */}

                    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-[#0b1727]">
                        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 dark:border-slate-800">
                            <div>
                                <h2 className="text-sm font-bold text-slate-950 dark:text-white">
                                    Recent Organizations
                                </h2>

                                <p className="mt-1 text-[10px] text-slate-400">
                                    Latest organizations on the platform
                                </p>
                            </div>

                            <button
                                type="button"
                                className="
                                    text-[10px]
                                    font-bold
                                    text-blue-600
                                    transition
                                    hover:text-blue-700

                                    dark:text-teal-400
                                    dark:hover:text-teal-300
                                "
                            >
                                View all
                            </button>
                        </div>

                        {/* Desktop table */}

                        <div className="hidden overflow-x-auto md:block">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-slate-100 dark:border-slate-800">
                                        <th className="px-5 py-3 text-left text-[9px] font-bold uppercase tracking-wider text-slate-400">
                                            Organization
                                        </th>

                                        <th className="px-4 py-3 text-left text-[9px] font-bold uppercase tracking-wider text-slate-400">
                                            Users
                                        </th>

                                        <th className="px-4 py-3 text-left text-[9px] font-bold uppercase tracking-wider text-slate-400">
                                            Courses
                                        </th>

                                        <th className="px-4 py-3 text-left text-[9px] font-bold uppercase tracking-wider text-slate-400">
                                            Status
                                        </th>

                                        <th className="px-4 py-3 text-right text-[9px] font-bold uppercase tracking-wider text-slate-400">
                                            Action
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {organizations.map((organization) => (
                                        <tr
                                            key={organization.name}
                                            className="border-b border-slate-100 transition hover:bg-slate-50/80 dark:border-slate-800 dark:hover:bg-slate-800/30"
                                        >
                                            <td className="px-5 py-3.5">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-teal-500 text-[9px] font-bold text-white">
                                                        {organization.initials}
                                                    </div>

                                                    <div className="min-w-0">
                                                        <p className="truncate text-[11px] font-bold text-slate-800 dark:text-slate-200">
                                                            {
                                                                organization.name
                                                            }
                                                        </p>

                                                        <p className="truncate text-[9px] text-slate-400">
                                                            {
                                                                organization.email
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="px-4 py-3.5 text-[11px] font-semibold text-slate-600 dark:text-slate-300">
                                                {organization.users}
                                            </td>

                                            <td className="px-4 py-3.5 text-[11px] font-semibold text-slate-600 dark:text-slate-300">
                                                {organization.courses}
                                            </td>

                                            <td className="px-4 py-3.5">
                                                {organization.status ===
                                                    "Active" ? (
                                                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-1 text-[9px] font-bold text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                                        Active
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2 py-1 text-[9px] font-bold text-amber-600 dark:bg-amber-500/10 dark:text-amber-400">
                                                        <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                                                        Pending
                                                    </span>
                                                )}
                                            </td>

                                            <td className="px-4 py-3.5 text-right">
                                                <button
                                                    type="button"
                                                    className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-white"
                                                >
                                                    <MoreVertical size={15} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Mobile cards */}

                        <div className="divide-y divide-slate-100 md:hidden dark:divide-slate-800">
                            {organizations.map((organization) => (
                                <div
                                    key={organization.name}
                                    className="flex items-center gap-3 p-4"
                                >
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-teal-500 text-[9px] font-bold text-white">
                                        {organization.initials}
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <p className="truncate text-[11px] font-bold text-slate-800 dark:text-slate-200">
                                            {organization.name}
                                        </p>

                                        <p className="mt-0.5 text-[9px] text-slate-400">
                                            {organization.users} users ·{" "}
                                            {organization.courses} courses
                                        </p>
                                    </div>

                                    <span
                                        className={`h-2 w-2 rounded-full ${organization.status === "Active"
                                            ? "bg-emerald-500"
                                            : "bg-amber-500"
                                            }`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Activity */}

                    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-[#0b1727]">
                        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 dark:border-slate-800">
                            <div>
                                <h2 className="text-sm font-bold text-slate-950 dark:text-white">
                                    Recent Activity
                                </h2>

                                <p className="mt-1 text-[10px] text-slate-400">
                                    Latest platform events
                                </p>
                            </div>

                            <Activity
                                size={16}
                                className="text-teal-500"
                            />
                        </div>

                        <div className="divide-y divide-slate-100 dark:divide-slate-800">
                            {activities.map((activity) => {
                                const Icon = activity.icon;

                                return (
                                    <div
                                        key={activity.title}
                                        className="flex gap-3 px-5 py-4"
                                    >
                                        <span
                                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${activity.iconStyle}`}
                                        >
                                            <Icon size={14} />
                                        </span>

                                        <div className="min-w-0 flex-1">
                                            <p className="truncate text-[10px] font-bold text-slate-700 dark:text-slate-200">
                                                {activity.title}
                                            </p>

                                            <p className="mt-0.5 truncate text-[9px] text-slate-400">
                                                {activity.description}
                                            </p>

                                            <p className="mt-1 text-[8px] font-medium text-slate-300 dark:text-slate-600">
                                                {activity.time}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* =================================================
                    MESSAGES + SUMMARY
                ================================================= */}

                <section className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
                    {/* Messages */}

                    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-[#0b1727]">
                        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 dark:border-slate-800">
                            <div className="flex items-center gap-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-50 text-teal-600 dark:bg-teal-500/10 dark:text-teal-400">
                                    <MessageCircle size={15} />
                                </div>

                                <div>
                                    <h2 className="text-sm font-bold text-slate-950 dark:text-white">
                                        Messages
                                    </h2>

                                    <p className="text-[9px] text-slate-400">
                                        Recent conversations
                                    </p>
                                </div>
                            </div>

                            <span className="rounded-full bg-blue-50 px-2 py-1 text-[9px] font-bold text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                                3 new
                            </span>
                        </div>

                        <div className="divide-y divide-slate-100 dark:divide-slate-800">
                            {messages.map((message) => (
                                <div
                                    key={message.name}
                                    className="flex items-center gap-3 px-5 py-3.5 transition hover:bg-slate-50 dark:hover:bg-slate-800/30"
                                >
                                    <div
                                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${message.style} text-[9px] font-bold text-white`}
                                    >
                                        {message.initials}
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <div className="flex items-center justify-between gap-2">
                                            <p className="truncate text-[10px] font-bold text-slate-700 dark:text-slate-200">
                                                {message.name}
                                            </p>

                                            <span className="shrink-0 text-[8px] text-slate-400">
                                                {message.time}
                                            </span>
                                        </div>

                                        <p className="mt-0.5 truncate text-[9px] text-slate-400">
                                            {message.message}
                                        </p>
                                    </div>

                                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Platform Summary */}

                    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-[#0b1727]">
                        <div className="border-b border-slate-100 px-5 py-4 dark:border-slate-800">
                            <h2 className="text-sm font-bold text-slate-950 dark:text-white">
                                Platform Summary
                            </h2>

                            <p className="mt-1 text-[9px] text-slate-400">
                                Current platform performance
                            </p>
                        </div>

                        <div className="grid grid-cols-3 divide-x divide-slate-100 dark:divide-slate-800">
                            <div className="p-5">
                                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                                    <CreditCard size={15} />
                                </div>

                                <p className="text-lg font-bold text-slate-900 dark:text-white">
                                    ₹2.18L
                                </p>

                                <p className="mt-1 text-[9px] text-slate-400">
                                    Monthly Revenue
                                </p>

                                <div className="mt-2 flex items-center gap-1 text-[8px] font-bold text-emerald-500">
                                    <TrendingUp size={10} />
                                    24.6%
                                </div>
                            </div>

                            <div className="p-5">
                                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-teal-50 text-teal-600 dark:bg-teal-500/10 dark:text-teal-400">
                                    <CheckCircle2 size={15} />
                                </div>

                                <p className="text-lg font-bold text-slate-900 dark:text-white">
                                    96
                                </p>

                                <p className="mt-1 text-[9px] text-slate-400">
                                    Active Plans
                                </p>

                                <div className="mt-2 flex items-center gap-1 text-[8px] font-bold text-emerald-500">
                                    <ArrowUpRight size={10} />
                                    14 new
                                </div>
                            </div>

                            <div className="p-5">
                                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                                    <BookOpen size={15} />
                                </div>

                                <p className="text-lg font-bold text-slate-900 dark:text-white">
                                    1,245
                                </p>

                                <p className="mt-1 text-[9px] text-slate-400">
                                    Active Courses
                                </p>

                                <div className="mt-2 flex items-center gap-1 text-[8px] font-bold text-emerald-500">
                                    <ArrowUpRight size={10} />
                                    87 added
                                </div>
                            </div>
                        </div>

                        <div className="mx-5 mb-5 flex items-center justify-between rounded-xl bg-gradient-to-r from-blue-50 to-teal-50 px-4 py-3 dark:from-blue-500/5 dark:to-teal-500/5">
                            <div className="flex items-center gap-2">
                                <Clock3
                                    size={14}
                                    className="text-teal-500"
                                />

                                <span className="text-[9px] font-semibold text-slate-500 dark:text-slate-400">
                                    Platform uptime
                                </span>
                            </div>

                            <span className="text-xs font-bold text-slate-800 dark:text-white">
                                99.98%
                            </span>
                        </div>
                    </div>
                </section>

                {/* =================================================
                    FOOTER ACCENT
                ================================================= */}

                <div className="mt-8 flex items-center justify-center gap-2">
                    <span className="h-px w-16 bg-gradient-to-r from-transparent to-blue-300 dark:to-blue-800" />

                    <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-slate-300 dark:text-slate-700">
                        Shiyora Administration
                    </span>

                    <span className="h-px w-16 bg-gradient-to-l from-transparent to-teal-300 dark:to-teal-800" />
                </div>
            </div>
        </main>
    );
};

export default Dashboard;