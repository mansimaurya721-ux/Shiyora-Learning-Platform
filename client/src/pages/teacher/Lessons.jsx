import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

function Lessons() {
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");
    const [moduleFilter, setModuleFilter] = useState("All");

    const [lessons, setLessons] = useState([
        {
            id: 1,
            module: "Module 01",
            moduleName: "Introduction to Web Development",
            title: "Understanding the Web",
            type: "Video",
            duration: "18 min",
            status: "Published",
            resources: 2,
        },
        {
            id: 2,
            module: "Module 01",
            moduleName: "Introduction to Web Development",
            title: "How Websites Work",
            type: "Video",
            duration: "24 min",
            status: "Published",
            resources: 3,
        },
        {
            id: 3,
            module: "Module 01",
            moduleName: "Introduction to Web Development",
            title: "Web Development Roadmap",
            type: "PDF",
            duration: "12 min",
            status: "Draft",
            resources: 1,
        },
        {
            id: 4,
            module: "Module 02",
            moduleName: "HTML Fundamentals",
            title: "HTML Document Structure",
            type: "Video",
            duration: "31 min",
            status: "Published",
            resources: 4,
        },
        {
            id: 5,
            module: "Module 02",
            moduleName: "HTML Fundamentals",
            title: "HTML Elements and Attributes",
            type: "Video",
            duration: "28 min",
            status: "Published",
            resources: 2,
        },
        {
            id: 6,
            module: "Module 02",
            moduleName: "HTML Fundamentals",
            title: "Forms and Input Elements",
            type: "Video",
            duration: "35 min",
            status: "Draft",
            resources: 3,
        },
        {
            id: 7,
            module: "Module 03",
            moduleName: "CSS Fundamentals",
            title: "Introduction to CSS",
            type: "Video",
            duration: "22 min",
            status: "Published",
            resources: 2,
        },
        {
            id: 8,
            module: "Module 03",
            moduleName: "CSS Fundamentals",
            title: "Selectors and Properties",
            type: "Video",
            duration: "29 min",
            status: "Published",
            resources: 3,
        },
    ]);

    /* ========================================================= */
    /* MODULES */
    /* ========================================================= */

    const modules = useMemo(() => {
        return [...new Set(lessons.map((lesson) => lesson.module))];
    }, [lessons]);

    /* ========================================================= */
    /* FILTERED LESSONS */
    /* ========================================================= */

    const filteredLessons = useMemo(() => {
        return lessons.filter((lesson) => {
            const searchText = search.toLowerCase();

            const matchesSearch =
                lesson.title.toLowerCase().includes(searchText) ||
                lesson.moduleName.toLowerCase().includes(searchText);

            const matchesStatus =
                statusFilter === "All" ||
                lesson.status === statusFilter;

            const matchesModule =
                moduleFilter === "All" ||
                lesson.module === moduleFilter;

            return (
                matchesSearch &&
                matchesStatus &&
                matchesModule
            );
        });
    }, [
        lessons,
        search,
        statusFilter,
        moduleFilter,
    ]);

    /* ========================================================= */
    /* STATS */
    /* ========================================================= */

    const publishedCount = lessons.filter(
        (lesson) => lesson.status === "Published"
    ).length;

    const draftCount = lessons.filter(
        (lesson) => lesson.status === "Draft"
    ).length;

    const videoCount = lessons.filter(
        (lesson) => lesson.type === "Video"
    ).length;

    /* ========================================================= */
    /* DELETE LESSON */
    /* ========================================================= */

    const deleteLesson = (id) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this lesson?"
        );

        if (!confirmed) return;

        setLessons((previous) =>
            previous.filter(
                (lesson) => lesson.id !== id
            )
        );
    };

    return (
        <div className="space-y-7">

            {/* ===================================================== */}
            {/* HEADER */}
            {/* ===================================================== */}

            <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-[#0b1727] lg:p-8">

                {/* Background glow */}

                <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-400/10" />

                <div className="pointer-events-none absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-teal-500/10 blur-3xl dark:bg-teal-400/10" />

                <div className="relative">

                    {/* Back */}

                    <Link
                        to="/teacher/courses"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                    >
                        <span>←</span>
                        My Courses
                    </Link>

                    <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

                        {/* Heading */}

                        <div>

                            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-teal-600 dark:text-teal-400">
                                Teacher Workspace / Curriculum
                            </p>

                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
                                Lessons
                            </h1>

                            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
                                Organize your course curriculum and manage
                                video lessons, reading material, and learning
                                resources from one workspace.
                            </p>

                        </div>

                        {/* Add Lesson */}

                        <Link
                            to="/teacher/lessons/create"
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-xs font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                        >
                            <span className="text-base leading-none">
                                +
                            </span>

                            Add Lesson
                        </Link>

                    </div>

                </div>

            </section>


            {/* ===================================================== */}
            {/* STATS */}
            {/* ===================================================== */}

            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

                <StatCard
                    label="Total Lessons"
                    value={lessons.length}
                    description="Across all modules"
                    icon="▤"
                    accent="blue"
                />

                <StatCard
                    label="Published"
                    value={publishedCount}
                    description="Visible to students"
                    icon="✓"
                    accent="teal"
                />

                <StatCard
                    label="Draft Lessons"
                    value={draftCount}
                    description="Still being prepared"
                    icon="◌"
                    accent="slate"
                />

                <StatCard
                    label="Video Lessons"
                    value={videoCount}
                    description="Learning videos"
                    icon="▶"
                    accent="blue"
                />

            </section>


            {/* ===================================================== */}
            {/* CURRICULUM OVERVIEW */}
            {/* ===================================================== */}

            <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-[#0b1727]">

                {/* Section Header */}

                <div className="flex flex-col gap-4 border-b border-slate-200 p-5 dark:border-slate-800 lg:flex-row lg:items-center lg:justify-between">

                    <div>

                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
                            Curriculum Manager
                        </p>

                        <h2 className="mt-1 text-xl font-bold text-slate-900 dark:text-white">
                            Course Lessons
                        </h2>

                    </div>

                    <div className="text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
                        {filteredLessons.length} lessons displayed
                    </div>

                </div>


                {/* ================================================= */}
                {/* FILTERS */}
                {/* ================================================= */}

                <div className="grid grid-cols-1 gap-3 border-b border-slate-200 p-5 dark:border-slate-800 md:grid-cols-3">

                    {/* Search */}

                    <div className="relative">

                        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400">
                            ⌕
                        </span>

                        <input
                            type="text"
                            value={search}
                            onChange={(e) =>
                                setSearch(e.target.value)
                            }
                            placeholder="Search lessons..."
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-xs text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-[#07111f] dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus:border-blue-500"
                        />

                    </div>


                    {/* Module Filter */}

                    <select
                        value={moduleFilter}
                        onChange={(e) =>
                            setModuleFilter(e.target.value)
                        }
                        className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-600 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-[#07111f] dark:text-slate-300 dark:focus:border-blue-500"
                    >

                        <option value="All">
                            All Modules
                        </option>

                        {modules.map((module) => (
                            <option
                                key={module}
                                value={module}
                            >
                                {module}
                            </option>
                        ))}

                    </select>


                    {/* Status Filter */}

                    <select
                        value={statusFilter}
                        onChange={(e) =>
                            setStatusFilter(e.target.value)
                        }
                        className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-600 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-[#07111f] dark:text-slate-300 dark:focus:border-blue-500"
                    >

                        <option value="All">
                            All Status
                        </option>

                        <option value="Published">
                            Published
                        </option>

                        <option value="Draft">
                            Draft
                        </option>

                    </select>

                </div>


                {/* ================================================= */}
                {/* LESSON LIST */}
                {/* ================================================= */}

                <div className="divide-y divide-slate-100 dark:divide-slate-800">

                    {filteredLessons.length > 0 ? (

                        filteredLessons.map(
                            (lesson, index) => (

                                <LessonRow
                                    key={lesson.id}
                                    lesson={lesson}
                                    index={index}
                                    onDelete={deleteLesson}
                                />

                            )
                        )

                    ) : (

                        <div className="px-6 py-16 text-center">

                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-xl text-blue-500 dark:border-slate-700 dark:bg-[#07111f] dark:text-blue-400">
                                ⌕
                            </div>

                            <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">
                                No lessons found
                            </h3>

                            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                                Try changing your search or filter.
                            </p>

                        </div>

                    )}

                </div>

            </section>


            {/* ===================================================== */}
            {/* MODULE STRUCTURE */}
            {/* ===================================================== */}

            <section>

                <div className="mb-4 flex items-end justify-between">

                    <div>

                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
                            Learning Structure
                        </p>

                        <h2 className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
                            Modules
                        </h2>

                    </div>

                    <button
                        type="button"
                        className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-blue-600 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 dark:border-slate-700 dark:bg-[#0b1727] dark:text-blue-400 dark:hover:border-blue-900 dark:hover:bg-blue-950/30"
                    >
                        + Add Module
                    </button>

                </div>


                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">

                    {modules.map((module, index) => {

                        const moduleLessons = lessons.filter(
                            (lesson) =>
                                lesson.module === module
                        );

                        const published =
                            moduleLessons.filter(
                                (lesson) =>
                                    lesson.status === "Published"
                            ).length;

                        return (
                            <div
                                key={module}
                                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md dark:border-slate-800 dark:bg-[#0b1727] dark:hover:border-blue-900"
                            >

                                {/* Decorative glow */}

                                <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-blue-500/5 dark:bg-blue-400/5" />

                                <div className="relative">

                                    <div className="flex items-start justify-between">

                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-xs font-bold text-blue-600 dark:border-blue-900/50 dark:bg-blue-950/40 dark:text-blue-400">
                                            {String(index + 1).padStart(
                                                2,
                                                "0"
                                            )}
                                        </div>

                                        <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                                            {published}/
                                            {moduleLessons.length} live
                                        </span>

                                    </div>

                                    <h3 className="mt-5 text-base font-bold text-slate-900 dark:text-white">
                                        {module}
                                    </h3>

                                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                        {
                                            moduleLessons[0]
                                                ?.moduleName
                                        }
                                    </p>

                                    <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800">

                                        <span className="text-[9px] font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                                            {moduleLessons.length} Lessons
                                        </span>

                                        <button
                                            type="button"
                                            className="text-[10px] font-semibold text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                                        >
                                            Manage →
                                        </button>

                                    </div>

                                </div>

                            </div>
                        );
                    })}

                </div>

            </section>


            {/* ===================================================== */}
            {/* FOOTER NOTE */}
            {/* ===================================================== */}

            <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5 dark:border-blue-900/40 dark:bg-blue-950/20">

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-blue-200 bg-white font-bold text-blue-600 dark:border-blue-900 dark:bg-blue-950/50 dark:text-blue-400">
                        i
                    </div>

                    <p className="text-xs leading-5 text-slate-600 dark:text-slate-400">

                        <span className="font-semibold text-slate-800 dark:text-slate-200">
                            Curriculum tip:
                        </span>{" "}

                        Keep lessons focused on one learning objective and
                        organize related lessons into logical modules. You can
                        add quizzes and assignments after building the lesson
                        structure.

                    </p>

                </div>

            </div>

        </div>
    );
}


/* ============================================================= */
/* STAT CARD */
/* ============================================================= */

function StatCard({
    label,
    value,
    description,
    icon,
    accent = "blue",
}) {
    const accentClasses = {
        blue: {
            border:
                "border-blue-100 dark:border-blue-900/40",

            icon:
                "border-blue-100 bg-blue-50 text-blue-600 dark:border-blue-900/50 dark:bg-blue-950/40 dark:text-blue-400",

            value:
                "text-blue-600 dark:text-blue-400",
        },

        teal: {
            border:
                "border-teal-100 dark:border-teal-900/40",

            icon:
                "border-teal-100 bg-teal-50 text-teal-600 dark:border-teal-900/50 dark:bg-teal-950/40 dark:text-teal-400",

            value:
                "text-teal-600 dark:text-teal-400",
        },

        slate: {
            border:
                "border-slate-200 dark:border-slate-800",

            icon:
                "border-slate-200 bg-slate-50 text-slate-500 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-400",

            value:
                "text-slate-700 dark:text-slate-200",
        },
    };

    const theme = accentClasses[accent];

    return (
        <div
            className={`rounded-2xl border bg-white p-5 shadow-sm ${theme.border} dark:bg-[#0b1727]`}
        >

            <div className="flex items-start justify-between">

                <div>

                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
                        {label}
                    </p>

                    <p
                        className={`mt-2 text-3xl font-bold ${theme.value}`}
                    >
                        {value}
                    </p>

                </div>

                <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl border text-sm ${theme.icon}`}
                >
                    {icon}
                </div>

            </div>

            <p className="mt-3 text-[10px] text-slate-400 dark:text-slate-500">
                {description}
            </p>

        </div>
    );
}


/* ============================================================= */
/* LESSON ROW */
/* ============================================================= */

function LessonRow({
    lesson,
    index,
    onDelete,
}) {
    const typeIcon = {
        Video: "▶",
        PDF: "▤",
        Article: "≡",
    };

    return (
        <div className="group flex flex-col gap-4 px-5 py-5 transition hover:bg-slate-50 dark:hover:bg-slate-900/30 lg:flex-row lg:items-center">

            {/* Number */}

            <div className="hidden w-8 shrink-0 text-[10px] font-semibold text-slate-300 dark:text-slate-600 lg:block">
                {String(index + 1).padStart(2, "0")}
            </div>


            {/* Lesson Icon */}

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-sm text-blue-600 dark:border-blue-900/50 dark:bg-blue-950/40 dark:text-blue-400">
                {typeIcon[lesson.type] || "•"}
            </div>


            {/* Information */}

            <div className="min-w-0 flex-1">

                <div className="flex flex-wrap items-center gap-2">

                    <h3 className="truncate text-sm font-bold text-slate-900 dark:text-white">
                        {lesson.title}
                    </h3>

                    <StatusBadge
                        status={lesson.status}
                    />

                </div>

                <div className="mt-1 flex flex-wrap items-center gap-2 text-[10px] text-slate-400 dark:text-slate-500">

                    <span>
                        {lesson.moduleName}
                    </span>

                    <span className="text-slate-300 dark:text-slate-700">
                        •
                    </span>

                    <span>
                        {lesson.type}
                    </span>

                    <span className="text-slate-300 dark:text-slate-700">
                        •
                    </span>

                    <span>
                        {lesson.duration}
                    </span>

                    <span className="text-slate-300 dark:text-slate-700">
                        •
                    </span>

                    <span>
                        {lesson.resources} resources
                    </span>

                </div>

            </div>


            {/* Actions */}

            <div className="flex items-center gap-2 lg:opacity-60 lg:transition lg:group-hover:opacity-100">

                <button
                    type="button"
                    className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-[10px] font-semibold text-slate-500 transition hover:border-blue-200 hover:text-blue-600 dark:border-slate-700 dark:bg-[#07111f] dark:text-slate-400 dark:hover:border-blue-900 dark:hover:text-blue-400"
                >
                    View
                </button>

                <button
                    type="button"
                    className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-[10px] font-semibold text-slate-500 transition hover:border-blue-200 hover:text-blue-600 dark:border-slate-700 dark:bg-[#07111f] dark:text-slate-400 dark:hover:border-blue-900 dark:hover:text-blue-400"
                >
                    Edit
                </button>

                <button
                    type="button"
                    onClick={() =>
                        onDelete(lesson.id)
                    }
                    className="rounded-lg border border-red-100 bg-white px-3 py-2 text-[10px] font-semibold text-red-500 transition hover:border-red-200 hover:bg-red-50 dark:border-red-900/40 dark:bg-[#07111f] dark:text-red-400 dark:hover:bg-red-950/30"
                >
                    Delete
                </button>

            </div>

        </div>
    );
}


/* ============================================================= */
/* STATUS BADGE */
/* ============================================================= */

function StatusBadge({ status }) {
    const isPublished =
        status === "Published";

    return (
        <span
            className={`rounded-full border px-2 py-1 text-[8px] font-semibold uppercase tracking-wider ${isPublished
                ? "border-teal-100 bg-teal-50 text-teal-600 dark:border-teal-900/50 dark:bg-teal-950/40 dark:text-teal-400"
                : "border-slate-200 bg-slate-50 text-slate-500 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-400"
                }`}
        >
            {status}
        </span>
    );
}

export default Lessons;