import React, { useEffect, useState } from "react";

import {
    Users,
    Building2,
    BookOpen,
    Bell,
    MessageCircle,
    Search,
    CalendarDays,
    ShieldCheck,
    RefreshCw,
    AlertCircle,
    GraduationCap,
    UserRoundCheck,
    Activity,
} from "lucide-react";

import {
    getOrganizations,
    getOrganizationStats,
} from "../../services/organizationService";

import {
    getUserStats,
} from "../../services/userService";


// =====================================================
// DASHBOARD
// =====================================================

const Dashboard = () => {

    // =====================================================
    // STATE
    // =====================================================

    const [organizations, setOrganizations] = useState([]);

    const [organizationStats, setOrganizationStats] = useState({
        total_organizations: 0,
        active_organizations: 0,
        total_courses: 0,
    });

    const [userStats, setUserStats] = useState({
        total_users: 0,
        active_users: 0,
        inactive_users: 0,
        total_teachers: 0,
        total_students: 0,
        total_admins: 0,
    });

    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [error, setError] = useState("");


    // =====================================================
    // LOAD DASHBOARD DATA
    // =====================================================

    const loadDashboardData = async () => {

        try {

            setError("");

            const [
                organizationsResponse,
                organizationStatsResponse,
                userStatsResponse,
            ] = await Promise.all([
                getOrganizations(),
                getOrganizationStats(),
                getUserStats(),
            ]);


            setOrganizations(
                organizationsResponse?.data || []
            );


            setOrganizationStats(
                organizationStatsResponse?.data || {
                    total_organizations: 0,
                    active_organizations: 0,
                    total_courses: 0,
                }
            );


            setUserStats(
                userStatsResponse?.data || {
                    total_users: 0,
                    active_users: 0,
                    inactive_users: 0,
                    total_teachers: 0,
                    total_students: 0,
                    total_admins: 0,
                }
            );

        } catch (err) {

            console.error(
                "Dashboard error:",
                err
            );

            setError(
                err.message ||
                "Failed to load dashboard data."
            );

        }

    };


    // =====================================================
    // INITIAL LOAD
    // =====================================================

    useEffect(() => {

        const load = async () => {

            setLoading(true);

            await loadDashboardData();

            setLoading(false);

        };

        load();

    }, []);


    // =====================================================
    // REFRESH
    // =====================================================

    const handleRefresh = async () => {

        try {

            setRefreshing(true);

            await loadDashboardData();

        } finally {

            setRefreshing(false);

        }

    };


    // =====================================================
    // DATE
    // =====================================================

    const currentDate = new Date().toLocaleDateString(
        "en-IN",
        {
            month: "short",
            day: "numeric",
            year: "numeric",
        }
    );


    // =====================================================
    // LOADING
    // =====================================================

    if (loading) {

        return (

            <main
                className="
                    flex
                    min-h-screen
                    items-center
                    justify-center
                    bg-slate-50
                    dark:bg-[#07111f]
                "
            >

                <div className="text-center">

                    <RefreshCw
                        size={30}
                        className="
                            mx-auto
                            animate-spin
                            text-blue-500
                        "
                    />

                    <p
                        className="
                            mt-3
                            text-xs
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


    // =====================================================
    // MAIN
    // =====================================================

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
                BACKGROUND
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
                            Monitor your Shiyora platform
                            from one place.
                        </p>

                    </div>


                    {/* HEADER ACTIONS */}

                    <div
                        className="
                            flex
                            items-center
                            gap-2
                        "
                    >

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
                    MAIN ANALYTICS CARD
                ================================================= */}

                <section
                    className="
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

                    {/* =================================================
                        SECTION HEADER
                    ================================================= */}

                    <div
                        className="
                            flex
                            flex-col
                            gap-3
                            border-b
                            border-slate-100
                            px-5
                            py-5
                            sm:flex-row
                            sm:items-center
                            sm:justify-between
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
                                Platform Overview
                            </h2>

                            <p
                                className="
                                    mt-1
                                    text-[10px]
                                    text-slate-400
                                "
                            >
                                Live statistics from your
                                Shiyora database
                            </p>

                        </div>


                        <div
                            className="
                                flex
                                w-fit
                                items-center
                                gap-1.5
                                rounded-full
                                bg-emerald-50
                                px-2.5
                                py-1.5
                                text-[9px]
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


                    {/* =================================================
                        PRIMARY NUMBERS
                    ================================================= */}

                    <div
                        className="
                            grid
                            grid-cols-1
                            divide-y
                            divide-slate-100
                            sm:grid-cols-3
                            sm:divide-x
                            sm:divide-y-0
                            dark:divide-slate-800
                        "
                    >

                        <MainMetric
                            title="Organizations"
                            value={
                                organizationStats.total_organizations
                            }
                            subtitle={
                                `${organizationStats.active_organizations} active`
                            }
                            icon={Building2}
                        />


                        <MainMetric
                            title="Total Users"
                            value={
                                userStats.total_users
                            }
                            subtitle={
                                `${userStats.active_users} active`
                            }
                            icon={Users}
                        />


                        <MainMetric
                            title="Courses"
                            value={
                                organizationStats.total_courses
                            }
                            subtitle="Across all organizations"
                            icon={BookOpen}
                        />

                    </div>


                    {/* =================================================
                        BREAKDOWN
                    ================================================= */}

                    <div
                        className="
                            border-t
                            border-slate-100
                            dark:border-slate-800
                        "
                    >

                        <div
                            className="
                                grid
                                grid-cols-1
                                lg:grid-cols-2
                            "
                        >

                            {/* =================================================
                                USERS BY ROLE
                            ================================================= */}

                            <div
                                className="
                                    border-b
                                    border-slate-100
                                    p-5
                                    lg:border-b-0
                                    lg:border-r
                                    dark:border-slate-800
                                "
                            >

                                <div
                                    className="
                                        mb-4
                                        flex
                                        items-center
                                        justify-between
                                    "
                                >

                                    <div>

                                        <h3
                                            className="
                                                text-xs
                                                font-bold
                                                text-slate-800
                                                dark:text-slate-200
                                            "
                                        >
                                            Users by Role
                                        </h3>

                                        <p
                                            className="
                                                mt-1
                                                text-[9px]
                                                text-slate-400
                                            "
                                        >
                                            Breakdown of registered users
                                        </p>

                                    </div>

                                    <Users
                                        size={16}
                                        className="
                                            text-slate-400
                                        "
                                    />

                                </div>


                                <div
                                    className="
                                        grid
                                        grid-cols-3
                                        gap-3
                                    "
                                >

                                    <RoleMetric
                                        title="Students"
                                        value={
                                            userStats.total_students
                                        }
                                        icon={GraduationCap}
                                    />


                                    <RoleMetric
                                        title="Teachers"
                                        value={
                                            userStats.total_teachers
                                        }
                                        icon={UserRoundCheck}
                                    />


                                    <RoleMetric
                                        title="Admins"
                                        value={
                                            userStats.total_admins
                                        }
                                        icon={ShieldCheck}
                                    />

                                </div>

                            </div>


                            {/* =================================================
                                ORGANIZATION STATUS
                            ================================================= */}

                            <div
                                className="
                                    p-5
                                "
                            >

                                <div
                                    className="
                                        mb-4
                                        flex
                                        items-center
                                        justify-between
                                    "
                                >

                                    <div>

                                        <h3
                                            className="
                                                text-xs
                                                font-bold
                                                text-slate-800
                                                dark:text-slate-200
                                            "
                                        >
                                            Organization Status
                                        </h3>

                                        <p
                                            className="
                                                mt-1
                                                text-[9px]
                                                text-slate-400
                                            "
                                        >
                                            Current organization health
                                        </p>

                                    </div>

                                    <Building2
                                        size={16}
                                        className="
                                            text-slate-400
                                        "
                                    />

                                </div>


                                <div
                                    className="
                                        grid
                                        grid-cols-2
                                        gap-3
                                    "
                                >

                                    <StatusMetric
                                        title="Active"
                                        value={
                                            organizationStats.active_organizations
                                        }
                                        type="active"
                                    />


                                    <StatusMetric
                                        title="Inactive"
                                        value={
                                            Math.max(
                                                0,
                                                organizationStats.total_organizations -
                                                organizationStats.active_organizations
                                            )
                                        }
                                        type="inactive"
                                    />

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* =================================================
                        USER STATUS FOOTER
                    ================================================= */}

                    <div
                        className="
                            border-t
                            border-slate-100
                            px-5
                            py-3.5
                            dark:border-slate-800
                        "
                    >

                        <div
                            className="
                                flex
                                flex-col
                                gap-2
                                sm:flex-row
                                sm:items-center
                                sm:justify-between
                            "
                        >

                            <span
                                className="
                                    text-[9px]
                                    font-semibold
                                    text-slate-400
                                "
                            >
                                User account status
                            </span>


                            <div
                                className="
                                    flex
                                    items-center
                                    gap-5
                                "
                            >

                                <StatusText
                                    label="Active Users"
                                    value={
                                        userStats.active_users
                                    }
                                    active
                                />

                                <StatusText
                                    label="Inactive Users"
                                    value={
                                        userStats.inactive_users
                                    }
                                />

                            </div>

                        </div>

                    </div>

                </section>


                {/* =================================================
                    RECENT ORGANIZATIONS
                ================================================= */}

                <section
                    className="
                        mt-6
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
                                Latest organizations registered
                                on the platform
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
                            {organizationStats.total_organizations}
                            {" "}
                            total
                        </span>

                    </div>


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
                                        .map((organization) => (

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

                                                <td
                                                    className="
                                                        px-5
                                                        py-3.5
                                                    "
                                                >

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


                                                <td
                                                    className="
                                                        px-4
                                                        py-3.5
                                                    "
                                                >

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

                                        ))}

                                </tbody>

                            </table>

                        </div>

                    )}

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


// =====================================================
// MAIN METRIC
// =====================================================

const MainMetric = ({
    title,
    value,
    subtitle,
    icon: Icon,
}) => {

    return (

        <div
            className="
                flex
                items-center
                gap-4
                px-5
                py-5
            "
        >

            <div
                className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-slate-100
                    text-slate-600
                    dark:bg-slate-800
                    dark:text-slate-300
                "
            >

                <Icon size={20} />

            </div>


            <div className="min-w-0">

                <p
                    className="
                        text-[10px]
                        font-semibold
                        text-slate-400
                    "
                >
                    {title}
                </p>


                <div
                    className="
                        mt-1
                        flex
                        items-baseline
                        gap-2
                    "
                >

                    <span
                        className="
                            text-2xl
                            font-bold
                            tracking-tight
                            text-slate-950
                            dark:text-white
                        "
                    >
                        {value}
                    </span>

                </div>


                <p
                    className="
                        mt-0.5
                        text-[9px]
                        text-slate-400
                    "
                >
                    {subtitle}
                </p>

            </div>

        </div>

    );

};


// =====================================================
// ROLE METRIC
// =====================================================

const RoleMetric = ({
    title,
    value,
    icon: Icon,
}) => {

    return (

        <div
            className="
                rounded-xl
                border
                border-slate-100
                bg-slate-50
                p-3
                dark:border-slate-800
                dark:bg-slate-900/60
            "
        >

            <div
                className="
                    mb-2
                    flex
                    items-center
                    justify-between
                "
            >

                <Icon
                    size={15}
                    className="text-slate-400"
                />

                <span
                    className="
                        text-lg
                        font-bold
                        text-slate-900
                        dark:text-white
                    "
                >
                    {value}
                </span>

            </div>


            <p
                className="
                    text-[9px]
                    font-semibold
                    text-slate-400
                "
            >
                {title}
            </p>

        </div>

    );

};


// =====================================================
// STATUS METRIC
// =====================================================

const StatusMetric = ({
    title,
    value,
    type,
}) => {

    const isActive = type === "active";

    return (

        <div
            className={`
                rounded-xl
                border
                p-4
                ${isActive
                    ? `
                            border-emerald-100
                            bg-emerald-50/70
                            dark:border-emerald-500/10
                            dark:bg-emerald-500/5
                        `
                    : `
                            border-slate-100
                            bg-slate-50
                            dark:border-slate-800
                            dark:bg-slate-900/60
                        `
                }
            `}
        >

            <div
                className="
                    flex
                    items-center
                    justify-between
                "
            >

                <div>

                    <p
                        className="
                            text-[9px]
                            font-semibold
                            text-slate-400
                        "
                    >
                        {title}
                    </p>

                    <p
                        className={`
                            mt-1
                            text-xl
                            font-bold
                            ${isActive
                                ? "text-emerald-600 dark:text-emerald-400"
                                : "text-slate-700 dark:text-slate-300"
                            }
                        `}
                    >
                        {value}
                    </p>

                </div>


                <span
                    className={`
                        h-2
                        w-2
                        rounded-full
                        ${isActive
                            ? "bg-emerald-500"
                            : "bg-slate-400"
                        }
                    `}
                />

            </div>

        </div>

    );

};


// =====================================================
// STATUS TEXT
// =====================================================

const StatusText = ({
    label,
    value,
    active = false,
}) => {

    return (

        <div
            className="
                flex
                items-center
                gap-2
            "
        >

            <span
                className={`
                    h-1.5
                    w-1.5
                    rounded-full
                    ${active
                        ? "bg-emerald-500"
                        : "bg-slate-400"
                    }
                `}
            />

            <span
                className="
                    text-[9px]
                    text-slate-400
                "
            >
                {label}
            </span>

            <span
                className="
                    text-[10px]
                    font-bold
                    text-slate-700
                    dark:text-slate-200
                "
            >
                {value}
            </span>

        </div>

    );

};


// =====================================================
// TABLE HEADER
// =====================================================

const TableHeader = ({
    children,
}) => {

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


// =====================================================
// ORGANIZATION INITIALS
// =====================================================

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