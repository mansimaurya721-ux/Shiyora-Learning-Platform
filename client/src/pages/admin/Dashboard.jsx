//import React from "react";
import {
    Users,
    BookOpen,
    GraduationCap,
    ClipboardCheck,
    TrendingUp,
    UserPlus,
    Plus,
    ArrowUpRight,
    Activity,
} from "lucide-react";

const Dashboard = () => {
    // ============================================================
    // DASHBOARD STATISTICS
    // ============================================================

    const stats = [
        {
            title: "Total Students",
            value: "1,248",
            change: "+12.5%",
            description: "this month",
            icon: Users,
            accent: "blue",
        },
        {
            title: "Total Teachers",
            value: "86",
            change: "+8.2%",
            description: "this month",
            icon: GraduationCap,
            accent: "teal",
        },
        {
            title: "Total Courses",
            value: "124",
            change: "+15.4%",
            description: "this month",
            icon: BookOpen,
            accent: "blue",
        },
        {
            title: "Enrollments",
            value: "3,842",
            change: "+18.7%",
            description: "this month",
            icon: ClipboardCheck,
            accent: "teal",
        },
    ];

    // ============================================================
    // RECENT COURSES
    // ============================================================

    const recentCourses = [
        {
            name: "Full Stack Web Development",
            teacher: "Rahul Sharma",
            students: 245,
            status: "Active",
        },
        {
            name: "Data Science with Python",
            teacher: "Priya Singh",
            students: 186,
            status: "Active",
        },
        {
            name: "UI/UX Design Fundamentals",
            teacher: "Neha Gupta",
            students: 142,
            status: "Active",
        },
        {
            name: "Java Programming",
            teacher: "Amit Verma",
            students: 198,
            status: "Draft",
        },
    ];

    // ============================================================
    // RECENT STUDENTS
    // ============================================================

    const recentStudents = [
        {
            name: "Aarav Singh",
            email: "aarav@example.com",
            course: "Full Stack Development",
        },
        {
            name: "Ananya Gupta",
            email: "ananya@example.com",
            course: "Data Science",
        },
        {
            name: "Rohan Yadav",
            email: "rohan@example.com",
            course: "Java Programming",
        },
        {
            name: "Priya Mishra",
            email: "priya@example.com",
            course: "UI/UX Design",
        },
    ];

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
                dark:bg-[#07111f]
                dark:text-slate-300
                sm:px-6
                lg:px-8
            "
        >
            {/* =====================================================
                BACKGROUND GLOW
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
                    bg-blue-500/5
                    blur-[130px]
                    dark:bg-blue-400/10
                "
            />

            <div
                className="
                    pointer-events-none
                    fixed
                    -right-40
                    bottom-0
                    h-125
                    w-125
                    rounded-full
                    bg-teal-500/5
                    blur-[140px]
                    dark:bg-teal-400/10
                "
            />

            {/* =====================================================
                CONTENT
            ====================================================== */}

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
                        <p
                            className="
                                mb-1
                                font-mono
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

                        <h1
                            className="
                                text-3xl
                                font-bold
                                tracking-tight
                                text-slate-900
                                dark:text-slate-100
                                md:text-4xl
                            "
                        >
                            Organization Dashboard
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
                            Welcome back! Here's what's happening with
                            your organization today.
                        </p>
                    </div>

                    {/* HEADER ACTIONS */}

                    <div className="flex flex-wrap gap-3">

                        <button
                            type="button"
                            className="
                                flex
                                items-center
                                gap-2
                                rounded-xl
                                border
                                border-slate-200
                                bg-white
                                px-4
                                py-3
                                text-sm
                                font-semibold
                                text-slate-700
                                shadow-sm
                                transition-all
                                duration-300
                                hover:-translate-y-0.5
                                hover:border-blue-200
                                hover:text-blue-600
                                dark:border-[#1e334a]
                                dark:bg-[#0b1727]
                                dark:text-slate-300
                                dark:hover:border-blue-500/30
                                dark:hover:text-blue-400
                            "
                        >
                            <TrendingUp size={17} />
                            View Reports
                        </button>

                        <button
                            type="button"
                            className="
                                flex
                                items-center
                                gap-2
                                rounded-xl
                                bg-linear-to-r
                                from-blue-600
                                to-teal-500
                                px-4
                                py-3
                                text-sm
                                font-semibold
                                text-white
                                shadow-sm
                                transition-all
                                duration-300
                                hover:-translate-y-0.5
                                hover:from-blue-700
                                hover:to-teal-600
                            "
                        >
                            <Plus size={17} />
                            Add Course
                        </button>

                    </div>
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
                    {stats.map((stat) => {

                        const Icon = stat.icon;

                        const isTeal = stat.accent === "teal";

                        return (
                            <div
                                key={stat.title}
                                className="
                                    group
                                    rounded-2xl
                                    border
                                    border-slate-200
                                    bg-white
                                    p-5
                                    shadow-sm
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:shadow-lg
                                    hover:shadow-blue-500/5
                                    dark:border-[#1e334a]
                                    dark:bg-[#0b1727]
                                    dark:hover:border-blue-500/20
                                "
                            >
                                <div className="flex items-start justify-between">

                                    <div>
                                        <p
                                            className="
                                                text-xs
                                                font-medium
                                                text-slate-500
                                                dark:text-slate-400
                                            "
                                        >
                                            {stat.title}
                                        </p>

                                        <h2
                                            className="
                                                mt-2
                                                font-mono
                                                text-2xl
                                                font-semibold
                                                text-slate-900
                                                dark:text-slate-100
                                            "
                                        >
                                            {stat.value}
                                        </h2>

                                        <div className="mt-3 flex items-center gap-1.5">

                                            <TrendingUp
                                                size={13}
                                                className={
                                                    isTeal
                                                        ? "text-teal-600 dark:text-teal-400"
                                                        : "text-blue-600 dark:text-blue-400"
                                                }
                                            />

                                            <span
                                                className={
                                                    `text-[11px] font-semibold ${isTeal
                                                        ? "text-teal-600 dark:text-teal-400"
                                                        : "text-blue-600 dark:text-blue-400"
                                                    }`
                                                }
                                            >
                                                {stat.change}
                                            </span>

                                            <span
                                                className="
                                                    text-[11px]
                                                    text-slate-400
                                                    dark:text-slate-500
                                                "
                                            >
                                                {stat.description}
                                            </span>

                                        </div>
                                    </div>

                                    <div
                                        className={
                                            `flex h-12 w-12 items-center justify-center rounded-xl border ${isTeal
                                                ? "border-teal-200 bg-teal-50 text-teal-600 dark:border-teal-500/20 dark:bg-teal-500/10 dark:text-teal-400"
                                                : "border-blue-200 bg-blue-50 text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400"
                                            }`
                                        }
                                    >
                                        <Icon size={21} />
                                    </div>

                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* =================================================
                    MAIN GRID
                ================================================== */}

                <div
                    className="
                        grid
                        grid-cols-1
                        gap-5
                        xl:grid-cols-3
                    "
                >

                    {/* =================================================
                        RECENT COURSES
                    ================================================== */}

                    <section
                        className="
                            overflow-hidden
                            rounded-2xl
                            border
                            border-slate-200
                            bg-white
                            shadow-sm
                            xl:col-span-2
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
                                p-6
                                sm:flex-row
                                sm:items-center
                                sm:justify-between
                                dark:border-[#1e334a]
                            "
                        >
                            <div>

                                <div className="flex items-center gap-2">

                                    <span
                                        className="
                                            h-2
                                            w-2
                                            rounded-full
                                            bg-blue-500
                                        "
                                    />

                                    <p
                                        className="
                                            font-mono
                                            text-[10px]
                                            font-semibold
                                            uppercase
                                            tracking-[0.18em]
                                            text-blue-600
                                            dark:text-blue-400
                                        "
                                    >
                                        Courses
                                    </p>

                                </div>

                                <h2
                                    className="
                                        mt-1
                                        text-xl
                                        font-semibold
                                        text-slate-900
                                        dark:text-slate-100
                                    "
                                >
                                    Recent Courses
                                </h2>

                                <p
                                    className="
                                        mt-1
                                        text-xs
                                        text-slate-500
                                        dark:text-slate-400
                                    "
                                >
                                    Recently created courses.
                                </p>

                            </div>

                            <button
                                type="button"
                                className="
                                    flex
                                    items-center
                                    gap-1
                                    text-sm
                                    font-semibold
                                    text-blue-600
                                    transition
                                    hover:text-blue-700
                                    dark:text-blue-400
                                    dark:hover:text-blue-300
                                "
                            >
                                View All
                                <ArrowUpRight size={16} />
                            </button>

                        </div>

                        {/* COURSE LIST */}

                        <div className="divide-y divide-slate-200 dark:divide-[#1e334a]">

                            {recentCourses.map((course) => (

                                <div
                                    key={course.name}
                                    className="
                                        flex
                                        flex-col
                                        gap-4
                                        p-5
                                        transition
                                        hover:bg-slate-50
                                        sm:flex-row
                                        sm:items-center
                                        sm:justify-between
                                        dark:hover:bg-[#102337]
                                    "
                                >

                                    <div className="flex items-center gap-4">

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
                                                bg-blue-50
                                                text-blue-600
                                                dark:border-blue-500/20
                                                dark:bg-blue-500/10
                                                dark:text-blue-400
                                            "
                                        >
                                            <BookOpen size={20} />
                                        </div>

                                        <div>

                                            <h3
                                                className="
                                                    text-sm
                                                    font-semibold
                                                    text-slate-900
                                                    dark:text-slate-100
                                                "
                                            >
                                                {course.name}
                                            </h3>

                                            <p
                                                className="
                                                    mt-1
                                                    text-xs
                                                    text-slate-500
                                                    dark:text-slate-400
                                                "
                                            >
                                                By {course.teacher}
                                            </p>

                                        </div>

                                    </div>

                                    <div className="flex items-center gap-6">

                                        <div className="text-right">

                                            <p
                                                className="
                                                    font-mono
                                                    text-sm
                                                    font-semibold
                                                    text-slate-700
                                                    dark:text-slate-200
                                                "
                                            >
                                                {course.students}
                                            </p>

                                            <p
                                                className="
                                                    text-[11px]
                                                    text-slate-400
                                                    dark:text-slate-500
                                                "
                                            >
                                                Students
                                            </p>

                                        </div>

                                        <span
                                            className={
                                                `inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${course.status === "Active"
                                                    ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400"
                                                    : "bg-slate-100 text-slate-500 dark:bg-slate-700/40 dark:text-slate-400"
                                                }`
                                            }
                                        >

                                            <span
                                                className={
                                                    `h-1.5 w-1.5 rounded-full ${course.status === "Active"
                                                        ? "bg-emerald-500"
                                                        : "bg-slate-400"
                                                    }`
                                                }
                                            />

                                            {course.status}

                                        </span>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </section>

                    {/* =================================================
                        QUICK ACTIONS
                    ================================================== */}

                    <section
                        className="
                            rounded-2xl
                            border
                            border-slate-200
                            bg-white
                            p-6
                            shadow-sm
                            dark:border-[#1e334a]
                            dark:bg-[#0b1727]
                        "
                    >

                        <div className="flex items-center gap-2">

                            <span
                                className="
                                    h-2
                                    w-2
                                    rounded-full
                                    bg-teal-500
                                "
                            />

                            <p
                                className="
                                    font-mono
                                    text-[10px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.18em]
                                    text-teal-600
                                    dark:text-teal-400
                                "
                            >
                                Shortcuts
                            </p>

                        </div>

                        <h2
                            className="
                                mt-2
                                text-xl
                                font-semibold
                                text-slate-900
                                dark:text-slate-100
                            "
                        >
                            Quick Actions
                        </h2>

                        <p
                            className="
                                mt-1
                                text-xs
                                text-slate-500
                                dark:text-slate-400
                            "
                        >
                            Manage your organization quickly.
                        </p>

                        <div className="mt-6 space-y-3">

                            {/* CREATE COURSE */}

                            <button
                                type="button"
                                className="
                                    flex
                                    w-full
                                    items-center
                                    gap-4
                                    rounded-xl
                                    border
                                    border-slate-200
                                    bg-slate-50
                                    p-4
                                    text-left
                                    transition-all
                                    duration-300
                                    hover:border-blue-200
                                    hover:bg-blue-50
                                    dark:border-[#1e334a]
                                    dark:bg-[#102337]
                                    dark:hover:border-blue-500/30
                                    dark:hover:bg-blue-500/5
                                "
                            >

                                <div
                                    className="
                                        flex
                                        h-10
                                        w-10
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
                                    <Plus size={19} />
                                </div>

                                <div>

                                    <p
                                        className="
                                            text-sm
                                            font-semibold
                                            text-slate-800
                                            dark:text-slate-100
                                        "
                                    >
                                        Create Course
                                    </p>

                                    <p
                                        className="
                                            mt-0.5
                                            text-xs
                                            text-slate-500
                                            dark:text-slate-400
                                        "
                                    >
                                        Add a new course
                                    </p>

                                </div>

                            </button>

                            {/* ADD STUDENT */}

                            <button
                                type="button"
                                className="
                                    flex
                                    w-full
                                    items-center
                                    gap-4
                                    rounded-xl
                                    border
                                    border-slate-200
                                    bg-slate-50
                                    p-4
                                    text-left
                                    transition-all
                                    duration-300
                                    hover:border-teal-200
                                    hover:bg-teal-50
                                    dark:border-[#1e334a]
                                    dark:bg-[#102337]
                                    dark:hover:border-teal-500/30
                                    dark:hover:bg-teal-500/5
                                "
                            >

                                <div
                                    className="
                                        flex
                                        h-10
                                        w-10
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
                                    <UserPlus size={19} />
                                </div>

                                <div>

                                    <p
                                        className="
                                            text-sm
                                            font-semibold
                                            text-slate-800
                                            dark:text-slate-100
                                        "
                                    >
                                        Add Student
                                    </p>

                                    <p
                                        className="
                                            mt-0.5
                                            text-xs
                                            text-slate-500
                                            dark:text-slate-400
                                        "
                                    >
                                        Register a new student
                                    </p>

                                </div>

                            </button>

                            {/* ADD TEACHER */}

                            <button
                                type="button"
                                className="
                                    flex
                                    w-full
                                    items-center
                                    gap-4
                                    rounded-xl
                                    border
                                    border-slate-200
                                    bg-slate-50
                                    p-4
                                    text-left
                                    transition-all
                                    duration-300
                                    hover:border-blue-200
                                    hover:bg-blue-50
                                    dark:border-[#1e334a]
                                    dark:bg-[#102337]
                                    dark:hover:border-blue-500/30
                                    dark:hover:bg-blue-500/5
                                "
                            >

                                <div
                                    className="
                                        flex
                                        h-10
                                        w-10
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
                                    <GraduationCap size={19} />
                                </div>

                                <div>

                                    <p
                                        className="
                                            text-sm
                                            font-semibold
                                            text-slate-800
                                            dark:text-slate-100
                                        "
                                    >
                                        Add Teacher
                                    </p>

                                    <p
                                        className="
                                            mt-0.5
                                            text-xs
                                            text-slate-500
                                            dark:text-slate-400
                                        "
                                    >
                                        Add teaching staff
                                    </p>

                                </div>

                            </button>

                        </div>

                    </section>

                </div>

                {/* =================================================
                    BOTTOM GRID
                ================================================== */}

                <div
                    className="
                        mt-5
                        grid
                        grid-cols-1
                        gap-5
                        xl:grid-cols-2
                    "
                >

                    {/* =================================================
                        RECENT STUDENTS
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

                        <div
                            className="
                                flex
                                items-center
                                justify-between
                                border-b
                                border-slate-200
                                p-6
                                dark:border-[#1e334a]
                            "
                        >

                            <div>

                                <div className="flex items-center gap-2">

                                    <span
                                        className="
                                            h-2
                                            w-2
                                            rounded-full
                                            bg-blue-500
                                        "
                                    />

                                    <p
                                        className="
                                            font-mono
                                            text-[10px]
                                            font-semibold
                                            uppercase
                                            tracking-[0.18em]
                                            text-blue-600
                                            dark:text-blue-400
                                        "
                                    >
                                        Students
                                    </p>

                                </div>

                                <h2
                                    className="
                                        mt-1
                                        text-xl
                                        font-semibold
                                        text-slate-900
                                        dark:text-slate-100
                                    "
                                >
                                    Recent Students
                                </h2>

                                <p
                                    className="
                                        mt-1
                                        text-xs
                                        text-slate-500
                                        dark:text-slate-400
                                    "
                                >
                                    Latest students registered.
                                </p>

                            </div>

                            <button
                                type="button"
                                className="
                                    text-sm
                                    font-semibold
                                    text-blue-600
                                    transition
                                    hover:text-blue-700
                                    dark:text-blue-400
                                    dark:hover:text-blue-300
                                "
                            >
                                View All
                            </button>

                        </div>

                        <div className="divide-y divide-slate-200 dark:divide-[#1e334a]">

                            {recentStudents.map((student) => (

                                <div
                                    key={student.email}
                                    className="
                                        flex
                                        items-center
                                        justify-between
                                        gap-4
                                        p-5
                                        transition
                                        hover:bg-slate-50
                                        dark:hover:bg-[#102337]
                                    "
                                >

                                    <div className="flex items-center gap-3">

                                        <div
                                            className="
                                                flex
                                                h-10
                                                w-10
                                                items-center
                                                justify-center
                                                rounded-xl
                                                border
                                                border-teal-200
                                                bg-teal-50
                                                text-sm
                                                font-bold
                                                text-teal-600
                                                dark:border-teal-500/20
                                                dark:bg-teal-500/10
                                                dark:text-teal-400
                                            "
                                        >
                                            {student.name.charAt(0)}
                                        </div>

                                        <div>

                                            <p
                                                className="
                                                    text-sm
                                                    font-semibold
                                                    text-slate-800
                                                    dark:text-slate-100
                                                "
                                            >
                                                {student.name}
                                            </p>

                                            <p
                                                className="
                                                    mt-0.5
                                                    text-xs
                                                    text-slate-500
                                                    dark:text-slate-400
                                                "
                                            >
                                                {student.email}
                                            </p>

                                        </div>

                                    </div>

                                    <p
                                        className="
                                            hidden
                                            text-xs
                                            font-medium
                                            text-slate-500
                                            sm:block
                                            dark:text-slate-400
                                        "
                                    >
                                        {student.course}
                                    </p>

                                </div>

                            ))}

                        </div>

                    </section>

                    {/* =================================================
                        ORGANIZATION OVERVIEW
                    ================================================== */}

                    <section
                        className="
                            rounded-2xl
                            border
                            border-slate-200
                            bg-white
                            p-6
                            shadow-sm
                            dark:border-[#1e334a]
                            dark:bg-[#0b1727]
                        "
                    >

                        <div className="flex items-center justify-between">

                            <div>

                                <div className="flex items-center gap-2">

                                    <span
                                        className="
                                            h-2
                                            w-2
                                            rounded-full
                                            bg-teal-500
                                        "
                                    />

                                    <p
                                        className="
                                            font-mono
                                            text-[10px]
                                            font-semibold
                                            uppercase
                                            tracking-[0.18em]
                                            text-teal-600
                                            dark:text-teal-400
                                        "
                                    >
                                        Activity
                                    </p>

                                </div>

                                <h2
                                    className="
                                        mt-1
                                        text-xl
                                        font-semibold
                                        text-slate-900
                                        dark:text-slate-100
                                    "
                                >
                                    Organization Overview
                                </h2>

                                <p
                                    className="
                                        mt-1
                                        text-xs
                                        text-slate-500
                                        dark:text-slate-400
                                    "
                                >
                                    Current platform activity.
                                </p>

                            </div>

                            <div
                                className="
                                    flex
                                    h-10
                                    w-10
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
                                <Activity size={18} />
                            </div>

                        </div>

                        {/* PROGRESS */}

                        <div className="mt-7 space-y-6">

                            {/* STUDENT ACTIVITY */}

                            <div>

                                <div className="mb-2 flex justify-between">

                                    <span
                                        className="
                                            text-sm
                                            font-medium
                                            text-slate-600
                                            dark:text-slate-300
                                        "
                                    >
                                        Student Activity
                                    </span>

                                    <span
                                        className="
                                            font-mono
                                            text-xs
                                            font-bold
                                            text-slate-800
                                            dark:text-slate-200
                                        "
                                    >
                                        82%
                                    </span>

                                </div>

                                <div
                                    className="
                                        h-2
                                        overflow-hidden
                                        rounded-full
                                        bg-slate-100
                                        dark:bg-slate-800
                                    "
                                >
                                    <div
                                        className="
                                            h-full
                                            w-[82%]
                                            rounded-full
                                            bg-teal-500
                                        "
                                    />
                                </div>

                            </div>

                            {/* COURSE COMPLETION */}

                            <div>

                                <div className="mb-2 flex justify-between">

                                    <span
                                        className="
                                            text-sm
                                            font-medium
                                            text-slate-600
                                            dark:text-slate-300
                                        "
                                    >
                                        Course Completion
                                    </span>

                                    <span
                                        className="
                                            font-mono
                                            text-xs
                                            font-bold
                                            text-slate-800
                                            dark:text-slate-200
                                        "
                                    >
                                        68%
                                    </span>

                                </div>

                                <div
                                    className="
                                        h-2
                                        overflow-hidden
                                        rounded-full
                                        bg-slate-100
                                        dark:bg-slate-800
                                    "
                                >
                                    <div
                                        className="
                                            h-full
                                            w-[68%]
                                            rounded-full
                                            bg-blue-500
                                        "
                                    />
                                </div>

                            </div>

                            {/* TEACHER ACTIVITY */}

                            <div>

                                <div className="mb-2 flex justify-between">

                                    <span
                                        className="
                                            text-sm
                                            font-medium
                                            text-slate-600
                                            dark:text-slate-300
                                        "
                                    >
                                        Teacher Activity
                                    </span>

                                    <span
                                        className="
                                            font-mono
                                            text-xs
                                            font-bold
                                            text-slate-800
                                            dark:text-slate-200
                                        "
                                    >
                                        74%
                                    </span>

                                </div>

                                <div
                                    className="
                                        h-2
                                        overflow-hidden
                                        rounded-full
                                        bg-slate-100
                                        dark:bg-slate-800
                                    "
                                >
                                    <div
                                        className="
                                            h-full
                                            w-[74%]
                                            rounded-full
                                            bg-blue-400
                                        "
                                    />
                                </div>

                            </div>

                        </div>

                        {/* ACTIVITY MESSAGE */}

                        <div
                            className="
                                mt-8
                                rounded-xl
                                border
                                border-blue-100
                                bg-blue-50
                                p-4
                                dark:border-blue-500/10
                                dark:bg-blue-500/5
                            "
                        >

                            <div className="flex items-start gap-3">

                                <div
                                    className="
                                        mt-0.5
                                        text-blue-600
                                        dark:text-blue-400
                                    "
                                >
                                    <TrendingUp size={18} />
                                </div>

                                <div>

                                    <p
                                        className="
                                            text-sm
                                            font-semibold
                                            text-slate-800
                                            dark:text-slate-100
                                        "
                                    >
                                        Platform activity is growing
                                    </p>

                                    <p
                                        className="
                                            mt-1
                                            text-xs
                                            leading-relaxed
                                            text-slate-500
                                            dark:text-slate-400
                                        "
                                    >
                                        Student enrollments and course
                                        activity have increased this month.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </section>

                </div>

                {/* =================================================
                    FOOTER NOTE
                ================================================== */}

                <div className="mt-5 flex items-center justify-between">

                    <p
                        className="
                            font-mono
                            text-[9px]
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
                            font-mono
                            text-[9px]
                            uppercase
                            tracking-wider
                            text-slate-400
                            dark:text-slate-600
                        "
                    >
                        Organization Dashboard
                    </p>

                </div>

            </div>
        </main>
    );
};

export default Dashboard;