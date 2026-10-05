import React, { useMemo, useState } from "react";
import {
    BookOpen,
    Users,
    Building2,
    Search,
    Plus,
    MoreVertical,
    CheckCircle,
    Clock,
    Eye,
    Pencil,
    Trash2,
    TrendingUp,
    X,
} from "lucide-react";

const Courses = () => {
    // ============================================================
    // STATE
    // ============================================================

    const [search, setSearch] = useState("");
    const [openMenu, setOpenMenu] = useState(null);

    // ============================================================
    // COURSE DATA
    // ============================================================

    const courses = [
        {
            id: 1001,
            title: "Full Stack Web Development",
            instructor: "Rahul Sharma",
            organization: "Bright Future Academy",
            students: 245,
            status: "Published",
        },
        {
            id: 1002,
            title: "Java Programming",
            instructor: "Priya Verma",
            organization: "TechVision Institute",
            students: 180,
            status: "Published",
        },
        {
            id: 1003,
            title: "Database Management System",
            instructor: "Amit Singh",
            organization: "SkillHub Learning",
            students: 126,
            status: "Pending",
        },
        {
            id: 1004,
            title: "Python for Beginners",
            instructor: "Neha Gupta",
            organization: "Knowledge Point",
            students: 210,
            status: "Published",
        },
    ];

    // ============================================================
    // FILTER
    // ============================================================

    const filteredCourses = useMemo(() => {
        const value = search.toLowerCase().trim();

        if (!value) {
            return courses;
        }

        return courses.filter((course) => {
            return (
                course.title.toLowerCase().includes(value) ||
                course.instructor.toLowerCase().includes(value) ||
                course.organization.toLowerCase().includes(value) ||
                course.status.toLowerCase().includes(value)
            );
        });
    }, [search]);

    // ============================================================
    // STATISTICS
    // ============================================================

    const totalCourses = 1245;
    const publishedCourses = 1180;
    const pendingCourses = 65;
    const enrolledStudents = 18420;

    // ============================================================
    // CLOSE MENU WHEN CLICKING ACTION
    // ============================================================

    const handleAction = (action, course) => {
        console.log(`${action}:`, course);
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
                text-slate-800

                dark:bg-[#07111f]
                dark:text-slate-200

                px-4
                py-6
                sm:px-6
                lg:px-8

                transition-colors
                duration-300
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
                    h-[420px]
                    w-[420px]
                    rounded-full
                    bg-blue-500/[0.05]
                    blur-[130px]

                    dark:bg-blue-500/[0.08]
                "
            />

            <div
                className="
                    pointer-events-none
                    fixed
                    -right-40
                    bottom-0
                    h-[420px]
                    w-[420px]
                    rounded-full
                    bg-teal-500/[0.05]
                    blur-[140px]

                    dark:bg-teal-500/[0.07]
                "
            />

            {/* =====================================================
                CONTENT
            ====================================================== */}

            <div className="relative z-10 mx-auto max-w-7xl">

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

                        {/* LABEL */}

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
                                    h-2
                                    w-2
                                    rounded-full
                                    bg-blue-600
                                    dark:bg-teal-400
                                "
                            />

                            <p
                                className="
                                    font-mono
                                    text-[10px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.2em]

                                    text-blue-700
                                    dark:text-teal-400
                                "
                            >
                                Course Management
                            </p>
                        </div>

                        {/* TITLE */}

                        <h1
                            className="
                                text-3xl
                                font-bold
                                tracking-tight

                                text-slate-950
                                dark:text-white

                                md:text-4xl
                            "
                        >
                            Courses
                        </h1>

                        {/* DESCRIPTION */}

                        <p
                            className="
                                mt-2
                                max-w-xl
                                text-sm
                                leading-relaxed

                                text-slate-600
                                dark:text-slate-400
                            "
                        >
                            Manage and monitor courses across the
                            Shiyora learning platform.
                        </p>

                    </div>

                    {/* =================================================
                        ADD COURSE
                    ================================================== */}

                    <button
                        type="button"
                        className="
                            group
                            inline-flex
                            items-center
                            justify-center
                            gap-2

                            rounded-xl

                            bg-gradient-to-r
                            from-blue-600
                            to-teal-600

                            px-5
                            py-3

                            text-sm
                            font-semibold
                            text-white

                            shadow-lg
                            shadow-blue-500/20

                            transition-all
                            duration-300

                            hover:-translate-y-0.5
                            hover:from-blue-700
                            hover:to-teal-700
                            hover:shadow-xl
                            hover:shadow-blue-500/25

                            active:scale-[0.98]

                            focus-visible:outline-none
                            focus-visible:ring-2
                            focus-visible:ring-blue-500
                            focus-visible:ring-offset-2

                            dark:focus-visible:ring-offset-[#07111f]
                        "
                    >
                        <Plus
                            size={18}
                            strokeWidth={2.3}
                        />

                        Add Course

                        <span
                            className="
                                text-lg
                                transition-transform
                                duration-300
                                group-hover:translate-x-1
                            "
                        >
                            →
                        </span>
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

                    {/* TOTAL COURSES */}

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
                            hover:shadow-lg

                            dark:border-slate-800
                            dark:bg-[#0b1727]
                            dark:hover:border-blue-500/30
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
                                    Total Courses
                                </p>

                                <h2
                                    className="
                                        mt-2
                                        font-mono
                                        text-2xl
                                        font-bold
                                        text-slate-950
                                        dark:text-white
                                    "
                                >
                                    {totalCourses.toLocaleString()}
                                </h2>

                                <p
                                    className="
                                        mt-1
                                        text-[11px]
                                        text-slate-500
                                        dark:text-slate-500
                                    "
                                >
                                    Available on platform
                                </p>
                            </div>

                            <div
                                className="
                                    flex
                                    h-11
                                    w-11
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
                                <BookOpen size={21} />
                            </div>
                        </div>

                        <div
                            className="
                                mt-4
                                h-1
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
                                    bg-gradient-to-r
                                    from-blue-600
                                    to-teal-500
                                "
                            />
                        </div>
                    </div>

                    {/* PUBLISHED */}

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
                            hover:shadow-lg

                            dark:border-slate-800
                            dark:bg-[#0b1727]
                            dark:hover:border-teal-500/30
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
                                    Published
                                </p>

                                <h2
                                    className="
                                        mt-2
                                        font-mono
                                        text-2xl
                                        font-bold
                                        text-slate-950
                                        dark:text-white
                                    "
                                >
                                    {publishedCourses.toLocaleString()}
                                </h2>

                                <p
                                    className="
                                        mt-1
                                        text-[11px]
                                        text-teal-600
                                        dark:text-teal-400
                                    "
                                >
                                    Live courses
                                </p>
                            </div>

                            <div
                                className="
                                    flex
                                    h-11
                                    w-11
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
                                <CheckCircle size={21} />
                            </div>
                        </div>

                        <div
                            className="
                                mt-4
                                h-1
                                overflow-hidden
                                rounded-full
                                bg-slate-100
                                dark:bg-slate-800
                            "
                        >
                            <div
                                className="
                                    h-full
                                    w-[94%]
                                    rounded-full
                                    bg-teal-500
                                "
                            />
                        </div>
                    </div>

                    {/* PENDING */}

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
                            hover:border-amber-200
                            hover:shadow-lg

                            dark:border-slate-800
                            dark:bg-[#0b1727]
                            dark:hover:border-amber-500/30
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
                                    Pending Review
                                </p>

                                <h2
                                    className="
                                        mt-2
                                        font-mono
                                        text-2xl
                                        font-bold
                                        text-slate-950
                                        dark:text-white
                                    "
                                >
                                    {pendingCourses}
                                </h2>

                                <p
                                    className="
                                        mt-1
                                        text-[11px]
                                        text-amber-600
                                        dark:text-amber-400
                                    "
                                >
                                    Awaiting approval
                                </p>
                            </div>

                            <div
                                className="
                                    flex
                                    h-11
                                    w-11
                                    items-center
                                    justify-center
                                    rounded-xl

                                    border
                                    border-amber-200
                                    bg-amber-50
                                    text-amber-600

                                    dark:border-amber-500/20
                                    dark:bg-amber-500/10
                                    dark:text-amber-400
                                "
                            >
                                <Clock size={21} />
                            </div>
                        </div>

                        <div
                            className="
                                mt-4
                                h-1
                                overflow-hidden
                                rounded-full
                                bg-slate-100
                                dark:bg-slate-800
                            "
                        >
                            <div
                                className="
                                    h-full
                                    w-[18%]
                                    rounded-full
                                    bg-amber-500
                                "
                            />
                        </div>
                    </div>

                    {/* STUDENTS */}

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
                            hover:shadow-lg

                            dark:border-slate-800
                            dark:bg-[#0b1727]
                            dark:hover:border-blue-500/30
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
                                    Enrolled Students
                                </p>

                                <h2
                                    className="
                                        mt-2
                                        font-mono
                                        text-2xl
                                        font-bold
                                        text-slate-950
                                        dark:text-white
                                    "
                                >
                                    {enrolledStudents.toLocaleString()}
                                </h2>

                                <p
                                    className="
                                        mt-1
                                        text-[11px]
                                        text-slate-500
                                        dark:text-slate-500
                                    "
                                >
                                    Across organizations
                                </p>
                            </div>

                            <div
                                className="
                                    flex
                                    h-11
                                    w-11
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
                                <Users size={21} />
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

                        dark:border-slate-800
                        dark:bg-[#0b1727]
                    "
                >
                    <div className="relative max-w-lg">

                        <Search
                            size={18}
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
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search courses..."
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
                                font-medium

                                text-slate-900

                                outline-none

                                placeholder:text-slate-400

                                transition

                                focus:border-blue-500
                                focus:ring-4
                                focus:ring-blue-500/10

                                dark:border-slate-700
                                dark:bg-[#07111f]
                                dark:text-white
                                dark:placeholder:text-slate-600
                                dark:focus:border-teal-500
                                dark:focus:ring-teal-500/10
                            "
                        />
                    </div>
                </div>

                {/* =================================================
                    COURSE TABLE
                ================================================== */}

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

                    {/* TABLE HEADER */}

                    <div
                        className="
                            border-b
                            border-slate-200

                            p-6

                            dark:border-slate-800
                        "
                    >
                        <div
                            className="
                                flex
                                flex-col
                                gap-3

                                sm:flex-row
                                sm:items-center
                                sm:justify-between
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
                                            font-mono
                                            text-[10px]
                                            font-semibold
                                            uppercase
                                            tracking-[0.18em]

                                            text-blue-700
                                            dark:text-teal-400
                                        "
                                    >
                                        Course Register
                                    </p>

                                </div>

                                <h2
                                    className="
                                        mt-2
                                        text-xl
                                        font-bold

                                        text-slate-950
                                        dark:text-white
                                    "
                                >
                                    All Courses
                                </h2>

                                <p
                                    className="
                                        mt-1
                                        text-sm

                                        text-slate-600
                                        dark:text-slate-400
                                    "
                                >
                                    Courses available across organizations
                                </p>

                            </div>

                            <div
                                className="
                                    inline-flex
                                    w-fit
                                    items-center
                                    gap-2
                                    rounded-lg

                                    bg-slate-100
                                    px-3
                                    py-2

                                    font-mono
                                    text-xs
                                    font-semibold

                                    text-slate-600

                                    dark:bg-slate-800
                                    dark:text-slate-400
                                "
                            >
                                <TrendingUp size={14} />

                                {filteredCourses.length} RESULTS
                            </div>
                        </div>
                    </div>

                    {/* TABLE */}

                    <div className="overflow-x-auto">

                        <table className="w-full min-w-[950px]">

                            {/* HEAD */}

                            <thead
                                className="
                                    border-b
                                    border-slate-200
                                    bg-slate-50

                                    dark:border-slate-800
                                    dark:bg-[#0f1d2f]
                                "
                            >
                                <tr>

                                    <th
                                        className="
                                            px-6
                                            py-4
                                            text-left

                                            font-mono
                                            text-[10px]
                                            font-semibold
                                            uppercase
                                            tracking-wider

                                            text-slate-500

                                            dark:text-slate-400
                                        "
                                    >
                                        Course
                                    </th>

                                    <th
                                        className="
                                            px-6
                                            py-4
                                            text-left

                                            font-mono
                                            text-[10px]
                                            font-semibold
                                            uppercase
                                            tracking-wider

                                            text-slate-500

                                            dark:text-slate-400
                                        "
                                    >
                                        Instructor
                                    </th>

                                    <th
                                        className="
                                            px-6
                                            py-4
                                            text-left

                                            font-mono
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

                                            font-mono
                                            text-[10px]
                                            font-semibold
                                            uppercase
                                            tracking-wider

                                            text-slate-500

                                            dark:text-slate-400
                                        "
                                    >
                                        Students
                                    </th>

                                    <th
                                        className="
                                            px-6
                                            py-4
                                            text-left

                                            font-mono
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

                                            font-mono
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

                            {/* BODY */}

                            <tbody
                                className="
                                    divide-y
                                    divide-slate-100

                                    dark:divide-slate-800
                                "
                            >

                                {filteredCourses.length > 0 ? (

                                    filteredCourses.map((course) => (

                                        <tr
                                            key={course.id}
                                            className="
                                                transition-colors
                                                duration-200

                                                hover:bg-slate-50

                                                dark:hover:bg-slate-800/40
                                            "
                                        >

                                            {/* COURSE */}

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
                                                            bg-blue-50
                                                            text-blue-600

                                                            dark:border-blue-500/20
                                                            dark:bg-blue-500/10
                                                            dark:text-blue-400
                                                        "
                                                    >
                                                        <BookOpen size={19} />
                                                    </div>

                                                    <div>

                                                        <p
                                                            className="
                                                                font-semibold
                                                                text-sm

                                                                text-slate-900

                                                                dark:text-white
                                                            "
                                                        >
                                                            {course.title}
                                                        </p>

                                                        <p
                                                            className="
                                                                mt-1
                                                                font-mono
                                                                text-[10px]

                                                                text-slate-500

                                                                dark:text-slate-500
                                                            "
                                                        >
                                                            COURSE #{course.id}
                                                        </p>

                                                    </div>

                                                </div>

                                            </td>

                                            {/* INSTRUCTOR */}

                                            <td
                                                className="
                                                    px-6
                                                    py-5
                                                    text-sm
                                                    font-medium

                                                    text-slate-700

                                                    dark:text-slate-300
                                                "
                                            >
                                                {course.instructor}
                                            </td>

                                            {/* ORGANIZATION */}

                                            <td className="px-6 py-5">

                                                <div
                                                    className="
                                                        flex
                                                        items-center
                                                        gap-2

                                                        text-sm
                                                        font-medium

                                                        text-slate-700

                                                        dark:text-slate-300
                                                    "
                                                >
                                                    <Building2
                                                        size={16}
                                                        className="
                                                            shrink-0
                                                            text-slate-400
                                                            dark:text-slate-500
                                                        "
                                                    />

                                                    {course.organization}
                                                </div>

                                            </td>

                                            {/* STUDENTS */}

                                            <td className="px-6 py-5">

                                                <div
                                                    className="
                                                        flex
                                                        items-center
                                                        gap-2

                                                        font-mono
                                                        text-xs
                                                        font-semibold

                                                        text-slate-700

                                                        dark:text-slate-300
                                                    "
                                                >
                                                    <Users
                                                        size={15}
                                                        className="
                                                            text-slate-400
                                                            dark:text-slate-500
                                                        "
                                                    />

                                                    {course.students}
                                                </div>

                                            </td>

                                            {/* STATUS */}

                                            <td className="px-6 py-5">

                                                <span
                                                    className={`
                                                        inline-flex
                                                        items-center
                                                        gap-1.5

                                                        rounded-full
                                                        border

                                                        px-3
                                                        py-1

                                                        font-mono
                                                        text-[10px]
                                                        font-semibold
                                                        uppercase
                                                        tracking-wide

                                                        ${course.status ===
                                                            "Published"
                                                            ? `
                                                                    border-teal-200
                                                                    bg-teal-50
                                                                    text-teal-700

                                                                    dark:border-teal-500/20
                                                                    dark:bg-teal-500/10
                                                                    dark:text-teal-400
                                                                `
                                                            : `
                                                                    border-amber-200
                                                                    bg-amber-50
                                                                    text-amber-700

                                                                    dark:border-amber-500/20
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

                                                            ${course.status ===
                                                                "Published"
                                                                ? "bg-teal-500"
                                                                : "bg-amber-500"
                                                            }
                                                        `}
                                                    />

                                                    {course.status}
                                                </span>

                                            </td>

                                            {/* ACTION */}

                                            <td
                                                className="
                                                    relative
                                                    px-6
                                                    py-5
                                                    text-right
                                                "
                                            >

                                                <button
                                                    type="button"
                                                    aria-label={`Actions for ${course.title}`}
                                                    onClick={() =>
                                                        setOpenMenu(
                                                            openMenu === course.id
                                                                ? null
                                                                : course.id
                                                        )
                                                    }
                                                    className="
                                                        rounded-lg
                                                        p-2

                                                        text-slate-400

                                                        transition

                                                        hover:bg-slate-100
                                                        hover:text-blue-600

                                                        dark:text-slate-500
                                                        dark:hover:bg-slate-800
                                                        dark:hover:text-teal-400
                                                    "
                                                >
                                                    <MoreVertical size={19} />
                                                </button>

                                                {/* DROPDOWN */}

                                                {openMenu === course.id && (

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

                                                            dark:border-slate-700
                                                            dark:bg-[#102337]
                                                        "
                                                    >

                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                handleAction(
                                                                    "View",
                                                                    course
                                                                )
                                                            }
                                                            className="
                                                                flex
                                                                w-full
                                                                items-center
                                                                gap-2

                                                                px-4
                                                                py-2.5

                                                                text-sm
                                                                font-medium

                                                                text-slate-700

                                                                transition

                                                                hover:bg-slate-50
                                                                hover:text-blue-600

                                                                dark:text-slate-300
                                                                dark:hover:bg-slate-800
                                                                dark:hover:text-teal-400
                                                            "
                                                        >
                                                            <Eye size={15} />
                                                            View
                                                        </button>

                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                handleAction(
                                                                    "Edit",
                                                                    course
                                                                )
                                                            }
                                                            className="
                                                                flex
                                                                w-full
                                                                items-center
                                                                gap-2

                                                                px-4
                                                                py-2.5

                                                                text-sm
                                                                font-medium

                                                                text-slate-700

                                                                transition

                                                                hover:bg-slate-50
                                                                hover:text-blue-600

                                                                dark:text-slate-300
                                                                dark:hover:bg-slate-800
                                                                dark:hover:text-teal-400
                                                            "
                                                        >
                                                            <Pencil size={15} />
                                                            Edit
                                                        </button>

                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                handleAction(
                                                                    "Delete",
                                                                    course
                                                                )
                                                            }
                                                            className="
                                                                flex
                                                                w-full
                                                                items-center
                                                                gap-2

                                                                px-4
                                                                py-2.5

                                                                text-sm
                                                                font-medium

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
                                    ))

                                ) : (

                                    <tr>
                                        <td
                                            colSpan="6"
                                            className="px-6 py-16 text-center"
                                        >

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
                                                <BookOpen size={25} />
                                            </div>

                                            <h3
                                                className="
                                                    mt-4
                                                    text-base
                                                    font-semibold

                                                    text-slate-900

                                                    dark:text-white
                                                "
                                            >
                                                No courses found
                                            </h3>

                                            <p
                                                className="
                                                    mt-1
                                                    text-sm

                                                    text-slate-500

                                                    dark:text-slate-400
                                                "
                                            >
                                                Try changing your search.
                                            </p>

                                        </td>
                                    </tr>
                                )}

                            </tbody>
                        </table>
                    </div>
                </section>

                {/* =================================================
                    FOOTER NOTE
                ================================================== */}

                <div
                    className="
                        mt-5
                        flex
                        flex-col
                        gap-2

                        text-xs

                        text-slate-500

                        sm:flex-row
                        sm:items-center
                        sm:justify-between

                        dark:text-slate-500
                    "
                >
                    <p>
                        Shiyora · Course Management
                    </p>

                    <p className="font-mono uppercase tracking-wider">
                        Keep learning. Keep growing.
                    </p>
                </div>

            </div>
        </main>
    );
};

export default Courses; 