import { useMemo, useState } from "react";

import {
    BookOpen,
    Plus,
    Search,
    MoreVertical,
    Users,
    Clock,
    CheckCircle2,
    XCircle,
    Pencil,
    Trash2,
    TrendingUp,
} from "lucide-react";

const Courses = () => {
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");
    const [openMenu, setOpenMenu] = useState(null);

    // ============================================================
    // COURSE DATA
    // ============================================================

    const courses = [
        {
            id: 1,
            title: "Full Stack Web Development",
            instructor: "Rahul Sharma",
            category: "Development",
            students: 245,
            lessons: 48,
            duration: "12 Weeks",
            status: "Published",
        },
        {
            id: 2,
            title: "UI/UX Design Fundamentals",
            instructor: "Priya Singh",
            category: "Design",
            students: 182,
            lessons: 32,
            duration: "8 Weeks",
            status: "Published",
        },
        {
            id: 3,
            title: "Java Programming",
            instructor: "Amit Verma",
            category: "Programming",
            students: 316,
            lessons: 56,
            duration: "14 Weeks",
            status: "Published",
        },
        {
            id: 4,
            title: "Database Management System",
            instructor: "Neha Gupta",
            category: "Database",
            students: 124,
            lessons: 28,
            duration: "6 Weeks",
            status: "Draft",
        },
        {
            id: 5,
            title: "Python for Beginners",
            instructor: "Arjun Yadav",
            category: "Programming",
            students: 208,
            lessons: 40,
            duration: "10 Weeks",
            status: "Published",
        },
        {
            id: 6,
            title: "Digital Marketing",
            instructor: "Anjali Singh",
            category: "Marketing",
            students: 96,
            lessons: 24,
            duration: "6 Weeks",
            status: "Draft",
        },
    ];

    // ============================================================
    // FILTER COURSES
    // ============================================================

    const filteredCourses = useMemo(() => {
        const searchText = search.toLowerCase().trim();

        return courses.filter((course) => {
            const matchesSearch =
                course.title.toLowerCase().includes(searchText) ||
                course.instructor.toLowerCase().includes(searchText) ||
                course.category.toLowerCase().includes(searchText);

            const matchesStatus =
                statusFilter === "All" ||
                course.status === statusFilter;

            return matchesSearch && matchesStatus;
        });
    }, [search, statusFilter]);

    // ============================================================
    // STATISTICS
    // ============================================================

    const totalCourses = courses.length;

    const publishedCourses = courses.filter(
        (course) => course.status === "Published"
    ).length;

    const draftCourses = courses.filter(
        (course) => course.status === "Draft"
    ).length;

    const totalStudents = courses.reduce(
        (total, course) => total + course.students,
        0
    );

    // ============================================================
    // ADD COURSE
    // ============================================================

    const handleAddCourse = () => {
        alert("Add Course functionality will be connected later.");
    };

    // ============================================================
    // EDIT COURSE
    // ============================================================

    const handleEdit = (course) => {
        setOpenMenu(null);
        alert(`Edit course: ${course.title}`);
    };

    // ============================================================
    // DELETE COURSE
    // ============================================================

    const handleDelete = (course) => {
        setOpenMenu(null);
        alert(`Delete course: ${course.title}`);
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
                                dark:text-blue-400
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
                                dark:text-slate-50
                                md:text-4xl
                            "
                        >
                            Courses
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
                            Create, manage and monitor courses in your
                            organization.
                        </p>
                    </div>

                    {/* ADD COURSE */}

                    <button
                        type="button"
                        onClick={handleAddCourse}
                        className="
                            flex
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
                            dark:bg-blue-500
                            dark:hover:bg-blue-400
                        "
                    >
                        <Plus size={18} />
                        Add Course
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
                                    Total Courses
                                </p>

                                <h2
                                    className="
                                        mt-2
                                        font-mono
                                        text-2xl
                                        font-semibold
                                        text-slate-900
                                        dark:text-slate-50
                                    "
                                >
                                    {totalCourses}
                                </h2>

                                <p
                                    className="
                                        mt-1
                                        text-[11px]
                                        text-slate-400
                                        dark:text-slate-500
                                    "
                                >
                                    All courses
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
                                <BookOpen size={22} />
                            </div>
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
                                    Published Courses
                                </p>

                                <h2
                                    className="
                                        mt-2
                                        font-mono
                                        text-2xl
                                        font-semibold
                                        text-slate-900
                                        dark:text-slate-50
                                    "
                                >
                                    {publishedCourses}
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
                                <CheckCircle2 size={22} />
                            </div>
                        </div>
                    </div>

                    {/* DRAFT */}

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
                                    Draft Courses
                                </p>

                                <h2
                                    className="
                                        mt-2
                                        font-mono
                                        text-2xl
                                        font-semibold
                                        text-slate-900
                                        dark:text-slate-50
                                    "
                                >
                                    {draftCourses}
                                </h2>

                                <p
                                    className="
                                        mt-1
                                        text-[11px]
                                        text-slate-400
                                        dark:text-slate-500
                                    "
                                >
                                    Not published
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
                                <Clock size={22} />
                            </div>
                        </div>
                    </div>

                    {/* TOTAL STUDENTS */}

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
                                    Enrolled Students
                                </p>

                                <h2
                                    className="
                                        mt-2
                                        font-mono
                                        text-2xl
                                        font-semibold
                                        text-slate-900
                                        dark:text-slate-50
                                    "
                                >
                                    {totalStudents.toLocaleString()}
                                </h2>

                                <p
                                    className="
                                        mt-1
                                        text-[11px]
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
                                    border-teal-200
                                    bg-teal-50
                                    text-teal-600
                                    dark:border-teal-500/20
                                    dark:bg-teal-500/10
                                    dark:text-teal-400
                                "
                            >
                                <Users size={22} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* =================================================
                    SEARCH + FILTER
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
                    <div
                        className="
                            flex
                            flex-col
                            gap-4
                            md:flex-row
                            md:items-center
                            md:justify-between
                        "
                    >

                        {/* SEARCH */}

                        <div className="relative w-full md:max-w-md">
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
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search courses, instructors..."
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
                                    placeholder:text-slate-400
                                    transition
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

                        {/* STATUS FILTER */}

                        <div className="flex items-center gap-2">
                            <span
                                className="
                                    hidden
                                    font-mono
                                    text-[10px]
                                    font-semibold
                                    uppercase
                                    tracking-wider
                                    text-slate-400
                                    dark:text-slate-500
                                    sm:block
                                "
                            >
                                Status
                            </span>

                            <select
                                value={statusFilter}
                                onChange={(e) =>
                                    setStatusFilter(e.target.value)
                                }
                                className="
                                    w-full
                                    cursor-pointer
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
                                    sm:w-auto
                                "
                            >
                                <option value="All">
                                    All Courses
                                </option>

                                <option value="Published">
                                    Published
                                </option>

                                <option value="Draft">
                                    Draft
                                </option>
                            </select>
                        </div>
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
                            bg-slate-50
                            p-6
                            sm:flex-row
                            sm:items-center
                            sm:justify-between
                            dark:border-[#1e334a]
                            dark:bg-[#102337]
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
                                    Courses
                                </p>
                            </div>

                            <h2
                                className="
                                    mt-1
                                    text-xl
                                    font-semibold
                                    text-slate-900
                                    dark:text-slate-50
                                "
                            >
                                All Courses
                            </h2>

                            <p
                                className="
                                    mt-1
                                    text-xs
                                    text-slate-500
                                    dark:text-slate-400
                                "
                            >
                                Manage courses available to your students.
                            </p>
                        </div>

                        <div
                            className="
                                flex
                                w-fit
                                items-center
                                gap-2
                                rounded-lg
                                bg-blue-50
                                px-3
                                py-2
                                dark:bg-blue-500/10
                            "
                        >
                            <TrendingUp
                                size={14}
                                className="
                                    text-blue-600
                                    dark:text-blue-400
                                "
                            />

                            <span
                                className="
                                    font-mono
                                    text-[10px]
                                    font-semibold
                                    text-blue-700
                                    dark:text-blue-300
                                "
                            >
                                {filteredCourses.length} RESULTS
                            </span>
                        </div>
                    </div>

                    {/* =================================================
                        EMPTY STATE
                    ================================================== */}

                    {filteredCourses.length === 0 ? (
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
                                <XCircle size={26} />
                            </div>

                            <h3
                                className="
                                    mt-4
                                    font-semibold
                                    text-slate-900
                                    dark:text-slate-50
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
                                Try changing your search or filter.
                            </p>
                        </div>
                    ) : (
                        /* =================================================
                            TABLE
                        ================================================== */

                        <div className="overflow-x-auto">
                            <table className="w-full min-w-250">

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
                                            Course
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
                                            Instructor
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
                                            Students
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
                                            Duration
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
                                    {filteredCourses.map((course) => (
                                        <tr
                                            key={course.id}
                                            className="
                                                transition-colors
                                                hover:bg-slate-50
                                                dark:hover:bg-[#102337]/60
                                            "
                                        >

                                            {/* COURSE */}

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
                                                            text-blue-600
                                                            dark:border-blue-500/20
                                                            dark:bg-blue-500/10
                                                            dark:text-blue-400
                                                        "
                                                    >
                                                        <BookOpen size={20} />
                                                    </div>

                                                    <div>
                                                        <p
                                                            className="
                                                                text-sm
                                                                font-semibold
                                                                text-slate-900
                                                                dark:text-slate-100
                                                            "
                                                        >
                                                            {course.title}
                                                        </p>

                                                        <p
                                                            className="
                                                                mt-1
                                                                text-xs
                                                                text-slate-500
                                                                dark:text-slate-400
                                                            "
                                                        >
                                                            {course.category} •{" "}
                                                            {course.lessons} lessons
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>

                                            {/* INSTRUCTOR */}

                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-2">
                                                    <div
                                                        className="
                                                            flex
                                                            h-8
                                                            w-8
                                                            shrink-0
                                                            items-center
                                                            justify-center
                                                            rounded-full
                                                            border
                                                            border-teal-200
                                                            bg-teal-50
                                                            text-xs
                                                            font-bold
                                                            text-teal-700
                                                            dark:border-teal-500/20
                                                            dark:bg-teal-500/10
                                                            dark:text-teal-300
                                                        "
                                                    >
                                                        {course.instructor.charAt(0)}
                                                    </div>

                                                    <span
                                                        className="
                                                            text-sm
                                                            font-medium
                                                            text-slate-600
                                                            dark:text-slate-300
                                                        "
                                                    >
                                                        {course.instructor}
                                                    </span>
                                                </div>
                                            </td>

                                            {/* STUDENTS */}

                                            <td
                                                className="
                                                    px-6
                                                    py-5
                                                    font-mono
                                                    text-xs
                                                    text-slate-600
                                                    dark:text-slate-300
                                                "
                                            >
                                                <div className="flex items-center gap-2">
                                                    <Users
                                                        size={15}
                                                        className="
                                                            text-teal-600
                                                            dark:text-teal-400
                                                        "
                                                    />

                                                    {course.students}
                                                </div>
                                            </td>

                                            {/* DURATION */}

                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-2">
                                                    <Clock
                                                        size={15}
                                                        className="
                                                            text-blue-600
                                                            dark:text-blue-400
                                                        "
                                                    />

                                                    <span
                                                        className="
                                                            font-mono
                                                            text-xs
                                                            text-slate-600
                                                            dark:text-slate-300
                                                        "
                                                    >
                                                        {course.duration}
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

                                                        ${course.status ===
                                                            "Published"
                                                            ? `
                                                                    bg-teal-50
                                                                    text-teal-700
                                                                    dark:bg-teal-500/10
                                                                    dark:text-teal-300
                                                                `
                                                            : `
                                                                    bg-blue-50
                                                                    text-blue-700
                                                                    dark:bg-blue-500/10
                                                                    dark:text-blue-300
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
                                                                ? `
                                                                        bg-teal-500
                                                                        dark:bg-teal-400
                                                                    `
                                                                : `
                                                                        bg-blue-500
                                                                        dark:bg-blue-400
                                                                    `
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
                                                        hover:text-slate-700
                                                        dark:text-slate-500
                                                        dark:hover:bg-[#102337]
                                                        dark:hover:text-slate-200
                                                    "
                                                >
                                                    <MoreVertical size={18} />
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
                                                            shadow-slate-900/10
                                                            dark:border-[#1e334a]
                                                            dark:bg-[#0b1727]
                                                            dark:shadow-black/30
                                                        "
                                                    >
                                                        {/* EDIT */}

                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                handleEdit(course)
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
                                                            <Pencil size={15} />
                                                            Edit
                                                        </button>

                                                        {/* DELETE */}

                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                handleDelete(course)
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
                                {filteredCourses.length}
                            </span>{" "}
                            courses
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
                        Course Management
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Courses;