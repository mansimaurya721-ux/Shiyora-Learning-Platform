import React from "react";
import {
    TrendingUp,
    BookOpen,
    CheckCircle2,
    Clock3,
    Target,
    Award,
    BarChart3,
    CalendarDays,
    ArrowUpRight,
    Flame,
} from "lucide-react";

const Progress = () => {
    const courseProgress = [
        {
            id: 1,
            title: "Full Stack Web Development",
            instructor: "Rahul Sharma",
            progress: 72,
            completed: 18,
            total: 25,
            hours: "12h 40m",
            status: "In Progress",
        },
        {
            id: 2,
            title: "Java Programming",
            instructor: "Priya Singh",
            progress: 48,
            completed: 12,
            total: 25,
            hours: "8h 20m",
            status: "In Progress",
        },
        {
            id: 3,
            title: "Database Management System",
            instructor: "Amit Verma",
            progress: 35,
            completed: 7,
            total: 20,
            hours: "6h 15m",
            status: "In Progress",
        },
        {
            id: 4,
            title: "HTML & CSS Fundamentals",
            instructor: "Neha Gupta",
            progress: 100,
            completed: 20,
            total: 20,
            hours: "5h 30m",
            status: "Completed",
        },
        {
            id: 5,
            title: "JavaScript Essentials",
            instructor: "Rohit Kumar",
            progress: 100,
            completed: 22,
            total: 22,
            hours: "7h 10m",
            status: "Completed",
        },
    ];

    const weeklyActivity = [
        { day: "Mon", hours: 1.2 },
        { day: "Tue", hours: 0.8 },
        { day: "Wed", hours: 1.5 },
        { day: "Thu", hours: 0.5 },
        { day: "Fri", hours: 1.1 },
        { day: "Sat", hours: 2.0 },
        { day: "Sun", hours: 0.9 },
    ];

    const maxHours = Math.max(
        ...weeklyActivity.map((item) => item.hours)
    );

    return (
        <div className="space-y-6">

            {/* =====================================================
                HEADER
            ====================================================== */}
            <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727] sm:p-8">

                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-400/10" />

                <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                    <div>
                        <div className="mb-3 flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-500/10">
                                <BarChart3
                                    size={16}
                                    className="text-blue-600 dark:text-blue-400"
                                />
                            </div>

                            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                                Learning Analytics
                            </span>
                        </div>

                        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                            My Progress
                        </h1>

                        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400 sm:text-base">
                            Track your learning performance, course completion,
                            study activity and learning goals.
                        </p>
                    </div>

                    <div className="flex w-fit items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-[#1e334a] dark:bg-[#102337]">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 dark:bg-teal-500/10">
                            <TrendingUp
                                size={20}
                                className="text-teal-600 dark:text-teal-400"
                            />
                        </div>

                        <div>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                Overall Progress
                            </p>

                            <p className="text-lg font-bold text-slate-900 dark:text-white">
                                61%
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                OVERALL PROGRESS
            ====================================================== */}
            <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727] sm:p-8">

                <div className="flex flex-col gap-8 lg:flex-row lg:items-center">

                    {/* Progress Circle */}
                    <div className="flex shrink-0 justify-center lg:justify-start">
                        <div className="relative flex h-44 w-44 items-center justify-center">

                            <svg
                                className="absolute inset-0 h-full w-full -rotate-90"
                                viewBox="0 0 100 100"
                            >
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="42"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="9"
                                    className="text-slate-100 dark:text-slate-800"
                                />

                                <circle
                                    cx="50"
                                    cy="50"
                                    r="42"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="9"
                                    strokeLinecap="round"
                                    strokeDasharray="263.9"
                                    strokeDashoffset="103"
                                    className="text-blue-600 dark:text-blue-400"
                                />
                            </svg>

                            <div className="relative text-center">
                                <p className="text-4xl font-bold text-slate-900 dark:text-white">
                                    61%
                                </p>

                                <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                                    Overall
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Overview */}
                    <div className="flex-1">

                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-500/10">
                                <TrendingUp
                                    size={20}
                                    className="text-blue-600 dark:text-blue-400"
                                />
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                                    Overall Learning Progress
                                </h2>

                                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                    Your current learning performance
                                </p>
                            </div>
                        </div>

                        <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
                            You're making steady progress across your enrolled
                            courses. Keep learning consistently to reach your
                            goals.
                        </p>

                        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">

                            <ProgressStat
                                value="06"
                                label="Courses"
                            />

                            <ProgressStat
                                value="61%"
                                label="Completed"
                            />

                            <ProgressStat
                                value="80"
                                label="Lessons"
                            />

                            <ProgressStat
                                value="42h"
                                label="Learning Time"
                            />

                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                STAT CARDS
            ====================================================== */}
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

                <StatCard
                    title="Lessons Completed"
                    value="80"
                    description="Out of 112 lessons"
                    icon={CheckCircle2}
                    iconStyle="text-emerald-600 dark:text-emerald-400"
                    iconBg="bg-emerald-50 dark:bg-emerald-500/10"
                />

                <StatCard
                    title="Learning Hours"
                    value="42h"
                    description="Total study time"
                    icon={Clock3}
                    iconStyle="text-blue-600 dark:text-blue-400"
                    iconBg="bg-blue-50 dark:bg-blue-500/10"
                />

                <StatCard
                    title="Current Streak"
                    value="7"
                    description="Days in a row"
                    icon={Flame}
                    iconStyle="text-orange-600 dark:text-orange-400"
                    iconBg="bg-orange-50 dark:bg-orange-500/10"
                />

                <StatCard
                    title="Certificates"
                    value="02"
                    description="Certificates earned"
                    icon={Award}
                    iconStyle="text-teal-600 dark:text-teal-400"
                    iconBg="bg-teal-50 dark:bg-teal-500/10"
                />

            </section>

            {/* =====================================================
                MAIN GRID
            ====================================================== */}
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">

                {/* =================================================
                    COURSE PROGRESS
                ================================================== */}
                <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727] xl:col-span-2">

                    <div className="flex items-center justify-between border-b border-slate-200 p-5 dark:border-[#1e334a] sm:p-6">

                        <div>
                            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                                Course Progress
                            </h2>

                            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                Progress across your enrolled courses
                            </p>
                        </div>

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-500/10">
                            <BarChart3
                                size={20}
                                className="text-blue-600 dark:text-blue-400"
                            />
                        </div>
                    </div>

                    <div className="divide-y divide-slate-100 dark:divide-[#1e334a]">

                        {courseProgress.map((course) => (

                            <div
                                key={course.id}
                                className="p-5 transition hover:bg-slate-50 dark:hover:bg-[#102337] sm:p-6"
                            >

                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                                    <div className="flex min-w-0 items-center gap-4">

                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-500/10">
                                            <BookOpen
                                                size={19}
                                                className="text-blue-600 dark:text-blue-400"
                                            />
                                        </div>

                                        <div className="min-w-0">
                                            <h3 className="truncate text-sm font-semibold text-slate-900 dark:text-white">
                                                {course.title}
                                            </h3>

                                            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                                {course.instructor}
                                            </p>
                                        </div>
                                    </div>

                                    <span
                                        className={`
                                            w-fit rounded-full border px-3 py-1.5
                                            text-xs font-semibold
                                            ${course.progress === 100
                                                ? "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400"
                                                : "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400"
                                            }
                                        `}
                                    >
                                        {course.status}
                                    </span>
                                </div>

                                {/* Progress */}
                                <div className="mt-5">

                                    <div className="mb-2 flex items-center justify-between">
                                        <span className="text-xs text-slate-500 dark:text-slate-400">
                                            {course.completed} / {course.total} lessons
                                        </span>

                                        <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
                                            {course.progress}%
                                        </span>
                                    </div>

                                    <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                                        <div
                                            className={`
                                                h-full rounded-full transition-all
                                                ${course.progress === 100
                                                    ? "bg-gradient-to-r from-emerald-500 to-teal-500"
                                                    : "bg-gradient-to-r from-blue-600 to-teal-500"
                                                }
                                            `}
                                            style={{
                                                width: `${course.progress}%`,
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="mt-4 flex items-center justify-between">

                                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                                        <Clock3 size={13} />
                                        {course.hours} learning time
                                    </div>

                                    <ArrowUpRight
                                        size={15}
                                        className="text-slate-400 dark:text-slate-500"
                                    />
                                </div>

                            </div>
                        ))}

                    </div>
                </section>

                {/* =================================================
                    WEEKLY ACTIVITY
                ================================================== */}
                <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727] sm:p-6">

                    <div className="flex items-center justify-between">

                        <div>
                            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                                Weekly Activity
                            </h2>

                            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                Hours learned this week
                            </p>
                        </div>

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 dark:bg-teal-500/10">
                            <CalendarDays
                                size={19}
                                className="text-teal-600 dark:text-teal-400"
                            />
                        </div>
                    </div>

                    {/* Chart */}
                    <div className="mt-8 flex h-52 items-end justify-between gap-2">

                        {weeklyActivity.map((item) => {

                            const height =
                                (item.hours / maxHours) * 100;

                            return (
                                <div
                                    key={item.day}
                                    className="flex h-full flex-1 flex-col items-center justify-end gap-2"
                                >

                                    <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400">
                                        {item.hours}h
                                    </span>

                                    <div className="flex h-36 w-full items-end justify-center">
                                        <div
                                            className="
                                                w-full max-w-7
                                                rounded-t-lg
                                                bg-gradient-to-t
                                                from-blue-600
                                                to-teal-400
                                                transition-all
                                                hover:opacity-80
                                            "
                                            style={{
                                                height: `${height}%`,
                                            }}
                                        />
                                    </div>

                                    <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400">
                                        {item.day}
                                    </span>

                                </div>
                            );
                        })}

                    </div>

                    {/* Weekly Total */}
                    <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-[#1e334a] dark:bg-[#102337]">

                        <div className="flex items-center justify-between">

                            <div>
                                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                                    This Week
                                </p>

                                <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
                                    8.0h
                                </p>
                            </div>

                            <div className="text-right">
                                <p className="text-xs text-slate-500 dark:text-slate-400">
                                    Goal
                                </p>

                                <p className="mt-1 text-sm font-semibold text-teal-600 dark:text-teal-400">
                                    10h
                                </p>
                            </div>

                        </div>

                        <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                            <div
                                className="h-full rounded-full bg-gradient-to-r from-blue-600 to-teal-500"
                                style={{ width: "80%" }}
                            />
                        </div>

                        <div className="mt-2 flex justify-between text-[11px] text-slate-500 dark:text-slate-400">
                            <span>80% completed</span>
                            <span>2h remaining</span>
                        </div>

                    </div>
                </section>
            </div>

            {/* =====================================================
                LEARNING GOALS
            ====================================================== */}
            <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727] sm:p-6">

                <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-500/10">
                        <Target
                            size={21}
                            className="text-blue-600 dark:text-blue-400"
                        />
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                            Learning Goals
                        </h2>

                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                            Your current learning targets
                        </p>
                    </div>

                </div>

                <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">

                    <GoalCard
                        title="Complete Courses"
                        current="2"
                        target="4"
                        percentage={50}
                    />

                    <GoalCard
                        title="Learning Hours"
                        current="42"
                        target="50"
                        percentage={84}
                    />

                    <GoalCard
                        title="Complete Lessons"
                        current="80"
                        target="100"
                        percentage={80}
                    />

                </div>
            </section>

            {/* =====================================================
                MOTIVATION
            ====================================================== */}
            <section className="overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 via-white to-teal-50 p-6 dark:border-blue-500/10 dark:from-[#0b1b30] dark:via-[#0b1727] dark:to-[#0b2425]">

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-500/10">
                        <TrendingUp
                            size={23}
                            className="text-blue-600 dark:text-blue-400"
                        />
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                            Keep Going!
                        </h2>

                        <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                            You're making great progress. Stay consistent
                            with your learning routine and you'll reach your
                            goals faster.
                        </p>
                    </div>

                </div>
            </section>
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
    iconStyle,
    iconBg,
}) => {
    return (
        <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md dark:border-[#1e334a] dark:bg-[#0b1727] dark:hover:border-blue-500/20">

            <div className="flex items-start justify-between">

                <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        {title}
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
                        {value}
                    </h2>

                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-500">
                        {description}
                    </p>
                </div>

                <div className={`rounded-xl p-3 ${iconBg}`}>
                    <Icon
                        size={21}
                        className={iconStyle}
                    />
                </div>

            </div>
        </div>
    );
};

/* =========================================================
   PROGRESS STAT
========================================================= */

const ProgressStat = ({ value, label }) => {
    return (
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-[#1e334a] dark:bg-[#102337]">

            <p className="text-lg font-bold text-slate-900 dark:text-white">
                {value}
            </p>

            <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                {label}
            </p>

        </div>
    );
};

/* =========================================================
   GOAL CARD
========================================================= */

const GoalCard = ({
    title,
    current,
    target,
    percentage,
}) => {
    return (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-[#1e334a] dark:bg-[#102337]">

            <div className="flex items-center justify-between">

                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {title}
                </p>

                <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                    {percentage}%
                </span>

            </div>

            <div className="mt-3 flex items-center justify-between">

                <p className="text-xs text-slate-500 dark:text-slate-400">
                    {current} / {target}
                </p>

                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Target
                </p>

            </div>

            <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">

                <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-600 to-teal-500"
                    style={{
                        width: `${percentage}%`,
                    }}
                />

            </div>
        </div>
    );
};

export default Progress;