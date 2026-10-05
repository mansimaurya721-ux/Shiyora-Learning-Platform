import React, { useMemo, useState } from "react";
import {
    BookOpen,
    Search,
    PlayCircle,
    CheckCircle2,
    Clock3,
    MoreVertical,
    BarChart3,
} from "lucide-react";

const MyCourses = () => {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");
    const [openMenu, setOpenMenu] = useState(null);

    const courses = [
        {
            id: 1,
            title: "Full Stack Web Development",
            instructor: "Rahul Sharma",
            category: "Development",
            progress: 72,
            completedLessons: 18,
            totalLessons: 25,
            duration: "12h 40m",
            status: "In Progress",
        },
        {
            id: 2,
            title: "Java Programming",
            instructor: "Priya Singh",
            category: "Programming",
            progress: 48,
            completedLessons: 12,
            totalLessons: 25,
            duration: "8h 20m",
            status: "In Progress",
        },
        {
            id: 3,
            title: "Database Management System",
            instructor: "Amit Verma",
            category: "Database",
            progress: 35,
            completedLessons: 7,
            totalLessons: 20,
            duration: "6h 15m",
            status: "In Progress",
        },
        {
            id: 4,
            title: "HTML & CSS Fundamentals",
            instructor: "Neha Gupta",
            category: "Web Development",
            progress: 100,
            completedLessons: 20,
            totalLessons: 20,
            duration: "5h 30m",
            status: "Completed",
        },
        {
            id: 5,
            title: "JavaScript Essentials",
            instructor: "Rohit Kumar",
            category: "Web Development",
            progress: 100,
            completedLessons: 22,
            totalLessons: 22,
            duration: "7h 10m",
            status: "Completed",
        },
        {
            id: 6,
            title: "React.js Development",
            instructor: "Ankit Singh",
            category: "Development",
            progress: 15,
            completedLessons: 3,
            totalLessons: 20,
            duration: "9h 45m",
            status: "In Progress",
        },
    ];

    // =====================================================
    // FILTER COURSES
    // =====================================================

    const filteredCourses = useMemo(() => {
        const searchValue = search.toLowerCase().trim();

        return courses.filter((course) => {
            const matchesSearch =
                course.title
                    .toLowerCase()
                    .includes(searchValue) ||
                course.instructor
                    .toLowerCase()
                    .includes(searchValue) ||
                course.category
                    .toLowerCase()
                    .includes(searchValue);

            const matchesFilter =
                filter === "All" ||
                course.status === filter;

            return matchesSearch && matchesFilter;
        });
    }, [search, filter]);

    // =====================================================
    // STATS
    // =====================================================

    const totalCourses = courses.length;

    const completedCourses = courses.filter(
        (course) => course.status === "Completed"
    ).length;

    const inProgressCourses = courses.filter(
        (course) => course.status === "In Progress"
    ).length;

    const averageProgress = Math.round(
        courses.reduce(
            (total, course) => total + course.progress,
            0
        ) / courses.length
    );

    // =====================================================
    // CLEAR FILTERS
    // =====================================================

    const clearFilters = () => {
        setSearch("");
        setFilter("All");
    };

    // =====================================================
    // COURSE ACTIONS
    // =====================================================

    const handleContinue = (course) => {
        alert(
            `Continue Learning for "${course.title}" will be connected to the lesson page later.`
        );
    };

    const handleReview = (course) => {
        alert(
            `Review Course for "${course.title}" will be connected later.`
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
            onClick={() => setOpenMenu(null)}
        >
            <div className="mx-auto max-w-7xl">

                {/* =================================================
                    HEADER
                ================================================= */}

                <section
                    className="
                        mb-7 flex
                        flex-col gap-5
                        lg:flex-row
                        lg:items-end
                        lg:justify-between
                    "
                    onClick={(e) => e.stopPropagation()}
                >
                    <div>
                        <p
                            className="
                                mb-2 text-xs
                                font-semibold
                                uppercase
                                tracking-wider
                                text-blue-600
                                dark:text-teal-400
                            "
                        >
                            Learning Center
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
                            My Courses
                        </h1>

                        <p
                            className="
                                mt-2 text-sm
                                text-slate-500
                                sm:text-base
                                dark:text-slate-400
                            "
                        >
                            Manage your enrolled courses and
                            continue learning.
                        </p>
                    </div>

                    {/* Search */}

                    <div className="relative w-full lg:w-80">
                        <Search
                            size={18}
                            className="
                                absolute left-3
                                top-1/2
                                -translate-y-1/2
                                text-slate-400
                                dark:text-slate-500
                            "
                        />

                        <input
                            type="text"
                            placeholder="Search your courses..."
                            value={search}
                            onChange={(e) =>
                                setSearch(e.target.value)
                            }
                            className="
                                w-full
                                rounded-xl
                                border
                                border-slate-200
                                bg-white
                                py-3 pl-10 pr-4
                                text-sm
                                text-slate-800
                                outline-none
                                placeholder:text-slate-400
                                focus:border-blue-500
                                focus:ring-2
                                focus:ring-blue-500/10
                                dark:border-[#1e334a]
                                dark:bg-[#0b1727]
                                dark:text-slate-200
                                dark:placeholder:text-slate-500
                                dark:focus:border-teal-400
                            "
                        />
                    </div>
                </section>

                {/* =================================================
                    STATS
                ================================================= */}

                <section
                    className="
                        mb-7 grid
                        grid-cols-1
                        gap-4
                        sm:grid-cols-2
                        xl:grid-cols-4
                    "
                >
                    <StatCard
                        title="Total Courses"
                        value={totalCourses}
                        description="Enrolled courses"
                        icon={BookOpen}
                        iconStyle="blue"
                    />

                    <StatCard
                        title="In Progress"
                        value={inProgressCourses}
                        description="Currently learning"
                        icon={Clock3}
                        iconStyle="teal"
                    />

                    <StatCard
                        title="Completed"
                        value={completedCourses}
                        description="Courses finished"
                        icon={CheckCircle2}
                        iconStyle="green"
                    />

                    <StatCard
                        title="Average Progress"
                        value={`${averageProgress}%`}
                        description="Overall progress"
                        icon={BarChart3}
                        iconStyle="purple"
                    />
                </section>

                {/* =================================================
                    FILTERS
                ================================================= */}

                <section
                    className="
                        mb-6 flex
                        flex-wrap
                        items-center
                        justify-between
                        gap-3
                    "
                >
                    <div className="flex flex-wrap gap-2">
                        {[
                            "All",
                            "In Progress",
                            "Completed",
                        ].map((item) => (
                            <button
                                key={item}
                                onClick={() =>
                                    setFilter(item)
                                }
                                className={`
                                    rounded-xl
                                    px-4 py-2.5
                                    text-xs
                                    font-semibold
                                    transition-all
                                    ${filter === item
                                        ? "bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-sm shadow-blue-500/20"
                                        : "border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 dark:border-[#1e334a] dark:bg-[#0b1727] dark:text-slate-300 dark:hover:border-teal-500/40 dark:hover:bg-teal-500/10 dark:hover:text-teal-400"
                                    }
                                `}
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    {(search || filter !== "All") && (
                        <button
                            onClick={clearFilters}
                            className="
                                text-xs
                                font-semibold
                                text-blue-600
                                hover:text-blue-700
                                dark:text-teal-400
                            "
                        >
                            Clear filters
                        </button>
                    )}
                </section>

                {/* =================================================
                    RESULT INFO
                ================================================= */}

                <div className="mb-4">
                    <p
                        className="
                            text-sm
                            font-medium
                            text-slate-500
                            dark:text-slate-400
                        "
                    >
                        Showing{" "}
                        <span
                            className="
                                font-bold
                                text-slate-800
                                dark:text-slate-200
                            "
                        >
                            {filteredCourses.length}
                        </span>{" "}
                        courses
                    </p>
                </div>

                {/* =================================================
                    COURSE GRID
                ================================================= */}

                {filteredCourses.length > 0 ? (
                    <section
                        className="
                            grid grid-cols-1
                            gap-5
                            md:grid-cols-2
                            xl:grid-cols-3
                        "
                    >
                        {filteredCourses.map((course) => (
                            <CourseCard
                                key={course.id}
                                course={course}
                                openMenu={openMenu}
                                setOpenMenu={setOpenMenu}
                                onContinue={handleContinue}
                                onReview={handleReview}
                            />
                        ))}
                    </section>
                ) : (
                    <EmptyState
                        onClear={clearFilters}
                    />
                )}
            </div>
        </div>
    );
};

/* =========================================================
   COURSE CARD
========================================================= */

const CourseCard = ({
    course,
    openMenu,
    setOpenMenu,
    onContinue,
    onReview,
}) => {
    const isCompleted =
        course.status === "Completed";

    return (
        <div
            className="
                group relative overflow-visible
                rounded-2xl
                border
                border-slate-200
                bg-white
                shadow-sm
                transition-all
                duration-200
                hover:-translate-y-1
                hover:shadow-lg
                dark:border-[#1e334a]
                dark:bg-[#0b1727]
            "
        >
            {/* =================================================
                COURSE HEADER
            ================================================= */}

            <div
                className="
                    relative h-36
                    overflow-hidden
                    rounded-t-2xl
                    bg-gradient-to-br
                    from-blue-50
                    via-slate-50
                    to-teal-50
                    dark:from-blue-950/40
                    dark:via-[#0b1727]
                    dark:to-teal-950/30
                "
            >
                {/* Decorative circles */}

                <div
                    className="
                        absolute
                        -right-8 -top-10
                        h-28 w-28
                        rounded-full
                        bg-blue-500/10
                    "
                />

                <div
                    className="
                        absolute
                        -bottom-10 -left-8
                        h-28 w-28
                        rounded-full
                        bg-teal-500/10
                    "
                />

                {/* Icon */}

                <div
                    className="
                        absolute inset-0
                        flex items-center
                        justify-center
                    "
                >
                    <div
                        className="
                            flex h-16 w-16
                            items-center
                            justify-center
                            rounded-2xl
                            bg-gradient-to-br
                            from-blue-600
                            to-teal-500
                            text-white
                            shadow-lg
                            shadow-blue-500/20
                        "
                    >
                        <BookOpen size={29} />
                    </div>
                </div>

                {/* STATUS */}

                <div className="absolute left-4 top-4">
                    <span
                        className={`
                            rounded-full
                            px-3 py-1
                            text-[10px]
                            font-bold
                            ${isCompleted
                                ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400"
                                : "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400"
                            }
                        `}
                    >
                        {course.status}
                    </span>
                </div>

                {/* MENU */}

                <div className="absolute right-3 top-3">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();

                            setOpenMenu(
                                openMenu === course.id
                                    ? null
                                    : course.id
                            );
                        }}
                        className="
                            rounded-xl
                            bg-white/80
                            p-2
                            text-slate-500
                            backdrop-blur
                            transition
                            hover:bg-white
                            hover:text-slate-900
                            dark:bg-[#0b1727]/80
                            dark:text-slate-400
                            dark:hover:bg-[#102337]
                            dark:hover:text-white
                        "
                    >
                        <MoreVertical size={17} />
                    </button>

                    {openMenu === course.id && (
                        <div
                            className="
                                absolute
                                right-0 top-11
                                z-30
                                w-40
                                overflow-hidden
                                rounded-xl
                                border
                                border-slate-200
                                bg-white
                                py-1
                                shadow-xl
                                dark:border-[#1e334a]
                                dark:bg-[#0b1727]
                            "
                            onClick={(e) =>
                                e.stopPropagation()
                            }
                        >
                            <button
                                onClick={() =>
                                    onContinue(course)
                                }
                                className="
                                    w-full
                                    px-4 py-2.5
                                    text-left
                                    text-xs
                                    font-medium
                                    text-slate-600
                                    hover:bg-slate-50
                                    hover:text-blue-600
                                    dark:text-slate-300
                                    dark:hover:bg-[#102337]
                                    dark:hover:text-teal-400
                                "
                            >
                                View Course
                            </button>

                            <button
                                onClick={() =>
                                    alert(
                                        `Course details for "${course.title}" will be connected later.`
                                    )
                                }
                                className="
                                    w-full
                                    px-4 py-2.5
                                    text-left
                                    text-xs
                                    font-medium
                                    text-slate-600
                                    hover:bg-slate-50
                                    hover:text-blue-600
                                    dark:text-slate-300
                                    dark:hover:bg-[#102337]
                                    dark:hover:text-teal-400
                                "
                            >
                                Course Details
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* =================================================
                COURSE CONTENT
            ================================================= */}

            <div className="p-5">

                {/* CATEGORY */}

                <p
                    className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-wider
                        text-blue-600
                        dark:text-teal-400
                    "
                >
                    {course.category}
                </p>

                {/* TITLE */}

                <h2
                    className="
                        mt-2
                        min-h-[48px]
                        text-lg
                        font-bold
                        leading-6
                        text-slate-900
                        dark:text-white
                    "
                >
                    {course.title}
                </h2>

                {/* INSTRUCTOR */}

                <p
                    className="
                        mt-2 text-xs
                        text-slate-500
                        dark:text-slate-400
                    "
                >
                    Instructor: {course.instructor}
                </p>

                {/* =================================================
                    PROGRESS
                ================================================= */}

                <div className="mt-5">
                    <div
                        className="
                            mb-2 flex
                            items-center
                            justify-between
                        "
                    >
                        <span
                            className="
                                text-[11px]
                                font-medium
                                text-slate-500
                                dark:text-slate-400
                            "
                        >
                            Course Progress
                        </span>

                        <span
                            className="
                                text-xs
                                font-bold
                                text-slate-800
                                dark:text-slate-200
                            "
                        >
                            {course.progress}%
                        </span>
                    </div>

                    <div
                        className="
                            h-2
                            overflow-hidden
                            rounded-full
                            bg-slate-100
                            dark:bg-[#07111f]
                        "
                    >
                        <div
                            className={`
                                h-full
                                rounded-full
                                transition-all
                                ${isCompleted
                                    ? "bg-emerald-500"
                                    : "bg-gradient-to-r from-blue-600 to-teal-500"
                                }
                            `}
                            style={{
                                width: `${course.progress}%`,
                            }}
                        />
                    </div>
                </div>

                {/* =================================================
                    COURSE META
                ================================================= */}

                <div
                    className="
                        mt-4 flex
                        items-center
                        justify-between
                        border-t
                        border-slate-100
                        pt-4
                        dark:border-[#1e334a]
                    "
                >
                    <div
                        className="
                            flex items-center
                            gap-1.5
                            text-[11px]
                            text-slate-500
                            dark:text-slate-400
                        "
                    >
                        <BookOpen size={14} />

                        {course.completedLessons}/
                        {course.totalLessons} lessons
                    </div>

                    <div
                        className="
                            flex items-center
                            gap-1.5
                            text-[11px]
                            text-slate-500
                            dark:text-slate-400
                        "
                    >
                        <Clock3 size={14} />

                        {course.duration}
                    </div>
                </div>

                {/* =================================================
                    ACTION
                ================================================= */}

                <button
                    onClick={() =>
                        isCompleted
                            ? onReview(course)
                            : onContinue(course)
                    }
                    className={`
                        mt-5 flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        px-4 py-3
                        text-sm
                        font-bold
                        transition-all
                        ${isCompleted
                            ? "border border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400 dark:hover:bg-emerald-500/15"
                            : "bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-sm shadow-blue-500/20 hover:-translate-y-0.5 hover:shadow-md"
                        }
                    `}
                >
                    {isCompleted ? (
                        <>
                            <CheckCircle2 size={17} />
                            Review Course
                        </>
                    ) : (
                        <>
                            <PlayCircle size={17} />
                            Continue Learning
                        </>
                    )}
                </button>
            </div>
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
        purple: `
            bg-violet-50
            text-violet-600
            dark:bg-violet-500/10
            dark:text-violet-400
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
                transition
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
                            mt-1 text-[11px]
                            text-slate-400
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
   EMPTY STATE
========================================================= */

const EmptyState = ({ onClear }) => {
    return (
        <section
            className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                px-6 py-16
                text-center
                shadow-sm
                dark:border-[#1e334a]
                dark:bg-[#0b1727]
            "
        >
            <div
                className="
                    mx-auto flex
                    h-16 w-16
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
                    mt-5 text-xl
                    font-bold
                    text-slate-900
                    dark:text-white
                "
            >
                No courses found
            </h2>

            <p
                className="
                    mx-auto mt-2
                    max-w-md text-sm
                    text-slate-500
                    dark:text-slate-400
                "
            >
                We couldn't find any course matching
                your search or selected filter.
            </p>

            <button
                onClick={onClear}
                className="
                    mt-5
                    rounded-xl
                    bg-gradient-to-r
                    from-blue-600
                    to-teal-500
                    px-5 py-3
                    text-sm
                    font-bold
                    text-white
                    shadow-sm
                    shadow-blue-500/20
                "
            >
                Clear Filters
            </button>
        </section>
    );
};

export default MyCourses;