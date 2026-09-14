//import React from "react";
import { Outlet } from "react-router-dom";
import TeacherSidebar from "../components/TeacherSidebar";

function TeacherLayout() {
    return (
        <div className="min-h-screen bg-[#161F19] text-[#F3EEDD]">

            {/* Teacher Sidebar */}
            <TeacherSidebar />

            {/* Main Content */}
            <main className="ml-72 min-h-screen bg-[#161F19]">

                {/* Subtle background texture */}
                <div className="relative min-h-screen overflow-hidden">

                    {/* Ambient glow */}
                    <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#F2B84B]/5 blur-3xl" />

                    <div className="pointer-events-none absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-[#7C9A82]/5 blur-3xl" />

                    {/* Page Content */}
                    <div className="relative min-h-screen p-6 lg:p-8">
                        <Outlet />
                    </div>

                </div>

            </main>
        </div>
    );
}

export default TeacherLayout;