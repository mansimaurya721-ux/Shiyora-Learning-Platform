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
            const matchesSearch =
                course.title
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                course.description
                    .toLowerCase()
                    .includes(search.toLowerCase());

            const matchesStatus =
                statusFilter === "All" ||
                course.status === statusFilter;

            const matchesCategory =
                categoryFilter === "All" ||
                course.category === categoryFilter;

            return matchesSearch && matchesStatus && matchesCategory;
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

            <section className="relative overflow-hidden rounded-3xl border border-[#F2B84B]/15 bg-[#1B241E] p-7 lg:p-8">

                <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#F2B84B]/5 blur-3xl" />

                <div className="pointer-events-none absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-[#7C9A82]/5 blur-3xl" />

                <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                    <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#7C9A82]">
                            Teaching Workspace / Courses
                        </p>

                        <h1 className="mt-2 font-['Space_Grotesk'] text-3xl font-bold tracking-tight text-[#F3EEDD] md:text-4xl">
                            My Courses
                        </h1>

                        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#F3EEDD]/50">
                            Create, organize and manage the courses you teach
                            on Shiyora.
                        </p>
                    </div>

                    <Link
                        to="/teacher/courses/create"
                        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#F2B84B] px-5 py-3 text-sm font-bold text-[#161F19] transition hover:-translate-y-0.5 hover:bg-[#F2B84B]/90"
                    >
                        <span className="text-lg leading-none">+</span>
                        Create Course
                    </Link>

                </div>
            </section>


            {/* ===================================================== */}
            {/* STATISTICS */}
            {/* ===================================================== */}

            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

                <StatCard
                    label="Total Courses"
                    value={courses.length}
                    detail="Across your workspace"
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
                    detail="Still in preparation"
                    icon="D"
                />

                <StatCard
                    label="Total Students"
                    value={totalStudents}
                    detail={`${totalLessons} lessons created`}
                    icon="S"
                />

            </section>


            {/* ===================================================== */}
            {/* FILTER BAR */}
            {/* ===================================================== */}

            <section className="rounded-2xl border border-[#F2B84B]/10 bg-[#1B241E] p-4">

                <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">

                    {/* Search */}

                    <div className="relative w-full xl:max-w-md">

                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7C9A82]"
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
                            className="w-full rounded-xl border border-[#F2B84B]/10 bg-[#161F19] py-3 pl-11 pr-4 text-sm text-[#F3EEDD] outline-none placeholder:text-[#F3EEDD]/25 transition focus:border-[#F2B84B]/30"
                        />

                    </div>


                    {/* Filters */}

                    <div className="flex flex-col gap-3 sm:flex-row">

                        <select
                            value={statusFilter}
                            onChange={(e) =>
                                setStatusFilter(e.target.value)
                            }
                            className="rounded-xl border border-[#F2B84B]/10 bg-[#161F19] px-4 py-3 text-xs text-[#F3EEDD]/70 outline-none focus:border-[#F2B84B]/30"
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
                            className="rounded-xl border border-[#F2B84B]/10 bg-[#161F19] px-4 py-3 text-xs text-[#F3EEDD]/70 outline-none focus:border-[#F2B84B]/30"
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
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#7C9A82]">
                        Course Library
                    </p>

                    <h2 className="mt-1 font-['Space_Grotesk'] text-2xl font-bold text-[#F3EEDD]">
                        Your Teaching Collection
                    </h2>
                </div>

                <p className="font-mono text-[10px] uppercase tracking-wider text-[#F3EEDD]/30">
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

            <section className="rounded-2xl border border-[#F2B84B]/10 bg-[#141C17] p-5">

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                    <div className="flex items-start gap-3">

                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#F2B84B]/15 bg-[#F2B84B]/5 font-mono text-sm text-[#F2B84B]">
                            i
                        </div>

                        <div>
                            <p className="text-sm font-semibold text-[#F3EEDD]/80">
                                Keep your courses organized
                            </p>

                            <p className="mt-1 text-xs leading-5 text-[#F3EEDD]/35">
                                Update lessons, assessments and course
                                information regularly to keep students engaged.
                            </p>
                        </div>

                    </div>

                    <Link
                        to="/teacher/analytics"
                        className="shrink-0 text-xs font-semibold text-[#F2B84B] transition hover:text-[#F3EEDD]"
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
        <div className="group rounded-2xl border border-[#F2B84B]/10 bg-[#1B241E] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#F2B84B]/25">

            <div className="flex items-start justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#F2B84B]/15 bg-[#F2B84B]/10 font-mono text-sm font-bold text-[#F2B84B]">
                    {icon}
                </div>

                <span className="font-mono text-[9px] uppercase tracking-wider text-[#7C9A82]">
                    Overview
                </span>

            </div>

            <p className="mt-5 text-sm text-[#F3EEDD]/45">
                {label}
            </p>

            <div className="mt-1 flex items-end justify-between gap-3">

                <h3 className="font-['Space_Grotesk'] text-3xl font-bold text-[#F3EEDD]">
                    {value}
                </h3>

                <span className="mb-1 text-right text-[10px] text-[#F3EEDD]/30">
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
        <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#F2B84B]/10 bg-[#1B241E] transition duration-300 hover:-translate-y-1 hover:border-[#F2B84B]/25">

            {/* Course Top */}

            <div className="relative h-36 overflow-hidden bg-[#141C17]">

                {/* Decorative notebook lines */}

                <div className="absolute inset-0 opacity-30">
                    <div className="absolute left-0 right-0 top-7 border-t border-[#F3EEDD]/5" />
                    <div className="absolute left-0 right-0 top-14 border-t border-[#F3EEDD]/5" />
                    <div className="absolute left-0 right-0 top-21 border-t border-[#F3EEDD]/5" />
                    <div className="absolute left-0 right-0 top-28 border-t border-[#F3EEDD]/5" />
                </div>

                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#F2B84B]/10 blur-2xl" />

                <div className="absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-[#7C9A82]/10 blur-2xl" />

                {/* Category */}

                <div className="absolute left-5 top-5">

                    <span className="rounded-full border border-[#7C9A82]/20 bg-[#7C9A82]/10 px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-[#7C9A82]">
                        {course.category}
                    </span>

                </div>

                {/* Status */}

                <div className="absolute right-5 top-5">

                    <span
                        className={`rounded-full border px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider ${isPublished
                            ? "border-[#7C9A82]/20 bg-[#7C9A82]/10 text-[#7C9A82]"
                            : "border-[#D6402C]/20 bg-[#D6402C]/10 text-[#D6402C]"
                            }`}
                    >
                        {course.status}
                    </span>

                </div>

                {/* Course mark */}

                <div className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#F2B84B]/20 bg-[#F2B84B]/10 font-['Space_Grotesk'] text-xl font-bold text-[#F2B84B]">
                    {course.title.charAt(0)}
                </div>

            </div>


            {/* Content */}

            <div className="flex flex-1 flex-col p-6">

                <div className="flex items-start justify-between gap-3">

                    <div className="min-w-0">

                        <h3 className="font-['Space_Grotesk'] text-lg font-bold leading-6 text-[#F3EEDD] transition group-hover:text-[#F2B84B]">
                            {course.title}
                        </h3>

                        <p className="mt-2 line-clamp-2 text-xs leading-5 text-[#F3EEDD]/40">
                            {course.description}
                        </p>

                    </div>

                </div>


                {/* Level */}

                <div className="mt-5">

                    <span className="rounded-lg border border-[#F2B84B]/10 bg-[#161F19] px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-wider text-[#F3EEDD]/45">
                        {course.level}
                    </span>

                </div>


                {/* Course Stats */}

                <div className="mt-5 grid grid-cols-2 gap-3 border-y border-[#F2B84B]/10 py-4">

                    <div>
                        <p className="font-mono text-[9px] uppercase tracking-wider text-[#F3EEDD]/30">
                            Students
                        </p>

                        <p className="mt-1 text-sm font-semibold text-[#F3EEDD]/75">
                            {course.students}
                        </p>
                    </div>

                    <div>
                        <p className="font-mono text-[9px] uppercase tracking-wider text-[#F3EEDD]/30">
                            Lessons
                        </p>

                        <p className="mt-1 text-sm font-semibold text-[#F3EEDD]/75">
                            {course.lessons}
                        </p>
                    </div>

                </div>


                {/* Progress */}

                <div className="mt-5">

                    <div className="mb-2 flex items-center justify-between">

                        <span className="font-mono text-[9px] uppercase tracking-wider text-[#F3EEDD]/30">
                            Student Completion
                        </span>

                        <span className="font-mono text-xs font-bold text-[#F2B84B]">
                            {course.completion}%
                        </span>

                    </div>

                    <div className="h-1.5 overflow-hidden rounded-full bg-[#161F19]">

                        <div
                            className="h-full rounded-full bg-[#F2B84B] transition-all duration-500"
                            style={{
                                width: `${course.completion}%`,
                            }}
                        />

                    </div>

                </div>


                {/* Updated */}

                <p className="mt-4 font-mono text-[9px] text-[#F3EEDD]/25">
                    Updated {course.updated}
                </p>


                {/* Actions */}

                <div className="mt-auto flex gap-2 pt-6">

                    <Link
                        to={`/teacher/courses/${course.id}`}
                        className="flex-1 rounded-xl border border-[#F2B84B]/15 bg-[#161F19] px-4 py-2.5 text-center text-xs font-semibold text-[#F3EEDD]/70 transition hover:border-[#F2B84B]/30 hover:text-[#F2B84B]"
                    >
                        View
                    </Link>

                    <Link
                        to={`/teacher/courses/${course.id}/edit`}
                        className="flex-1 rounded-xl bg-[#F2B84B] px-4 py-2.5 text-center text-xs font-bold text-[#161F19] transition hover:bg-[#F2B84B]/90"
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
        <section className="rounded-3xl border border-dashed border-[#F2B84B]/15 bg-[#1B241E] px-6 py-16 text-center">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#F2B84B]/15 bg-[#F2B84B]/5 font-['Space_Grotesk'] text-xl font-bold text-[#F2B84B]">
                ?
            </div>

            <h3 className="mt-5 font-['Space_Grotesk'] text-xl font-bold text-[#F3EEDD]">
                No courses found
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#F3EEDD]/40">
                Try changing your search or filters, or create a new course
                for your students.
            </p>

            <Link
                to="/teacher/courses/create"
                className="mt-6 inline-flex rounded-xl bg-[#F2B84B] px-5 py-3 text-xs font-bold text-[#161F19] transition hover:bg-[#F2B84B]/90"
            >
                Create Your First Course
            </Link>

        </section>
    );
}

export default Courses;