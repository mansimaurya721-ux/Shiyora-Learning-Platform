import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

function Quizzes() {
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");
    const [courseFilter, setCourseFilter] = useState("All");

    const [quizzes, setQuizzes] = useState([
        {
            id: 1,
            title: "HTML Fundamentals Quiz",
            course: "Full Stack Web Development",
            questions: 15,
            marks: 30,
            passingScore: 50,
            attempts: 128,
            status: "Published",
            duration: "20 min",
        },
        {
            id: 2,
            title: "CSS Basics Assessment",
            course: "Full Stack Web Development",
            questions: 20,
            marks: 40,
            passingScore: 50,
            attempts: 96,
            status: "Published",
            duration: "25 min",
        },
        {
            id: 3,
            title: "JavaScript Fundamentals",
            course: "JavaScript Essentials",
            questions: 25,
            marks: 50,
            passingScore: 60,
            attempts: 84,
            status: "Published",
            duration: "30 min",
        },
        {
            id: 4,
            title: "React Components Quiz",
            course: "React Masterclass",
            questions: 18,
            marks: 36,
            passingScore: 50,
            attempts: 62,
            status: "Published",
            duration: "25 min",
        },
        {
            id: 5,
            title: "JavaScript ES6 Assessment",
            course: "JavaScript Essentials",
            questions: 20,
            marks: 40,
            passingScore: 60,
            attempts: 0,
            status: "Draft",
            duration: "25 min",
        },
        {
            id: 6,
            title: "React Hooks Assessment",
            course: "React Masterclass",
            questions: 15,
            marks: 30,
            passingScore: 50,
            attempts: 0,
            status: "Draft",
            duration: "20 min",
        },
    ]);

    const courses = useMemo(() => {
        return [...new Set(quizzes.map((quiz) => quiz.course))];
    }, [quizzes]);

    const filteredQuizzes = useMemo(() => {
        return quizzes.filter((quiz) => {
            const searchValue = search.toLowerCase();

            const matchesSearch =
                quiz.title.toLowerCase().includes(searchValue) ||
                quiz.course.toLowerCase().includes(searchValue);

            const matchesStatus =
                statusFilter === "All" ||
                quiz.status === statusFilter;

            const matchesCourse =
                courseFilter === "All" ||
                quiz.course === courseFilter;

            return matchesSearch && matchesStatus && matchesCourse;
        });
    }, [quizzes, search, statusFilter, courseFilter]);

    const publishedCount = quizzes.filter(
        (quiz) => quiz.status === "Published"
    ).length;

    const draftCount = quizzes.filter(
        (quiz) => quiz.status === "Draft"
    ).length;

    const totalAttempts = quizzes.reduce(
        (total, quiz) => total + quiz.attempts,
        0
    );

    const totalQuestions = quizzes.reduce(
        (total, quiz) => total + quiz.questions,
        0
    );

    const deleteQuiz = (id) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this quiz?"
        );

        if (!confirmed) return;

        setQuizzes((previous) =>
            previous.filter((quiz) => quiz.id !== id)
        );
    };

    return (
        <div className="space-y-7">

            {/* HEADER */}
            <section className="relative overflow-hidden rounded-3xl border border-blue-200 bg-white p-7 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727] lg:p-8">

                <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl dark:bg-blue-400/10" />

                <div className="pointer-events-none absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-teal-500/5 blur-3xl dark:bg-teal-400/10" />

                <div className="relative">

                    <Link
                        to="/teacher/dashboard"
                        className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-blue-600 transition hover:text-teal-600 dark:text-blue-400 dark:hover:text-teal-400"
                    >
                        <span>←</span>
                        Teacher Dashboard
                    </Link>

                    <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

                        <div>

                            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-teal-600 dark:text-teal-400">
                                Teacher Workspace / Assessment
                            </p>

                            <h1 className="mt-2 font-['Space_Grotesk'] text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
                                Quizzes
                            </h1>

                            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
                                Create and manage assessments that help
                                students test their understanding and track
                                their learning progress.
                            </p>

                        </div>

                        <button
                            type="button"
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 px-5 py-3 text-xs font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:from-blue-700 hover:to-teal-600"
                        >
                            <span className="text-base leading-none">
                                +
                            </span>
                            Create Quiz
                        </button>

                    </div>

                </div>
            </section>


            {/* STATS */}
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

                <StatCard
                    label="Total Quizzes"
                    value={quizzes.length}
                    description="All assessments"
                    icon="?"
                />

                <StatCard
                    label="Published"
                    value={publishedCount}
                    description="Available to students"
                    icon="✓"
                    accent="green"
                />

                <StatCard
                    label="Draft Quizzes"
                    value={draftCount}
                    description="Still being prepared"
                    icon="◌"
                    accent="blue"
                />

                <StatCard
                    label="Total Attempts"
                    value={totalAttempts}
                    description={`${totalQuestions} questions available`}
                    icon="↗"
                    accent="teal"
                />

            </section>


            {/* QUIZ MANAGEMENT */}
            <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">

                {/* Header */}

                <div className="flex flex-col gap-4 border-b border-slate-200 p-5 dark:border-[#1e334a] lg:flex-row lg:items-center lg:justify-between">

                    <div>

                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
                            Assessment Manager
                        </p>

                        <h2 className="mt-1 font-['Space_Grotesk'] text-xl font-bold text-slate-900 dark:text-white">
                            Your Quizzes
                        </h2>

                    </div>

                    <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
                        {filteredQuizzes.length} quizzes displayed
                    </div>

                </div>


                {/* FILTERS */}

                <div className="grid grid-cols-1 gap-3 border-b border-slate-200 p-5 dark:border-[#1e334a] md:grid-cols-3">

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
                            placeholder="Search quizzes..."
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-xs text-slate-700 outline-none placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/10 dark:border-[#1e334a] dark:bg-[#07111f] dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus:border-teal-400"
                        />

                    </div>


                    {/* Course */}

                    <select
                        value={courseFilter}
                        onChange={(e) =>
                            setCourseFilter(e.target.value)
                        }
                        className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-700 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/10 dark:border-[#1e334a] dark:bg-[#07111f] dark:text-slate-300 dark:focus:border-teal-400"
                    >
                        <option value="All">
                            All Courses
                        </option>

                        {courses.map((course) => (
                            <option
                                key={course}
                                value={course}
                            >
                                {course}
                            </option>
                        ))}
                    </select>


                    {/* Status */}

                    <select
                        value={statusFilter}
                        onChange={(e) =>
                            setStatusFilter(e.target.value)
                        }
                        className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-700 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/10 dark:border-[#1e334a] dark:bg-[#07111f] dark:text-slate-300 dark:focus:border-teal-400"
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


                {/* QUIZ CARDS */}

                <div className="grid grid-cols-1 gap-4 p-5 lg:grid-cols-2">

                    {filteredQuizzes.length > 0 ? (
                        filteredQuizzes.map((quiz, index) => (
                            <QuizCard
                                key={quiz.id}
                                quiz={quiz}
                                index={index}
                                onDelete={deleteQuiz}
                            />
                        ))
                    ) : (
                        <div className="col-span-full px-6 py-16 text-center">

                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-xl text-blue-500 dark:border-[#1e334a] dark:bg-[#07111f] dark:text-blue-400">
                                ?
                            </div>

                            <h3 className="mt-4 font-['Space_Grotesk'] text-lg font-bold text-slate-900 dark:text-white">
                                No quizzes found
                            </h3>

                            <p className="mt-2 text-xs text-slate-500 dark:text-slate-500">
                                Try changing your search or filters.
                            </p>

                        </div>
                    )}

                </div>

            </section>


            {/* QUIZ CREATION WORKFLOW */}

            <section>

                <div className="mb-4">

                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
                        Assessment Workflow
                    </p>

                    <h2 className="mt-1 font-['Space_Grotesk'] text-2xl font-bold text-slate-900 dark:text-white">
                        Build Better Assessments
                    </h2>

                </div>


                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

                    <WorkflowCard
                        number="01"
                        title="Create Questions"
                        description="Add multiple-choice, true/false and other question types."
                    />

                    <WorkflowCard
                        number="02"
                        title="Set Scoring"
                        description="Define marks, passing score and quiz duration."
                    />

                    <WorkflowCard
                        number="03"
                        title="Publish"
                        description="Review your assessment and make it available to students."
                    />

                </div>

            </section>


            {/* FOOTER NOTE */}

            <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-blue-200 bg-blue-50 font-bold text-blue-600 dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-blue-400">
                        i
                    </div>

                    <p className="text-xs leading-5 text-slate-500 dark:text-slate-400">

                        <span className="font-semibold text-slate-700 dark:text-slate-200">
                            Assessment tip:
                        </span>{" "}
                        Keep questions aligned with your lesson objectives
                        and use a clear passing score so students understand
                        what is expected from them.

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
            border: "border-blue-100 dark:border-blue-500/10",
            icon: "border-blue-200 bg-blue-50 text-blue-600 dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-blue-400",
            value: "text-blue-600 dark:text-blue-400",
        },

        green: {
            border: "border-emerald-100 dark:border-emerald-500/10",
            icon: "border-emerald-200 bg-emerald-50 text-emerald-600 dark:border-emerald-400/20 dark:bg-emerald-500/10 dark:text-emerald-400",
            value: "text-emerald-600 dark:text-emerald-400",
        },

        teal: {
            border: "border-teal-100 dark:border-teal-500/10",
            icon: "border-teal-200 bg-teal-50 text-teal-600 dark:border-teal-400/20 dark:bg-teal-500/10 dark:text-teal-400",
            value: "text-teal-600 dark:text-teal-400",
        },
    };

    const theme = accentClasses[accent];

    return (
        <div
            className={`rounded-2xl border ${theme.border} bg-white p-5 shadow-sm dark:bg-[#0b1727]`}
        >

            <div className="flex items-start justify-between">

                <div>

                    <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
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

            <p className="mt-3 text-[10px] text-slate-500 dark:text-slate-500">
                {description}
            </p>

        </div>
    );
}


/* ============================================================= */
/* QUIZ CARD */
/* ============================================================= */

function QuizCard({ quiz, index, onDelete }) {
    return (
        <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md dark:border-[#1e334a] dark:bg-[#07111f] dark:hover:border-teal-500/30">

            {/* Decorative corner */}

            <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-blue-500/5 transition group-hover:bg-teal-500/10 dark:bg-blue-400/5 dark:group-hover:bg-teal-400/10" />

            <div className="relative">

                {/* Top */}

                <div className="flex items-start justify-between gap-4">

                    <div className="flex items-center gap-3">

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 font-mono text-xs font-bold text-blue-600 dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-blue-400">
                            {String(index + 1).padStart(2, "0")}
                        </div>

                        <div className="min-w-0">

                            <div className="flex flex-wrap items-center gap-2">

                                <h3 className="font-['Space_Grotesk'] text-sm font-bold text-slate-900 dark:text-white">
                                    {quiz.title}
                                </h3>

                                <StatusBadge status={quiz.status} />

                            </div>

                            <p className="mt-1 truncate text-[10px] text-slate-500 dark:text-slate-500">
                                {quiz.course}
                            </p>

                        </div>

                    </div>

                    <button
                        type="button"
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-400 transition hover:border-blue-200 hover:text-blue-600 dark:border-[#1e334a] dark:text-slate-500 dark:hover:border-teal-500/30 dark:hover:text-teal-400"
                    >
                        ⋮
                    </button>

                </div>


                {/* Details */}

                <div className="mt-5 grid grid-cols-2 gap-2">

                    <InfoItem
                        label="Questions"
                        value={quiz.questions}
                    />

                    <InfoItem
                        label="Marks"
                        value={quiz.marks}
                    />

                    <InfoItem
                        label="Pass Score"
                        value={`${quiz.passingScore}%`}
                    />

                    <InfoItem
                        label="Duration"
                        value={quiz.duration}
                    />

                </div>


                {/* Attempts */}

                <div className="mt-4 rounded-xl border border-slate-200 bg-white px-4 py-3 dark:border-[#1e334a] dark:bg-[#0b1727]">

                    <div className="flex items-center justify-between">

                        <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 dark:text-slate-500">
                            Student Attempts
                        </span>

                        <span className="font-['Space_Grotesk'] text-sm font-bold text-teal-600 dark:text-teal-400">
                            {quiz.attempts}
                        </span>

                    </div>

                </div>


                {/* Actions */}

                <div className="mt-5 flex gap-2">

                    <button
                        type="button"
                        className="flex-1 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-[10px] font-semibold text-slate-600 transition hover:border-blue-200 hover:text-blue-600 dark:border-[#1e334a] dark:bg-[#0b1727] dark:text-slate-400 dark:hover:border-teal-500/30 dark:hover:text-teal-400"
                    >
                        View
                    </button>

                    <button
                        type="button"
                        className="flex-1 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-[10px] font-semibold text-slate-600 transition hover:border-blue-200 hover:text-blue-600 dark:border-[#1e334a] dark:bg-[#0b1727] dark:text-slate-400 dark:hover:border-teal-500/30 dark:hover:text-teal-400"
                    >
                        Edit
                    </button>

                    <button
                        type="button"
                        onClick={() => onDelete(quiz.id)}
                        className="rounded-xl border border-rose-200 bg-white px-3 py-2.5 text-[10px] font-semibold text-rose-500 transition hover:border-rose-300 hover:bg-rose-50 hover:text-rose-600 dark:border-rose-500/20 dark:bg-[#0b1727] dark:text-rose-400 dark:hover:bg-rose-500/10"
                    >
                        Delete
                    </button>

                </div>

            </div>

        </article>
    );
}


/* ============================================================= */
/* INFO ITEM */
/* ============================================================= */

function InfoItem({ label, value }) {
    return (
        <div className="rounded-xl border border-slate-200 bg-white p-3 dark:border-[#1e334a] dark:bg-[#0b1727]">

            <p className="font-mono text-[8px] uppercase tracking-wider text-slate-400 dark:text-slate-500">
                {label}
            </p>

            <p className="mt-1 text-xs font-semibold text-slate-700 dark:text-slate-300">
                {value}
            </p>

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
                ? "border-emerald-200 bg-emerald-50 text-emerald-600 dark:border-emerald-400/20 dark:bg-emerald-500/10 dark:text-emerald-400"
                : "border-blue-200 bg-blue-50 text-blue-600 dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-blue-400"
                }`}
        >
            {status}
        </span>
    );
}


/* ============================================================= */
/* WORKFLOW CARD */
/* ============================================================= */

function WorkflowCard({
    number,
    title,
    description,
}) {
    return (
        <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md dark:border-[#1e334a] dark:bg-[#0b1727] dark:hover:border-teal-500/30">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 font-mono text-[10px] font-bold text-blue-600 dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-blue-400">
                {number}
            </div>

            <h3 className="mt-5 font-['Space_Grotesk'] text-base font-bold text-slate-900 dark:text-white">
                {title}
            </h3>

            <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                {description}
            </p>

        </div>
    );
}

export default Quizzes;