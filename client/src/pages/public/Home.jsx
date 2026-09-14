import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

/* =========================================================
   GOOGLE FONTS
========================================================= */

const FONT_IMPORTS = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
`;

/* =========================================================
   ICONS
========================================================= */

function ArrowIcon({ className = "" }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
        </svg>
    );
}

function PlayIcon({ className = "" }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
        >
            <path d="M8 5v14l11-7L8 5Z" />
        </svg>
    );
}

function BookIcon({ className = "" }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z" />
            <path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20" />
        </svg>
    );
}

function UsersIcon({ className = "" }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    );
}

function ChartIcon({ className = "" }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M4 19V9" />
            <path d="M10 19V5" />
            <path d="M16 19v-7" />
            <path d="M22 19H2" />
        </svg>
    );
}

function CheckIcon({ className = "" }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="m5 12 4 4L19 6" />
        </svg>
    );
}

function SparkIcon({ className = "" }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M12 3v3" />
            <path d="M12 18v3" />
            <path d="M3 12h3" />
            <path d="M18 12h3" />
            <path d="m5.6 5.6 2.1 2.1" />
            <path d="m16.3 16.3 2.1 2.1" />
            <path d="m18.4 5.6-2.1 2.1" />
            <path d="m7.7 16.3-2.1 2.1" />
        </svg>
    );
}

/* =========================================================
   REVEAL COMPONENT
========================================================= */

function Reveal({ children, className = "", delay = 0, variant = "up" }) {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    element.classList.add("shiyora-reveal-visible");
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
        variant !== "up" ? `shiyora-reveal--${variant}` : "";

    return (
        <div
            ref={ref}
            className={`shiyora-reveal ${variantClass} ${className}`}
            style={{ "--reveal-delay": `${delay}ms` }}
        >
            {children}
        </div>
    );
}

/* =========================================================
   REVEAL WORDS (headline rises in a word at a time)
========================================================= */

function RevealWords({ children, className = "", delay = 0, stagger = 55 }) {
    const ref = useRef(null);
    const words = String(children).trim().split(/\s+/).filter(Boolean);

    useEffect(() => {
        const element = ref.current;

        if (!element) return;

        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (reduceMotion) {
            element.setAttribute("data-revealed", "");
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    element.setAttribute("data-revealed", "");
                    observer.unobserve(element);
                }
            },
            {
                threshold: 0.4,
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <span ref={ref} className={`reveal-words ${className}`}>
            {words.map((word, index) => (
                <span className="reveal-words__mask" key={`${word}-${index}`}>
                    <span
                        className="reveal-words__word"
                        style={{
                            "--word-delay": `${delay + index * stagger}ms`,
                        }}
                    >
                        {word}
                    </span>
                </span>
            ))}
        </span>
    );
}

/* =========================================================
   COUNT UP (numbers animate up the first time they're seen)
========================================================= */

function CountUp({ value, duration = 1600 }) {
    const ref = useRef(null);
    const match = String(value).match(/^(\d+(?:\.\d+)?)/);
    const [display, setDisplay] = useState(
        match ? value.replace(match[0], "0") : value
    );

    useEffect(() => {
        const element = ref.current;

        if (!element || !match) return;

        const target = parseFloat(match[1]);
        const suffix = value.slice(match[0].length);
        const decimals = match[1].includes(".")
            ? match[1].split(".")[1].length
            : 0;

        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (reduceMotion) {
            setDisplay(value);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;

                let start = 0;

                const step = (timestamp) => {
                    if (!start) start = timestamp;

                    const progress = Math.min(1, (timestamp - start) / duration);
                    const eased = 1 - Math.pow(1 - progress, 3);

                    setDisplay(`${(target * eased).toFixed(decimals)}${suffix}`);

                    if (progress < 1) requestAnimationFrame(step);
                };

                requestAnimationFrame(step);
                observer.disconnect();
            },
            { threshold: 0.6 }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [value, duration]);

    return (
        <span ref={ref} className="tabular-nums">
            {display}
        </span>
    );
}

/* =========================================================
   HOME
========================================================= */

function Home() {
    const features = [
        {
            icon: BookIcon,
            title: "Structured Courses",
            text: "Learn through organized courses, lessons and study resources.",
        },
        {
            icon: UsersIcon,
            title: "Expert Learning",
            text: "Learn from instructors and access quality educational content.",
        },
        {
            icon: ChartIcon,
            title: "Track Progress",
            text: "Monitor your learning progress and improve consistently.",
        },
    ];

    const courses = [
        {
            title: "Full Stack Web Development",
            category: "Development",
            lessons: "42 Lessons",
            level: "Beginner",
            icon: "WEB",
        },
        {
            title: "Java Programming",
            category: "Programming",
            lessons: "36 Lessons",
            level: "Intermediate",
            icon: "JAVA",
        },
        {
            title: "UI/UX Design",
            category: "Design",
            lessons: "28 Lessons",
            level: "Beginner",
            icon: "UI",
        },
    ];

    const steps = [
        {
            number: "01",
            title: "Create your account",
            text: "Sign up and create your personal learning profile.",
        },
        {
            number: "02",
            title: "Choose your course",
            text: "Explore courses and find the skills you want to develop.",
        },
        {
            number: "03",
            title: "Start learning",
            text: "Learn at your own pace and track your progress.",
        },
    ];

    return (
        <main className="shiyora-home min-h-screen overflow-hidden">

            <style>{`
                ${FONT_IMPORTS}

                /* =================================================
                   THEME
                ================================================= */

                .shiyora-home {
                    --home-bg: var(--shiyora-bg);
                    --home-surface: var(--shiyora-surface);
                    --home-surface-soft: var(--shiyora-surface-soft);
                    --home-text: var(--shiyora-text);
                    --home-heading: var(--shiyora-heading);
                    --home-muted: var(--shiyora-muted);
                    --home-border: var(--shiyora-border);
                    --home-primary: var(--shiyora-primary);
                    --home-primary-hover: var(--shiyora-primary-hover);
                    --home-secondary: var(--shiyora-secondary);
                    --home-blue-soft: var(--shiyora-blue-soft);
                    --home-teal-soft: var(--shiyora-teal-soft);
                }

                .shiyora-home {
                    font-family: 'Inter', sans-serif;
                    background: var(--home-bg);
                    color: var(--home-text);
                    transition:
                        background-color .35s ease,
                        color .35s ease;
                }

                .shiyora-home h1,
                .shiyora-home h2,
                .shiyora-home h3,
                .shiyora-home h4 {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                }

                /* =================================================
                   REVEAL
                ================================================= */

                .shiyora-reveal {
                    opacity: 0;
                    transform: translateY(45px);
                    transition:
                        opacity .9s cubic-bezier(.22,1,.36,1),
                        transform .9s cubic-bezier(.22,1,.36,1);
                    transition-delay: var(--reveal-delay);
                }

                .shiyora-reveal-visible {
                    opacity: 1;
                    transform: none;
                }

                .shiyora-reveal--left {
                    transform: translateX(-48px);
                }

                .shiyora-reveal--right {
                    transform: translateX(48px);
                }

                .shiyora-reveal--down {
                    transform: translateY(-40px);
                }

                .shiyora-reveal--scale {
                    transform:
                        translateY(24px)
                        scale(.92);
                }

                /* =================================================
                   REVEAL WORDS
                   Word-by-word headline reveal. The mask is padded on
                   both edges (and pulled back with a negative margin)
                   so ascenders/descenders on display type aren't
                   clipped by overflow:hidden.
                ================================================= */

                .reveal-words {
                    display: inline;
                }

                .reveal-words__mask {
                    display: inline-block;
                    overflow: hidden;
                    vertical-align: bottom;
                    padding: 0.18em 0.05em 0.3em;
                    margin: -0.18em -0.05em -0.3em;
                }

                .reveal-words__word {
                    display: inline-block;
                    will-change: transform;
                    transition: transform .9s cubic-bezier(.22,1,.36,1);
                    transition-delay: var(--word-delay, 0ms);
                    transform: translate3d(0, 108%, 0);
                }

                .reveal-words[data-revealed] .reveal-words__word {
                    transform: none;
                }

                /* =================================================
                   HERO
                ================================================= */

                .hero-content {
                    animation:
                        heroContent 1s cubic-bezier(.22,1,.36,1) both;
                }

                .hero-dashboard-wrap {
                    animation:
                        dashboardEntrance 1.1s cubic-bezier(.22,1,.36,1) .2s both;
                }

                .hero-dashboard {
                    animation:
                        dashboardFloat 6s ease-in-out 1.4s infinite;
                }

                .hero-badge {
                    animation:
                        fadeUp .7s cubic-bezier(.22,1,.36,1) .2s both;
                }

                .hero-heading {
                    animation:
                        fadeUp .8s cubic-bezier(.22,1,.36,1) .35s both;
                }

                .hero-description {
                    animation:
                        fadeUp .8s cubic-bezier(.22,1,.36,1) .5s both;
                }

                .hero-buttons {
                    animation:
                        fadeUp .8s cubic-bezier(.22,1,.36,1) .65s both;
                }

                .hero-trust {
                    animation:
                        fadeUp .8s cubic-bezier(.22,1,.36,1) .8s both;
                }

                .gradient-text-shimmer {
                    background-size: 200% auto;
                    animation: gradientShimmer 5s ease-in-out 1.2s infinite;
                }

                /* =================================================
                   ORBS
                ================================================= */

                .floating-orb-one {
                    animation: floatOrbOne 10s ease-in-out infinite;
                }

                .floating-orb-two {
                    animation: floatOrbTwo 12s ease-in-out infinite;
                }

                .floating-orb-three {
                    animation: floatOrbThree 9s ease-in-out infinite;
                }

                /* =================================================
                   DASHBOARD
                ================================================= */

                .dashboard-ring {
                    animation: rotateRing 8s linear infinite;
                }

                .dashboard-progress {
                    animation:
                        progressGrow 1.8s cubic-bezier(.65,0,.35,1) .8s both;
                }

                .course-progress-one {
                    animation:
                        courseProgressOne 1.5s cubic-bezier(.65,0,.35,1) 1.2s both;
                }

                .course-progress-two {
                    animation:
                        courseProgressTwo 1.5s cubic-bezier(.65,0,.35,1) 1.35s both;
                }

                .course-progress-three {
                    animation:
                        courseProgressThree 1.5s cubic-bezier(.65,0,.35,1) 1.5s both;
                }

                /* =================================================
                   CARDS
                ================================================= */

                .shiyora-card {
                    background: var(--home-surface);
                    border-color: var(--home-border);

                    transition:
                        transform .4s cubic-bezier(.22,1,.36,1),
                        box-shadow .4s ease,
                        border-color .4s ease,
                        background-color .35s ease;
                }

                .shiyora-card:hover {
                    transform: translateY(-8px);
                    box-shadow:
                        0 25px 60px rgba(15,23,42,.10);
                }

                html.dark .shiyora-card:hover {
                    box-shadow:
                        0 25px 60px rgba(0,0,0,.35);
                }

                .course-card {
                    background: var(--home-surface);

                    transition:
                        transform .45s cubic-bezier(.22,1,.36,1),
                        box-shadow .45s ease,
                        border-color .4s ease,
                        background-color .35s ease;
                }

                .course-card:hover {
                    transform: translateY(-10px);
                    box-shadow:
                        0 30px 70px rgba(15,23,42,.12);
                }

                html.dark .course-card:hover {
                    box-shadow:
                        0 30px 70px rgba(0,0,0,.4);
                }

                .course-card:hover .course-arrow {
                    transform: translateX(5px);
                }

                .course-arrow {
                    transition: transform .3s ease;
                }

                .course-thumb {
                    position: relative;
                }

                .course-thumb::after {
                    content: "";
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        115deg,
                        transparent 20%,
                        rgba(255,255,255,.35) 40%,
                        transparent 60%
                    );
                    transform: translateX(-120%);
                    transition: transform .8s ease;
                }

                .course-card:hover .course-thumb::after {
                    transform: translateX(120%);
                }

                /* =================================================
                   BUTTON
                ================================================= */

                .shiyora-button {
                    position: relative;
                    overflow: hidden;

                    transition:
                        transform .3s ease,
                        box-shadow .3s ease,
                        background .3s ease;
                }

                .shiyora-button::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: -120%;
                    width: 80%;
                    height: 100%;
                    transform: skewX(-20deg);
                    background: rgba(255,255,255,.18);
                    transition: left .7s ease;
                }

                .shiyora-button:hover::before {
                    left: 140%;
                }

                .shiyora-button:hover {
                    transform: translateY(-3px);
                }

                /* =================================================
                   STATS
                ================================================= */

                .stat-item {
                    transition:
                        background-color .3s ease,
                        transform .3s ease;
                }

                .stat-item:hover {
                    background: var(--home-surface-soft);
                    transform: translateY(-3px);
                }

                /* =================================================
                   STEP
                ================================================= */

                .step-number {
                    transition:
                        transform .4s cubic-bezier(.22,1,.36,1),
                        box-shadow .4s ease;
                }

                .step-card:hover .step-number {
                    transform: translateY(-5px) rotate(-3deg);
                    box-shadow:
                        0 15px 30px rgba(37,99,235,.22);
                }

                /* =================================================
                   CTA
                ================================================= */

                .cta-section {
                    position: relative;
                    overflow: hidden;
                }

                .cta-glow-one {
                    animation: ctaGlowOne 8s ease-in-out infinite;
                }

                .cta-glow-two {
                    animation: ctaGlowTwo 10s ease-in-out infinite;
                }

                /* =================================================
                   KEYFRAMES
                ================================================= */

                @keyframes lineGrow {
                    from {
                        transform: scaleX(0);
                        opacity: 0;
                    }

                    to {
                        transform: scaleX(1);
                        opacity: 1;
                    }
                }

                @keyframes fadeUp {
                    from {
                        opacity: 0;
                        transform: translateY(35px);
                    }

                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes heroContent {
                    from {
                        opacity: 0;
                        transform: translateX(-35px);
                    }

                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes dashboardEntrance {
                    from {
                        opacity: 0;
                        transform:
                            translateX(45px)
                            scale(.94);
                    }

                    to {
                        opacity: 1;
                        transform:
                            translateX(0)
                            scale(1);
                    }
                }

                @keyframes dashboardFloat {
                    0%,
                    100% {
                        transform: translateY(0);
                    }

                    50% {
                        transform: translateY(-10px);
                    }
                }

                @keyframes floatOrbOne {
                    0%,
                    100% {
                        transform: translate(0,0);
                    }

                    50% {
                        transform: translate(50px,35px);
                    }
                }

                @keyframes floatOrbTwo {
                    0%,
                    100% {
                        transform: translate(0,0);
                    }

                    50% {
                        transform: translate(-40px,45px);
                    }
                }

                @keyframes floatOrbThree {
                    0%,
                    100% {
                        transform: translateX(0);
                    }

                    50% {
                        transform: translateX(60px);
                    }
                }

                @keyframes rotateRing {
                    from {
                        transform: rotate(0deg);
                    }

                    to {
                        transform: rotate(360deg);
                    }
                }

                @keyframes progressGrow {
                    from {
                        width: 0;
                    }

                    to {
                        width: 72%;
                    }
                }

                @keyframes courseProgressOne {
                    from {
                        width: 0;
                    }

                    to {
                        width: 68%;
                    }
                }

                @keyframes courseProgressTwo {
                    from {
                        width: 0;
                    }

                    to {
                        width: 45%;
                    }
                }

                @keyframes courseProgressThree {
                    from {
                        width: 0;
                    }

                    to {
                        width: 82%;
                    }
                }

                @keyframes ctaGlowOne {
                    0%,
                    100% {
                        transform: translate(0,0);
                    }

                    50% {
                        transform: translate(50px,30px);
                    }
                }

                @keyframes gradientShimmer {
                    0%,
                    100% {
                        background-position: 0% center;
                    }

                    50% {
                        background-position: 100% center;
                    }
                }

                @keyframes ctaGlowTwo {
                    0%,
                    100% {
                        transform: translate(0,0);
                    }

                    50% {
                        transform: translate(-40px,-25px);
                    }
                }

                /* =================================================
                   REDUCED MOTION
                ================================================= */

                @media (prefers-reduced-motion: reduce) {
                    *,
                    *::before,
                    *::after {
                        animation-duration: .01ms !important;
                        animation-iteration-count: 1 !important;
                        transition-duration: .01ms !important;
                        scroll-behavior: auto !important;
                    }

                    .shiyora-reveal,
                    .shiyora-reveal--left,
                    .shiyora-reveal--right,
                    .shiyora-reveal--down,
                    .shiyora-reveal--scale {
                        opacity: 1;
                        transform: none;
                    }

                    .reveal-words__word {
                        transform: none;
                    }
                }

                /* =================================================
                   MOBILE
                ================================================= */

                @media (max-width: 768px) {
                    .hero-dashboard {
                        animation:
                            dashboardFloat 6s ease-in-out 1.4s infinite;
                    }

                    .hero-dashboard-wrap {
                        animation:
                            dashboardEntrance 1s cubic-bezier(.22,1,.36,1) .2s both;
                    }

                    .shiyora-reveal {
                        transform: translateY(25px);
                    }
                }
            `}</style>

            {/* =====================================================
                HERO
            ====================================================== */}

            <section
                className="relative overflow-hidden"
                style={{
                    background: "var(--home-bg)",
                }}
            >

                {/* Background */}

                <div className="pointer-events-none absolute inset-0">

                    <div
                        className="floating-orb-one absolute -left-40 -top-40 h-96 w-96 rounded-full blur-3xl"
                        style={{
                            background: "var(--home-blue-soft)",
                            opacity: 0.75,
                        }}
                    />

                    <div
                        className="floating-orb-two absolute -right-40 top-20 h-96 w-96 rounded-full blur-3xl"
                        style={{
                            background: "var(--home-teal-soft)",
                            opacity: 0.8,
                        }}
                    />

                    <div
                        className="floating-orb-three absolute bottom-0 left-1/2 h-60 w-96 -translate-x-1/2 rounded-full blur-3xl"
                        style={{
                            background: "var(--home-blue-soft)",
                            opacity: 0.55,
                        }}
                    />

                    <div
                        className="absolute inset-0 opacity-[0.035]"
                        style={{
                            backgroundImage: `
                                linear-gradient(#64748b 1px, transparent 1px),
                                linear-gradient(90deg, #64748b 1px, transparent 1px)
                            `,
                            backgroundSize: "50px 50px",
                        }}
                    />

                </div>

                <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 md:px-10 lg:grid-cols-2 lg:gap-20 lg:py-28">

                    {/* =================================================
                        HERO LEFT
                    ================================================= */}

                    <div className="hero-content">

                        <div
                            className="hero-badge inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em]"
                            style={{
                                borderColor: "var(--home-border)",
                                background: "var(--home-blue-soft)",
                                color: "var(--home-primary)",
                            }}
                        >

                            <span
                                className="h-2 w-2 animate-pulse rounded-full"
                                style={{
                                    background: "var(--home-primary)",
                                }}
                            />

                            Smart Learning Platform

                        </div>

                        <h1
                            className="hero-heading mt-7 max-w-3xl text-5xl font-extrabold leading-[1.08] tracking-[-2.5px] sm:text-6xl lg:text-[68px]"
                            style={{
                                color: "var(--home-heading)",
                            }}
                        >

                            <RevealWords delay={150}>
                                Learn skills.
                            </RevealWords>

                            <br />

                            <span className="gradient-text-shimmer bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                                <RevealWords delay={380}>
                                    Build your future.
                                </RevealWords>
                            </span>

                        </h1>

                        <p
                            className="hero-description mt-7 max-w-xl text-base leading-8 md:text-lg"
                            style={{
                                color: "var(--home-muted)",
                            }}
                        >
                            Shiyora is an all-in-one learning platform
                            designed to help students learn new skills,
                            explore courses and track their progress
                            in one place.
                        </p>

                        <div className="hero-buttons mt-9 flex flex-wrap gap-4">

                            <Link
                                to="/course"
                                className="shiyora-button group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 hover:shadow-teal-500/20"
                            >

                                <span className="relative z-10">
                                    Explore Courses
                                </span>

                                <ArrowIcon className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />

                            </Link>

                            <Link
                                to="/about"
                                className="group inline-flex items-center gap-2 rounded-xl border px-7 py-3.5 text-sm font-semibold shadow-sm transition-all duration-300 hover:-translate-y-1"
                                style={{
                                    borderColor: "var(--home-border)",
                                    background: "var(--home-surface)",
                                    color: "var(--home-text)",
                                }}
                            >

                                <span
                                    className="flex h-6 w-6 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                                    style={{
                                        background: "var(--home-blue-soft)",
                                        color: "var(--home-primary)",
                                    }}
                                >

                                    <PlayIcon className="ml-0.5 h-3 w-3" />

                                </span>

                                How It Works

                            </Link>

                        </div>

                        <div
                            className="hero-trust mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs font-medium"
                            style={{
                                color: "var(--home-muted)",
                            }}
                        >

                            <span className="flex items-center gap-2">
                                <CheckIcon
                                    className="h-4 w-4"
                                    style={{
                                        color: "var(--home-primary)",
                                    }}
                                />
                                Structured Learning
                            </span>

                            <span className="flex items-center gap-2">
                                <CheckIcon
                                    className="h-4 w-4"
                                    style={{
                                        color: "var(--home-secondary)",
                                    }}
                                />
                                Progress Tracking
                            </span>

                            <span className="flex items-center gap-2">
                                <CheckIcon
                                    className="h-4 w-4"
                                    style={{
                                        color: "var(--home-primary)",
                                    }}
                                />
                                Learn Anywhere
                            </span>

                        </div>

                    </div>

                    {/* =================================================
                        DASHBOARD
                    ================================================= */}

                    <div className="hero-dashboard-wrap relative flex justify-center lg:justify-end">

                        <div
                            className="absolute h-96 w-96 rounded-full blur-3xl"
                            style={{
                                background: "var(--home-blue-soft)",
                                opacity: 0.8,
                            }}
                        />

                        <div
                            className="hero-dashboard relative w-full max-w-[500px] rounded-3xl border p-4"
                            style={{
                                background: "var(--home-surface)",
                                borderColor: "var(--home-border)",
                                boxShadow:
                                    "0 30px 80px rgba(15,23,42,.12)",
                            }}
                        >

                            {/* Browser */}

                            <div
                                className="flex items-center justify-between border-b px-3 pb-4"
                                style={{
                                    borderColor: "var(--home-border)",
                                }}
                            >

                                <div className="flex items-center gap-2">

                                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-teal-500 text-sm font-bold text-white">
                                        S
                                    </div>

                                    <div>

                                        <p
                                            className="text-xs font-bold"
                                            style={{
                                                color: "var(--home-heading)",
                                            }}
                                        >
                                            Shiyora
                                        </p>

                                        <p
                                            className="text-[10px]"
                                            style={{
                                                color: "var(--home-muted)",
                                            }}
                                        >
                                            Learning Dashboard
                                        </p>

                                    </div>

                                </div>

                                <div className="flex gap-1.5">

                                    <span
                                        className="h-2 w-2 rounded-full"
                                        style={{
                                            background: "var(--home-border)",
                                        }}
                                    />

                                    <span
                                        className="h-2 w-2 rounded-full"
                                        style={{
                                            background: "var(--home-border)",
                                        }}
                                    />

                                    <span
                                        className="h-2 w-2 rounded-full"
                                        style={{
                                            background: "var(--home-border)",
                                        }}
                                    />

                                </div>

                            </div>

                            <div className="p-3 md:p-5">

                                {/* Welcome */}

                                <div className="flex items-center justify-between">

                                    <div>

                                        <p
                                            className="text-xs font-medium"
                                            style={{
                                                color: "var(--home-muted)",
                                            }}
                                        >
                                            Welcome back
                                        </p>

                                        <h2
                                            className="mt-1 text-xl font-bold"
                                            style={{
                                                color: "var(--home-heading)",
                                            }}
                                        >
                                            Continue Learning
                                        </h2>

                                    </div>

                                    <div
                                        className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold"
                                        style={{
                                            background: "var(--home-blue-soft)",
                                            color: "var(--home-primary)",
                                        }}
                                    >
                                        M
                                    </div>

                                </div>

                                {/* Stats */}

                                <div className="mt-6 grid grid-cols-3 gap-3">

                                    {[
                                        ["Courses", "12"],
                                        ["Progress", "72%"],
                                        ["Completed", "04"],
                                    ].map(([label, value], index) => (

                                        <div
                                            key={label}
                                            className="shiyora-card rounded-2xl border p-4"
                                            style={{
                                                animationDelay: `${index * 120}ms`,
                                            }}
                                        >

                                            <p
                                                className="text-[10px] font-medium"
                                                style={{
                                                    color: "var(--home-muted)",
                                                }}
                                            >
                                                {label}
                                            </p>

                                            <p
                                                className="mt-2 text-xl font-bold"
                                                style={{
                                                    color: "var(--home-heading)",
                                                }}
                                            >
                                                {value}
                                            </p>

                                        </div>

                                    ))}

                                </div>

                                {/* Overall Progress */}

                                <div className="shiyora-card mt-4 rounded-2xl border p-5">

                                    <div className="flex items-center justify-between">

                                        <div>

                                            <p
                                                className="text-xs font-medium"
                                                style={{
                                                    color: "var(--home-muted)",
                                                }}
                                            >
                                                Overall Progress
                                            </p>

                                            <p
                                                className="mt-1 text-2xl font-bold"
                                                style={{
                                                    color: "var(--home-heading)",
                                                }}
                                            >
                                                72%
                                            </p>

                                        </div>

                                        <div className="relative flex h-14 w-14 items-center justify-center">

                                            <div
                                                className="dashboard-ring absolute inset-0 rounded-full border-4"
                                                style={{
                                                    borderColor: "var(--home-border)",
                                                    borderTopColor: "var(--home-primary)",
                                                }}
                                            />

                                            <span
                                                className="relative text-xs font-bold"
                                                style={{
                                                    color: "var(--home-primary)",
                                                }}
                                            >
                                                72%
                                            </span>

                                        </div>

                                    </div>

                                    <div
                                        className="mt-5 h-2 overflow-hidden rounded-full"
                                        style={{
                                            background: "var(--home-border)",
                                        }}
                                    >

                                        <div className="dashboard-progress h-full rounded-full bg-gradient-to-r from-blue-600 to-teal-500" />

                                    </div>

                                </div>

                                {/* Continue Learning */}

                                <div className="mt-5">

                                    <div className="mb-3 flex items-center justify-between">

                                        <h3
                                            className="text-sm font-bold"
                                            style={{
                                                color: "var(--home-heading)",
                                            }}
                                        >
                                            Continue Learning
                                        </h3>

                                        <span
                                            className="cursor-pointer text-xs font-semibold"
                                            style={{
                                                color: "var(--home-primary)",
                                            }}
                                        >
                                            View all
                                        </span>

                                    </div>

                                    <div className="space-y-3">

                                        {[
                                            ["React Development", "68%", "blue"],
                                            ["Java Programming", "45%", "teal"],
                                            ["UI/UX Design", "82%", "sky"],
                                        ].map(([title, progress, color], index) => (

                                            <div
                                                key={title}
                                                className="shiyora-card flex items-center gap-3 rounded-xl border p-3"
                                                style={{
                                                    animationDelay: `${index * 150}ms`,
                                                }}
                                            >

                                                <div
                                                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                                                    style={{
                                                        background:
                                                            color === "teal"
                                                                ? "var(--home-teal-soft)"
                                                                : "var(--home-blue-soft)",
                                                        color:
                                                            color === "teal"
                                                                ? "var(--home-secondary)"
                                                                : "var(--home-primary)",
                                                    }}
                                                >

                                                    <BookIcon className="h-5 w-5" />

                                                </div>

                                                <div className="min-w-0 flex-1">

                                                    <p
                                                        className="truncate text-xs font-semibold"
                                                        style={{
                                                            color: "var(--home-text)",
                                                        }}
                                                    >
                                                        {title}
                                                    </p>

                                                    <div
                                                        className="mt-2 h-1.5 overflow-hidden rounded-full"
                                                        style={{
                                                            background:
                                                                "var(--home-border)",
                                                        }}
                                                    >

                                                        <div
                                                            className={`h-full rounded-full bg-gradient-to-r from-blue-600 to-teal-500 ${color === "blue"
                                                                ? "course-progress-one"
                                                                : color === "teal"
                                                                    ? "course-progress-two"
                                                                    : "course-progress-three"
                                                                }`}
                                                        />

                                                    </div>

                                                </div>

                                                <span
                                                    className="text-[10px] font-bold"
                                                    style={{
                                                        color: "var(--home-muted)",
                                                    }}
                                                >
                                                    {progress}
                                                </span>

                                            </div>

                                        ))}

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* =====================================================
                STATS
            ====================================================== */}

            <section
                className="border-y"
                style={{
                    background: "var(--home-surface)",
                    borderColor: "var(--home-border)",
                }}
            >

                <Reveal>

                    <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">

                        {[
                            ["10+", "Learning Categories"],
                            ["100+", "Learning Resources"],
                            ["24/7", "Access"],
                            ["100%", "Progress Tracking"],
                        ].map(([value, label], index) => (

                            <div
                                key={label}
                                className="stat-item border-b px-5 py-8 text-center md:border-b-0 md:border-r last:md:border-r-0"
                                style={{
                                    borderColor: "var(--home-border)",
                                    transitionDelay: `${index * 80}ms`,
                                }}
                            >

                                <p
                                    className="text-2xl font-extrabold md:text-3xl"
                                    style={{
                                        color: "var(--home-primary)",
                                    }}
                                >
                                    <CountUp value={value} />
                                </p>

                                <p
                                    className="mt-1 text-xs font-medium"
                                    style={{
                                        color: "var(--home-muted)",
                                    }}
                                >
                                    {label}
                                </p>

                            </div>

                        ))}

                    </div>

                </Reveal>

            </section>

            {/* =====================================================
                FEATURES
            ====================================================== */}

            <section
                className="py-24"
                style={{
                    background: "var(--home-bg)",
                }}
            >

                <div className="mx-auto max-w-7xl px-6 md:px-10">

                    <Reveal>

                        <div className="mx-auto max-w-2xl text-center">

                            <span
                                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em]"
                                style={{
                                    color: "var(--home-primary)",
                                }}
                            >

                                <SparkIcon className="h-4 w-4" />

                                Why Shiyora

                            </span>

                            <h2
                                className="mt-3 text-3xl font-extrabold md:text-4xl"
                                style={{
                                    color: "var(--home-heading)",
                                }}
                            >
                                Everything you need to learn better.
                            </h2>

                            <p
                                className="mt-4 leading-7"
                                style={{
                                    color: "var(--home-muted)",
                                }}
                            >
                                A simple and structured learning environment
                                designed for students, teachers and organizations.
                            </p>

                        </div>

                    </Reveal>

                    <div className="mt-14 grid gap-5 md:grid-cols-3">

                        {features.map((feature, index) => {

                            const Icon = feature.icon;

                            return (

                                <Reveal
                                    key={feature.title}
                                    delay={index * 120}
                                    variant="scale"
                                >

                                    <div
                                        className="shiyora-card group h-full rounded-2xl border p-7 shadow-sm"
                                    >

                                        <div
                                            className="flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white"
                                            style={{
                                                background: "var(--home-blue-soft)",
                                                color: "var(--home-primary)",
                                            }}
                                        >

                                            <Icon className="h-6 w-6" />

                                        </div>

                                        <h3
                                            className="mt-6 text-lg font-bold"
                                            style={{
                                                color: "var(--home-heading)",
                                            }}
                                        >
                                            {feature.title}
                                        </h3>

                                        <p
                                            className="mt-3 text-sm leading-7"
                                            style={{
                                                color: "var(--home-muted)",
                                            }}
                                        >
                                            {feature.text}
                                        </p>

                                        <div
                                            className="mt-6 flex items-center gap-2 text-xs font-bold"
                                            style={{
                                                color: "var(--home-primary)",
                                            }}
                                        >

                                            Learn more

                                            <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />

                                        </div>

                                    </div>

                                </Reveal>

                            );

                        })}

                    </div>

                </div>

            </section>

            {/* =====================================================
                COURSES
            ====================================================== */}

            <section
                className="py-24"
                style={{
                    background: "var(--home-surface)",
                }}
            >

                <div className="mx-auto max-w-7xl px-6 md:px-10">

                    <Reveal>

                        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

                            <div>

                                <span
                                    className="text-xs font-bold uppercase tracking-[0.18em]"
                                    style={{
                                        color: "var(--home-primary)",
                                    }}
                                >
                                    Popular Courses
                                </span>

                                <h2
                                    className="mt-3 text-3xl font-extrabold md:text-4xl"
                                    style={{
                                        color: "var(--home-heading)",
                                    }}
                                >
                                    Start learning today.
                                </h2>

                                <p
                                    className="mt-3 max-w-xl text-sm leading-7"
                                    style={{
                                        color: "var(--home-muted)",
                                    }}
                                >
                                    Explore courses designed to help you develop
                                    practical and valuable skills.
                                </p>

                            </div>

                            <Link
                                to="/course"
                                className="group inline-flex items-center gap-2 text-sm font-bold"
                                style={{
                                    color: "var(--home-primary)",
                                }}
                            >

                                View all courses

                                <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />

                            </Link>

                        </div>

                    </Reveal>

                    <div className="mt-12 grid gap-6 md:grid-cols-3">

                        {courses.map((course, index) => (

                            <Reveal
                                key={course.title}
                                delay={index * 130}
                                variant="scale"
                            >

                                <div
                                    className="course-card group overflow-hidden rounded-2xl border shadow-sm"
                                    style={{
                                        borderColor: "var(--home-border)",
                                    }}
                                >

                                    <div
                                        className={`course-thumb relative flex h-44 items-center justify-center overflow-hidden ${index === 0
                                            ? "bg-gradient-to-br from-blue-600 to-blue-500"
                                            : index === 1
                                                ? "bg-gradient-to-br from-blue-700 to-teal-500"
                                                : "bg-gradient-to-br from-teal-600 to-teal-400"
                                            }`}
                                    >

                                        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 transition-transform duration-700 group-hover:scale-125" />

                                        <div className="absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-white/10 transition-transform duration-700 group-hover:scale-125" />

                                        <span className="relative z-10 text-4xl font-extrabold tracking-wider text-white/90 transition-transform duration-500 group-hover:scale-110">
                                            {course.icon}
                                        </span>

                                    </div>

                                    <div
                                        className="p-6"
                                        style={{
                                            background: "var(--home-surface)",
                                        }}
                                    >

                                        <div className="flex items-center justify-between">

                                            <span
                                                className="rounded-full px-3 py-1 text-[10px] font-bold"
                                                style={{
                                                    background:
                                                        "var(--home-blue-soft)",
                                                    color:
                                                        "var(--home-primary)",
                                                }}
                                            >
                                                {course.category}
                                            </span>

                                            <span
                                                className="text-[10px] font-medium"
                                                style={{
                                                    color: "var(--home-muted)",
                                                }}
                                            >
                                                {course.level}
                                            </span>

                                        </div>

                                        <h3
                                            className="mt-4 text-lg font-bold leading-7"
                                            style={{
                                                color: "var(--home-heading)",
                                            }}
                                        >
                                            {course.title}
                                        </h3>

                                        <div
                                            className="mt-5 flex items-center justify-between border-t pt-4"
                                            style={{
                                                borderColor:
                                                    "var(--home-border)",
                                            }}
                                        >

                                            <span
                                                className="flex items-center gap-2 text-xs"
                                                style={{
                                                    color:
                                                        "var(--home-muted)",
                                                }}
                                            >

                                                <BookIcon className="h-4 w-4" />

                                                {course.lessons}

                                            </span>

                                            <Link
                                                to="/course"
                                                className="group/link inline-flex items-center gap-1 text-xs font-bold"
                                                style={{
                                                    color:
                                                        "var(--home-primary)",
                                                }}
                                            >

                                                Explore

                                                <ArrowIcon className="course-arrow h-3.5 w-3.5" />

                                            </Link>

                                        </div>

                                    </div>

                                </div>

                            </Reveal>

                        ))}

                    </div>

                </div>

            </section>

            {/* =====================================================
                HOW IT WORKS
            ====================================================== */}

            <section
                className="py-24"
                style={{
                    background: "var(--home-bg)",
                }}
            >

                <div className="mx-auto max-w-6xl px-6 md:px-10">

                    <Reveal>

                        <div className="mx-auto max-w-2xl text-center">

                            <span
                                className="text-xs font-bold uppercase tracking-[0.18em]"
                                style={{
                                    color: "var(--home-primary)",
                                }}
                            >
                                How It Works
                            </span>

                            <h2
                                className="mt-3 text-3xl font-extrabold md:text-4xl"
                                style={{
                                    color: "var(--home-heading)",
                                }}
                            >
                                Learning made simple.
                            </h2>

                            <p
                                className="mt-4"
                                style={{
                                    color: "var(--home-muted)",
                                }}
                            >
                                Start your learning journey in three simple steps.
                            </p>

                        </div>

                    </Reveal>

                    <div className="relative mt-14 grid gap-6 md:grid-cols-3">

                        <div
                            className="pointer-events-none absolute left-[16%] right-[16%] top-12 hidden h-px overflow-hidden md:block"
                            style={{
                                background: "var(--home-border)",
                            }}
                        >

                            <div
                                className="h-full w-full origin-left bg-gradient-to-r from-blue-500 to-teal-500"
                                style={{
                                    animation:
                                        "lineGrow 1.5s cubic-bezier(.22,1,.36,1) .4s both",
                                }}
                            />

                        </div>

                        {steps.map((step, index) => (

                            <Reveal
                                key={step.number}
                                delay={index * 150}
                                variant={
                                    index === 0
                                        ? "left"
                                        : index === 2
                                            ? "right"
                                            : "up"
                                }
                            >

                                <div className="step-card relative z-10 h-full rounded-2xl border p-7 text-center shadow-sm shiyora-card">

                                    <div className="step-number mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-teal-500 text-lg font-extrabold text-white shadow-lg shadow-blue-600/20">

                                        {step.number}

                                    </div>

                                    <h3
                                        className="mt-6 text-lg font-bold"
                                        style={{
                                            color: "var(--home-heading)",
                                        }}
                                    >
                                        {step.title}
                                    </h3>

                                    <p
                                        className="mt-3 text-sm leading-7"
                                        style={{
                                            color: "var(--home-muted)",
                                        }}
                                    >
                                        {step.text}
                                    </p>

                                </div>

                            </Reveal>

                        ))}

                    </div>

                </div>

            </section>

            {/* =====================================================
                CTA
            ====================================================== */}

            <section
                className="py-24"
                style={{
                    background: "var(--home-surface)",
                }}
            >

                <div className="mx-auto max-w-6xl px-6 md:px-10">

                    <Reveal variant="scale">

                        <div className="cta-section rounded-3xl bg-gradient-to-br from-blue-600 via-blue-600 to-teal-500 px-8 py-16 text-center shadow-2xl shadow-blue-600/20 md:px-16">

                            <div className="cta-glow-one pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/10" />

                            <div className="cta-glow-two pointer-events-none absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-white/10" />

                            <div className="relative z-10">

                                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-100">

                                    <SparkIcon className="h-4 w-4" />

                                    Start Your Journey

                                </span>

                                <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold text-white md:text-4xl">
                                    Ready to start learning with Shiyora?
                                </h2>

                                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-blue-100 md:text-base">
                                    Create your account, explore courses and
                                    take control of your learning journey.
                                </p>

                                <div className="mt-8 flex flex-wrap justify-center gap-4">

                                    <Link
                                        to="/signup"
                                        className="shiyora-button group inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-blue-600 shadow-lg"
                                    >

                                        <span className="relative z-10">
                                            Create Your Account
                                        </span>

                                        <ArrowIcon className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />

                                    </Link>

                                    <Link
                                        to="/course"
                                        className="inline-flex items-center rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
                                    >
                                        Browse Courses
                                    </Link>

                                </div>

                            </div>

                        </div>

                    </Reveal>

                </div>

            </section>

            {/* =====================================================
                BOTTOM
            ====================================================== */}

            <div className="h-2 bg-gradient-to-r from-blue-600 to-teal-500" />

        </main>
    );
}

export default Home;