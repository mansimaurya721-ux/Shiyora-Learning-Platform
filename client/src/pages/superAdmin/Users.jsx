import { useEffect, useMemo, useState } from "react";
import { getUsers, getUserStats } from "../../services/userService";

import {
    Users as UsersIcon,
    UserCheck,
    UserX,
    Search,
    Plus,
    MoreVertical,
    Eye,
    Pencil,
    Trash2,
    TrendingUp,
} from "lucide-react";

const Users = () => {
    // ============================================================
    // STATE
    // ============================================================

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [search, setSearch] = useState("");
    const [openMenu, setOpenMenu] = useState(null);

    const [stats, setStats] = useState({
        total_users: 0,
        active_users: 0,
        inactive_users: 0,
        total_teachers: 0,
    });

    // ============================================================
    // LOAD USERS
    // ============================================================

    useEffect(() => {
        const loadUsers = async () => {
            try {
                setLoading(true);
                setError("");

                const response = await getUsers();

                setUsers(response.data || []);
            } catch (err) {
                console.error("Failed to load users:", err);
                setError(err.message || "Failed to load users");
            } finally {
                setLoading(false);
            }
        };

        loadUsers();
    }, []);

    // ============================================================
    // LOAD USER STATISTICS
    // ============================================================

    useEffect(() => {
        const loadStats = async () => {
            try {
                const response = await getUserStats();

                setStats(
                    response.data || {
                        total_users: 0,
                        active_users: 0,
                        inactive_users: 0,
                        total_teachers: 0,
                    }
                );
            } catch (err) {
                console.error("Failed to load user statistics:", err);
            }
        };

        loadStats();
    }, []);

    // ============================================================
    // FILTER USERS
    // ============================================================

    const filteredUsers = useMemo(() => {
        const searchValue = search.toLowerCase().trim();

        return users.filter((user) => {
            return (
                user.name?.toLowerCase().includes(searchValue) ||
                user.email?.toLowerCase().includes(searchValue) ||
                user.organization?.toLowerCase().includes(searchValue) ||
                user.role?.toLowerCase().includes(searchValue)
            );
        });
    }, [search, users]);

    // ============================================================
    // STATISTICS
    // ============================================================

    const totalUsers =
        stats.total_users !== undefined
            ? Number(stats.total_users)
            : users.length;

    const activeUsers =
        stats.active_users !== undefined
            ? Number(stats.active_users)
            : users.filter(
                (user) =>
                    user.status?.toLowerCase() === "active"
            ).length;

    const inactiveUsers =
        stats.inactive_users !== undefined
            ? Number(stats.inactive_users)
            : users.filter(
                (user) =>
                    user.status?.toLowerCase() === "inactive"
            ).length;

    const totalTeachers =
        stats.total_teachers !== undefined
            ? Number(stats.total_teachers)
            : users.filter(
                (user) =>
                    user.role?.toLowerCase() === "teacher"
            ).length;

    // ============================================================
    // CLOSE MENU
    // ============================================================

    const closeMenu = () => {
        setOpenMenu(null);
    };

    // ============================================================
    // RETURN
    // ============================================================

    return (
        <main
            className="
                relative
                min-h-screen
                overflow-hidden

                bg-slate-50
                px-4
                py-6

                text-slate-700

                transition-colors
                duration-300

                dark:bg-[#07111f]
                dark:text-slate-300

                sm:px-6
                lg:px-8
            "
        >
            {/* =====================================================
                BACKGROUND DECORATION
            ====================================================== */}

            <div
                className="
                    pointer-events-none
                    fixed
                    -left-40
                    -top-40
                    h-125
                    w-125
                    rounded-full
                    bg-blue-500/[0.035]
                    blur-[130px]

                    dark:bg-blue-400/[0.04]
                "
            />

            <div
                className="
                    pointer-events-none
                    fixed
                    right-0
                    top-40
                    h-112.5
                    w-112.5
                    rounded-full
                    bg-teal-500/[0.035]
                    blur-[140px]

                    dark:bg-teal-400/[0.04]
                "
            />

            <div className="relative z-10">

                {/* =================================================
                    HEADER
                ================================================== */}

                <div
                    className="
                        mb-8
                        flex
                        flex-col
                        gap-5

                        md:flex-row
                        md:items-end
                        md:justify-between
                    "
                >
                    <div>
                        <div className="mb-2 flex items-center gap-2">
                            <span
                                className="
                                    h-2
                                    w-2
                                    rounded-full
                                    bg-blue-600

                                    dark:bg-teal-400
                                "
                            />

                            <p
                                className="
                                    text-[10px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.2em]
                                    text-blue-600

                                    dark:text-teal-400
                                "
                            >
                                Administration
                            </p>
                        </div>

                        <h1
                            className="
                                text-3xl
                                font-semibold
                                tracking-tight
                                text-slate-900

                                dark:text-white

                                md:text-4xl
                            "
                        >
                            Users
                        </h1>

                        <p
                            className="
                                mt-2
                                max-w-xl
                                text-sm
                                leading-relaxed
                                text-slate-500

                                dark:text-slate-400
                            "
                        >
                            Manage all users registered across the
                            Shiyora LMS platform.
                        </p>
                    </div>

                    {/* ADD USER */}

                    <button
                        type="button"
                        className="
                            flex
                            items-center
                            justify-center
                            gap-2

                            rounded-xl

                            bg-gradient-to-r
                            from-blue-600
                            to-teal-500

                            px-5
                            py-3

                            text-sm
                            font-semibold
                            text-white

                            shadow-lg
                            shadow-blue-500/15

                            transition-all
                            duration-300

                            hover:-translate-y-0.5
                            hover:from-blue-700
                            hover:to-teal-600
                            hover:shadow-xl
                        "
                    >
                        <Plus size={18} />
                        Add User
                    </button>
                </div>

                {/* =================================================
                    STATISTICS
                ================================================== */}

                <div
                    className="
                        mb-6
                        grid
                        grid-cols-1
                        gap-4

                        sm:grid-cols-2
                        xl:grid-cols-4
                    "
                >

                    {/* TOTAL USERS */}

                    <div
                        className="
                            rounded-2xl
                            border
                            border-slate-200
                            bg-white
                            p-5

                            shadow-sm

                            transition-all
                            duration-300

                            hover:-translate-y-1
                            hover:border-blue-200
                            hover:shadow-md

                            dark:border-[#1e334a]
                            dark:bg-[#0b1727]
                            dark:hover:border-blue-500/30
                        "
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p
                                    className="
                                        text-xs
                                        text-slate-500

                                        dark:text-slate-400
                                    "
                                >
                                    Total Users
                                </p>

                                <h2
                                    className="
                                        mt-2
                                        text-2xl
                                        font-semibold
                                        tracking-tight
                                        text-slate-900

                                        dark:text-white
                                    "
                                >
                                    {totalUsers.toLocaleString()}
                                </h2>

                                <p
                                    className="
                                        mt-1
                                        text-[11px]
                                        text-slate-400

                                        dark:text-slate-500
                                    "
                                >
                                    Registered users
                                </p>
                            </div>

                            <div
                                className="
                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center
                                    rounded-xl

                                    border
                                    border-blue-200
                                    bg-blue-50
                                    text-blue-600

                                    dark:border-blue-500/20
                                    dark:bg-blue-500/10
                                    dark:text-blue-400
                                "
                            >
                                <UsersIcon size={22} />
                            </div>
                        </div>
                    </div>

                    {/* ACTIVE USERS */}

                    <div
                        className="
                            rounded-2xl
                            border
                            border-slate-200
                            bg-white
                            p-5

                            shadow-sm

                            transition-all
                            duration-300

                            hover:-translate-y-1
                            hover:border-teal-200
                            hover:shadow-md

                            dark:border-[#1e334a]
                            dark:bg-[#0b1727]
                            dark:hover:border-teal-500/30
                        "
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p
                                    className="
                                        text-xs
                                        text-slate-500

                                        dark:text-slate-400
                                    "
                                >
                                    Active Users
                                </p>

                                <h2
                                    className="
                                        mt-2
                                        text-2xl
                                        font-semibold
                                        tracking-tight
                                        text-slate-900

                                        dark:text-white
                                    "
                                >
                                    {activeUsers.toLocaleString()}
                                </h2>

                                <p
                                    className="
                                        mt-1
                                        text-[11px]
                                        text-teal-600

                                        dark:text-teal-400
                                    "
                                >
                                    Currently active
                                </p>
                            </div>

                            <div
                                className="
                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center
                                    rounded-xl

                                    border
                                    border-teal-200
                                    bg-teal-50
                                    text-teal-600

                                    dark:border-teal-500/20
                                    dark:bg-teal-500/10
                                    dark:text-teal-400
                                "
                            >
                                <UserCheck size={22} />
                            </div>
                        </div>
                    </div>

                    {/* INACTIVE USERS */}

                    <div
                        className="
                            rounded-2xl
                            border
                            border-slate-200
                            bg-white
                            p-5

                            shadow-sm

                            transition-all
                            duration-300

                            hover:-translate-y-1
                            hover:border-slate-300
                            hover:shadow-md

                            dark:border-[#1e334a]
                            dark:bg-[#0b1727]
                            dark:hover:border-slate-600
                        "
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p
                                    className="
                                        text-xs
                                        text-slate-500

                                        dark:text-slate-400
                                    "
                                >
                                    Inactive Users
                                </p>

                                <h2
                                    className="
                                        mt-2
                                        text-2xl
                                        font-semibold
                                        tracking-tight
                                        text-slate-900

                                        dark:text-white
                                    "
                                >
                                    {inactiveUsers.toLocaleString()}
                                </h2>

                                <p
                                    className="
                                        mt-1
                                        text-[11px]
                                        text-slate-400

                                        dark:text-slate-500
                                    "
                                >
                                    Currently inactive
                                </p>
                            </div>

                            <div
                                className="
                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center
                                    rounded-xl

                                    border
                                    border-slate-200
                                    bg-slate-100
                                    text-slate-500

                                    dark:border-slate-600
                                    dark:bg-slate-700/30
                                    dark:text-slate-400
                                "
                            >
                                <UserX size={22} />
                            </div>
                        </div>
                    </div>

                    {/* TEACHERS */}

                    <div
                        className="
                            rounded-2xl
                            border
                            border-slate-200
                            bg-white
                            p-5

                            shadow-sm

                            transition-all
                            duration-300

                            hover:-translate-y-1
                            hover:border-blue-200
                            hover:shadow-md

                            dark:border-[#1e334a]
                            dark:bg-[#0b1727]
                            dark:hover:border-blue-500/30
                        "
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p
                                    className="
                                        text-xs
                                        text-slate-500

                                        dark:text-slate-400
                                    "
                                >
                                    Teachers
                                </p>

                                <h2
                                    className="
                                        mt-2
                                        text-2xl
                                        font-semibold
                                        tracking-tight
                                        text-slate-900

                                        dark:text-white
                                    "
                                >
                                    {totalTeachers.toLocaleString()}
                                </h2>

                                <p
                                    className="
                                        mt-1
                                        text-[11px]
                                        text-slate-400

                                        dark:text-slate-500
                                    "
                                >
                                    Across organizations
                                </p>
                            </div>

                            <div
                                className="
                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center
                                    rounded-xl

                                    border
                                    border-blue-200
                                    bg-blue-50
                                    text-blue-600

                                    dark:border-blue-500/20
                                    dark:bg-blue-500/10
                                    dark:text-blue-400
                                "
                            >
                                <UsersIcon size={22} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* =================================================
                    SEARCH
                ================================================== */}

                <div
                    className="
                        mb-6
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        p-4

                        shadow-sm

                        dark:border-[#1e334a]
                        dark:bg-[#0b1727]
                    "
                >
                    <div className="relative w-full max-w-md">
                        <Search
                            size={19}
                            className="
                                absolute
                                left-3
                                top-1/2
                                -translate-y-1/2
                                text-slate-400

                                dark:text-slate-500
                            "
                        />

                        <input
                            type="text"
                            value={search}
                            onChange={(e) =>
                                setSearch(e.target.value)
                            }
                            placeholder="Search users..."
                            className="
                                w-full
                                rounded-xl

                                border
                                border-slate-200
                                bg-slate-50

                                py-3
                                pl-10
                                pr-4

                                text-sm
                                text-slate-900

                                outline-none

                                placeholder:text-slate-400

                                transition

                                focus:border-blue-400
                                focus:ring-2
                                focus:ring-blue-500/10

                                dark:border-[#1e334a]
                                dark:bg-[#07111f]
                                dark:text-white
                                dark:placeholder:text-slate-500

                                dark:focus:border-teal-400
                                dark:focus:ring-teal-400/10
                            "
                        />
                    </div>
                </div>

                {/* =================================================
                    ALL USERS
                ================================================== */}

                <section
                    className="
                        overflow-hidden
                        rounded-2xl

                        border
                        border-slate-200

                        bg-white

                        shadow-sm

                        dark:border-[#1e334a]
                        dark:bg-[#0b1727]
                    "
                >

                    {/* SECTION HEADER */}

                    <div
                        className="
                            flex
                            flex-col
                            gap-3

                            border-b
                            border-slate-200

                            bg-slate-50/80
                            p-6

                            sm:flex-row
                            sm:items-center
                            sm:justify-between

                            dark:border-[#1e334a]
                            dark:bg-[#102337]/60
                        "
                    >
                        <div>
                            <div className="flex items-center gap-2">
                                <span
                                    className="
                                        h-2
                                        w-2
                                        rounded-full
                                        bg-blue-600

                                        dark:bg-teal-400
                                    "
                                />

                                <p
                                    className="
                                        text-[10px]
                                        font-semibold
                                        uppercase
                                        tracking-[0.18em]

                                        text-blue-600

                                        dark:text-teal-400
                                    "
                                >
                                    User Management
                                </p>
                            </div>

                            <h2
                                className="
                                    mt-1
                                    text-xl
                                    font-semibold
                                    text-slate-900

                                    dark:text-white
                                "
                            >
                                All Users
                            </h2>

                            <p
                                className="
                                    mt-1
                                    text-xs
                                    text-slate-500

                                    dark:text-slate-400
                                "
                            >
                                Users registered across the Shiyora LMS
                                platform.
                            </p>
                        </div>

                        {/* RESULTS */}

                        <div
                            className="
                                flex
                                w-fit
                                items-center
                                gap-2

                                rounded-lg

                                border
                                border-teal-200

                                bg-teal-50

                                px-3
                                py-2

                                dark:border-teal-500/20
                                dark:bg-teal-500/10
                            "
                        >
                            <TrendingUp
                                size={14}
                                className="
                                    text-teal-600

                                    dark:text-teal-400
                                "
                            />

                            <span
                                className="
                                    text-[10px]
                                    font-semibold

                                    text-teal-700

                                    dark:text-teal-400
                                "
                            >
                                {filteredUsers.length} RESULTS
                            </span>
                        </div>
                    </div>

                    {/* =================================================
                        LOADING
                    ================================================== */}

                    {loading && (
                        <div className="px-6 py-14 text-center">
                            <div
                                className="
                                    mx-auto
                                    h-8
                                    w-8
                                    animate-spin
                                    rounded-full
                                    border-2
                                    border-slate-200
                                    border-t-blue-600

                                    dark:border-slate-700
                                    dark:border-t-teal-400
                                "
                            />

                            <p
                                className="
                                    mt-4
                                    text-sm
                                    text-slate-500

                                    dark:text-slate-400
                                "
                            >
                                Loading users...
                            </p>
                        </div>
                    )}

                    {/* =================================================
                        ERROR
                    ================================================== */}

                    {!loading && error && (
                        <div className="px-6 py-14 text-center">
                            <div
                                className="
                                    mx-auto
                                    flex
                                    h-14
                                    w-14
                                    items-center
                                    justify-center

                                    rounded-2xl

                                    bg-red-50
                                    text-red-600

                                    dark:bg-red-500/10
                                    dark:text-red-400
                                "
                            >
                                <UserX size={26} />
                            </div>

                            <h3
                                className="
                                    mt-4
                                    font-semibold

                                    text-slate-900

                                    dark:text-white
                                "
                            >
                                Failed to load users
                            </h3>

                            <p
                                className="
                                    mt-1
                                    text-sm

                                    text-red-500

                                    dark:text-red-400
                                "
                            >
                                {error}
                            </p>
                        </div>
                    )}

                    {/* =================================================
                        TABLE
                    ================================================== */}

                    {!loading && !error && filteredUsers.length > 0 && (
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[900px]">
                                <thead
                                    className="
                                        bg-slate-100

                                        dark:bg-[#102337]
                                    "
                                >
                                    <tr>
                                        <th
                                            className="
                                                px-6
                                                py-4
                                                text-left

                                                text-[10px]
                                                font-semibold
                                                uppercase
                                                tracking-wider

                                                text-slate-500

                                                dark:text-slate-400
                                            "
                                        >
                                            User
                                        </th>

                                        <th
                                            className="
                                                px-6
                                                py-4
                                                text-left

                                                text-[10px]
                                                font-semibold
                                                uppercase
                                                tracking-wider

                                                text-slate-500

                                                dark:text-slate-400
                                            "
                                        >
                                            Role
                                        </th>

                                        <th
                                            className="
                                                px-6
                                                py-4
                                                text-left

                                                text-[10px]
                                                font-semibold
                                                uppercase
                                                tracking-wider

                                                text-slate-500

                                                dark:text-slate-400
                                            "
                                        >
                                            Organization
                                        </th>

                                        <th
                                            className="
                                                px-6
                                                py-4
                                                text-left

                                                text-[10px]
                                                font-semibold
                                                uppercase
                                                tracking-wider

                                                text-slate-500

                                                dark:text-slate-400
                                            "
                                        >
                                            Status
                                        </th>

                                        <th
                                            className="
                                                px-6
                                                py-4
                                                text-right

                                                text-[10px]
                                                font-semibold
                                                uppercase
                                                tracking-wider

                                                text-slate-500

                                                dark:text-slate-400
                                            "
                                        >
                                            Action
                                        </th>
                                    </tr>
                                </thead>

                                <tbody
                                    className="
                                        divide-y
                                        divide-slate-100

                                        dark:divide-[#1e334a]
                                    "
                                >
                                    {filteredUsers.map((user) => (
                                        <tr
                                            key={user.id}
                                            className="
                                                transition-colors

                                                hover:bg-slate-50

                                                dark:hover:bg-[#102337]/60
                                            "
                                        >

                                            {/* USER */}

                                            <td className="px-6 py-5">
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
                                                            h-11
                                                            w-11
                                                            shrink-0

                                                            items-center
                                                            justify-center

                                                            rounded-xl

                                                            border
                                                            border-blue-200

                                                            bg-gradient-to-br
                                                            from-blue-50
                                                            to-teal-50

                                                            font-semibold
                                                            text-blue-700

                                                            dark:border-blue-500/20
                                                            dark:from-blue-500/10
                                                            dark:to-teal-500/10
                                                            dark:text-blue-400
                                                        "
                                                    >
                                                        {user.name
                                                            ?.charAt(0)
                                                            ?.toUpperCase()}
                                                    </div>

                                                    <div>
                                                        <p
                                                            className="
                                                                text-sm
                                                                font-semibold

                                                                text-slate-900

                                                                dark:text-white
                                                            "
                                                        >
                                                            {user.name}
                                                        </p>

                                                        <p
                                                            className="
                                                                mt-1
                                                                text-xs
                                                                text-slate-500

                                                                dark:text-slate-400
                                                            "
                                                        >
                                                            {user.email}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>

                                            {/* ROLE */}

                                            <td className="px-6 py-5">
                                                <span
                                                    className={`
                                                        inline-flex
                                                        rounded-lg
                                                        border

                                                        px-3
                                                        py-1

                                                        text-[9px]
                                                        font-semibold
                                                        uppercase
                                                        tracking-wider

                                                        ${user.role?.toLowerCase() ===
                                                            "admin"
                                                            ? "border-purple-200 bg-purple-50 text-purple-700 dark:border-purple-500/20 dark:bg-purple-500/10 dark:text-purple-300"
                                                            : user.role?.toLowerCase() ===
                                                                "teacher"
                                                                ? "border-teal-200 bg-teal-50 text-teal-700 dark:border-teal-500/20 dark:bg-teal-500/10 dark:text-teal-300"
                                                                : "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300"
                                                        }
                                                    `}
                                                >
                                                    {user.role}
                                                </span>
                                            </td>

                                            {/* ORGANIZATION */}

                                            <td
                                                className="
                                                    px-6
                                                    py-5

                                                    text-sm

                                                    text-slate-600

                                                    dark:text-slate-300
                                                "
                                            >
                                                {user.organization || "No organization"}
                                            </td>

                                            {/* STATUS */}

                                            <td className="px-6 py-5">
                                                <span
                                                    className={`
                                                        inline-flex
                                                        items-center
                                                        gap-1.5

                                                        rounded-full

                                                        px-3
                                                        py-1

                                                        text-xs
                                                        font-semibold

                                                        ${user.status?.toLowerCase() ===
                                                            "active"
                                                            ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400"
                                                            : "bg-slate-100 text-slate-500 dark:bg-slate-700/40 dark:text-slate-400"
                                                        }
                                                    `}
                                                >
                                                    <span
                                                        className={`
                                                            h-1.5
                                                            w-1.5
                                                            rounded-full

                                                            ${user.status?.toLowerCase() ===
                                                                "active"
                                                                ? "bg-emerald-500"
                                                                : "bg-slate-400"
                                                            }
                                                        `}
                                                    />

                                                    {user.status || "Inactive"}
                                                </span>
                                            </td>

                                            {/* ACTION */}

                                            <td className="relative px-6 py-5 text-right">
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setOpenMenu(
                                                            openMenu ===
                                                                user.id
                                                                ? null
                                                                : user.id
                                                        )
                                                    }
                                                    className="
                                                        rounded-lg
                                                        p-2

                                                        text-slate-400

                                                        transition

                                                        hover:bg-blue-50
                                                        hover:text-blue-600

                                                        dark:hover:bg-blue-500/10
                                                        dark:hover:text-blue-400
                                                    "
                                                >
                                                    <MoreVertical size={18} />
                                                </button>

                                                {/* DROPDOWN */}

                                                {openMenu === user.id && (
                                                    <div
                                                        className="
                                                            absolute
                                                            right-6
                                                            top-14
                                                            z-30
                                                            w-36

                                                            overflow-hidden
                                                            rounded-xl

                                                            border
                                                            border-slate-200

                                                            bg-white

                                                            py-1
                                                            text-left

                                                            shadow-xl

                                                            dark:border-[#1e334a]
                                                            dark:bg-[#0b1727]
                                                        "
                                                    >

                                                        {/* VIEW */}

                                                        <button
                                                            type="button"
                                                            onClick={closeMenu}
                                                            className="
                                                                flex
                                                                w-full
                                                                items-center
                                                                gap-2

                                                                px-4
                                                                py-2.5

                                                                text-sm
                                                                text-slate-600

                                                                transition

                                                                hover:bg-slate-50
                                                                hover:text-blue-600

                                                                dark:text-slate-300
                                                                dark:hover:bg-[#102337]
                                                                dark:hover:text-blue-400
                                                            "
                                                        >
                                                            <Eye size={15} />
                                                            View
                                                        </button>

                                                        {/* EDIT */}

                                                        <button
                                                            type="button"
                                                            onClick={closeMenu}
                                                            className="
                                                                flex
                                                                w-full
                                                                items-center
                                                                gap-2

                                                                px-4
                                                                py-2.5

                                                                text-sm
                                                                text-slate-600

                                                                transition

                                                                hover:bg-slate-50
                                                                hover:text-teal-600

                                                                dark:text-slate-300
                                                                dark:hover:bg-[#102337]
                                                                dark:hover:text-teal-400
                                                            "
                                                        >
                                                            <Pencil size={15} />
                                                            Edit
                                                        </button>

                                                        {/* DELETE */}

                                                        <button
                                                            type="button"
                                                            onClick={closeMenu}
                                                            className="
                                                                flex
                                                                w-full
                                                                items-center
                                                                gap-2

                                                                px-4
                                                                py-2.5

                                                                text-sm
                                                                text-red-600

                                                                transition

                                                                hover:bg-red-50

                                                                dark:text-red-400
                                                                dark:hover:bg-red-500/10
                                                            "
                                                        >
                                                            <Trash2 size={15} />
                                                            Delete
                                                        </button>
                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* =================================================
                        EMPTY STATE
                    ================================================== */}

                    {!loading &&
                        !error &&
                        filteredUsers.length === 0 && (
                            <div className="px-6 py-14 text-center">
                                <div
                                    className="
                                        mx-auto
                                        flex
                                        h-14
                                        w-14
                                        items-center
                                        justify-center

                                        rounded-2xl

                                        bg-blue-50
                                        text-blue-600

                                        dark:bg-blue-500/10
                                        dark:text-blue-400
                                    "
                                >
                                    <UsersIcon size={26} />
                                </div>

                                <h3
                                    className="
                                        mt-4
                                        font-semibold

                                        text-slate-900

                                        dark:text-white
                                    "
                                >
                                    No users found
                                </h3>

                                <p
                                    className="
                                        mt-1
                                        text-sm

                                        text-slate-500

                                        dark:text-slate-400
                                    "
                                >
                                    {search
                                        ? "Try changing your search."
                                        : "No users are registered yet."}
                                </p>
                            </div>
                        )}
                </section>

                {/* =================================================
                    FOOTER NOTE
                ================================================== */}

                <div
                    className="
                        mt-5
                        flex
                        items-center
                        justify-between
                    "
                >
                    <p
                        className="
                            text-[9px]
                            font-medium
                            uppercase
                            tracking-wider

                            text-slate-400

                            dark:text-slate-600
                        "
                    >
                        Shiyora Administration
                    </p>

                    <p
                        className="
                            text-[9px]
                            font-medium
                            uppercase
                            tracking-wider

                            text-slate-400

                            dark:text-slate-600
                        "
                    >
                        User Management
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Users;