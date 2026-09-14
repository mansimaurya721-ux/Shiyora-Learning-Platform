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
                assignment.title
                    .toLowerCase()
                    .includes(searchValue) ||
                assignment.course
                    .toLowerCase()
                    .includes(searchValue);

            const matchesStatus =
                statusFilter === "All" ||
                assignment.status === statusFilter;

            const matchesCourse =
                courseFilter === "All" ||
                assignment.course === courseFilter;

            return (
                matchesSearch &&
                matchesStatus &&
                matchesCourse
            );
        });
    }, [
        assignments,
        search,
        statusFilter,
        courseFilter,
    ]);

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
        (total, assignment) =>
            total + assignment.submissions,
        0
    );

    const deleteAssignment = (id) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this assignment?"
        );

        if (!confirmed) return;

        setAssignments((previous) =>
            previous.filter(
                (assignment) => assignment.id !== id
            )
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
                        to="/teacher/dashboard"
                        className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#7C9A82] transition hover:text-[#F2B84B]"
                    >
                        <span>←</span>
                        Teacher Dashboard
                    </Link>

                    <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

                        <div>

                            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#7C9A82]">
                                Teacher Workspace / Evaluation
                            </p>

                            <h1 className="mt-2 font-['Space_Grotesk'] text-3xl font-bold tracking-tight text-[#F3EEDD] md:text-4xl">
                                Assignments
                            </h1>

                            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#F3EEDD]/50">
                                Create practical tasks, collect student
                                submissions and keep track of assignment
                                progress from one workspace.
                            </p>

                        </div>

                        <button
                            type="button"
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F2B84B] px-5 py-3 text-xs font-bold text-[#161F19] transition hover:-translate-y-0.5 hover:bg-[#F2B84B]/90"
                        >
                            <span className="text-base leading-none">
                                +
                            </span>
                            Create Assignment
                        </button>

                    </div>

                </div>
            </section>


            {/* ===================================================== */}
            {/* STATS */}
            {/* ===================================================== */}

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
                    accent="red"
                />

                <StatCard
                    label="Submissions"
                    value={totalSubmissions}
                    description={`${closedCount} assignments closed`}
                    icon="↗"
                />

            </section>


            {/* ===================================================== */}
            {/* ASSIGNMENT MANAGEMENT */}
            {/* ===================================================== */}

            <section className="rounded-3xl border border-[#F2B84B]/10 bg-[#1B241E]">

                {/* Header */}

                <div className="flex flex-col gap-4 border-b border-[#F2B84B]/10 p-5 lg:flex-row lg:items-center lg:justify-between">

                    <div>

                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#7C9A82]">
                            Evaluation Manager
                        </p>

                        <h2 className="mt-1 font-['Space_Grotesk'] text-xl font-bold text-[#F3EEDD]">
                            Your Assignments
                        </h2>

                    </div>

                    <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#F3EEDD]/25">
                        {filteredAssignments.length} assignments displayed
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
                            onChange={(e) =>
                                setSearch(e.target.value)
                            }
                            placeholder="Search assignments..."
                            className="w-full rounded-xl border border-[#F2B84B]/10 bg-[#161F19] py-3 pl-10 pr-4 text-xs text-[#F3EEDD] outline-none placeholder:text-[#F3EEDD]/20 focus:border-[#F2B84B]/30"
                        />

                    </div>


                    {/* Course */}

                    <select
                        value={courseFilter}
                        onChange={(e) =>
                            setCourseFilter(e.target.value)
                        }
                        className="rounded-xl border border-[#F2B84B]/10 bg-[#161F19] px-4 py-3 text-xs text-[#F3EEDD]/60 outline-none focus:border-[#F2B84B]/30"
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
                        className="rounded-xl border border-[#F2B84B]/10 bg-[#161F19] px-4 py-3 text-xs text-[#F3EEDD]/60 outline-none focus:border-[#F2B84B]/30"
                    >
                        <option value="All">
                            All Status
                        </option>

                        <option value="Active">
                            Active
                        </option>

                        <option value="Draft">
                            Draft
                        </option>

                        <option value="Closed">
                            Closed
                        </option>

                    </select>

                </div>


                {/* ================================================= */}
                {/* ASSIGNMENT CARDS */}
                {/* ================================================= */}

                <div className="grid grid-cols-1 gap-4 p-5 lg:grid-cols-2">

                    {filteredAssignments.length > 0 ? (
                        filteredAssignments.map(
                            (assignment, index) => (
                                <AssignmentCard
                                    key={assignment.id}
                                    assignment={assignment}
                                    index={index}
                                    onDelete={deleteAssignment}
                                />
                            )
                        )
                    ) : (
                        <div className="col-span-full px-6 py-16 text-center">

                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#F2B84B]/10 bg-[#161F19] text-xl text-[#F2B84B]">
                                ⌕
                            </div>

                            <h3 className="mt-4 font-['Space_Grotesk'] text-lg font-bold text-[#F3EEDD]">
                                No assignments found
                            </h3>

                            <p className="mt-2 text-xs text-[#F3EEDD]/30">
                                Try changing your search or filters.
                            </p>

                        </div>
                    )}

                </div>

            </section>


            {/* ===================================================== */}
            {/* EVALUATION WORKFLOW */}
            {/* ===================================================== */}

            <section>

                <div className="mb-4">

                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#7C9A82]">
                        Evaluation Workflow
                    </p>

                    <h2 className="mt-1 font-['Space_Grotesk'] text-2xl font-bold text-[#F3EEDD]">
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
/* ASSIGNMENT CARD */
/* ============================================================= */

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
        <article className="group relative overflow-hidden rounded-2xl border border-[#F2B84B]/10 bg-[#161F19] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#F2B84B]/25">

            {/* Decorative corner */}

            <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-[#F2B84B]/5 transition group-hover:bg-[#F2B84B]/10" />

            <div className="relative">

                {/* Top */}

                <div className="flex items-start justify-between gap-4">

                    <div className="flex items-center gap-3">

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#F2B84B]/15 bg-[#F2B84B]/5 font-mono text-xs font-bold text-[#F2B84B]">
                            {String(index + 1).padStart(2, "0")}
                        </div>

                        <div className="min-w-0">

                            <div className="flex flex-wrap items-center gap-2">

                                <h3 className="font-['Space_Grotesk'] text-sm font-bold text-[#F3EEDD]">
                                    {assignment.title}
                                </h3>

                                <StatusBadge
                                    status={assignment.status}
                                />

                            </div>

                            <p className="mt-1 truncate text-[10px] text-[#F3EEDD]/30">
                                {assignment.course}
                            </p>

                        </div>

                    </div>

                    <button
                        type="button"
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#F2B84B]/10 text-[#F3EEDD]/25 transition hover:border-[#F2B84B]/20 hover:text-[#F2B84B]"
                    >
                        ⋮
                    </button>

                </div>


                {/* Assignment details */}

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


                {/* Submission progress */}

                <div className="mt-4 rounded-xl border border-[#F2B84B]/5 bg-[#1B241E] p-4">

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="font-mono text-[8px] uppercase tracking-wider text-[#F3EEDD]/25">
                                Submissions
                            </p>

                            <p className="mt-1 text-xs text-[#F3EEDD]/55">
                                {assignment.submissions} of{" "}
                                {assignment.totalStudents} students
                            </p>

                        </div>

                        <span className="font-['Space_Grotesk'] text-sm font-bold text-[#7C9A82]">
                            {submissionPercentage}%
                        </span>

                    </div>


                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#161F19]">

                        <div
                            className="h-full rounded-full bg-[#7C9A82] transition-all duration-500"
                            style={{
                                width: `${submissionPercentage}%`,
                            }}
                        />

                    </div>

                </div>


                {/* Actions */}

                <div className="mt-5 flex gap-2">

                    <button
                        type="button"
                        className="flex-1 rounded-xl border border-[#F2B84B]/10 bg-[#1B241E] px-3 py-2.5 text-[10px] font-semibold text-[#F3EEDD]/45 transition hover:border-[#F2B84B]/20 hover:text-[#F2B84B]"
                    >
                        View
                    </button>

                    <button
                        type="button"
                        className="flex-1 rounded-xl border border-[#F2B84B]/10 bg-[#1B241E] px-3 py-2.5 text-[10px] font-semibold text-[#F3EEDD]/45 transition hover:border-[#F2B84B]/20 hover:text-[#F2B84B]"
                    >
                        Edit
                    </button>

                    <button
                        type="button"
                        className="rounded-xl border border-[#D6402C]/10 bg-[#1B241E] px-3 py-2.5 text-[10px] font-semibold text-[#D6402C]/55 transition hover:border-[#D6402C]/25 hover:bg-[#D6402C]/5 hover:text-[#D6402C]"
                        onClick={() =>
                            onDelete(assignment.id)
                        }
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
        <div className="rounded-xl border border-[#F2B84B]/5 bg-[#1B241E] p-3">

            <p className="font-mono text-[8px] uppercase tracking-wider text-[#F3EEDD]/25">
                {label}
            </p>

            <p className="mt-1 truncate text-xs font-semibold text-[#F3EEDD]/65">
                {value}
            </p>

        </div>
    );
}


/* ============================================================= */
/* STATUS BADGE */
/* ============================================================= */

function StatusBadge({ status }) {
    const statusStyles = {
        Active:
            "border-[#7C9A82]/20 bg-[#7C9A82]/5 text-[#7C9A82]",

        Draft:
            "border-[#D6402C]/20 bg-[#D6402C]/5 text-[#D6402C]",

        Closed:
            "border-[#F3EEDD]/10 bg-[#F3EEDD]/5 text-[#F3EEDD]/40",
    };

    return (
        <span
            className={`rounded-full border px-2 py-1 font-mono text-[8px] uppercase tracking-wider ${statusStyles[status] ||
                "border-[#F2B84B]/10 bg-[#F2B84B]/5 text-[#F2B84B]"
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
        <div className="group rounded-2xl border border-[#F2B84B]/10 bg-[#1B241E] p-5 transition hover:-translate-y-1 hover:border-[#F2B84B]/20">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#F2B84B]/15 bg-[#F2B84B]/5 font-mono text-[10px] font-bold text-[#F2B84B]">
                {number}
            </div>

            <h3 className="mt-5 font-['Space_Grotesk'] text-base font-bold text-[#F3EEDD]">
                {title}
            </h3>

            <p className="mt-2 text-xs leading-5 text-[#F3EEDD]/35">
                {description}
            </p>

        </div>
    );
}

export default Assignments;