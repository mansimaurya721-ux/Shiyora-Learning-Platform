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

const statusOptions = ["All Status", "Active", "At Risk", "Inactive"];

function Students() {
    const [search, setSearch] = useState("");
    const [courseFilter, setCourseFilter] = useState("All Courses");
    const [statusFilter, setStatusFilter] = useState("All Status");

    const filteredStudents = useMemo(() => {
        return studentsData.filter((student) => {
            const matchesSearch =
                student.name.toLowerCase().includes(search.toLowerCase()) ||
                student.email.toLowerCase().includes(search.toLowerCase());

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
            return "border-[#7C9A82]/30 bg-[#7C9A82]/10 text-[#9EB7A2]";
        }

        if (status === "At Risk") {
            return "border-[#D6402C]/30 bg-[#D6402C]/10 text-[#E97868]";
        }

        return "border-[#F3EEDD]/10 bg-[#F3EEDD]/5 text-[#A9AAA1]";
    };

    const getProgressClasses = (progress) => {
        if (progress >= 80) {
            return "bg-[#7C9A82]";
        }

        if (progress >= 60) {
            return "bg-[#F2B84B]";
        }

        return "bg-[#D6402C]";
    };

    return (
        <div className="space-y-8">
            {/* Header */}
            <section className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
                <div>
                    <div className="mb-3 flex items-center gap-3">
                        <span className="h-px w-10 bg-[#F2B84B]" />
                        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#F2B84B]">
                            Teacher Workspace
                        </span>
                    </div>

                    <h1 className="text-3xl font-bold tracking-tight text-[#F3EEDD] md:text-4xl">
                        Student Management
                    </h1>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-[#A9AAA1]">
                        Monitor student progress, engagement, assignments,
                        quizzes, and overall learning performance.
                    </p>
                </div>

                <div className="flex flex-wrap gap-3">
                    <Link
                        to="/teacher/analytics"
                        className="inline-flex items-center gap-2 rounded-xl border border-[#F3EEDD]/10 bg-[#1B241E] px-5 py-3 text-sm font-semibold text-[#F3EEDD] transition hover:border-[#F2B84B]/30 hover:bg-[#202B23]"
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

                    <button
                        type="button"
                        className="inline-flex items-center gap-2 rounded-xl bg-[#F2B84B] px-5 py-3 text-sm font-bold text-[#161F19] transition hover:bg-[#f5c766]"
                    >
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M12 5v14" />
                            <path d="M5 12h14" />
                        </svg>
                        Add Student
                    </button>
                </div>
            </section>

            {/* Stats */}
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-5">
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-xs font-medium uppercase tracking-wider text-[#A9AAA1]">
                                Total Students
                            </p>
                            <p className="mt-3 text-3xl font-bold text-[#F3EEDD]">
                                342
                            </p>
                        </div>

                        <div className="rounded-xl border border-[#F2B84B]/20 bg-[#F2B84B]/10 p-3 text-[#F2B84B]">
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

                    <p className="mt-4 text-xs text-[#7C9A82]">
                        +18 students this month
                    </p>
                </div>

                <div className="rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-5">
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-xs font-medium uppercase tracking-wider text-[#A9AAA1]">
                                Active Students
                            </p>
                            <p className="mt-3 text-3xl font-bold text-[#F3EEDD]">
                                298
                            </p>
                        </div>

                        <div className="rounded-xl border border-[#7C9A82]/20 bg-[#7C9A82]/10 p-3 text-[#9EB7A2]">
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

                    <p className="mt-4 text-xs text-[#7C9A82]">
                        87% engagement rate
                    </p>
                </div>

                <div className="rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-5">
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-xs font-medium uppercase tracking-wider text-[#A9AAA1]">
                                At Risk
                            </p>
                            <p className="mt-3 text-3xl font-bold text-[#F3EEDD]">
                                27
                            </p>
                        </div>

                        <div className="rounded-xl border border-[#D6402C]/20 bg-[#D6402C]/10 p-3 text-[#E97868]">
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

                    <p className="mt-4 text-xs text-[#E97868]">
                        Needs teacher attention
                    </p>
                </div>

                <div className="rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-5">
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-xs font-medium uppercase tracking-wider text-[#A9AAA1]">
                                Average Progress
                            </p>
                            <p className="mt-3 text-3xl font-bold text-[#F3EEDD]">
                                76%
                            </p>
                        </div>

                        <div className="rounded-xl border border-[#F2B84B]/20 bg-[#F2B84B]/10 p-3 text-[#F2B84B]">
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

                    <p className="mt-4 text-xs text-[#7C9A82]">
                        +6.4% from last month
                    </p>
                </div>
            </section>

            {/* Filters */}
            <section className="rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-4 md:p-5">
                <div className="flex flex-col gap-4 xl:flex-row xl:items-center">
                    <div className="relative flex-1">
                        <svg
                            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#7C9A82]"
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
                            className="w-full rounded-xl border border-[#F3EEDD]/10 bg-[#141C17] py-3 pl-11 pr-4 text-sm text-[#F3EEDD] outline-none placeholder:text-[#777C74] focus:border-[#F2B84B]/40"
                        />
                    </div>

                    <select
                        value={courseFilter}
                        onChange={(e) => setCourseFilter(e.target.value)}
                        className="rounded-xl border border-[#F3EEDD]/10 bg-[#141C17] px-4 py-3 text-sm text-[#F3EEDD] outline-none focus:border-[#F2B84B]/40"
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
                        className="rounded-xl border border-[#F3EEDD]/10 bg-[#141C17] px-4 py-3 text-sm text-[#F3EEDD] outline-none focus:border-[#F2B84B]/40"
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
                        className="rounded-xl border border-[#F3EEDD]/10 px-4 py-3 text-sm font-semibold text-[#A9AAA1] transition hover:border-[#F2B84B]/30 hover:text-[#F2B84B]"
                    >
                        Reset
                    </button>
                </div>
            </section>

            {/* Student Table */}
            <section className="overflow-hidden rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E]">
                <div className="flex flex-col gap-2 border-b border-[#F3EEDD]/10 px-5 py-5 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h2 className="text-lg font-bold text-[#F3EEDD]">
                            Students
                        </h2>
                        <p className="mt-1 text-sm text-[#777C74]">
                            Showing {filteredStudents.length} of{" "}
                            {studentsData.length} students
                        </p>
                    </div>

                    <span className="font-mono text-xs uppercase tracking-wider text-[#7C9A82]">
                        Learning Records
                    </span>
                </div>

                {filteredStudents.length > 0 ? (
                    <div className="divide-y divide-[#F3EEDD]/10">
                        {filteredStudents.map((student) => (
                            <div
                                key={student.id}
                                className="p-5 transition hover:bg-[#202B23]"
                            >
                                <div className="flex flex-col gap-5 xl:flex-row xl:items-center">
                                    {/* Student */}
                                    <div className="flex min-w-0 flex-1 items-center gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#F2B84B]/20 bg-[#F2B84B]/10 font-bold text-[#F2B84B]">
                                            {student.initials}
                                        </div>

                                        <div className="min-w-0">
                                            <div className="flex flex-wrap items-center gap-2">
                                                <h3 className="font-semibold text-[#F3EEDD]">
                                                    {student.name}
                                                </h3>

                                                <span
                                                    className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${getStatusClasses(
                                                        student.status
                                                    )}`}
                                                >
                                                    {student.status}
                                                </span>
                                            </div>

                                            <p className="mt-1 truncate text-sm text-[#777C74]">
                                                {student.email}
                                            </p>

                                            <div className="mt-2 flex flex-wrap gap-2">
                                                {student.courses.map(
                                                    (course) => (
                                                        <span
                                                            key={course}
                                                            className="rounded-md bg-[#141C17] px-2 py-1 text-[10px] text-[#A9AAA1]"
                                                        >
                                                            {course}
                                                        </span>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Progress */}
                                    <div className="w-full xl:w-52">
                                        <div className="mb-2 flex items-center justify-between">
                                            <span className="text-xs text-[#777C74]">
                                                Course Progress
                                            </span>

                                            <span className="font-mono text-xs font-semibold text-[#F3EEDD]">
                                                {student.progress}%
                                            </span>
                                        </div>

                                        <div className="h-2 overflow-hidden rounded-full bg-[#141C17]">
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

                                    {/* Scores */}
                                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:w-64">
                                        <div className="rounded-lg border border-[#F3EEDD]/10 bg-[#141C17] px-3 py-2">
                                            <p className="text-[10px] uppercase tracking-wider text-[#777C74]">
                                                Assignments
                                            </p>
                                            <p className="mt-1 font-mono text-sm font-semibold text-[#F3EEDD]">
                                                {student.assignmentScore}%
                                            </p>
                                        </div>

                                        <div className="rounded-lg border border-[#F3EEDD]/10 bg-[#141C17] px-3 py-2">
                                            <p className="text-[10px] uppercase tracking-wider text-[#777C74]">
                                                Quizzes
                                            </p>
                                            <p className="mt-1 font-mono text-sm font-semibold text-[#F3EEDD]">
                                                {student.quizScore}%
                                            </p>
                                        </div>

                                        <div className="rounded-lg border border-[#F3EEDD]/10 bg-[#141C17] px-3 py-2">
                                            <p className="text-[10px] uppercase tracking-wider text-[#777C74]">
                                                Last Active
                                            </p>
                                            <p className="mt-1 truncate text-xs font-medium text-[#A9AAA1]">
                                                {student.lastActive}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex items-center gap-2 xl:ml-2">
                                        <button
                                            type="button"
                                            title="View Student"
                                            className="rounded-lg border border-[#F3EEDD]/10 p-2.5 text-[#A9AAA1] transition hover:border-[#F2B84B]/30 hover:bg-[#F2B84B]/10 hover:text-[#F2B84B]"
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
                                            className="rounded-lg border border-[#F3EEDD]/10 p-2.5 text-[#A9AAA1] transition hover:border-[#7C9A82]/30 hover:bg-[#7C9A82]/10 hover:text-[#9EB7A2]"
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
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#F3EEDD]/10 bg-[#141C17] text-[#7C9A82]">
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

                        <h3 className="mt-4 text-lg font-semibold text-[#F3EEDD]">
                            No students found
                        </h3>

                        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#777C74]">
                            Try changing your search or filters to find the
                            student you are looking for.
                        </p>
                    </div>
                )}
            </section>

            {/* Bottom Information */}
            <section className="grid grid-cols-1 gap-5 lg:grid-cols-3">
                <div className="rounded-2xl border border-[#F2B84B]/20 bg-[#F2B84B]/5 p-6 lg:col-span-2">
                    <div className="flex items-start gap-4">
                        <div className="rounded-xl border border-[#F2B84B]/20 bg-[#F2B84B]/10 p-3 text-[#F2B84B]">
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

                        <div>
                            <h3 className="font-semibold text-[#F3EEDD]">
                                Keep an eye on learning engagement
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-[#A9AAA1]">
                                Students with low progress, missed assignments,
                                or reduced activity can be reviewed early so
                                you can provide timely academic support.
                            </p>

                            <Link
                                to="/teacher/analytics"
                                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#F2B84B] transition hover:text-[#f5c766]"
                            >
                                Open performance analytics
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                >
                                    <path d="M5 12h14" />
                                    <path d="m13 6 6 6-6 6" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-6">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#7C9A82]">
                        Teacher Note
                    </p>

                    <h3 className="mt-3 text-lg font-bold text-[#F3EEDD]">
                        Student-first teaching
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#777C74]">
                        Use student performance data to understand where
                        learners need support and improve your course delivery.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Students;