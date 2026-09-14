import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// =====================================================
// PUBLIC PAGES
// =====================================================

import Welcome from "../pages/public/Welcome";
import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Contact from "../pages/public/Contact";
import Subscription from "../pages/public/Subscription";
import Feature from "../pages/public/Feature";
import Course from "../pages/public/Course";

// =====================================================
// AUTH
// =====================================================

import Auth from "../pages/auth/Auth";

// =====================================================
// SUPER ADMIN
// =====================================================

import SuperAdminLayout from "../layouts/SuperAdminLayout";

import SuperAdminDashboard from "../pages/superAdmin/Dashboard";
import Organizations from "../pages/superAdmin/Organizations";
import SuperAdminUsers from "../pages/superAdmin/Users";
import SuperAdminSubscriptions from "../pages/superAdmin/Subscriptions";
import SuperAdminCourses from "../pages/superAdmin/Courses";
import Reports from "../pages/superAdmin/Reports";
import SuperAdminSettings from "../pages/superAdmin/Settings";
import SuperAdminSupport from "../pages/superAdmin/Support";

// =====================================================
// ADMIN
// =====================================================

import AdminLayout from "../layouts/AdminLayout";

import AdminDashboard from "../pages/admin/Dashboard";
import AdminCourses from "../pages/admin/Courses";
import AdminStudents from "../pages/admin/Students";
import AdminTeachers from "../pages/admin/Teachers";
import AdminSubscriptions from "../pages/admin/Subscription";
import AdminSupport from "../pages/admin/Support";
import AdminSettings from "../pages/admin/Settings";

// =====================================================
// TEACHER
// =====================================================

import TeacherLayout from "../layouts/TeacherLayout";

import TeacherDashboard from "../pages/teacher/Dashboard";
import TeacherCourses from "../pages/teacher/Courses";
import CreateCourse from "../pages/teacher/CreateCourse";
import EditCourse from "../pages/teacher/EditCourse";

import TeacherLessons from "../pages/teacher/Lessons";
import CreateLesson from "../pages/teacher/CreateLesson";
import EditLesson from "../pages/teacher/EditLesson";

import TeacherQuizzes from "../pages/teacher/Quizzes";

import TeacherAssignments from "../pages/teacher/Assignments";

import TeacherStudents from "../pages/teacher/Students";
import TeacherAnalytics from "../pages/teacher/Analytics";
import TeacherProfile from "../pages/teacher/Profile";

// =====================================================
// STUDENT
// =====================================================

import StudentLayout from "../layouts/StudentLayout";

import StudentDashboard from "../pages/student/Dashboard";
import MyCourses from "../pages/student/MyCourses";
import AllCourses from "../pages/student/AllCourses";
import StudentAssignments from "../pages/student/Assignments";
import Progress from "../pages/student/Progress";
import Certificates from "../pages/student/Certificates";
import Quiz from "../pages/student/Quiz";
import StudentSupport from "../pages/student/Support";
import StudentProfile from "../pages/student/Profile";

// =====================================================
// APP ROUTES
// =====================================================

function AppRoutes() {
    return (
        <Routes>

            {/* =================================================
                PUBLIC ROUTES
            ================================================= */}

            <Route
                path="/"
                element={<Welcome />}
            />

            <Route
                path="/home"
                element={
                    <>
                        <Navbar />
                        <Home />
                        <Footer />
                    </>
                }
            />

            <Route
                path="/about"
                element={
                    <>
                        <Navbar />
                        <About />
                        <Footer />
                    </>
                }
            />

            <Route
                path="/contact"
                element={
                    <>
                        <Navbar />
                        <Contact />
                        <Footer />
                    </>
                }
            />

            <Route
                path="/subscription"
                element={
                    <>
                        <Navbar />
                        <Subscription />
                        <Footer />
                    </>
                }
            />

            <Route
                path="/feature"
                element={
                    <>
                        <Navbar />
                        <Feature />
                        <Footer />
                    </>
                }
            />

            <Route
                path="/course"
                element={
                    <>
                        <Navbar />
                        <Course />
                        <Footer />
                    </>
                }
            />

            {/* =================================================
                AUTH ROUTES
            ================================================= */}

            <Route
                path="/login"
                element={<Auth />}
            />

            <Route
                path="/signup"
                element={<Auth />}
            />

            {/* =================================================
                SUPER ADMIN ROUTES
            ================================================= */}

            <Route
                path="/superadmin"
                element={<SuperAdminLayout />}
            >

                {/* /superadmin → /superadmin/dashboard */}

                <Route
                    index
                    element={
                        <Navigate
                            to="dashboard"
                            replace
                        />
                    }
                />

                <Route
                    path="dashboard"
                    element={<SuperAdminDashboard />}
                />

                <Route
                    path="organizations"
                    element={<Organizations />}
                />

                <Route
                    path="users"
                    element={<SuperAdminUsers />}
                />

                <Route
                    path="subscriptions"
                    element={<SuperAdminSubscriptions />}
                />

                <Route
                    path="courses"
                    element={<SuperAdminCourses />}
                />

                <Route
                    path="reports"
                    element={<Reports />}
                />

                <Route
                    path="settings"
                    element={<SuperAdminSettings />}
                />

                <Route
                    path="support"
                    element={<SuperAdminSupport />}
                />

            </Route>

            {/* =================================================
                ADMIN ROUTES
            ================================================= */}

            <Route
                path="/admin"
                element={<AdminLayout />}
            >

                {/* /admin → /admin/dashboard */}

                <Route
                    index
                    element={
                        <Navigate
                            to="dashboard"
                            replace
                        />
                    }
                />

                <Route
                    path="dashboard"
                    element={<AdminDashboard />}
                />

                <Route
                    path="courses"
                    element={<AdminCourses />}
                />

                <Route
                    path="students"
                    element={<AdminStudents />}
                />

                <Route
                    path="teachers"
                    element={<AdminTeachers />}
                />

                <Route
                    path="subscriptions"
                    element={<AdminSubscriptions />}
                />

                <Route
                    path="support"
                    element={<AdminSupport />}
                />

                <Route
                    path="settings"
                    element={<AdminSettings />}
                />

            </Route>

            {/* =================================================
                TEACHER ROUTES
            ================================================= */}

            <Route
                path="/teacher"
                element={<TeacherLayout />}
            >

                {/* /teacher → /teacher/dashboard */}

                <Route
                    index
                    element={
                        <Navigate
                            to="dashboard"
                            replace
                        />
                    }
                />

                {/* -------------------------------
                    DASHBOARD
                -------------------------------- */}

                <Route
                    path="dashboard"
                    element={<TeacherDashboard />}
                />

                {/* -------------------------------
                    COURSES
                -------------------------------- */}

                <Route
                    path="courses"
                    element={<TeacherCourses />}
                />

                <Route
                    path="courses/create"
                    element={<CreateCourse />}
                />

                <Route
                    path="courses/:id/edit"
                    element={<EditCourse />}
                />

                {/* -------------------------------
                    LESSONS
                -------------------------------- */}

                <Route
                    path="lessons"
                    element={<TeacherLessons />}
                />

                <Route
                    path="lessons/create"
                    element={<CreateLesson />}
                />

                <Route
                    path="lessons/:id/edit"
                    element={<EditLesson />}
                />

                {/* -------------------------------
                    QUIZZES
                -------------------------------- */}

                <Route
                    path="quizzes"
                    element={<TeacherQuizzes />}
                />

                {/* -------------------------------
                    ASSIGNMENTS
                -------------------------------- */}

                <Route
                    path="assignments"
                    element={<TeacherAssignments />}
                />

                {/* -------------------------------
                    STUDENTS
                -------------------------------- */}

                <Route
                    path="students"
                    element={<TeacherStudents />}
                />

                {/* -------------------------------
                    ANALYTICS
                -------------------------------- */}

                <Route
                    path="analytics"
                    element={<TeacherAnalytics />}
                />

                {/* -------------------------------
                    PROFILE
                -------------------------------- */}

                <Route
                    path="profile"
                    element={<TeacherProfile />}
                />

            </Route>

            {/* =================================================
                STUDENT ROUTES
            ================================================= */}

            <Route
                path="/student"
                element={<StudentLayout />}
            >

                {/* /student → /student/dashboard */}

                <Route
                    index
                    element={
                        <Navigate
                            to="dashboard"
                            replace
                        />
                    }
                />

                {/* -------------------------------
                    DASHBOARD
                -------------------------------- */}

                <Route
                    path="dashboard"
                    element={<StudentDashboard />}
                />

                {/* -------------------------------
                    MY COURSES
                -------------------------------- */}

                <Route
                    path="my-courses"
                    element={<MyCourses />}
                />

                {/* -------------------------------
                    ALL COURSES
                -------------------------------- */}

                <Route
                    path="all-courses"
                    element={<AllCourses />}
                />

                {/* -------------------------------
                    ASSIGNMENTS
                -------------------------------- */}

                <Route
                    path="assignments"
                    element={<StudentAssignments />}
                />

                {/* -------------------------------
                    QUIZZES
                -------------------------------- */}

                <Route
                    path="quizzes"
                    element={<Quiz />}
                />

                {/* -------------------------------
                    PROGRESS
                -------------------------------- */}

                <Route
                    path="progress"
                    element={<Progress />}
                />

                {/* -------------------------------
                    CERTIFICATES
                -------------------------------- */}

                <Route
                    path="certificates"
                    element={<Certificates />}
                />

                {/* -------------------------------
                    SUPPORT
                -------------------------------- */}

                <Route
                    path="support"
                    element={<StudentSupport />}
                />

                {/* -------------------------------
                    PROFILE
                -------------------------------- */}

                <Route
                    path="profile"
                    element={<StudentProfile />}
                />

            </Route>

            {/* =================================================
                FALLBACK ROUTE
            ================================================= */}

            <Route
                path="*"
                element={
                    <Navigate
                        to="/"
                        replace
                    />
                }
            />

        </Routes>
    );
}

export default AppRoutes;