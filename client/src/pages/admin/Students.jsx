import { useMemo, useState } from "react";
import {
    Users,
    UserCheck,
    UserX,
    TrendingUp,
    Search,
    MoreVertical,
    Eye,
    Pencil,
    Trash2,
} from "lucide-react";

// ============================================================
// STUDENTS
// ============================================================

const Students = () => {
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");
    const [openMenu, setOpenMenu] = useState(null);

    // ============================================================
    // SAMPLE STUDENT DATA
    // ============================================================

    const students = [
        {
            id: 1,
            name: "Aarav Singh",
            email: "aarav@gmail.com",
            enrolledCourse: "Full Stack Web Development",
            enrolledDate: "12 Aug 2026",
            progress: 78,
            status: "Active",
        },
        {
            id: 2,
            name: "Ananya Sharma",
            email: "ananya@gmail.com",
            enrolledCourse: "UI/UX Design Fundamentals",
            enrolledDate: "10 Aug 2026",
            progress: 64,
            status: "Active",
        },
        {
            id: 3,
            name: "Rohan Verma",
            email: "rohan@gmail.com",
            enrolledCourse: "Java Programming",
            enrolledDate: "05 Aug 2026",
            progress: 91,
            status: "Active",
        },
        {
            id: 4,
            name: "Priya Gupta",
            email: "priya@gmail.com",
            enrolledCourse: "Database Management System",
            enrolledDate: "01 Aug 2026",
            progress: 42,
            status: "Inactive",
        },
        {
            id: 5,
            name: "Aditya Yadav",
            email: "aditya@gmail.com",
            enrolledCourse: "Python for Beginners",
            enrolledDate: "28 Jul 2026",
            progress: 73,
            status: "Active",
        },
        {
            id: 6,
            name: "Sneha Mishra",
            email: "sneha@gmail.com",
            enrolledCourse: "Digital Marketing",
            enrolledDate: "25 Jul 2026",
            progress: 35,
            status: "Inactive",
        },
    ];

    // ============================================================
    // FILTER STUDENTS
    // ============================================================

    const filteredStudents = useMemo(() => {
        const searchText = search.toLowerCase().trim();

        return students.filter((student) => {
            const matchesSearch =
                student.name.toLowerCase().includes(searchText) ||
                student.email.toLowerCase().includes(searchText) ||
                student.enrolledCourse.toLowerCase().includes(searchText);

            const matchesStatus =
                statusFilter === "All" ||
                student.status === statusFilter;

            return matchesSearch && matchesStatus;
        });
    }, [search, statusFilter]);

    // ============================================================
    // STATISTICS
    // ============================================================

    const totalStudents = students.length;

    const activeStudents = students.filter(
        (student) => student.status === "Active"
    ).length;

    const inactiveStudents = students.filter(
        (student) => student.status === "Inactive"
    ).length;

    const averageProgress = Math.round(
        students.reduce(
            (total, student) => total + student.progress,
            0
        ) / students.length
    );

    // ============================================================
    // STATISTICS DATA
    // ============================================================

    const statistics = [
        {
            title: "Total Students",
            value: totalStudents,
            description: "Registered students",
            icon: Users,
            iconColor:
                "text-blue-600 dark:text-blue-400",
            iconBg:
                "bg-blue-50 dark:bg-blue-500/10",
            border:
                "border-blue-100 dark:border-blue-500/20",
        },
        {
            title: "Active Students",
            value: activeStudents,
            description: "Currently learning",
            icon: UserCheck,
            iconColor:
                "text-teal-600 dark:text-teal-400",
            iconBg:
                "bg-teal-50 dark:bg-teal-500/10",
            border:
                "border-teal-100 dark:border-teal-500/20",
        },
        {
            title: "Inactive Students",
            value: inactiveStudents,
            description: "Currently inactive",
            icon: UserX,
            iconColor:
                "text-red-600 dark:text-red-400",
            iconBg:
                "bg-red-50 dark:bg-red-500/10",
            border:
                "border-red-100 dark:border-red-500/20",
        },
        {
            title: "Average Progress",
            value: `${averageProgress}%`,
            description: "Overall learning progress",
            icon: TrendingUp,
            iconColor:
                "text-blue-600 dark:text-blue-400",
            iconBg:
                "bg-blue-50 dark:bg-blue-500/10",
            border:
                "border-blue-100 dark:border-blue-500/20",
        },
    ];

    // ============================================================
    // RETURN
    // ============================================================

    return (
        <main className="relative min-h-screen overflow-hidden bg-slate-50 px-4 py-6 text-slate-700 dark:bg-[#07111f] dark:text-slate-300 sm:px-6 lg:px-8">

            {/* ====================================================
                BACKGROUND GLOWS
            ==================================================== */}

            <div className="pointer-events-none fixed -left-40 -top-40 h-125 w-125 rounded-full bg-blue-500/5 blur-[130px] dark:bg-blue-500/10" />

            <div className="pointer-events-none fixed -right-40 bottom-0 h-125 w-125 rounded-full bg-teal-500/[0.05] blur-[140px] dark:bg-teal-500/[0.08]" />

            {/* ====================================================
                CONTENT
            ==================================================== */}

            <div className="relative z-10">

                {/* ==================================================
                    HEADER
                ================================================== */}

                <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

                    <div>

                        <p className="mb-1 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                            Administration
                        </p>

                        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 md:text-4xl">
                            Students
                        </h1>

                        <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                            Manage students, enrollments and learning
                            progress across your Shiyora LMS platform.
                        </p>

                    </div>

                    {/* TOTAL RECORDS */}

                    <div className="rounded-xl border border-slate-200 bg-white px-5 py-3 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">

                        <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400 dark:text-slate-500">
                            Total Records
                        </span>

                        <p className="mt-1 font-mono text-lg font-semibold text-blue-600 dark:text-blue-400">
                            {totalStudents}
                        </p>

                    </div>

                </div>

                {/* ==================================================
                    STATISTICS
                ================================================== */}

                <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

                    {statistics.map((stat) => {
                        const Icon = stat.icon;

                        return (
                            <div
                                key={stat.title}
                                className={`
                                    group
                                    relative
                                    overflow-hidden
                                    rounded-2xl
                                    border
                                    ${stat.border}
                                    bg-white
                                    p-5
                                    shadow-sm
                                    transition-all
                                    duration-300
                                    motion-safe:hover:-translate-y-1
                                    hover:shadow-md
                                    dark:bg-[#0b1727]
                                `}
                            >

                                {/* DECORATIVE GLOW */}

                                <div
                                    className={`
                                        pointer-events-none
                                        absolute
                                        -right-8
                                        -top-8
                                        h-24
                                        w-24
                                        rounded-full
                                        ${stat.iconBg}
                                        blur-2xl
                                    `}
                                />

                                <div className="relative flex items-start justify-between">

                                    <div>

                                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                                            {stat.title}
                                        </p>

                                        <h2 className="mt-2 font-mono text-2xl font-semibold text-slate-900 dark:text-slate-50">
                                            {stat.value}
                                        </h2>

                                        <p className="mt-2 text-[10px] text-slate-400 dark:text-slate-500">
                                            {stat.description}
                                        </p>

                                    </div>

                                    <div
                                        className={`
                                            flex
                                            h-11
                                            w-11
                                            items-center
                                            justify-center
                                            rounded-xl
                                            border
                                            ${stat.border}
                                            ${stat.iconBg}
                                            ${stat.iconColor}
                                        `}
                                    >
                                        <Icon size={20} />
                                    </div>

                                </div>

                            </div>
                        );
                    })}

                </div>

                {/* ==================================================
                    SEARCH + FILTER
                ================================================== */}

                <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727] md:flex-row md:items-center md:justify-between">

                    {/* SEARCH */}

                    <div className="relative w-full max-w-md">

                        <Search
                            size={19}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500"
                        />

                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search students..."
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-[#1e334a] dark:bg-[#102337] dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus:border-blue-400"
                        />

                    </div>

                    {/* FILTER */}

                    <div className="flex items-center gap-3">

                        <span className="hidden font-mono text-[9px] uppercase tracking-wider text-slate-400 dark:text-slate-500 sm:block">
                            Status
                        </span>

                        <select
                            value={statusFilter}
                            onChange={(e) =>
                                setStatusFilter(e.target.value)
                            }
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-[#1e334a] dark:bg-[#102337] dark:text-slate-200 dark:focus:border-blue-400 sm:w-auto"
                        >
                            <option
                                value="All"
                                className="bg-white dark:bg-[#102337]"
                            >
                                All Students
                            </option>

                            <option
                                value="Active"
                                className="bg-white dark:bg-[#102337]"
                            >
                                Active
                            </option>

                            <option
                                value="Inactive"
                                className="bg-white dark:bg-[#102337]"
                            >
                                Inactive
                            </option>
                        </select>

                    </div>

                </div>

                {/* ==================================================
                    STUDENT MANAGEMENT SECTION
                ================================================== */}

                <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">

                    {/* ==================================================
                        TABLE SECTION HEADER
                    ================================================== */}

                    <div className="flex flex-col gap-3 border-b border-slate-200 bg-white p-6 dark:border-[#1e334a] dark:bg-[#0b1727] sm:flex-row sm:items-center sm:justify-between">

                        <div>

                            <div className="flex items-center gap-2">

                                <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400" />

                                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
                                    Student Management
                                </p>

                            </div>

                            <h2 className="mt-1 text-xl font-semibold text-slate-900 dark:text-slate-50">
                                All Students
                            </h2>

                            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                View and manage students enrolled in your
                                courses.
                            </p>

                        </div>

                        {/* RESULTS */}

                        <div className="flex w-fit items-center gap-2 rounded-lg bg-teal-50 px-3 py-2 dark:bg-teal-500/10">

                            <TrendingUp
                                size={14}
                                className="text-teal-600 dark:text-teal-400"
                            />

                            <span className="font-mono text-[10px] font-semibold text-teal-700 dark:text-teal-300">
                                {filteredStudents.length} RESULTS
                            </span>

                        </div>

                    </div>

                    {/* ==================================================
                        TABLE
                    ================================================== */}

                    <div className="overflow-x-auto">

                        <table className="w-full min-w-262.5">

                            {/* TABLE HEAD */}

                            <thead className="bg-slate-50 dark:bg-[#102337]">

                                <tr>

                                    <th className="px-6 py-4 text-left font-mono text-[9px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Student
                                    </th>

                                    <th className="px-6 py-4 text-left font-mono text-[9px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Course
                                    </th>

                                    <th className="px-6 py-4 text-left font-mono text-[9px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Enrolled
                                    </th>

                                    <th className="px-6 py-4 text-left font-mono text-[9px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Progress
                                    </th>

                                    <th className="px-6 py-4 text-left font-mono text-[9px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Status
                                    </th>

                                    <th className="px-6 py-4 text-right font-mono text-[9px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Action
                                    </th>

                                </tr>

                            </thead>

                            {/* TABLE BODY */}

                            <tbody className="divide-y divide-slate-200 dark:divide-[#1e334a]">

                                {filteredStudents.map((student) => (

                                    <tr
                                        key={student.id}
                                        className="transition-colors hover:bg-slate-50 dark:hover:bg-[#102337]/70"
                                    >

                                        {/* STUDENT */}

                                        <td className="px-6 py-5">

                                            <div className="flex items-center gap-3">

                                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 font-bold text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
                                                    {student.name.charAt(0)}
                                                </div>

                                                <div>

                                                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                                                        {student.name}
                                                    </p>

                                                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                                        {student.email}
                                                    </p>

                                                </div>

                                            </div>

                                        </td>

                                        {/* COURSE */}

                                        <td className="px-6 py-5">

                                            <p className="max-w-65 text-sm font-medium text-slate-600 dark:text-slate-300">
                                                {student.enrolledCourse}
                                            </p>

                                        </td>

                                        {/* ENROLLED DATE */}

                                        <td className="px-6 py-5 font-mono text-[10px] text-slate-500 dark:text-slate-400">
                                            {student.enrolledDate}
                                        </td>

                                        {/* PROGRESS */}

                                        <td className="px-6 py-5">

                                            <div className="w-36">

                                                <div className="mb-2 flex items-center justify-between">

                                                    <span className="text-[10px] text-slate-500 dark:text-slate-400">
                                                        Progress
                                                    </span>

                                                    <span className="font-mono text-[10px] font-semibold text-blue-600 dark:text-blue-400">
                                                        {student.progress}%
                                                    </span>

                                                </div>

                                                <div className="h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">

                                                    <div
                                                        className="h-full rounded-full bg-gradient-to-r from-blue-600 to-teal-500 transition-all dark:from-blue-500 dark:to-teal-400"
                                                        style={{
                                                            width: `${student.progress}%`,
                                                        }}
                                                    />

                                                </div>

                                            </div>

                                        </td>

                                        {/* STATUS */}

                                        <td className="px-6 py-5">

                                            <span
                                                className={`
                                                    inline-flex
                                                    items-center
                                                    gap-1.5
                                                    rounded-full
                                                    px-3
                                                    py-1
                                                    text-xs
                                                    font-semibold
                                                    ${student.status === "Active"
                                                        ? "bg-teal-50 text-teal-700 dark:bg-teal-500/10 dark:text-teal-300"
                                                        : "bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-300"
                                                    }
                                                `}
                                            >

                                                <span
                                                    className={`
                                                        h-1.5
                                                        w-1.5
                                                        rounded-full
                                                        ${student.status === "Active"
                                                            ? "bg-teal-500 dark:bg-teal-400"
                                                            : "bg-red-500 dark:bg-red-400"
                                                        }
                                                    `}
                                                />

                                                {student.status}

                                            </span>

                                        </td>

                                        {/* ACTION */}

                                        <td className="relative px-6 py-5 text-right">

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setOpenMenu(
                                                        openMenu === student.id
                                                            ? null
                                                            : student.id
                                                    )
                                                }
                                                className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-slate-500 dark:hover:bg-slate-800 dark:hover:text-slate-200 dark:focus-visible:outline-teal-400"
                                            >
                                                <MoreVertical size={18} />
                                            </button>

                                            {/* DROPDOWN */}

                                            {openMenu === student.id && (

                                                <div className="absolute right-6 top-14 z-30 w-36 overflow-hidden rounded-xl border border-slate-200 bg-white py-1 text-left shadow-lg dark:border-[#1e334a] dark:bg-[#0b1727]">

                                                    {/* VIEW */}

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            setOpenMenu(null)
                                                        }
                                                        className="flex w-full items-center gap-2 px-4 py-2.5 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
                                                    >
                                                        <Eye size={15} />
                                                        View
                                                    </button>

                                                    {/* EDIT */}

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            setOpenMenu(null)
                                                        }
                                                        className="flex w-full items-center gap-2 px-4 py-2.5 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
                                                    >
                                                        <Pencil size={15} />
                                                        Edit
                                                    </button>

                                                    {/* DELETE */}

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            setOpenMenu(null)
                                                        }
                                                        className="flex w-full items-center gap-2 px-4 py-2.5 text-sm text-red-600 transition hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-500/10"
                                                    >
                                                        <Trash2 size={15} />
                                                        Delete
                                                    </button>

                                                </div>

                                            )}

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                    {/* ==================================================
                        EMPTY STATE
                    ================================================== */}

                    {filteredStudents.length === 0 && (

                        <div className="border-t border-slate-200 px-6 py-14 text-center dark:border-[#1e334a]">

                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                                <Users size={26} />
                            </div>

                            <h3 className="mt-4 font-semibold text-slate-900 dark:text-slate-50">
                                No students found
                            </h3>

                            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                Try changing your search or status filter.
                            </p>

                        </div>

                    )}

                </section>

                {/* ==================================================
                    FOOTER NOTE
                ================================================== */}

                <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                    <p className="font-mono text-[9px] uppercase tracking-wider text-slate-400 dark:text-slate-600">
                        Showing {filteredStudents.length} of {totalStudents} students
                    </p>

                    <p className="font-mono text-[9px] uppercase tracking-wider text-slate-400 dark:text-slate-600">
                        Shiyora / Students
                    </p>

                </div>

            </div>
        </main>
    );
};

export default Students;