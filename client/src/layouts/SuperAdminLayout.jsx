import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Menu } from "lucide-react";

import Sidebar from "../components/Sidebar";

function SuperAdminLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div
            className="
                min-h-screen
                overflow-x-hidden

                bg-slate-50
                text-slate-900

                transition-colors
                duration-300

                dark:bg-[#07111f]
                dark:text-slate-100
            "
        >
            {/* =========================================================
                SIDEBAR
            ========================================================== */}

            <Sidebar
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />

            {/* =========================================================
                MAIN CONTENT
            ========================================================== */}

            <main
                className="
                    min-h-screen
                    lg:ml-[260px]
                "
            >
                {/* =====================================================
                    MOBILE HEADER
                ====================================================== */}

                <div
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

                        backdrop-blur-md

                        dark:border-slate-800
                        dark:bg-[#07111f]/95

                        lg:hidden
                    "
                >
                    {/* Mobile Menu Button */}

                    <button
                        type="button"
                        onClick={() => setSidebarOpen(true)}
                        className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center

                            rounded-xl

                            border
                            border-slate-200

                            bg-slate-50

                            text-slate-700

                            transition-all
                            duration-200

                            hover:border-blue-200
                            hover:bg-blue-50
                            hover:text-blue-600

                            active:scale-95

                            dark:border-slate-700
                            dark:bg-slate-900
                            dark:text-slate-300

                            dark:hover:border-teal-500/30
                            dark:hover:bg-teal-500/10
                            dark:hover:text-teal-400
                        "
                        aria-label="Open sidebar"
                    >
                        <Menu size={20} strokeWidth={2} />
                    </button>

                    {/* =================================================
                        MOBILE BRAND
                    ================================================== */}

                    <div className="ml-3 flex items-center gap-2.5">
                        {/* Logo */}

                        <div
                            className="
                                flex
                                h-9
                                w-9
                                items-center
                                justify-center

                                rounded-xl

                                bg-gradient-to-br
                                from-blue-600
                                to-teal-500

                                text-sm
                                font-bold
                                text-white

                                shadow-sm
                            "
                        >
                            S
                        </div>

                        {/* Brand */}

                        <div>
                            <p
                                className="
                                    text-sm
                                    font-bold
                                    tracking-tight
                                    text-slate-950

                                    dark:text-white
                                "
                            >
                                Shiyora
                            </p>

                            <p
                                className="
                                    text-[8px]
                                    font-bold
                                    uppercase
                                    tracking-[0.18em]
                                    text-slate-500

                                    dark:text-slate-500
                                "
                            >
                                SuperAdmin Panel
                            </p>
                        </div>
                    </div>
                </div>

                {/* =====================================================
                    PAGE CONTENT
                ====================================================== */}

                <section
                    className="
                        relative
                        min-h-screen
                        overflow-hidden

                        bg-slate-50

                        dark:bg-[#07111f]
                    "
                >
                    {/* =================================================
                        SUBTLE BACKGROUND
                    ================================================== */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            -right-40
                            -top-40

                            h-[420px]
                            w-[420px]

                            rounded-full

                            bg-blue-100/50

                            blur-[120px]

                            dark:bg-blue-600/5
                        "
                    />

                    <div
                        className="
                            pointer-events-none
                            absolute
                            -bottom-40
                            -left-40

                            h-[420px]
                            w-[420px]

                            rounded-full

                            bg-teal-100/50

                            blur-[120px]

                            dark:bg-teal-500/5
                        "
                    />

                    {/* =================================================
                        VERY SUBTLE GRID
                    ================================================== */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            inset-0
                            opacity-[0.35]

                            dark:opacity-[0.08]
                        "
                        style={{
                            backgroundImage:
                                "linear-gradient(to right, rgba(148,163,184,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.10) 1px, transparent 1px)",
                            backgroundSize: "32px 32px",
                        }}
                    />

                    {/* =================================================
                        ROUTED PAGE
                    ================================================== */}

                    <div className="relative z-10 min-h-screen">
                        <Outlet />
                    </div>
                </section>
            </main>
        </div>
    );
}

export default SuperAdminLayout;