import {
    BookOpen,
    CheckCircle2,
    Clock3,
    PlayCircle,
    Trophy,
    ClipboardCheck,
    ArrowRight,
    CalendarDays,
    TrendingUp,
    Award,
    Bell,
    MoreHorizontal,
    Flame,
    Target,
} from "lucide-react";

// =====================================================
// STUDENT DASHBOARD
// =====================================================

const Dashboard = () => {
    // -------------------------------------------------
    // TEMPORARY STUDENT DATA
    // Replace with API data later
    // -------------------------------------------------

    const student = {
        name: "Student",
        enrolledCourses: 6,
        inProgress: 3,
        completedCourses: 2,
        learningHours: 28,
        overallProgress: 68,
    };

    const courses = [
        {
            id: 1,
            title: "Full Stack Web Development",
            category: "Web Development",
            instructor: "Shiyora Instructor",
            progress: 72,
            lesson: "React Components",
            totalLessons: 42,
            completedLessons: 30,
        },
        {
            id: 2,
            title: "Java Programming",
            category: "Programming",
            instructor: "Shiyora Instructor",
            progress: 54,
            lesson: "Object Oriented Programming",
            totalLessons: 36,
            completedLessons: 19,
        },
        {
            id: 3,
            title: "Database Management",
            category: "Database",
            instructor: "Shiyora Instructor",
            progress: 38,
            lesson: "PostgreSQL Basics",
            totalLessons: 28,
            completedLessons: 11,
        },
    ];

    const assignments = [
        {
            id: 1,
            title: "React Dashboard Assignment",
            course: "Full Stack Web Development",
            due: "Sep 18, 2026",
            status: "Pending",
        },
        {
            id: 2,
            title: "Java OOP Practice",
            course: "Java Programming",
            due: "Sep 20, 2026",
            status: "Pending",
        },
        {
            id: 3,
            title: "SQL Query Assignment",
            course: "Database Management",
            due: "Sep 22, 2026",
            status: "Submitted",
        },
    ];

    const quizzes = [
        {
            id: 1,
            title: "Java OOP Quiz",
            course: "Java Programming",
            score: "86%",
            date: "Sep 14, 2026",
        },
        {
            id: 2,
            title: "React Basics Quiz",
            course: "Full Stack Web Development",
            score: "92%",
            date: "Sep 12, 2026",
        },
        {
            id: 3,
            title: "SQL Fundamentals",
            course: "Database Management",
            score: "78%",
            date: "Sep 10, 2026",
        },
    ];

    const activities = [
        {
            id: 1,
            icon: <PlayCircle size={16} />,
            title: "Completed a lesson",
            description: "React State & Props",
            time: "2 hours ago",
            type: "blue",
        },
        {
            id: 2,
            icon: <ClipboardCheck size={16} />,
            title: "Submitted assignment",
            description: "SQL Query Assignment",
            time: "Yesterday",
            type: "teal",
        },
        {
            id: 3,
            icon: <Trophy size={16} />,
            title: "Earned a badge",
            description: "Java Beginner",
            time: "2 days ago",
            type: "amber",
        },
        {
            id: 4,
            icon: <CheckCircle2 size={16} />,
            title: "Completed a quiz",
            description: "React Basics Quiz",
            time: "3 days ago",
            type: "emerald",
        },
    ];

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
        >
            {/* =================================================
                WELCOME HEADER
            ================================================= */}

            <div
                className="
                    mb-7 flex flex-col
                    gap-5
                    xl:flex-row
                    xl:items-center
                    xl:justify-between
                "
            >
                {/* WELCOME TEXT */}

                <div>
                    <div
                        className="
                            mb-2 flex items-center
                            gap-2 text-xs
                            font-semibold
                            text-blue-600
                            dark:text-teal-400
                        "
                    >
                        <span
                            className="
                                h-2 w-2 rounded-full
                                bg-teal-500
                            "
                        />

                        STUDENT PORTAL
                    </div>

                    <h1
                        className="
                            text-2xl font-extrabold
                            tracking-tight
                            text-slate-950
                            sm:text-3xl
                            dark:text-white
                        "
                    >
                        Welcome back,{" "}
                        <span
                            className="
                                bg-gradient-to-r
                                from-blue-600
                                to-teal-500
                                bg-clip-text
                                text-transparent
                            "
                        >
                            {student.name}
                        </span>
                        ! 👋
                    </h1>

                    <p
                        className="
                            mt-2 text-sm
                            text-slate-500
                            dark:text-slate-400
                        "
                    >
                        Keep learning, stay consistent,
                        and reach your goals.
                    </p>
                </div>

                {/* RIGHT SIDE */}

                <div
                    className="
                        flex flex-wrap
                        items-center gap-3
                    "
                >
                    {/* =========================================
                        TAKE A BREAK BUTTON
                    ========================================= */}

                    <a
                        href="https://street-races.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            inline-flex
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            bg-gradient-to-r
                            from-blue-600
                            to-teal-500
                            px-5 py-3
                            text-sm
                            font-bold
                            text-white
                            shadow-md
                            shadow-blue-500/20
                            transition-all
                            duration-200
                            hover:-translate-y-0.5
                            hover:shadow-lg
                            hover:shadow-teal-500/20
                            dark:from-blue-500
                            dark:to-teal-400
                        "
                    >
                        <span className="text-base">
                            🎮
                        </span>

                        Take a Break
                    </a>

                    {/* =========================================
                        DAILY STREAK
                    ========================================= */}

                    <div
                        className="
                            flex items-center
                            gap-3
                            rounded-2xl
                            border
                            border-blue-100
                            bg-white
                            px-4 py-3
                            shadow-sm
                            dark:border-[#1e334a]
                            dark:bg-[#0b1727]
                        "
                    >
                        <div
                            className="
                                flex h-10 w-10
                                items-center
                                justify-center
                                rounded-xl
                                bg-orange-50
                                text-orange-500
                                dark:bg-orange-500/10
                                dark:text-orange-400
                            "
                        >
                            <Flame size={20} />
                        </div>

                        <div>
                            <p
                                className="
                                    text-xs font-bold
                                    text-slate-900
                                    dark:text-white
                                "
                            >
                                5 Day Streak
                            </p>

                            <p
                                className="
                                    mt-0.5 text-[10px]
                                    text-slate-500
                                    dark:text-slate-400
                                "
                            >
                                Keep it going!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* =================================================
                STAT CARDS
            ================================================= */}

            <div
                className="
                    mb-6 grid grid-cols-1
                    gap-4
                    sm:grid-cols-2
                    xl:grid-cols-4
                "
            >
                <StatCard
                    title="Enrolled Courses"
                    value={student.enrolledCourses}
                    description="Courses you're learning"
                    icon={<BookOpen size={21} />}
                    type="blue"
                />

                <StatCard
                    title="In Progress"
                    value={student.inProgress}
                    description="Courses currently active"
                    icon={<PlayCircle size={21} />}
                    type="teal"
                />

                <StatCard
                    title="Completed"
                    value={student.completedCourses}
                    description="Courses successfully completed"
                    icon={<CheckCircle2 size={21} />}
                    type="emerald"
                />

                <StatCard
                    title="Learning Hours"
                    value={`${student.learningHours}h`}
                    description="Total learning time"
                    icon={<Clock3 size={21} />}
                    type="indigo"
                />
            </div>

            {/* =================================================
                MAIN GRID
            ================================================= */}

            <div
                className="
                    mb-6 grid grid-cols-1
                    gap-6
                    xl:grid-cols-[minmax(0,2fr)_minmax(300px,1fr)]
                "
            >
                {/* CONTINUE LEARNING */}

                <section
                    className="
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        shadow-sm
                        dark:border-[#1e334a]
                        dark:bg-[#0b1727]
                    "
                >
                    <div
                        className="
                            flex items-center
                            justify-between
                            border-b
                            border-slate-100
                            px-5 py-4
                            sm:px-6
                            dark:border-[#1e334a]
                        "
                    >
                        <div>
                            <h2
                                className="
                                    text-lg font-bold
                                    text-slate-900
                                    dark:text-white
                                "
                            >
                                Continue Learning
                            </h2>

                            <p
                                className="
                                    mt-1 text-xs
                                    text-slate-500
                                    dark:text-slate-400
                                "
                            >
                                Pick up where you left off
                            </p>
                        </div>

                        <button
                            type="button"
                            className="
                                hidden
                                items-center
                                gap-1
                                text-xs
                                font-bold
                                text-blue-600
                                sm:flex
                                dark:text-teal-400
                            "
                        >
                            View all
                            <ArrowRight size={14} />
                        </button>
                    </div>

                    <div
                        className="
                            divide-y
                            divide-slate-100
                            dark:divide-[#1e334a]
                        "
                    >
                        {courses.map((course) => (
                            <CourseProgress
                                key={course.id}
                                course={course}
                            />
                        ))}
                    </div>
                </section>

                {/* OVERALL PROGRESS */}

                <section
                    className="
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        p-5
                        shadow-sm
                        sm:p-6
                        dark:border-[#1e334a]
                        dark:bg-[#0b1727]
                    "
                >
                    <div
                        className="
                            flex items-center
                            justify-between
                        "
                    >
                        <div>
                            <h2
                                className="
                                    text-lg font-bold
                                    text-slate-900
                                    dark:text-white
                                "
                            >
                                Learning Progress
                            </h2>

                            <p
                                className="
                                    mt-1 text-xs
                                    text-slate-500
                                    dark:text-slate-400
                                "
                            >
                                Your overall performance
                            </p>
                        </div>

                        <TrendingUp
                            size={20}
                            className="
                                text-teal-600
                                dark:text-teal-400
                            "
                        />
                    </div>

                    {/* PROGRESS CIRCLE */}

                    <div
                        className="
                            mx-auto my-7
                            flex h-40 w-40
                            items-center
                            justify-center
                            rounded-full
                            border-[14px]
                            border-blue-100
                            dark:border-blue-500/10
                        "
                    >
                        <div className="text-center">
                            <p
                                className="
                                    text-3xl font-extrabold
                                    text-slate-900
                                    dark:text-white
                                "
                            >
                                {student.overallProgress}%
                            </p>

                            <p
                                className="
                                    text-[10px]
                                    font-medium
                                    text-slate-500
                                    dark:text-slate-400
                                "
                            >
                                Overall
                            </p>
                        </div>
                    </div>

                    {/* PROGRESS BAR */}

                    <div>
                        <div
                            className="
                                mb-2 flex
                                justify-between
                            "
                        >
                            <span
                                className="
                                    text-xs font-semibold
                                    text-slate-600
                                    dark:text-slate-300
                                "
                            >
                                Course completion
                            </span>

                            <span
                                className="
                                    text-xs font-bold
                                    text-blue-600
                                    dark:text-teal-400
                                "
                            >
                                {student.overallProgress}%
                            </span>
                        </div>

                        <div
                            className="
                                h-2 overflow-hidden
                                rounded-full
                                bg-slate-100
                                dark:bg-[#102337]
                            "
                        >
                            <div
                                className="
                                    h-full rounded-full
                                    bg-gradient-to-r
                                    from-blue-600
                                    to-teal-500
                                "
                                style={{
                                    width: `${student.overallProgress}%`,
                                }}
                            />
                        </div>
                    </div>

                    {/* GOAL */}

                    <div
                        className="
                            mt-5 flex items-center
                            gap-3
                            rounded-xl
                            bg-slate-50
                            p-3
                            dark:bg-[#102337]
                        "
                    >
                        <div
                            className="
                                flex h-9 w-9
                                items-center
                                justify-center
                                rounded-lg
                                bg-teal-50
                                text-teal-600
                                dark:bg-teal-500/10
                                dark:text-teal-400
                            "
                        >
                            <Target size={17} />
                        </div>

                        <div>
                            <p
                                className="
                                    text-xs font-bold
                                    text-slate-900
                                    dark:text-white
                                "
                            >
                                Keep your momentum
                            </p>

                            <p
                                className="
                                    mt-0.5 text-[10px]
                                    text-slate-500
                                    dark:text-slate-400
                                "
                            >
                                You're doing great!
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            {/* =================================================
                ASSIGNMENTS + QUIZZES
            ================================================= */}

            <div
                className="
                    mb-6 grid grid-cols-1
                    gap-6
                    xl:grid-cols-2
                "
            >
                {/* ASSIGNMENTS */}

                <section
                    className="
                        overflow-hidden
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        shadow-sm
                        dark:border-[#1e334a]
                        dark:bg-[#0b1727]
                    "
                >
                    <SectionHeader
                        title="Upcoming Assignments"
                        subtitle="Stay on top of your deadlines"
                        icon={<ClipboardCheck size={18} />}
                    />

                    <div
                        className="
                            divide-y
                            divide-slate-100
                            dark:divide-[#1e334a]
                        "
                    >
                        {assignments.map(
                            (assignment) => (
                                <AssignmentItem
                                    key={assignment.id}
                                    assignment={assignment}
                                />
                            )
                        )}
                    </div>
                </section>

                {/* QUIZZES */}

                <section
                    className="
                        overflow-hidden
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        shadow-sm
                        dark:border-[#1e334a]
                        dark:bg-[#0b1727]
                    "
                >
                    <SectionHeader
                        title="Recent Quizzes"
                        subtitle="Review your latest results"
                        icon={<Award size={18} />}
                    />

                    <div
                        className="
                            divide-y
                            divide-slate-100
                            dark:divide-[#1e334a]
                        "
                    >
                        {quizzes.map((quiz) => (
                            <QuizItem
                                key={quiz.id}
                                quiz={quiz}
                            />
                        ))}
                    </div>
                </section>
            </div>

            {/* =================================================
                RECENT ACTIVITY
            ================================================= */}

            <section
                className="
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    shadow-sm
                    dark:border-[#1e334a]
                    dark:bg-[#0b1727]
                "
            >
                <div
                    className="
                        flex items-center
                        justify-between
                        border-b
                        border-slate-100
                        px-5 py-4
                        sm:px-6
                        dark:border-[#1e334a]
                    "
                >
                    <div>
                        <h2
                            className="
                                text-lg font-bold
                                text-slate-900
                                dark:text-white
                            "
                        >
                            Recent Activity
                        </h2>

                        <p
                            className="
                                mt-1 text-xs
                                text-slate-500
                                dark:text-slate-400
                            "
                        >
                            Your latest learning activities
                        </p>
                    </div>

                    <button
                        type="button"
                        className="
                            rounded-lg
                            p-2
                            text-slate-400
                            transition
                            hover:bg-slate-100
                            hover:text-slate-700
                            dark:hover:bg-[#102337]
                            dark:hover:text-slate-200
                        "
                    >
                        <MoreHorizontal size={18} />
                    </button>
                </div>

                <div
                    className="
                        grid grid-cols-1
                        divide-y
                        divide-slate-100
                        sm:grid-cols-2
                        sm:divide-x
                        sm:divide-y-0
                        lg:grid-cols-4
                        dark:divide-[#1e334a]
                    "
                >
                    {activities.map((activity) => (
                        <ActivityItem
                            key={activity.id}
                            activity={activity}
                        />
                    ))}
                </div>
            </section>

            {/* =================================================
                FOOTER INFO
            ================================================= */}

            <div
                className="
                    mt-6 flex items-center
                    justify-center gap-2
                    text-center text-[11px]
                    text-slate-400
                    dark:text-slate-500
                "
            >
                <Bell size={13} />

                You're all caught up with your
                learning activities.
            </div>
        </div>
    );
};

// =====================================================
// STAT CARD
// =====================================================

const StatCard = ({
    title,
    value,
    description,
    icon,
    type,
}) => {
    const styles = {
        blue: `
            bg-blue-50 text-blue-600
            dark:bg-blue-500/10
            dark:text-blue-400
        `,
        teal: `
            bg-teal-50 text-teal-600
            dark:bg-teal-500/10
            dark:text-teal-400
        `,
        emerald: `
            bg-emerald-50 text-emerald-600
            dark:bg-emerald-500/10
            dark:text-emerald-400
        `,
        indigo: `
            bg-indigo-50 text-indigo-600
            dark:bg-indigo-500/10
            dark:text-indigo-400
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
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:shadow-md
                dark:border-[#1e334a]
                dark:bg-[#0b1727]
            "
        >
            <div
                className="
                    flex items-start
                    justify-between gap-3
                "
            >
                <div>
                    <p
                        className="
                            text-xs font-semibold
                            text-slate-500
                            dark:text-slate-400
                        "
                    >
                        {title}
                    </p>

                    <p
                        className="
                            mt-2 text-2xl
                            font-extrabold
                            text-slate-950
                            dark:text-white
                        "
                    >
                        {value}
                    </p>
                </div>

                <div
                    className={`
                        flex h-11 w-11
                        items-center
                        justify-center
                        rounded-xl
                        ${styles[type]}
                    `}
                >
                    {icon}
                </div>
            </div>

            <p
                className="
                    mt-4 text-[11px]
                    text-slate-400
                    dark:text-slate-500
                "
            >
                {description}
            </p>
        </div>
    );
};

// =====================================================
// COURSE PROGRESS
// =====================================================

const CourseProgress = ({ course }) => {
    return (
        <div className="p-5 sm:p-6">
            <div className="flex gap-4">
                <div
                    className="
                        hidden h-14 w-14
                        shrink-0 items-center
                        justify-center
                        rounded-xl
                        bg-gradient-to-br
                        from-blue-600
                        to-teal-500
                        text-white
                        shadow-sm
                        sm:flex
                    "
                >
                    <BookOpen size={22} />
                </div>

                <div className="min-w-0 flex-1">
                    <div
                        className="
                            flex flex-col gap-2
                            sm:flex-row
                            sm:items-start
                            sm:justify-between
                        "
                    >
                        <div>
                            <span
                                className="
                                    text-[10px]
                                    font-bold
                                    uppercase
                                    tracking-wide
                                    text-blue-600
                                    dark:text-teal-400
                                "
                            >
                                {course.category}
                            </span>

                            <h3
                                className="
                                    mt-1 text-sm font-bold
                                    text-slate-900
                                    dark:text-white
                                "
                            >
                                {course.title}
                            </h3>

                            <p
                                className="
                                    mt-1 text-[11px]
                                    text-slate-500
                                    dark:text-slate-400
                                "
                            >
                                Next: {course.lesson}
                            </p>
                        </div>

                        <span
                            className="
                                text-sm font-extrabold
                                text-blue-600
                                dark:text-teal-400
                            "
                        >
                            {course.progress}%
                        </span>
                    </div>

                    <div
                        className="
                            mt-3 h-2
                            overflow-hidden
                            rounded-full
                            bg-slate-100
                            dark:bg-[#102337]
                        "
                    >
                        <div
                            className="
                                h-full rounded-full
                                bg-gradient-to-r
                                from-blue-600
                                to-teal-500
                            "
                            style={{
                                width: `${course.progress}%`,
                            }}
                        />
                    </div>

                    <div
                        className="
                            mt-2 flex items-center
                            justify-between
                        "
                    >
                        <span
                            className="
                                text-[10px]
                                text-slate-400
                            "
                        >
                            {course.completedLessons} of{" "}
                            {course.totalLessons} lessons
                        </span>

                        <button
                            type="button"
                            className="
                                flex items-center
                                gap-1 text-[11px]
                                font-bold
                                text-blue-600
                                hover:text-blue-700
                                dark:text-teal-400
                            "
                        >
                            Continue
                            <ArrowRight size={13} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// =====================================================
// SECTION HEADER
// =====================================================

const SectionHeader = ({
    title,
    subtitle,
    icon,
}) => {
    return (
        <div
            className="
                flex items-center gap-3
                border-b
                border-slate-100
                px-5 py-4
                dark:border-[#1e334a]
            "
        >
            <div
                className="
                    flex h-9 w-9
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-50
                    text-blue-600
                    dark:bg-blue-500/10
                    dark:text-blue-400
                "
            >
                {icon}
            </div>

            <div>
                <h2
                    className="
                        text-sm font-bold
                        text-slate-900
                        dark:text-white
                    "
                >
                    {title}
                </h2>

                <p
                    className="
                        mt-0.5 text-[10px]
                        text-slate-500
                        dark:text-slate-400
                    "
                >
                    {subtitle}
                </p>
            </div>
        </div>
    );
};

// =====================================================
// ASSIGNMENT ITEM
// =====================================================

const AssignmentItem = ({ assignment }) => {
    const submitted =
        assignment.status === "Submitted";

    return (
        <div
            className="
                flex items-center gap-3
                px-5 py-4
                transition
                hover:bg-slate-50
                sm:px-6
                dark:hover:bg-[#102337]
            "
        >
            <div
                className="
                    flex h-10 w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-indigo-50
                    text-indigo-600
                    dark:bg-indigo-500/10
                    dark:text-indigo-400
                "
            >
                <ClipboardCheck size={18} />
            </div>

            <div className="min-w-0 flex-1">
                <p
                    className="
                        truncate text-xs font-bold
                        text-slate-900
                        dark:text-white
                    "
                >
                    {assignment.title}
                </p>

                <p
                    className="
                        mt-1 truncate text-[10px]
                        text-slate-500
                        dark:text-slate-400
                    "
                >
                    {assignment.course}
                </p>
            </div>

            <div className="text-right">
                <span
                    className={`
                        inline-flex
                        rounded-full
                        px-2 py-1
                        text-[9px]
                        font-bold
                        ${submitted
                            ? `
                                    bg-emerald-50
                                    text-emerald-700
                                    dark:bg-emerald-500/10
                                    dark:text-emerald-400
                                `
                            : `
                                    bg-amber-50
                                    text-amber-700
                                    dark:bg-amber-500/10
                                    dark:text-amber-400
                                `
                        }
                    `}
                >
                    {assignment.status}
                </span>

                <p
                    className="
                        mt-1 flex items-center
                        justify-end gap-1
                        text-[9px]
                        text-slate-400
                    "
                >
                    <CalendarDays size={10} />
                    {assignment.due}
                </p>
            </div>
        </div>
    );
};

// =====================================================
// QUIZ ITEM
// =====================================================

const QuizItem = ({ quiz }) => {
    return (
        <div
            className="
                flex items-center gap-3
                px-5 py-4
                transition
                hover:bg-slate-50
                sm:px-6
                dark:hover:bg-[#102337]
            "
        >
            <div
                className="
                    flex h-10 w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-teal-50
                    text-teal-600
                    dark:bg-teal-500/10
                    dark:text-teal-400
                "
            >
                <Trophy size={18} />
            </div>

            <div className="min-w-0 flex-1">
                <p
                    className="
                        truncate text-xs font-bold
                        text-slate-900
                        dark:text-white
                    "
                >
                    {quiz.title}
                </p>

                <p
                    className="
                        mt-1 truncate text-[10px]
                        text-slate-500
                        dark:text-slate-400
                    "
                >
                    {quiz.course}
                </p>
            </div>

            <div className="text-right">
                <p
                    className="
                        text-sm font-extrabold
                        text-teal-600
                        dark:text-teal-400
                    "
                >
                    {quiz.score}
                </p>

                <p
                    className="
                        mt-1 text-[9px]
                        text-slate-400
                    "
                >
                    {quiz.date}
                </p>
            </div>
        </div>
    );
};

// =====================================================
// ACTIVITY ITEM
// =====================================================

const ActivityItem = ({ activity }) => {
    const styles = {
        blue: `
            bg-blue-50 text-blue-600
            dark:bg-blue-500/10
            dark:text-blue-400
        `,
        teal: `
            bg-teal-50 text-teal-600
            dark:bg-teal-500/10
            dark:text-teal-400
        `,
        amber: `
            bg-amber-50 text-amber-600
            dark:bg-amber-500/10
            dark:text-amber-400
        `,
        emerald: `
            bg-emerald-50 text-emerald-600
            dark:bg-emerald-500/10
            dark:text-emerald-400
        `,
    };

    return (
        <div className="p-5 sm:p-6">
            <div
                className={`
                    mb-3 flex h-9 w-9
                    items-center
                    justify-center
                    rounded-xl
                    ${styles[activity.type]}
                `}
            >
                {activity.icon}
            </div>

            <p
                className="
                    text-xs font-bold
                    text-slate-900
                    dark:text-white
                "
            >
                {activity.title}
            </p>

            <p
                className="
                    mt-1 text-[10px]
                    text-slate-500
                    dark:text-slate-400
                "
            >
                {activity.description}
            </p>

            <p
                className="
                    mt-2 text-[9px]
                    text-slate-400
                "
            >
                {activity.time}
            </p>
        </div>
    );
};

export default Dashboard;