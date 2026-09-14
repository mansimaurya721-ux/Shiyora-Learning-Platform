import { Link } from "react-router-dom";

import {
    Building2,
    GraduationCap,
    BookOpen,
    BarChart3,
    ShieldCheck,
    Users,
    Video,
    ClipboardCheck,
    FileText,
    ArrowRight,
    CheckCircle2,
    Sparkles,
} from "lucide-react";

/* =========================================================
   FEATURE DATA
========================================================= */

const features = [
    {
        icon: Building2,
        number: "01",
        title: "Organization Management",
        description:
            "Manage your complete learning organization from one centralized platform.",
        points: [
            "Manage teachers and students",
            "Organize learning activities",
            "Centralized organization dashboard",
        ],
    },
    {
        icon: BookOpen,
        number: "02",
        title: "Complete Course Management",
        description:
            "Create and organize structured courses with everything your learners need.",
        points: [
            "Create and manage courses",
            "Add lessons and learning materials",
            "Organize course content easily",
        ],
    },
    {
        icon: GraduationCap,
        number: "03",
        title: "Student Learning",
        description:
            "Give students a focused learning environment where they can learn at their own pace.",
        points: [
            "Enroll in courses",
            "Access learning materials",
            "Track personal progress",
        ],
    },
    {
        icon: Users,
        number: "04",
        title: "Teacher Management",
        description:
            "Give teachers the tools they need to create and manage effective learning experiences.",
        points: [
            "Create courses and lessons",
            "Upload study materials",
            "Create quizzes and assessments",
        ],
    },
    {
        icon: BarChart3,
        number: "05",
        title: "Progress & Performance",
        description:
            "Understand learning progress with clear and simple performance tracking.",
        points: [
            "Monitor course completion",
            "Track quiz performance",
            "View student progress",
        ],
    },
    {
        icon: ShieldCheck,
        number: "06",
        title: "Role-Based Access",
        description:
            "Keep your platform organized by giving every user access according to their role.",
        points: [
            "Student-specific access",
            "Teacher-specific access",
            "Administrative controls",
        ],
    },
];

/* =========================================================
   LEARNING TOOLS
========================================================= */

const learningTools = [
    {
        icon: Video,
        title: "Video Lectures",
        text: "Provide learners with structured video-based lessons.",
    },
    {
        icon: FileText,
        title: "Study Materials",
        text: "Keep notes and learning resources organized in one place.",
    },
    {
        icon: ClipboardCheck,
        title: "Quizzes & Assessments",
        text: "Create assessments to evaluate learner understanding.",
    },
];

/* =========================================================
   FEATURE PAGE
========================================================= */

function Feature() {
    return (
        <main className="min-h-screen overflow-hidden bg-[var(--shiyora-bg)] text-[var(--shiyora-text)]">

            {/* =====================================================
                BACKGROUND
            ====================================================== */}

            <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

                {/* Blue glow */}

                <div
                    className="
                        absolute
                        -left-40
                        -top-40
                        h-[420px]
                        w-[420px]
                        rounded-full
                        bg-blue-500/10
                        blur-[130px]
                    "
                />

                {/* Teal glow */}

                <div
                    className="
                        absolute
                        -right-40
                        top-[25%]
                        h-[420px]
                        w-[420px]
                        rounded-full
                        bg-teal-400/10
                        blur-[140px]
                    "
                />

                {/* Bottom blue glow */}

                <div
                    className="
                        absolute
                        bottom-[-220px]
                        left-[35%]
                        h-[420px]
                        w-[420px]
                        rounded-full
                        bg-blue-500/5
                        blur-[130px]
                    "
                />

                {/* Subtle grid */}

                <div
                    className="absolute inset-0 opacity-[0.025] dark:opacity-[0.035]"
                    style={{
                        backgroundImage: `
                            linear-gradient(
                                var(--shiyora-border) 1px,
                                transparent 1px
                            ),
                            linear-gradient(
                                90deg,
                                var(--shiyora-border) 1px,
                                transparent 1px
                            )
                        `,
                        backgroundSize: "55px 55px",
                    }}
                />

            </div>

            {/* =====================================================
                HERO
            ====================================================== */}

            <section className="relative z-10 px-5 pb-16 pt-24 sm:px-6 md:pb-20 md:pt-28">

                <div className="mx-auto max-w-5xl text-center">

                    {/* Badge */}

                    <div
                        className="
                            mx-auto
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-blue-200
                            bg-blue-50
                            px-4
                            py-2
                            text-[11px]
                            font-semibold
                            uppercase
                            tracking-[0.16em]
                            text-blue-600
                            dark:border-blue-400/20
                            dark:bg-blue-400/10
                            dark:text-blue-300
                        "
                    >
                        <Sparkles className="h-3.5 w-3.5" />

                        Shiyora Features
                    </div>

                    {/* Heading */}

                    <h1
                        className="
                            mt-6
                            text-4xl
                            font-extrabold
                            leading-[1.05]
                            tracking-tight
                            text-[var(--shiyora-heading)]
                            sm:text-5xl
                            md:text-6xl
                            lg:text-7xl
                        "
                    >
                        Everything you need
                        <br />

                        <span
                            className="
                                bg-gradient-to-r
                                from-blue-600
                                via-cyan-500
                                to-teal-500
                                bg-clip-text
                                text-transparent
                                dark:from-blue-400
                                dark:via-cyan-300
                                dark:to-teal-300
                            "
                        >
                            to learn better.
                        </span>
                    </h1>

                    {/* Description */}

                    <p
                        className="
                            mx-auto
                            mt-6
                            max-w-2xl
                            text-sm
                            leading-7
                            text-[var(--shiyora-muted)]
                            sm:text-base
                            md:text-lg
                        "
                    >
                        Shiyora brings organizations, teachers, and
                        students together with powerful tools for
                        managing courses, learning resources,
                        assessments, and progress.
                    </p>

                    {/* Trust points */}

                    <div
                        className="
                            mt-7
                            flex
                            flex-wrap
                            justify-center
                            gap-x-6
                            gap-y-3
                            text-xs
                            text-[var(--shiyora-muted)]
                        "
                    >

                        <span className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-teal-500 dark:text-teal-300" />
                            Structured learning
                        </span>

                        <span className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-teal-500 dark:text-teal-300" />
                            Role-based access
                        </span>

                        <span className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-teal-500 dark:text-teal-300" />
                            Progress tracking
                        </span>

                    </div>

                </div>

            </section>

            {/* =====================================================
                FEATURE GRID
            ====================================================== */}

            <section className="relative z-10 px-5 pb-20 sm:px-6">

                <div className="mx-auto max-w-7xl">

                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

                        {features.map((feature) => {
                            const Icon = feature.icon;

                            return (
                                <div
                                    key={feature.number}
                                    className="
                                        group
                                        relative
                                        overflow-hidden
                                        rounded-2xl
                                        border
                                        border-[var(--shiyora-border)]
                                        bg-[var(--shiyora-surface)]
                                        p-6
                                        shadow-sm
                                        transition-all
                                        duration-300
                                        hover:-translate-y-1
                                        hover:border-blue-300
                                        hover:shadow-xl
                                        hover:shadow-blue-500/10
                                        dark:bg-[var(--shiyora-surface)]
                                        dark:hover:border-blue-400/30
                                    "
                                >

                                    {/* Hover glow */}

                                    <div
                                        className="
                                            pointer-events-none
                                            absolute
                                            -right-16
                                            -top-16
                                            h-36
                                            w-36
                                            rounded-full
                                            bg-blue-500/10
                                            opacity-0
                                            blur-3xl
                                            transition-opacity
                                            duration-500
                                            group-hover:opacity-100
                                        "
                                    />

                                    {/* Card header */}

                                    <div className="relative flex items-center justify-between">

                                        <span
                                            className="
                                                text-xs
                                                font-bold
                                                tracking-wider
                                                text-blue-500
                                                dark:text-blue-400
                                            "
                                        >
                                            {feature.number}
                                        </span>

                                        <div
                                            className="
                                                flex
                                                h-11
                                                w-11
                                                items-center
                                                justify-center
                                                rounded-xl
                                                border
                                                border-blue-100
                                                bg-blue-50
                                                text-blue-600
                                                transition-all
                                                duration-300
                                                group-hover:scale-105
                                                group-hover:border-blue-200
                                                group-hover:bg-blue-100
                                                dark:border-blue-400/20
                                                dark:bg-blue-400/10
                                                dark:text-blue-300
                                                dark:group-hover:border-blue-400/30
                                                dark:group-hover:bg-blue-400/15
                                            "
                                        >
                                            <Icon className="h-5 w-5" />
                                        </div>

                                    </div>

                                    {/* Title */}

                                    <h2
                                        className="
                                            relative
                                            mt-6
                                            text-xl
                                            font-bold
                                            text-[var(--shiyora-heading)]
                                        "
                                    >
                                        {feature.title}
                                    </h2>

                                    {/* Description */}

                                    <p
                                        className="
                                            relative
                                            mt-3
                                            text-sm
                                            leading-6
                                            text-[var(--shiyora-muted)]
                                        "
                                    >
                                        {feature.description}
                                    </p>

                                    {/* Points */}

                                    <div className="relative mt-6 space-y-3">

                                        {feature.points.map(
                                            (point) => (
                                                <div
                                                    key={point}
                                                    className="
                                                        flex
                                                        items-start
                                                        gap-2.5
                                                        text-xs
                                                        text-[var(--shiyora-text)]
                                                    "
                                                >
                                                    <CheckCircle2
                                                        className="
                                                            mt-0.5
                                                            h-4
                                                            w-4
                                                            shrink-0
                                                            text-teal-500
                                                            dark:text-teal-300
                                                        "
                                                    />

                                                    <span>
                                                        {point}
                                                    </span>
                                                </div>
                                            )
                                        )}

                                    </div>

                                    {/* Bottom hover line */}

                                    <div
                                        className="
                                            absolute
                                            bottom-0
                                            left-0
                                            h-[2px]
                                            w-0
                                            bg-gradient-to-r
                                            from-blue-500
                                            to-teal-400
                                            transition-all
                                            duration-500
                                            group-hover:w-full
                                        "
                                    />

                                </div>
                            );
                        })}

                    </div>

                </div>

            </section>

            {/* =====================================================
                LEARNING TOOLS
            ====================================================== */}

            <section
                className="
                    relative
                    z-10
                    border-y
                    border-[var(--shiyora-border)]
                    bg-[var(--shiyora-surface-soft)]
                    px-5
                    py-20
                    sm:px-6
                "
            >

                <div className="mx-auto max-w-6xl">

                    {/* Section heading */}

                    <div className="max-w-2xl">

                        <p
                            className="
                                text-xs
                                font-bold
                                uppercase
                                tracking-[0.18em]
                                text-blue-600
                                dark:text-blue-400
                            "
                        >
                            Learning Tools
                        </p>

                        <h2
                            className="
                                mt-3
                                text-3xl
                                font-extrabold
                                tracking-tight
                                text-[var(--shiyora-heading)]
                                md:text-4xl
                            "
                        >
                            Built around the way{" "}

                            <span
                                className="
                                    bg-gradient-to-r
                                    from-blue-600
                                    to-teal-500
                                    bg-clip-text
                                    text-transparent
                                    dark:from-blue-400
                                    dark:to-teal-300
                                "
                            >
                                students learn.
                            </span>
                        </h2>

                        <p
                            className="
                                mt-4
                                max-w-xl
                                text-sm
                                leading-7
                                text-[var(--shiyora-muted)]
                                sm:text-base
                            "
                        >
                            From lessons and videos to assessments
                            and resources, Shiyora keeps the learning
                            experience structured, simple, and
                            accessible.
                        </p>

                    </div>

                    {/* Tools */}

                    <div className="mt-10 grid gap-5 md:grid-cols-3">

                        {learningTools.map((tool) => {
                            const Icon = tool.icon;

                            return (
                                <div
                                    key={tool.title}
                                    className="
                                        group
                                        rounded-2xl
                                        border
                                        border-[var(--shiyora-border)]
                                        bg-[var(--shiyora-surface)]
                                        p-6
                                        shadow-sm
                                        transition-all
                                        duration-300
                                        hover:-translate-y-1
                                        hover:border-teal-300
                                        hover:shadow-lg
                                        hover:shadow-teal-500/10
                                        dark:hover:border-teal-400/30
                                    "
                                >

                                    <div
                                        className="
                                            flex
                                            h-11
                                            w-11
                                            items-center
                                            justify-center
                                            rounded-xl
                                            border
                                            border-teal-100
                                            bg-teal-50
                                            text-teal-600
                                            transition-transform
                                            duration-300
                                            group-hover:scale-105
                                            dark:border-teal-400/20
                                            dark:bg-teal-400/10
                                            dark:text-teal-300
                                        "
                                    >
                                        <Icon className="h-5 w-5" />
                                    </div>

                                    <h3
                                        className="
                                            mt-5
                                            text-lg
                                            font-bold
                                            text-[var(--shiyora-heading)]
                                        "
                                    >
                                        {tool.title}
                                    </h3>

                                    <p
                                        className="
                                            mt-2
                                            text-sm
                                            leading-6
                                            text-[var(--shiyora-muted)]
                                        "
                                    >
                                        {tool.text}
                                    </p>

                                </div>
                            );
                        })}

                    </div>

                </div>

            </section>

            {/* =====================================================
                PLATFORM EXPERIENCE
            ====================================================== */}

            <section className="relative z-10 px-5 py-20 sm:px-6 md:py-24">

                <div className="mx-auto max-w-6xl">

                    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

                        {/* LEFT CONTENT */}

                        <div>

                            <p
                                className="
                                    text-xs
                                    font-bold
                                    uppercase
                                    tracking-[0.18em]
                                    text-blue-600
                                    dark:text-blue-400
                                "
                            >
                                One Platform
                            </p>

                            <h2
                                className="
                                    mt-4
                                    text-3xl
                                    font-extrabold
                                    leading-tight
                                    tracking-tight
                                    text-[var(--shiyora-heading)]
                                    md:text-4xl
                                "
                            >
                                One place for the{" "}

                                <span
                                    className="
                                        bg-gradient-to-r
                                        from-blue-600
                                        to-teal-500
                                        bg-clip-text
                                        text-transparent
                                        dark:from-blue-400
                                        dark:to-teal-300
                                    "
                                >
                                    entire learning journey.
                                </span>
                            </h2>

                            <p
                                className="
                                    mt-5
                                    text-sm
                                    leading-7
                                    text-[var(--shiyora-muted)]
                                    sm:text-base
                                "
                            >
                                Shiyora connects the different parts
                                of digital education so organizations
                                can manage learning, teachers can
                                create content, and students can focus
                                on their progress.
                            </p>

                            {/* Checklist */}

                            <div className="mt-8 space-y-4">

                                {[
                                    "Centralized learning management",
                                    "Structured courses and resources",
                                    "Progress-focused student experience",
                                    "Role-based platform access",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-3"
                                    >

                                        <div
                                            className="
                                                flex
                                                h-8
                                                w-8
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-full
                                                border
                                                border-teal-100
                                                bg-teal-50
                                                text-teal-600
                                                dark:border-teal-400/20
                                                dark:bg-teal-400/10
                                                dark:text-teal-300
                                            "
                                        >
                                            <CheckCircle2 className="h-4 w-4" />
                                        </div>

                                        <span
                                            className="
                                                text-sm
                                                text-[var(--shiyora-text)]
                                            "
                                        >
                                            {item}
                                        </span>

                                    </div>
                                ))}

                            </div>

                        </div>

                        {/* RIGHT DASHBOARD */}

                        <div className="relative">

                            {/* Glow */}

                            <div
                                className="
                                    pointer-events-none
                                    absolute
                                    inset-0
                                    rounded-3xl
                                    bg-blue-500/10
                                    blur-3xl
                                "
                            />

                            <div
                                className="
                                    relative
                                    overflow-hidden
                                    rounded-2xl
                                    border
                                    border-[var(--shiyora-border)]
                                    bg-[var(--shiyora-surface)]
                                    p-5
                                    shadow-xl
                                    shadow-slate-900/5
                                    dark:shadow-black/20
                                    sm:p-6
                                "
                            >

                                {/* Dashboard header */}

                                <div
                                    className="
                                        flex
                                        items-center
                                        justify-between
                                        border-b
                                        border-[var(--shiyora-border)]
                                        pb-5
                                    "
                                >

                                    <div className="flex items-center gap-3">

                                        <div
                                            className="
                                                flex
                                                h-10
                                                w-10
                                                items-center
                                                justify-center
                                                rounded-xl
                                                bg-gradient-to-br
                                                from-blue-600
                                                to-teal-500
                                                text-sm
                                                font-bold
                                                text-white
                                                shadow-md
                                                shadow-blue-500/20
                                            "
                                        >
                                            S
                                        </div>

                                        <div>

                                            <p
                                                className="
                                                    text-sm
                                                    font-bold
                                                    text-[var(--shiyora-heading)]
                                                "
                                            >
                                                Shiyora
                                            </p>

                                            <p
                                                className="
                                                    text-[10px]
                                                    text-[var(--shiyora-muted)]
                                                "
                                            >
                                                Learning Platform
                                            </p>

                                        </div>

                                    </div>

                                    <span
                                        className="
                                            rounded-full
                                            border
                                            border-teal-200
                                            bg-teal-50
                                            px-3
                                            py-1
                                            text-[9px]
                                            font-bold
                                            uppercase
                                            tracking-wider
                                            text-teal-600
                                            dark:border-teal-400/20
                                            dark:bg-teal-400/10
                                            dark:text-teal-300
                                        "
                                    >
                                        Active
                                    </span>

                                </div>

                                {/* Stats */}

                                <div className="mt-5 grid grid-cols-2 gap-4">

                                    {/* Courses */}

                                    <div
                                        className="
                                            rounded-xl
                                            border
                                            border-[var(--shiyora-border)]
                                            bg-[var(--shiyora-surface-soft)]
                                            p-4
                                        "
                                    >

                                        <p
                                            className="
                                                text-[10px]
                                                font-semibold
                                                tracking-wide
                                                text-[var(--shiyora-muted)]
                                            "
                                        >
                                            COURSES
                                        </p>

                                        <p
                                            className="
                                                mt-2
                                                text-2xl
                                                font-extrabold
                                                text-[var(--shiyora-heading)]
                                            "
                                        >
                                            24
                                        </p>

                                        <div
                                            className="
                                                mt-3
                                                h-1.5
                                                overflow-hidden
                                                rounded-full
                                                bg-slate-200
                                                dark:bg-slate-700
                                            "
                                        >
                                            <div
                                                className="
                                                    h-full
                                                    w-[72%]
                                                    rounded-full
                                                    bg-gradient-to-r
                                                    from-blue-500
                                                    to-teal-400
                                                "
                                            />
                                        </div>

                                    </div>

                                    {/* Progress */}

                                    <div
                                        className="
                                            rounded-xl
                                            border
                                            border-[var(--shiyora-border)]
                                            bg-[var(--shiyora-surface-soft)]
                                            p-4
                                        "
                                    >

                                        <p
                                            className="
                                                text-[10px]
                                                font-semibold
                                                tracking-wide
                                                text-[var(--shiyora-muted)]
                                            "
                                        >
                                            PROGRESS
                                        </p>

                                        <p
                                            className="
                                                mt-2
                                                text-2xl
                                                font-extrabold
                                                text-teal-600
                                                dark:text-teal-300
                                            "
                                        >
                                            78%
                                        </p>

                                        <div
                                            className="
                                                mt-3
                                                h-1.5
                                                overflow-hidden
                                                rounded-full
                                                bg-slate-200
                                                dark:bg-slate-700
                                            "
                                        >
                                            <div
                                                className="
                                                    h-full
                                                    w-[78%]
                                                    rounded-full
                                                    bg-gradient-to-r
                                                    from-teal-500
                                                    to-blue-400
                                                "
                                            />
                                        </div>

                                    </div>

                                </div>

                                {/* Activity */}

                                <div className="mt-4 space-y-3">

                                    {[
                                        "Courses organized",
                                        "Learning resources ready",
                                        "Assessments available",
                                        "Progress being tracked",
                                    ].map((item, index) => (
                                        <div
                                            key={item}
                                            className="
                                                flex
                                                items-center
                                                gap-3
                                                rounded-xl
                                                border
                                                border-[var(--shiyora-border)]
                                                bg-[var(--shiyora-surface-soft)]
                                                p-3
                                            "
                                        >

                                            <div
                                                className="
                                                    flex
                                                    h-8
                                                    w-8
                                                    shrink-0
                                                    items-center
                                                    justify-center
                                                    rounded-lg
                                                    bg-blue-50
                                                    text-[10px]
                                                    font-bold
                                                    text-blue-600
                                                    dark:bg-blue-400/10
                                                    dark:text-blue-300
                                                "
                                            >
                                                {String(
                                                    index + 1
                                                ).padStart(2, "0")}
                                            </div>

                                            <span
                                                className="
                                                    text-xs
                                                    font-medium
                                                    text-[var(--shiyora-text)]
                                                "
                                            >
                                                {item}
                                            </span>

                                            <CheckCircle2
                                                className="
                                                    ml-auto
                                                    h-4
                                                    w-4
                                                    shrink-0
                                                    text-teal-500
                                                    dark:text-teal-300
                                                "
                                            />

                                        </div>
                                    ))}

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* =====================================================
                CTA
            ====================================================== */}

            <section
                className="
                    relative
                    z-10
                    border-t
                    border-[var(--shiyora-border)]
                    bg-[var(--shiyora-surface-soft)]
                    px-5
                    py-20
                    sm:px-6
                    md:py-24
                "
            >

                <div className="mx-auto max-w-5xl">

                    <div
                        className="
                            relative
                            overflow-hidden
                            rounded-3xl
                            border
                            border-blue-200
                            bg-[var(--shiyora-surface)]
                            px-6
                            py-14
                            text-center
                            shadow-sm
                            dark:border-blue-400/20
                            sm:px-10
                            md:px-16
                            md:py-16
                        "
                    >

                        {/* Blue glow */}

                        <div
                            className="
                                pointer-events-none
                                absolute
                                left-1/2
                                top-[-120px]
                                h-72
                                w-72
                                -translate-x-1/2
                                rounded-full
                                bg-blue-500/10
                                blur-[100px]
                            "
                        />

                        {/* Teal glow */}

                        <div
                            className="
                                pointer-events-none
                                absolute
                                bottom-[-120px]
                                left-1/4
                                h-60
                                w-60
                                rounded-full
                                bg-teal-400/10
                                blur-[100px]
                            "
                        />

                        <div className="relative z-10">

                            <p
                                className="
                                    text-xs
                                    font-bold
                                    uppercase
                                    tracking-[0.18em]
                                    text-blue-600
                                    dark:text-blue-400
                                "
                            >
                                Start Learning
                            </p>

                            <h2
                                className="
                                    mt-4
                                    text-3xl
                                    font-extrabold
                                    tracking-tight
                                    text-[var(--shiyora-heading)]
                                    md:text-4xl
                                "
                            >
                                Ready to experience Shiyora?
                            </h2>

                            <p
                                className="
                                    mx-auto
                                    mt-4
                                    max-w-2xl
                                    text-sm
                                    leading-7
                                    text-[var(--shiyora-muted)]
                                    sm:text-base
                                "
                            >
                                Create your account and explore
                                a structured learning experience
                                built for modern education.
                            </p>

                            {/* Buttons */}

                            <div className="mt-7 flex flex-wrap justify-center gap-3">

                                <Link
                                    to="/signup"
                                    className="
                                        group
                                        inline-flex
                                        items-center
                                        gap-2
                                        rounded-xl
                                        bg-gradient-to-r
                                        from-blue-600
                                        to-teal-500
                                        px-6
                                        py-3
                                        text-sm
                                        font-bold
                                        text-white
                                        shadow-lg
                                        shadow-blue-500/20
                                        transition-all
                                        duration-300
                                        hover:-translate-y-0.5
                                        hover:shadow-xl
                                        hover:shadow-blue-500/25
                                    "
                                >
                                    Create Your Account

                                    <ArrowRight
                                        className="
                                            h-4
                                            w-4
                                            transition-transform
                                            duration-300
                                            group-hover:translate-x-1
                                        "
                                    />
                                </Link>

                                <Link
                                    to="/about"
                                    className="
                                        inline-flex
                                        items-center
                                        gap-2
                                        rounded-xl
                                        border
                                        border-[var(--shiyora-border)]
                                        bg-[var(--shiyora-surface)]
                                        px-6
                                        py-3
                                        text-sm
                                        font-semibold
                                        text-[var(--shiyora-text)]
                                        transition-all
                                        duration-300
                                        hover:-translate-y-0.5
                                        hover:border-blue-300
                                        hover:text-blue-600
                                        dark:hover:border-blue-400/30
                                        dark:hover:text-blue-300
                                    "
                                >
                                    About Shiyora
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* =====================================================
                BOTTOM ACCENT
            ====================================================== */}

            <div
                className="
                    relative
                    z-10
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-blue-500/40
                    to-transparent
                "
            />

        </main>
    );
}

export default Feature;