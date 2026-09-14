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

    const modules = useMemo(() => {
        return [...new Set(lessons.map((lesson) => lesson.module))];
    }, [lessons]);

    const filteredLessons = useMemo(() => {
        return lessons.filter((lesson) => {
            const matchesSearch =
                lesson.title
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                lesson.moduleName
                    .toLowerCase()
                    .includes(search.toLowerCase());

            const matchesStatus =
                statusFilter === "All" ||
                lesson.status === statusFilter;

            const matchesModule =
                moduleFilter === "All" ||
                lesson.module === moduleFilter;

            return matchesSearch && matchesStatus && matchesModule;
        });
    }, [lessons, search, statusFilter, moduleFilter]);

    const publishedCount = lessons.filter(
        (lesson) => lesson.status === "Published"
    ).length;

    const draftCount = lessons.filter(
        (lesson) => lesson.status === "Draft"
    ).length;

    const videoCount = lessons.filter(
        (lesson) => lesson.type === "Video"
    ).length;

    const deleteLesson = (id) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this lesson?"
        );

        if (!confirmed) return;

        setLessons((previous) =>
            previous.filter((lesson) => lesson.id !== id)
        );
    };

    return (
        <div className="space-y-7">

            {/* ===================================================== */}
            {/* HEADER */}
            {/* ===================================================== */}

            <section className="relative overflow-hidden rounded-3xl border border-[#F2B84B]/15 bg-[#1B241E] p-7 lg:p-8">

                <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#F2B84B]/5 blur-3xl" />

                <div className="pointer-events-none absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-[#7C9A82]/5 blur-3xl" />

                <div className="relative">

                    <Link
                        to="/teacher/courses"
                        className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#7C9A82] transition hover:text-[#F2B84B]"
                    >
                        <span>←</span>
                        My Courses
                    </Link>

                    <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

                        <div>

                            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#7C9A82]">
                                Teacher Workspace / Curriculum
                            </p>

                            <h1 className="mt-2 font-['Space_Grotesk'] text-3xl font-bold tracking-tight text-[#F3EEDD] md:text-4xl">
                                Lessons
                            </h1>

                            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#F3EEDD]/50">
                                Organize your course curriculum and manage
                                video lessons, reading material, and learning
                                resources from one workspace.
                            </p>

                        </div>

                        <button
                            type="button"
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F2B84B] px-5 py-3 text-xs font-bold text-[#161F19] transition hover:-translate-y-0.5 hover:bg-[#F2B84B]/90"
                        >
                            <span className="text-base leading-none">+</span>
                            Add Lesson
                        </button>

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
                />

                <StatCard
                    label="Published"
                    value={publishedCount}
                    description="Visible to students"
                    icon="✓"
                    accent="green"
                />

                <StatCard
                    label="Draft Lessons"
                    value={draftCount}
                    description="Still being prepared"
                    icon="◌"
                    accent="red"
                />

                <StatCard
                    label="Video Lessons"
                    value={videoCount}
                    description="Learning videos"
                    icon="▶"
                />

            </section>


            {/* ===================================================== */}
            {/* CURRICULUM OVERVIEW */}
            {/* ===================================================== */}

            <section className="rounded-3xl border border-[#F2B84B]/10 bg-[#1B241E]">

                <div className="flex flex-col gap-4 border-b border-[#F2B84B]/10 p-5 lg:flex-row lg:items-center lg:justify-between">

                    <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#7C9A82]">
                            Curriculum Manager
                        </p>

                        <h2 className="mt-1 font-['Space_Grotesk'] text-xl font-bold text-[#F3EEDD]">
                            Course Lessons
                        </h2>
                    </div>

                    <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#F3EEDD]/25">
                        {filteredLessons.length} lessons displayed
                    </div>

                </div>


                {/* ================================================= */}
                {/* FILTERS */}
                {/* ================================================= */}

                <div className="grid grid-cols-1 gap-3 border-b border-[#F2B84B]/10 p-5 md:grid-cols-3">

                    {/* Search */}

                    <div className="relative">

                        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-xs text-[#F3EEDD]/25">
                            ⌕
                        </span>

                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search lessons..."
                            className="w-full rounded-xl border border-[#F2B84B]/10 bg-[#161F19] py-3 pl-10 pr-4 text-xs text-[#F3EEDD] outline-none placeholder:text-[#F3EEDD]/20 focus:border-[#F2B84B]/30"
                        />

                    </div>


                    {/* Module */}

                    <select
                        value={moduleFilter}
                        onChange={(e) => setModuleFilter(e.target.value)}
                        className="rounded-xl border border-[#F2B84B]/10 bg-[#161F19] px-4 py-3 text-xs text-[#F3EEDD]/60 outline-none focus:border-[#F2B84B]/30"
                    >
                        <option value="All">All Modules</option>

                        {modules.map((module) => (
                            <option key={module} value={module}>
                                {module}
                            </option>
                        ))}
                    </select>


                    {/* Status */}

                    <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="rounded-xl border border-[#F2B84B]/10 bg-[#161F19] px-4 py-3 text-xs text-[#F3EEDD]/60 outline-none focus:border-[#F2B84B]/30"
                    >
                        <option value="All">All Status</option>
                        <option value="Published">Published</option>
                        <option value="Draft">Draft</option>
                    </select>

                </div>


                {/* ================================================= */}
                {/* LESSON LIST */}
                {/* ================================================= */}

                <div className="divide-y divide-[#F2B84B]/5">

                    {filteredLessons.length > 0 ? (
                        filteredLessons.map((lesson, index) => (
                            <LessonRow
                                key={lesson.id}
                                lesson={lesson}
                                index={index}
                                onDelete={deleteLesson}
                            />
                        ))
                    ) : (
                        <div className="px-6 py-16 text-center">

                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#F2B84B]/10 bg-[#161F19] text-xl text-[#F2B84B]">
                                ⌕
                            </div>

                            <h3 className="mt-4 font-['Space_Grotesk'] text-lg font-bold text-[#F3EEDD]">
                                No lessons found
                            </h3>

                            <p className="mt-2 text-xs text-[#F3EEDD]/30">
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
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#7C9A82]">
                            Learning Structure
                        </p>

                        <h2 className="mt-1 font-['Space_Grotesk'] text-2xl font-bold text-[#F3EEDD]">
                            Modules
                        </h2>
                    </div>

                    <button
                        type="button"
                        className="rounded-xl border border-[#F2B84B]/10 bg-[#1B241E] px-4 py-2.5 text-xs font-semibold text-[#F2B84B] transition hover:border-[#F2B84B]/25 hover:bg-[#F2B84B]/5"
                    >
                        + Add Module
                    </button>

                </div>


                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">

                    {modules.map((module, index) => {

                        const moduleLessons = lessons.filter(
                            (lesson) => lesson.module === module
                        );

                        const published = moduleLessons.filter(
                            (lesson) => lesson.status === "Published"
                        ).length;

                        return (
                            <div
                                key={module}
                                className="group relative overflow-hidden rounded-2xl border border-[#F2B84B]/10 bg-[#1B241E] p-5 transition hover:-translate-y-0.5 hover:border-[#F2B84B]/20"
                            >

                                <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-full bg-[#F2B84B]/5" />

                                <div className="relative">

                                    <div className="flex items-start justify-between">

                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#F2B84B]/10 bg-[#161F19] font-mono text-xs text-[#F2B84B]">
                                            {String(index + 1).padStart(2, "0")}
                                        </div>

                                        <span className="font-mono text-[9px] uppercase tracking-wider text-[#F3EEDD]/25">
                                            {published}/{moduleLessons.length} live
                                        </span>

                                    </div>

                                    <h3 className="mt-5 font-['Space_Grotesk'] text-base font-bold text-[#F3EEDD]">
                                        {module}
                                    </h3>

                                    <p className="mt-1 text-xs text-[#F3EEDD]/35">
                                        {moduleLessons[0]?.moduleName}
                                    </p>

                                    <div className="mt-5 flex items-center justify-between border-t border-[#F2B84B]/5 pt-4">

                                        <span className="font-mono text-[9px] uppercase tracking-wider text-[#7C9A82]">
                                            {moduleLessons.length} Lessons
                                        </span>

                                        <button
                                            type="button"
                                            className="text-[10px] font-semibold text-[#F2B84B] transition hover:text-[#F3EEDD]"
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

            <div className="rounded-2xl border border-[#F2B84B]/10 bg-[#141C17] p-5">

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#F2B84B]/15 bg-[#F2B84B]/5 font-bold text-[#F2B84B]">
                        i
                    </div>

                    <p className="text-xs leading-5 text-[#F3EEDD]/35">
                        <span className="font-semibold text-[#F3EEDD]/60">
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
    accent = "gold",
}) {
    const accentClasses = {
        gold: {
            border: "border-[#F2B84B]/10",
            icon: "border-[#F2B84B]/15 bg-[#F2B84B]/5 text-[#F2B84B]",
            value: "text-[#F2B84B]",
        },
        green: {
            border: "border-[#7C9A82]/10",
            icon: "border-[#7C9A82]/15 bg-[#7C9A82]/5 text-[#7C9A82]",
            value: "text-[#7C9A82]",
        },
        red: {
            border: "border-[#D6402C]/10",
            icon: "border-[#D6402C]/15 bg-[#D6402C]/5 text-[#D6402C]",
            value: "text-[#D6402C]",
        },
    };

    const theme = accentClasses[accent];

    return (
        <div
            className={`rounded-2xl border ${theme.border} bg-[#1B241E] p-5`}
        >

            <div className="flex items-start justify-between">

                <div>

                    <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#F3EEDD]/30">
                        {label}
                    </p>

                    <p
                        className={`mt-2 font-['Space_Grotesk'] text-3xl font-bold ${theme.value}`}
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

            <p className="mt-3 text-[10px] text-[#F3EEDD]/25">
                {description}
            </p>

        </div>
    );
}


/* ============================================================= */
/* LESSON ROW */
/* ============================================================= */

function LessonRow({ lesson, index, onDelete }) {
    const typeIcon = {
        Video: "▶",
        PDF: "▤",
        Article: "≡",
    };

    return (
        <div className="group flex flex-col gap-4 px-5 py-5 transition hover:bg-[#161F19]/60 lg:flex-row lg:items-center">

            {/* Number */}

            <div className="hidden w-8 shrink-0 font-mono text-[10px] text-[#F3EEDD]/20 lg:block">
                {String(index + 1).padStart(2, "0")}
            </div>


            {/* Lesson Icon */}

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#F2B84B]/10 bg-[#161F19] text-sm text-[#F2B84B]">
                {typeIcon[lesson.type] || "•"}
            </div>


            {/* Information */}

            <div className="min-w-0 flex-1">

                <div className="flex flex-wrap items-center gap-2">

                    <h3 className="truncate font-['Space_Grotesk'] text-sm font-bold text-[#F3EEDD]">
                        {lesson.title}
                    </h3>

                    <StatusBadge status={lesson.status} />

                </div>

                <div className="mt-1 flex flex-wrap items-center gap-2 text-[10px] text-[#F3EEDD]/30">

                    <span>{lesson.moduleName}</span>

                    <span className="text-[#F3EEDD]/10">
                        •
                    </span>

                    <span>{lesson.type}</span>

                    <span className="text-[#F3EEDD]/10">
                        •
                    </span>

                    <span>{lesson.duration}</span>

                    <span className="text-[#F3EEDD]/10">
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
                    className="rounded-lg border border-[#F2B84B]/10 bg-[#161F19] px-3 py-2 text-[10px] font-semibold text-[#F3EEDD]/45 transition hover:border-[#F2B84B]/20 hover:text-[#F2B84B]"
                >
                    View
                </button>

                <button
                    type="button"
                    className="rounded-lg border border-[#F2B84B]/10 bg-[#161F19] px-3 py-2 text-[10px] font-semibold text-[#F3EEDD]/45 transition hover:border-[#F2B84B]/20 hover:text-[#F2B84B]"
                >
                    Edit
                </button>

                <button
                    type="button"
                    onClick={() => onDelete(lesson.id)}
                    className="rounded-lg border border-[#D6402C]/10 bg-[#161F19] px-3 py-2 text-[10px] font-semibold text-[#D6402C]/60 transition hover:border-[#D6402C]/25 hover:bg-[#D6402C]/5 hover:text-[#D6402C]"
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
    const isPublished = status === "Published";

    return (
        <span
            className={`rounded-full border px-2 py-1 font-mono text-[8px] uppercase tracking-wider ${isPublished
                ? "border-[#7C9A82]/20 bg-[#7C9A82]/5 text-[#7C9A82]"
                : "border-[#D6402C]/20 bg-[#D6402C]/5 text-[#D6402C]"
                }`}
        >
            {status}
        </span>
    );
}

export default Lessons;