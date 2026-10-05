import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

function Assignments() {
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");
    const [courseFilter, setCourseFilter] = useState("All");

    const [assignments, setAssignments] = useState([
        {
            id: 1,
            title: "Build Your First HTML Page",
            course: "Full Stack Web Development",
            type: "Practical",
            submissions: 42,
            totalStudents: 58,
            dueDate: "12 Sep 2026",
            marks: 20,
            status: "Active",
        },
        {
            id: 2,
            title: "Create a Responsive Landing Page",
            course: "Full Stack Web Development",
            type: "Project",
            submissions: 36,
            totalStudents: 58,
            dueDate: "18 Sep 2026",
            marks: 30,
            status: "Active",
        },
        {
            id: 3,
            title: "CSS Flexbox & Grid Practice",
            course: "Full Stack Web Development",
            type: "Practical",
            submissions: 51,
            totalStudents: 58,
            dueDate: "05 Sep 2026",
            marks: 25,
            status: "Closed",
        },
        {
            id: 4,
            title: "JavaScript Calculator",
            course: "JavaScript Essentials",
            type: "Project",
            submissions: 31,
            totalStudents: 47,
            dueDate: "15 Sep 2026",
            marks: 30,
            status: "Active",
        },
        {
            id: 5,
            title: "ES6 Features Practice",
            course: "JavaScript Essentials",
            type: "Practical",
            submissions: 0,
            totalStudents: 47,
            dueDate: "25 Sep 2026",
            marks: 20,
            status: "Draft",
        },
        {
            id: 6,
            title: "React Component Challenge",
            course: "React Masterclass",
            type: "Project",
            submissions: 22,
            totalStudents: 39,
            dueDate: "20 Sep 2026",
            marks: 40,
            status: "Active",
        },
    ]);

    const courses = useMemo(() => {
        return [...new Set(assignments.map((item) => item.course))];
    }, [assignments]);

    const filteredAssignments = useMemo(() => {
        return assignments.filter((assignment) => {
            const searchValue = search.toLowerCase();

            const matchesSearch =
                assignment.title.toLowerCase().includes(searchValue) ||
                assignment.course.toLowerCase().includes(searchValue);

            const matchesStatus =
                statusFilter === "All" ||
                assignment.status === statusFilter;

            const matchesCourse =
                courseFilter === "All" ||
                assignment.course === courseFilter;

            return matchesSearch && matchesStatus && matchesCourse;
        });
    }, [assignments, search, statusFilter, courseFilter]);

    const activeCount = assignments.filter(
        (assignment) => assignment.status === "Active"
    ).length;

    const draftCount = assignments.filter(
        (assignment) => assignment.status === "Draft"
    ).length;

    const closedCount = assignments.filter(
        (assignment) => assignment.status === "Closed"
    ).length;

    const totalSubmissions = assignments.reduce(
        (total, assignment) => total + assignment.submissions,
        0
    );

    const deleteAssignment = (id) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this assignment?"
        );

        if (!confirmed) return;

        setAssignments((previous) =>
            previous.filter((assignment) => assignment.id !== id)
        );
    };

    return (
        <div className="space-y-7">

            {/* =====================================================
                HEADER
            ====================================================== */}

            <section className="relative overflow-hidden rounded-3xl border border-blue-200 bg-white p-6 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727] sm:p-7 lg:p-8">

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

                        <div className="min-w-0">

                            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-teal-600 dark:text-teal-400">
                                Teacher Workspace / Evaluation
                            </p>

                            <h1 className="mt-2 break-words text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
                                Assignments
                            </h1>

                            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
                                Create practical tasks, collect student
                                submissions and keep track of assignment
                                progress from one workspace.
                            </p>

                        </div>

                        <button
                            type="button"
                            className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 px-5 py-3 text-xs font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:from-blue-700 hover:to-teal-600 sm:w-auto"
                        >
                            <span className="text-base leading-none">
                                +
                            </span>
                            Create Assignment
                        </button>

                    </div>
                </div>
            </section>


            {/* =====================================================
                STATS
            ====================================================== */}

            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

                <StatCard
                    label="Total Assignments"
                    value={assignments.length}
                    description="All created tasks"
                    icon="▤"
                />

                <StatCard
                    label="Active"
                    value={activeCount}
                    description="Currently accepting work"
                    icon="✓"
                    accent="green"
                />

                <StatCard
                    label="Draft"
                    value={draftCount}
                    description="Not published yet"
                    icon="◌"
                    accent="blue"
                />

                <StatCard
                    label="Submissions"
                    value={totalSubmissions}
                    description={`${closedCount} assignments closed`}
                    icon="↗"
                    accent="teal"
                />

            </section>


            {/* =====================================================
                ASSIGNMENT MANAGEMENT
            ====================================================== */}

            <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">

                <div className="flex flex-col gap-4 border-b border-slate-200 p-5 dark:border-[#1e334a] lg:flex-row lg:items-center lg:justify-between">

                    <div className="min-w-0">

                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
                            Evaluation Manager
                        </p>

                        <h2 className="mt-1 break-words text-xl font-bold text-slate-900 dark:text-white">
                            Your Assignments
                        </h2>

                    </div>

                    <div className="shrink-0 font-mono text-[9px] uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
                        {filteredAssignments.length} assignments displayed
                    </div>

                </div>


                {/* =====================================================
                    FILTERS
                ====================================================== */}

                <div className="grid grid-cols-1 gap-3 border-b border-slate-200 p-5 dark:border-[#1e334a] md:grid-cols-3">

                    {/* Search */}

                    <div className="relative">

                        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400">
                            ⌕
                        </span>

                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search assignments..."
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-xs text-slate-700 outline-none placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/10 dark:border-[#1e334a] dark:bg-[#07111f] dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus:border-teal-400"
                        />

                    </div>


                    {/* Course */}

                    <select
                        value={courseFilter}
                        onChange={(e) => setCourseFilter(e.target.value)}
                        className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-700 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/10 dark:border-[#1e334a] dark:bg-[#07111f] dark:text-slate-300 dark:focus:border-teal-400"
                    >
                        <option value="All">All Courses</option>

                        {courses.map((course) => (
                            <option key={course} value={course}>
                                {course}
                            </option>
                        ))}
                    </select>


                    {/* Status */}

                    <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-700 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/10 dark:border-[#1e334a] dark:bg-[#07111f] dark:text-slate-300 dark:focus:border-teal-400"
                    >
                        <option value="All">All Status</option>
                        <option value="Active">Active</option>
                        <option value="Draft">Draft</option>
                        <option value="Closed">Closed</option>
                    </select>

                </div>


                {/* =====================================================
                    ASSIGNMENT CARDS
                ====================================================== */}

                <div className="grid grid-cols-1 gap-4 p-5 lg:grid-cols-2">

                    {filteredAssignments.length > 0 ? (

                        filteredAssignments.map((assignment, index) => (

                            <AssignmentCard
                                key={assignment.id}
                                assignment={assignment}
                                index={index}
                                onDelete={deleteAssignment}
                            />

                        ))

                    ) : (

                        <div className="col-span-full px-6 py-16 text-center">

                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-xl text-blue-500 dark:border-[#1e334a] dark:bg-[#07111f] dark:text-blue-400">
                                ⌕
                            </div>

                            <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">
                                No assignments found
                            </h3>

                            <p className="mt-2 text-xs text-slate-500 dark:text-slate-500">
                                Try changing your search or filters.
                            </p>

                        </div>

                    )}

                </div>

            </section>


            {/* =====================================================
                EVALUATION WORKFLOW
            ====================================================== */}

            <section>

                <div className="mb-4">

                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
                        Evaluation Workflow
                    </p>

                    <h2 className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
                        Assignment Lifecycle
                    </h2>

                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-4">

                    <WorkflowCard
                        number="01"
                        title="Create"
                        description="Define instructions, marks, deadline and resources."
                    />

                    <WorkflowCard
                        number="02"
                        title="Publish"
                        description="Make the assignment visible to enrolled students."
                    />

                    <WorkflowCard
                        number="03"
                        title="Review"
                        description="Check student submissions and evaluate their work."
                    />

                    <WorkflowCard
                        number="04"
                        title="Grade"
                        description="Give marks, feedback and track student performance."
                    />

                </div>

            </section>


            {/* =====================================================
                FOOTER NOTE
            ====================================================== */}

            <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-blue-200 bg-blue-50 font-bold text-blue-600 dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-blue-400">
                        i
                    </div>

                    <p className="text-xs leading-5 text-slate-500 dark:text-slate-400">

                        <span className="font-semibold text-slate-700 dark:text-slate-200">
                            Evaluation tip:
                        </span>{" "}
                        Give students clear instructions, measurable
                        objectives and a reasonable deadline. Detailed
                        feedback can make assignments much more valuable as
                        learning activities.

                    </p>

                </div>

            </div>

        </div>
    );
}


/* =============================================================
   STAT CARD
============================================================= */

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

            <div className="flex items-start justify-between gap-3">

                <div className="min-w-0">

                    <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
                        {label}
                    </p>

                    <p
                        className={`mt-2 text-3xl font-bold ${theme.value}`}
                    >
                        {value}
                    </p>

                </div>

                <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border text-sm ${theme.icon}`}
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


/* =============================================================
   ASSIGNMENT CARD
============================================================= */

function AssignmentCard({
    assignment,
    index,
    onDelete,
}) {
    const submissionPercentage =
        assignment.totalStudents > 0
            ? Math.round(
                (assignment.submissions /
                    assignment.totalStudents) *
                100
            )
            : 0;

    return (
        <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md dark:border-[#1e334a] dark:bg-[#07111f] dark:hover:border-teal-500/30">

            {/* Decorative corner */}

            <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-blue-500/5 transition group-hover:bg-teal-500/10 dark:bg-blue-400/5 dark:group-hover:bg-teal-400/10" />

            <div className="relative">

                {/* =================================================
                    TOP
                ================================================== */}

                <div className="flex min-w-0 items-start justify-between gap-3">

                    <div className="flex min-w-0 flex-1 items-start gap-3">

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 font-mono text-xs font-bold text-blue-600 dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-blue-400">
                            {String(index + 1).padStart(2, "0")}
                        </div>

                        {/* FIXED TITLE AREA */}

                        <div className="min-w-0 flex-1">

                            <div className="flex min-w-0 flex-wrap items-start gap-2">

                                <h3 className="min-w-0 flex-1 break-words text-sm font-bold leading-5 text-slate-900 dark:text-white">
                                    {assignment.title}
                                </h3>

                                <div className="shrink-0">
                                    <StatusBadge
                                        status={assignment.status}
                                    />
                                </div>

                            </div>

                            <p className="mt-1 truncate text-[10px] text-slate-500 dark:text-slate-500">
                                {assignment.course}
                            </p>

                        </div>

                    </div>


                    {/* MENU BUTTON */}

                    <button
                        type="button"
                        aria-label="Assignment options"
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-400 transition hover:border-blue-200 hover:text-blue-600 dark:border-[#1e334a] dark:text-slate-500 dark:hover:border-teal-500/30 dark:hover:text-teal-400"
                    >
                        ⋮
                    </button>

                </div>


                {/* =================================================
                    ASSIGNMENT DETAILS
                ================================================== */}

                <div className="mt-5 grid grid-cols-2 gap-2">

                    <InfoItem
                        label="Type"
                        value={assignment.type}
                    />

                    <InfoItem
                        label="Marks"
                        value={assignment.marks}
                    />

                    <InfoItem
                        label="Due Date"
                        value={assignment.dueDate}
                    />

                    <InfoItem
                        label="Students"
                        value={assignment.totalStudents}
                    />

                </div>


                {/* =================================================
                    SUBMISSION PROGRESS
                ================================================== */}

                <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4 dark:border-[#1e334a] dark:bg-[#0b1727]">

                    <div className="flex items-center justify-between gap-3">

                        <div className="min-w-0">

                            <p className="font-mono text-[8px] uppercase tracking-wider text-slate-400 dark:text-slate-500">
                                Submissions
                            </p>

                            <p className="mt-1 truncate text-xs text-slate-600 dark:text-slate-300">
                                {assignment.submissions} of{" "}
                                {assignment.totalStudents} students
                            </p>

                        </div>

                        <span className="shrink-0 text-sm font-bold text-teal-600 dark:text-teal-400">
                            {submissionPercentage}%
                        </span>

                    </div>

                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-[#07111f]">

                        <div
                            className="h-full rounded-full bg-gradient-to-r from-blue-600 to-teal-500 transition-all duration-500"
                            style={{
                                width: `${submissionPercentage}%`,
                            }}
                        />

                    </div>

                </div>


                {/* =================================================
                    ACTIONS
                ================================================== */}

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
                        className="rounded-xl border border-rose-200 bg-white px-3 py-2.5 text-[10px] font-semibold text-rose-500 transition hover:border-rose-300 hover:bg-rose-50 hover:text-rose-600 dark:border-rose-500/20 dark:bg-[#0b1727] dark:text-rose-400 dark:hover:bg-rose-500/10"
                        onClick={() => onDelete(assignment.id)}
                    >
                        Delete
                    </button>

                </div>

            </div>

        </article>
    );
}


/* =============================================================
   INFO ITEM
============================================================= */

function InfoItem({ label, value }) {
    return (
        <div className="min-w-0 rounded-xl border border-slate-200 bg-white p-3 dark:border-[#1e334a] dark:bg-[#0b1727]">

            <p className="font-mono text-[8px] uppercase tracking-wider text-slate-400 dark:text-slate-500">
                {label}
            </p>

            <p className="mt-1 truncate text-xs font-semibold text-slate-700 dark:text-slate-300">
                {value}
            </p>

        </div>
    );
}


/* =============================================================
   STATUS BADGE
============================================================= */

function StatusBadge({ status }) {
    const statusStyles = {
        Active:
            "border-emerald-200 bg-emerald-50 text-emerald-600 dark:border-emerald-400/20 dark:bg-emerald-500/10 dark:text-emerald-400",

        Draft:
            "border-blue-200 bg-blue-50 text-blue-600 dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-blue-400",

        Closed:
            "border-slate-200 bg-slate-100 text-slate-500 dark:border-slate-600/30 dark:bg-slate-700/20 dark:text-slate-400",
    };

    return (
        <span
            className={`inline-flex whitespace-nowrap rounded-full border px-2 py-1 font-mono text-[8px] uppercase tracking-wider ${statusStyles[status] ||
                "border-teal-200 bg-teal-50 text-teal-600 dark:border-teal-400/20 dark:bg-teal-500/10 dark:text-teal-400"
                }`}
        >
            {status}
        </span>
    );
}


/* =============================================================
   WORKFLOW CARD
============================================================= */

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

            <h3 className="mt-5 text-base font-bold text-slate-900 dark:text-white">
                {title}
            </h3>

            <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                {description}
            </p>

        </div>
    );
}

export default Assignments;