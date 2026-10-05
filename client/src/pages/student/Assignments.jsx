import React, { useMemo, useState } from "react";
import {
    ClipboardList,
    Search,
    CalendarDays,
    Clock3,
    CheckCircle2,
    AlertCircle,
    ArrowRight,
    BookOpen,
    Filter,
} from "lucide-react";

const Assignments = () => {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");

    const assignments = [
        {
            id: 1,
            title: "React Components Assignment",
            course: "Full Stack Web Development",
            instructor: "Rahul Sharma",
            dueDate: "September 3, 2026",
            daysLeft: "1 day left",
            status: "Pending",
            marks: "20 Marks",
        },
        {
            id: 2,
            title: "Java OOPs Practice",
            course: "Java Programming",
            instructor: "Priya Singh",
            dueDate: "September 5, 2026",
            daysLeft: "3 days left",
            status: "Pending",
            marks: "25 Marks",
        },
        {
            id: 3,
            title: "SQL Queries Task",
            course: "Database Management System",
            instructor: "Amit Verma",
            dueDate: "September 8, 2026",
            daysLeft: "6 days left",
            status: "Pending",
            marks: "20 Marks",
        },
        {
            id: 4,
            title: "HTML Portfolio Assignment",
            course: "HTML & CSS Fundamentals",
            instructor: "Neha Gupta",
            dueDate: "August 28, 2026",
            daysLeft: "Submitted",
            status: "Submitted",
            marks: "25 Marks",
        },
        {
            id: 5,
            title: "JavaScript DOM Task",
            course: "JavaScript Essentials",
            instructor: "Rohit Kumar",
            dueDate: "August 30, 2026",
            daysLeft: "Evaluated",
            status: "Graded",
            marks: "30 Marks",
        },
        {
            id: 6,
            title: "React Hooks Practice",
            course: "React.js Development",
            instructor: "Ankit Singh",
            dueDate: "September 12, 2026",
            daysLeft: "10 days left",
            status: "Pending",
            marks: "20 Marks",
        },
    ];

    // =====================================================
    // FILTER ASSIGNMENTS
    // =====================================================

    const filteredAssignments = useMemo(() => {
        const searchText = search.toLowerCase().trim();

        return assignments.filter((assignment) => {
            const matchesSearch =
                assignment.title
                    .toLowerCase()
                    .includes(searchText) ||
                assignment.course
                    .toLowerCase()
                    .includes(searchText) ||
                assignment.instructor
                    .toLowerCase()
                    .includes(searchText);

            const matchesFilter =
                filter === "All" ||
                assignment.status === filter;

            return matchesSearch && matchesFilter;
        });
    }, [search, filter]);

    // =====================================================
    // STATS
    // =====================================================

    const totalAssignments = assignments.length;

    const pendingCount = assignments.filter(
        (item) => item.status === "Pending"
    ).length;

    const submittedCount = assignments.filter(
        (item) => item.status === "Submitted"
    ).length;

    const gradedCount = assignments.filter(
        (item) => item.status === "Graded"
    ).length;

    // =====================================================
    // CLEAR FILTERS
    // =====================================================

    const clearFilters = () => {
        setSearch("");
        setFilter("All");
    };

    // =====================================================
    // ACTION
    // =====================================================

    const handleAssignment = (assignment) => {
        alert(
            `${assignment.status === "Pending" ? "Opening" : "Viewing"} "${assignment.title}"`
        );
    };

    return (
        <div
            className="
                min-h-full
                bg-slate-50
                px-4 py-6
                text-slate-700
                sm:px-6
                lg:px-8
                lg:py-8
                dark:bg-[#07111f]
                dark:text-slate-300
            "
        >
            <div className="mx-auto max-w-7xl">

                {/* =================================================
                    HEADER
                ================================================= */}

                <section className="mb-7">
                    <p
                        className="
                            mb-2
                            text-xs
                            font-bold
                            uppercase
                            tracking-wider
                            text-blue-600
                            dark:text-teal-400
                        "
                    >
                        Academic Tasks
                    </p>

                    <h1
                        className="
                            text-3xl
                            font-extrabold
                            tracking-tight
                            text-slate-950
                            sm:text-4xl
                            dark:text-white
                        "
                    >
                        Assignments
                    </h1>

                    <p
                        className="
                            mt-2
                            max-w-2xl
                            text-sm
                            text-slate-500
                            sm:text-base
                            dark:text-slate-400
                        "
                    >
                        Track your assignments, deadlines,
                        and submission status.
                    </p>
                </section>

                {/* =================================================
                    STATS
                ================================================= */}

                <section
                    className="
                        mb-7
                        grid
                        grid-cols-1
                        gap-4
                        sm:grid-cols-2
                        xl:grid-cols-4
                    "
                >
                    <StatCard
                        title="Total Assignments"
                        value={totalAssignments}
                        description="All assignments"
                        icon={ClipboardList}
                        iconStyle="blue"
                    />

                    <StatCard
                        title="Pending"
                        value={pendingCount}
                        description="Need your attention"
                        icon={Clock3}
                        iconStyle="amber"
                    />

                    <StatCard
                        title="Submitted"
                        value={submittedCount}
                        description="Awaiting evaluation"
                        icon={CheckCircle2}
                        iconStyle="teal"
                    />

                    <StatCard
                        title="Graded"
                        value={gradedCount}
                        description="Evaluation completed"
                        icon={CheckCircle2}
                        iconStyle="green"
                    />
                </section>

                {/* =================================================
                    SEARCH + FILTER
                ================================================= */}

                <section
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
                            lg:flex-row
                            lg:items-center
                            lg:justify-between
                        "
                    >
                        {/* Search */}

                        <div className="relative w-full lg:max-w-md">
                            <Search
                                size={18}
                                className="
                                    absolute
                                    left-3.5
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
                                placeholder="Search assignments..."
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
                                    text-slate-800
                                    outline-none
                                    placeholder:text-slate-400
                                    focus:border-blue-500
                                    focus:ring-2
                                    focus:ring-blue-500/10
                                    dark:border-[#1e334a]
                                    dark:bg-[#07111f]
                                    dark:text-slate-200
                                    dark:placeholder:text-slate-500
                                    dark:focus:border-teal-400
                                "
                            />
                        </div>

                        {/* Filters */}

                        <div
                            className="
                                flex
                                flex-wrap
                                items-center
                                gap-2
                            "
                        >
                            <Filter
                                size={17}
                                className="
                                    mr-1
                                    shrink-0
                                    text-slate-400
                                    dark:text-slate-500
                                "
                            />

                            {[
                                "All",
                                "Pending",
                                "Submitted",
                                "Graded",
                            ].map((item) => (
                                <button
                                    key={item}
                                    onClick={() =>
                                        setFilter(item)
                                    }
                                    className={`
                                        whitespace-nowrap
                                        rounded-xl
                                        px-4 py-2.5
                                        text-xs
                                        font-semibold
                                        transition-all
                                        ${filter === item
                                            ? "bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-sm shadow-blue-500/20"
                                            : "border border-slate-200 bg-slate-50 text-slate-600 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 dark:border-[#1e334a] dark:bg-[#07111f] dark:text-slate-300 dark:hover:border-teal-500/40 dark:hover:bg-teal-500/10 dark:hover:text-teal-400"
                                        }
                                    `}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Active filters */}

                    {(search || filter !== "All") && (
                        <div
                            className="
                                mt-4
                                flex
                                items-center
                                justify-between
                                border-t
                                border-slate-100
                                pt-3
                                dark:border-[#1e334a]
                            "
                        >
                            <p
                                className="
                                    text-xs
                                    text-slate-500
                                    dark:text-slate-400
                                "
                            >
                                {filteredAssignments.length}{" "}
                                matching assignment
                                {filteredAssignments.length !== 1
                                    ? "s"
                                    : ""}
                            </p>

                            <button
                                onClick={clearFilters}
                                className="
                                    text-xs
                                    font-semibold
                                    text-blue-600
                                    hover:text-blue-700
                                    dark:text-teal-400
                                    dark:hover:text-teal-300
                                "
                            >
                                Clear filters
                            </button>
                        </div>
                    )}
                </section>

                {/* =================================================
                    ASSIGNMENT LIST
                ================================================= */}

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
                    {/* Section Header */}

                    <div
                        className="
                            flex
                            items-center
                            justify-between
                            border-b
                            border-slate-100
                            p-5
                            dark:border-[#1e334a]
                        "
                    >
                        <div>
                            <h2
                                className="
                                    text-lg
                                    font-bold
                                    text-slate-900
                                    dark:text-white
                                "
                            >
                                Your Assignments
                            </h2>

                            <p
                                className="
                                    mt-1
                                    text-xs
                                    text-slate-500
                                    dark:text-slate-400
                                "
                            >
                                {filteredAssignments.length}{" "}
                                assignments found
                            </p>
                        </div>

                        <div
                            className="
                                rounded-xl
                                bg-blue-50
                                p-2.5
                                text-blue-600
                                dark:bg-blue-500/10
                                dark:text-blue-400
                            "
                        >
                            <ClipboardList size={21} />
                        </div>
                    </div>

                    {/* Assignment Items */}

                    {filteredAssignments.length > 0 ? (
                        <div>
                            {filteredAssignments.map(
                                (assignment, index) => (
                                    <AssignmentItem
                                        key={assignment.id}
                                        assignment={assignment}
                                        index={index}
                                        total={
                                            filteredAssignments.length
                                        }
                                        onAction={
                                            handleAssignment
                                        }
                                    />
                                )
                            )}
                        </div>
                    ) : (
                        <EmptyState
                            onClear={clearFilters}
                        />
                    )}
                </section>

                {/* =================================================
                    DEADLINE REMINDER
                ================================================= */}

                <section
                    className="
                        mt-6
                        rounded-2xl
                        border
                        border-blue-100
                        bg-gradient-to-r
                        from-blue-50
                        to-teal-50
                        p-5
                        dark:border-blue-500/10
                        dark:from-blue-950/30
                        dark:to-teal-950/20
                    "
                >
                    <div
                        className="
                            flex
                            flex-col
                            gap-4
                            sm:flex-row
                            sm:items-center
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
                                bg-white
                                text-blue-600
                                shadow-sm
                                dark:bg-[#0b1727]
                                dark:text-teal-400
                            "
                        >
                            <Clock3 size={21} />
                        </div>

                        <div>
                            <h3
                                className="
                                    text-sm
                                    font-bold
                                    text-slate-900
                                    dark:text-white
                                "
                            >
                                Stay on track
                            </h3>

                            <p
                                className="
                                    mt-1
                                    text-xs
                                    leading-5
                                    text-slate-500
                                    dark:text-slate-400
                                "
                            >
                                Complete your pending assignments
                                before their deadlines to maintain
                                your learning progress.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

/* =========================================================
   ASSIGNMENT ITEM
========================================================= */

const AssignmentItem = ({
    assignment,
    index,
    total,
    onAction,
}) => {
    const isPending =
        assignment.status === "Pending";

    const isDueSoon =
        isPending &&
        assignment.daysLeft === "1 day left";

    return (
        <div
            className={`
                p-5
                transition-colors
                hover:bg-slate-50
                dark:hover:bg-[#102337]/50
                ${index !== total - 1
                    ? "border-b border-slate-100 dark:border-[#1e334a]"
                    : ""
                }
            `}
        >
            <div
                className="
                    flex
                    flex-col
                    gap-5
                    lg:flex-row
                    lg:items-center
                    lg:justify-between
                "
            >
                {/* =================================================
                    LEFT SIDE
                ================================================= */}

                <div
                    className="
                        flex
                        min-w-0
                        items-start
                        gap-4
                    "
                >
                    <div
                        className={`
                            flex
                            h-12
                            w-12
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            ${isPending
                                ? "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
                                : "bg-teal-50 text-teal-600 dark:bg-teal-500/10 dark:text-teal-400"
                            }
                        `}
                    >
                        <ClipboardList size={21} />
                    </div>

                    <div className="min-w-0">
                        <h3
                            className="
                                text-sm
                                font-bold
                                text-slate-900
                                sm:text-base
                                dark:text-white
                            "
                        >
                            {assignment.title}
                        </h3>

                        <div
                            className="
                                mt-1.5
                                flex
                                flex-wrap
                                items-center
                                gap-x-3
                                gap-y-1
                            "
                        >
                            <span
                                className="
                                    flex
                                    items-center
                                    gap-1
                                    text-xs
                                    text-slate-500
                                    dark:text-slate-400
                                "
                            >
                                <BookOpen size={13} />

                                {assignment.course}
                            </span>

                            <span
                                className="
                                    hidden
                                    text-slate-300
                                    sm:inline
                                    dark:text-slate-600
                                "
                            >
                                •
                            </span>

                            <span
                                className="
                                    text-xs
                                    text-slate-500
                                    dark:text-slate-400
                                "
                            >
                                {assignment.instructor}
                            </span>
                        </div>
                    </div>
                </div>

                {/* =================================================
                    RIGHT SIDE
                ================================================= */}

                <div
                    className="
                        flex
                        flex-wrap
                        items-end
                        gap-4
                        lg:justify-end
                    "
                >
                    {/* Due Date */}

                    <div className="min-w-[145px]">
                        <p
                            className="
                                mb-1
                                text-[10px]
                                font-bold
                                uppercase
                                tracking-wider
                                text-slate-400
                                dark:text-slate-500
                            "
                        >
                            Due Date
                        </p>

                        <div
                            className="
                                flex
                                items-center
                                gap-2
                                text-xs
                                font-medium
                                text-slate-700
                                dark:text-slate-300
                            "
                        >
                            <CalendarDays
                                size={14}
                                className="
                                    text-blue-500
                                    dark:text-teal-400
                                "
                            />

                            {assignment.dueDate}
                        </div>
                    </div>

                    {/* Marks */}

                    <div className="min-w-[75px]">
                        <p
                            className="
                                mb-1
                                text-[10px]
                                font-bold
                                uppercase
                                tracking-wider
                                text-slate-400
                                dark:text-slate-500
                            "
                        >
                            Marks
                        </p>

                        <p
                            className="
                                text-xs
                                font-bold
                                text-slate-800
                                dark:text-slate-200
                            "
                        >
                            {assignment.marks}
                        </p>
                    </div>

                    {/* Status */}

                    <StatusBadge
                        status={assignment.status}
                    />

                    {/* Button */}

                    <button
                        onClick={() =>
                            onAction(assignment)
                        }
                        className="
                            flex
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            bg-gradient-to-r
                            from-blue-600
                            to-teal-500
                            px-4
                            py-2.5
                            text-xs
                            font-bold
                            text-white
                            shadow-sm
                            shadow-blue-500/20
                            transition-all
                            hover:-translate-y-0.5
                            hover:shadow-md
                        "
                    >
                        {isPending ? "Open" : "View"}

                        <ArrowRight size={14} />
                    </button>
                </div>
            </div>

            {/* =================================================
                DEADLINE WARNING
            ================================================= */}

            {isDueSoon && (
                <div
                    className="
                        mt-4
                        flex
                        items-start
                        gap-2
                        rounded-xl
                        border
                        border-amber-200
                        bg-amber-50
                        px-3
                        py-2.5
                        text-xs
                        text-amber-700
                        dark:border-amber-500/20
                        dark:bg-amber-500/10
                        dark:text-amber-400
                    "
                >
                    <AlertCircle
                        size={14}
                        className="mt-0.5 shrink-0"
                    />

                    <span>
                        This assignment is due soon.
                        Make sure to submit it before
                        the deadline.
                    </span>
                </div>
            )}
        </div>
    );
};

/* =========================================================
   STAT CARD
========================================================= */

const StatCard = ({
    title,
    value,
    description,
    icon: Icon,
    iconStyle = "blue",
}) => {
    const iconStyles = {
        blue: `
            bg-blue-50
            text-blue-600
            dark:bg-blue-500/10
            dark:text-blue-400
        `,
        amber: `
            bg-amber-50
            text-amber-600
            dark:bg-amber-500/10
            dark:text-amber-400
        `,
        teal: `
            bg-teal-50
            text-teal-600
            dark:bg-teal-500/10
            dark:text-teal-400
        `,
        green: `
            bg-emerald-50
            text-emerald-600
            dark:bg-emerald-500/10
            dark:text-emerald-400
        `,
    };

    return (
        <div
            className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                shadow-sm
                transition-all
                hover:-translate-y-0.5
                hover:shadow-md
                dark:border-[#1e334a]
                dark:bg-[#0b1727]
            "
        >
            <div
                className="
                    flex
                    items-start
                    justify-between
                "
            >
                <div>
                    <p
                        className="
                            text-xs
                            font-medium
                            text-slate-500
                            dark:text-slate-400
                        "
                    >
                        {title}
                    </p>

                    <h2
                        className="
                            mt-2
                            text-3xl
                            font-extrabold
                            tracking-tight
                            text-slate-950
                            dark:text-white
                        "
                    >
                        {value}
                    </h2>

                    <p
                        className="
                            mt-1
                            text-[11px]
                            text-slate-400
                            dark:text-slate-500
                        "
                    >
                        {description}
                    </p>
                </div>

                <div
                    className={`
                        rounded-xl
                        p-3
                        ${iconStyles[iconStyle]}
                    `}
                >
                    <Icon size={21} />
                </div>
            </div>
        </div>
    );
};

/* =========================================================
   STATUS BADGE
========================================================= */

const StatusBadge = ({ status }) => {
    const styles = {
        Pending: `
            border-amber-200
            bg-amber-50
            text-amber-700
            dark:border-amber-500/20
            dark:bg-amber-500/10
            dark:text-amber-400
        `,
        Submitted: `
            border-blue-200
            bg-blue-50
            text-blue-700
            dark:border-blue-500/20
            dark:bg-blue-500/10
            dark:text-blue-400
        `,
        Graded: `
            border-emerald-200
            bg-emerald-50
            text-emerald-700
            dark:border-emerald-500/20
            dark:bg-emerald-500/10
            dark:text-emerald-400
        `,
    };

    return (
        <span
            className={`
                inline-flex
                w-fit
                rounded-full
                border
                px-3
                py-1.5
                text-[10px]
                font-bold
                ${styles[status] || styles.Pending}
            `}
        >
            {status}
        </span>
    );
};

/* =========================================================
   EMPTY STATE
========================================================= */

const EmptyState = ({ onClear }) => {
    return (
        <div className="px-6 py-16 text-center">
            <div
                className="
                    mx-auto
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-blue-50
                    text-blue-600
                    dark:bg-blue-500/10
                    dark:text-blue-400
                "
            >
                <Search size={28} />
            </div>

            <h2
                className="
                    mt-5
                    text-xl
                    font-bold
                    text-slate-900
                    dark:text-white
                "
            >
                No assignments found
            </h2>

            <p
                className="
                    mx-auto
                    mt-2
                    max-w-md
                    text-sm
                    text-slate-500
                    dark:text-slate-400
                "
            >
                Try changing your search or selecting
                another assignment status.
            </p>

            <button
                onClick={onClear}
                className="
                    mt-5
                    rounded-xl
                    bg-gradient-to-r
                    from-blue-600
                    to-teal-500
                    px-5
                    py-3
                    text-sm
                    font-bold
                    text-white
                    shadow-sm
                    shadow-blue-500/20
                    transition
                    hover:-translate-y-0.5
                "
            >
                Clear Filters
            </button>
        </div>
    );
};

export default Assignments;