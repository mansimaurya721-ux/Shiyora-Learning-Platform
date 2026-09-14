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
        positive: true,
    },
    {
        title: "Assignment submissions",
        value: "91%",
        change: "+4.8%",
        description: "Students submitting assignments on time",
        positive: true,
    },
    {
        title: "Quiz performance",
        value: "83%",
        change: "+3.4%",
        description: "Average score across published quizzes",
        positive: true,
    },
    {
        title: "Student engagement",
        value: "89%",
        change: "+7.1%",
        description: "Learner activity during this period",
        positive: true,
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

    const getScoreText = (score) => {
        if (score >= 85) return "text-[#9EB7A2]";
        if (score >= 70) return "text-[#F2B84B]";
        return "text-[#E97868]";
    };

    const getProgressColor = (value) => {
        if (value >= 85) return "bg-[#7C9A82]";
        if (value >= 70) return "bg-[#F2B84B]";
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
                        Analytics
                    </h1>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-[#A9AAA1]">
                        Understand student performance, course engagement, and
                        learning trends across your teaching workspace.
                    </p>
                </div>

                <div className="flex flex-wrap gap-3">
                    <select
                        value={period}
                        onChange={(e) => setPeriod(e.target.value)}
                        className="rounded-xl border border-[#F3EEDD]/10 bg-[#1B241E] px-4 py-3 text-sm font-medium text-[#F3EEDD] outline-none transition focus:border-[#F2B84B]/40"
                    >
                        <option>Last 6 Months</option>
                        <option>Last 3 Months</option>
                        <option>This Month</option>
                        <option>This Year</option>
                    </select>

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
                            strokeWidth="1.8"
                        >
                            <path d="M12 3v12" />
                            <path d="m8 11 4 4 4-4" />
                            <path d="M5 21h14" />
                        </svg>
                        Export Report
                    </button>
                </div>
            </section>

            {/* Main Stats */}
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {activityData.map((item) => (
                    <div
                        key={item.title}
                        className="rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-5"
                    >
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <p className="text-xs font-medium uppercase tracking-wider text-[#A9AAA1]">
                                    {item.title}
                                </p>

                                <p className="mt-3 text-3xl font-bold text-[#F3EEDD]">
                                    {item.value}
                                </p>
                            </div>

                            <div className="rounded-xl border border-[#7C9A82]/20 bg-[#7C9A82]/10 p-3 text-[#9EB7A2]">
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
                            <span className="text-xs font-semibold text-[#9EB7A2]">
                                {item.change}
                            </span>

                            <span className="text-xs text-[#777C74]">
                                vs previous period
                            </span>
                        </div>

                        <p className="mt-2 text-xs leading-5 text-[#777C74]">
                            {item.description}
                        </p>
                    </div>
                ))}
            </section>

            {/* Chart + Summary */}
            <section className="grid grid-cols-1 gap-5 xl:grid-cols-3">
                {/* Learning Trend */}
                <div className="rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-6 xl:col-span-2">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#7C9A82]">
                                Learning Trend
                            </p>

                            <h2 className="mt-2 text-xl font-bold text-[#F3EEDD]">
                                Student growth & completion
                            </h2>

                            <p className="mt-1 text-sm text-[#777C74]">
                                Monthly learning activity across your courses.
                            </p>
                        </div>

                        <div className="flex items-center gap-4 text-xs">
                            <div className="flex items-center gap-2 text-[#A9AAA1]">
                                <span className="h-2 w-2 rounded-full bg-[#F2B84B]" />
                                Students
                            </div>

                            <div className="flex items-center gap-2 text-[#A9AAA1]">
                                <span className="h-2 w-2 rounded-full bg-[#7C9A82]" />
                                Completion
                            </div>
                        </div>
                    </div>

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
                                            <span className="font-mono text-[10px] text-[#777C74]">
                                                {item.students}
                                            </span>
                                        </div>

                                        <div className="relative flex h-[210px] items-end justify-center gap-1.5">
                                            <div
                                                className="w-1/2 rounded-t-lg bg-[#F2B84B]/70 transition-all hover:bg-[#F2B84B]"
                                                style={{
                                                    height: `${studentHeight}%`,
                                                }}
                                                title={`${item.students} students`}
                                            />

                                            <div
                                                className="w-1/2 rounded-t-lg bg-[#7C9A82]/70 transition-all hover:bg-[#7C9A82]"
                                                style={{
                                                    height: `${item.completion}%`,
                                                }}
                                                title={`${item.completion}% completion`}
                                            />
                                        </div>

                                        <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-wider text-[#777C74]">
                                            {item.month}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Performance Summary */}
                <div className="rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-6">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#7C9A82]">
                        Performance Summary
                    </p>

                    <h2 className="mt-2 text-xl font-bold text-[#F3EEDD]">
                        Teaching snapshot
                    </h2>

                    <div className="mt-7 space-y-6">
                        <div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-[#A9AAA1]">
                                    Overall course completion
                                </span>

                                <span className="font-mono text-sm font-semibold text-[#F3EEDD]">
                                    84%
                                </span>
                            </div>

                            <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#141C17]">
                                <div
                                    className="h-full rounded-full bg-[#7C9A82]"
                                    style={{ width: "84%" }}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-[#A9AAA1]">
                                    Assignment completion
                                </span>

                                <span className="font-mono text-sm font-semibold text-[#F3EEDD]">
                                    91%
                                </span>
                            </div>

                            <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#141C17]">
                                <div
                                    className="h-full rounded-full bg-[#F2B84B]"
                                    style={{ width: "91%" }}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-[#A9AAA1]">
                                    Average quiz score
                                </span>

                                <span className="font-mono text-sm font-semibold text-[#F3EEDD]">
                                    83%
                                </span>
                            </div>

                            <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#141C17]">
                                <div
                                    className="h-full rounded-full bg-[#F2B84B]"
                                    style={{ width: "83%" }}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-[#A9AAA1]">
                                    Student engagement
                                </span>

                                <span className="font-mono text-sm font-semibold text-[#F3EEDD]">
                                    89%
                                </span>
                            </div>

                            <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#141C17]">
                                <div
                                    className="h-full rounded-full bg-[#7C9A82]"
                                    style={{ width: "89%" }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-7 rounded-xl border border-[#F2B84B]/20 bg-[#F2B84B]/5 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#F2B84B]">
                            Insight
                        </p>

                        <p className="mt-2 text-sm leading-6 text-[#A9AAA1]">
                            Your strongest area is assignment completion.
                            Consider using the same teaching pattern in courses
                            with lower quiz performance.
                        </p>
                    </div>
                </div>
            </section>

            {/* Course Performance */}
            <section className="overflow-hidden rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E]">
                <div className="flex flex-col gap-4 border-b border-[#F3EEDD]/10 px-5 py-5 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#7C9A82]">
                            Course Analysis
                        </p>

                        <h2 className="mt-2 text-xl font-bold text-[#F3EEDD]">
                            Course performance
                        </h2>

                        <p className="mt-1 text-sm text-[#777C74]">
                            Compare performance across your published courses.
                        </p>
                    </div>

                    <select
                        value={courseFilter}
                        onChange={(e) => setCourseFilter(e.target.value)}
                        className="rounded-xl border border-[#F3EEDD]/10 bg-[#141C17] px-4 py-3 text-sm text-[#F3EEDD] outline-none focus:border-[#F2B84B]/40"
                    >
                        <option>All Courses</option>

                        {coursePerformance.map((course) => (
                            <option key={course.id} value={course.name}>
                                {course.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Desktop Table */}
                <div className="hidden overflow-x-auto lg:block">
                    <table className="w-full min-w-[900px]">
                        <thead>
                            <tr className="border-b border-[#F3EEDD]/10 bg-[#141C17]/60">
                                <th className="px-5 py-4 text-left text-[10px] font-semibold uppercase tracking-wider text-[#777C74]">
                                    Course
                                </th>

                                <th className="px-5 py-4 text-left text-[10px] font-semibold uppercase tracking-wider text-[#777C74]">
                                    Students
                                </th>

                                <th className="px-5 py-4 text-left text-[10px] font-semibold uppercase tracking-wider text-[#777C74]">
                                    Completion
                                </th>

                                <th className="px-5 py-4 text-left text-[10px] font-semibold uppercase tracking-wider text-[#777C74]">
                                    Avg. Score
                                </th>

                                <th className="px-5 py-4 text-left text-[10px] font-semibold uppercase tracking-wider text-[#777C74]">
                                    Assignments
                                </th>

                                <th className="px-5 py-4 text-left text-[10px] font-semibold uppercase tracking-wider text-[#777C74]">
                                    Quizzes
                                </th>

                                <th className="px-5 py-4 text-left text-[10px] font-semibold uppercase tracking-wider text-[#777C74]">
                                    Engagement
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {filteredCourses.map((course) => (
                                <tr
                                    key={course.id}
                                    className="border-b border-[#F3EEDD]/10 last:border-b-0 transition hover:bg-[#202B23]"
                                >
                                    <td className="px-5 py-5">
                                        <div>
                                            <p className="font-semibold text-[#F3EEDD]">
                                                {course.name}
                                            </p>

                                            <p className="mt-1 text-xs text-[#777C74]">
                                                Course performance
                                            </p>
                                        </div>
                                    </td>

                                    <td className="px-5 py-5">
                                        <span className="font-mono text-sm text-[#F3EEDD]">
                                            {course.students}
                                        </span>
                                    </td>

                                    <td className="px-5 py-5">
                                        <div className="w-32">
                                            <div className="mb-2 flex justify-between">
                                                <span className="font-mono text-xs text-[#F3EEDD]">
                                                    {course.completion}%
                                                </span>
                                            </div>

                                            <div className="h-1.5 overflow-hidden rounded-full bg-[#141C17]">
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
                                        className={`px-5 py-5 font-mono text-sm font-semibold ${getScoreText(
                                            course.averageScore
                                        )}`}
                                    >
                                        {course.averageScore}%
                                    </td>

                                    <td
                                        className={`px-5 py-5 font-mono text-sm font-semibold ${getScoreText(
                                            course.assignments
                                        )}`}
                                    >
                                        {course.assignments}%
                                    </td>

                                    <td
                                        className={`px-5 py-5 font-mono text-sm font-semibold ${getScoreText(
                                            course.quizzes
                                        )}`}
                                    >
                                        {course.quizzes}%
                                    </td>

                                    <td
                                        className={`px-5 py-5 font-mono text-sm font-semibold ${getScoreText(
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

                {/* Mobile Cards */}
                <div className="divide-y divide-[#F3EEDD]/10 lg:hidden">
                    {filteredCourses.map((course) => (
                        <div key={course.id} className="space-y-5 p-5">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h3 className="font-semibold text-[#F3EEDD]">
                                        {course.name}
                                    </h3>

                                    <p className="mt-1 text-xs text-[#777C74]">
                                        {course.students} students
                                    </p>
                                </div>

                                <span className="rounded-lg border border-[#F2B84B]/20 bg-[#F2B84B]/10 px-3 py-1.5 font-mono text-xs text-[#F2B84B]">
                                    {course.averageScore}% avg.
                                </span>
                            </div>

                            <div>
                                <div className="mb-2 flex justify-between">
                                    <span className="text-xs text-[#777C74]">
                                        Completion
                                    </span>

                                    <span className="font-mono text-xs text-[#F3EEDD]">
                                        {course.completion}%
                                    </span>
                                </div>

                                <div className="h-2 overflow-hidden rounded-full bg-[#141C17]">
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

                            <div className="grid grid-cols-3 gap-3">
                                <div className="rounded-lg bg-[#141C17] p-3">
                                    <p className="text-[10px] uppercase tracking-wider text-[#777C74]">
                                        Assignments
                                    </p>

                                    <p
                                        className={`mt-1 font-mono text-sm font-semibold ${getScoreText(
                                            course.assignments
                                        )}`}
                                    >
                                        {course.assignments}%
                                    </p>
                                </div>

                                <div className="rounded-lg bg-[#141C17] p-3">
                                    <p className="text-[10px] uppercase tracking-wider text-[#777C74]">
                                        Quizzes
                                    </p>

                                    <p
                                        className={`mt-1 font-mono text-sm font-semibold ${getScoreText(
                                            course.quizzes
                                        )}`}
                                    >
                                        {course.quizzes}%
                                    </p>
                                </div>

                                <div className="rounded-lg bg-[#141C17] p-3">
                                    <p className="text-[10px] uppercase tracking-wider text-[#777C74]">
                                        Engagement
                                    </p>

                                    <p
                                        className={`mt-1 font-mono text-sm font-semibold ${getScoreText(
                                            course.engagement
                                        )}`}
                                    >
                                        {course.engagement}%
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredCourses.length === 0 && (
                    <div className="px-6 py-14 text-center">
                        <p className="text-sm text-[#777C74]">
                            No course analytics found.
                        </p>
                    </div>
                )}
            </section>

            {/* Bottom Actions */}
            <section className="grid grid-cols-1 gap-5 md:grid-cols-3">
                <div className="rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#F2B84B]/20 bg-[#F2B84B]/10 text-[#F2B84B]">
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

                    <h3 className="mt-5 font-semibold text-[#F3EEDD]">
                        Review weak areas
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#777C74]">
                        Identify courses and assessments where students need
                        additional support.
                    </p>

                    <Link
                        to="/teacher/quizzes"
                        className="mt-4 inline-flex text-sm font-semibold text-[#F2B84B] hover:text-[#f5c766]"
                    >
                        Review quizzes →
                    </Link>
                </div>

                <div className="rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#7C9A82]/20 bg-[#7C9A82]/10 text-[#9EB7A2]">
                        <svg
                            width="20"
                            height="20"
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

                    <h3 className="mt-5 font-semibold text-[#F3EEDD]">
                        Support students
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#777C74]">
                        Check students who are falling behind and provide
                        targeted academic support.
                    </p>

                    <Link
                        to="/teacher/students"
                        className="mt-4 inline-flex text-sm font-semibold text-[#9EB7A2] hover:text-[#B5C8B8]"
                    >
                        View students →
                    </Link>
                </div>

                <div className="rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D6402C]/20 bg-[#D6402C]/10 text-[#E97868]">
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
                            <path d="M8 16v-3" />
                            <path d="M12 16V9" />
                            <path d="M16 16v-6" />
                        </svg>
                    </div>

                    <h3 className="mt-5 font-semibold text-[#F3EEDD]">
                        Improve course delivery
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#777C74]">
                        Use performance trends to improve lessons, quizzes, and
                        assignments.
                    </p>

                    <Link
                        to="/teacher/courses"
                        className="mt-4 inline-flex text-sm font-semibold text-[#E97868] hover:text-[#f18a7d]"
                    >
                        Manage courses →
                    </Link>
                </div>
            </section>

            {/* Footer Note */}
            <section className="border-t border-[#F3EEDD]/10 pt-6">
                <div className="flex flex-col gap-2 text-xs text-[#777C74] sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        Analytics are currently using frontend sample data.
                    </p>

                    <p className="font-mono uppercase tracking-wider text-[#7C9A82]">
                        Shiyora Teacher Analytics
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Analytics;