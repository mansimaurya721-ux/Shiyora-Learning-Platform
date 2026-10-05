import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

function Courses() {
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");
    const [categoryFilter, setCategoryFilter] = useState("All");

    const courses = [
        {
            id: 1,
            title: "Full Stack Web Development",
            description:
                "Learn modern frontend and backend development with practical projects.",
            category: "Development",
            level: "Intermediate",
            students: 128,
            lessons: 32,
            completion: 86,
            status: "Published",
            updated: "2 days ago",
        },
        {
            id: 2,
            title: "Database Management Systems",
            description:
                "Understand databases, SQL, normalization and transaction management.",
            category: "Database",
            level: "Intermediate",
            students: 94,
            lessons: 24,
            completion: 72,
            status: "Published",
            updated: "4 days ago",
        },
        {
            id: 3,
            title: "Java Programming",
            description:
                "Build a strong foundation in Java programming and object-oriented concepts.",
            category: "Programming",
            level: "Beginner",
            students: 76,
            lessons: 28,
            completion: 68,
            status: "Published",
            updated: "1 week ago",
        },
        {
            id: 4,
            title: "React.js Masterclass",
            description:
                "Build responsive and interactive web applications using React.",
            category: "Development",
            level: "Advanced",
            students: 43,
            lessons: 21,
            completion: 54,
            status: "Published",
            updated: "1 week ago",
        },
        {
            id: 5,
            title: "JavaScript Essentials",
            description:
                "Master JavaScript fundamentals, ES6 features and browser APIs.",
            category: "Programming",
            level: "Beginner",
            students: 0,
            lessons: 18,
            completion: 0,
            status: "Draft",
            updated: "Yesterday",
        },
        {
            id: 6,
            title: "Node.js & Express",
            description:
                "Learn server-side JavaScript and create REST APIs with Express.",
            category: "Development",
            level: "Advanced",
            students: 0,
            lessons: 14,
            completion: 0,
            status: "Draft",
            updated: "3 days ago",
        },
    ];

    const categories = [
        "All",
        ...new Set(courses.map((course) => course.category)),
    ];

    const filteredCourses = useMemo(() => {
        return courses.filter((course) => {
            const searchText = search.toLowerCase();

            const matchesSearch =
                course.title.toLowerCase().includes(searchText) ||
                course.description.toLowerCase().includes(searchText);

            const matchesStatus =
                statusFilter === "All" ||
                course.status === statusFilter;

            const matchesCategory =
                categoryFilter === "All" ||
                course.category === categoryFilter;

            return (
                matchesSearch &&
                matchesStatus &&
                matchesCategory
            );
        });
    }, [search, statusFilter, categoryFilter]);

    const publishedCount = courses.filter(
        (course) => course.status === "Published"
    ).length;

    const draftCount = courses.filter(
        (course) => course.status === "Draft"
    ).length;

    const totalStudents = courses.reduce(
        (total, course) => total + course.students,
        0
    );

    const totalLessons = courses.reduce(
        (total, course) => total + course.lessons,
        0
    );

    return (
        <div className="space-y-7">

            {/* ===================================================== */}
            {/* HEADER */}
            {/* ===================================================== */}

            <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727] lg:p-8">

                {/* Background Glow */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-400/10" />

                <div className="pointer-events-none absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-teal-500/10 blur-3xl dark:bg-teal-400/10" />

                <div className="relative">

                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-blue-600 dark:text-teal-400">
                        Teaching Workspace / Courses
                    </p>

                    <h1 className="mt-2 font-['Space_Grotesk'] text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
                        My Courses
                    </h1>

                    <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
                        View and manage the courses assigned to you.
                        Organize lessons, review student progress and
                        keep your teaching workspace up to date.
                    </p>

                </div>
            </section>


            {/* ===================================================== */}
            {/* STATISTICS */}
            {/* ===================================================== */}

            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

                <StatCard
                    label="Total Courses"
                    value={courses.length}
                    detail="Assigned to you"
                    icon="C"
                />

                <StatCard
                    label="Published"
                    value={publishedCount}
                    detail="Currently available"
                    icon="P"
                />

                <StatCard
                    label="Draft Courses"
                    value={draftCount}
                    detail="In preparation"
                    icon="D"
                />

                <StatCard
                    label="Total Students"
                    value={totalStudents}
                    detail={`${totalLessons} lessons`}
                    icon="S"
                />

            </section>


            {/* ===================================================== */}
            {/* FILTER BAR */}
            {/* ===================================================== */}

            <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">

                <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">

                    {/* Search */}

                    <div className="relative w-full xl:max-w-md">

                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 dark:text-slate-500"
                        >
                            <circle cx="11" cy="11" r="7" />
                            <path
                                strokeLinecap="round"
                                d="m20 20-4-4"
                            />
                        </svg>

                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search your courses..."
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/10 dark:border-[#1e334a] dark:bg-[#102337] dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus:border-teal-400"
                        />

                    </div>


                    {/* Filters */}

                    <div className="flex flex-col gap-3 sm:flex-row">

                        <select
                            value={statusFilter}
                            onChange={(e) =>
                                setStatusFilter(e.target.value)
                            }
                            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-600 outline-none focus:border-blue-400 dark:border-[#1e334a] dark:bg-[#102337] dark:text-slate-300 dark:focus:border-teal-400"
                        >
                            <option value="All">All Status</option>
                            <option value="Published">Published</option>
                            <option value="Draft">Draft</option>
                        </select>

                        <select
                            value={categoryFilter}
                            onChange={(e) =>
                                setCategoryFilter(e.target.value)
                            }
                            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-600 outline-none focus:border-blue-400 dark:border-[#1e334a] dark:bg-[#102337] dark:text-slate-300 dark:focus:border-teal-400"
                        >
                            {categories.map((category) => (
                                <option
                                    key={category}
                                    value={category}
                                >
                                    {category === "All"
                                        ? "All Categories"
                                        : category}
                                </option>
                            ))}
                        </select>

                    </div>

                </div>

            </section>


            {/* ===================================================== */}
            {/* COURSE HEADER */}
            {/* ===================================================== */}

            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">

                <div>

                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-600 dark:text-teal-400">
                        Course Library
                    </p>

                    <h2 className="mt-1 font-['Space_Grotesk'] text-2xl font-bold text-slate-900 dark:text-white">
                        Your Teaching Collection
                    </h2>

                </div>

                <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Showing {filteredCourses.length} of {courses.length}
                </p>

            </div>


            {/* ===================================================== */}
            {/* COURSE GRID */}
            {/* ===================================================== */}

            {filteredCourses.length > 0 ? (

                <section className="grid grid-cols-1 gap-5 md:grid-cols-2 2xl:grid-cols-3">

                    {filteredCourses.map((course) => (
                        <CourseCard
                            key={course.id}
                            course={course}
                        />
                    ))}

                </section>

            ) : (

                <EmptyState />

            )}


            {/* ===================================================== */}
            {/* BOTTOM NOTE */}
            {/* ===================================================== */}

            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                    <div className="flex items-start gap-3">

                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-blue-200 bg-blue-50 font-mono text-sm font-bold text-blue-600 dark:border-teal-400/20 dark:bg-teal-400/10 dark:text-teal-400">
                            i
                        </div>

                        <div>

                            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                                Keep your courses organized
                            </p>

                            <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                                Update lessons, assessments and course
                                information regularly to keep students
                                engaged.
                            </p>

                        </div>

                    </div>

                    <Link
                        to="/teacher/analytics"
                        className="shrink-0 text-xs font-semibold text-blue-600 transition hover:text-blue-700 dark:text-teal-400 dark:hover:text-teal-300"
                    >
                        View Analytics →
                    </Link>

                </div>

            </section>

        </div>
    );
}


/* ============================================================= */
/* STAT CARD */
/* ============================================================= */

function StatCard({ label, value, detail, icon }) {
    return (
        <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md dark:border-[#1e334a] dark:bg-[#0b1727] dark:hover:border-teal-400/30">

            <div className="flex items-start justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 font-mono text-sm font-bold text-blue-600 dark:border-teal-400/20 dark:bg-teal-400/10 dark:text-teal-400">
                    {icon}
                </div>

                <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Overview
                </span>

            </div>

            <p className="mt-5 text-sm text-slate-500 dark:text-slate-400">
                {label}
            </p>

            <div className="mt-1 flex items-end justify-between gap-3">

                <h3 className="font-['Space_Grotesk'] text-3xl font-bold text-slate-900 dark:text-white">
                    {value}
                </h3>

                <span className="mb-1 text-right text-[10px] text-slate-400 dark:text-slate-500">
                    {detail}
                </span>

            </div>

        </div>
    );
}


/* ============================================================= */
/* COURSE CARD */
/* ============================================================= */

function CourseCard({ course }) {
    const isPublished = course.status === "Published";

    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg dark:border-[#1e334a] dark:bg-[#0b1727] dark:hover:border-teal-400/30">

            {/* Course Top */}

            <div className="relative h-36 overflow-hidden bg-slate-100 dark:bg-[#102337]">

                {/* Decorative Lines */}

                <div className="absolute inset-0 opacity-40">

                    <div className="absolute left-0 right-0 top-7 border-t border-slate-300 dark:border-slate-700" />

                    <div className="absolute left-0 right-0 top-14 border-t border-slate-300 dark:border-slate-700" />

                    <div className="absolute left-0 right-0 top-[84px] border-t border-slate-300 dark:border-slate-700" />

                    <div className="absolute left-0 right-0 top-28 border-t border-slate-300 dark:border-slate-700" />

                </div>

                {/* Blue Glow */}

                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl" />

                {/* Teal Glow */}

                <div className="absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-teal-500/10 blur-2xl" />


                {/* Category */}

                <div className="absolute left-5 top-5">

                    <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-blue-600 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300">
                        {course.category}
                    </span>

                </div>


                {/* Status */}

                <div className="absolute right-5 top-5">

                    <span
                        className={`rounded-full border px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider ${isPublished
                            ? "border-emerald-200 bg-emerald-50 text-emerald-600 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-400"
                            : "border-amber-200 bg-amber-50 text-amber-600 dark:border-amber-400/20 dark:bg-amber-400/10 dark:text-amber-400"
                            }`}
                    >
                        {course.status}
                    </span>

                </div>


                {/* Course Mark */}

                <div className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 font-['Space_Grotesk'] text-xl font-bold text-blue-600 dark:border-teal-400/20 dark:bg-teal-400/10 dark:text-teal-400">
                    {course.title.charAt(0)}
                </div>

            </div>


            {/* Content */}

            <div className="flex flex-1 flex-col p-6">

                <div className="min-w-0">

                    <h3 className="font-['Space_Grotesk'] text-lg font-bold leading-6 text-slate-900 transition dark:text-white">
                        {course.title}
                    </h3>

                    <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                        {course.description}
                    </p>

                </div>


                {/* Level */}

                <div className="mt-5">

                    <span className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-wider text-slate-500 dark:border-[#1e334a] dark:bg-[#102337] dark:text-slate-400">
                        {course.level}
                    </span>

                </div>


                {/* Course Stats */}

                <div className="mt-5 grid grid-cols-2 gap-3 border-y border-slate-200 py-4 dark:border-[#1e334a]">

                    <div>

                        <p className="font-mono text-[9px] uppercase tracking-wider text-slate-400 dark:text-slate-500">
                            Students
                        </p>

                        <p className="mt-1 text-sm font-semibold text-slate-700 dark:text-slate-300">
                            {course.students}
                        </p>

                    </div>

                    <div>

                        <p className="font-mono text-[9px] uppercase tracking-wider text-slate-400 dark:text-slate-500">
                            Lessons
                        </p>

                        <p className="mt-1 text-sm font-semibold text-slate-700 dark:text-slate-300">
                            {course.lessons}
                        </p>

                    </div>

                </div>


                {/* Progress */}

                <div className="mt-5">

                    <div className="mb-2 flex items-center justify-between">

                        <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 dark:text-slate-500">
                            Student Completion
                        </span>

                        <span className="font-mono text-xs font-bold text-blue-600 dark:text-teal-400">
                            {course.completion}%
                        </span>

                    </div>

                    <div className="h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-[#102337]">

                        <div
                            className="h-full rounded-full bg-gradient-to-r from-blue-600 to-teal-500 transition-all duration-500"
                            style={{
                                width: `${course.completion}%`,
                            }}
                        />

                    </div>

                </div>


                {/* Updated */}

                <p className="mt-4 font-mono text-[9px] text-slate-400 dark:text-slate-500">
                    Updated {course.updated}
                </p>


                {/* Actions */}

                <div className="mt-auto flex gap-2 pt-6">

                    <Link
                        to={`/teacher/courses/${course.id}`}
                        className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-center text-xs font-semibold text-slate-600 transition hover:border-blue-300 hover:text-blue-600 dark:border-[#1e334a] dark:bg-[#102337] dark:text-slate-300 dark:hover:border-teal-400/40 dark:hover:text-teal-400"
                    >
                        View
                    </Link>

                    <Link
                        to={`/teacher/courses/${course.id}/edit`}
                        className="flex-1 rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 px-4 py-2.5 text-center text-xs font-bold text-white transition hover:opacity-90"
                    >
                        Edit
                    </Link>

                </div>

            </div>

        </article>
    );
}


/* ============================================================= */
/* EMPTY STATE */
/* ============================================================= */

function EmptyState() {
    return (
        <section className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-200 bg-blue-50 font-['Space_Grotesk'] text-xl font-bold text-blue-600 dark:border-teal-400/20 dark:bg-teal-400/10 dark:text-teal-400">
                ?
            </div>

            <h3 className="mt-5 font-['Space_Grotesk'] text-xl font-bold text-slate-900 dark:text-white">
                No courses found
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">
                Try changing your search or filters to find the
                courses assigned to you.
            </p>

        </section>
    );
}

export default Courses;