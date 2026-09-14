import { Link } from "react-router-dom";

const FONT_IMPORTS =
    "@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500;600&display=swap');";

function About() {
    const features = [
        {
            number: "01",
            title: "Multi-Tenant Platform",
            text: "Multiple organizations can use Shiyora while keeping their users, courses, and learning data logically separated.",
            icon: "◎",
        },
        {
            number: "02",
            title: "Teacher Management",
            text: "Teachers can create courses, manage lessons, upload learning materials, and create quizzes.",
            icon: "◇",
        },
        {
            number: "03",
            title: "Student Learning",
            text: "Students can enroll in courses, access learning materials, take quizzes, and monitor their progress.",
            icon: "◈",
        },
        {
            number: "04",
            title: "Course Management",
            text: "Manage courses, lessons, video lectures, PDF notes, and quizzes from one centralized platform.",
            icon: "▣",
        },
        {
            number: "05",
            title: "Progress Tracking",
            text: "Track student course completion and quiz performance through a simple learning dashboard.",
            icon: "↗",
        },
        {
            number: "06",
            title: "Role-Based Access",
            text: "Different roles get access to features and dashboards relevant to their responsibilities.",
            icon: "⌁",
        },
    ];

    return (
        <main
            className="
                relative
                min-h-screen
                overflow-hidden
                bg-slate-50
                font-['Inter']
                text-slate-900
                transition-colors
                duration-500
                dark:bg-[#07111f]
                dark:text-slate-100
            "
        >
            <style>{`
                ${FONT_IMPORTS}

                /* =====================================================
                   SHIYORA ABOUT PAGE
                ====================================================== */

                .about-page {
                    position: relative;
                    isolation: isolate;
                }

                /* =====================================================
                   BACKGROUND
                ====================================================== */

                .about-grid {
                    background-image:
                        linear-gradient(
                            rgba(37, 99, 235, 0.045) 1px,
                            transparent 1px
                        ),
                        linear-gradient(
                            90deg,
                            rgba(37, 99, 235, 0.045) 1px,
                            transparent 1px
                        );

                    background-size: 42px 42px;

                    mask-image:
                        linear-gradient(
                            to bottom,
                            black,
                            transparent 75%
                        );
                }

                .dark .about-grid {
                    background-image:
                        linear-gradient(
                            rgba(96, 165, 250, 0.035) 1px,
                            transparent 1px
                        ),
                        linear-gradient(
                            90deg,
                            rgba(96, 165, 250, 0.035) 1px,
                            transparent 1px
                        );
                }

                .about-blue-glow {
                    position: absolute;
                    width: 420px;
                    height: 420px;
                    left: -180px;
                    top: -160px;
                    border-radius: 9999px;
                    background: rgba(37, 99, 235, 0.10);
                    filter: blur(100px);
                    pointer-events: none;
                }

                .about-teal-glow {
                    position: absolute;
                    width: 400px;
                    height: 400px;
                    right: -180px;
                    top: 420px;
                    border-radius: 9999px;
                    background: rgba(13, 148, 136, 0.09);
                    filter: blur(100px);
                    pointer-events: none;
                }

                .dark .about-blue-glow {
                    background: rgba(37, 99, 235, 0.16);
                }

                .dark .about-teal-glow {
                    background: rgba(20, 184, 166, 0.13);
                }

                /* =====================================================
                   GLASS CARDS
                ====================================================== */

                .about-glass {
                    background: rgba(255, 255, 255, 0.72);
                    border: 1px solid rgba(226, 232, 240, 0.90);
                    box-shadow:
                        0 20px 60px rgba(15, 23, 42, 0.06),
                        inset 0 1px 0 rgba(255, 255, 255, 0.85);
                    backdrop-filter: blur(18px);
                    -webkit-backdrop-filter: blur(18px);

                    transition:
                        transform 0.35s ease,
                        border-color 0.35s ease,
                        box-shadow 0.35s ease,
                        background 0.35s ease;
                }

                .dark .about-glass {
                    background: rgba(13, 27, 42, 0.70);
                    border-color: rgba(51, 65, 85, 0.85);
                    box-shadow:
                        0 25px 70px rgba(0, 0, 0, 0.22),
                        inset 0 1px 0 rgba(255, 255, 255, 0.035);
                }

                .about-glass:hover {
                    transform: translateY(-5px);
                    border-color: rgba(37, 99, 235, 0.28);
                    box-shadow:
                        0 25px 70px rgba(37, 99, 235, 0.10),
                        inset 0 1px 0 rgba(255, 255, 255, 0.90);
                }

                .dark .about-glass:hover {
                    border-color: rgba(45, 212, 191, 0.28);
                    box-shadow:
                        0 25px 70px rgba(13, 148, 136, 0.10),
                        inset 0 1px 0 rgba(255, 255, 255, 0.045);
                }

                /* =====================================================
                   GRADIENT TEXT
                ====================================================== */

                .about-gradient-text {
                    background:
                        linear-gradient(
                            135deg,
                            #2563eb,
                            #0d9488
                        );

                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                }

                /* =====================================================
                   BLUE/TEAL ICON
                ====================================================== */

                .about-icon {
                    background:
                        linear-gradient(
                            135deg,
                            rgba(37, 99, 235, 0.12),
                            rgba(13, 148, 136, 0.12)
                        );

                    border: 1px solid rgba(37, 99, 235, 0.15);

                    color: #2563eb;

                    transition:
                        transform 0.35s ease,
                        background 0.35s ease,
                        color 0.35s ease;
                }

                .dark .about-icon {
                    background:
                        linear-gradient(
                            135deg,
                            rgba(37, 99, 235, 0.16),
                            rgba(13, 148, 136, 0.14)
                        );

                    border-color:
                        rgba(96, 165, 250, 0.16);

                    color: #60a5fa;
                }

                .about-glass:hover .about-icon {
                    transform:
                        rotate(-5deg)
                        scale(1.06);

                    background:
                        linear-gradient(
                            135deg,
                            #2563eb,
                            #0d9488
                        );

                    color: white;
                }

                /* =====================================================
                   NUMBER
                ====================================================== */

                .about-number {
                    color: #2563eb;
                }

                .dark .about-number {
                    color: #5eead4;
                }

                /* =====================================================
                   SECTION LABEL
                ====================================================== */

                .about-label {
                    color: #2563eb;
                }

                .dark .about-label {
                    color: #2dd4bf;
                }

                /* =====================================================
                   CONNECTOR
                ====================================================== */

                .about-connector {
                    background:
                        linear-gradient(
                            90deg,
                            #2563eb,
                            #0d9488
                        );
                }

                /* =====================================================
                   CTA
                ====================================================== */

                .about-cta {
                    background:
                        linear-gradient(
                            135deg,
                            #2563eb,
                            #0d9488
                        );

                    box-shadow:
                        0 15px 35px
                        rgba(37, 99, 235, 0.20);

                    transition:
                        transform 0.3s ease,
                        box-shadow 0.3s ease;
                }

                .about-cta:hover {
                    transform: translateY(-3px);
                    box-shadow:
                        0 20px 45px
                        rgba(13, 148, 136, 0.28);
                }

                /* =====================================================
                   FADE UP
                ====================================================== */

                .about-fade {
                    animation:
                        aboutFade 0.7s ease-out both;
                }

                .about-delay-1 {
                    animation-delay: 0.1s;
                }

                .about-delay-2 {
                    animation-delay: 0.2s;
                }

                .about-delay-3 {
                    animation-delay: 0.3s;
                }

                @keyframes aboutFade {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }

                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                /* =====================================================
                   REDUCED MOTION
                ====================================================== */

                @media (prefers-reduced-motion: reduce) {
                    .about-fade {
                        animation: none;
                    }

                    .about-glass,
                    .about-icon,
                    .about-cta {
                        transition: none;
                    }
                }
            `}</style>

            <div className="about-page">

                {/* =====================================================
                    BACKGROUND
                ====================================================== */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        inset-0
                        -z-10
                        overflow-hidden
                    "
                >
                    <div className="about-grid absolute inset-0" />

                    <div className="about-blue-glow" />
                    <div className="about-teal-glow" />
                </div>


                {/* =====================================================
                    HERO
                ====================================================== */}

                <section
                    className="
                        relative
                        px-6
                        pb-24
                        pt-20
                        sm:pt-24
                        md:pb-28
                    "
                >
                    <div className="mx-auto max-w-5xl text-center">

                        {/* Badge */}

                        <div
                            className="
                                about-fade
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                border
                                border-blue-200
                                bg-white/70
                                px-4
                                py-2
                                font-['JetBrains_Mono']
                                text-[11px]
                                font-semibold
                                uppercase
                                tracking-[0.18em]
                                text-blue-600
                                shadow-sm
                                backdrop-blur-xl
                                dark:border-blue-400/20
                                dark:bg-blue-400/10
                                dark:text-blue-300
                            "
                        >
                            <span
                                className="
                                    h-1.5
                                    w-1.5
                                    rounded-full
                                    bg-blue-500
                                    shadow-[0_0_12px_rgba(37,99,235,0.8)]
                                    dark:bg-teal-400
                                    dark:shadow-[0_0_12px_rgba(45,212,191,0.8)]
                                "
                            />

                            About Shiyora
                        </div>


                        {/* Heading */}

                        <h1
                            className="
                                about-fade
                                about-delay-1
                                mt-7
                                font-['Space_Grotesk']
                                text-5xl
                                font-semibold
                                leading-[1.04]
                                tracking-tight
                                text-slate-900
                                sm:text-6xl
                                lg:text-7xl
                                dark:text-white
                            "
                        >
                            Learning should feel
                            <br />

                            <span className="about-gradient-text">
                                organized & meaningful.
                            </span>
                        </h1>


                        {/* Description */}

                        <p
                            className="
                                about-fade
                                about-delay-2
                                mx-auto
                                mt-8
                                max-w-3xl
                                text-base
                                leading-7
                                text-slate-600
                                md:text-lg
                                dark:text-slate-400
                            "
                        >
                            Shiyora is a multi-tenant SaaS-based Learning
                            Management System designed to bring organizations,
                            teachers, and students together on one powerful
                            learning platform.
                        </p>


                        {/* Stats */}

                        <div
                            className="
                                about-fade
                                about-delay-3
                                mx-auto
                                mt-10
                                grid
                                max-w-2xl
                                grid-cols-1
                                gap-3
                                sm:grid-cols-3
                            "
                        >

                            <div
                                className="
                                    rounded-2xl
                                    border
                                    border-slate-200
                                    bg-white/70
                                    px-5
                                    py-4
                                    shadow-sm
                                    backdrop-blur-xl
                                    dark:border-slate-800
                                    dark:bg-slate-900/50
                                "
                            >
                                <p
                                    className="
                                        font-['JetBrains_Mono']
                                        text-xl
                                        font-semibold
                                        text-blue-600
                                        dark:text-blue-400
                                    "
                                >
                                    01
                                </p>

                                <p
                                    className="
                                        mt-1
                                        text-xs
                                        text-slate-500
                                        dark:text-slate-500
                                    "
                                >
                                    Unified Platform
                                </p>
                            </div>


                            <div
                                className="
                                    rounded-2xl
                                    border
                                    border-slate-200
                                    bg-white/70
                                    px-5
                                    py-4
                                    shadow-sm
                                    backdrop-blur-xl
                                    dark:border-slate-800
                                    dark:bg-slate-900/50
                                "
                            >
                                <p
                                    className="
                                        font-['JetBrains_Mono']
                                        text-xl
                                        font-semibold
                                        text-teal-600
                                        dark:text-teal-400
                                    "
                                >
                                    03
                                </p>

                                <p
                                    className="
                                        mt-1
                                        text-xs
                                        text-slate-500
                                        dark:text-slate-500
                                    "
                                >
                                    Core Roles
                                </p>
                            </div>


                            <div
                                className="
                                    rounded-2xl
                                    border
                                    border-slate-200
                                    bg-white/70
                                    px-5
                                    py-4
                                    shadow-sm
                                    backdrop-blur-xl
                                    dark:border-slate-800
                                    dark:bg-slate-900/50
                                "
                            >
                                <p
                                    className="
                                        font-['JetBrains_Mono']
                                        text-xl
                                        font-semibold
                                        text-blue-600
                                        dark:text-teal-400
                                    "
                                >
                                    ∞
                                </p>

                                <p
                                    className="
                                        mt-1
                                        text-xs
                                        text-slate-500
                                        dark:text-slate-500
                                    "
                                >
                                    Learning Possibilities
                                </p>
                            </div>

                        </div>

                    </div>
                </section>


                {/* =====================================================
                    MISSION & VISION
                ====================================================== */}

                <section
                    className="
                        relative
                        border-y
                        border-slate-200/80
                        bg-white/40
                        py-24
                        dark:border-slate-800/80
                        dark:bg-slate-950/20
                    "
                >
                    <div
                        className="
                            mx-auto
                            grid
                            max-w-6xl
                            gap-6
                            px-6
                            md:grid-cols-2
                        "
                    >

                        {/* Mission */}

                        <div className="about-glass relative rounded-3xl p-8 md:p-9">

                            <div
                                className="
                                    about-icon
                                    flex
                                    h-14
                                    w-14
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    text-2xl
                                "
                            >
                                M
                            </div>

                            <p
                                className="
                                    about-label
                                    mt-7
                                    font-['JetBrains_Mono']
                                    text-[11px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.2em]
                                "
                            >
                                Our Mission
                            </p>

                            <h2
                                className="
                                    mt-3
                                    font-['Space_Grotesk']
                                    text-2xl
                                    font-semibold
                                    text-slate-900
                                    dark:text-white
                                "
                            >
                                Make digital education simpler.
                            </h2>

                            <p
                                className="
                                    mt-4
                                    text-sm
                                    leading-7
                                    text-slate-500
                                    dark:text-slate-400
                                "
                            >
                                Our mission is to simplify digital education
                                by providing organizations with an easy-to-use
                                platform for managing courses, teachers,
                                students, lessons, quizzes, and learning
                                progress.
                            </p>

                            <div
                                className="
                                    about-connector
                                    mt-7
                                    h-1
                                    w-12
                                    rounded-full
                                "
                            />

                        </div>


                        {/* Vision */}

                        <div className="about-glass relative rounded-3xl p-8 md:p-9">

                            <div
                                className="
                                    about-icon
                                    flex
                                    h-14
                                    w-14
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    text-2xl
                                "
                            >
                                V
                            </div>

                            <p
                                className="
                                    about-label
                                    mt-7
                                    font-['JetBrains_Mono']
                                    text-[11px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.2em]
                                "
                            >
                                Our Vision
                            </p>

                            <h2
                                className="
                                    mt-3
                                    font-['Space_Grotesk']
                                    text-2xl
                                    font-semibold
                                    text-slate-900
                                    dark:text-white
                                "
                            >
                                Connect everyone through learning.
                            </h2>

                            <p
                                className="
                                    mt-4
                                    text-sm
                                    leading-7
                                    text-slate-500
                                    dark:text-slate-400
                                "
                            >
                                Our vision is to build a connected digital
                                learning ecosystem where organizations can
                                deliver quality education and students can
                                learn, grow, and track their progress from
                                anywhere.
                            </p>

                            <div
                                className="
                                    about-connector
                                    mt-7
                                    h-1
                                    w-12
                                    rounded-full
                                "
                            />

                        </div>

                    </div>
                </section>


                {/* =====================================================
                    WHY SHIYORA
                ====================================================== */}

                <section
                    className="
                        relative
                        py-24
                    "
                >
                    <div className="mx-auto max-w-7xl px-6">

                        {/* Heading */}

                        <div className="max-w-2xl">

                            <p
                                className="
                                    about-label
                                    font-['JetBrains_Mono']
                                    text-xs
                                    font-semibold
                                    uppercase
                                    tracking-[0.2em]
                                "
                            >
                                Why Shiyora
                            </p>

                            <h2
                                className="
                                    mt-3
                                    font-['Space_Grotesk']
                                    text-3xl
                                    font-semibold
                                    tracking-tight
                                    text-slate-900
                                    md:text-4xl
                                    dark:text-white
                                "
                            >
                                Built for modern education.
                            </h2>

                            <p
                                className="
                                    mt-4
                                    leading-7
                                    text-slate-500
                                    dark:text-slate-400
                                "
                            >
                                Shiyora brings essential learning management
                                features together in one centralized platform.
                            </p>

                        </div>


                        {/* Feature Cards */}

                        <div
                            className="
                                mt-14
                                grid
                                gap-5
                                sm:grid-cols-2
                                lg:grid-cols-3
                            "
                        >

                            {features.map((feature) => (
                                <div
                                    key={feature.number}
                                    className="
                                        about-glass
                                        group
                                        relative
                                        overflow-hidden
                                        rounded-3xl
                                        p-7
                                    "
                                >

                                    <div
                                        className="
                                            flex
                                            items-start
                                            justify-between
                                        "
                                    >

                                        <div
                                            className="
                                                about-icon
                                                flex
                                                h-12
                                                w-12
                                                items-center
                                                justify-center
                                                rounded-xl
                                                text-lg
                                                font-semibold
                                            "
                                        >
                                            {feature.icon}
                                        </div>

                                        <span
                                            className="
                                                about-number
                                                font-['JetBrains_Mono']
                                                text-xs
                                                font-semibold
                                                opacity-70
                                            "
                                        >
                                            {feature.number}
                                        </span>

                                    </div>


                                    <h3
                                        className="
                                            mt-6
                                            font-['Space_Grotesk']
                                            text-lg
                                            font-semibold
                                            text-slate-900
                                            dark:text-white
                                        "
                                    >
                                        {feature.title}
                                    </h3>


                                    <p
                                        className="
                                            mt-3
                                            text-sm
                                            leading-7
                                            text-slate-500
                                            dark:text-slate-400
                                        "
                                    >
                                        {feature.text}
                                    </p>


                                    <div
                                        className="
                                            about-connector
                                            mt-6
                                            h-0.5
                                            w-8
                                            rounded-full
                                            transition-all
                                            duration-300
                                            group-hover:w-16
                                        "
                                    />

                                </div>
                            ))}

                        </div>

                    </div>
                </section>


                {/* =====================================================
                    LEARNING ECOSYSTEM
                ====================================================== */}

                <section
                    className="
                        relative
                        border-y
                        border-slate-200/80
                        bg-white/40
                        py-24
                        dark:border-slate-800/80
                        dark:bg-slate-950/20
                    "
                >
                    <div className="mx-auto max-w-6xl px-6">

                        <div
                            className="
                                grid
                                items-center
                                gap-14
                                md:grid-cols-2
                            "
                        >

                            {/* LEFT */}

                            <div>

                                <p
                                    className="
                                        about-label
                                        font-['JetBrains_Mono']
                                        text-xs
                                        font-semibold
                                        uppercase
                                        tracking-[0.2em]
                                    "
                                >
                                    One Ecosystem
                                </p>

                                <h2
                                    className="
                                        mt-4
                                        font-['Space_Grotesk']
                                        text-3xl
                                        font-semibold
                                        text-slate-900
                                        md:text-4xl
                                        dark:text-white
                                    "
                                >
                                    Everyone has a place
                                    <span className="about-gradient-text">
                                        {" "}at the desk.
                                    </span>
                                </h2>

                                <p
                                    className="
                                        mt-5
                                        leading-7
                                        text-slate-500
                                        dark:text-slate-400
                                    "
                                >
                                    Shiyora connects organizations, teachers,
                                    and students so that learning activities
                                    can be managed from one structured
                                    environment.
                                </p>

                            </div>


                            {/* RIGHT */}

                            <div className="space-y-4">

                                {/* Organizations */}

                                <div className="about-glass flex items-center gap-4 rounded-2xl p-5">

                                    <span
                                        className="
                                            about-number
                                            font-['JetBrains_Mono']
                                            text-sm
                                            font-semibold
                                        "
                                    >
                                        01
                                    </span>

                                    <div>

                                        <h3
                                            className="
                                                font-['Space_Grotesk']
                                                font-semibold
                                                text-slate-900
                                                dark:text-white
                                            "
                                        >
                                            Organizations
                                        </h3>

                                        <p
                                            className="
                                                mt-1
                                                text-sm
                                                leading-6
                                                text-slate-500
                                                dark:text-slate-400
                                            "
                                        >
                                            Manage people, courses and
                                            learning activities centrally.
                                        </p>

                                    </div>

                                </div>


                                {/* Teachers */}

                                <div className="about-glass flex items-center gap-4 rounded-2xl p-5">

                                    <span
                                        className="
                                            font-['JetBrains_Mono']
                                            text-sm
                                            font-semibold
                                            text-teal-600
                                            dark:text-teal-400
                                        "
                                    >
                                        02
                                    </span>

                                    <div>

                                        <h3
                                            className="
                                                font-['Space_Grotesk']
                                                font-semibold
                                                text-slate-900
                                                dark:text-white
                                            "
                                        >
                                            Teachers
                                        </h3>

                                        <p
                                            className="
                                                mt-1
                                                text-sm
                                                leading-6
                                                text-slate-500
                                                dark:text-slate-400
                                            "
                                        >
                                            Create courses, lessons,
                                            resources and assessments.
                                        </p>

                                    </div>

                                </div>


                                {/* Students */}

                                <div className="about-glass flex items-center gap-4 rounded-2xl p-5">

                                    <span
                                        className="
                                            font-['JetBrains_Mono']
                                            text-sm
                                            font-semibold
                                            text-blue-600
                                            dark:text-blue-400
                                        "
                                    >
                                        03
                                    </span>

                                    <div>

                                        <h3
                                            className="
                                                font-['Space_Grotesk']
                                                font-semibold
                                                text-slate-900
                                                dark:text-white
                                            "
                                        >
                                            Students
                                        </h3>

                                        <p
                                            className="
                                                mt-1
                                                text-sm
                                                leading-6
                                                text-slate-500
                                                dark:text-slate-400
                                            "
                                        >
                                            Learn, complete assessments and
                                            track progress.
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </section>


                {/* =====================================================
                    CTA
                ====================================================== */}

                <section className="relative px-6 py-24">

                    <div className="mx-auto max-w-5xl">

                        <div
                            className="
                                about-glass
                                relative
                                overflow-hidden
                                rounded-[2rem]
                                px-8
                                py-16
                                text-center
                                md:px-16
                            "
                        >

                            {/* Background gradient */}

                            <div
                                className="
                                    pointer-events-none
                                    absolute
                                    left-1/2
                                    top-0
                                    h-48
                                    w-80
                                    -translate-x-1/2
                                    rounded-full
                                    bg-blue-500/10
                                    blur-[90px]
                                    dark:bg-teal-400/10
                                "
                            />


                            <div className="relative z-10">

                                <p
                                    className="
                                        about-label
                                        font-['JetBrains_Mono']
                                        text-xs
                                        font-semibold
                                        uppercase
                                        tracking-[0.2em]
                                    "
                                >
                                    Start Your Journey
                                </p>


                                <h2
                                    className="
                                        mt-4
                                        font-['Space_Grotesk']
                                        text-3xl
                                        font-semibold
                                        text-slate-900
                                        md:text-4xl
                                        dark:text-white
                                    "
                                >
                                    Start learning with Shiyora.
                                </h2>


                                <p
                                    className="
                                        mx-auto
                                        mt-5
                                        max-w-2xl
                                        leading-7
                                        text-slate-500
                                        dark:text-slate-400
                                    "
                                >
                                    Create your account, explore courses and
                                    take control of your learning journey.
                                </p>


                                <Link
                                    to="/signup"
                                    className="
                                        about-cta
                                        group
                                        mt-8
                                        inline-flex
                                        items-center
                                        gap-2
                                        rounded-xl
                                        px-8
                                        py-3.5
                                        font-semibold
                                        text-white
                                    "
                                >
                                    Create Your Account

                                    <span
                                        className="
                                            transition-transform
                                            duration-300
                                            group-hover:translate-x-1
                                        "
                                    >
                                        →
                                    </span>
                                </Link>

                            </div>

                        </div>

                    </div>

                </section>

            </div>
        </main>
    );
}

export default About;