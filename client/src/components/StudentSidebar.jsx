import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
    LayoutDashboard,
    BookOpen,
    GraduationCap,
    ClipboardList,
    TrendingUp,
    Award,
    LifeBuoy,
    User,
    LogOut,
    X,
    Sun,
    Moon,
    ChevronRight,
} from "lucide-react";

const StudentSidebar = ({ isOpen, onClose }) => {
    const navigate = useNavigate();

    // =========================================================
    // THEME
    // =========================================================

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

    const toggleTheme = () => {
        setDarkMode((previous) => !previous);
    };

    // =========================================================
    // MENU ITEMS
    // =========================================================

    const menuItems = [
        {
            name: "Dashboard",
            path: "/student/dashboard",
            icon: LayoutDashboard,
        },
        {
            name: "My Courses",
            path: "/student/my-courses",
            icon: BookOpen,
        },
        {
            name: "All Courses",
            path: "/student/all-courses",
            icon: GraduationCap,
        },
        {
            name: "Assignments",
            path: "/student/assignments",
            icon: ClipboardList,
        },
        {
            name: "Quizzes",
            path: "/student/quizzes",
            icon: ClipboardList,
        },
        {
            name: "Progress",
            path: "/student/progress",
            icon: TrendingUp,
        },
        {
            name: "Certificates",
            path: "/student/certificates",
            icon: Award,
        },
        {
            name: "Help & Support",
            path: "/student/support",
            icon: LifeBuoy,
        },
        {
            name: "Profile",
            path: "/student/profile",
            icon: User,
        },
    ];

    // =========================================================
    // LOGOUT
    // =========================================================

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("userRole");
        localStorage.removeItem("isLoggedIn");

        onClose();
        navigate("/login");
    };

    // =========================================================
    // UI
    // =========================================================

    return (
        <>
            {/* =====================================================
                MOBILE OVERLAY
            ===================================================== */}

            {isOpen && (
                <div
                    className="
                        fixed inset-0 z-40
                        bg-slate-950/50
                        backdrop-blur-sm
                        lg:hidden
                    "
                    onClick={onClose}
                />
            )}

            {/* =====================================================
                SIDEBAR
            ===================================================== */}

            <aside
                className={`
                    fixed left-0 top-0 z-50
                    flex h-screen w-64 flex-col
                    border-r border-slate-200
                    bg-white
                    text-slate-700
                    shadow-xl shadow-slate-200/40
                    transition-transform duration-300

                    dark:border-[#1e334a]
                    dark:bg-[#0b1727]
                    dark:text-slate-300
                    dark:shadow-black/20

                    ${isOpen ? "translate-x-0" : "-translate-x-full"}
                    lg:translate-x-0
                `}
            >
                {/* =================================================
                    LOGO
                ================================================= */}

                <div
                    className="
                        flex h-20 shrink-0
                        items-center justify-between
                        border-b border-slate-200
                        px-5

                        dark:border-[#1e334a]
                    "
                >
                    <div className="flex items-center gap-3">

                        {/* Logo */}
                        <div
                            className="
                                flex h-10 w-10
                                items-center justify-center
                                rounded-xl
                                bg-gradient-to-br
                                from-blue-600 to-teal-500
                                text-sm font-bold
                                text-white
                                shadow-lg
                                shadow-blue-500/20
                            "
                        >
                            S
                        </div>

                        {/* Brand */}
                        <div>
                            <h1
                                className="
                                    text-xl font-bold
                                    tracking-tight
                                    text-slate-900
                                    dark:text-white
                                "
                            >
                                Shiyora
                            </h1>

                            <p
                                className="
                                    mt-0.5
                                    text-[11px]
                                    font-medium
                                    text-slate-500
                                    dark:text-slate-400
                                "
                            >
                                Student Portal
                            </p>
                        </div>
                    </div>

                    {/* Mobile Close */}
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close sidebar"
                        className="
                            rounded-lg p-2
                            text-slate-500
                            transition-colors
                            hover:bg-slate-100
                            hover:text-slate-900

                            dark:text-slate-400
                            dark:hover:bg-[#102337]
                            dark:hover:text-white

                            lg:hidden
                        "
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* =================================================
                    NAVIGATION
                ================================================= */}

                <nav className="flex-1 overflow-y-auto px-3 py-5">

                    {/* Section */}
                    <p
                        className="
                            mb-3 px-3
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.16em]
                            text-slate-400
                            dark:text-slate-500
                        "
                    >
                        Learning
                    </p>

                    <div className="space-y-1">
                        {menuItems.map((item) => {
                            const Icon = item.icon;

                            return (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    onClick={onClose}
                                    className={({ isActive }) =>
                                        `
                                        group relative
                                        flex items-center gap-3
                                        rounded-xl
                                        px-3 py-2.5
                                        text-sm font-medium
                                        transition-all duration-200

                                        ${isActive
                                            ? `
                                                    bg-blue-50
                                                    text-blue-700
                                                    shadow-sm

                                                    dark:bg-teal-500/10
                                                    dark:text-teal-300
                                                `
                                            : `
                                                    text-slate-600
                                                    hover:bg-slate-100
                                                    hover:text-slate-900

                                                    dark:text-slate-400
                                                    dark:hover:bg-[#102337]
                                                    dark:hover:text-slate-100
                                                `
                                        }
                                    `
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            {/* Active Indicator */}
                                            {isActive && (
                                                <span
                                                    className="
                                                        absolute left-0
                                                        h-6 w-[3px]
                                                        rounded-r-full
                                                        bg-gradient-to-b
                                                        from-blue-600
                                                        to-teal-500
                                                    "
                                                />
                                            )}

                                            {/* Icon */}
                                            <span
                                                className={`
                                                    flex h-8 w-8
                                                    shrink-0
                                                    items-center
                                                    justify-center
                                                    rounded-lg
                                                    transition-all duration-200

                                                    ${isActive
                                                        ? `
                                                                bg-blue-100
                                                                text-blue-600

                                                                dark:bg-teal-500/15
                                                                dark:text-teal-300
                                                            `
                                                        : `
                                                                text-slate-500
                                                                group-hover:bg-white
                                                                group-hover:text-blue-600

                                                                dark:text-slate-500
                                                                dark:group-hover:bg-[#1e334a]
                                                                dark:group-hover:text-teal-300
                                                            `
                                                    }
                                                `}
                                            >
                                                <Icon
                                                    size={17}
                                                    strokeWidth={2}
                                                />
                                            </span>

                                            <span className="truncate">
                                                {item.name}
                                            </span>

                                            {/* Active Dot */}
                                            {isActive && (
                                                <span
                                                    className="
                                                        ml-auto
                                                        h-1.5 w-1.5
                                                        rounded-full
                                                        bg-blue-600
                                                        dark:bg-teal-400
                                                    "
                                                />
                                            )}
                                        </>
                                    )}
                                </NavLink>
                            );
                        })}
                    </div>
                </nav>

                {/* =================================================
                    BOTTOM SECTION
                ================================================= */}

                <div
                    className="
                        shrink-0
                        border-t border-slate-200
                        p-3

                        dark:border-[#1e334a]
                    "
                >
                    {/* =================================================
                        STUDENT PROFILE
                    ================================================= */}

                    <div
                        className="
                            mb-2
                            flex items-center gap-3
                            rounded-xl
                            border border-slate-200
                            bg-slate-50
                            p-3

                            dark:border-[#1e334a]
                            dark:bg-[#102337]
                        "
                    >
                        {/* Avatar */}
                        <div
                            className="
                                flex h-10 w-10
                                shrink-0
                                items-center justify-center
                                rounded-full
                                bg-gradient-to-br
                                from-blue-600 to-teal-500
                                text-sm font-bold
                                text-white
                                shadow-md
                                shadow-blue-500/20
                            "
                        >
                            S
                        </div>

                        {/* User Info */}
                        <div className="min-w-0 flex-1">
                            <p
                                className="
                                    truncate
                                    text-sm font-semibold
                                    text-slate-900
                                    dark:text-white
                                "
                            >
                                Student
                            </p>

                            <p
                                className="
                                    truncate
                                    text-xs
                                    text-slate-500
                                    dark:text-slate-400
                                "
                            >
                                Learner
                            </p>
                        </div>

                        {/* Online */}
                        <span
                            className="
                                h-2 w-2
                                shrink-0
                                rounded-full
                                bg-emerald-500
                                ring-4
                                ring-emerald-500/10
                            "
                            title="Online"
                        />
                    </div>

                    {/* =================================================
                        THEME TOGGLE
                    ================================================= */}

                    <div
                        className="
                            mb-2
                            flex items-center
                            justify-between
                            rounded-xl
                            border border-slate-200
                            bg-slate-50
                            px-3 py-2.5

                            dark:border-[#1e334a]
                            dark:bg-[#102337]
                        "
                    >
                        {/* Theme Info */}
                        <div className="flex items-center gap-2.5">

                            <div
                                className="
                                    flex h-8 w-8
                                    items-center justify-center
                                    rounded-lg
                                    bg-white
                                    text-slate-600
                                    shadow-sm

                                    dark:bg-[#172337]
                                    dark:text-slate-300
                                "
                            >
                                {darkMode ? (
                                    <Moon size={15} />
                                ) : (
                                    <Sun size={15} />
                                )}
                            </div>

                            <div>
                                <p
                                    className="
                                        text-[10px]
                                        font-bold
                                        text-slate-900
                                        dark:text-white
                                    "
                                >
                                    Appearance
                                </p>

                                <p
                                    className="
                                        text-[8px]
                                        font-semibold
                                        text-slate-500
                                        dark:text-slate-400
                                    "
                                >
                                    {darkMode
                                        ? "Dark mode"
                                        : "Light mode"}
                                </p>
                            </div>
                        </div>

                        {/* Toggle Button */}
                        <button
                            type="button"
                            onClick={toggleTheme}
                            aria-label={
                                darkMode
                                    ? "Switch to light mode"
                                    : "Switch to dark mode"
                            }
                            title={
                                darkMode
                                    ? "Switch to light mode"
                                    : "Switch to dark mode"
                            }
                            className={`
                                relative
                                h-6 w-11
                                rounded-full
                                p-0.5
                                transition-colors
                                duration-200

                                ${darkMode
                                    ? "bg-teal-500"
                                    : "bg-slate-300"
                                }
                            `}
                        >
                            <span
                                className={`
                                    flex h-5 w-5
                                    items-center justify-center
                                    rounded-full
                                    bg-white
                                    text-slate-600
                                    shadow
                                    transition-transform
                                    duration-200

                                    ${darkMode
                                        ? "translate-x-5"
                                        : "translate-x-0"
                                    }
                                `}
                            >
                                {darkMode ? (
                                    <Moon size={11} />
                                ) : (
                                    <Sun size={11} />
                                )}
                            </span>
                        </button>
                    </div>

                    {/* =================================================
                        LOGOUT
                    ================================================= */}

                    <button
                        type="button"
                        onClick={handleLogout}
                        className="
                            group
                            flex w-full
                            items-center gap-3
                            rounded-xl
                            px-3 py-2.5
                            text-sm font-medium
                            text-slate-600
                            transition-all duration-200

                            hover:bg-red-50
                            hover:text-red-600

                            dark:text-slate-400
                            dark:hover:bg-red-500/10
                            dark:hover:text-red-400
                        "
                    >
                        <span
                            className="
                                flex h-8 w-8
                                items-center justify-center
                                rounded-lg
                                transition-colors

                                group-hover:bg-red-100

                                dark:group-hover:bg-red-500/10
                            "
                        >
                            <LogOut size={17} />
                        </span>

                        <span>Logout</span>

                        <ChevronRight
                            size={15}
                            className="
                                ml-auto
                                opacity-0
                                transition-opacity
                                group-hover:opacity-100
                            "
                        />
                    </button>
                </div>
            </aside>
        </>
    );
};

export default StudentSidebar;