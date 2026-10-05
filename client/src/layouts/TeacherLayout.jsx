import React from "react";
import { Outlet } from "react-router-dom";
import TeacherSidebar from "../components/TeacherSidebar";

function TeacherLayout() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-700 dark:bg-[#07111f] dark:text-slate-300">

            {/* Teacher Sidebar */}
            <TeacherSidebar />

            {/* Main Content */}
            <main className="ml-72 min-h-screen bg-slate-50 dark:bg-[#07111f]">

                {/* Main Wrapper */}
                <div className="relative min-h-screen overflow-hidden">

                    {/* Soft Background Decoration */}
                    <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl dark:bg-blue-400/10" />

                    <div className="pointer-events-none absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-teal-500/5 blur-3xl dark:bg-teal-400/10" />

                    {/* Content Area */}
                    <div className="relative min-h-screen p-5 sm:p-6 lg:p-8">

                        <Outlet />

                    </div>
                </div>

            </main>
        </div>
    );
}

export default TeacherLayout;