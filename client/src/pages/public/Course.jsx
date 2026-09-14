import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
    BookOpen,
    Code2,
    Database,
    Globe,
    Brain,
    Layers,
    Users,
    ArrowRight,
    Clock,
    PlayCircle,
    Star,
    Search,
    Sparkles,
    CheckCircle2,
} from "lucide-react";

/* =========================================================
   GOOGLE FONTS
========================================================= */

const FONT_IMPORTS = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
`;

/* =========================================================
   REVEAL COMPONENT
========================================================= */

function Reveal({
    children,
    className = "",
    delay = 0,
    variant = "up",
}) {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;

        if (!element) return;

        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (reduceMotion) {
            element.classList.add("courses-reveal-visible");
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    element.classList.add("courses-reveal-visible");
                    observer.unobserve(element);
                }
            },
            {
                threshold: 0.12,
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    const variantClass =
        variant !== "up"
            ? `courses-reveal--${variant}`
            : "";

    return (
        <div
            ref={ref}
            className={`courses-reveal ${variantClass} ${className}`}
            style={{
                "--reveal-delay": `${delay}ms`,
            }}
        >
            {children}
        </div>
    );
}

/* =========================================================
   COURSES
========================================================= */

function Courses() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    /* =====================================================
       COURSE DATA
    ====================================================== */

    const courses = [
        {
            title: "Full Stack Web Development",
            description:
                "Learn modern frontend and backend development and build complete web applications.",
            category: "Web Development",
            level: "Intermediate",
            duration: "12 Weeks",
            students: "245 Students",
            lessons: "42 Lessons",
            icon: Code2,
            shortName: "WEB",
            gradient:
                "from-blue-600 to-blue-500",
        },

        {
            title: "Java Programming",
            description:
                "Build a strong foundation in Java programming, OOP concepts, collections, and applications.",
            category: "Programming",
            level: "Beginner",
            duration: "8 Weeks",
            students: "180 Students",
            lessons: "36 Lessons",
            icon: Layers,
            shortName: "JAVA",
            gradient:
                "from-blue-700 to-teal-500",
        },

        {
            title: "Database Management",
            description:
                "Understand databases, SQL, relationships, normalization, queries, and database design.",
            category: "Database",
            level: "Intermediate",
            duration: "7 Weeks",
            students: "156 Students",
            lessons: "30 Lessons",
            icon: Database,
            shortName: "SQL",
            gradient:
                "from-teal-600 to-teal-400",
        },

        {
            title: "HTML & CSS",
            description:
                "Learn the fundamentals of creating responsive and modern websites from scratch.",
            category: "Web Design",
            level: "Beginner",
            duration: "6 Weeks",
            students: "320 Students",
            lessons: "28 Lessons",
            icon: Globe,
            shortName: "HTML",
            gradient:
                "from-blue-600 to-teal-500",
        },

        {
            title: "JavaScript Essentials",
            description:
                "Master JavaScript fundamentals, ES6 features, DOM manipulation, and modern development.",
            category: "Programming",
            level: "Intermediate",
            duration: "8 Weeks",
            students: "210 Students",
            lessons: "34 Lessons",
            icon: Brain,
            shortName: "JS",
            gradient:
                "from-teal-600 to-blue-500",
        },

        {
            title: "React Development",
            description:
                "Build interactive frontend applications using React components, hooks, routing, and state.",
            category: "Frontend",
            level: "Intermediate",
            duration: "10 Weeks",
            students: "195 Students",
            lessons: "40 Lessons",
            icon: BookOpen,
            shortName: "REACT",
            gradient:
                "from-blue-700 to-teal-500",
        },
    ];

    /* =====================================================
       CATEGORIES
    ====================================================== */

    const categories = [
        "All",
        "Web Development",
        "Programming",
        "Database",
        "Web Design",
        "Frontend",
    ];

    /* =====================================================
       FILTER COURSES
    ====================================================== */

    const filteredCourses = courses.filter((course) => {
        const matchesSearch =
            course.title
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
            course.description
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
            course.category
                .toLowerCase()
                .includes(searchTerm.toLowerCase());

        const matchesCategory =
            selectedCategory === "All" ||
            course.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    return (
        <main className="shiyora-courses min-h-screen overflow-hidden">

            <style>{`
                ${FONT_IMPORTS}

                /* =================================================
                   THEME
                ================================================= */

                .shiyora-courses {
                    --courses-bg: var(--shiyora-bg);
                    --courses-surface: var(--shiyora-surface);
                    --courses-surface-soft: var(--shiyora-surface-soft);
                    --courses-text: var(--shiyora-text);
                    --courses-heading: var(--shiyora-heading);
                    --courses-muted: var(--shiyora-muted);
                    --courses-border: var(--shiyora-border);
                    --courses-primary: var(--shiyora-primary);
                    --courses-primary-hover: var(--shiyora-primary-hover);
                    --courses-secondary: var(--shiyora-secondary);
                    --courses-blue-soft: var(--shiyora-blue-soft);
                    --courses-teal-soft: var(--shiyora-teal-soft);

                    font-family: 'Inter', sans-serif;
                    background: var(--courses-bg);
                    color: var(--courses-text);

                    transition:
                        background-color .35s ease,
                        color .35s ease;
                }

                .shiyora-courses h1,
                .shiyora-courses h2,
                .shiyora-courses h3,
                .shiyora-courses h4 {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                }

                /* =================================================
                   REVEAL
                ================================================= */

                .courses-reveal {
                    opacity: 0;
                    transform: translateY(40px);

                    transition:
                        opacity .9s cubic-bezier(.22,1,.36,1),
                        transform .9s cubic-bezier(.22,1,.36,1);

                    transition-delay: var(--reveal-delay);
                }

                .courses-reveal-visible {
                    opacity: 1;
                    transform: none;
                }

                .courses-reveal--left {
                    transform: translateX(-45px);
                }

                .courses-reveal--right {
                    transform: translateX(45px);
                }

                .courses-reveal--scale {
                    transform:
                        translateY(25px)
                        scale(.94);
                }

                /* =================================================
                   HERO
                ================================================= */

                .courses-hero-orb-one {
                    animation:
                        coursesOrbOne 10s ease-in-out infinite;
                }

                .courses-hero-orb-two {
                    animation:
                        coursesOrbTwo 12s ease-in-out infinite;
                }

                .courses-gradient-text {
                    background-size: 200% auto;

                    animation:
                        coursesGradient 5s ease-in-out infinite;
                }

                /* =================================================
                   CARD
                ================================================= */

                .courses-card {
                    background: var(--courses-surface);
                    border-color: var(--courses-border);

                    transition:
                        transform .45s cubic-bezier(.22,1,.36,1),
                        box-shadow .45s ease,
                        border-color .4s ease,
                        background-color .35s ease;
                }

                .courses-card:hover {
                    transform: translateY(-9px);

                    box-shadow:
                        0 30px 70px rgba(15,23,42,.12);

                    border-color:
                        color-mix(
                            in srgb,
                            var(--courses-primary) 35%,
                            var(--courses-border)
                        );
                }

                html.dark .courses-card:hover {
                    box-shadow:
                        0 30px 70px rgba(0,0,0,.4);
                }

                /* =================================================
                   COURSE THUMBNAIL
                ================================================= */

                .courses-thumb {
                    position: relative;
                    isolation: isolate;
                }

                .courses-thumb::after {
                    content: "";

                    position: absolute;
                    inset: 0;

                    background:
                        linear-gradient(
                            115deg,
                            transparent 20%,
                            rgba(255,255,255,.35) 40%,
                            transparent 60%
                        );

                    transform:
                        translateX(-120%);

                    transition:
                        transform .8s ease;

                    z-index: 2;
                }

                .courses-card:hover
                .courses-thumb::after {
                    transform:
                        translateX(120%);
                }

                .courses-thumb-letter {
                    transition:
                        transform .5s
                        cubic-bezier(.22,1,.36,1);
                }

                .courses-card:hover
                .courses-thumb-letter {
                    transform:
                        scale(1.1);
                }

                /* =================================================
                   SEARCH
                ================================================= */

                .courses-search {
                    transition:
                        border-color .3s ease,
                        box-shadow .3s ease,
                        background-color .3s ease;
                }

                .courses-search:focus-within {
                    border-color:
                        var(--courses-primary);

                    box-shadow:
                        0 0 0 4px
                        var(--courses-blue-soft);
                }

                /* =================================================
                   FILTER
                ================================================= */

                .courses-filter {
                    transition:
                        background-color .3s ease,
                        color .3s ease,
                        border-color .3s ease,
                        transform .3s ease;
                }

                .courses-filter:hover {
                    transform:
                        translateY(-2px);
                }

                /* =================================================
                   STATS
                ================================================= */

                .courses-stat {
                    transition:
                        transform .3s ease,
                        background-color .3s ease;
                }

                .courses-stat:hover {
                    transform:
                        translateY(-4px);

                    background:
                        var(--courses-surface-soft);
                }

                /* =================================================
                   BUTTON
                ================================================= */

                .courses-button {
                    position: relative;
                    overflow: hidden;

                    transition:
                        transform .3s ease,
                        box-shadow .3s ease;
                }

                .courses-button::before {
                    content: "";

                    position: absolute;
                    top: 0;
                    left: -120%;

                    width: 80%;
                    height: 100%;

                    transform:
                        skewX(-20deg);

                    background:
                        rgba(255,255,255,.18);

                    transition:
                        left .7s ease;
                }

                .courses-button:hover::before {
                    left: 140%;
                }

                .courses-button:hover {
                    transform:
                        translateY(-3px);
                }

                /* =================================================
                   CTA
                ================================================= */

                .courses-cta {
                    position: relative;
                    overflow: hidden;
                }

                .courses-cta-orb-one {
                    animation:
                        coursesCtaOne 8s ease-in-out infinite;
                }

                .courses-cta-orb-two {
                    animation:
                        coursesCtaTwo 10s ease-in-out infinite;
                }

                /* =================================================
                   KEYFRAMES
                ================================================= */

                @keyframes coursesOrbOne {

                    0%,
                    100% {
                        transform:
                            translate(0,0);
                    }

                    50% {
                        transform:
                            translate(45px,30px);
                    }
                }

                @keyframes coursesOrbTwo {

                    0%,
                    100% {
                        transform:
                            translate(0,0);
                    }

                    50% {
                        transform:
                            translate(-40px,45px);
                    }
                }

                @keyframes coursesGradient {

                    0%,
                    100% {
                        background-position:
                            0% center;
                    }

                    50% {
                        background-position:
                            100% center;
                    }
                }

                @keyframes coursesCtaOne {

                    0%,
                    100% {
                        transform:
                            translate(0,0);
                    }

                    50% {
                        transform:
                            translate(50px,30px);
                    }
                }

                @keyframes coursesCtaTwo {

                    0%,
                    100% {
                        transform:
                            translate(0,0);
                    }

                    50% {
                        transform:
                            translate(-40px,-25px);
                    }
                }

                /* =================================================
                   REDUCED MOTION
                ================================================= */

                @media (prefers-reduced-motion: reduce) {

                    *,
                    *::before,
                    *::after {
                        animation-duration:
                            .01ms !important;

                        animation-iteration-count:
                            1 !important;

                        transition-duration:
                            .01ms !important;
                    }

                    .courses-reveal,
                    .courses-reveal--left,
                    .courses-reveal--right,
                    .courses-reveal--scale {
                        opacity: 1;
                        transform: none;
                    }
                }

                /* =================================================
                   MOBILE
                ================================================= */

                @media (max-width: 768px) {

                    .courses-reveal {
                        transform:
                            translateY(25px);
                    }

                    .courses-reveal--left,
                    .courses-reveal--right {
                        transform:
                            translateY(25px);
                    }
                }
            `}</style>

            {/* =====================================================
                HERO
            ====================================================== */}

            <section
                className="relative overflow-hidden"
                style={{
                    background: "var(--courses-bg)",
                }}
            >

                {/* Background */}

                <div className="pointer-events-none absolute inset-0">

                    <div
                        className="courses-hero-orb-one absolute -left-40 -top-40 h-96 w-96 rounded-full blur-3xl"
                        style={{
                            background:
                                "var(--courses-blue-soft)",
                            opacity: 0.75,
                        }}
                    />

                    <div
                        className="courses-hero-orb-two absolute -right-40 top-20 h-96 w-96 rounded-full blur-3xl"
                        style={{
                            background:
                                "var(--courses-teal-soft)",
                            opacity: 0.8,
                        }}
                    />

                    <div
                        className="absolute inset-0 opacity-[0.035]"
                        style={{
                            backgroundImage: `
                                linear-gradient(
                                    #64748b 1px,
                                    transparent 1px
                                ),
                                linear-gradient(
                                    90deg,
                                    #64748b 1px,
                                    transparent 1px
                                )
                            `,
                            backgroundSize:
                                "50px 50px",
                        }}
                    />

                </div>

                <div className="relative z-10 mx-auto max-w-6xl px-6 pb-16 pt-20 text-center md:px-10 md:pb-20 md:pt-24">

                    <Reveal>

                        {/* Badge */}

                        <div
                            className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em]"
                            style={{
                                borderColor:
                                    "var(--courses-border)",
                                background:
                                    "var(--courses-blue-soft)",
                                color:
                                    "var(--courses-primary)",
                            }}
                        >

                            <Sparkles
                                className="h-3.5 w-3.5"
                            />

                            Shiyora Courses

                        </div>

                    </Reveal>

                    <Reveal delay={100}>

                        <h1
                            className="mx-auto mt-7 max-w-4xl text-5xl font-extrabold leading-[1.08] tracking-[-2px] sm:text-6xl md:text-[68px]"
                            style={{
                                color:
                                    "var(--courses-heading)",
                            }}
                        >

                            Learn skills.

                            <br />

                            <span className="courses-gradient-text bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">

                                Build your future.

                            </span>

                        </h1>

                    </Reveal>

                    <Reveal delay={180}>

                        <p
                            className="mx-auto mt-7 max-w-2xl text-base leading-8 md:text-lg"
                            style={{
                                color:
                                    "var(--courses-muted)",
                            }}
                        >
                            Explore structured courses designed to
                            help you build practical skills, strengthen
                            your knowledge and grow with Shiyora.
                        </p>

                    </Reveal>

                    {/* Search */}

                    <Reveal delay={260}>

                        <div className="mx-auto mt-9 max-w-xl">

                            <div
                                className="courses-search flex items-center gap-3 rounded-2xl border px-4 py-3.5"
                                style={{
                                    background:
                                        "var(--courses-surface)",
                                    borderColor:
                                        "var(--courses-border)",
                                }}
                            >

                                <Search
                                    className="h-5 w-5 shrink-0"
                                    style={{
                                        color:
                                            "var(--courses-muted)",
                                    }}
                                />

                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) =>
                                        setSearchTerm(
                                            e.target.value
                                        )
                                    }
                                    placeholder="Search courses..."
                                    className="w-full bg-transparent text-sm outline-none"
                                    style={{
                                        color:
                                            "var(--courses-text)",
                                    }}
                                />

                            </div>

                        </div>

                    </Reveal>

                </div>

            </section>

            {/* =====================================================
                STATS
            ====================================================== */}

            <section
                className="border-y"
                style={{
                    background:
                        "var(--courses-surface)",
                    borderColor:
                        "var(--courses-border)",
                }}
            >

                <Reveal>

                    <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">

                        {[
                            [BookOpen, "50+", "Courses"],
                            [Users, "2K+", "Learners"],
                            [PlayCircle, "500+", "Lessons"],
                            [Star, "4.8", "Average Rating"],
                        ].map(
                            ([Icon, value, label], index) => (

                                <div
                                    key={label}
                                    className="courses-stat border-b px-5 py-8 text-center md:border-b-0 md:border-r last:md:border-r-0"
                                    style={{
                                        borderColor:
                                            "var(--courses-border)",
                                    }}
                                >

                                    <Icon
                                        className="mx-auto h-5 w-5"
                                        style={{
                                            color:
                                                "var(--courses-primary)",
                                        }}
                                    />

                                    <p
                                        className="mt-3 text-2xl font-extrabold md:text-3xl"
                                        style={{
                                            color:
                                                "var(--courses-heading)",
                                        }}
                                    >
                                        {value}
                                    </p>

                                    <p
                                        className="mt-1 text-xs font-medium"
                                        style={{
                                            color:
                                                "var(--courses-muted)",
                                        }}
                                    >
                                        {label}
                                    </p>

                                </div>

                            )
                        )}

                    </div>

                </Reveal>

            </section>

            {/* =====================================================
                COURSE SECTION
            ====================================================== */}

            <section
                className="py-24"
                style={{
                    background:
                        "var(--courses-bg)",
                }}
            >

                <div className="mx-auto max-w-7xl px-6 md:px-10">

                    {/* Heading */}

                    <Reveal>

                        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

                            <div>

                                <span
                                    className="text-xs font-bold uppercase tracking-[0.18em]"
                                    style={{
                                        color:
                                            "var(--courses-primary)",
                                    }}
                                >
                                    Explore Learning
                                </span>

                                <h2
                                    className="mt-3 text-3xl font-extrabold md:text-4xl"
                                    style={{
                                        color:
                                            "var(--courses-heading)",
                                    }}
                                >
                                    Find your next course.
                                </h2>

                                <p
                                    className="mt-3 max-w-xl text-sm leading-7"
                                    style={{
                                        color:
                                            "var(--courses-muted)",
                                    }}
                                >
                                    Choose a course that matches
                                    your goals and start building
                                    valuable skills.
                                </p>

                            </div>

                            <div
                                className="text-sm font-semibold"
                                style={{
                                    color:
                                        "var(--courses-muted)",
                                }}
                            >
                                {filteredCourses.length}{" "}
                                {filteredCourses.length === 1
                                    ? "course"
                                    : "courses"}{" "}
                                available
                            </div>

                        </div>

                    </Reveal>

                    {/* =================================================
                        CATEGORY FILTER
                    ================================================== */}

                    <Reveal delay={100}>

                        <div className="mt-10 flex gap-2 overflow-x-auto pb-2">

                            {categories.map(
                                (category) => {

                                    const active =
                                        selectedCategory ===
                                        category;

                                    return (
                                        <button
                                            key={category}
                                            type="button"
                                            onClick={() =>
                                                setSelectedCategory(
                                                    category
                                                )
                                            }
                                            className="courses-filter shrink-0 rounded-full border px-4 py-2 text-xs font-semibold"
                                            style={{
                                                borderColor:
                                                    active
                                                        ? "var(--courses-primary)"
                                                        : "var(--courses-border)",

                                                background:
                                                    active
                                                        ? "var(--courses-primary)"
                                                        : "var(--courses-surface)",

                                                color:
                                                    active
                                                        ? "#ffffff"
                                                        : "var(--courses-text)",
                                            }}
                                        >
                                            {category}
                                        </button>
                                    );
                                }
                            )}

                        </div>

                    </Reveal>

                    {/* =================================================
                        COURSE GRID
                    ================================================== */}

                    {filteredCourses.length > 0 ? (

                        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                            {filteredCourses.map(
                                (course, index) => {

                                    const Icon =
                                        course.icon;

                                    return (

                                        <Reveal
                                            key={
                                                course.title
                                            }
                                            delay={
                                                index * 100
                                            }
                                            variant="scale"
                                        >

                                            <article
                                                className="courses-card group overflow-hidden rounded-2xl border shadow-sm"
                                            >

                                                {/* Thumbnail */}

                                                <div
                                                    className={`courses-thumb relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br ${course.gradient}`}
                                                >

                                                    {/* Decorative circles */}

                                                    <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/10 transition-transform duration-700 group-hover:scale-125" />

                                                    <div className="absolute -bottom-20 -left-12 h-48 w-48 rounded-full bg-white/10 transition-transform duration-700 group-hover:scale-125" />

                                                    {/* Icon */}

                                                    <div className="relative z-10 flex flex-col items-center">

                                                        <Icon
                                                            className="mb-3 h-9 w-9 text-white/90"
                                                        />

                                                        <span className="courses-thumb-letter text-3xl font-extrabold tracking-wider text-white/90">
                                                            {
                                                                course.shortName
                                                            }
                                                        </span>

                                                    </div>

                                                </div>

                                                {/* Content */}

                                                <div
                                                    className="p-6"
                                                    style={{
                                                        background:
                                                            "var(--courses-surface)",
                                                    }}
                                                >

                                                    {/* Category */}

                                                    <div className="flex items-center justify-between gap-3">

                                                        <span
                                                            className="rounded-full px-3 py-1 text-[10px] font-bold"
                                                            style={{
                                                                background:
                                                                    "var(--courses-blue-soft)",
                                                                color:
                                                                    "var(--courses-primary)",
                                                            }}
                                                        >
                                                            {
                                                                course.category
                                                            }
                                                        </span>

                                                        <span
                                                            className="text-[10px] font-medium"
                                                            style={{
                                                                color:
                                                                    "var(--courses-muted)",
                                                            }}
                                                        >
                                                            {
                                                                course.level
                                                            }
                                                        </span>

                                                    </div>

                                                    {/* Title */}

                                                    <h3
                                                        className="mt-4 text-lg font-bold leading-7 transition-colors duration-300"
                                                        style={{
                                                            color:
                                                                "var(--courses-heading)",
                                                        }}
                                                    >
                                                        {
                                                            course.title
                                                        }
                                                    </h3>

                                                    {/* Description */}

                                                    <p
                                                        className="mt-3 min-h-[84px] text-sm leading-6"
                                                        style={{
                                                            color:
                                                                "var(--courses-muted)",
                                                        }}
                                                    >
                                                        {
                                                            course.description
                                                        }
                                                    </p>

                                                    {/* Info */}

                                                    <div
                                                        className="mt-5 grid grid-cols-2 gap-3 border-t pt-4"
                                                        style={{
                                                            borderColor:
                                                                "var(--courses-border)",
                                                        }}
                                                    >

                                                        <div className="flex items-center gap-2">

                                                            <Clock
                                                                className="h-4 w-4"
                                                                style={{
                                                                    color:
                                                                        "var(--courses-primary)",
                                                                }}
                                                            />

                                                            <span
                                                                className="text-xs"
                                                                style={{
                                                                    color:
                                                                        "var(--courses-muted)",
                                                                }}
                                                            >
                                                                {
                                                                    course.duration
                                                                }
                                                            </span>

                                                        </div>

                                                        <div className="flex items-center gap-2">

                                                            <BookOpen
                                                                className="h-4 w-4"
                                                                style={{
                                                                    color:
                                                                        "var(--courses-secondary)",
                                                                }}
                                                            />

                                                            <span
                                                                className="text-xs"
                                                                style={{
                                                                    color:
                                                                        "var(--courses-muted)",
                                                                }}
                                                            >
                                                                {
                                                                    course.lessons
                                                                }
                                                            </span>

                                                        </div>

                                                    </div>

                                                    {/* Students */}

                                                    <div className="mt-3 flex items-center gap-2">

                                                        <Users
                                                            className="h-4 w-4"
                                                            style={{
                                                                color:
                                                                    "var(--courses-secondary)",
                                                            }}
                                                        />

                                                        <span
                                                            className="text-xs"
                                                            style={{
                                                                color:
                                                                    "var(--courses-muted)",
                                                            }}
                                                        >
                                                            {
                                                                course.students
                                                            }
                                                        </span>

                                                    </div>

                                                    {/* Button */}

                                                    <button
                                                        type="button"
                                                        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-bold transition-all duration-300 group-hover:-translate-y-0.5"
                                                        style={{
                                                            borderColor:
                                                                "var(--courses-border)",
                                                            background:
                                                                "var(--courses-surface-soft)",
                                                            color:
                                                                "var(--courses-text)",
                                                        }}
                                                    >

                                                        View Course

                                                        <ArrowRight
                                                            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                                                        />

                                                    </button>

                                                </div>

                                            </article>

                                        </Reveal>

                                    );
                                }
                            )}

                        </div>

                    ) : (

                        /* =================================================
                           NO RESULTS
                        ================================================== */

                        <Reveal>

                            <div
                                className="mt-10 rounded-2xl border p-12 text-center"
                                style={{
                                    background:
                                        "var(--courses-surface)",
                                    borderColor:
                                        "var(--courses-border)",
                                }}
                            >

                                <Search
                                    className="mx-auto h-10 w-10"
                                    style={{
                                        color:
                                            "var(--courses-muted)",
                                    }}
                                />

                                <h3
                                    className="mt-5 text-xl font-bold"
                                    style={{
                                        color:
                                            "var(--courses-heading)",
                                    }}
                                >
                                    No courses found
                                </h3>

                                <p
                                    className="mt-2 text-sm"
                                    style={{
                                        color:
                                            "var(--courses-muted)",
                                    }}
                                >
                                    Try another search term or
                                    choose a different category.
                                </p>

                                <button
                                    type="button"
                                    onClick={() => {
                                        setSearchTerm("");
                                        setSelectedCategory(
                                            "All"
                                        );
                                    }}
                                    className="mt-6 rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5"
                                >
                                    Clear Filters
                                </button>

                            </div>

                        </Reveal>

                    )}

                </div>

            </section>

            {/* =====================================================
                LEARNING BENEFITS
            ====================================================== */}

            <section
                className="border-y py-20"
                style={{
                    background:
                        "var(--courses-surface)",
                    borderColor:
                        "var(--courses-border)",
                }}
            >

                <div className="mx-auto max-w-6xl px-6 md:px-10">

                    <Reveal>

                        <div className="mx-auto max-w-2xl text-center">

                            <span
                                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em]"
                                style={{
                                    color:
                                        "var(--courses-primary)",
                                }}
                            >

                                <CheckCircle2
                                    className="h-4 w-4"
                                />

                                Learn With Shiyora

                            </span>

                            <h2
                                className="mt-3 text-3xl font-extrabold md:text-4xl"
                                style={{
                                    color:
                                        "var(--courses-heading)",
                                }}
                            >
                                Built for meaningful learning.
                            </h2>

                            <p
                                className="mt-4 leading-7"
                                style={{
                                    color:
                                        "var(--courses-muted)",
                                }}
                            >
                                Learn through structured content,
                                track your progress and develop
                                practical skills at your own pace.
                            </p>

                        </div>

                    </Reveal>

                    <div className="mt-12 grid gap-5 md:grid-cols-3">

                        {[
                            {
                                icon: BookOpen,
                                title: "Structured Learning",
                                text:
                                    "Follow organized courses and lessons designed to make learning easier.",
                            },
                            {
                                icon: PlayCircle,
                                title: "Learn at Your Pace",
                                text:
                                    "Access lessons and educational resources whenever you are ready to learn.",
                            },
                            {
                                icon: CheckCircle2,
                                title: "Track Your Progress",
                                text:
                                    "Keep track of completed lessons and continue improving consistently.",
                            },
                        ].map(
                            (
                                benefit,
                                index
                            ) => {

                                const Icon =
                                    benefit.icon;

                                return (

                                    <Reveal
                                        key={
                                            benefit.title
                                        }
                                        delay={
                                            index * 120
                                        }
                                        variant="scale"
                                    >

                                        <div
                                            className="courses-card h-full rounded-2xl border p-7 shadow-sm"
                                        >

                                            <div
                                                className="flex h-12 w-12 items-center justify-center rounded-xl"
                                                style={{
                                                    background:
                                                        "var(--courses-blue-soft)",
                                                    color:
                                                        "var(--courses-primary)",
                                                }}
                                            >

                                                <Icon className="h-6 w-6" />

                                            </div>

                                            <h3
                                                className="mt-6 text-lg font-bold"
                                                style={{
                                                    color:
                                                        "var(--courses-heading)",
                                                }}
                                            >
                                                {
                                                    benefit.title
                                                }
                                            </h3>

                                            <p
                                                className="mt-3 text-sm leading-7"
                                                style={{
                                                    color:
                                                        "var(--courses-muted)",
                                                }}
                                            >
                                                {
                                                    benefit.text
                                                }
                                            </p>

                                        </div>

                                    </Reveal>

                                );
                            }
                        )}

                    </div>

                </div>

            </section>

            {/* =====================================================
                CTA
            ====================================================== */}

            <section
                className="py-24"
                style={{
                    background:
                        "var(--courses-bg)",
                }}
            >

                <div className="mx-auto max-w-6xl px-6 md:px-10">

                    <Reveal variant="scale">

                        <div className="courses-cta rounded-3xl bg-gradient-to-br from-blue-600 via-blue-600 to-teal-500 px-8 py-16 text-center shadow-2xl shadow-blue-600/20 md:px-16">

                            {/* Glow */}

                            <div className="courses-cta-orb-one pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/10" />

                            <div className="courses-cta-orb-two pointer-events-none absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-white/10" />

                            <div className="relative z-10">

                                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-100">

                                    <Sparkles
                                        className="h-4 w-4"
                                    />

                                    Start Your Journey

                                </span>

                                <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold text-white md:text-4xl">

                                    Ready to start learning?

                                </h2>

                                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-blue-100 md:text-base">

                                    Create your Shiyora account,
                                    choose a course and start
                                    building skills for your future.

                                </p>

                                <div className="mt-8 flex flex-wrap justify-center gap-4">

                                    <Link
                                        to="/signup"
                                        className="courses-button group inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-blue-600 shadow-lg"
                                    >

                                        <span className="relative z-10">
                                            Create Your Account
                                        </span>

                                        <ArrowRight
                                            className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                                        />

                                    </Link>

                                    <Link
                                        to="/subscription"
                                        className="inline-flex items-center rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
                                    >
                                        Explore Plans
                                    </Link>

                                </div>

                            </div>

                        </div>

                    </Reveal>

                </div>

            </section>

            {/* =====================================================
                BOTTOM GRADIENT
            ====================================================== */}

            <div className="h-2 bg-linear-to-r from-blue-600 to-teal-500" />

        </main>
    );
}

export default Courses;