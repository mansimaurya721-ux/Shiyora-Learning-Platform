//import React from "react";
import { NavLink } from "react-router-dom";

const TeacherSidebar = () => {
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
                    className="w-5 h-5"
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
                    className="w-5 h-5"
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
            label: "Create Course",
            path: "/teacher/courses/create",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                    stroke="currentColor"
                    className="w-5 h-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 5v14M5 12h14"
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
                    className="w-5 h-5"
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
                    className="w-5 h-5"
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
                    className="w-5 h-5"
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
                    className="w-5 h-5"
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
                    className="w-5 h-5"
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

    return (
        <aside className="fixed left-0 top-0 z-50 flex h-screen w-72 flex-col border-r border-[#F2B84B]/10 bg-[#141C17] text-[#F3EEDD]">

            {/* Brand */}
            <div className="flex h-20 items-center border-b border-[#F2B84B]/10 px-6">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#F2B84B]/30 bg-[#1B241E]">
                        <span className="font-mono text-lg font-bold text-[#F2B84B]">
                            S
                        </span>
                    </div>

                    <div>
                        <h1 className="font-['Space_Grotesk'] text-xl font-bold tracking-wide">
                            Shiyora
                        </h1>

                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#7C9A82]">
                            Teacher Panel
                        </p>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto px-4 py-6">

                <p className="mb-3 px-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#7C9A82]">
                    Teaching Workspace
                </p>

                <div className="space-y-1.5">
                    {menuItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `group relative flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${isActive
                                    ? "bg-[#F2B84B]/10 text-[#F2B84B]"
                                    : "text-[#F3EEDD]/65 hover:bg-[#1B241E] hover:text-[#F3EEDD]"
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    {/* Active marker */}
                                    {isActive && (
                                        <span className="absolute left-0 h-7 w-1 rounded-r-full bg-[#F2B84B]" />
                                    )}

                                    <span
                                        className={
                                            isActive
                                                ? "text-[#F2B84B]"
                                                : "text-[#7C9A82] group-hover:text-[#F2B84B]"
                                        }
                                    >
                                        {item.icon}
                                    </span>

                                    <span>{item.label}</span>

                                    {isActive && (
                                        <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#F2B84B]" />
                                    )}
                                </>
                            )}
                        </NavLink>
                    ))}
                </div>

                {/* Management Section */}
                <div className="mt-8">
                    <p className="mb-3 px-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#7C9A82]">
                        Account
                    </p>

                    <NavLink
                        to="/teacher/profile"
                        className={({ isActive }) =>
                            `group relative flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${isActive
                                ? "bg-[#F2B84B]/10 text-[#F2B84B]"
                                : "text-[#F3EEDD]/65 hover:bg-[#1B241E] hover:text-[#F3EEDD]"
                            }`
                        }
                    >
                        {({ isActive }) => (
                            <>
                                {isActive && (
                                    <span className="absolute left-0 h-7 w-1 rounded-r-full bg-[#F2B84B]" />
                                )}

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.8"
                                    stroke="currentColor"
                                    className={`h-5 w-5 ${isActive
                                        ? "text-[#F2B84B]"
                                        : "text-[#7C9A82] group-hover:text-[#F2B84B]"
                                        }`}
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

                                <span>My Profile</span>
                            </>
                        )}
                    </NavLink>
                </div>
            </nav>

            {/* Teacher Profile */}
            <div className="border-t border-[#F2B84B]/10 p-4">

                <div className="rounded-2xl border border-[#F2B84B]/10 bg-[#1B241E] p-3">

                    <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F2B84B]/15 font-semibold text-[#F2B84B]">
                            T
                        </div>

                        <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-semibold text-[#F3EEDD]">
                                Teacher
                            </p>

                            <p className="truncate font-mono text-[10px] text-[#7C9A82]">
                                Instructor
                            </p>
                        </div>

                        <button
                            type="button"
                            className="text-[#F3EEDD]/40 transition hover:text-[#F2B84B]"
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

                <p className="mt-3 text-center font-mono text-[9px] tracking-wider text-[#F3EEDD]/25">
                    SHIYORA • TEACHER WORKSPACE
                </p>
            </div>
        </aside>
    );
};

export default TeacherSidebar;