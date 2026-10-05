import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const studentsData = [
    {
        id: 1,
        name: "Aarav Sharma",
        email: "aarav.sharma@example.com",
        initials: "AS",
        courses: ["Web Development", "JavaScript Mastery"],
        progress: 86,
        assignmentScore: 92,
        quizScore: 88,
        status: "Active",
        lastActive: "Today, 10:32 AM",
    },
    {
        id: 2,
        name: "Priya Verma",
        email: "priya.verma@example.com",
        initials: "PV",
        courses: ["React Development"],
        progress: 74,
        assignmentScore: 84,
        quizScore: 81,
        status: "Active",
        lastActive: "Today, 09:18 AM",
    },
    {
        id: 3,
        name: "Rohan Singh",
        email: "rohan.singh@example.com",
        initials: "RS",
        courses: ["Web Development", "CSS & UI Design"],
        progress: 58,
        assignmentScore: 72,
        quizScore: 69,
        status: "At Risk",
        lastActive: "Yesterday, 04:45 PM",
    },
    {
        id: 4,
        name: "Ananya Gupta",
        email: "ananya.gupta@example.com",
        initials: "AG",
        courses: ["JavaScript Mastery"],
        progress: 91,
        assignmentScore: 95,
        quizScore: 93,
        status: "Active",
        lastActive: "Today, 11:06 AM",
    },
    {
        id: 5,
        name: "Kabir Khan",
        email: "kabir.khan@example.com",
        initials: "KK",
        courses: ["React Development", "JavaScript Mastery"],
        progress: 67,
        assignmentScore: 78,
        quizScore: 75,
        status: "Active",
        lastActive: "Yesterday, 08:21 PM",
    },
    {
        id: 6,
        name: "Meera Joshi",
        email: "meera.joshi@example.com",
        initials: "MJ",
        courses: ["Web Development"],
        progress: 42,
        assignmentScore: 61,
        quizScore: 57,
        status: "At Risk",
        lastActive: "5 days ago",
    },
    {
        id: 7,
        name: "Aditya Mishra",
        email: "aditya.mishra@example.com",
        initials: "AM",
        courses: ["CSS & UI Design"],
        progress: 79,
        assignmentScore: 87,
        quizScore: 82,
        status: "Active",
        lastActive: "Today, 08:47 AM",
    },
    {
        id: 8,
        name: "Sneha Patel",
        email: "sneha.patel@example.com",
        initials: "SP",
        courses: ["React Development"],
        progress: 63,
        assignmentScore: 74,
        quizScore: 71,
        status: "Inactive",
        lastActive: "12 days ago",
    },
];

const courses = [
    "All Courses",
    "Web Development",
    "JavaScript Mastery",
    "React Development",
    "CSS & UI Design",
];

const statusOptions = [
    "All Status",
    "Active",
    "At Risk",
    "Inactive",
];

function Students() {
    const [search, setSearch] = useState("");
    const [courseFilter, setCourseFilter] = useState("All Courses");
    const [statusFilter, setStatusFilter] = useState("All Status");

    const filteredStudents = useMemo(() => {
        return studentsData.filter((student) => {
            const searchValue = search.toLowerCase().trim();

            const matchesSearch =
                student.name.toLowerCase().includes(searchValue) ||
                student.email.toLowerCase().includes(searchValue);

            const matchesCourse =
                courseFilter === "All Courses" ||
                student.courses.includes(courseFilter);

            const matchesStatus =
                statusFilter === "All Status" ||
                student.status === statusFilter;

            return matchesSearch && matchesCourse && matchesStatus;
        });
    }, [search, courseFilter, statusFilter]);

    const getStatusClasses = (status) => {
        if (status === "Active") {
            return "border-teal-200 bg-teal-50 text-teal-700 dark:border-teal-400/20 dark:bg-teal-500/10 dark:text-teal-400";
        }

        if (status === "At Risk") {
            return "border-rose-200 bg-rose-50 text-rose-700 dark:border-rose-400/20 dark:bg-rose-500/10 dark:text-rose-400";
        }

        return "border-slate-200 bg-slate-100 text-slate-500 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-400";
    };

    const getProgressClasses = (progress) => {
        if (progress >= 80) {
            return "bg-teal-500";
        }

        if (progress >= 60) {
            return "bg-blue-500";
        }

        return "bg-rose-500";
    };

    return (
        <div className="min-w-0 space-y-8">

            {/* =====================================================
                HEADER
            ===================================================== */}

            <section className="flex min-w-0 flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">

                <div className="min-w-0">

                    <div className="mb-3 flex min-w-0 items-center gap-3">

                        <span className="h-px w-10 shrink-0 bg-blue-600 dark:bg-blue-400" />

                        <span className="font-mono text-xs uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
                            Teacher Workspace
                        </span>

                    </div>

                    <h1 className="break-words text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 md:text-4xl">
                        Student Management
                    </h1>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
                        Monitor student progress, engagement, assignments,
                        quizzes, and overall learning performance.
                    </p>

                </div>

                {/* 
                    Student creation is controlled by Organization/Admin.
                    Teachers can only monitor and interact with assigned students.
                */}

                <Link
                    to="/teacher/analytics"
                    className="inline-flex w-fit shrink-0 items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 dark:border-[#1e334a] dark:bg-[#0b1727] dark:text-slate-300 dark:hover:border-blue-400/30 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
                >
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                    >
                        <path d="M4 19V5" />
                        <path d="M4 19h17" />
                        <path d="m7 15 4-5 3 3 5-7" />
                    </svg>

                    View Analytics
                </Link>

            </section>


            {/* =====================================================
                STATS
            ===================================================== */}

            <section className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

                {/* TOTAL */}

                <div className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">

                    <div className="flex items-start justify-between gap-3">

                        <div className="min-w-0">

                            <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                Total Students
                            </p>

                            <p className="mt-3 text-3xl font-bold text-slate-900 dark:text-slate-100">
                                342
                            </p>

                        </div>

                        <div className="shrink-0 rounded-xl border border-blue-200 bg-blue-50 p-3 text-blue-600 dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-blue-400">

                            <svg
                                width="21"
                                height="21"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.7"
                            >
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>

                        </div>

                    </div>

                    <p className="mt-4 text-xs text-teal-600 dark:text-teal-400">
                        +18 students this month
                    </p>

                </div>


                {/* ACTIVE */}

                <div className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">

                    <div className="flex items-start justify-between gap-3">

                        <div className="min-w-0">

                            <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                Active Students
                            </p>

                            <p className="mt-3 text-3xl font-bold text-slate-900 dark:text-slate-100">
                                298
                            </p>

                        </div>

                        <div className="shrink-0 rounded-xl border border-teal-200 bg-teal-50 p-3 text-teal-600 dark:border-teal-400/20 dark:bg-teal-500/10 dark:text-teal-400">

                            <svg
                                width="21"
                                height="21"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.7"
                            >
                                <circle cx="12" cy="12" r="9" />
                                <path d="m8 12 2.5 2.5L16 9" />
                            </svg>

                        </div>

                    </div>

                    <p className="mt-4 text-xs text-teal-600 dark:text-teal-400">
                        87% engagement rate
                    </p>

                </div>


                {/* AT RISK */}

                <div className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">

                    <div className="flex items-start justify-between gap-3">

                        <div className="min-w-0">

                            <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                At Risk
                            </p>

                            <p className="mt-3 text-3xl font-bold text-slate-900 dark:text-slate-100">
                                27
                            </p>

                        </div>

                        <div className="shrink-0 rounded-xl border border-rose-200 bg-rose-50 p-3 text-rose-600 dark:border-rose-400/20 dark:bg-rose-500/10 dark:text-rose-400">

                            <svg
                                width="21"
                                height="21"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.7"
                            >
                                <path d="M10.3 3.3 2.6 17a2 2 0 0 0 1.7 3h15.4a2 2 0 0 0 1.7-3L13.7 3.3a2 2 0 0 0-3.4 0Z" />
                                <path d="M12 9v4" />
                                <path d="M12 17h.01" />
                            </svg>

                        </div>

                    </div>

                    <p className="mt-4 text-xs text-rose-600 dark:text-rose-400">
                        Needs teacher attention
                    </p>

                </div>


                {/* PROGRESS */}

                <div className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">

                    <div className="flex items-start justify-between gap-3">

                        <div className="min-w-0">

                            <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                Average Progress
                            </p>

                            <p className="mt-3 text-3xl font-bold text-slate-900 dark:text-slate-100">
                                76%
                            </p>

                        </div>

                        <div className="shrink-0 rounded-xl border border-blue-200 bg-blue-50 p-3 text-blue-600 dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-blue-400">

                            <svg
                                width="21"
                                height="21"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.7"
                            >
                                <path d="M4 19V5" />
                                <path d="M4 19h17" />
                                <path d="m7 15 4-5 3 3 5-7" />
                            </svg>

                        </div>

                    </div>

                    <p className="mt-4 text-xs text-teal-600 dark:text-teal-400">
                        +6.4% from last month
                    </p>

                </div>

            </section>


            {/* =====================================================
                FILTERS
            ===================================================== */}

            <section className="min-w-0 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727] md:p-5">

                <div className="flex min-w-0 flex-col gap-4 xl:flex-row xl:items-center">

                    <div className="relative min-w-0 flex-1">

                        <svg
                            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-teal-500"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                        >
                            <circle cx="11" cy="11" r="7" />
                            <path d="m20 20-4-4" />
                        </svg>

                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search students by name or email..."
                            className="w-full min-w-0 rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/10 dark:border-[#1e334a] dark:bg-[#07111f] dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus:border-teal-500/50"
                        />

                    </div>


                    <select
                        value={courseFilter}
                        onChange={(e) => setCourseFilter(e.target.value)}
                        className="w-full min-w-0 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/10 dark:border-[#1e334a] dark:bg-[#07111f] dark:text-slate-200 dark:focus:border-teal-500/50 xl:w-auto"
                    >
                        {courses.map((course) => (
                            <option key={course} value={course}>
                                {course}
                            </option>
                        ))}
                    </select>


                    <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="w-full min-w-0 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/10 dark:border-[#1e334a] dark:bg-[#07111f] dark:text-slate-200 dark:focus:border-teal-500/50 xl:w-auto"
                    >
                        {statusOptions.map((status) => (
                            <option key={status} value={status}>
                                {status}
                            </option>
                        ))}
                    </select>


                    <button
                        type="button"
                        onClick={() => {
                            setSearch("");
                            setCourseFilter("All Courses");
                            setStatusFilter("All Status");
                        }}
                        className="w-full shrink-0 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-500 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 dark:border-[#1e334a] dark:text-slate-400 dark:hover:border-teal-500/30 dark:hover:bg-teal-500/5 dark:hover:text-teal-400 xl:w-auto"
                    >
                        Reset
                    </button>

                </div>

            </section>


            {/* =====================================================
                STUDENT LIST
            ===================================================== */}

            <section className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">

                <div className="flex min-w-0 flex-col gap-2 border-b border-slate-200 px-5 py-5 dark:border-[#1e334a] md:flex-row md:items-center md:justify-between">

                    <div className="min-w-0">

                        <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                            Students
                        </h2>

                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                            Showing {filteredStudents.length} of{" "}
                            {studentsData.length} students
                        </p>

                    </div>

                    <span className="shrink-0 font-mono text-xs uppercase tracking-wider text-teal-600 dark:text-teal-400">
                        Learning Records
                    </span>

                </div>


                {filteredStudents.length > 0 ? (

                    <div className="divide-y divide-slate-200 dark:divide-[#1e334a]">

                        {filteredStudents.map((student) => (

                            <div
                                key={student.id}
                                className="min-w-0 p-5 transition hover:bg-slate-50 dark:hover:bg-[#102337]"
                            >

                                <div className="flex min-w-0 flex-col gap-5 xl:flex-row xl:items-center">

                                    {/* =================================================
                                        STUDENT
                                    ================================================= */}

                                    <div className="flex min-w-0 flex-1 items-start gap-4">

                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 font-bold text-blue-600 dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-blue-400">
                                            {student.initials}
                                        </div>

                                        <div className="min-w-0 flex-1">

                                            <div className="flex min-w-0 flex-wrap items-start gap-2">

                                                <h3 className="min-w-0 break-words text-sm font-semibold leading-5 text-slate-900 dark:text-slate-100">
                                                    {student.name}
                                                </h3>

                                                <span
                                                    className={`shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${getStatusClasses(
                                                        student.status
                                                    )}`}
                                                >
                                                    {student.status}
                                                </span>

                                            </div>

                                            <p className="mt-1 break-all text-sm text-slate-500 dark:text-slate-400">
                                                {student.email}
                                            </p>

                                            <div className="mt-2 flex min-w-0 flex-wrap gap-2">

                                                {student.courses.map((course) => (

                                                    <span
                                                        key={course}
                                                        className="max-w-full break-words rounded-md bg-slate-100 px-2 py-1 text-[10px] text-slate-500 dark:bg-[#07111f] dark:text-slate-400"
                                                    >
                                                        {course}
                                                    </span>

                                                ))}

                                            </div>

                                        </div>

                                    </div>


                                    {/* =================================================
                                        PROGRESS
                                    ================================================= */}

                                    <div className="w-full min-w-0 xl:w-52 xl:shrink-0">

                                        <div className="mb-2 flex items-center justify-between gap-3">

                                            <span className="min-w-0 text-xs text-slate-500 dark:text-slate-400">
                                                Course Progress
                                            </span>

                                            <span className="shrink-0 font-mono text-xs font-semibold text-slate-800 dark:text-slate-200">
                                                {student.progress}%
                                            </span>

                                        </div>

                                        <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-[#07111f]">

                                            <div
                                                className={`h-full rounded-full transition-all ${getProgressClasses(
                                                    student.progress
                                                )}`}
                                                style={{
                                                    width: `${student.progress}%`,
                                                }}
                                            />

                                        </div>

                                    </div>


                                    {/* =================================================
                                        SCORES
                                    ================================================= */}

                                    <div className="grid min-w-0 w-full grid-cols-1 gap-3 sm:grid-cols-3 xl:w-64 xl:shrink-0">

                                        <div className="min-w-0 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 dark:border-[#1e334a] dark:bg-[#07111f]">

                                            <p className="break-words text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-500">
                                                Assignments
                                            </p>

                                            <p className="mt-1 font-mono text-sm font-semibold text-slate-800 dark:text-slate-200">
                                                {student.assignmentScore}%
                                            </p>

                                        </div>


                                        <div className="min-w-0 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 dark:border-[#1e334a] dark:bg-[#07111f]">

                                            <p className="break-words text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-500">
                                                Quizzes
                                            </p>

                                            <p className="mt-1 font-mono text-sm font-semibold text-slate-800 dark:text-slate-200">
                                                {student.quizScore}%
                                            </p>

                                        </div>


                                        <div className="min-w-0 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 dark:border-[#1e334a] dark:bg-[#07111f]">

                                            <p className="break-words text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-500">
                                                Last Active
                                            </p>

                                            <p className="mt-1 break-words text-xs font-medium text-slate-500 dark:text-slate-400">
                                                {student.lastActive}
                                            </p>

                                        </div>

                                    </div>


                                    {/* =================================================
                                        ACTIONS
                                    ================================================= */}

                                    <div className="flex shrink-0 items-center gap-2 xl:ml-2">

                                        <button
                                            type="button"
                                            title="View Student"
                                            className="shrink-0 rounded-lg border border-slate-200 p-2.5 text-slate-400 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 dark:border-[#1e334a] dark:text-slate-500 dark:hover:border-blue-400/30 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
                                        >
                                            <svg
                                                width="17"
                                                height="17"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.7"
                                            >
                                                <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    r="2.5"
                                                />
                                            </svg>
                                        </button>


                                        <button
                                            type="button"
                                            title="Message Student"
                                            className="shrink-0 rounded-lg border border-slate-200 p-2.5 text-slate-400 transition hover:border-teal-200 hover:bg-teal-50 hover:text-teal-600 dark:border-[#1e334a] dark:text-slate-500 dark:hover:border-teal-400/30 dark:hover:bg-teal-500/10 dark:hover:text-teal-400"
                                        >
                                            <svg
                                                width="17"
                                                height="17"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.7"
                                            >
                                                <path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.7 8.7 0 0 1-3-.5L4 20l1.5-3.5A7.4 7.4 0 0 1 4 11.5 7.5 7.5 0 0 1 12 4a7.5 7.5 0 0 1 8 7.5Z" />
                                            </svg>
                                        </button>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                ) : (

                    <div className="px-6 py-16 text-center">

                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-teal-500 dark:border-[#1e334a] dark:bg-[#07111f] dark:text-teal-400">

                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.7"
                            >
                                <circle cx="11" cy="11" r="7" />
                                <path d="m20 20-4-4" />
                            </svg>

                        </div>

                        <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
                            No students found
                        </h3>

                        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">
                            Try changing your search or filters to find the
                            student you are looking for.
                        </p>

                    </div>

                )}

            </section>


            {/* =====================================================
                BOTTOM INFORMATION
            ===================================================== */}

            <section className="grid min-w-0 grid-cols-1 gap-5 lg:grid-cols-3">

                <div className="min-w-0 rounded-2xl border border-blue-200 bg-blue-50/70 p-6 dark:border-blue-400/20 dark:bg-blue-500/5 lg:col-span-2">

                    <div className="flex min-w-0 items-start gap-4">

                        <div className="shrink-0 rounded-xl border border-blue-200 bg-blue-100 p-3 text-blue-600 dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-blue-400">

                            <svg
                                width="21"
                                height="21"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.7"
                            >
                                <path d="M12 3 4 7v5c0 4.8 3.4 8.4 8 9 4.6-.6 8-4.2 8-9V7l-8-4Z" />
                                <path d="M9 12.5 11 14l4-4" />
                            </svg>

                        </div>

                        <div className="min-w-0">

                            <h3 className="break-words font-semibold text-slate-900 dark:text-slate-100">
                                Keep an eye on learning engagement
                            </h3>

                            <p className="mt-2 break-words text-sm leading-6 text-slate-600 dark:text-slate-400">
                                Students with low progress, missed assignments,
                                or reduced activity can be reviewed early so
                                you can provide timely academic support.
                            </p>

                            <Link
                                to="/teacher/analytics"
                                className="mt-4 inline-flex max-w-full items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-teal-600 dark:text-blue-400 dark:hover:text-teal-400"
                            >
                                <span className="break-words">
                                    Open performance analytics
                                </span>

                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    className="shrink-0"
                                >
                                    <path d="M5 12h14" />
                                    <path d="m13 6 6 6-6 6" />
                                </svg>

                            </Link>

                        </div>

                    </div>

                </div>


                <div className="min-w-0 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">

                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
                        Teacher Note
                    </p>

                    <h3 className="mt-3 break-words text-lg font-bold text-slate-900 dark:text-slate-100">
                        Student-first teaching
                    </h3>

                    <p className="mt-2 break-words text-sm leading-6 text-slate-500 dark:text-slate-400">
                        Use student performance data to understand where
                        learners need support and improve your course delivery.
                    </p>

                </div>

            </section>

        </div>
    );
}

export default Students;