import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import {
    LayoutDashboard,
    Building2,
    Users,
    BookOpen,
    CreditCard,
    ClipboardList,
    BarChart3,
    MessageCircle,
    Settings,
    LogOut,
    X,
    Sun,
    Moon,
    ChevronRight,
    ShieldCheck,
    PanelLeftClose,
    PanelLeftOpen,
} from "lucide-react";

const Sidebar = ({
    isOpen = false,
    onClose = () => {},
    sidebarWidth = 260,
    collapsed = false,
    onResize = () => {},
    onToggleCollapse = () => {},
}) => {
    const navigate = useNavigate();

    // =========================================================
    // RESIZING
    // =========================================================

    const [isResizing, setIsResizing] = useState(false);

    const startResizing = (event) => {
        // Desktop only
        if (window.innerWidth < 1024) {
            return;
        }

        event.preventDefault();

        setIsResizing(true);

        const handlePointerMove = (moveEvent) => {
            const newWidth = moveEvent.clientX;

            onResize(newWidth);
        };

        const stopResizing = () => {
            setIsResizing(false);

            document.removeEventListener(
                "pointermove",
                handlePointerMove
            );

            document.removeEventListener(
                "pointerup",
                stopResizing
            );
        };

        document.addEventListener(
            "pointermove",
            handlePointerMove
        );

        document.addEventListener(
            "pointerup",
            stopResizing
        );
    };

    // =========================================================
    // RESET SIDEBAR WIDTH
    // =========================================================

    const resetSidebarWidth = () => {
        onResize(260);
    };

    // =========================================================
    // THEME
    // =========================================================

    const [darkMode, setDarkMode] = useState(() => {
        return (
            localStorage.getItem("shiyora-theme") === "dark"
        );
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");

            localStorage.setItem(
                "shiyora-theme",
                "dark"
            );
        } else {
            document.documentElement.classList.remove("dark");

            localStorage.setItem(
                "shiyora-theme",
                "light"
            );
        }
    }, [darkMode]);

    // =========================================================
    // SUPER ADMIN
    // =========================================================

    const admin = {
        name: "Super Admin",
        role: "Platform Administrator",
        initials: "SA",
    };

    // =========================================================
    // MENU
    // =========================================================

    const menuGroups = [
        {
            title: "MAIN",
            items: [
                {
                    name: "Dashboard",
                    path: "/superadmin/dashboard",
                    icon: LayoutDashboard,
                },
            ],
        },

        {
            title: "MANAGEMENT",
            items: [
                {
                    name: "Organizations",
                    path: "/superadmin/organizations",
                    icon: Building2,
                },

                {
                    name: "New Registrations",
                    path: "/superadmin/registrations",
                    icon: ClipboardList,
                    badge: 3,
                },

                {
                    name: "Users",
                    path: "/superadmin/users",
                    icon: Users,
                },

                {
                    name: "Courses",
                    path: "/superadmin/courses",
                    icon: BookOpen,
                },

                {
                    name: "Subscriptions",
                    path: "/superadmin/subscriptions",
                    icon: CreditCard,
                },
            ],
        },

        {
            title: "ANALYTICS",
            items: [
                {
                    name: "Reports",
                    path: "/superadmin/reports",
                    icon: BarChart3,
                },

                {
                    name: "Support",
                    path: "/superadmin/support",
                    icon: MessageCircle,
                },
            ],
        },

        {
            title: "SYSTEM",
            items: [
                {
                    name: "Settings",
                    path: "/superadmin/settings",
                    icon: Settings,
                },
            ],
        },
    ];

    // =========================================================
    // LOGOUT
    // =========================================================

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userRole");

        onClose();

        navigate("/login");
    };

    return (
        <>
            {/* =====================================================
                MOBILE OVERLAY
            ====================================================== */}

            {isOpen && (
                <div
                    onClick={onClose}
                    className="
                        fixed
                        inset-0
                        z-40
                        bg-black/40
                        backdrop-blur-sm
                        lg:hidden
                    "
                />
            )}

            {/* =====================================================
                SIDEBAR
            ====================================================== */}

            <aside
                className={`
                    fixed
                    left-0
                    top-0
                    z-50

                    flex
                    h-screen
                    flex-col

                    border-r
                    border-[#d9e0e8]
                    bg-white
                    shadow-xl

                    transition-transform
                    duration-300

                    dark:border-[#1e334a]
                    dark:bg-[#0b1727]

                    w-[270px]

                    lg:w-[var(--sidebar-width)]
                    lg:translate-x-0
                    lg:shadow-none

                    ${isOpen
                        ? "translate-x-0"
                        : "-translate-x-full"
                    }

                    ${isResizing
                        ? "select-none"
                        : ""
                    }
                `}
            >
                {/* =================================================
                    LOGO / HEADER
                ================================================== */}

                <div
                    className={`
                        flex
                        h-[72px]
                        shrink-0
                        items-center
                        border-b
                        border-[#d9e0e8]

                        dark:border-[#1e334a]

                        ${
                            collapsed
                                ? "justify-center px-2"
                                : "justify-between px-5"
                        }
                    `}
                >
                    {/* BRAND */}

                    <div
                        className={`
                            flex
                            items-center

                            ${
                                collapsed
                                    ? "justify-center"
                                    : "gap-3"
                            }
                        `}
                    >
                        {/* LOGO */}

                        <div
                            className="
                                flex
                                h-10
                                w-10
                                shrink-0
                                items-center
                                justify-center

                                rounded-xl

                                bg-gradient-to-br
                                from-blue-600
                                to-teal-500

                                shadow-md
                            "
                        >
                            <span className="text-base font-black text-white">
                                S
                            </span>
                        </div>

                        {/* BRAND TEXT */}

                        {!collapsed && (
                            <div>
                                <h1
                                    className="
                                        text-[17px]
                                        font-bold
                                        text-[#0f172a]

                                        dark:text-white
                                    "
                                >
                                    Shiyora
                                </h1>

                                <p
                                    className="
                                        mt-0.5
                                        text-[9px]
                                        font-bold
                                        uppercase
                                        tracking-[0.13em]
                                        text-[#475569]

                                        dark:text-[#94a3b8]
                                    "
                                >
                                    SuperAdmin Panel
                                </p>
                            </div>
                        )}
                    </div>

                    {/* =================================================
                        DESKTOP COLLAPSE BUTTON
                    ================================================== */}

                    <button
                        type="button"
                        onClick={onToggleCollapse}
                        className="
                            hidden

                            h-8
                            w-8
                            items-center
                            justify-center

                            rounded-lg

                            text-[#475569]

                            transition

                            hover:bg-[#f1f5f9]
                            hover:text-[#0f172a]

                            dark:text-[#94a3b8]
                            dark:hover:bg-[#172337]
                            dark:hover:text-white

                            lg:flex
                        "
                        title={
                            collapsed
                                ? "Expand sidebar"
                                : "Collapse sidebar"
                        }
                        aria-label={
                            collapsed
                                ? "Expand sidebar"
                                : "Collapse sidebar"
                        }
                    >
                        {collapsed ? (
                            <PanelLeftOpen size={17} />
                        ) : (
                            <PanelLeftClose size={17} />
                        )}
                    </button>

                    {/* =================================================
                        MOBILE CLOSE
                    ================================================== */}

                    <button
                        type="button"
                        onClick={onClose}
                        className="
                            flex
                            h-8
                            w-8
                            items-center
                            justify-center

                            rounded-lg

                            text-[#334155]

                            hover:bg-[#f1f5f9]
                            hover:text-[#0f172a]

                            dark:text-[#cbd5e1]
                            dark:hover:bg-[#172337]
                            dark:hover:text-white

                            lg:hidden
                        "
                        aria-label="Close sidebar"
                    >
                        <X size={18} />
                    </button>
                </div>

                {/* =====================================================
                    PROFILE
                ====================================================== */}

                <div
                    className={`
                        pt-4

                        ${
                            collapsed
                                ? "px-2"
                                : "px-4"
                        }
                    `}
                >
                    <div
                        className={`
                            flex
                            items-center

                            rounded-2xl
                            border
                            border-[#d9e0e8]
                            bg-[#f8fafc]

                            dark:border-[#1e334a]
                            dark:bg-[#101f32]

                            ${
                                collapsed
                                    ? "justify-center p-2"
                                    : "gap-3 p-3"
                            }
                        `}
                    >
                        {/* AVATAR */}

                        <div className="relative shrink-0">
                            <div
                                className="
                                    flex
                                    h-11
                                    w-11
                                    items-center
                                    justify-center

                                    rounded-xl

                                    bg-gradient-to-br
                                    from-blue-600
                                    to-teal-500

                                    text-xs
                                    font-bold
                                    text-white
                                "
                            >
                                {admin.initials}
                            </div>

                            <span
                                className="
                                    absolute
                                    -bottom-0.5
                                    -right-0.5
                                    h-3
                                    w-3

                                    rounded-full

                                    border-2
                                    border-white

                                    bg-emerald-500

                                    dark:border-[#101f32]
                                "
                            />
                        </div>

                        {/* PROFILE DETAILS */}

                        {!collapsed && (
                            <>
                                <div className="min-w-0 flex-1">
                                    <div className="flex items-center gap-1.5">
                                        <p
                                            className="
                                                truncate
                                                text-[13px]
                                                font-bold
                                                text-[#0f172a]

                                                dark:text-white
                                            "
                                        >
                                            Super Admin
                                        </p>

                                        <ShieldCheck
                                            size={13}
                                            className="
                                                shrink-0
                                                text-teal-600

                                                dark:text-teal-400
                                            "
                                        />
                                    </div>

                                    <p
                                        className="
                                            mt-1
                                            truncate
                                            text-[10px]
                                            font-semibold
                                            text-[#475569]

                                            dark:text-[#94a3b8]
                                        "
                                    >
                                        Platform Administrator
                                    </p>
                                </div>

                                <ChevronRight
                                    size={15}
                                    className="
                                        shrink-0
                                        text-[#64748b]
                                    "
                                />
                            </>
                        )}
                    </div>
                </div>

                {/* =====================================================
                    NAVIGATION
                ====================================================== */}

                <div className="flex-1 overflow-y-auto px-3 py-5">
                    {menuGroups.map((group) => (
                        <div
                            key={group.title}
                            className="mb-6 last:mb-0"
                        >
                            {/* GROUP TITLE */}

                            {!collapsed && (
                                <p
                                    className="
                                        mb-2
                                        px-2

                                        text-[10px]
                                        font-extrabold
                                        tracking-[0.14em]
                                        text-[#475569]

                                        dark:text-[#94a3b8]
                                    "
                                >
                                    {group.title}
                                </p>
                            )}

                            <nav className="space-y-1">
                                {group.items.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <NavLink
                                            key={item.path}
                                            to={item.path}
                                            onClick={onClose}
                                            title={
                                                collapsed
                                                    ? item.name
                                                    : undefined
                                            }
                                            className={({ isActive }) =>
                                                `
                                                group
                                                relative
                                                flex
                                                min-h-[44px]
                                                items-center

                                                rounded-xl

                                                text-[13px]
                                                font-bold

                                                transition-all
                                                duration-200

                                                ${
                                                    collapsed
                                                        ? "justify-center px-2"
                                                        : "gap-3 px-2.5"
                                                }

                                                ${
                                                    isActive
                                                        ? `
                                                            bg-[#eff6ff]
                                                            text-[#1d4ed8]

                                                            dark:bg-teal-500/10
                                                            dark:text-[#5eead4]
                                                        `
                                                        : `
                                                            text-[#334155]

                                                            hover:bg-[#f1f5f9]
                                                            hover:text-[#0f172a]

                                                            dark:text-[#cbd5e1]
                                                            dark:hover:bg-[#172337]
                                                            dark:hover:text-white
                                                        `
                                                }
                                            `
                                            }
                                        >
                                            {({ isActive }) => (
                                                <>
                                                    {/* ACTIVE INDICATOR */}

                                                    {isActive && (
                                                        <span
                                                            className="
                                                                absolute
                                                                left-0
                                                                h-6
                                                                w-[3px]
                                                                rounded-r-full

                                                                bg-gradient-to-b
                                                                from-blue-600
                                                                to-teal-500
                                                            "
                                                        />
                                                    )}

                                                    {/* ICON */}

                                                    <span
                                                        className={`
                                                            flex
                                                            h-8
                                                            w-8
                                                            shrink-0
                                                            items-center
                                                            justify-center

                                                            rounded-lg

                                                            ${
                                                                isActive
                                                                    ? `
                                                                        bg-[#dbeafe]
                                                                        text-[#1d4ed8]

                                                                        dark:bg-teal-500/15
                                                                        dark:text-[#5eead4]
                                                                    `
                                                                    : `
                                                                        text-[#475569]

                                                                        group-hover:bg-white
                                                                        group-hover:text-[#0f172a]

                                                                        dark:text-[#94a3b8]
                                                                        dark:group-hover:bg-[#1e334a]
                                                                        dark:group-hover:text-white
                                                                    `
                                                            }
                                                        `}
                                                    >
                                                        <Icon
                                                            size={17}
                                                            strokeWidth={2.2}
                                                        />
                                                    </span>

                                                    {/* LABEL + BADGE */}

                                                    {!collapsed && (
                                                        <div
                                                            className="
                                                                flex
                                                                min-w-0
                                                                flex-1
                                                                items-center
                                                                justify-between
                                                                gap-2
                                                            "
                                                        >
                                                            <span className="truncate">
                                                                {item.name}
                                                            </span>

                                                            {item.badge && (
                                                                <span
                                                                    className="
                                                                        flex
                                                                        h-5
                                                                        min-w-5
                                                                        shrink-0
                                                                        items-center
                                                                        justify-center

                                                                        rounded-full

                                                                        bg-blue-600

                                                                        px-1.5

                                                                        text-[9px]
                                                                        font-bold
                                                                        text-white

                                                                        shadow-sm

                                                                        dark:bg-teal-500
                                                                        dark:text-[#07111f]
                                                                    "
                                                                >
                                                                    {item.badge}
                                                                </span>
                                                            )}
                                                        </div>
                                                    )}
                                                </>
                                            )}
                                        </NavLink>
                                    );
                                })}
                            </nav>
                        </div>
                    ))}
                </div>

                {/* =====================================================
                    BOTTOM SECTION
                ====================================================== */}

                <div
                    className={`
                        shrink-0
                        border-t
                        border-[#d9e0e8]

                        dark:border-[#1e334a]

                        ${
                            collapsed
                                ? "p-2"
                                : "p-4"
                        }
                    `}
                >
                    {/* =================================================
                        SYSTEM STATUS
                    ================================================== */}

                    {!collapsed ? (
                        <div
                            className="
                                mb-3
                                flex
                                items-center
                                gap-2.5

                                rounded-xl

                                border
                                border-[#bbf7d0]
                                bg-[#f0fdf4]

                                px-3
                                py-2.5

                                dark:border-emerald-500/20
                                dark:bg-emerald-500/5
                            "
                        >
                            <span className="relative flex h-2 w-2 shrink-0">
                                <span
                                    className="
                                        absolute
                                        h-full
                                        w-full

                                        animate-ping

                                        rounded-full

                                        bg-emerald-400
                                    "
                                />

                                <span
                                    className="
                                        relative
                                        h-2
                                        w-2

                                        rounded-full

                                        bg-emerald-500
                                    "
                                />
                            </span>

                            <div>
                                <p
                                    className="
                                        text-[10px]
                                        font-bold
                                        text-[#166534]

                                        dark:text-emerald-400
                                    "
                                >
                                    All systems operational
                                </p>

                                <p
                                    className="
                                        mt-0.5
                                        text-[8px]
                                        font-semibold
                                        text-[#15803d]

                                        dark:text-emerald-500
                                    "
                                >
                                    Platform is running normally
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div
                            className="
                                mb-3
                                flex
                                justify-center
                                rounded-xl
                                py-2
                            "
                            title="All systems operational"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span
                                    className="
                                        absolute
                                        h-full
                                        w-full
                                        animate-ping
                                        rounded-full
                                        bg-emerald-400
                                    "
                                />

                                <span
                                    className="
                                        relative
                                        h-2.5
                                        w-2.5
                                        rounded-full
                                        bg-emerald-500
                                    "
                                />
                            </span>
                        </div>
                    )}

                    {/* =================================================
                        THEME
                    ================================================== */}

                    {!collapsed ? (
                        <div
                            className="
                                mb-2
                                flex
                                items-center
                                justify-between

                                rounded-xl

                                border
                                border-[#d9e0e8]
                                bg-[#f8fafc]

                                px-3
                                py-2

                                dark:border-[#1e334a]
                                dark:bg-[#101f32]
                            "
                        >
                            <div className="flex items-center gap-2.5">
                                <div
                                    className="
                                        flex
                                        h-8
                                        w-8
                                        items-center
                                        justify-center

                                        rounded-lg

                                        bg-white

                                        text-[#334155]

                                        shadow-sm

                                        dark:bg-[#172337]
                                        dark:text-[#cbd5e1]
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
                                            text-[#0f172a]

                                            dark:text-white
                                        "
                                    >
                                        Theme
                                    </p>

                                    <p
                                        className="
                                            text-[8px]
                                            font-semibold
                                            text-[#64748b]

                                            dark:text-[#94a3b8]
                                        "
                                    >
                                        {darkMode
                                            ? "Dark mode"
                                            : "Light mode"}
                                    </p>
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={() =>
                                    setDarkMode(
                                        (previous) =>
                                            !previous
                                    )
                                }
                                aria-label={
                                    darkMode
                                        ? "Switch to light mode"
                                        : "Switch to dark mode"
                                }
                                className={`
                                    relative
                                    h-6
                                    w-11
                                    rounded-full
                                    p-0.5
                                    transition-colors

                                    ${
                                        darkMode
                                            ? "bg-teal-500"
                                            : "bg-[#94a3b8]"
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
                                        shadow
                                        transition-transform

                                        ${
                                            darkMode
                                                ? "translate-x-5"
                                                : "translate-x-0"
                                        }
                                    `}
                                />
                            </button>
                        </div>
                    ) : (
                        <button
                            type="button"
                            onClick={() =>
                                setDarkMode(
                                    (previous) =>
                                        !previous
                                )
                            }
                            className="
                                mb-2
                                flex
                                h-10
                                w-full
                                items-center
                                justify-center

                                rounded-xl

                                bg-[#f8fafc]
                                text-[#475569]

                                hover:bg-[#f1f5f9]

                                dark:bg-[#101f32]
                                dark:text-[#cbd5e1]
                                dark:hover:bg-[#172337]
                            "
                            title={
                                darkMode
                                    ? "Switch to light mode"
                                    : "Switch to dark mode"
                            }
                            aria-label={
                                darkMode
                                    ? "Switch to light mode"
                                    : "Switch to dark mode"
                            }
                        >
                            {darkMode ? (
                                <Moon size={16} />
                            ) : (
                                <Sun size={16} />
                            )}
                        </button>
                    )}

                    {/* =================================================
                        LOGOUT
                    ================================================== */}

                    <button
                        type="button"
                        onClick={handleLogout}
                        title={
                            collapsed
                                ? "Logout"
                                : undefined
                        }
                        className={`
                            group
                            flex
                            min-h-[42px]
                            w-full
                            items-center

                            rounded-xl

                            text-[13px]
                            font-bold
                            text-[#334155]

                            transition

                            hover:bg-[#fef2f2]
                            hover:text-[#dc2626]

                            dark:text-[#cbd5e1]
                            dark:hover:bg-red-500/10
                            dark:hover:text-red-400

                            ${
                                collapsed
                                    ? "justify-center"
                                    : "gap-3 px-2.5"
                            }
                        `}
                    >
                        <span
                            className="
                                flex
                                h-8
                                w-8
                                shrink-0
                                items-center
                                justify-center

                                rounded-lg

                                bg-[#f1f5f9]

                                text-[#475569]

                                transition

                                group-hover:bg-[#fee2e2]
                                group-hover:text-[#dc2626]

                                dark:bg-[#172337]
                                dark:text-[#94a3b8]
                                dark:group-hover:bg-red-500/10
                                dark:group-hover:text-red-400
                            "
                        >
                            <LogOut size={16} />
                        </span>

                        {!collapsed && (
                            <span>Logout</span>
                        )}
                    </button>
                </div>

                {/* =====================================================
                    RESIZE HANDLE
                ====================================================== */}

                <div
                    onPointerDown={startResizing}
                    onDoubleClick={resetSidebarWidth}
                    className="
                        group

                        absolute
                        right-0
                        top-0

                        hidden
                        h-full
                        w-1.5

                        cursor-col-resize

                        lg:block
                    "
                    style={{
                        touchAction: "none",
                    }}
                    title="Drag to resize • Double-click to reset"
                >
                    <div
                        className="
                            absolute
                            right-0
                            top-1/2

                            h-16
                            w-1

                            -translate-y-1/2

                            rounded-full

                            bg-transparent

                            transition-colors

                            group-hover:bg-blue-400

                            dark:group-hover:bg-teal-400
                        "
                    />
                </div>
            </aside>
        </>
    );
};

export default Sidebar;