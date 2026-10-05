import { useState } from "react";
import { Menu, Bell } from "lucide-react";
import { Outlet } from "react-router-dom";
import StudentSidebar from "../components/StudentSidebar";

const StudentLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div
            className="
                min-h-screen
                bg-slate-50
                text-slate-700
                transition-colors duration-300
                dark:bg-[#07111f]
                dark:text-slate-300
            "
        >
            {/* Sidebar */}
            <StudentSidebar
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />

            {/* Main Content */}
            <div className="min-h-screen lg:ml-64">
                {/* Top Header */}
                <header
                    className="
                        sticky top-0 z-30
                        border-b border-slate-200
                        bg-white/90
                        backdrop-blur-xl
                        transition-colors duration-300
                        dark:border-[#1e334a]
                        dark:bg-[#0b1727]/90
                    "
                >
                    <div
                        className="
                            flex h-16 items-center
                            justify-between
                            px-4 sm:px-6 lg:px-8
                        "
                    >
                        {/* Left Section */}
                        <div className="flex items-center gap-3">
                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setSidebarOpen(true)}
                                aria-label="Open sidebar"
                                className="
                                    rounded-xl p-2.5
                                    text-slate-600
                                    transition-all duration-200
                                    hover:bg-slate-100
                                    hover:text-blue-600
                                    dark:text-slate-400
                                    dark:hover:bg-[#102337]
                                    dark:hover:text-teal-300
                                    lg:hidden
                                "
                            >
                                <Menu size={21} />
                            </button>

                            {/* Desktop Page Area */}
                            <div className="hidden lg:block">
                                <div className="flex items-center gap-2">
                                    <span
                                        className="
                                            h-2 w-2 rounded-full
                                            bg-teal-500
                                            shadow-sm shadow-teal-500/50
                                        "
                                    />

                                    <p
                                        className="
                                            text-sm font-semibold
                                            text-slate-800
                                            dark:text-slate-100
                                        "
                                    >
                                        Student Portal
                                    </p>
                                </div>

                                <p
                                    className="
                                        mt-0.5 text-xs
                                        text-slate-500
                                        dark:text-slate-500
                                    "
                                >
                                    Learn, practice and track your progress
                                </p>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="ml-auto flex items-center gap-2 sm:gap-3">
                            {/* Notification */}
                            <button
                                aria-label="Notifications"
                                className="
                                    relative flex h-10 w-10
                                    items-center justify-center
                                    rounded-xl
                                    border border-slate-200
                                    bg-white
                                    text-slate-500
                                    transition-all duration-200
                                    hover:border-blue-200
                                    hover:bg-blue-50
                                    hover:text-blue-600
                                    dark:border-[#1e334a]
                                    dark:bg-[#102337]
                                    dark:text-slate-400
                                    dark:hover:border-teal-500/30
                                    dark:hover:bg-teal-500/10
                                    dark:hover:text-teal-300
                                "
                            >
                                <Bell size={19} />

                                {/* Notification Dot */}
                                <span
                                    className="
                                        absolute right-2.5 top-2
                                        h-1.5 w-1.5
                                        rounded-full
                                        bg-blue-600
                                        ring-2 ring-white
                                        dark:bg-teal-400
                                        dark:ring-[#102337]
                                    "
                                />
                            </button>

                            {/* Divider */}
                            <div
                                className="
                                    hidden h-8 w-px
                                    bg-slate-200
                                    dark:bg-[#1e334a]
                                    sm:block
                                "
                            />

                            {/* Student Profile */}
                            <div
                                className="
                                    flex items-center gap-2.5
                                    rounded-xl
                                    px-1.5 py-1
                                    transition-colors
                                    hover:bg-slate-50
                                    dark:hover:bg-[#102337]
                                "
                            >
                                {/* Avatar */}
                                <div
                                    className="
                                        flex h-9 w-9
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

                                {/* User Details */}
                                <div className="hidden min-w-0 sm:block">
                                    <p
                                        className="
                                            truncate text-xs
                                            font-semibold
                                            text-slate-800
                                            dark:text-slate-100
                                        "
                                    >
                                        Student
                                    </p>

                                    <p
                                        className="
                                            truncate text-[11px]
                                            text-slate-500
                                            dark:text-slate-400
                                        "
                                    >
                                        Learner
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main
                    className="
                        min-h-[calc(100vh-4rem)]
                        p-4
                        sm:p-6
                        lg:p-8
                    "
                >
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default StudentLayout;