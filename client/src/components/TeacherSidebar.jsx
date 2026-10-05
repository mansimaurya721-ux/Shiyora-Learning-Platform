import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const TeacherSidebar = () => {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("shiyora-theme") === "dark";
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("shiyora-theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("shiyora-theme", "light");
        }
    }, [darkMode]);

    const menuItems = [
        {
            label: "Dashboard",
            path: "/teacher/dashboard",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                    stroke="currentColor"
                    className="h-5 w-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1V10"
                    />
                </svg>
            ),
        },

        {
            label: "My Courses",
            path: "/teacher/courses",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                    stroke="currentColor"
                    className="h-5 w-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 5.5A2.5 2.5 0 016.5 3H20v16H6.5A2.5 2.5 0 014 16.5v-11z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 7h8M8 11h8M8 15h5"
                    />
                </svg>
            ),
        },

        {
            label: "Lessons",
            path: "/teacher/lessons",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                    stroke="currentColor"
                    className="h-5 w-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6.5A2.5 2.5 0 016.5 4H20v16H6.5A2.5 2.5 0 014 17.5v-11z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 8h8M8 12h8M8 16h5"
                    />
                </svg>
            ),
        },

        {
            label: "Quizzes",
            path: "/teacher/quizzes",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                    stroke="currentColor"
                    className="h-5 w-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 11l2 2 4-4"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 3h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2z"
                    />
                </svg>
            ),
        },

        {
            label: "Assignments",
            path: "/teacher/assignments",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                    stroke="currentColor"
                    className="h-5 w-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 3h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 8h8M8 12h8M8 16h5"
                    />
                </svg>
            ),
        },

        {
            label: "Students",
            path: "/teacher/students",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                    stroke="currentColor"
                    className="h-5 w-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"
                    />
                    <circle cx="9" cy="7" r="4" />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
                    />
                </svg>
            ),
        },

        {
            label: "Analytics",
            path: "/teacher/analytics",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                    stroke="currentColor"
                    className="h-5 w-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 19V5M4 19h16"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 16v-5M12 16V8M16 16v-8M20 16V6"
                    />
                </svg>
            ),
        },
    ];

    const accountItems = [
        {
            label: "My Profile",
            path: "/teacher/profile",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                    stroke="currentColor"
                    className="h-5 w-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 20.25a7.5 7.5 0 0115 0"
                    />
                </svg>
            ),
        },

        {
            label: "Support",
            path: "/teacher/support",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                    stroke="currentColor"
                    className="h-5 w-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.5 10.5h7M8.5 14h4"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3a9 9 0 019 9c0 4.97-4.03 9-9 9a8.96 8.96 0 01-4.24-1.06L3 21l1.06-4.76A8.96 8.96 0 013 12a9 9 0 019-9z"
                    />
                </svg>
            ),
        },
    ];

    return (
        <aside
            className="
                fixed left-0 top-0 z-50
                flex h-screen w-72 flex-col
                border-r border-slate-200
                bg-white text-slate-700
                transition-colors duration-300
                dark:border-[#1e334a]
                dark:bg-[#07111f]
                dark:text-slate-200
            "
        >
            {/* ================= BRAND ================= */}
            <div
                className="
                    flex h-20 shrink-0 items-center
                    border-b border-slate-200
                    px-6
                    dark:border-[#1e334a]
                "
            >
                <div className="flex items-center gap-3">
                    <div
                        className="
                            flex h-10 w-10 items-center justify-center
                            rounded-xl
                            border border-blue-200
                            bg-blue-50
                            dark:border-blue-400/20
                            dark:bg-blue-500/10
                        "
                    >
                        <span
                            className="
                                font-mono text-lg font-bold
                                text-blue-600
                                dark:text-blue-400
                            "
                        >
                            S
                        </span>
                    </div>

                    <div>
                        <h1
                            className="
                                font-['Space_Grotesk']
                                text-xl font-bold tracking-wide
                                text-slate-900
                                dark:text-white
                            "
                        >
                            Shiyora
                        </h1>

                        <p
                            className="
                                font-mono text-[10px]
                                uppercase tracking-[0.2em]
                                text-teal-600
                                dark:text-teal-400
                            "
                        >
                            Teacher Panel
                        </p>
                    </div>
                </div>
            </div>

            {/* ================= NAVIGATION ================= */}
            <nav className="flex-1 overflow-y-auto px-4 py-6">
                <p
                    className="
                        mb-3 px-3
                        font-mono text-[10px]
                        uppercase tracking-[0.2em]
                        text-slate-400
                        dark:text-slate-500
                    "
                >
                    Teaching Workspace
                </p>

                <div className="space-y-1.5">
                    {menuItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `group relative flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${isActive
                                    ? "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
                                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/70 dark:hover:text-white"
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    {isActive && (
                                        <span
                                            className="
                                                absolute left-0
                                                h-7 w-1
                                                rounded-r-full
                                                bg-blue-600
                                                dark:bg-blue-400
                                            "
                                        />
                                    )}

                                    <span
                                        className={
                                            isActive
                                                ? "text-blue-600 dark:text-blue-400"
                                                : "text-teal-600 group-hover:text-blue-600 dark:text-teal-400 dark:group-hover:text-blue-400"
                                        }
                                    >
                                        {item.icon}
                                    </span>

                                    <span>{item.label}</span>

                                    {isActive && (
                                        <span
                                            className="
                                                ml-auto h-1.5 w-1.5
                                                rounded-full
                                                bg-blue-600
                                                dark:bg-blue-400
                                            "
                                        />
                                    )}
                                </>
                            )}
                        </NavLink>
                    ))}
                </div>

                {/* ================= ACCOUNT ================= */}
                <div className="mt-8">
                    <p
                        className="
                            mb-3 px-3
                            font-mono text-[10px]
                            uppercase tracking-[0.2em]
                            text-slate-400
                            dark:text-slate-500
                        "
                    >
                        Account
                    </p>

                    <div className="space-y-1.5">
                        {accountItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) =>
                                    `group relative flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${isActive
                                        ? "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
                                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/70 dark:hover:text-white"
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        {isActive && (
                                            <span
                                                className="
                                                    absolute left-0
                                                    h-7 w-1
                                                    rounded-r-full
                                                    bg-blue-600
                                                    dark:bg-blue-400
                                                "
                                            />
                                        )}

                                        <span
                                            className={
                                                isActive
                                                    ? "text-blue-600 dark:text-blue-400"
                                                    : "text-teal-600 group-hover:text-blue-600 dark:text-teal-400 dark:group-hover:text-blue-400"
                                            }
                                        >
                                            {item.icon}
                                        </span>

                                        <span>{item.label}</span>

                                        {isActive && (
                                            <span
                                                className="
                                                    ml-auto h-1.5 w-1.5
                                                    rounded-full
                                                    bg-blue-600
                                                    dark:bg-blue-400
                                                "
                                            />
                                        )}
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </nav>

            {/* ================= THEME TOGGLE ================= */}
            <div className="shrink-0 px-4 pb-3">
                <button
                    type="button"
                    onClick={() => setDarkMode((prev) => !prev)}
                    className="
                        flex w-full items-center justify-between
                        rounded-xl border
                        border-slate-200
                        bg-slate-50
                        px-4 py-3
                        text-sm font-medium
                        text-slate-600
                        transition-all duration-200
                        hover:border-blue-200
                        hover:bg-blue-50
                        hover:text-blue-600
                        dark:border-[#1e334a]
                        dark:bg-[#0b1727]
                        dark:text-slate-300
                        dark:hover:border-teal-500/30
                        dark:hover:bg-teal-500/10
                        dark:hover:text-teal-400
                    "
                >
                    <span className="flex items-center gap-3">
                        {darkMode ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.8"
                                stroke="currentColor"
                                className="h-5 w-5 text-teal-500"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.8"
                                stroke="currentColor"
                                className="h-5 w-5 text-blue-500"
                            >
                                <circle
                                    cx="12"
                                    cy="12"
                                    r="4"
                                />

                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42"
                                />
                            </svg>
                        )}

                        <span>
                            {darkMode ? "Dark Mode" : "Light Mode"}
                        </span>
                    </span>

                    {/* Toggle Switch */}
                    <span
                        className={`
                            relative
                            flex h-6 w-11 shrink-0
                            items-center
                            rounded-full
                            p-0.5
                            transition-colors duration-300
                            ${darkMode
                                ? "bg-teal-500"
                                : "bg-slate-300"
                            }
                        `}
                    >
                        <span
                            className={`
                                block h-5 w-5
                                rounded-full
                                bg-white
                                shadow-md
                                transition-transform duration-300
                                ${darkMode
                                    ? "translate-x-5"
                                    : "translate-x-0"
                                }
                            `}
                        />
                    </span>
                </button>
            </div>

            {/* ================= TEACHER PROFILE ================= */}
            <div
                className="
                    shrink-0
                    border-t border-slate-200
                    p-4
                    dark:border-[#1e334a]
                "
            >
                <div
                    className="
                        rounded-2xl
                        border border-slate-200
                        bg-slate-50
                        p-3
                        dark:border-[#1e334a]
                        dark:bg-[#0b1727]
                    "
                >
                    <div className="flex items-center gap-3">

                        {/* Avatar */}
                        <div
                            className="
                                flex h-10 w-10 shrink-0
                                items-center justify-center
                                rounded-full
                                bg-blue-100
                                font-semibold
                                text-blue-600
                                dark:bg-blue-500/10
                                dark:text-blue-400
                            "
                        >
                            T
                        </div>

                        <div className="min-w-0 flex-1">
                            <p
                                className="
                                    truncate text-sm font-semibold
                                    text-slate-900
                                    dark:text-white
                                "
                            >
                                Teacher
                            </p>

                            <p
                                className="
                                    truncate font-mono text-[10px]
                                    text-teal-600
                                    dark:text-teal-400
                                "
                            >
                                Instructor
                            </p>
                        </div>

                        <button
                            type="button"
                            className="
                                text-slate-400
                                transition
                                hover:text-blue-600
                                dark:text-slate-500
                                dark:hover:text-teal-400
                            "
                            title="More options"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6.75h.008v.008H12V6.75zM12 12h.008v.008H12V12zM12 17.25h.008v.008H12v-.008z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                <p
                    className="
                        mt-3 text-center
                        font-mono text-[9px]
                        tracking-wider
                        text-slate-400
                        dark:text-slate-600
                    "
                >
                    SHIYORA • TEACHER WORKSPACE
                </p>
            </div>
        </aside>
    );
};

export default TeacherSidebar;