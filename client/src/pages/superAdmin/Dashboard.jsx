import React, { useEffect, useState } from "react";

import {
    Users,
    Building2,
    BookOpen,
    CreditCard,
    Activity,
    Bell,
    MessageCircle,
    Search,
    ChevronDown,
    CalendarDays,
    ShieldCheck,
    Layers3,
    RefreshCw,
    AlertCircle,
} from "lucide-react";

import {
    getOrganizations,
    getOrganizationStats,
} from "../../services/organizationService";


// =========================================================
// SUPER ADMIN DASHBOARD
// =========================================================

const Dashboard = () => {

    // =========================================================
    // STATE
    // =========================================================

    const [organizations, setOrganizations] = useState([]);

    const [stats, setStats] = useState({
        total_organizations: 0,
        active_organizations: 0,
        total_users: 0,
        total_courses: 0,
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [refreshing, setRefreshing] = useState(false);


    // =========================================================
    // LOAD DATA
    // =========================================================

    const loadDashboardData = async () => {

        try {

            setError("");

            const [
                organizationsResponse,
                statsResponse,
            ] = await Promise.all([
                getOrganizations(),
                getOrganizationStats(),
            ]);


            // ---------------------------------------------
            // ORGANIZATIONS
            // ---------------------------------------------

            setOrganizations(
                organizationsResponse?.data || []
            );


            // ---------------------------------------------
            // STATISTICS
            // ---------------------------------------------

            setStats(
                statsResponse?.data || {
                    total_organizations: 0,
                    active_organizations: 0,
                    total_users: 0,
                    total_courses: 0,
                }
            );

        } catch (err) {

            console.error(
                "Super Admin Dashboard Error:",
                err
            );

            setError(
                err.message ||
                "Failed to load dashboard data."
            );

        }

    };


    // =========================================================
    // FIRST LOAD
    // =========================================================

    useEffect(() => {

        const load = async () => {

            setLoading(true);

            await loadDashboardData();

            setLoading(false);

        };

        load();

    }, []);


    // =========================================================
    // REFRESH
    // =========================================================

    const handleRefresh = async () => {

        try {

            setRefreshing(true);

            await loadDashboardData();

        } finally {

            setRefreshing(false);

        }

    };


    // =========================================================
    // DATE
    // =========================================================

    const currentDate = new Date().toLocaleDateString(
        "en-IN",
        {
            month: "short",
            day: "numeric",
            year: "numeric",
        }
    );


    // =========================================================
    // LOADING
    // =========================================================

    if (loading) {

        return (

            <main
                className="
                    flex min-h-screen
                    items-center justify-center
                    bg-slate-50
                    text-slate-700
                    dark:bg-[#07111f]
                    dark:text-slate-200
                "
            >

                <div className="text-center">

                    <RefreshCw
                        size={32}
                        className="
                            mx-auto
                            animate-spin
                            text-blue-500
                        "
                    />

                    <p
                        className="
                            mt-3
                            text-sm
                            font-medium
                            text-slate-500
                            dark:text-slate-400
                        "
                    >
                        Loading Shiyora Dashboard...
                    </p>

                </div>

            </main>

        );

    }


    // =========================================================
    // MAIN DASHBOARD
    // =========================================================

    return (

        <main
            className="
                min-h-screen
                bg-slate-50
                text-slate-700
                dark:bg-[#07111f]
                dark:text-slate-200
            "
        >

            {/* =================================================
                BACKGROUND DECORATION
            ================================================= */}

            <div
                className="
                    pointer-events-none
                    fixed
                    inset-0
                    overflow-hidden
                "
            >

                <div
                    className="
                        absolute
                        -right-40
                        -top-40
                        h-96
                        w-96
                        rounded-full
                        bg-blue-500/5
                        blur-3xl
                    "
                />

                <div
                    className="
                        absolute
                        -bottom-40
                        -left-40
                        h-96
                        w-96
                        rounded-full
                        bg-teal-500/5
                        blur-3xl
                    "
                />

            </div>


            {/* =================================================
                CONTENT
            ================================================= */}

            <div
                className="
                    relative
                    mx-auto
                    max-w-[1600px]
                    px-4
                    py-5
                    sm:px-6
                    lg:px-8
                    lg:py-7
                "
            >

                {/* =================================================
                    HEADER
                ================================================= */}

                <header
                    className="
                        mb-7
                        flex
                        flex-col
                        gap-5
                        xl:flex-row
                        xl:items-center
                        xl:justify-between
                    "
                >

                    {/* LEFT */}

                    <div>

                        <div
                            className="
                                mb-2
                                flex
                                items-center
                                gap-2
                            "
                        >

                            <span
                                className="
                                    flex
                                    h-6
                                    items-center
                                    gap-1.5
                                    rounded-full
                                    border
                                    border-blue-200
                                    bg-blue-50
                                    px-2.5
                                    text-[9px]
                                    font-bold
                                    uppercase
                                    tracking-wider
                                    text-blue-600
                                    dark:border-blue-500/20
                                    dark:bg-blue-500/10
                                    dark:text-blue-400
                                "
                            >

                                <Activity size={11} />

                                Administration

                            </span>


                            <span
                                className="
                                    h-1
                                    w-1
                                    rounded-full
                                    bg-slate-300
                                    dark:bg-slate-700
                                "
                            />


                            <span
                                className="
                                    text-[10px]
                                    font-medium
                                    text-slate-400
                                "
                            >
                                Overview
                            </span>

                        </div>


                        <h1
                            className="
                                text-2xl
                                font-bold
                                tracking-tight
                                text-slate-950
                                sm:text-3xl
                                dark:text-white
                            "
                        >
                            SuperAdmin Dashboard
                        </h1>


                        <p
                            className="
                                mt-1.5
                                text-xs
                                text-slate-500
                                sm:text-sm
                                dark:text-slate-400
                            "
                        >
                            Monitor your Shiyora learning
                            platform and manage everything
                            from one place.
                        </p>

                    </div>


                    {/* RIGHT */}

                    <div
                        className="
                            flex
                            items-center
                            gap-2
                        "
                    >

                        {/* SEARCH */}

                        <button
                            type="button"
                            className="
                                hidden
                                h-10
                                items-center
                                gap-2
                                rounded-xl
                                border
                                border-slate-200
                                bg-white
                                px-3
                                text-slate-400
                                shadow-sm
                                md:flex
                                dark:border-slate-800
                                dark:bg-slate-900/60
                            "
                        >

                            <Search size={16} />

                            <span className="text-xs">
                                Search
                            </span>

                            <span
                                className="
                                    ml-3
                                    rounded-md
                                    bg-slate-100
                                    px-1.5
                                    py-0.5
                                    text-[9px]
                                    font-semibold
                                    text-slate-400
                                    dark:bg-slate-800
                                "
                            >
                                /
                            </span>

                        </button>


                        {/* NOTIFICATIONS */}

                        <button
                            type="button"
                            aria-label="Notifications"
                            className="
                                relative
                                flex
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-xl
                                border
                                border-slate-200
                                bg-white
                                text-slate-500
                                shadow-sm
                                dark:border-slate-800
                                dark:bg-slate-900/60
                                dark:text-slate-400
                            "
                        >

                            <Bell size={17} />

                        </button>


                        {/* MESSAGES */}

                        <button
                            type="button"
                            aria-label="Messages"
                            className="
                                relative
                                flex
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-xl
                                border
                                border-slate-200
                                bg-white
                                text-slate-500
                                shadow-sm
                                dark:border-slate-800
                                dark:bg-slate-900/60
                                dark:text-slate-400
                            "
                        >

                            <MessageCircle size={17} />

                        </button>


                        {/* REFRESH */}

                        <button
                            type="button"
                            onClick={handleRefresh}
                            disabled={refreshing}
                            className="
                                flex
                                h-10
                                items-center
                                gap-2
                                rounded-xl
                                border
                                border-slate-200
                                bg-white
                                px-3
                                text-xs
                                font-semibold
                                text-slate-600
                                shadow-sm
                                transition
                                hover:border-blue-200
                                hover:text-blue-600
                                disabled:cursor-not-allowed
                                disabled:opacity-60
                                dark:border-slate-800
                                dark:bg-slate-900/60
                                dark:text-slate-300
                            "
                        >

                            <RefreshCw
                                size={15}
                                className={
                                    refreshing
                                        ? "animate-spin"
                                        : ""
                                }
                            />

                            Refresh

                        </button>


                        {/* DATE */}

                        <div
                            className="
                                hidden
                                h-10
                                items-center
                                gap-2
                                rounded-xl
                                border
                                border-slate-200
                                bg-white
                                px-3
                                shadow-sm
                                lg:flex
                                dark:border-slate-800
                                dark:bg-slate-900/60
                            "
                        >

                            <CalendarDays
                                size={15}
                                className="text-slate-400"
                            />

                            <span
                                className="
                                    text-xs
                                    font-semibold
                                    text-slate-600
                                    dark:text-slate-300
                                "
                            >
                                {currentDate}
                            </span>

                        </div>

                    </div>

                </header>


                {/* =================================================
                    ERROR
                ================================================= */}

                {error && (

                    <div
                        className="
                            mb-6
                            flex
                            items-center
                            gap-3
                            rounded-xl
                            border
                            border-red-200
                            bg-red-50
                            px-4
                            py-3
                            text-sm
                            text-red-600
                            dark:border-red-500/20
                            dark:bg-red-500/10
                            dark:text-red-400
                        "
                    >

                        <AlertCircle size={18} />

                        {error}

                    </div>

                )}


                {/* =================================================
                    KPI CARDS
                ================================================= */}

                <section
                    className="
                        mb-7
                        grid
                        grid-cols-1
                        gap-4
                        sm:grid-cols-2
                        xl:grid-cols-4
                    "
                >

                    <StatCard
                        title="Total Organizations"
                        value={
                            stats.total_organizations
                        }
                        icon={Building2}
                        iconStyle="
                            bg-blue-50
                            text-blue-600
                            dark:bg-blue-500/10
                            dark:text-blue-400
                        "
                        footer={
                            `${stats.active_organizations} active organizations`
                        }
                    />


                    <StatCard
                        title="Total Users"
                        value={
                            stats.total_users
                        }
                        icon={Users}
                        iconStyle="
                            bg-teal-50
                            text-teal-600
                            dark:bg-teal-500/10
                            dark:text-teal-400
                        "
                        footer="Registered platform users"
                    />


                    <StatCard
                        title="Total Courses"
                        value={
                            stats.total_courses
                        }
                        icon={BookOpen}
                        iconStyle="
                            bg-indigo-50
                            text-indigo-600
                            dark:bg-indigo-500/10
                            dark:text-indigo-400
                        "
                        footer="Courses in the platform"
                    />


                    <StatCard
                        title="Total Revenue"
                        value="—"
                        icon={CreditCard}
                        iconStyle="
                            bg-cyan-50
                            text-cyan-600
                            dark:bg-cyan-500/10
                            dark:text-cyan-400
                        "
                        footer="Billing data not connected"
                    />

                </section>


                {/* =================================================
                    PLATFORM OVERVIEW + USERS
                ================================================= */}

                <section
                    className="
                        mb-7
                        grid
                        grid-cols-1
                        gap-5
                        xl:grid-cols-[1.7fr_1fr]
                    "
                >

                    {/* =================================================
                        PLATFORM OVERVIEW
                    ================================================= */}

                    <div
                        className="
                            rounded-2xl
                            border
                            border-slate-200
                            bg-white
                            p-5
                            shadow-sm
                            dark:border-slate-800
                            dark:bg-[#0b1727]
                        "
                    >

                        <div
                            className="
                                mb-6
                                flex
                                items-center
                                justify-between
                            "
                        >

                            <div>

                                <h2
                                    className="
                                        text-sm
                                        font-bold
                                        text-slate-950
                                        dark:text-white
                                    "
                                >
                                    Platform Overview
                                </h2>

                                <p
                                    className="
                                        mt-1
                                        text-[10px]
                                        text-slate-400
                                    "
                                >
                                    Current live platform statistics
                                </p>

                            </div>


                            <div
                                className="
                                    flex
                                    items-center
                                    gap-1.5
                                    rounded-lg
                                    bg-emerald-50
                                    px-2.5
                                    py-1.5
                                    text-[10px]
                                    font-bold
                                    text-emerald-600
                                    dark:bg-emerald-500/10
                                    dark:text-emerald-400
                                "
                            >

                                <span
                                    className="
                                        h-1.5
                                        w-1.5
                                        rounded-full
                                        bg-emerald-500
                                    "
                                />

                                Live Data

                            </div>

                        </div>


                        <div
                            className="
                                grid
                                grid-cols-1
                                gap-4
                                sm:grid-cols-3
                            "
                        >

                            <OverviewCard
                                title="Organizations"
                                value={
                                    stats.total_organizations
                                }
                                icon={Building2}
                                style="
                                    bg-blue-50
                                    text-blue-600
                                    dark:bg-blue-500/10
                                    dark:text-blue-400
                                "
                            />


                            <OverviewCard
                                title="Users"
                                value={
                                    stats.total_users
                                }
                                icon={Users}
                                style="
                                    bg-teal-50
                                    text-teal-600
                                    dark:bg-teal-500/10
                                    dark:text-teal-400
                                "
                            />


                            <OverviewCard
                                title="Courses"
                                value={
                                    stats.total_courses
                                }
                                icon={BookOpen}
                                style="
                                    bg-indigo-50
                                    text-indigo-600
                                    dark:bg-indigo-500/10
                                    dark:text-indigo-400
                                "
                            />

                        </div>


                        {/* STATUS */}

                        <div
                            className="
                                mt-5
                                flex
                                items-center
                                gap-3
                                rounded-xl
                                border
                                border-emerald-100
                                bg-emerald-50/70
                                px-4
                                py-3
                                dark:border-emerald-500/10
                                dark:bg-emerald-500/5
                            "
                        >

                            <ShieldCheck
                                size={18}
                                className="
                                    text-emerald-600
                                    dark:text-emerald-400
                                "
                            />

                            <div>

                                <p
                                    className="
                                        text-[10px]
                                        font-bold
                                        text-emerald-700
                                        dark:text-emerald-300
                                    "
                                >
                                    PostgreSQL connected
                                </p>

                                <p
                                    className="
                                        mt-0.5
                                        text-[9px]
                                        text-emerald-600/70
                                        dark:text-emerald-400/70
                                    "
                                >
                                    Dashboard statistics are loaded
                                    from the backend.
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* =================================================
                        USER SUMMARY
                    ================================================= */}

                    <div
                        className="
                            rounded-2xl
                            border
                            border-slate-200
                            bg-white
                            p-5
                            shadow-sm
                            dark:border-slate-800
                            dark:bg-[#0b1727]
                        "
                    >

                        <div className="mb-6">

                            <h2
                                className="
                                    text-sm
                                    font-bold
                                    text-slate-950
                                    dark:text-white
                                "
                            >
                                Platform Users
                            </h2>

                            <p
                                className="
                                    mt-1
                                    text-[10px]
                                    text-slate-400
                                "
                            >
                                Current registered users
                            </p>

                        </div>


                        <div
                            className="
                                flex
                                items-center
                                gap-4
                                rounded-xl
                                border
                                border-slate-100
                                bg-slate-50
                                p-4
                                dark:border-slate-800
                                dark:bg-slate-900/60
                            "
                        >

                            <div
                                className="
                                    flex
                                    h-11
                                    w-11
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-teal-50
                                    text-teal-600
                                    dark:bg-teal-500/10
                                    dark:text-teal-400
                                "
                            >

                                <Users size={20} />

                            </div>


                            <div className="flex-1">

                                <p
                                    className="
                                        text-xs
                                        font-bold
                                        text-slate-700
                                        dark:text-slate-200
                                    "
                                >
                                    Total Registered Users
                                </p>

                                <p
                                    className="
                                        mt-1
                                        text-[9px]
                                        text-slate-400
                                    "
                                >
                                    Users currently stored
                                    in PostgreSQL
                                </p>

                            </div>


                            <span
                                className="
                                    text-2xl
                                    font-bold
                                    text-slate-900
                                    dark:text-white
                                "
                            >
                                {stats.total_users}
                            </span>

                        </div>


                        <div
                            className="
                                mt-4
                                rounded-xl
                                border
                                border-slate-100
                                bg-slate-50
                                p-4
                                dark:border-slate-800
                                dark:bg-slate-900/60
                            "
                        >

                            <div
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    text-slate-500
                                    dark:text-slate-400
                                "
                            >

                                <Layers3 size={15} />

                                <span
                                    className="
                                        text-[10px]
                                        font-semibold
                                    "
                                >
                                    Role analytics
                                </span>

                            </div>


                            <p
                                className="
                                    mt-2
                                    text-[9px]
                                    leading-relaxed
                                    text-slate-400
                                "
                            >
                                Student, teacher and admin
                                counts will be displayed here
                                after role-based analytics are
                                connected to the backend.
                            </p>

                        </div>

                    </div>

                </section>


                {/* =================================================
                    ORGANIZATIONS
                ================================================= */}

                <section
                    className="
                        mb-5
                        overflow-hidden
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        shadow-sm
                        dark:border-slate-800
                        dark:bg-[#0b1727]
                    "
                >

                    {/* HEADER */}

                    <div
                        className="
                            flex
                            items-center
                            justify-between
                            border-b
                            border-slate-100
                            px-5
                            py-4
                            dark:border-slate-800
                        "
                    >

                        <div>

                            <h2
                                className="
                                    text-sm
                                    font-bold
                                    text-slate-950
                                    dark:text-white
                                "
                            >
                                Recent Organizations
                            </h2>

                            <p
                                className="
                                    mt-1
                                    text-[10px]
                                    text-slate-400
                                "
                            >
                                Organizations loaded from PostgreSQL
                            </p>

                        </div>


                        <span
                            className="
                                rounded-full
                                bg-blue-50
                                px-2.5
                                py-1
                                text-[9px]
                                font-bold
                                text-blue-600
                                dark:bg-blue-500/10
                                dark:text-blue-400
                            "
                        >
                            {organizations.length} total
                        </span>

                    </div>


                    {/* EMPTY */}

                    {organizations.length === 0 ? (

                        <div
                            className="
                                px-5
                                py-12
                                text-center
                            "
                        >

                            <Building2
                                size={30}
                                className="
                                    mx-auto
                                    text-slate-300
                                    dark:text-slate-700
                                "
                            />

                            <p
                                className="
                                    mt-3
                                    text-sm
                                    font-semibold
                                    text-slate-600
                                    dark:text-slate-300
                                "
                            >
                                No organizations found
                            </p>

                            <p
                                className="
                                    mt-1
                                    text-[10px]
                                    text-slate-400
                                "
                            >
                                Create an organization
                                to see it here.
                            </p>

                        </div>

                    ) : (

                        <div className="overflow-x-auto">

                            <table className="w-full">

                                <thead>

                                    <tr
                                        className="
                                            border-b
                                            border-slate-100
                                            dark:border-slate-800
                                        "
                                    >

                                        <TableHeader>
                                            Organization
                                        </TableHeader>

                                        <TableHeader>
                                            Users
                                        </TableHeader>

                                        <TableHeader>
                                            Courses
                                        </TableHeader>

                                        <TableHeader>
                                            Plan
                                        </TableHeader>

                                        <TableHeader>
                                            Status
                                        </TableHeader>

                                    </tr>

                                </thead>


                                <tbody>

                                    {organizations
                                        .slice(0, 5)
                                        .map(
                                            (
                                                organization
                                            ) => (

                                                <tr
                                                    key={
                                                        organization.id
                                                    }
                                                    className="
                                                        border-b
                                                        border-slate-100
                                                        transition
                                                        hover:bg-slate-50
                                                        dark:border-slate-800
                                                        dark:hover:bg-slate-800/30
                                                    "
                                                >

                                                    {/* ORGANIZATION */}

                                                    <td className="px-5 py-3.5">

                                                        <div
                                                            className="
                                                                flex
                                                                items-center
                                                                gap-3
                                                            "
                                                        >

                                                            <div
                                                                className="
                                                                    flex
                                                                    h-9
                                                                    w-9
                                                                    shrink-0
                                                                    items-center
                                                                    justify-center
                                                                    rounded-lg
                                                                    bg-gradient-to-br
                                                                    from-blue-500
                                                                    to-teal-500
                                                                    text-[9px]
                                                                    font-bold
                                                                    text-white
                                                                "
                                                            >

                                                                {getInitials(
                                                                    organization.name
                                                                )}

                                                            </div>


                                                            <div
                                                                className="
                                                                    min-w-0
                                                                "
                                                            >

                                                                <p
                                                                    className="
                                                                        truncate
                                                                        text-[11px]
                                                                        font-bold
                                                                        text-slate-800
                                                                        dark:text-slate-200
                                                                    "
                                                                >
                                                                    {
                                                                        organization.name
                                                                    }
                                                                </p>

                                                                <p
                                                                    className="
                                                                        truncate
                                                                        text-[9px]
                                                                        text-slate-400
                                                                    "
                                                                >
                                                                    {
                                                                        organization.email
                                                                    }
                                                                </p>

                                                            </div>

                                                        </div>

                                                    </td>


                                                    {/* USERS */}

                                                    <td
                                                        className="
                                                            px-4
                                                            py-3.5
                                                            text-[11px]
                                                            font-semibold
                                                            text-slate-600
                                                            dark:text-slate-300
                                                        "
                                                    >
                                                        {
                                                            organization.users ??
                                                            0
                                                        }
                                                    </td>


                                                    {/* COURSES */}

                                                    <td
                                                        className="
                                                            px-4
                                                            py-3.5
                                                            text-[11px]
                                                            font-semibold
                                                            text-slate-600
                                                            dark:text-slate-300
                                                        "
                                                    >
                                                        {
                                                            organization.courses ??
                                                            0
                                                        }
                                                    </td>


                                                    {/* PLAN */}

                                                    <td
                                                        className="
                                                            px-4
                                                            py-3.5
                                                            text-[11px]
                                                            font-semibold
                                                            text-slate-600
                                                            dark:text-slate-300
                                                        "
                                                    >
                                                        {
                                                            organization.plan ||
                                                            "Basic"
                                                        }
                                                    </td>


                                                    {/* STATUS */}

                                                    <td className="px-4 py-3.5">

                                                        <span
                                                            className={`
                                                                inline-flex
                                                                items-center
                                                                gap-1.5
                                                                rounded-full
                                                                px-2
                                                                py-1
                                                                text-[9px]
                                                                font-bold
                                                                ${String(
                                                                organization.status
                                                            ).toLowerCase() ===
                                                                    "active"
                                                                    ? `
                                                                        bg-emerald-50
                                                                        text-emerald-600
                                                                        dark:bg-emerald-500/10
                                                                        dark:text-emerald-400
                                                                    `
                                                                    : `
                                                                        bg-amber-50
                                                                        text-amber-600
                                                                        dark:bg-amber-500/10
                                                                        dark:text-amber-400
                                                                    `
                                                                }
                                                            `}
                                                        >

                                                            <span
                                                                className={`
                                                                    h-1.5
                                                                    w-1.5
                                                                    rounded-full
                                                                    ${String(
                                                                    organization.status
                                                                ).toLowerCase() ===
                                                                        "active"
                                                                        ? "bg-emerald-500"
                                                                        : "bg-amber-500"
                                                                    }
                                                                `}
                                                            />

                                                            {
                                                                organization.status ||
                                                                "Active"
                                                            }

                                                        </span>

                                                    </td>

                                                </tr>

                                            )
                                        )}

                                </tbody>

                            </table>

                        </div>

                    )}

                </section>


                {/* =================================================
                    SYSTEM INFORMATION
                ================================================= */}

                <section
                    className="
                        grid
                        grid-cols-1
                        gap-5
                        lg:grid-cols-3
                    "
                >

                    <InfoCard
                        icon={Building2}
                        title="Organizations"
                        value={
                            stats.total_organizations
                        }
                        description="
                            Total organizations registered
                            on Shiyora.
                        "
                    />


                    <InfoCard
                        icon={Users}
                        title="Users"
                        value={
                            stats.total_users
                        }
                        description="
                            Total users currently registered
                            on the platform.
                        "
                    />


                    <InfoCard
                        icon={BookOpen}
                        title="Courses"
                        value={
                            stats.total_courses
                        }
                        description="
                            Total courses currently available
                            in the database.
                        "
                    />

                </section>


                {/* =================================================
                    FOOTER
                ================================================= */}

                <div
                    className="
                        mt-8
                        flex
                        items-center
                        justify-center
                        gap-2
                    "
                >

                    <span
                        className="
                            h-px
                            w-16
                            bg-gradient-to-r
                            from-transparent
                            to-blue-300
                            dark:to-blue-800
                        "
                    />

                    <span
                        className="
                            text-[8px]
                            font-semibold
                            uppercase
                            tracking-[0.2em]
                            text-slate-300
                            dark:text-slate-700
                        "
                    >
                        Shiyora Administration
                    </span>

                    <span
                        className="
                            h-px
                            w-16
                            bg-gradient-to-l
                            from-transparent
                            to-teal-300
                            dark:to-teal-800
                        "
                    />

                </div>

            </div>

        </main>

    );
};


// =========================================================
// STAT CARD
// =========================================================

const StatCard = ({
    title,
    value,
    icon: Icon,
    iconStyle,
    footer,
}) => {

    return (

        <div
            className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-blue-200
                hover:shadow-md
                dark:border-slate-800
                dark:bg-[#0b1727]
            "
        >

            <div
                className="
                    flex
                    items-start
                    justify-between
                "
            >

                <div>

                    <p
                        className="
                            text-[11px]
                            font-semibold
                            text-slate-500
                            dark:text-slate-400
                        "
                    >
                        {title}
                    </p>


                    <p
                        className="
                            mt-2
                            text-2xl
                            font-bold
                            tracking-tight
                            text-slate-950
                            dark:text-white
                        "
                    >
                        {value}
                    </p>

                </div>


                <div
                    className={`
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        ${iconStyle}
                    `}
                >

                    <Icon size={19} />

                </div>

            </div>


            <div
                className="
                    mt-4
                    border-t
                    border-slate-100
                    pt-3
                    text-[10px]
                    text-slate-400
                    dark:border-slate-800
                "
            >
                {footer}
            </div>

        </div>

    );

};


// =========================================================
// OVERVIEW CARD
// =========================================================

const OverviewCard = ({
    title,
    value,
    icon: Icon,
    style,
}) => {

    return (

        <div
            className="
                rounded-xl
                border
                border-slate-100
                bg-slate-50
                p-4
                dark:border-slate-800
                dark:bg-slate-900/60
            "
        >

            <div
                className={`
                    mb-3
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    ${style}
                `}
            >

                <Icon size={17} />

            </div>


            <p
                className="
                    text-[10px]
                    font-semibold
                    text-slate-400
                "
            >
                {title}
            </p>


            <p
                className="
                    mt-1
                    text-xl
                    font-bold
                    text-slate-900
                    dark:text-white
                "
            >
                {value}
            </p>

        </div>

    );

};


// =========================================================
// INFO CARD
// =========================================================

const InfoCard = ({
    icon: Icon,
    title,
    value,
    description,
}) => {

    return (

        <div
            className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                shadow-sm
                dark:border-slate-800
                dark:bg-[#0b1727]
            "
        >

            <div
                className="
                    flex
                    items-center
                    justify-between
                "
            >

                <div
                    className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-lg
                        bg-slate-100
                        text-slate-600
                        dark:bg-slate-800
                        dark:text-slate-300
                    "
                >

                    <Icon size={17} />

                </div>


                <span
                    className="
                        text-xl
                        font-bold
                        text-slate-900
                        dark:text-white
                    "
                >
                    {value}
                </span>

            </div>


            <h3
                className="
                    mt-4
                    text-xs
                    font-bold
                    text-slate-800
                    dark:text-slate-200
                "
            >
                {title}
            </h3>


            <p
                className="
                    mt-1
                    text-[10px]
                    leading-relaxed
                    text-slate-400
                "
            >
                {description}
            </p>

        </div>

    );

};


// =========================================================
// TABLE HEADER
// =========================================================

const TableHeader = ({ children }) => {

    return (

        <th
            className="
                px-4
                py-3
                text-left
                text-[9px]
                font-bold
                uppercase
                tracking-wider
                text-slate-400
            "
        >
            {children}
        </th>

    );

};


// =========================================================
// GET ORGANIZATION INITIALS
// =========================================================

const getInitials = (name = "") => {

    const words = name
        .trim()
        .split(/\s+/)
        .filter(Boolean);

    if (words.length === 0) {
        return "OR";
    }

    if (words.length === 1) {
        return words[0]
            .slice(0, 2)
            .toUpperCase();
    }

    return (
        words[0][0] +
        words[1][0]
    ).toUpperCase();

};


export default Dashboard;