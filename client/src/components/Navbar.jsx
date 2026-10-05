import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";


/* =========================================================
   SUN ICON
   ========================================================= */

function SunIcon({ className = "" }) {
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
            <circle cx="12" cy="12" r="4" />

            <path d="M12 2v2" />
            <path d="M12 20v2" />

            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />

            <path d="M2 12h2" />
            <path d="M20 12h2" />

            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
        </svg>
    );
}


/* =========================================================
   MOON ICON
   ========================================================= */

function MoonIcon({ className = "" }) {
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
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
        </svg>
    );
}


/* =========================================================
   MENU ICON
   ========================================================= */

function MenuIcon({ className = "" }) {
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
            <path d="M4 6h16" />
            <path d="M4 12h16" />
            <path d="M4 18h16" />
        </svg>
    );
}


/* =========================================================
   CLOSE ICON
   ========================================================= */

function CloseIcon({ className = "" }) {
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
            <path d="M6 6l12 12" />
            <path d="M18 6 6 18" />
        </svg>
    );
}


/* =========================================================
   ARROW ICON
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


/* =========================================================
   NAVBAR
   ========================================================= */

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);


    /* =====================================================
       DARK MODE STATE
       ====================================================== */

    const [darkMode, setDarkMode] = useState(() => {

        if (typeof window === "undefined") {
            return false;
        }

        return localStorage.getItem("shiyora-theme") === "dark";
    });


    /* =====================================================
       APPLY THEME
       ====================================================== */

    useEffect(() => {

        const root = document.documentElement;

        if (darkMode) {

            root.classList.add("dark");

            root.setAttribute(
                "data-theme",
                "dark"
            );

            localStorage.setItem(
                "shiyora-theme",
                "dark"
            );

        } else {

            root.classList.remove("dark");

            root.setAttribute(
                "data-theme",
                "light"
            );

            localStorage.setItem(
                "shiyora-theme",
                "light"
            );
        }

    }, [darkMode]);


    /* =====================================================
       CLOSE MOBILE MENU
       ====================================================== */

    const closeMenu = () => {
        setMenuOpen(false);
    };


    /* =====================================================
       NAVIGATION CLICK
       PAGE WILL ALWAYS START FROM TOP
       ====================================================== */

    const handleNavClick = () => {

        setMenuOpen(false);

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "auto",
        });
    };


    /* =====================================================
       TOGGLE THEME
       ====================================================== */

    const toggleTheme = () => {
        setDarkMode((previous) => !previous);
    };


    /* =====================================================
       NAV LINK CLASS
       ====================================================== */

    const navLinkClass = ({ isActive }) =>
        `
        shiyora-nav-link
        relative
        py-2
        text-sm
        font-medium
        font-['Inter']
        transition-all
        duration-300
        ${isActive ? "active" : ""}
        `;


    return (
        <>
            {/* =================================================
                NAVBAR CUSTOM CSS
            ================================================= */}

            <style>{`

                /* =================================================
                   GOOGLE FONTS
                ================================================= */

                @import url(
                    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap'
                );


                /* =================================================
                   FLOATING NAVBAR
                ================================================= */

                .shiyora-navbar {

                    background:
                        rgba(255, 255, 255, 0.82);

                    border-color:
                        rgba(148, 163, 184, 0.22);

                    color:
                        #0f172a;

                    box-shadow:
                        0 10px 35px
                        rgba(15, 23, 42, 0.08);

                    transition:
                        background .35s ease,
                        border-color .35s ease,
                        color .35s ease,
                        box-shadow .35s ease;
                }


                /* =================================================
                   DARK NAVBAR
                ================================================= */

                .dark .shiyora-navbar {

                    background:
                        rgba(8, 15, 30, 0.88);

                    border-color:
                        rgba(148, 163, 184, 0.14);

                    color:
                        #f8fafc;

                    box-shadow:
                        0 10px 35px
                        rgba(0, 0, 0, 0.28);
                }


                /* =================================================
                   NAVBAR HOVER
                ================================================= */

                .shiyora-navbar:hover {

                    box-shadow:
                        0 14px 42px
                        rgba(15, 23, 42, 0.11);
                }

                .dark .shiyora-navbar:hover {

                    box-shadow:
                        0 14px 42px
                        rgba(0, 0, 0, 0.34);
                }


                /* =================================================
                   NAV LINKS
                ================================================= */

                .shiyora-nav-link {

                    color:
                        #475569;
                }


                .shiyora-nav-link:hover {

                    color:
                        #2563eb;
                }


                .shiyora-nav-link.active {

                    color:
                        #2563eb;
                }


                /* =================================================
                   DARK NAV LINKS
                ================================================= */

                .dark .shiyora-nav-link {

                    color:
                        #cbd5e1;
                }


                .dark .shiyora-nav-link:hover,
                .dark .shiyora-nav-link.active {

                    color:
                        #2dd4bf;
                }


                /* =================================================
                   ACTIVE LINK UNDERLINE
                ================================================= */

                .shiyora-active-line {

                    animation:
                        navLine .3s ease forwards;
                }


                @keyframes navLine {

                    from {
                        width: 0;
                        opacity: 0;
                    }

                    to {
                        width: 20px;
                        opacity: 1;
                    }
                }


                /* =================================================
                   LOGO
                ================================================= */

                .shiyora-logo {

                    background:
                        linear-gradient(
                            135deg,
                            #2563eb,
                            #0d9488
                        );

                    box-shadow:
                        0 8px 25px
                        rgba(37, 99, 235, 0.20);

                    transition:
                        transform .3s ease,
                        box-shadow .3s ease;
                }


                .shiyora-logo:hover {

                    transform:
                        translateY(-2px)
                        rotate(-2deg);

                    box-shadow:
                        0 12px 32px
                        rgba(13, 148, 136, 0.28);
                }


                /* =================================================
                   CREATE ACCOUNT BUTTON
                ================================================= */

                .create-account-btn {

                    position: relative;

                    overflow: hidden;

                    background:
                        linear-gradient(
                            135deg,
                            #2563eb,
                            #0d9488
                        );

                    box-shadow:
                        0 10px 25px
                        rgba(37, 99, 235, 0.20);

                    transition:
                        transform .3s ease,
                        box-shadow .3s ease,
                        filter .3s ease;
                }


                .create-account-btn::before {

                    content: "";

                    position: absolute;

                    top: 0;
                    left: -120%;

                    width: 80%;
                    height: 100%;

                    background:
                        linear-gradient(
                            90deg,
                            transparent,
                            rgba(255,255,255,.25),
                            transparent
                        );

                    transform:
                        skewX(-20deg);

                    transition:
                        left .6s ease;
                }


                .create-account-btn:hover::before {

                    left: 130%;
                }


                .create-account-btn:hover {

                    transform:
                        translateY(-2px);

                    box-shadow:
                        0 15px 32px
                        rgba(13, 148, 136, 0.28);

                    filter:
                        brightness(1.05);
                }


                /* =================================================
                   THEME TOGGLE
                ================================================= */

                .theme-toggle {

                    position: relative;

                    overflow: hidden;
                }


                .theme-toggle::before {

                    content: "";

                    position: absolute;

                    inset: 0;

                    background:
                        linear-gradient(
                            120deg,
                            transparent,
                            rgba(255,255,255,.35),
                            transparent
                        );

                    transform:
                        translateX(-120%);

                    transition:
                        transform .6s ease;
                }


                .theme-toggle:hover::before {

                    transform:
                        translateX(120%);
                }


                /* =================================================
                   MOBILE LINKS
                ================================================= */

                .shiyora-mobile-link {

                    color:
                        #475569;
                }


                .shiyora-mobile-link:hover {

                    color:
                        #2563eb;

                    background:
                        #eff6ff;
                }


                .shiyora-mobile-link.active {

                    color:
                        #2563eb;

                    background:
                        #eff6ff;
                }


                /* =================================================
                   DARK MOBILE LINKS
                ================================================= */

                .dark .shiyora-mobile-link {

                    color:
                        #cbd5e1;
                }


                .dark .shiyora-mobile-link:hover,
                .dark .shiyora-mobile-link.active {

                    color:
                        #2dd4bf;

                    background:
                        rgba(45, 212, 191, .08);
                }


                /* =================================================
                   NAVBAR ENTRY
                ================================================= */

                .shiyora-navbar {

                    animation:
                        navbarEntry .45s ease both;
                }


                @keyframes navbarEntry {

                    from {

                        opacity: 0;

                        transform:
                            translateY(-12px);
                    }

                    to {

                        opacity: 1;

                        transform:
                            translateY(0);
                    }
                }


                /* =================================================
                   GLOBAL TRANSITION
                ================================================= */

                html,
                body {

                    transition:
                        background-color .35s ease,
                        color .35s ease;
                }


                /* =================================================
                   REDUCED MOTION
                ================================================= */

                @media (
                    prefers-reduced-motion: reduce
                ) {

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
                }

            `}</style>


            {/* =====================================================
                FLOATING NAVBAR
            ====================================================== */}

            <nav
                className="
                    shiyora-navbar
                    sticky
                    top-4
                    z-50
                    mx-4
                    rounded-2xl
                    border
                    backdrop-blur-xl
                    sm:mx-6
                    lg:mx-8
                "
            >

                {/* =================================================
                    NAVBAR INNER
                ================================================= */}

                <div
                    className="
                        mx-auto
                        flex
                        h-[72px]
                        w-full
                        max-w-7xl
                        items-center
                        justify-between
                        px-5
                        sm:px-6
                        lg:px-8
                    "
                >

                    {/* =================================================
                        LOGO
                    ================================================= */}

                    <Link
                        to="/home"
                        onClick={handleNavClick}
                        className="
                            group
                            flex
                            shrink-0
                            items-center
                            gap-3
                        "
                    >

                        {/* LOGO BOX */}

                        <div
                            className="
                                shiyora-logo
                                flex
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-xl
                                text-xl
                                font-extrabold
                                text-white
                            "
                            style={{
                                fontFamily:
                                    "'Plus Jakarta Sans', sans-serif",
                            }}
                        >
                            S
                        </div>


                        {/* BRAND TEXT */}

                        <div className="leading-none">

                            <span
                                className="
                                    block
                                    text-xl
                                    font-extrabold
                                    tracking-tight
                                    text-slate-900
                                    dark:text-white
                                    sm:text-2xl
                                "
                                style={{
                                    fontFamily:
                                        "'Plus Jakarta Sans', sans-serif",
                                }}
                            >
                                Shiyora
                            </span>


                            <span
                                className="
                                    mt-1
                                    hidden
                                    text-[8px]
                                    font-medium
                                    uppercase
                                    tracking-[0.22em]
                                    text-slate-400
                                    sm:block
                                "
                            >
                                Learning Platform
                            </span>

                        </div>

                    </Link>


                    {/* =================================================
                        DESKTOP NAVIGATION
                    ================================================= */}

                    <div
                        className="
                            hidden
                            items-center
                            gap-7
                            lg:flex
                        "
                    >

                        {/* HOME */}

                        <NavLink
                            to="/home"
                            onClick={handleNavClick}
                            className={navLinkClass}
                        >
                            {({ isActive }) => (
                                <>
                                    Home

                                    {isActive && (
                                        <span
                                            className="
                                                shiyora-active-line
                                                absolute
                                                -bottom-1
                                                left-1/2
                                                h-0.5
                                                -translate-x-1/2
                                                rounded-full
                                                bg-blue-600
                                                dark:bg-teal-400
                                            "
                                        />
                                    )}
                                </>
                            )}
                        </NavLink>


                        {/* COURSES */}

                        <NavLink
                            to="/course"
                            onClick={handleNavClick}
                            className={navLinkClass}
                        >
                            {({ isActive }) => (
                                <>
                                    Courses

                                    {isActive && (
                                        <span
                                            className="
                                                shiyora-active-line
                                                absolute
                                                -bottom-1
                                                left-1/2
                                                h-0.5
                                                -translate-x-1/2
                                                rounded-full
                                                bg-blue-600
                                                dark:bg-teal-400
                                            "
                                        />
                                    )}
                                </>
                            )}
                        </NavLink>


                        {/* FEATURES */}

                        <NavLink
                            to="/feature"
                            onClick={handleNavClick}
                            className={navLinkClass}
                        >
                            {({ isActive }) => (
                                <>
                                    Features

                                    {isActive && (
                                        <span
                                            className="
                                                shiyora-active-line
                                                absolute
                                                -bottom-1
                                                left-1/2
                                                h-0.5
                                                -translate-x-1/2
                                                rounded-full
                                                bg-blue-600
                                                dark:bg-teal-400
                                            "
                                        />
                                    )}
                                </>
                            )}
                        </NavLink>


                        {/* PLANS */}

                        <NavLink
                            to="/subscription"
                            onClick={handleNavClick}
                            className={navLinkClass}
                        >
                            {({ isActive }) => (
                                <>
                                    Plans

                                    {isActive && (
                                        <span
                                            className="
                                                shiyora-active-line
                                                absolute
                                                -bottom-1
                                                left-1/2
                                                h-0.5
                                                -translate-x-1/2
                                                rounded-full
                                                bg-blue-600
                                                dark:bg-teal-400
                                            "
                                        />
                                    )}
                                </>
                            )}
                        </NavLink>


                        {/* ABOUT */}

                        <NavLink
                            to="/about"
                            onClick={handleNavClick}
                            className={navLinkClass}
                        >
                            {({ isActive }) => (
                                <>
                                    About

                                    {isActive && (
                                        <span
                                            className="
                                                shiyora-active-line
                                                absolute
                                                -bottom-1
                                                left-1/2
                                                h-0.5
                                                -translate-x-1/2
                                                rounded-full
                                                bg-blue-600
                                                dark:bg-teal-400
                                            "
                                        />
                                    )}
                                </>
                            )}
                        </NavLink>


                        {/* CONTACT */}

                        <NavLink
                            to="/contact"
                            onClick={handleNavClick}
                            className={navLinkClass}
                        >
                            {({ isActive }) => (
                                <>
                                    Contact

                                    {isActive && (
                                        <span
                                            className="
                                                shiyora-active-line
                                                absolute
                                                -bottom-1
                                                left-1/2
                                                h-0.5
                                                -translate-x-1/2
                                                rounded-full
                                                bg-blue-600
                                                dark:bg-teal-400
                                            "
                                        />
                                    )}
                                </>
                            )}
                        </NavLink>


                        {/* CERTIFICATES */}

                        <NavLink
                            to="/certificate"
                            onClick={handleNavClick}
                            className={navLinkClass}
                        >
                            {({ isActive }) => (
                                <>
                                    Certificates

                                    {isActive && (
                                        <span
                                            className="
                                                shiyora-active-line
                                                absolute
                                                -bottom-1
                                                left-1/2
                                                h-0.5
                                                -translate-x-1/2
                                                rounded-full
                                                bg-blue-600
                                                dark:bg-teal-400
                                            "
                                        />
                                    )}
                                </>
                            )}
                        </NavLink>

                    </div>


                    {/* =================================================
                        DESKTOP RIGHT ACTIONS
                    ================================================= */}

                    <div
                        className="
                            hidden
                            items-center
                            gap-3
                            lg:flex
                        "
                    >

                        {/* THEME BUTTON */}

                        <button
                            type="button"
                            onClick={toggleTheme}
                            aria-label={
                                darkMode
                                    ? "Switch to light mode"
                                    : "Switch to dark mode"
                            }
                            className="
                                theme-toggle
                                flex
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-xl
                                border
                                border-slate-200
                                bg-white
                                text-slate-600
                                transition-all
                                duration-300
                                hover:border-blue-200
                                hover:bg-blue-50
                                hover:text-blue-600
                                dark:border-slate-700
                                dark:bg-slate-900
                                dark:text-slate-300
                                dark:hover:border-teal-500/40
                                dark:hover:bg-teal-500/10
                                dark:hover:text-teal-400
                            "
                        >

                            {darkMode ? (
                                <SunIcon
                                    className="
                                        relative
                                        z-10
                                        h-5
                                        w-5
                                    "
                                />
                            ) : (
                                <MoonIcon
                                    className="
                                        relative
                                        z-10
                                        h-5
                                        w-5
                                    "
                                />
                            )}

                        </button>


                        {/* LOGIN */}

                        <Link
                            to="/login"
                            onClick={handleNavClick}
                            className="
                                rounded-xl
                                border
                                border-slate-200
                                bg-white
                                px-4
                                py-2.5
                                text-sm
                                font-semibold
                                text-slate-700
                                transition-all
                                duration-300
                                hover:-translate-y-0.5
                                hover:border-blue-200
                                hover:text-blue-600
                                dark:border-slate-700
                                dark:bg-slate-900
                                dark:text-slate-200
                                dark:hover:border-teal-500/40
                                dark:hover:text-teal-400
                            "
                        >
                            Login
                        </Link>


                        {/* CREATE ACCOUNT */}

                        <Link
                            to="/signup"
                            onClick={handleNavClick}
                            className="
                                create-account-btn
                                rounded-xl
                                px-5
                                py-2.5
                                text-sm
                                font-bold
                                text-white
                            "
                        >
                            Create Account
                        </Link>

                    </div>


                    {/* =================================================
                        MOBILE CONTROLS
                    ================================================= */}

                    <div
                        className="
                            flex
                            items-center
                            gap-2
                            lg:hidden
                        "
                    >

                        {/* MOBILE THEME */}

                        <button
                            type="button"
                            onClick={toggleTheme}
                            aria-label={
                                darkMode
                                    ? "Switch to light mode"
                                    : "Switch to dark mode"
                            }
                            className="
                                flex
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-xl
                                border
                                border-slate-200
                                bg-white
                                text-slate-600
                                transition-all
                                duration-300
                                hover:border-blue-200
                                hover:text-blue-600
                                dark:border-slate-700
                                dark:bg-slate-900
                                dark:text-slate-300
                                dark:hover:border-teal-500/40
                                dark:hover:text-teal-400
                            "
                        >

                            {darkMode ? (
                                <SunIcon className="h-5 w-5" />
                            ) : (
                                <MoonIcon className="h-5 w-5" />
                            )}

                        </button>


                        {/* MOBILE MENU BUTTON */}

                        <button
                            type="button"
                            onClick={() =>
                                setMenuOpen(
                                    (previous) => !previous
                                )
                            }
                            aria-label="Toggle navigation menu"
                            aria-expanded={menuOpen}
                            className="
                                flex
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-xl
                                border
                                border-slate-200
                                bg-white
                                text-slate-700
                                transition-all
                                duration-300
                                hover:border-blue-200
                                hover:text-blue-600
                                dark:border-slate-700
                                dark:bg-slate-900
                                dark:text-slate-200
                                dark:hover:border-teal-500/40
                                dark:hover:text-teal-400
                            "
                        >

                            {menuOpen ? (
                                <CloseIcon
                                    className="h-5 w-5"
                                />
                            ) : (
                                <MenuIcon
                                    className="h-5 w-5"
                                />
                            )}

                        </button>

                    </div>

                </div>


                {/* =====================================================
                    MOBILE MENU
                ====================================================== */}

                {menuOpen && (
                    <div
                        className="
                            border-t
                            border-slate-200
                            bg-white
                            px-5
                            py-5
                            shadow-xl
                            dark:border-slate-800
                            dark:bg-[#080f1e]
                            lg:hidden
                        "
                    >

                        {/* MOBILE NAV LINKS */}

                        <div className="space-y-1">

                            {[
                                ["/home", "Home"],
                                ["/course", "Courses"],
                                ["/feature", "Features"],
                                ["/subscription", "Plans"],
                                ["/about", "About"],
                                ["/contact", "Contact"],
                                ["/certificate", "Certificates"],
                            ].map(
                                ([path, label]) => (
                                    <NavLink
                                        key={path}
                                        to={path}
                                        onClick={handleNavClick}
                                        className={({
                                            isActive,
                                        }) =>
                                            `
                                            shiyora-mobile-link
                                            flex
                                            items-center
                                            justify-between
                                            rounded-xl
                                            px-4
                                            py-3
                                            text-sm
                                            font-semibold
                                            transition-all
                                            duration-300
                                            ${isActive
                                                ? "active"
                                                : ""
                                            }
                                            `
                                        }
                                    >

                                        {label}

                                        <ArrowIcon
                                            className="
                                                h-4
                                                w-4
                                                opacity-50
                                            "
                                        />

                                    </NavLink>
                                )
                            )}

                        </div>


                        {/* DIVIDER */}

                        <div
                            className="
                                my-5
                                h-px
                                bg-slate-200
                                dark:bg-slate-800
                            "
                        />


                        {/* MOBILE ACTION BUTTONS */}

                        <div
                            className="
                                grid
                                gap-3
                                sm:grid-cols-2
                            "
                        >

                            {/* LOGIN */}

                            <Link
                                to="/login"
                                onClick={handleNavClick}
                                className="
                                    rounded-xl
                                    border
                                    border-slate-200
                                    px-4
                                    py-3
                                    text-center
                                    text-sm
                                    font-semibold
                                    text-slate-700
                                    transition-all
                                    hover:border-blue-200
                                    hover:text-blue-600
                                    dark:border-slate-700
                                    dark:text-slate-200
                                    dark:hover:border-teal-500/40
                                    dark:hover:text-teal-400
                                "
                            >
                                Login
                            </Link>


                            {/* CREATE ACCOUNT */}

                            <Link
                                to="/signup"
                                onClick={handleNavClick}
                                className="
                                    create-account-btn
                                    rounded-xl
                                    px-4
                                    py-3
                                    text-center
                                    text-sm
                                    font-bold
                                    text-white
                                "
                            >
                                Create Account
                            </Link>

                        </div>

                    </div>
                )}

            </nav>
        </>
    );
}


export default Navbar;