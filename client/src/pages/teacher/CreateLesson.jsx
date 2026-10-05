import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function CreateLesson() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        course: "",
        title: "",
        description: "",
        videoUrl: "",
        notesUrl: "",
        duration: "",
        order: "",
        status: "Draft",
    });

    const [errors, setErrors] = useState({});
    const [saving, setSaving] = useState(false);

    // Demo courses
    // Later these will come from your backend API
    const courses = [
        {
            id: 1,
            title: "Full Stack Web Development",
        },
        {
            id: 2,
            title: "Database Management Systems",
        },
        {
            id: 3,
            title: "Java Programming",
        },
        {
            id: 4,
            title: "React.js Masterclass",
        },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        // Remove error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.course) {
            newErrors.course = "Please select a course.";
        }

        if (!formData.title.trim()) {
            newErrors.title = "Lesson title is required.";
        }

        if (!formData.description.trim()) {
            newErrors.description = "Lesson description is required.";
        }

        if (!formData.duration) {
            newErrors.duration = "Lesson duration is required.";
        }

        if (!formData.order) {
            newErrors.order = "Lesson order is required.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setSaving(true);

        try {
            // ---------------------------------------------
            // Backend API will be connected here later
            // ---------------------------------------------

            console.log("Lesson Data:", formData);

            // Demo delay
            await new Promise((resolve) =>
                setTimeout(resolve, 800)
            );

            alert("Lesson saved successfully!");

            navigate("/teacher/lessons");
        } catch (error) {
            console.error("Error creating lesson:", error);
            alert("Something went wrong while saving the lesson.");
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="space-y-7">

            {/* ================================================= */}
            {/* HEADER */}
            {/* ================================================= */}

            <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727] lg:p-8">

                {/* Blue Glow */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-400/10" />

                {/* Teal Glow */}
                <div className="pointer-events-none absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-teal-500/10 blur-3xl dark:bg-teal-400/10" />

                <div className="relative">

                    <Link
                        to="/teacher/lessons"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-teal-400"
                    >
                        ← Back to Lessons
                    </Link>

                    <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.25em] text-blue-600 dark:text-teal-400">
                        Teaching Workspace / Lessons
                    </p>

                    <h1 className="mt-2 font-['Space_Grotesk'] text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
                        Create Lesson
                    </h1>

                    <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
                        Add a new lesson to one of your assigned courses.
                        Provide learning content, video resources and notes
                        for your students.
                    </p>

                </div>

            </section>


            {/* ================================================= */}
            {/* FORM */}
            {/* ================================================= */}

            <form
                onSubmit={handleSubmit}
                className="space-y-6"
            >

                {/* ================================================= */}
                {/* BASIC INFORMATION */}
                {/* ================================================= */}

                <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727] lg:p-7">

                    <div className="mb-6">

                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-600 dark:text-teal-400">
                            Step 01
                        </p>

                        <h2 className="mt-1 font-['Space_Grotesk'] text-xl font-bold text-slate-900 dark:text-white">
                            Basic Information
                        </h2>

                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                            Define the lesson title and course.
                        </p>

                    </div>


                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                        {/* Course */}

                        <div>

                            <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                                Course
                                <span className="ml-1 text-red-500">
                                    *
                                </span>
                            </label>

                            <select
                                name="course"
                                value={formData.course}
                                onChange={handleChange}
                                className={`w-full rounded-xl border bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition dark:bg-[#102337] dark:text-slate-200 ${errors.course
                                    ? "border-red-400"
                                    : "border-slate-200 focus:border-blue-400 dark:border-[#1e334a] dark:focus:border-teal-400"
                                    }`}
                            >

                                <option value="">
                                    Select a course
                                </option>

                                {courses.map((course) => (
                                    <option
                                        key={course.id}
                                        value={course.id}
                                    >
                                        {course.title}
                                    </option>
                                ))}

                            </select>

                            {errors.course && (
                                <p className="mt-1 text-xs text-red-500">
                                    {errors.course}
                                </p>
                            )}

                        </div>


                        {/* Lesson Order */}

                        <div>

                            <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                                Lesson Order
                                <span className="ml-1 text-red-500">
                                    *
                                </span>
                            </label>

                            <input
                                type="number"
                                name="order"
                                min="1"
                                value={formData.order}
                                onChange={handleChange}
                                placeholder="Example: 1"
                                className={`w-full rounded-xl border bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 dark:bg-[#102337] dark:text-slate-200 dark:placeholder:text-slate-500 ${errors.order
                                    ? "border-red-400"
                                    : "border-slate-200 focus:border-blue-400 dark:border-[#1e334a] dark:focus:border-teal-400"
                                    }`}
                            />

                            {errors.order && (
                                <p className="mt-1 text-xs text-red-500">
                                    {errors.order}
                                </p>
                            )}

                        </div>


                        {/* Lesson Title */}

                        <div className="md:col-span-2">

                            <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                                Lesson Title
                                <span className="ml-1 text-red-500">
                                    *
                                </span>
                            </label>

                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Example: Introduction to HTML"
                                className={`w-full rounded-xl border bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 dark:bg-[#102337] dark:text-slate-200 dark:placeholder:text-slate-500 ${errors.title
                                    ? "border-red-400"
                                    : "border-slate-200 focus:border-blue-400 dark:border-[#1e334a] dark:focus:border-teal-400"
                                    }`}
                            />

                            {errors.title && (
                                <p className="mt-1 text-xs text-red-500">
                                    {errors.title}
                                </p>
                            )}

                        </div>


                        {/* Description */}

                        <div className="md:col-span-2">

                            <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                                Lesson Description
                                <span className="ml-1 text-red-500">
                                    *
                                </span>
                            </label>

                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                rows="5"
                                placeholder="Explain what students will learn in this lesson..."
                                className={`w-full resize-none rounded-xl border bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 dark:bg-[#102337] dark:text-slate-200 dark:placeholder:text-slate-500 ${errors.description
                                    ? "border-red-400"
                                    : "border-slate-200 focus:border-blue-400 dark:border-[#1e334a] dark:focus:border-teal-400"
                                    }`}
                            />

                            {errors.description && (
                                <p className="mt-1 text-xs text-red-500">
                                    {errors.description}
                                </p>
                            )}

                        </div>

                    </div>

                </section>


                {/* ================================================= */}
                {/* LEARNING RESOURCES */}
                {/* ================================================= */}

                <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727] lg:p-7">

                    <div className="mb-6">

                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-600 dark:text-teal-400">
                            Step 02
                        </p>

                        <h2 className="mt-1 font-['Space_Grotesk'] text-xl font-bold text-slate-900 dark:text-white">
                            Learning Resources
                        </h2>

                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                            Add video lectures and study material.
                        </p>

                    </div>


                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                        {/* Video */}

                        <div>

                            <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                                Video URL
                            </label>

                            <input
                                type="url"
                                name="videoUrl"
                                value={formData.videoUrl}
                                onChange={handleChange}
                                placeholder="https://..."
                                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 dark:border-[#1e334a] dark:bg-[#102337] dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus:border-teal-400"
                            />

                            <p className="mt-2 text-[11px] text-slate-400 dark:text-slate-500">
                                Add the URL of the lesson video.
                            </p>

                        </div>


                        {/* Notes */}

                        <div>

                            <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                                Notes / PDF URL
                            </label>

                            <input
                                type="url"
                                name="notesUrl"
                                value={formData.notesUrl}
                                onChange={handleChange}
                                placeholder="https://..."
                                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 dark:border-[#1e334a] dark:bg-[#102337] dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus:border-teal-400"
                            />

                            <p className="mt-2 text-[11px] text-slate-400 dark:text-slate-500">
                                Add notes or PDF material for students.
                            </p>

                        </div>


                        {/* Duration */}

                        <div>

                            <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                                Duration
                                <span className="ml-1 text-red-500">
                                    *
                                </span>
                            </label>

                            <input
                                type="text"
                                name="duration"
                                value={formData.duration}
                                onChange={handleChange}
                                placeholder="Example: 45 minutes"
                                className={`w-full rounded-xl border bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 dark:bg-[#102337] dark:text-slate-200 dark:placeholder:text-slate-500 ${errors.duration
                                    ? "border-red-400"
                                    : "border-slate-200 focus:border-blue-400 dark:border-[#1e334a] dark:focus:border-teal-400"
                                    }`}
                            />

                            {errors.duration && (
                                <p className="mt-1 text-xs text-red-500">
                                    {errors.duration}
                                </p>
                            )}

                        </div>

                    </div>

                </section>


                {/* ================================================= */}
                {/* PUBLISH SETTINGS */}
                {/* ================================================= */}

                <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727] lg:p-7">

                    <div className="mb-6">

                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-600 dark:text-teal-400">
                            Step 03
                        </p>

                        <h2 className="mt-1 font-['Space_Grotesk'] text-xl font-bold text-slate-900 dark:text-white">
                            Publishing
                        </h2>

                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                            Decide whether students can access this lesson.
                        </p>

                    </div>


                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                        {/* Draft */}

                        <label
                            className={`cursor-pointer rounded-2xl border p-5 transition ${formData.status === "Draft"
                                ? "border-blue-300 bg-blue-50 dark:border-teal-400/40 dark:bg-teal-400/10"
                                : "border-slate-200 bg-slate-50 dark:border-[#1e334a] dark:bg-[#102337]"
                                }`}
                        >

                            <input
                                type="radio"
                                name="status"
                                value="Draft"
                                checked={formData.status === "Draft"}
                                onChange={handleChange}
                                className="sr-only"
                            />

                            <div className="flex items-center gap-3">

                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-200 text-sm font-bold text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                                    D
                                </div>

                                <div>

                                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                                        Save as Draft
                                    </p>

                                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                        Students cannot access it yet.
                                    </p>

                                </div>

                            </div>

                        </label>


                        {/* Published */}

                        <label
                            className={`cursor-pointer rounded-2xl border p-5 transition ${formData.status === "Published"
                                ? "border-teal-300 bg-teal-50 dark:border-teal-400/40 dark:bg-teal-400/10"
                                : "border-slate-200 bg-slate-50 dark:border-[#1e334a] dark:bg-[#102337]"
                                }`}
                        >

                            <input
                                type="radio"
                                name="status"
                                value="Published"
                                checked={formData.status === "Published"}
                                onChange={handleChange}
                                className="sr-only"
                            />

                            <div className="flex items-center gap-3">

                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-100 text-sm font-bold text-teal-600 dark:bg-teal-400/10 dark:text-teal-400">
                                    P
                                </div>

                                <div>

                                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                                        Publish Lesson
                                    </p>

                                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                        Students can access this lesson.
                                    </p>

                                </div>

                            </div>

                        </label>

                    </div>

                </section>


                {/* ================================================= */}
                {/* ACTIONS */}
                {/* ================================================= */}

                <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

                    <Link
                        to="/teacher/lessons"
                        className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-600 transition hover:border-slate-300 hover:bg-slate-50 dark:border-[#1e334a] dark:bg-[#0b1727] dark:text-slate-300 dark:hover:bg-[#102337]"
                    >
                        Cancel
                    </Link>

                    <button
                        type="submit"
                        disabled={saving}
                        className="rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 px-7 py-3 text-sm font-bold text-white shadow-sm transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {saving ? "Saving..." : "Save Lesson"}
                    </button>

                </div>

            </form>

        </div>
    );
}

export default CreateLesson;