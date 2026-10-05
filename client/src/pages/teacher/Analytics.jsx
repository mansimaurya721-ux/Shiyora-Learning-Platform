import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const coursePerformance = [
    {
        id: 1,
        name: "Web Development",
        students: 142,
        completion: 84,
        averageScore: 88,
        assignments: 91,
        quizzes: 86,
        engagement: 93,
    },
    {
        id: 2,
        name: "JavaScript Mastery",
        students: 96,
        completion: 76,
        averageScore: 82,
        assignments: 84,
        quizzes: 79,
        engagement: 87,
    },
    {
        id: 3,
        name: "React Development",
        students: 68,
        completion: 71,
        averageScore: 79,
        assignments: 81,
        quizzes: 77,
        engagement: 82,
    },
    {
        id: 4,
        name: "CSS & UI Design",
        students: 36,
        completion: 89,
        averageScore: 91,
        assignments: 94,
        quizzes: 89,
        engagement: 95,
    },
];

const monthlyData = [
    { month: "Mar", students: 218, completion: 62 },
    { month: "Apr", students: 244, completion: 67 },
    { month: "May", students: 271, completion: 71 },
    { month: "Jun", students: 296, completion: 73 },
    { month: "Jul", students: 324, completion: 78 },
    { month: "Aug", students: 342, completion: 84 },
];

const activityData = [
    {
        title: "Course completion",
        value: "84%",
        change: "+6.2%",
        description: "Average completion across your courses",
    },
    {
        title: "Assignment submissions",
        value: "91%",
        change: "+4.8%",
        description: "Students submitting assignments on time",
    },
    {
        title: "Quiz performance",
        value: "83%",
        change: "+3.4%",
        description: "Average score across published quizzes",
    },
    {
        title: "Student engagement",
        value: "89%",
        change: "+7.1%",
        description: "Learner activity during this period",
    },
];

function Analytics() {
    const [period, setPeriod] = useState("Last 6 Months");
    const [courseFilter, setCourseFilter] = useState("All Courses");

    const filteredCourses = useMemo(() => {
        if (courseFilter === "All Courses") {
            return coursePerformance;
        }

        return coursePerformance.filter(
            (course) => course.name === courseFilter
        );
    }, [courseFilter]);

    const maxStudents = Math.max(
        ...monthlyData.map((item) => item.students)
    );

    /* ========================================================= */
    /* SCORE COLORS */
    /* ========================================================= */

    const getScoreText = (score) => {
        if (score >= 85) {
            return "text-teal-600 dark:text-teal-400";
        }

        if (score >= 70) {
            return "text-blue-600 dark:text-blue-400";
        }

        return "text-slate-500 dark:text-slate-400";
    };

    const getProgressColor = (value) => {
        if (value >= 85) {
            return "bg-teal-500";
        }

        if (value >= 70) {
            return "bg-blue-500";
        }

        return "bg-slate-400";
    };

    return (
        <div className="space-y-7">

            {/* ===================================================== */}
            {/* HEADER */}
            {/* ===================================================== */}

            <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-[#0b1727] lg:p-8">

                {/* Background Glow */}

                <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-400/10" />

                <div className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-teal-500/10 blur-3xl dark:bg-teal-400/10" />

                <div className="relative flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">

                    <div>

                        <div className="mb-3 flex items-center gap-3">

                            <span className="h-px w-10 bg-blue-600 dark:bg-blue-400" />

                            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
                                Teacher Workspace
                            </span>

                        </div>

                        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
                            Analytics
                        </h1>

                        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
                            Understand student performance, course engagement,
                            and learning trends across your teaching
                            workspace.
                        </p>

                    </div>

                    <div className="flex flex-wrap gap-3">

                        {/* Period */}

                        <select
                            value={period}
                            onChange={(e) =>
                                setPeriod(e.target.value)
                            }
                            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-[#07111f] dark:text-slate-300 dark:focus:border-blue-500"
                        >
                            <option>Last 6 Months</option>
                            <option>Last 3 Months</option>
                            <option>This Month</option>
                            <option>This Year</option>
                        </select>

                        {/* Export */}

                        <button
                            type="button"
                            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                        >
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                            >
                                <path d="M12 3v12" />
                                <path d="m8 11 4 4 4-4" />
                                <path d="M5 21h14" />
                            </svg>

                            Export Report
                        </button>

                    </div>

                </div>

            </section>


            {/* ===================================================== */}
            {/* MAIN STATS */}
            {/* ===================================================== */}

            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

                {activityData.map((item, index) => (
                    <div
                        key={item.title}
                        className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md dark:border-slate-800 dark:bg-[#0b1727] dark:hover:border-blue-900"
                    >

                        <div className="flex items-start justify-between gap-3">

                            <div>

                                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                                    {item.title}
                                </p>

                                <p className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">
                                    {item.value}
                                </p>

                            </div>

                            <div
                                className={`rounded-xl border p-3 ${index % 2 === 0
                                    ? "border-blue-100 bg-blue-50 text-blue-600 dark:border-blue-900/50 dark:bg-blue-950/40 dark:text-blue-400"
                                    : "border-teal-100 bg-teal-50 text-teal-600 dark:border-teal-900/50 dark:bg-teal-950/40 dark:text-teal-400"
                                    }`}
                            >

                                <svg
                                    width="20"
                                    height="20"
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

                        <div className="mt-4 flex items-center gap-2">

                            <span className="text-xs font-semibold text-teal-600 dark:text-teal-400">
                                {item.change}
                            </span>

                            <span className="text-xs text-slate-400 dark:text-slate-500">
                                vs previous period
                            </span>

                        </div>

                        <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                            {item.description}
                        </p>

                    </div>
                ))}

            </section>


            {/* ===================================================== */}
            {/* CHART + SUMMARY */}
            {/* ===================================================== */}

            <section className="grid grid-cols-1 gap-5 xl:grid-cols-3">

                {/* ================================================= */}
                {/* LEARNING TREND */}
                {/* ================================================= */}

                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#0b1727] xl:col-span-2">

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                        <div>

                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
                                Learning Trend
                            </p>

                            <h2 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                                Student growth & completion
                            </h2>

                            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                Monthly learning activity across your courses.
                            </p>

                        </div>

                        <div className="flex items-center gap-4 text-xs">

                            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">

                                <span className="h-2 w-2 rounded-full bg-blue-500" />

                                Students

                            </div>

                            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">

                                <span className="h-2 w-2 rounded-full bg-teal-500" />

                                Completion

                            </div>

                        </div>

                    </div>


                    {/* Chart */}

                    <div className="mt-8">

                        <div className="flex h-64 items-end gap-3 sm:gap-5">

                            {monthlyData.map((item) => {

                                const studentHeight =
                                    (item.students / maxStudents) * 100;

                                return (
                                    <div
                                        key={item.month}
                                        className="flex h-full flex-1 flex-col justify-end"
                                    >

                                        <div className="mb-2 text-center">

                                            <span className="text-[10px] font-medium text-slate-400 dark:text-slate-500">
                                                {item.students}
                                            </span>

                                        </div>

                                        <div className="relative flex h-[210px] items-end justify-center gap-1.5">

                                            {/* Students */}

                                            <div
                                                className="w-1/2 rounded-t-lg bg-blue-500/70 transition-all hover:bg-blue-500"
                                                style={{
                                                    height: `${studentHeight}%`,
                                                }}
                                                title={`${item.students} students`}
                                            />

                                            {/* Completion */}

                                            <div
                                                className="w-1/2 rounded-t-lg bg-teal-500/70 transition-all hover:bg-teal-500"
                                                style={{
                                                    height: `${item.completion}%`,
                                                }}
                                                title={`${item.completion}% completion`}
                                            />

                                        </div>

                                        <p className="mt-3 text-center text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                                            {item.month}
                                        </p>

                                    </div>
                                );
                            })}

                        </div>

                    </div>

                </div>


                {/* ================================================= */}
                {/* PERFORMANCE SUMMARY */}
                {/* ================================================= */}

                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#0b1727]">

                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
                        Performance Summary
                    </p>

                    <h2 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                        Teaching snapshot
                    </h2>

                    <div className="mt-7 space-y-6">

                        <PerformanceBar
                            label="Overall course completion"
                            value={84}
                            color="teal"
                        />

                        <PerformanceBar
                            label="Assignment completion"
                            value={91}
                            color="blue"
                        />

                        <PerformanceBar
                            label="Average quiz score"
                            value={83}
                            color="blue"
                        />

                        <PerformanceBar
                            label="Student engagement"
                            value={89}
                            color="teal"
                        />

                    </div>


                    {/* Insight */}

                    <div className="mt-7 rounded-xl border border-blue-100 bg-blue-50/70 p-4 dark:border-blue-900/40 dark:bg-blue-950/20">

                        <p className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                            Insight
                        </p>

                        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                            Your strongest area is assignment completion.
                            Consider using the same teaching pattern in
                            courses with lower quiz performance.
                        </p>

                    </div>

                </div>

            </section>


            {/* ===================================================== */}
            {/* COURSE PERFORMANCE */}
            {/* ===================================================== */}

            <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-[#0b1727]">

                <div className="flex flex-col gap-4 border-b border-slate-200 px-5 py-5 dark:border-slate-800 md:flex-row md:items-center md:justify-between">

                    <div>

                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
                            Course Analysis
                        </p>

                        <h2 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                            Course performance
                        </h2>

                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                            Compare performance across your published courses.
                        </p>

                    </div>

                    <select
                        value={courseFilter}
                        onChange={(e) =>
                            setCourseFilter(e.target.value)
                        }
                        className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-[#07111f] dark:text-slate-300 dark:focus:border-blue-500"
                    >

                        <option>
                            All Courses
                        </option>

                        {coursePerformance.map((course) => (
                            <option
                                key={course.id}
                                value={course.name}
                            >
                                {course.name}
                            </option>
                        ))}

                    </select>

                </div>


                {/* ================================================= */}
                {/* DESKTOP TABLE */}
                {/* ================================================= */}

                <div className="hidden overflow-x-auto lg:block">

                    <table className="w-full min-w-[900px]">

                        <thead>

                            <tr className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-[#07111f]">

                                <TableHeading>
                                    Course
                                </TableHeading>

                                <TableHeading>
                                    Students
                                </TableHeading>

                                <TableHeading>
                                    Completion
                                </TableHeading>

                                <TableHeading>
                                    Avg. Score
                                </TableHeading>

                                <TableHeading>
                                    Assignments
                                </TableHeading>

                                <TableHeading>
                                    Quizzes
                                </TableHeading>

                                <TableHeading>
                                    Engagement
                                </TableHeading>

                            </tr>

                        </thead>


                        <tbody>

                            {filteredCourses.map((course) => (

                                <tr
                                    key={course.id}
                                    className="border-b border-slate-100 last:border-b-0 transition hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-900/40"
                                >

                                    <td className="px-5 py-5">

                                        <div>

                                            <p className="font-semibold text-slate-900 dark:text-white">
                                                {course.name}
                                            </p>

                                            <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
                                                Course performance
                                            </p>

                                        </div>

                                    </td>

                                    <td className="px-5 py-5">

                                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                                            {course.students}
                                        </span>

                                    </td>

                                    <td className="px-5 py-5">

                                        <div className="w-32">

                                            <div className="mb-2 flex justify-between">

                                                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                                                    {course.completion}%
                                                </span>

                                            </div>

                                            <div className="h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">

                                                <div
                                                    className={`h-full rounded-full ${getProgressColor(
                                                        course.completion
                                                    )}`}
                                                    style={{
                                                        width: `${course.completion}%`,
                                                    }}
                                                />

                                            </div>

                                        </div>

                                    </td>

                                    <td
                                        className={`px-5 py-5 text-sm font-semibold ${getScoreText(
                                            course.averageScore
                                        )}`}
                                    >
                                        {course.averageScore}%
                                    </td>

                                    <td
                                        className={`px-5 py-5 text-sm font-semibold ${getScoreText(
                                            course.assignments
                                        )}`}
                                    >
                                        {course.assignments}%
                                    </td>

                                    <td
                                        className={`px-5 py-5 text-sm font-semibold ${getScoreText(
                                            course.quizzes
                                        )}`}
                                    >
                                        {course.quizzes}%
                                    </td>

                                    <td
                                        className={`px-5 py-5 text-sm font-semibold ${getScoreText(
                                            course.engagement
                                        )}`}
                                    >
                                        {course.engagement}%
                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>


                {/* ================================================= */}
                {/* MOBILE CARDS */}
                {/* ================================================= */}

                <div className="divide-y divide-slate-100 dark:divide-slate-800 lg:hidden">

                    {filteredCourses.map((course) => (

                        <div
                            key={course.id}
                            className="space-y-5 p-5"
                        >

                            <div className="flex items-start justify-between gap-4">

                                <div>

                                    <h3 className="font-semibold text-slate-900 dark:text-white">
                                        {course.name}
                                    </h3>

                                    <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
                                        {course.students} students
                                    </p>

                                </div>

                                <span className="rounded-lg border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-600 dark:border-blue-900/50 dark:bg-blue-950/40 dark:text-blue-400">
                                    {course.averageScore}% avg.
                                </span>

                            </div>


                            {/* Completion */}

                            <div>

                                <div className="mb-2 flex justify-between">

                                    <span className="text-xs text-slate-500 dark:text-slate-400">
                                        Completion
                                    </span>

                                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                                        {course.completion}%
                                    </span>

                                </div>

                                <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">

                                    <div
                                        className={`h-full rounded-full ${getProgressColor(
                                            course.completion
                                        )}`}
                                        style={{
                                            width: `${course.completion}%`,
                                        }}
                                    />

                                </div>

                            </div>


                            {/* Metrics */}

                            <div className="grid grid-cols-3 gap-3">

                                <MetricCard
                                    label="Assignments"
                                    value={course.assignments}
                                    scoreClass={getScoreText(
                                        course.assignments
                                    )}
                                />

                                <MetricCard
                                    label="Quizzes"
                                    value={course.quizzes}
                                    scoreClass={getScoreText(
                                        course.quizzes
                                    )}
                                />

                                <MetricCard
                                    label="Engagement"
                                    value={course.engagement}
                                    scoreClass={getScoreText(
                                        course.engagement
                                    )}
                                />

                            </div>

                        </div>

                    ))}

                </div>


                {filteredCourses.length === 0 && (

                    <div className="px-6 py-14 text-center">

                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-blue-400">
                            —
                        </div>

                        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
                            No course analytics found.
                        </p>

                    </div>

                )}

            </section>


            {/* ===================================================== */}
            {/* BOTTOM ACTIONS */}
            {/* ===================================================== */}

            <section className="grid grid-cols-1 gap-5 md:grid-cols-3">

                {/* Weak Areas */}

                <ActionCard
                    icon="↗"
                    title="Review weak areas"
                    description="Identify courses and assessments where students need additional support."
                    link="/teacher/quizzes"
                    linkText="Review quizzes"
                    color="blue"
                />

                {/* Students */}

                <ActionCard
                    icon="◉"
                    title="Support students"
                    description="Check students who are falling behind and provide targeted academic support."
                    link="/teacher/students"
                    linkText="View students"
                    color="teal"
                />

                {/* Courses */}

                <ActionCard
                    icon="▥"
                    title="Improve course delivery"
                    description="Use performance trends to improve lessons, quizzes, and assignments."
                    link="/teacher/courses"
                    linkText="Manage courses"
                    color="slate"
                />

            </section>


            {/* ===================================================== */}
            {/* FOOTER NOTE */}
            {/* ===================================================== */}

            <section className="border-t border-slate-200 pt-6 dark:border-slate-800">

                <div className="flex flex-col gap-2 text-xs text-slate-400 dark:text-slate-500 sm:flex-row sm:items-center sm:justify-between">

                    <p>
                        Analytics are currently using frontend sample data.
                    </p>

                    <p className="font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                        Shiyora Teacher Analytics
                    </p>

                </div>

            </section>

        </div>
    );
}


/* ============================================================= */
/* PERFORMANCE BAR */
/* ============================================================= */

function PerformanceBar({
    label,
    value,
    color = "blue",
}) {
    const barColor =
        color === "teal"
            ? "bg-teal-500"
            : "bg-blue-500";

    return (
        <div>

            <div className="flex items-center justify-between">

                <span className="text-sm text-slate-600 dark:text-slate-400">
                    {label}
                </span>

                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {value}%
                </span>

            </div>

            <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">

                <div
                    className={`h-full rounded-full ${barColor}`}
                    style={{
                        width: `${value}%`,
                    }}
                />

            </div>

        </div>
    );
}


/* ============================================================= */
/* TABLE HEADING */
/* ============================================================= */

function TableHeading({ children }) {
    return (
        <th className="px-5 py-4 text-left text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            {children}
        </th>
    );
}


/* ============================================================= */
/* MOBILE METRIC CARD */
/* ============================================================= */

function MetricCard({
    label,
    value,
    scoreClass,
}) {
    return (
        <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 dark:border-slate-800 dark:bg-[#07111f]">

            <p className="text-[9px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                {label}
            </p>

            <p
                className={`mt-1 text-sm font-bold ${scoreClass}`}
            >
                {value}%
            </p>

        </div>
    );
}


/* ============================================================= */
/* ACTION CARD */
/* ============================================================= */

function ActionCard({
    icon,
    title,
    description,
    link,
    linkText,
    color,
}) {
    const styles = {
        blue: {
            icon: "border-blue-100 bg-blue-50 text-blue-600 dark:border-blue-900/50 dark:bg-blue-950/40 dark:text-blue-400",
            link: "text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300",
        },

        teal: {
            icon: "border-teal-100 bg-teal-50 text-teal-600 dark:border-teal-900/50 dark:bg-teal-950/40 dark:text-teal-400",
            link: "text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300",
        },

        slate: {
            icon: "border-slate-200 bg-slate-50 text-slate-600 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300",
            link: "text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white",
        },
    };

    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-[#0b1727]">

            <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl border text-lg font-bold ${styles[color].icon}`}
            >
                {icon}
            </div>

            <h3 className="mt-5 font-semibold text-slate-900 dark:text-white">
                {title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                {description}
            </p>

            <Link
                to={link}
                className={`mt-4 inline-flex text-sm font-semibold transition ${styles[color].link}`}
            >
                {linkText} →
            </Link>

        </div>
    );
}

export default Analytics;