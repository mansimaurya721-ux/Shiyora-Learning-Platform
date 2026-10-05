import { useMemo, useState } from "react";
import {
    Users,
    UserCheck,
    UserX,
    BookOpen,
    Search,
    MoreVertical,
    Eye,
    Pencil,
    Trash2,
    GraduationCap,
    TrendingUp,
    Plus,
} from "lucide-react";

const Teachers = () => {
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");
    const [openMenu, setOpenMenu] = useState(null);

    // ============================================================
    // SAMPLE TEACHER DATA
    // ============================================================

    const teachers = [
        {
            id: 1,
            name: "Rahul Sharma",
            email: "rahul@shiyora.com",
            specialization: "Full Stack Development",
            courses: 6,
            students: 245,
            experience: "5 Years",
            joinedDate: "12 Aug 2026",
            status: "Active",
        },
        {
            id: 2,
            name: "Priya Singh",
            email: "priya@shiyora.com",
            specialization: "UI/UX Design",
            courses: 4,
            students: 180,
            experience: "4 Years",
            joinedDate: "10 Aug 2026",
            status: "Active",
        },
        {
            id: 3,
            name: "Amit Verma",
            email: "amit@shiyora.com",
            specialization: "Java Programming",
            courses: 5,
            students: 210,
            experience: "6 Years",
            joinedDate: "05 Aug 2026",
            status: "Active",
        },
        {
            id: 4,
            name: "Neha Gupta",
            email: "neha@shiyora.com",
            specialization: "Database Management",
            courses: 3,
            students: 125,
            experience: "3 Years",
            joinedDate: "01 Aug 2026",
            status: "Inactive",
        },
        {
            id: 5,
            name: "Vikas Yadav",
            email: "vikas@shiyora.com",
            specialization: "Python Programming",
            courses: 4,
            students: 165,
            experience: "4 Years",
            joinedDate: "28 Jul 2026",
            status: "Active",
        },
        {
            id: 6,
            name: "Sneha Mishra",
            email: "sneha@shiyora.com",
            specialization: "Digital Marketing",
            courses: 2,
            students: 95,
            experience: "2 Years",
            joinedDate: "25 Jul 2026",
            status: "Inactive",
        },
    ];

    // ============================================================
    // SEARCH + FILTER
    // ============================================================

    const filteredTeachers = useMemo(() => {
        const searchValue = search.toLowerCase().trim();

        return teachers.filter((teacher) => {
            const matchesSearch =
                teacher.name.toLowerCase().includes(searchValue) ||
                teacher.email.toLowerCase().includes(searchValue) ||
                teacher.specialization
                    .toLowerCase()
                    .includes(searchValue);

            const matchesStatus =
                statusFilter === "All" ||
                teacher.status === statusFilter;

            return matchesSearch && matchesStatus;
        });
    }, [search, statusFilter]);

    // ============================================================
    // STATISTICS
    // ============================================================

    const totalTeachers = teachers.length;

    const activeTeachers = teachers.filter(
        (teacher) => teacher.status === "Active"
    ).length;

    const inactiveTeachers = teachers.filter(
        (teacher) => teacher.status === "Inactive"
    ).length;

    const totalCourses = teachers.reduce(
        (total, teacher) => total + teacher.courses,
        0
    );

    const totalStudents = teachers.reduce(
        (total, teacher) => total + teacher.students,
        0
    );

    // ============================================================
    // ADD TEACHER
    // ============================================================

    const handleAddTeacher = () => {
        console.log("Add Teacher clicked");
    };

    // ============================================================
    // RETURN
    // ============================================================

    return (
        <main className="relative min-h-screen overflow-hidden bg-slate-50 px-4 py-6 text-slate-700 dark:bg-[#07111f] dark:text-slate-300 sm:px-6 lg:px-8">

            {/* =====================================================
                BACKGROUND GLOWS
            ====================================================== */}

            <div className="pointer-events-none fixed -left-40 -top-40 h-125 w-125 rounded-full bg-blue-500/5 blur-[130px] dark:bg-blue-500/10" />

            <div className="pointer-events-none fixed -right-40 bottom-0 h-125 w-125 rounded-full bg-teal-500/5 blur-[140px] dark:bg-teal-500/8" />

            {/* =====================================================
                CONTENT
            ====================================================== */}

            <div className="relative z-10">

                {/* =================================================
                    HEADER
                ================================================== */}

                <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

                    <div>

                        <p className="mb-1 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                            Administration
                        </p>

                        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 md:text-4xl">
                            Teachers
                        </h1>

                        <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                            Manage teachers, assigned courses and teaching
                            activities across the Shiyora LMS platform.
                        </p>

                    </div>

                    {/* =================================================
                        TEACHER ACTIONS
                    ================================================== */}

                    <div className="flex flex-wrap items-center gap-3">

                        {/* ADD TEACHER */}

                        <button
                            type="button"
                            onClick={handleAddTeacher}
                            className="inline-flex items-center gap-2 rounded-xl border border-blue-600 bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus-visible:outline-blue-400"
                        >
                            <Plus size={18} />
                            Add Teacher
                        </button>

                        {/* TEACHER COUNT */}

                        <div className="flex w-fit items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-3 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">

                            <Users
                                size={18}
                                className="text-blue-600 dark:text-blue-400"
                            />

                            <div>

                                <p className="font-mono text-[9px] uppercase tracking-widest text-slate-400 dark:text-slate-500">
                                    Total Teachers
                                </p>

                                <p className="mt-1 font-mono text-lg font-semibold text-blue-600 dark:text-blue-400">
                                    {totalTeachers}
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                {/* =================================================
                    STATISTICS
                ================================================== */}

                <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

                    {/* TOTAL TEACHERS */}

                    <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition-all duration-300 motion-safe:hover:-translate-y-1 hover:border-blue-200 hover:shadow-md dark:border-blue-500/20 dark:bg-[#0b1727] dark:hover:border-blue-500/30">

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-xs text-slate-500 dark:text-slate-400">
                                    Total Teachers
                                </p>

                                <h2 className="mt-2 font-mono text-2xl font-semibold text-slate-900 dark:text-slate-50">
                                    {totalTeachers}
                                </h2>

                                <p className="mt-1 text-[11px] text-slate-400 dark:text-slate-500">
                                    Registered teachers
                                </p>

                            </div>

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
                                <Users size={22} />
                            </div>

                        </div>

                    </div>

                    {/* ACTIVE TEACHERS */}

                    <div className="rounded-2xl border border-teal-100 bg-white p-5 shadow-sm transition-all duration-300 motion-safe:hover:-translate-y-1 hover:border-teal-200 hover:shadow-md dark:border-teal-500/20 dark:bg-[#0b1727] dark:hover:border-teal-500/30">

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-xs text-slate-500 dark:text-slate-400">
                                    Active Teachers
                                </p>

                                <h2 className="mt-2 font-mono text-2xl font-semibold text-slate-900 dark:text-slate-50">
                                    {activeTeachers}
                                </h2>

                                <p className="mt-1 text-[11px] text-teal-600 dark:text-teal-400">
                                    Currently teaching
                                </p>

                            </div>

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-teal-100 bg-teal-50 text-teal-600 dark:border-teal-500/20 dark:bg-teal-500/10 dark:text-teal-400">
                                <UserCheck size={22} />
                            </div>

                        </div>

                    </div>

                    {/* INACTIVE TEACHERS */}

                    <div className="rounded-2xl border border-red-100 bg-white p-5 shadow-sm transition-all duration-300 motion-safe:hover:-translate-y-1 hover:border-red-200 hover:shadow-md dark:border-red-500/20 dark:bg-[#0b1727] dark:hover:border-red-500/30">

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-xs text-slate-500 dark:text-slate-400">
                                    Inactive Teachers
                                </p>

                                <h2 className="mt-2 font-mono text-2xl font-semibold text-slate-900 dark:text-slate-50">
                                    {inactiveTeachers}
                                </h2>

                                <p className="mt-1 text-[11px] text-red-600 dark:text-red-400">
                                    Currently inactive
                                </p>

                            </div>

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-red-100 bg-red-50 text-red-600 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400">
                                <UserX size={22} />
                            </div>

                        </div>

                    </div>

                    {/* TOTAL COURSES */}

                    <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition-all duration-300 motion-safe:hover:-translate-y-1 hover:border-blue-200 hover:shadow-md dark:border-blue-500/20 dark:bg-[#0b1727] dark:hover:border-blue-500/30">

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-xs text-slate-500 dark:text-slate-400">
                                    Assigned Courses
                                </p>

                                <h2 className="mt-2 font-mono text-2xl font-semibold text-slate-900 dark:text-slate-50">
                                    {totalCourses}
                                </h2>

                                <p className="mt-1 text-[11px] text-slate-400 dark:text-slate-500">
                                    Across all teachers
                                </p>

                            </div>

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
                                <BookOpen size={22} />
                            </div>

                        </div>

                    </div>

                </div>

                {/* =================================================
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
                            placeholder="Search teachers..."
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-700 outline-none placeholder:text-slate-400 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-[#1e334a] dark:bg-[#102337] dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus:border-blue-400"
                        />

                    </div>

                    {/* FILTER */}

                    <div className="flex items-center gap-3">

                        <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 dark:text-slate-500">
                            Status
                        </span>

                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-[#1e334a] dark:bg-[#102337] dark:text-slate-200 dark:focus:border-blue-400"
                        >

                            <option
                                value="All"
                                className="bg-white dark:bg-[#102337]"
                            >
                                All Teachers
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

                {/* =================================================
                    TEACHER TABLE
                ================================================== */}

                <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">

                    {/* SECTION HEADER */}

                    <div className="flex flex-col gap-3 border-b border-slate-200 bg-white p-6 dark:border-[#1e334a] dark:bg-[#0b1727] sm:flex-row sm:items-center sm:justify-between">

                        <div>

                            <div className="flex items-center gap-2">

                                <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400" />

                                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
                                    Teachers
                                </p>

                            </div>

                            <h2 className="mt-1 text-xl font-semibold text-slate-900 dark:text-slate-50">
                                All Teachers
                            </h2>

                            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                Teachers working on the Shiyora LMS platform.
                            </p>

                        </div>

                        {/* RESULTS */}

                        <div className="flex w-fit items-center gap-2 rounded-lg bg-teal-50 px-3 py-2 dark:bg-teal-500/10">

                            <TrendingUp
                                size={14}
                                className="text-teal-600 dark:text-teal-400"
                            />

                            <span className="font-mono text-[10px] font-semibold text-teal-700 dark:text-teal-300">
                                {filteredTeachers.length} RESULTS
                            </span>

                        </div>

                    </div>

                    {/* TABLE */}

                    <div className="overflow-x-auto">

                        <table className="w-full min-w-287.5">

                            <thead className="bg-slate-50 dark:bg-[#102337]">

                                <tr>

                                    <th className="px-6 py-4 text-left font-mono text-[9px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Teacher
                                    </th>

                                    <th className="px-6 py-4 text-left font-mono text-[9px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Specialization
                                    </th>

                                    <th className="px-6 py-4 text-left font-mono text-[9px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Courses
                                    </th>

                                    <th className="px-6 py-4 text-left font-mono text-[9px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Students
                                    </th>

                                    <th className="px-6 py-4 text-left font-mono text-[9px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Experience
                                    </th>

                                    <th className="px-6 py-4 text-left font-mono text-[9px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Joined
                                    </th>

                                    <th className="px-6 py-4 text-left font-mono text-[9px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Status
                                    </th>

                                    <th className="px-6 py-4 text-right font-mono text-[9px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Action
                                    </th>

                                </tr>

                            </thead>

                            <tbody className="divide-y divide-slate-200 dark:divide-[#1e334a]">

                                {filteredTeachers.map((teacher) => (

                                    <tr
                                        key={teacher.id}
                                        className="transition-colors hover:bg-slate-50 dark:hover:bg-[#102337]/70"
                                    >

                                        {/* TEACHER */}

                                        <td className="px-6 py-5">

                                            <div className="flex items-center gap-3">

                                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 font-bold text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
                                                    {teacher.name.charAt(0)}
                                                </div>

                                                <div>

                                                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                                                        {teacher.name}
                                                    </p>

                                                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                                        {teacher.email}
                                                    </p>

                                                </div>

                                            </div>

                                        </td>

                                        {/* SPECIALIZATION */}

                                        <td className="px-6 py-5">

                                            <div className="flex items-center gap-2">

                                                <GraduationCap
                                                    size={17}
                                                    className="shrink-0 text-teal-600 dark:text-teal-400"
                                                />

                                                <p className="max-w-55 text-sm font-medium text-slate-600 dark:text-slate-300">
                                                    {teacher.specialization}
                                                </p>

                                            </div>

                                        </td>

                                        {/* COURSES */}

                                        <td className="px-6 py-5">

                                            <div className="flex items-center gap-2">

                                                <BookOpen
                                                    size={16}
                                                    className="text-blue-600 dark:text-blue-400"
                                                />

                                                <span className="font-mono text-xs font-semibold text-slate-600 dark:text-slate-300">
                                                    {teacher.courses}
                                                </span>

                                            </div>

                                        </td>

                                        {/* STUDENTS */}

                                        <td className="px-6 py-5">

                                            <div className="flex items-center gap-2">

                                                <Users
                                                    size={16}
                                                    className="text-teal-600 dark:text-teal-400"
                                                />

                                                <span className="font-mono text-xs font-semibold text-slate-600 dark:text-slate-300">
                                                    {teacher.students}
                                                </span>

                                            </div>

                                        </td>

                                        {/* EXPERIENCE */}

                                        <td className="px-6 py-5">

                                            <span className="font-mono text-xs text-slate-600 dark:text-slate-300">
                                                {teacher.experience}
                                            </span>

                                        </td>

                                        {/* JOINED DATE */}

                                        <td className="px-6 py-5">

                                            <span className="font-mono text-xs text-slate-600 dark:text-slate-300">
                                                {teacher.joinedDate}
                                            </span>

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
                                                    ${teacher.status ===
                                                        "Active"
                                                        ? "bg-teal-50 text-teal-700 dark:bg-teal-500/10 dark:text-teal-300"
                                                        : "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300"
                                                    }
                                                `}
                                            >

                                                <span
                                                    className={`
                                                        h-1.5
                                                        w-1.5
                                                        rounded-full
                                                        ${teacher.status ===
                                                            "Active"
                                                            ? "bg-teal-500 dark:bg-teal-400"
                                                            : "bg-amber-500 dark:bg-amber-400"
                                                        }
                                                    `}
                                                />

                                                {teacher.status}

                                            </span>

                                        </td>

                                        {/* ACTION */}

                                        <td className="relative px-6 py-5 text-right">

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setOpenMenu(
                                                        openMenu === teacher.id
                                                            ? null
                                                            : teacher.id
                                                    )
                                                }
                                                className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-slate-500 dark:hover:bg-slate-800 dark:hover:text-slate-200 dark:focus-visible:outline-teal-400"
                                            >
                                                <MoreVertical size={18} />
                                            </button>

                                            {/* DROPDOWN */}

                                            {openMenu === teacher.id && (

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

                    {/* EMPTY STATE */}

                    {filteredTeachers.length === 0 && (

                        <div className="border-t border-slate-200 px-6 py-14 text-center dark:border-[#1e334a]">

                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                                <Users size={26} />
                            </div>

                            <h3 className="mt-4 font-semibold text-slate-900 dark:text-slate-50">
                                No teachers found
                            </h3>

                            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                Try changing your search or status filter.
                            </p>

                        </div>

                    )}

                </section>

                {/* =================================================
                    FOOTER NOTE
                ================================================== */}

                <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                    <p className="font-mono text-[9px] uppercase tracking-wider text-slate-400 dark:text-slate-600">
                        Shiyora Administration
                    </p>

                    <p className="font-mono text-[9px] uppercase tracking-wider text-slate-400 dark:text-slate-600">
                        Teacher Management
                    </p>

                </div>

            </div>

        </main>
    );
};

export default Teachers;