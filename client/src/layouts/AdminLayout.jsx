import { useEffect, useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import {
    LayoutDashboard,
    BookOpen,
    Users,
    GraduationCap,
    ClipboardList,
    BarChart3,
    Settings,
    LifeBuoy,
    LogOut,
    Menu,
    X,
    Sun,
    Moon,
} from "lucide-react";

// ============================================================
// FONT IMPORTS
// ============================================================

const FONT_IMPORTS =
    "@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500;600&display=swap');";

function AdminLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // =========================================================
    // THEME
    // =========================================================

    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("shiyora-theme") === "dark";
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            document.documentElement.style.colorScheme = "dark";
            localStorage.setItem("shiyora-theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            document.documentElement.style.colorScheme = "light";
            localStorage.setItem("shiyora-theme", "light");
        }
    }, [darkMode]);

    const toggleTheme = () => {
        setDarkMode((prev) => !prev);
    };

    // =========================================================
    // ADMIN MENU
    // =========================================================

    const menuItems = [
        {
            name: "Dashboard",
            path: "/admin/dashboard",
            icon: LayoutDashboard,
        },
        {
            name: "Courses",
            path: "/admin/courses",
            icon: BookOpen,
        },
        {
            name: "Students",
            path: "/admin/students",
            icon: Users,
        },
        {
            name: "Teachers",
            path: "/admin/teachers",
            icon: GraduationCap,
        },
        {
            name: "Enrollments",
            path: "/admin/enrollments",
            icon: ClipboardList,
        },
        {
            name: "Reports",
            path: "/admin/reports",
            icon: BarChart3,
        },
        {
            name: "Subscriptions",
            path: "/admin/subscriptions",
            icon: ClipboardList,
        },
        {
            name: "Help & Support",
            path: "/admin/support",
            icon: LifeBuoy,
        },
        {
            name: "Settings",
            path: "/admin/settings",
            icon: Settings,
        },
    ];

    // =========================================================
    // LOGOUT
    // =========================================================

    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userRole");

        window.location.href = "/login";
    };

    return (
        <div
            className="
                min-h-screen
                bg-slate-50
                text-slate-700
                dark:bg-[#07111f]
                dark:text-slate-300
            "
        >
            <style>{FONT_IMPORTS}</style>

            {/* =================================================
                MOBILE OVERLAY
            ================================================== */}

            {sidebarOpen && (
                <div
                    className="
                        fixed
                        inset-0
                        z-40
                        bg-slate-900/30
                        backdrop-blur-sm
                        dark:bg-black/50
                        lg:hidden
                    "
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* =================================================
                SIDEBAR
            ================================================== */}

            <aside
                className={`
                    fixed
                    left-0
                    top-0
                    z-50
                    flex
                    h-screen
                    w-64
                    flex-col

                    border-r
                    border-slate-200
                    bg-white

                    shadow-[4px_0_25px_rgba(15,23,42,0.06)]

                    dark:border-[#1e334a]
                    dark:bg-[#07111f]
                    dark:shadow-[4px_0_25px_rgba(0,0,0,0.2)]

                    transition-transform
                    duration-300
                    ease-in-out

                    lg:translate-x-0

                    ${sidebarOpen
                        ? "translate-x-0"
                        : "-translate-x-full"
                    }
                `}
            >
                {/* =================================================
                    BRAND
                ================================================== */}

                <div
                    className="
                        flex
                        h-20
                        shrink-0
                        items-center
                        justify-between
                        border-b
                        border-slate-200
                        px-5
                        dark:border-[#1e334a]
                    "
                >
                    <div className="flex items-center gap-3">

                        {/* Logo */}

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
                                font-['Space_Grotesk']
                                text-lg
                                font-bold
                                text-white
                                shadow-[0_6px_18px_rgba(37,99,235,0.18)]
                            "
                        >
                            S
                        </div>

                        {/* Brand */}

                        <div>
                            <h1
                                className="
                                    font-['Space_Grotesk']
                                    text-lg
                                    font-bold
                                    tracking-tight
                                    text-slate-900
                                    dark:text-slate-100
                                "
                            >
                                Shiyora
                            </h1>

                            <p
                                className="
                                    text-xs
                                    text-slate-400
                                    dark:text-slate-500
                                "
                            >
                                LMS Platform
                            </p>
                        </div>
                    </div>

                    {/* Mobile Close */}

                    <button
                        type="button"
                        onClick={() => setSidebarOpen(false)}
                        aria-label="Close sidebar"
                        className="
                            rounded-lg
                            p-2
                            text-slate-400
                            transition
                            hover:bg-slate-100
                            hover:text-slate-700
                            dark:text-slate-500
                            dark:hover:bg-slate-800
                            dark:hover:text-slate-200
                            lg:hidden
                        "
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* =================================================
                    ADMIN LABEL
                ================================================== */}

                <div className="shrink-0 px-5 pt-6">
                    <p
                        className="
                            font-['JetBrains_Mono']
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-[0.2em]
                            text-slate-400
                            dark:text-slate-500
                        "
                    >
                        Administration
                    </p>
                </div>

                {/* =================================================
                    NAVIGATION
                ================================================== */}

                <nav
                    className="
                        mt-3
                        flex-1
                        space-y-1
                        overflow-y-auto
                        px-3
                        pb-4
                    "
                >
                    {menuItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                onClick={() => setSidebarOpen(false)}
                                className={({ isActive }) =>
                                    `
                                    group
                                    flex
                                    items-center
                                    gap-3
                                    rounded-xl
                                    px-4
                                    py-3
                                    text-sm
                                    font-medium
                                    transition-all
                                    duration-200

                                    ${isActive
                                        ? `
                                                bg-blue-50
                                                text-blue-600
                                                shadow-[inset_3px_0_0_#2563eb]

                                                dark:bg-blue-500/10
                                                dark:text-blue-400
                                                dark:shadow-[inset_3px_0_0_#60a5fa]
                                            `
                                        : `
                                                text-slate-500
                                                hover:bg-slate-50
                                                hover:text-slate-800

                                                dark:text-slate-400
                                                dark:hover:bg-slate-800/70
                                                dark:hover:text-slate-200
                                            `
                                    }
                                `
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        <Icon
                                            size={20}
                                            strokeWidth={
                                                isActive ? 2.2 : 2
                                            }
                                            className={`
                                                shrink-0
                                                transition-colors
                                                duration-200

                                                ${isActive
                                                    ? "text-blue-600 dark:text-blue-400"
                                                    : `
                                                            text-teal-500
                                                            group-hover:text-blue-600

                                                            dark:text-teal-400
                                                            dark:group-hover:text-blue-400
                                                        `
                                                }
                                            `}
                                        />

                                        <span className="truncate">
                                            {item.name}
                                        </span>

                                        {isActive && (
                                            <span
                                                className="
                                                    ml-auto
                                                    h-1.5
                                                    w-1.5
                                                    shrink-0
                                                    rounded-full
                                                    bg-teal-500
                                                    dark:bg-teal-400
                                                "
                                            />
                                        )}
                                    </>
                                )}
                            </NavLink>
                        );
                    })}
                </nav>

                {/* =================================================
                    BOTTOM AREA
                ================================================== */}

                <div
                    className="
                        shrink-0
                        border-t
                        border-slate-200
                        bg-slate-50
                        p-3
                        dark:border-[#1e334a]
                        dark:bg-[#0b1727]
                    "
                >
                    {/* =================================================
                        THEME SWITCH
                    ================================================== */}

                    <div
                        className="
                            mb-3
                            flex
                            items-center
                            justify-between
                            rounded-xl
                            border
                            border-slate-200
                            bg-white
                            px-3
                            py-2.5
                            dark:border-[#1e334a]
                            dark:bg-[#102337]
                        "
                    >
                        {/* Left Side */}

                        <div className="flex items-center gap-2.5">

                            <div
                                className="
                                    flex
                                    h-8
                                    w-8
                                    items-center
                                    justify-center
                                    rounded-lg
                                    bg-blue-50
                                    text-blue-600
                                    dark:bg-teal-500/10
                                    dark:text-teal-400
                                "
                            >
                                {darkMode ? (
                                    <Moon size={17} />
                                ) : (
                                    <Sun size={17} />
                                )}
                            </div>

                            <div>
                                <p
                                    className="
                                        text-xs
                                        font-semibold
                                        text-slate-800
                                        dark:text-slate-200
                                    "
                                >
                                    Appearance
                                </p>

                                <p
                                    className="
                                        text-[10px]
                                        text-slate-400
                                        dark:text-slate-500
                                    "
                                >
                                    {darkMode ? "Dark" : "Light"}
                                </p>
                            </div>
                        </div>

                        {/* Compact Toggle */}

                        <button
                            type="button"
                            onClick={toggleTheme}
                            aria-label={
                                darkMode
                                    ? "Switch to light mode"
                                    : "Switch to dark mode"
                            }
                            className={`
                                relative
                                h-6
                                w-11
                                shrink-0
                                rounded-full
                                p-0.5
                                transition-colors
                                duration-200
                                focus:outline-none
                                focus:ring-2
                                focus:ring-blue-500/30

                                ${darkMode
                                    ? "bg-teal-500"
                                    : "bg-slate-300"
                                }
                            `}
                        >
                            <span
                                className={`
                                    block
                                    h-5
                                    w-5
                                    rounded-full
                                    bg-white
                                    shadow-sm
                                    transition-transform
                                    duration-200

                                    ${darkMode
                                        ? "translate-x-5"
                                        : "translate-x-0"
                                    }
                                `}
                            />
                        </button>
                    </div>

                    {/* =================================================
                        ADMIN PROFILE
                    ================================================== */}

                    <div
                        className="
                            mb-2
                            flex
                            items-center
                            gap-3
                            rounded-xl
                            border
                            border-slate-200
                            bg-white
                            px-3
                            py-3
                            dark:border-[#1e334a]
                            dark:bg-[#102337]
                        "
                    >
                        <div
                            className="
                                flex
                                h-9
                                w-9
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                bg-gradient-to-br
                                from-blue-600
                                to-teal-500
                                font-['Space_Grotesk']
                                text-sm
                                font-bold
                                text-white
                            "
                        >
                            A
                        </div>

                        <div className="min-w-0">
                            <p
                                className="
                                    truncate
                                    text-sm
                                    font-semibold
                                    text-slate-900
                                    dark:text-slate-100
                                "
                            >
                                Admin
                            </p>

                            <p
                                className="
                                    truncate
                                    text-xs
                                    text-slate-500
                                    dark:text-slate-400
                                "
                            >
                                Organization Admin
                            </p>
                        </div>
                    </div>

                    {/* =================================================
                        LOGOUT
                    ================================================== */}

                    <button
                        type="button"
                        onClick={handleLogout}
                        className="
                            group
                            flex
                            w-full
                            items-center
                            gap-3
                            rounded-xl
                            px-4
                            py-3
                            text-sm
                            font-medium
                            text-slate-500
                            transition-all
                            duration-200
                            hover:bg-rose-50
                            hover:text-rose-600
                            dark:text-slate-400
                            dark:hover:bg-rose-500/10
                            dark:hover:text-rose-400
                        "
                    >
                        <LogOut
                            size={20}
                            className="
                                shrink-0
                                text-slate-400
                                transition-colors
                                group-hover:text-rose-600
                                dark:text-slate-500
                                dark:group-hover:text-rose-400
                            "
                        />

                        <span>Logout</span>
                    </button>
                </div>
            </aside>

            {/* =================================================
                MAIN CONTENT
            ================================================== */}

            <main className="min-h-screen lg:ml-64">

                {/* Mobile Header */}

                <header
                    className="
                        sticky
                        top-0
                        z-30
                        flex
                        h-16
                        items-center
                        border-b
                        border-slate-200
                        bg-white/95
                        px-4
                        backdrop-blur
                        dark:border-[#1e334a]
                        dark:bg-[#07111f]/95
                        lg:hidden
                    "
                >
                    <button
                        type="button"
                        onClick={() => setSidebarOpen(true)}
                        aria-label="Open sidebar"
                        className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-xl
                            bg-blue-50
                            text-blue-600
                            transition
                            hover:bg-blue-100
                            dark:bg-blue-500/10
                            dark:text-blue-400
                            dark:hover:bg-blue-500/20
                        "
                    >
                        <Menu size={21} />
                    </button>

                    <div className="ml-3 flex items-center gap-2">

                        <div
                            className="
                                flex
                                h-8
                                w-8
                                items-center
                                justify-center
                                rounded-lg
                                bg-gradient-to-br
                                from-blue-600
                                to-teal-500
                                font-['Space_Grotesk']
                                text-sm
                                font-bold
                                text-white
                            "
                        >
                            S
                        </div>

                        <span
                            className="
                                font-['Space_Grotesk']
                                font-bold
                                text-slate-900
                                dark:text-slate-100
                            "
                        >
                            Shiyora
                        </span>
                    </div>
                </header>

                {/* Page Content */}

                <section
                    className="
                        relative
                        min-h-screen
                        overflow-hidden
                        bg-slate-50
                        dark:bg-[#07111f]
                    "
                >
                    <div
                        className="
                            pointer-events-none
                            absolute
                            -right-32
                            -top-32
                            h-96
                            w-96
                            rounded-full
                            bg-blue-500/5
                            blur-3xl
                            dark:bg-blue-400/10
                        "
                    />

                    <div
                        className="
                            pointer-events-none
                            absolute
                            -bottom-40
                            left-1/3
                            h-96
                            w-96
                            rounded-full
                            bg-teal-500/5
                            blur-3xl
                            dark:bg-teal-400/10
                        "
                    />

                    <div className="relative min-h-screen">
                        <Outlet />
                    </div>
                </section>
            </main>
        </div>
    );
}

export default AdminLayout;