import { Link } from "react-router-dom";

function Dashboard() {
    const stats = [
        {
            title: "Active Courses",
            value: "08",
            change: "+2 this month",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-6 w-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 5.5A2.5 2.5 0 016.5 3H20v16H6.5A2.5 2.5 0 014 16.5v-11z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 7h8M8 11h8M8 15h5"
                    />
                </svg>
            ),
        },
        {
            title: "Total Students",
            value: "342",
            change: "+18 this week",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-6 w-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"
                    />
                    <circle cx="9" cy="7" r="4" />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
                    />
                </svg>
            ),
        },
        {
            title: "Assignments",
            value: "24",
            change: "7 pending review",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-6 w-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 3h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 8h8M8 12h8M8 16h5"
                    />
                </svg>
            ),
        },
        {
            title: "Quizzes",
            value: "16",
            change: "3 scheduled",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-6 w-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 11l2 2 4-4"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 3h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2z"
                    />
                </svg>
            ),
        },
    ];

    const courses = [
        {
            title: "Full Stack Web Development",
            category: "Development",
            students: 128,
            lessons: 32,
            progress: 86,
            status: "Published",
        },
        {
            title: "Database Management Systems",
            category: "Database",
            students: 94,
            lessons: 24,
            progress: 72,
            status: "Published",
        },
        {
            title: "Java Programming",
            category: "Programming",
            students: 76,
            lessons: 28,
            progress: 61,
            status: "Published",
        },
    ];

    const activities = [
        {
            title: "New student enrolled",
            description:
                "A student joined Full Stack Web Development.",
            time: "12 min ago",
        },
        {
            title: "Assignment submitted",
            description:
                "7 students submitted Java Assignment #4.",
            time: "45 min ago",
        },
        {
            title: "Quiz completed",
            description:
                "Database Management quiz was completed by 31 students.",
            time: "2 hrs ago",
        },
        {
            title: "Course updated",
            description:
                "New lesson added to Full Stack Web Development.",
            time: "4 hrs ago",
        },
    ];

    return (
        <div className="min-h-full space-y-6 bg-slate-50 text-slate-700 transition-colors duration-300 dark:bg-[#07111f] dark:text-slate-200">

            {/* ================================================= */}
            {/* WELCOME HEADER */}
            {/* ================================================= */}

            <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-[#0b1727] lg:p-9">

                {/* Background decoration */}
                <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/10" />

                <div className="pointer-events-none absolute -bottom-24 left-1/3 h-60 w-60 rounded-full bg-teal-400/10 blur-3xl dark:bg-teal-400/10" />

                <div className="relative">

                    <div className="max-w-3xl">

                        <div className="mb-4 flex items-center gap-3">
                            <span className="h-px w-8 bg-blue-500" />

                            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
                                Teacher Workspace
                            </p>
                        </div>

                        <h1 className="font-['Space_Grotesk'] text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
                            Good afternoon, Teacher.
                        </h1>

                        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
                            Manage your assigned courses, guide students,
                            review submissions and keep your classroom
                            moving forward.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">

                            <Link
                                to="/teacher/courses"
                                className="
                                    inline-flex items-center gap-2
                                    rounded-xl
                                    bg-blue-600
                                    px-5 py-3
                                    text-sm font-semibold
                                    text-white
                                    shadow-sm
                                    transition
                                    hover:bg-blue-700
                                    hover:-translate-y-0.5
                                    dark:bg-blue-500
                                    dark:hover:bg-blue-600
                                "
                            >
                                View My Courses

                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    className="h-4 w-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5 12h14M13 6l6 6-6 6"
                                    />
                                </svg>
                            </Link>

                            <Link
                                to="/teacher/students"
                                className="
                                    inline-flex items-center gap-2
                                    rounded-xl
                                    border border-slate-200
                                    bg-slate-50
                                    px-5 py-3
                                    text-sm font-semibold
                                    text-slate-700
                                    transition
                                    hover:border-teal-300
                                    hover:bg-teal-50
                                    hover:text-teal-700
                                    dark:border-slate-700
                                    dark:bg-slate-900/60
                                    dark:text-slate-300
                                    dark:hover:border-teal-500/40
                                    dark:hover:bg-teal-500/10
                                    dark:hover:text-teal-400
                                "
                            >
                                View Students
                            </Link>

                        </div>
                    </div>

                </div>
            </section>


            {/* ================================================= */}
            {/* STAT CARDS */}
            {/* ================================================= */}

            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

                {stats.map((stat) => (
                    <div
                        key={stat.title}
                        className="
                            group
                            rounded-2xl
                            border border-slate-200
                            bg-white
                            p-5
                            shadow-sm
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-blue-200
                            hover:shadow-md
                            dark:border-slate-800
                            dark:bg-[#0b1727]
                            dark:hover:border-blue-500/30
                        "
                    >

                        <div className="flex items-start justify-between">

                            <div
                                className="
                                    flex h-11 w-11
                                    items-center justify-center
                                    rounded-xl
                                    border border-blue-100
                                    bg-blue-50
                                    text-blue-600
                                    dark:border-blue-500/20
                                    dark:bg-blue-500/10
                                    dark:text-blue-400
                                "
                            >
                                {stat.icon}
                            </div>

                            <span
                                className="
                                    rounded-full
                                    bg-teal-50
                                    px-2.5 py-1
                                    font-mono text-[9px]
                                    uppercase tracking-wider
                                    text-teal-600
                                    dark:bg-teal-500/10
                                    dark:text-teal-400
                                "
                            >
                                Overview
                            </span>

                        </div>

                        <p className="mt-5 text-sm text-slate-500 dark:text-slate-400">
                            {stat.title}
                        </p>

                        <div className="mt-1 flex items-end justify-between gap-3">

                            <h2 className="font-['Space_Grotesk'] text-3xl font-bold text-slate-900 dark:text-white">
                                {stat.value}
                            </h2>

                            <span className="mb-1 text-right font-mono text-[10px] text-teal-600 dark:text-teal-400">
                                {stat.change}
                            </span>

                        </div>

                    </div>
                ))}

            </section>


            {/* ================================================= */}
            {/* COURSES + QUICK ACTIONS */}
            {/* ================================================= */}

            <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">

                {/* ================================================= */}
                {/* MY COURSES */}
                {/* ================================================= */}

                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-[#0b1727] xl:col-span-2">

                    <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5 dark:border-slate-800">

                        <div>
                            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
                                Classroom
                            </p>

                            <h2 className="mt-1 font-['Space_Grotesk'] text-xl font-bold text-slate-900 dark:text-white">
                                Your Courses
                            </h2>
                        </div>

                        <Link
                            to="/teacher/courses"
                            className="
                                text-xs font-semibold
                                text-blue-600
                                transition
                                hover:text-blue-700
                                dark:text-blue-400
                                dark:hover:text-blue-300
                            "
                        >
                            View all →
                        </Link>

                    </div>


                    <div className="divide-y divide-slate-100 dark:divide-slate-800">

                        {courses.map((course) => (
                            <div
                                key={course.title}
                                className="
                                    p-6
                                    transition
                                    hover:bg-slate-50
                                    dark:hover:bg-slate-900/40
                                "
                            >

                                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                                    <div className="min-w-0">

                                        <div className="mb-2 flex flex-wrap items-center gap-2">

                                            <span
                                                className="
                                                    rounded-full
                                                    border border-teal-200
                                                    bg-teal-50
                                                    px-2.5 py-1
                                                    font-mono text-[9px]
                                                    uppercase tracking-wider
                                                    text-teal-700
                                                    dark:border-teal-500/20
                                                    dark:bg-teal-500/10
                                                    dark:text-teal-400
                                                "
                                            >
                                                {course.category}
                                            </span>

                                            <span
                                                className="
                                                    rounded-full
                                                    border border-blue-200
                                                    bg-blue-50
                                                    px-2.5 py-1
                                                    font-mono text-[9px]
                                                    uppercase tracking-wider
                                                    text-blue-600
                                                    dark:border-blue-500/20
                                                    dark:bg-blue-500/10
                                                    dark:text-blue-400
                                                "
                                            >
                                                {course.status}
                                            </span>

                                        </div>

                                        <h3 className="truncate font-['Space_Grotesk'] text-base font-bold text-slate-900 dark:text-white">
                                            {course.title}
                                        </h3>

                                        <div className="mt-2 flex flex-wrap gap-4 text-xs text-slate-500 dark:text-slate-400">

                                            <span className="flex items-center gap-1.5">
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="1.8"
                                                    className="h-3.5 w-3.5"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"
                                                    />
                                                    <circle
                                                        cx="9"
                                                        cy="7"
                                                        r="4"
                                                    />
                                                </svg>

                                                {course.students} students
                                            </span>

                                            <span className="flex items-center gap-1.5">
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="1.8"
                                                    className="h-3.5 w-3.5"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M4 6.5A2.5 2.5 0 016.5 4H20v16H6.5A2.5 2.5 0 014 17.5v-11z"
                                                    />
                                                </svg>

                                                {course.lessons} lessons
                                            </span>

                                        </div>

                                    </div>


                                    <div className="w-full sm:w-44">

                                        <div className="mb-2 flex items-center justify-between">

                                            <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-500">
                                                Completion
                                            </span>

                                            <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400">
                                                {course.progress}%
                                            </span>

                                        </div>

                                        <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">

                                            <div
                                                className="h-full rounded-full bg-gradient-to-r from-blue-600 to-teal-500"
                                                style={{
                                                    width: `${course.progress}%`,
                                                }}
                                            />

                                        </div>

                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>


                {/* ================================================= */}
                {/* QUICK ACTIONS */}
                {/* ================================================= */}

                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-[#0b1727]">

                    <div className="border-b border-slate-200 px-6 py-5 dark:border-slate-800">

                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
                            Shortcuts
                        </p>

                        <h2 className="mt-1 font-['Space_Grotesk'] text-xl font-bold text-slate-900 dark:text-white">
                            Teaching Tools
                        </h2>

                    </div>


                    <div className="space-y-2 p-4">

                        <QuickAction
                            to="/teacher/lessons"
                            title="Manage Lessons"
                            description="Add or edit lessons"
                            icon="L"
                        />

                        <QuickAction
                            to="/teacher/quizzes"
                            title="Create Quiz"
                            description="Build a new assessment"
                            icon="Q"
                        />

                        <QuickAction
                            to="/teacher/assignments"
                            title="Review Work"
                            description="Check submissions"
                            icon="A"
                        />

                        <QuickAction
                            to="/teacher/students"
                            title="View Students"
                            description="Track your learners"
                            icon="S"
                        />

                    </div>

                </div>

            </section>


            {/* ================================================= */}
            {/* PERFORMANCE + ACTIVITY */}
            {/* ================================================= */}

            <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">

                {/* ================================================= */}
                {/* STUDENT PERFORMANCE */}
                {/* ================================================= */}

                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-[#0b1727]">

                    <div className="border-b border-slate-200 px-6 py-5 dark:border-slate-800">

                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
                            Performance
                        </p>

                        <h2 className="mt-1 font-['Space_Grotesk'] text-xl font-bold text-slate-900 dark:text-white">
                            Student Progress
                        </h2>

                    </div>


                    <div className="p-6">

                        <div className="flex items-end justify-between">

                            <div>

                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                    Average completion
                                </p>

                                <p className="mt-1 font-['Space_Grotesk'] text-4xl font-bold text-blue-600 dark:text-blue-400">
                                    78%
                                </p>

                            </div>

                            <span className="font-mono text-xs text-teal-600 dark:text-teal-400">
                                +6.4% this month
                            </span>

                        </div>


                        <div className="mt-7 space-y-5">

                            <ProgressRow
                                label="Full Stack Development"
                                value={86}
                            />

                            <ProgressRow
                                label="Database Management"
                                value={72}
                            />

                            <ProgressRow
                                label="Java Programming"
                                value={68}
                            />

                            <ProgressRow
                                label="Web Technologies"
                                value={81}
                            />

                        </div>

                    </div>

                </div>


                {/* ================================================= */}
                {/* RECENT ACTIVITY */}
                {/* ================================================= */}

                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-[#0b1727]">

                    <div className="border-b border-slate-200 px-6 py-5 dark:border-slate-800">

                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
                            Activity Log
                        </p>

                        <h2 className="mt-1 font-['Space_Grotesk'] text-xl font-bold text-slate-900 dark:text-white">
                            Recent Activity
                        </h2>

                    </div>


                    <div className="divide-y divide-slate-100 dark:divide-slate-800">

                        {activities.map((activity, index) => (
                            <div
                                key={index}
                                className="flex gap-4 px-6 py-4"
                            >

                                <div
                                    className="
                                        mt-1 flex h-8 w-8
                                        shrink-0 items-center
                                        justify-center rounded-full
                                        border border-teal-200
                                        bg-teal-50
                                        dark:border-teal-500/20
                                        dark:bg-teal-500/10
                                    "
                                >
                                    <span className="h-2 w-2 rounded-full bg-teal-500" />
                                </div>

                                <div className="min-w-0 flex-1">

                                    <div className="flex flex-col justify-between gap-1 sm:flex-row">

                                        <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                                            {activity.title}
                                        </h3>

                                        <span className="font-mono text-[10px] text-slate-400 dark:text-slate-600">
                                            {activity.time}
                                        </span>

                                    </div>

                                    <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                                        {activity.description}
                                    </p>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </section>


            {/* ================================================= */}
            {/* FOOTER NOTE */}
            {/* ================================================= */}

            <div
                className="
                    flex flex-col gap-3
                    border-t border-slate-200
                    pt-6
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                    dark:border-slate-800
                "
            >

                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-slate-400 dark:text-slate-600">
                    Shiyora / Teacher Workspace
                </p>

                <p className="text-xs text-slate-400 dark:text-slate-600">
                    Teach. Guide. Inspire.
                </p>

            </div>

        </div>
    );
}


/* ========================================================= */
/* QUICK ACTION COMPONENT */
/* ========================================================= */

function QuickAction({ to, title, description, icon }) {
    return (
        <Link
            to={to}
            className="
                group
                flex items-center gap-4
                rounded-2xl
                border border-transparent
                p-3
                transition-all duration-200
                hover:border-blue-100
                hover:bg-blue-50/70
                dark:hover:border-blue-500/20
                dark:hover:bg-blue-500/5
            "
        >

            <div
                className="
                    flex h-10 w-10
                    shrink-0 items-center justify-center
                    rounded-xl
                    border border-blue-100
                    bg-blue-50
                    font-mono text-sm font-bold
                    text-blue-600
                    transition
                    group-hover:bg-blue-100
                    dark:border-blue-500/20
                    dark:bg-blue-500/10
                    dark:text-blue-400
                    dark:group-hover:bg-blue-500/15
                "
            >
                {icon}
            </div>

            <div className="min-w-0 flex-1">

                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {title}
                </p>

                <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-500">
                    {description}
                </p>

            </div>

            <span
                className="
                    text-slate-300
                    transition
                    group-hover:translate-x-1
                    group-hover:text-blue-500
                    dark:text-slate-600
                    dark:group-hover:text-teal-400
                "
            >
                →
            </span>

        </Link>
    );
}


/* ========================================================= */
/* PROGRESS ROW */
/* ========================================================= */

function ProgressRow({ label, value }) {
    return (
        <div>

            <div className="mb-2 flex items-center justify-between gap-4">

                <span className="truncate text-xs text-slate-600 dark:text-slate-400">
                    {label}
                </span>

                <span className="font-mono text-[10px] font-bold text-blue-600 dark:text-blue-400">
                    {value}%
                </span>

            </div>

            <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">

                <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-600 to-teal-500"
                    style={{
                        width: `${value}%`,
                    }}
                />

            </div>

        </div>
    );
}

export default Dashboard;