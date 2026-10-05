import { useMemo, useState } from "react";

import {
    GraduationCap,
    UserPlus,
    Search,
    MoreVertical,
    CheckCircle2,
    XCircle,
    TrendingUp,
    Eye,
    Trash2,
} from "lucide-react";

const Enrollments = () => {
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");
    const [courseFilter, setCourseFilter] = useState("All");
    const [openMenu, setOpenMenu] = useState(null);

    // ============================================================
    // ENROLLMENT DATA
    // ============================================================

    const enrollments = [
        {
            id: 1,
            student: "Ananya Rao",
            email: "ananya.rao@example.com",
            course: "Full Stack Web Development",
            enrolledOn: "12 Jan 2026",
            progress: 78,
            status: "Active",
        },
        {
            id: 2,
            student: "Karan Mehta",
            email: "karan.mehta@example.com",
            course: "UI/UX Design Fundamentals",
            enrolledOn: "03 Feb 2026",
            progress: 100,
            status: "Completed",
        },
        {
            id: 3,
            student: "Sneha Iyer",
            email: "sneha.iyer@example.com",
            course: "Java Programming",
            enrolledOn: "18 Feb 2026",
            progress: 42,
            status: "Active",
        },
        {
            id: 4,
            student: "Rohit Malhotra",
            email: "rohit.malhotra@example.com",
            course: "Python for Beginners",
            enrolledOn: "27 Feb 2026",
            progress: 0,
            status: "Pending",
        },
        {
            id: 5,
            student: "Divya Nair",
            email: "divya.nair@example.com",
            course: "Digital Marketing",
            enrolledOn: "05 Mar 2026",
            progress: 15,
            status: "Dropped",
        },
        {
            id: 6,
            student: "Aditya Kapoor",
            email: "aditya.kapoor@example.com",
            course: "Database Management System",
            enrolledOn: "14 Mar 2026",
            progress: 64,
            status: "Active",
        },
        {
            id: 7,
            student: "Meera Joshi",
            email: "meera.joshi@example.com",
            course: "Full Stack Web Development",
            enrolledOn: "22 Mar 2026",
            progress: 100,
            status: "Completed",
        },
    ];

    // ============================================================
    // COURSE OPTIONS
    // ============================================================

    const courseOptions = [
        "All",
        ...Array.from(
            new Set(enrollments.map((item) => item.course))
        ),
    ];

    // ============================================================
    // FILTERING
    // ============================================================

    const filteredEnrollments = useMemo(() => {
        const searchText = search.toLowerCase().trim();

        return enrollments.filter((item) => {
            const matchesSearch =
                item.student.toLowerCase().includes(searchText) ||
                item.email.toLowerCase().includes(searchText) ||
                item.course.toLowerCase().includes(searchText);

            const matchesStatus =
                statusFilter === "All" ||
                item.status === statusFilter;

            const matchesCourse =
                courseFilter === "All" ||
                item.course === courseFilter;

            return (
                matchesSearch &&
                matchesStatus &&
                matchesCourse
            );
        });
    }, [search, statusFilter, courseFilter]);

    // ============================================================
    // STATISTICS
    // ============================================================

    const totalEnrollments = enrollments.length;

    const activeEnrollments = enrollments.filter(
        (item) => item.status === "Active"
    ).length;

    const completedEnrollments = enrollments.filter(
        (item) => item.status === "Completed"
    ).length;

    const droppedEnrollments = enrollments.filter(
        (item) => item.status === "Dropped"
    ).length;

    // ============================================================
    // STATUS BADGE STYLE
    // ============================================================

    const getStatusStyle = (status) => {
        if (status === "Active") {
            return `
                bg-teal-50
                text-teal-700
                dark:bg-teal-500/10
                dark:text-teal-300
            `;
        }

        if (status === "Completed") {
            return `
                bg-blue-50
                text-blue-700
                dark:bg-blue-500/10
                dark:text-blue-300
            `;
        }

        if (status === "Pending") {
            return `
                bg-amber-50
                text-amber-700
                dark:bg-amber-500/10
                dark:text-amber-300
            `;
        }

        return `
            bg-red-50
            text-red-700
            dark:bg-red-500/10
            dark:text-red-300
        `;
    };

    const getStatusDot = (status) => {
        if (status === "Active") {
            return "bg-teal-500 dark:bg-teal-400";
        }

        if (status === "Completed") {
            return "bg-blue-500 dark:bg-blue-400";
        }

        if (status === "Pending") {
            return "bg-amber-500 dark:bg-amber-400";
        }

        return "bg-red-500 dark:bg-red-400";
    };

    // ============================================================
    // ACTIONS
    // ============================================================

    const handleEnroll = () => {
        alert(
            "Enroll Student functionality will be connected later."
        );
    };

    const handleView = (item) => {
        setOpenMenu(null);

        alert(
            `View enrollment: ${item.student} — ${item.course}`
        );
    };

    const handleRemove = (item) => {
        setOpenMenu(null);

        alert(
            `Remove enrollment: ${item.student} — ${item.course}`
        );
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
                    dark:bg-blue-500/10
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
                    dark:bg-teal-500/10
                "
            />

            <div className="relative z-10">

                {/* =================================================
                    HEADER
                ================================================== */}

                <div
                    className="
                        mb-7
                        flex
                        flex-col
                        gap-4
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
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
                                dark:text-blue-400
                            "
                        >
                            Administration
                        </p>

                        <h1
                            className="
                                text-2xl
                                font-bold
                                tracking-tight
                                text-slate-900
                                dark:text-slate-50
                                sm:text-3xl
                            "
                        >
                            Enrollments
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
                            Track which students are enrolled in which
                            courses, and follow their progress.
                        </p>
                    </div>

                    {/* ENROLL STUDENT */}

                    <button
                        type="button"
                        onClick={handleEnroll}
                        className="
                            inline-flex
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            bg-blue-600
                            px-5
                            py-3
                            text-sm
                            font-semibold
                            text-white
                            shadow-lg
                            shadow-blue-600/15
                            transition-all
                            duration-300
                            hover:-translate-y-0.5
                            hover:bg-blue-700
                            hover:shadow-blue-600/25
                            focus-visible:outline-2
                            focus-visible:outline-offset-2
                            focus-visible:outline-blue-600
                            dark:bg-blue-500
                            dark:hover:bg-blue-400
                            dark:focus-visible:outline-blue-400
                        "
                    >
                        <UserPlus size={18} />
                        Enroll Student
                    </button>
                </div>

                {/* =================================================
                    STAT CARDS
                ================================================== */}

                <div
                    className="
                        mb-7
                        grid
                        grid-cols-1
                        gap-4
                        sm:grid-cols-2
                        xl:grid-cols-4
                    "
                >

                    {/* TOTAL ENROLLMENTS */}

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
                                        text-sm
                                        text-slate-500
                                        dark:text-slate-400
                                    "
                                >
                                    Total Enrollments
                                </p>

                                <h2
                                    className="
                                        mt-2
                                        font-mono
                                        text-2xl
                                        font-bold
                                        text-slate-900
                                        dark:text-slate-50
                                    "
                                >
                                    {totalEnrollments}
                                </h2>

                                <p
                                    className="
                                        mt-1
                                        text-xs
                                        text-slate-400
                                        dark:text-slate-500
                                    "
                                >
                                    Across all courses
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
                                <GraduationCap size={23} />
                            </div>
                        </div>
                    </div>

                    {/* ACTIVE */}

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
                                        text-sm
                                        text-slate-500
                                        dark:text-slate-400
                                    "
                                >
                                    Active
                                </p>

                                <h2
                                    className="
                                        mt-2
                                        font-mono
                                        text-2xl
                                        font-bold
                                        text-slate-900
                                        dark:text-slate-50
                                    "
                                >
                                    {activeEnrollments}
                                </h2>

                                <p
                                    className="
                                        mt-1
                                        text-xs
                                        text-teal-600
                                        dark:text-teal-400
                                    "
                                >
                                    Currently learning
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
                                <TrendingUp size={23} />
                            </div>
                        </div>
                    </div>

                    {/* COMPLETED */}

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
                                        text-sm
                                        text-slate-500
                                        dark:text-slate-400
                                    "
                                >
                                    Completed
                                </p>

                                <h2
                                    className="
                                        mt-2
                                        font-mono
                                        text-2xl
                                        font-bold
                                        text-slate-900
                                        dark:text-slate-50
                                    "
                                >
                                    {completedEnrollments}
                                </h2>

                                <p
                                    className="
                                        mt-1
                                        text-xs
                                        text-slate-400
                                        dark:text-slate-500
                                    "
                                >
                                    Finished the course
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
                                <CheckCircle2 size={23} />
                            </div>
                        </div>
                    </div>

                    {/* DROPPED */}

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
                            hover:border-red-200
                            hover:shadow-md
                            dark:border-[#1e334a]
                            dark:bg-[#0b1727]
                            dark:hover:border-red-500/30
                        "
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p
                                    className="
                                        text-sm
                                        text-slate-500
                                        dark:text-slate-400
                                    "
                                >
                                    Dropped
                                </p>

                                <h2
                                    className="
                                        mt-2
                                        font-mono
                                        text-2xl
                                        font-bold
                                        text-slate-900
                                        dark:text-slate-50
                                    "
                                >
                                    {droppedEnrollments}
                                </h2>

                                <p
                                    className="
                                        mt-1
                                        text-xs
                                        text-red-600
                                        dark:text-red-400
                                    "
                                >
                                    Requires follow-up
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
                                    border-red-200
                                    bg-red-50
                                    text-red-600
                                    dark:border-red-500/20
                                    dark:bg-red-500/10
                                    dark:text-red-400
                                "
                            >
                                <XCircle size={23} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* =================================================
                    SEARCH + FILTERS
                ================================================== */}

                <div
                    className="
                        mb-6
                        flex
                        flex-col
                        gap-4
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        p-4
                        shadow-sm
                        lg:flex-row
                        lg:items-center
                        lg:justify-between
                        dark:border-[#1e334a]
                        dark:bg-[#0b1727]
                    "
                >
                    {/* SEARCH */}

                    <div className="relative w-full lg:max-w-md">
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
                            placeholder="Search student, email or course..."
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
                                text-slate-700
                                outline-none
                                transition
                                placeholder:text-slate-400
                                focus:border-blue-500
                                focus:ring-2
                                focus:ring-blue-500/10
                                dark:border-[#1e334a]
                                dark:bg-[#102337]
                                dark:text-slate-200
                                dark:placeholder:text-slate-500
                                dark:focus:border-blue-400
                                dark:focus:ring-blue-400/10
                            "
                        />
                    </div>

                    {/* FILTERS */}

                    <div
                        className="
                            grid
                            grid-cols-1
                            gap-3
                            sm:grid-cols-2
                            lg:w-auto
                            lg:min-w-105
                        "
                    >
                        <select
                            value={courseFilter}
                            onChange={(e) =>
                                setCourseFilter(e.target.value)
                            }
                            className="
                                rounded-xl
                                border
                                border-slate-200
                                bg-slate-50
                                px-4
                                py-3
                                text-sm
                                font-medium
                                text-slate-700
                                outline-none
                                transition
                                focus:border-blue-500
                                focus:ring-2
                                focus:ring-blue-500/10
                                dark:border-[#1e334a]
                                dark:bg-[#102337]
                                dark:text-slate-200
                                dark:focus:border-blue-400
                            "
                        >
                            {courseOptions.map((course) => (
                                <option
                                    key={course}
                                    value={course}
                                >
                                    {course === "All"
                                        ? "All Courses"
                                        : course}
                                </option>
                            ))}
                        </select>

                        <select
                            value={statusFilter}
                            onChange={(e) =>
                                setStatusFilter(e.target.value)
                            }
                            className="
                                rounded-xl
                                border
                                border-slate-200
                                bg-slate-50
                                px-4
                                py-3
                                text-sm
                                font-medium
                                text-slate-700
                                outline-none
                                transition
                                focus:border-blue-500
                                focus:ring-2
                                focus:ring-blue-500/10
                                dark:border-[#1e334a]
                                dark:bg-[#102337]
                                dark:text-slate-200
                                dark:focus:border-blue-400
                            "
                        >
                            <option value="All">
                                All Status
                            </option>

                            <option value="Active">
                                Active
                            </option>

                            <option value="Completed">
                                Completed
                            </option>

                            <option value="Pending">
                                Pending
                            </option>

                            <option value="Dropped">
                                Dropped
                            </option>
                        </select>
                    </div>
                </div>

                {/* =================================================
                    ENROLLMENTS TABLE
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
                            border-b
                            border-slate-200
                            bg-slate-50
                            px-5
                            py-5
                            sm:px-6
                            dark:border-[#1e334a]
                            dark:bg-[#102337]
                        "
                    >
                        <div className="flex items-center gap-2">
                            <span
                                className="
                                    h-2
                                    w-2
                                    rounded-full
                                    bg-blue-600
                                    dark:bg-blue-400
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
                                Enrollment Management
                            </p>
                        </div>

                        <h2
                            className="
                                mt-1
                                text-lg
                                font-bold
                                text-slate-900
                                dark:text-slate-50
                            "
                        >
                            Enrollment Records
                        </h2>

                        <p
                            className="
                                mt-1
                                text-sm
                                text-slate-500
                                dark:text-slate-400
                            "
                        >
                            {filteredEnrollments.length} of{" "}
                            {totalEnrollments} enrollments shown
                        </p>
                    </div>

                    {/* EMPTY STATE */}

                    {filteredEnrollments.length === 0 ? (
                        <div
                            className="
                                flex
                                flex-col
                                items-center
                                justify-center
                                gap-3
                                px-6
                                py-16
                                text-center
                            "
                        >
                            <div
                                className="
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
                                <GraduationCap size={26} />
                            </div>

                            <p
                                className="
                                    text-base
                                    font-semibold
                                    text-slate-900
                                    dark:text-slate-50
                                "
                            >
                                No enrollments found
                            </p>

                            <p
                                className="
                                    max-w-xs
                                    text-sm
                                    text-slate-500
                                    dark:text-slate-400
                                "
                            >
                                Try adjusting your search or filters
                                to find what you're looking for.
                            </p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-250">

                                {/* TABLE HEADER */}

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
                                                text-xs
                                                font-bold
                                                uppercase
                                                tracking-wider
                                                text-slate-500
                                                dark:text-slate-400
                                            "
                                        >
                                            Student
                                        </th>

                                        <th
                                            className="
                                                px-6
                                                py-4
                                                text-left
                                                text-xs
                                                font-bold
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
                                                text-xs
                                                font-bold
                                                uppercase
                                                tracking-wider
                                                text-slate-500
                                                dark:text-slate-400
                                            "
                                        >
                                            Enrolled On
                                        </th>

                                        <th
                                            className="
                                                px-6
                                                py-4
                                                text-left
                                                text-xs
                                                font-bold
                                                uppercase
                                                tracking-wider
                                                text-slate-500
                                                dark:text-slate-400
                                            "
                                        >
                                            Progress
                                        </th>

                                        <th
                                            className="
                                                px-6
                                                py-4
                                                text-left
                                                text-xs
                                                font-bold
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
                                                text-xs
                                                font-bold
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

                                {/* TABLE BODY */}

                                <tbody
                                    className="
                                        divide-y
                                        divide-slate-100
                                        dark:divide-[#1e334a]
                                    "
                                >
                                    {filteredEnrollments.map((item) => (
                                        <tr
                                            key={item.id}
                                            className="
                                                transition-colors
                                                hover:bg-slate-50
                                                dark:hover:bg-[#102337]/60
                                            "
                                        >
                                            {/* STUDENT */}

                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-3">
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
                                                            text-sm
                                                            font-bold
                                                            text-blue-700
                                                            dark:border-blue-500/20
                                                            dark:bg-blue-500/10
                                                            dark:text-blue-300
                                                        "
                                                    >
                                                        {item.student.charAt(
                                                            0
                                                        )}
                                                    </div>

                                                    <div>
                                                        <p
                                                            className="
                                                                font-semibold
                                                                text-slate-900
                                                                dark:text-slate-100
                                                            "
                                                        >
                                                            {item.student}
                                                        </p>

                                                        <p
                                                            className="
                                                                mt-1
                                                                text-xs
                                                                text-slate-500
                                                                dark:text-slate-400
                                                            "
                                                        >
                                                            {item.email}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>

                                            {/* COURSE */}

                                            <td className="px-6 py-5">
                                                <p
                                                    className="
                                                        text-sm
                                                        font-medium
                                                        text-slate-700
                                                        dark:text-slate-200
                                                    "
                                                >
                                                    {item.course}
                                                </p>
                                            </td>

                                            {/* ENROLLED ON */}

                                            <td className="px-6 py-5">
                                                <p
                                                    className="
                                                        text-sm
                                                        text-slate-600
                                                        dark:text-slate-300
                                                    "
                                                >
                                                    {item.enrolledOn}
                                                </p>
                                            </td>

                                            {/* PROGRESS */}

                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-2">
                                                    <div
                                                        className="
                                                            h-1.5
                                                            w-24
                                                            overflow-hidden
                                                            rounded-full
                                                            bg-slate-200
                                                            dark:bg-slate-700
                                                        "
                                                    >
                                                        <div
                                                            className="
                                                                h-full
                                                                rounded-full
                                                                bg-gradient-to-r
                                                                from-blue-600
                                                                to-teal-500
                                                                dark:from-blue-500
                                                                dark:to-teal-400
                                                            "
                                                            style={{
                                                                width: `${item.progress}%`,
                                                            }}
                                                        />
                                                    </div>

                                                    <span
                                                        className="
                                                            font-mono
                                                            text-xs
                                                            font-semibold
                                                            text-slate-600
                                                            dark:text-slate-300
                                                        "
                                                    >
                                                        {item.progress}%
                                                    </span>
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
                                                        px-3
                                                        py-1
                                                        text-xs
                                                        font-semibold
                                                        ${getStatusStyle(
                                                        item.status
                                                    )}
                                                    `}
                                                >
                                                    <span
                                                        className={`
                                                            h-1.5
                                                            w-1.5
                                                            rounded-full
                                                            ${getStatusDot(
                                                            item.status
                                                        )}
                                                        `}
                                                    />

                                                    {item.status}
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
                                                    onClick={() =>
                                                        setOpenMenu(
                                                            openMenu ===
                                                                item.id
                                                                ? null
                                                                : item.id
                                                        )
                                                    }
                                                    className="
                                                        rounded-lg
                                                        p-2
                                                        text-slate-400
                                                        transition
                                                        hover:bg-slate-100
                                                        hover:text-slate-700
                                                        focus-visible:outline-2
                                                        focus-visible:outline-offset-2
                                                        focus-visible:outline-blue-600
                                                        dark:text-slate-500
                                                        dark:hover:bg-[#102337]
                                                        dark:hover:text-slate-200
                                                        dark:focus-visible:outline-blue-400
                                                    "
                                                >
                                                    <MoreVertical size={18} />
                                                </button>

                                                {/* DROPDOWN */}

                                                {openMenu === item.id && (
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
                                                            shadow-slate-900/10
                                                            dark:border-[#1e334a]
                                                            dark:bg-[#0b1727]
                                                            dark:shadow-black/30
                                                        "
                                                    >
                                                        {/* VIEW */}

                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                handleView(item)
                                                            }
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
                                                                hover:bg-blue-50
                                                                hover:text-blue-700
                                                                dark:text-slate-300
                                                                dark:hover:bg-blue-500/10
                                                                dark:hover:text-blue-300
                                                            "
                                                        >
                                                            <Eye size={15} />
                                                            View
                                                        </button>

                                                        {/* REMOVE */}

                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                handleRemove(item)
                                                            }
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
                                                            Remove
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
                        FOOTER
                    ================================================== */}

                    <div
                        className="
                            flex
                            flex-col
                            gap-2
                            border-t
                            border-slate-200
                            bg-slate-50
                            px-6
                            py-4
                            sm:flex-row
                            sm:items-center
                            sm:justify-between
                            dark:border-[#1e334a]
                            dark:bg-[#102337]
                        "
                    >
                        <p
                            className="
                                font-mono
                                text-[9px]
                                uppercase
                                tracking-wider
                                text-slate-500
                                dark:text-slate-400
                            "
                        >
                            Showing{" "}
                            <span
                                className="
                                    font-semibold
                                    text-slate-800
                                    dark:text-slate-200
                                "
                            >
                                {filteredEnrollments.length}
                            </span>{" "}
                            enrollments
                        </p>

                        <p
                            className="
                                font-mono
                                text-[9px]
                                uppercase
                                tracking-wider
                                text-slate-500
                                dark:text-slate-400
                            "
                        >
                            Shiyora LMS
                        </p>
                    </div>
                </section>

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
                        Enrollment Management
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Enrollments;