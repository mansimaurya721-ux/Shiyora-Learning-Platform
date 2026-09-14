import { Link } from "react-router-dom";
import shiyoraLogo from "../assets/shiyora.logo.png";

/* =========================================================
   ICONS
========================================================= */

const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM21 13.85c0-3.77-2.01-5.52-4.69-5.52-2.16 0-3.13 1.19-3.67 2.03V8.5H9.14V21h3.5v-6.19c0-1.63.31-3.21 2.33-3.21 1.99 0 2.02 1.86 2.02 3.32V21H21v-7.15Z" />
    </svg>
);

const InstagramIcon = () => (
    <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
    >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle
            cx="17.4"
            cy="6.6"
            r="1"
            fill="currentColor"
            stroke="none"
        />
    </svg>
);

const GitHubIcon = () => (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12 .7a11.3 11.3 0 0 0-3.58 22.02c.57.1.78-.25.78-.55v-2.02c-3.17.69-3.84-1.34-3.84-1.34-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.73-1.54-2.53-.29-5.19-1.27-5.19-5.65 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.13 1.17a10.9 10.9 0 0 1 5.7 0c2.17-1.48 3.13-1.17 3.13-1.17.62 1.57.23 2.73.11 3.02.73.8 1.18 1.82 1.18 3.07 0 4.39-2.67 5.35-5.21 5.63.41.36.78 1.06.78 2.14v3.18c0 .31.21.66.79.55A11.3 11.3 0 0 0 12 .7Z" />
    </svg>
);

const FacebookIcon = () => (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.87.24-1.46 1.5-1.46h1.6V4a21 21 0 0 0-2.33-.12c-2.31 0-3.89 1.41-3.89 4V10H7.8v3h2.58v8h3.12Z" />
    </svg>
);

const MailIcon = () => (
    <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
    >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
    </svg>
);

const ArrowIcon = () => (
    <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
    >
        <path d="M5 12h13" />
        <path d="m13 6 6 6-6 6" />
    </svg>
);

/* =========================================================
   CONTACT BUTTONS
========================================================= */

const contacts = [
    {
        letter: "C",
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mansi-maurya1710-/",
        icon: <LinkedInIcon />,
    },
    {
        letter: "O",
        name: "Instagram",
        url: "https://www.instagram.com/",
        icon: <InstagramIcon />,
    },
    {
        letter: "N",
        name: "GitHub",
        url: "https://github.com/mansimaurya721-ux",
        icon: <GitHubIcon />,
    },
    {
        letter: "T",
        name: "Facebook",
        url: "https://www.facebook.com/",
        icon: <FacebookIcon />,
    },
    {
        letter: "A",
        name: "Email",
        url: "mailto:hello@shiyora.com",
        icon: <MailIcon />,
    },
    {
        letter: "C",
        name: "Portfolio",
        url: "https://mansimaurya.netlify.app",
        icon: <ArrowIcon />,
    },
    {
        letter: "T",
        name: "Contact",
        internal: true,
        icon: <ArrowIcon />,
    },
];

/* =========================================================
   FOOTER
========================================================= */

function Footer() {
    return (
        <footer
            className="
                relative
                overflow-hidden
                border-t
                border-slate-200
                bg-slate-50
                text-slate-700
                dark:border-slate-800
                dark:bg-[#07111f]
                dark:text-slate-300
            "
        >
            {/* Subtle background glow */}

            <div
                className="
                    pointer-events-none
                    absolute
                    -left-32
                    bottom-0
                    h-72
                    w-72
                    rounded-full
                    bg-blue-500/5
                    blur-3xl
                    dark:bg-blue-500/10
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    -right-32
                    top-0
                    h-72
                    w-72
                    rounded-full
                    bg-teal-500/5
                    blur-3xl
                    dark:bg-teal-500/10
                "
            />

            <div className="relative mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10">

                {/* =================================================
                    MAIN FOOTER
                ================================================= */}

                <div
                    className="
                        grid
                        gap-12
                        md:grid-cols-2
                        lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]
                    "
                >

                    {/* =================================================
                        BRAND
                    ================================================= */}

                    <div>

                        <Link
                            to="/home"
                            className="group inline-flex items-center gap-3"
                        >
                            <div
                                className="
                                    flex
                                    h-10
                                    w-10
                                    items-center
                                    justify-center
                                    overflow-hidden
                                    rounded-xl
                                    border
                                    border-slate-200
                                    bg-white
                                    shadow-sm
                                    transition
                                    duration-300
                                    group-hover:-translate-y-0.5
                                    group-hover:shadow-md
                                    dark:border-slate-700
                                    dark:bg-slate-900
                                "
                            >
                                <img
                                    src={shiyoraLogo}
                                    alt="Shiyora"
                                    className="h-7 w-7 object-contain"
                                />
                            </div>

                            <span
                                className="
                                    text-xl
                                    font-extrabold
                                    tracking-tight
                                    text-slate-900
                                    dark:text-white
                                "
                            >
                                SHIYORA
                            </span>
                        </Link>

                        <p
                            className="
                                mt-5
                                max-w-xs
                                text-sm
                                leading-6
                                text-slate-500
                                dark:text-slate-400
                            "
                        >
                            A modern learning platform built to help
                            learners learn, grow and achieve more.
                        </p>

                    </div>

                    {/* =================================================
                        PLATFORM
                    ================================================= */}

                    <div>

                        <h3
                            className="
                                text-xs
                                font-bold
                                uppercase
                                tracking-[0.18em]
                                text-slate-400
                                dark:text-slate-500
                            "
                        >
                            Platform
                        </h3>

                        <div className="mt-5 flex flex-col gap-3">

                            <Link
                                to="/home"
                                className="
                                    w-fit
                                    text-sm
                                    transition
                                    hover:translate-x-1
                                    hover:text-blue-600
                                    dark:hover:text-teal-400
                                "
                            >
                                Home
                            </Link>

                            <Link
                                to="/course"
                                className="
                                    w-fit
                                    text-sm
                                    transition
                                    hover:translate-x-1
                                    hover:text-blue-600
                                    dark:hover:text-teal-400
                                "
                            >
                                Courses
                            </Link>

                            <Link
                                to="/feature"
                                className="
                                    w-fit
                                    text-sm
                                    transition
                                    hover:translate-x-1
                                    hover:text-blue-600
                                    dark:hover:text-teal-400
                                "
                            >
                                Features
                            </Link>

                            <Link
                                to="/subscription"
                                className="
                                    w-fit
                                    text-sm
                                    transition
                                    hover:translate-x-1
                                    hover:text-blue-600
                                    dark:hover:text-teal-400
                                "
                            >
                                Plans
                            </Link>

                        </div>

                    </div>

                    {/* =================================================
                        RESOURCES
                    ================================================= */}

                    <div>

                        <h3
                            className="
                                text-xs
                                font-bold
                                uppercase
                                tracking-[0.18em]
                                text-slate-400
                                dark:text-slate-500
                            "
                        >
                            Resources
                        </h3>

                        <div className="mt-5 flex flex-col gap-3">

                            <Link
                                to="/about"
                                className="
                                    w-fit
                                    text-sm
                                    transition
                                    hover:translate-x-1
                                    hover:text-blue-600
                                    dark:hover:text-teal-400
                                "
                            >
                                About
                            </Link>

                            <Link
                                to="/contact"
                                className="
                                    w-fit
                                    text-sm
                                    transition
                                    hover:translate-x-1
                                    hover:text-blue-600
                                    dark:hover:text-teal-400
                                "
                            >
                                Contact
                            </Link>

                            <Link
                                to="/help"
                                className="
                                    w-fit
                                    text-sm
                                    transition
                                    hover:translate-x-1
                                    hover:text-blue-600
                                    dark:hover:text-teal-400
                                "
                            >
                                Help Center
                            </Link>

                            <Link
                                to="/faq"
                                className="
                                    w-fit
                                    text-sm
                                    transition
                                    hover:translate-x-1
                                    hover:text-blue-600
                                    dark:hover:text-teal-400
                                "
                            >
                                FAQ
                            </Link>

                        </div>

                    </div>

                    {/* =================================================
                        CONTACT
                    ================================================= */}

                    <div>

                        <h3
                            className="
                                text-xs
                                font-bold
                                uppercase
                                tracking-[0.18em]
                                text-slate-400
                                dark:text-slate-500
                            "
                        >
                            Contact
                        </h3>

                        <p
                            className="
                                mt-5
                                text-sm
                                leading-6
                                text-slate-500
                                dark:text-slate-400
                            "
                        >
                            Connect with Shiyora
                        </p>

                        {/* CONTACT LETTERS */}

                        <div
                            className="
                                mt-5
                                flex
                                items-center
                                gap-1.5
                                sm:gap-2
                            "
                        >

                            {contacts.map((contact, index) => (
                                <div
                                    key={`${contact.letter}-${index}`}
                                    className="group h-10 w-9 [perspective:600px]"
                                    title={contact.name}
                                >
                                    <div
                                        className="
                                            relative
                                            h-full
                                            w-full
                                            transition-transform
                                            duration-500
                                            ease-[cubic-bezier(.22,1,.36,1)]
                                            [transform-style:preserve-3d]
                                            group-hover:[transform:rotateY(180deg)]
                                        "
                                    >

                                        {/* FRONT */}

                                        <div
                                            className="
                                                absolute
                                                inset-0
                                                flex
                                                items-center
                                                justify-center
                                                rounded-lg
                                                border
                                                border-slate-200
                                                bg-white
                                                text-sm
                                                font-bold
                                                text-slate-700
                                                shadow-sm
                                                [backface-visibility:hidden]
                                                transition
                                                duration-300
                                                group-hover:border-blue-300
                                                dark:border-slate-700
                                                dark:bg-slate-900
                                                dark:text-slate-200
                                                dark:group-hover:border-teal-700
                                            "
                                        >
                                            {contact.letter}
                                        </div>

                                        {/* BACK */}

                                        <div
                                            className="
                                                absolute
                                                inset-0
                                                flex
                                                items-center
                                                justify-center
                                                rounded-lg
                                                bg-gradient-to-br
                                                from-blue-600
                                                to-teal-500
                                                text-white
                                                shadow-md
                                                shadow-blue-500/20
                                                [backface-visibility:hidden]
                                                [transform:rotateY(180deg)]
                                            "
                                        >

                                            {contact.internal ? (
                                                <Link
                                                    to="/contact"
                                                    className="
                                                        flex
                                                        h-full
                                                        w-full
                                                        items-center
                                                        justify-center
                                                    "
                                                >
                                                    {contact.icon}
                                                </Link>
                                            ) : (
                                                <a
                                                    href={contact.url}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="
                                                        flex
                                                        h-full
                                                        w-full
                                                        items-center
                                                        justify-center
                                                    "
                                                >
                                                    {contact.icon}
                                                </a>
                                            )}

                                        </div>

                                    </div>
                                </div>
                            ))}

                        </div>

                    </div>

                </div>

                {/* =================================================
                    BOTTOM
                ================================================= */}

                <div
                    className="
                        mt-12
                        flex
                        flex-col
                        gap-3
                        border-t
                        border-slate-200
                        pt-6
                        text-xs
                        text-slate-400
                        dark:border-slate-800
                        dark:text-slate-500
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                    "
                >

                    <p>
                        © {new Date().getFullYear()} Shiyora. All rights reserved.
                    </p>

                    <div className="flex items-center gap-5">

                        <Link
                            to="/privacy"
                            className="transition hover:text-blue-600 dark:hover:text-teal-400"
                        >
                            Privacy
                        </Link>

                        <Link
                            to="/terms"
                            className="transition hover:text-blue-600 dark:hover:text-teal-400"
                        >
                            Terms
                        </Link>

                    </div>

                </div>

            </div>
        </footer>
    );
}

export default Footer;