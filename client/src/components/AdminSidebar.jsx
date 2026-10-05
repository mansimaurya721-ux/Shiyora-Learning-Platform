import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
    LayoutDashboard,
    BookOpen,
    Users,
    UserRound,
    ClipboardList,
    BarChart3,
    Settings,
    LifeBuoy,
    LogOut,
    X,
    Sun,
    Moon,
} from "lucide-react";

const AdminSidebar = ({ isOpen, onClose }) => {
    const navigate = useNavigate();

    // ==============================
    // DARK / LIGHT MODE
    // ==============================
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
        setDarkMode((current) => !current);
    };

    // ==============================
    // ADMIN MENU
    // ==============================
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
            icon: UserRound,
        },
        {
            name: "Enrollments",
            path: "/admin/enrollments",
            icon: ClipboardList,
        },
        {
            name: "Subscriptions",
            path: "/admin/subscriptions",
            icon: ClipboardList,
        },
        {
            name: "Reports",
            path: "/admin/reports",
            icon: BarChart3,
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

    // ==============================
    // LOGOUT
    // ==============================
    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userRole");

        navigate("/login", { replace: true });
    };

    return (
        <>
            {/* =====================================
                MOBILE OVERLAY
            ====================================== */}
            {isOpen && (
                <div
                    className="
                        fixed
                        inset-0
                        z-40
                        bg-slate-900/40
                        backdrop-blur-sm
                        lg:hidden
                    "
                    onClick={onClose}
                />
            )}

            {/* =====================================
                SIDEBAR
            ====================================== */}
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
                    dark:shadow-[4px_0_25px_rgba(0,0,0,0.25)]

                    transition-transform
                    duration-300
                    ease-in-out

                    lg:translate-x-0

                    ${isOpen ? "translate-x-0" : "-translate-x-full"}
                `}
            >
                {/* =====================================
                    BRAND
                ====================================== */}
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
                        {/* Shiyora Logo */}
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
                                text-lg
                                font-bold
                                text-white
                                shadow-sm
                            "
                        >
                            S
                        </div>

                        <div>
                            <h1
                                className="
                                    text-lg
                                    font-bold
                                    tracking-tight
                                    text-slate-900
                                    dark:text-white
                                "
                            >
                                Shiyora
                            </h1>

                            <p
                                className="
                                    text-[11px]
                                    font-medium
                                    text-slate-500
                                    dark:text-slate-400
                                "
                            >
                                Admin Panel
                            </p>
                        </div>
                    </div>

                    {/* Mobile Close */}
                    <button
                        type="button"
                        onClick={onClose}
                        className="
                            rounded-lg
                            p-2
                            text-slate-500
                            transition
                            hover:bg-slate-100
                            hover:text-slate-800
                            dark:text-slate-400
                            dark:hover:bg-[#102337]
                            dark:hover:text-white
                            lg:hidden
                        "
                        aria-label="Close sidebar"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* =====================================
                    NAVIGATION
                ====================================== */}
                <nav className="flex-1 overflow-y-auto px-3 py-5">
                    <p
                        className="
                            mb-3
                            px-3
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-[0.15em]
                            text-slate-400
                            dark:text-slate-500
                        "
                    >
                        Administration
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
                                        group
                                        flex
                                        items-center
                                        gap-3
                                        rounded-xl
                                        px-3
                                        py-3
                                        text-sm
                                        font-medium
                                        transition-all
                                        duration-200

                                        ${isActive
                                            ? `
                                                    bg-blue-50
                                                    text-blue-600

                                                    dark:bg-blue-500/10
                                                    dark:text-blue-400
                                                `
                                            : `
                                                    text-slate-600

                                                    hover:bg-slate-50
                                                    hover:text-slate-900

                                                    dark:text-slate-400
                                                    dark:hover:bg-[#102337]
                                                    dark:hover:text-slate-100
                                                `
                                        }
                                    `
                                    }
                                >
                                    <Icon
                                        className="
                                            h-5
                                            w-5
                                            shrink-0
                                            text-teal-500
                                            transition-colors
                                            group-hover:text-blue-600
                                            dark:text-teal-400
                                            dark:group-hover:text-blue-400
                                        "
                                    />

                                    <span>{item.name}</span>
                                </NavLink>
                            );
                        })}
                    </div>
                </nav>

                {/* =====================================
                    BOTTOM AREA
                ====================================== */}
                <div
                    className="
                        shrink-0
                        border-t
                        border-slate-200
                        p-3
                        dark:border-[#1e334a]
                    "
                >
                    {/* =================================
                        THEME BUTTON
                    ================================== */}
                    <button
                        type="button"
                        onClick={toggleTheme}
                        className="
                            mb-3
                            flex
                            w-full
                            items-center
                            justify-between
                            rounded-xl
                            border
                            border-slate-200
                            bg-slate-50
                            px-3
                            py-3
                            text-sm
                            font-semibold
                            text-slate-700
                            transition-all
                            duration-200
                            hover:border-blue-200
                            hover:bg-blue-50

                            dark:border-[#1e334a]
                            dark:bg-[#0b1727]
                            dark:text-slate-300
                            dark:hover:border-teal-500/30
                            dark:hover:bg-[#102337]
                        "
                    >
                        <div className="flex items-center gap-3">
                            {darkMode ? (
                                <Moon
                                    className="
                                        h-5
                                        w-5
                                        text-teal-400
                                    "
                                />
                            ) : (
                                <Sun
                                    className="
                                        h-5
                                        w-5
                                        text-blue-600
                                    "
                                />
                            )}

                            <span>
                                {darkMode ? "Dark Mode" : "Light Mode"}
                            </span>
                        </div>

                        {/* Toggle */}
                        <div
                            className={`
                                relative
                                h-6
                                w-11
                                shrink-0
                                rounded-full
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
                                    absolute
                                    top-1
                                    h-4
                                    w-4
                                    rounded-full
                                    bg-white
                                    shadow
                                    transition-transform
                                    duration-200
                                    ${darkMode
                                        ? "translate-x-6"
                                        : "translate-x-1"
                                    }
                                `}
                            />
                        </div>
                    </button>

                    {/* =================================
                        ADMIN PROFILE
                    ================================== */}
                    <div
                        className="
                            mb-3
                            rounded-xl
                            border
                            border-slate-200
                            bg-slate-50
                            p-3

                            dark:border-[#1e334a]
                            dark:bg-[#0b1727]
                        "
                    >
                        <div className="flex items-center gap-3">
                            <div
                                className="
                                    flex
                                    h-10
                                    w-10
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-gradient-to-br
                                    from-blue-600
                                    to-teal-500
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
                                    Administrator
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* =================================
                        LOGOUT
                    ================================== */}
                    <button
                        type="button"
                        onClick={handleLogout}
                        className="
                            flex
                            w-full
                            items-center
                            gap-3
                            rounded-xl
                            px-3
                            py-3
                            text-sm
                            font-semibold
                            text-rose-600
                            transition
                            hover:bg-rose-50

                            dark:text-rose-400
                            dark:hover:bg-rose-500/10
                        "
                    >
                        <LogOut className="h-5 w-5" />

                        <span>Logout</span>
                    </button>
                </div>
            </aside>
        </>
    );
};

export default AdminSidebar;