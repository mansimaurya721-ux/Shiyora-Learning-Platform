//import React from "react";
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
            description: "A student joined Full Stack Web Development.",
            time: "12 min ago",
        },
        {
            title: "Assignment submitted",
            description: "7 students submitted Java Assignment #4.",
            time: "45 min ago",
        },
        {
            title: "Quiz completed",
            description: "Database Management quiz was completed by 31 students.",
            time: "2 hrs ago",
        },
        {
            title: "Course updated",
            description: "New lesson added to Full Stack Web Development.",
            time: "4 hrs ago",
        },
    ];

    return (
        <div className="space-y-8">

            {/* ------------------------------------------------ */}
            {/* HEADER */}
            {/* ------------------------------------------------ */}

            <section className="relative overflow-hidden rounded-3xl border border-[#F2B84B]/15 bg-[#1B241E] p-7 lg:p-9">

                {/* Decorative elements */}
                <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#F2B84B]/5 blur-3xl" />

                <div className="pointer-events-none absolute -bottom-24 left-1/3 h-52 w-52 rounded-full bg-[#7C9A82]/5 blur-3xl" />

                <div className="relative flex flex-col justify-between gap-6 lg:flex-row lg:items-center">

                    <div>
                        <p className="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-[#7C9A82]">
                            Teacher Workspace
                        </p>

                        <h1 className="font-['Space_Grotesk'] text-3xl font-bold tracking-tight text-[#F3EEDD] md:text-4xl">
                            Good afternoon, Teacher.
                        </h1>

                        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#F3EEDD]/55">
                            Manage your courses, guide your students, review
                            assignments and keep your classroom moving forward.
                        </p>
                    </div>

                    <Link
                        to="/teacher/courses/create"
                        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#F2B84B] px-5 py-3 text-sm font-bold text-[#161F19] transition hover:-translate-y-0.5 hover:bg-[#F2B84B]/90"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                d="M12 5v14M5 12h14"
                            />
                        </svg>

                        Create Course
                    </Link>

                </div>
            </section>


            {/* ------------------------------------------------ */}
            {/* STAT CARDS */}
            {/* ------------------------------------------------ */}

            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

                {stats.map((stat) => (
                    <div
                        key={stat.title}
                        className="group rounded-2xl border border-[#F2B84B]/10 bg-[#1B241E] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#F2B84B]/25"
                    >

                        <div className="flex items-start justify-between">

                            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#F2B84B]/15 bg-[#F2B84B]/10 text-[#F2B84B]">
                                {stat.icon}
                            </div>

                            <span className="font-mono text-[10px] uppercase tracking-wider text-[#7C9A82]">
                                Overview
                            </span>

                        </div>

                        <p className="mt-5 text-sm text-[#F3EEDD]/50">
                            {stat.title}
                        </p>

                        <div className="mt-1 flex items-end justify-between gap-3">

                            <h2 className="font-['Space_Grotesk'] text-3xl font-bold text-[#F3EEDD]">
                                {stat.value}
                            </h2>

                            <span className="mb-1 text-right font-mono text-[10px] text-[#7C9A82]">
                                {stat.change}
                            </span>

                        </div>

                    </div>
                ))}

            </section>


            {/* ------------------------------------------------ */}
            {/* MAIN GRID */}
            {/* ------------------------------------------------ */}

            <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">

                {/* COURSE OVERVIEW */}

                <div className="xl:col-span-2 rounded-3xl border border-[#F2B84B]/10 bg-[#1B241E]">

                    <div className="flex items-center justify-between border-b border-[#F2B84B]/10 px-6 py-5">

                        <div>
                            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#7C9A82]">
                                Classroom
                            </p>

                            <h2 className="mt-1 font-['Space_Grotesk'] text-xl font-bold text-[#F3EEDD]">
                                Your Courses
                            </h2>
                        </div>

                        <Link
                            to="/teacher/courses"
                            className="text-xs font-semibold text-[#F2B84B] transition hover:text-[#F3EEDD]"
                        >
                            View all →
                        </Link>

                    </div>


                    <div className="divide-y divide-[#F2B84B]/10">

                        {courses.map((course) => (
                            <div
                                key={course.title}
                                className="p-6 transition hover:bg-[#161F19]/40"
                            >

                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                                    <div className="min-w-0">

                                        <div className="mb-2 flex flex-wrap items-center gap-2">

                                            <span className="rounded-full border border-[#7C9A82]/20 bg-[#7C9A82]/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-[#7C9A82]">
                                                {course.category}
                                            </span>

                                            <span className="rounded-full border border-[#F2B84B]/15 bg-[#F2B84B]/5 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-[#F2B84B]">
                                                {course.status}
                                            </span>

                                        </div>

                                        <h3 className="truncate font-['Space_Grotesk'] text-base font-bold text-[#F3EEDD]">
                                            {course.title}
                                        </h3>

                                        <div className="mt-2 flex flex-wrap gap-4 text-xs text-[#F3EEDD]/45">

                                            <span>
                                                {course.students} students
                                            </span>

                                            <span>
                                                {course.lessons} lessons
                                            </span>

                                        </div>

                                    </div>


                                    <div className="w-full sm:w-44">

                                        <div className="mb-2 flex items-center justify-between">
                                            <span className="font-mono text-[10px] uppercase tracking-wider text-[#F3EEDD]/40">
                                                Completion
                                            </span>

                                            <span className="font-mono text-xs font-bold text-[#F2B84B]">
                                                {course.progress}%
                                            </span>
                                        </div>

                                        <div className="h-1.5 overflow-hidden rounded-full bg-[#161F19]">
                                            <div
                                                className="h-full rounded-full bg-[#F2B84B]"
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


                {/* QUICK ACTIONS */}

                <div className="rounded-3xl border border-[#F2B84B]/10 bg-[#1B241E]">

                    <div className="border-b border-[#F2B84B]/10 px-6 py-5">

                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#7C9A82]">
                            Shortcuts
                        </p>

                        <h2 className="mt-1 font-['Space_Grotesk'] text-xl font-bold text-[#F3EEDD]">
                            Quick Actions
                        </h2>

                    </div>


                    <div className="space-y-2 p-4">

                        <QuickAction
                            to="/teacher/courses/create"
                            title="Create Course"
                            description="Start a new course"
                            icon="+"
                        />

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


            {/* ------------------------------------------------ */}
            {/* LOWER SECTION */}
            {/* ------------------------------------------------ */}

            <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">

                {/* STUDENT PERFORMANCE */}

                <div className="rounded-3xl border border-[#F2B84B]/10 bg-[#1B241E]">

                    <div className="border-b border-[#F2B84B]/10 px-6 py-5">

                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#7C9A82]">
                            Performance
                        </p>

                        <h2 className="mt-1 font-['Space_Grotesk'] text-xl font-bold text-[#F3EEDD]">
                            Student Progress
                        </h2>

                    </div>


                    <div className="p-6">

                        <div className="flex items-end justify-between">

                            <div>
                                <p className="text-sm text-[#F3EEDD]/50">
                                    Average completion
                                </p>

                                <p className="mt-1 font-['Space_Grotesk'] text-4xl font-bold text-[#F2B84B]">
                                    78%
                                </p>
                            </div>

                            <span className="font-mono text-xs text-[#7C9A82]">
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


                {/* RECENT ACTIVITY */}

                <div className="rounded-3xl border border-[#F2B84B]/10 bg-[#1B241E]">

                    <div className="border-b border-[#F2B84B]/10 px-6 py-5">

                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#7C9A82]">
                            Activity Log
                        </p>

                        <h2 className="mt-1 font-['Space_Grotesk'] text-xl font-bold text-[#F3EEDD]">
                            Recent Activity
                        </h2>

                    </div>


                    <div className="divide-y divide-[#F2B84B]/10">

                        {activities.map((activity, index) => (
                            <div
                                key={index}
                                className="flex gap-4 px-6 py-4"
                            >

                                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#F2B84B]/15 bg-[#F2B84B]/10">

                                    <span className="h-2 w-2 rounded-full bg-[#F2B84B]" />

                                </div>

                                <div className="min-w-0 flex-1">

                                    <div className="flex flex-col justify-between gap-1 sm:flex-row">

                                        <h3 className="text-sm font-semibold text-[#F3EEDD]">
                                            {activity.title}
                                        </h3>

                                        <span className="font-mono text-[10px] text-[#F3EEDD]/30">
                                            {activity.time}
                                        </span>

                                    </div>

                                    <p className="mt-1 text-xs leading-5 text-[#F3EEDD]/45">
                                        {activity.description}
                                    </p>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </section>


            {/* ------------------------------------------------ */}
            {/* FOOTER NOTE */}
            {/* ------------------------------------------------ */}

            <div className="flex flex-col gap-3 border-t border-[#F2B84B]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#F3EEDD]/25">
                    Shiyora / Teacher Workspace
                </p>

                <p className="text-xs text-[#F3EEDD]/30">
                    Keep teaching. Keep building. Keep growing.
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
            className="group flex items-center gap-4 rounded-2xl border border-transparent p-3 transition hover:border-[#F2B84B]/10 hover:bg-[#161F19]"
        >

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#F2B84B]/15 bg-[#F2B84B]/10 font-mono text-sm font-bold text-[#F2B84B] transition group-hover:bg-[#F2B84B]/15">
                {icon}
            </div>

            <div className="min-w-0 flex-1">

                <p className="text-sm font-semibold text-[#F3EEDD]">
                    {title}
                </p>

                <p className="mt-0.5 text-xs text-[#F3EEDD]/40">
                    {description}
                </p>

            </div>

            <span className="text-[#F3EEDD]/20 transition group-hover:translate-x-1 group-hover:text-[#F2B84B]">
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

                <span className="truncate text-xs text-[#F3EEDD]/60">
                    {label}
                </span>

                <span className="font-mono text-[10px] font-bold text-[#F2B84B]">
                    {value}%
                </span>

            </div>

            <div className="h-1.5 overflow-hidden rounded-full bg-[#161F19]">

                <div
                    className="h-full rounded-full bg-[#F2B84B]"
                    style={{
                        width: `${value}%`,
                    }}
                />

            </div>

        </div>
    );
}

export default Dashboard;