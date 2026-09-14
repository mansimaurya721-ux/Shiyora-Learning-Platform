import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const courseModules = {
    "Complete Web Development": [
        "HTML Fundamentals",
        "CSS Fundamentals",
        "JavaScript Basics",
    ],
    "JavaScript Mastery": [
        "JavaScript Fundamentals",
        "ES6 Features",
        "Advanced JavaScript",
    ],
    "React Development": [
        "React Fundamentals",
        "Components & Props",
        "State & Hooks",
    ],
    "CSS & UI Design": [
        "CSS Basics",
        "Flexbox & Grid",
        "Responsive Design",
    ],
};

function CreateLesson() {
    const navigate = useNavigate();
    const fileInputRef = useRef(null);

    const [formData, setFormData] = useState({
        title: "",
        course: "",
        module: "",
        type: "Video",
        duration: "",
        description: "",
        videoUrl: "",
        content: "",
        status: "Draft",
        freePreview: false,
    });

    const [resources, setResources] = useState([]);
    const [resourceName, setResourceName] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));

        if (name === "course") {
            setFormData((prev) => ({
                ...prev,
                course: value,
                module: "",
            }));
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];

        if (!file) return;

        setSelectedFile(file);
    };

    const addFileResource = () => {
        if (!selectedFile) return;

        setResources((prev) => [
            ...prev,
            {
                id: Date.now(),
                name: selectedFile.name,
                size: selectedFile.size,
                type: "file",
            },
        ]);

        setSelectedFile(null);

        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const addResourceName = () => {
        const name = resourceName.trim();

        if (!name) return;

        setResources((prev) => [
            ...prev,
            {
                id: Date.now(),
                name,
                size: null,
                type: "resource",
            },
        ]);

        setResourceName("");
    };

    const removeResource = (id) => {
        setResources((prev) =>
            prev.filter((resource) => resource.id !== id)
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const lessonData = {
            ...formData,
            resources,
        };

        console.log("Created Lesson:", lessonData);

        navigate("/teacher/lessons");
    };

    return (
        <div className="space-y-8">
            {/* HEADER */}
            <section className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div>
                    <div className="mb-3 flex items-center gap-3">
                        <span className="h-px w-10 bg-[#F2B84B]" />

                        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#F2B84B]">
                            Teaching Workspace
                        </span>
                    </div>

                    <h1 className="text-3xl font-bold tracking-tight text-[#F3EEDD] md:text-4xl">
                        Create Lesson
                    </h1>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-[#A9AAA1]">
                        Create a new lesson inside an existing course module
                        and provide structured learning material for your
                        students.
                    </p>
                </div>

                <Link
                    to="/teacher/lessons"
                    className="inline-flex w-fit items-center gap-2 rounded-xl border border-[#F3EEDD]/10 bg-[#1B241E] px-5 py-3 text-sm font-semibold text-[#A9AAA1] transition hover:border-[#F2B84B]/30 hover:text-[#F2B84B]"
                >
                    <svg
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                    >
                        <path d="m15 18-6-6 6-6" />
                    </svg>

                    Back to Lessons
                </Link>
            </section>

            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
                    {/* =========================================
                        MAIN CONTENT
                    ========================================== */}
                    <div className="space-y-6 xl:col-span-2">
                        {/* LESSON INFORMATION */}
                        <section className="rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-6">
                            <div className="mb-6">
                                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#7C9A82]">
                                    Lesson Information
                                </p>

                                <h2 className="mt-2 text-xl font-bold text-[#F3EEDD]">
                                    Basic details
                                </h2>

                                <p className="mt-1 text-sm text-[#777C74]">
                                    Select the course and module where this
                                    lesson belongs.
                                </p>
                            </div>

                            <div className="space-y-5">
                                {/* COURSE + MODULE */}
                                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-[#F3EEDD]">
                                            Course
                                        </label>

                                        <select
                                            name="course"
                                            value={formData.course}
                                            onChange={handleChange}
                                            required
                                            className="w-full rounded-xl border border-[#F3EEDD]/10 bg-[#141C17] px-4 py-3 text-sm text-[#F3EEDD] outline-none focus:border-[#F2B84B]/40"
                                        >
                                            <option value="">
                                                Select course
                                            </option>

                                            {Object.keys(courseModules).map(
                                                (course) => (
                                                    <option
                                                        key={course}
                                                        value={course}
                                                    >
                                                        {course}
                                                    </option>
                                                )
                                            )}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-[#F3EEDD]">
                                            Module
                                        </label>

                                        <select
                                            name="module"
                                            value={formData.module}
                                            onChange={handleChange}
                                            required
                                            disabled={!formData.course}
                                            className="w-full rounded-xl border border-[#F3EEDD]/10 bg-[#141C17] px-4 py-3 text-sm text-[#F3EEDD] outline-none disabled:cursor-not-allowed disabled:opacity-50 focus:border-[#F2B84B]/40"
                                        >
                                            <option value="">
                                                {formData.course
                                                    ? "Select module"
                                                    : "Select course first"}
                                            </option>

                                            {formData.course &&
                                                courseModules[
                                                    formData.course
                                                ].map((module) => (
                                                    <option
                                                        key={module}
                                                        value={module}
                                                    >
                                                        {module}
                                                    </option>
                                                ))}
                                        </select>
                                    </div>
                                </div>

                                {/* TITLE */}
                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-[#F3EEDD]">
                                        Lesson Title
                                    </label>

                                    <input
                                        type="text"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        required
                                        placeholder="e.g. Introduction to HTML"
                                        className="w-full rounded-xl border border-[#F3EEDD]/10 bg-[#141C17] px-4 py-3 text-sm text-[#F3EEDD] outline-none placeholder:text-[#777C74] focus:border-[#F2B84B]/40"
                                    />
                                </div>

                                {/* TYPE + DURATION */}
                                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-[#F3EEDD]">
                                            Lesson Type
                                        </label>

                                        <select
                                            name="type"
                                            value={formData.type}
                                            onChange={handleChange}
                                            className="w-full rounded-xl border border-[#F3EEDD]/10 bg-[#141C17] px-4 py-3 text-sm text-[#F3EEDD] outline-none focus:border-[#F2B84B]/40"
                                        >
                                            <option value="Video">
                                                Video Lesson
                                            </option>

                                            <option value="Article">
                                                Article
                                            </option>

                                            <option value="PDF">
                                                PDF / Document
                                            </option>

                                            <option value="Live Class">
                                                Live Class
                                            </option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-[#F3EEDD]">
                                            Duration
                                        </label>

                                        <input
                                            type="text"
                                            name="duration"
                                            value={formData.duration}
                                            onChange={handleChange}
                                            placeholder="e.g. 18 min"
                                            className="w-full rounded-xl border border-[#F3EEDD]/10 bg-[#141C17] px-4 py-3 text-sm text-[#F3EEDD] outline-none placeholder:text-[#777C74] focus:border-[#F2B84B]/40"
                                        />
                                    </div>
                                </div>

                                {/* DESCRIPTION */}
                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-[#F3EEDD]">
                                        Lesson Description
                                    </label>

                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        rows="4"
                                        placeholder="Briefly explain what students will learn in this lesson..."
                                        className="w-full resize-none rounded-xl border border-[#F3EEDD]/10 bg-[#141C17] px-4 py-3 text-sm leading-6 text-[#F3EEDD] outline-none placeholder:text-[#777C74] focus:border-[#F2B84B]/40"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* VIDEO */}
                        {formData.type === "Video" && (
                            <section className="rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-6">
                                <div className="mb-6">
                                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#7C9A82]">
                                        Lesson Media
                                    </p>

                                    <h2 className="mt-2 text-xl font-bold text-[#F3EEDD]">
                                        Video content
                                    </h2>

                                    <p className="mt-1 text-sm text-[#777C74]">
                                        Connect the video students will watch
                                        for this lesson.
                                    </p>
                                </div>

                                <label className="mb-2 block text-sm font-semibold text-[#F3EEDD]">
                                    Video URL
                                </label>

                                <input
                                    type="url"
                                    name="videoUrl"
                                    value={formData.videoUrl}
                                    onChange={handleChange}
                                    placeholder="https://youtube.com/... or your video hosting URL"
                                    className="w-full rounded-xl border border-[#F3EEDD]/10 bg-[#141C17] px-4 py-3 text-sm text-[#F3EEDD] outline-none placeholder:text-[#777C74] focus:border-[#F2B84B]/40"
                                />

                                <div className="mt-5 rounded-2xl border border-dashed border-[#F3EEDD]/10 bg-[#141C17] p-8 text-center">
                                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F2B84B]/10 text-[#F2B84B]">
                                        <svg
                                            width="26"
                                            height="26"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.7"
                                        >
                                            <path d="m9 7 8 5-8 5V7Z" />
                                        </svg>
                                    </div>

                                    <h3 className="mt-4 text-sm font-semibold text-[#F3EEDD]">
                                        Video preview
                                    </h3>

                                    <p className="mx-auto mt-2 max-w-md text-xs leading-5 text-[#777C74]">
                                        Video preview will be connected here
                                        when your backend/video storage is
                                        implemented.
                                    </p>
                                </div>
                            </section>
                        )}

                        {/* PDF */}
                        {formData.type === "PDF" && (
                            <section className="rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-6">
                                <div className="mb-6">
                                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#7C9A82]">
                                        Document Content
                                    </p>

                                    <h2 className="mt-2 text-xl font-bold text-[#F3EEDD]">
                                        Lesson document
                                    </h2>

                                    <p className="mt-1 text-sm text-[#777C74]">
                                        Upload the PDF students will use for
                                        this lesson.
                                    </p>
                                </div>

                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept=".pdf"
                                    onChange={handleFileChange}
                                    className="hidden"
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        fileInputRef.current?.click()
                                    }
                                    className="flex w-full flex-col items-center justify-center rounded-2xl border border-dashed border-[#F3EEDD]/10 bg-[#141C17] p-10 text-center transition hover:border-[#F2B84B]/30"
                                >
                                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#F2B84B]/10 text-[#F2B84B]">
                                        <svg
                                            width="25"
                                            height="25"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.7"
                                        >
                                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                                            <path d="M14 2v6h6" />
                                            <path d="M12 18v-6" />
                                            <path d="m9 15 3-3 3 3" />
                                        </svg>
                                    </div>

                                    <p className="mt-4 text-sm font-semibold text-[#F3EEDD]">
                                        {selectedFile
                                            ? selectedFile.name
                                            : "Choose PDF document"}
                                    </p>

                                    <p className="mt-2 text-xs text-[#777C74]">
                                        Click to browse your computer
                                    </p>
                                </button>
                            </section>
                        )}

                        {/* ARTICLE / GENERAL CONTENT */}
                        <section className="rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-6">
                            <div className="mb-6">
                                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#7C9A82]">
                                    Learning Material
                                </p>

                                <h2 className="mt-2 text-xl font-bold text-[#F3EEDD]">
                                    Lesson content
                                </h2>

                                <p className="mt-1 text-sm text-[#777C74]">
                                    Add notes, explanations, instructions,
                                    examples, or supporting text.
                                </p>
                            </div>

                            <textarea
                                name="content"
                                value={formData.content}
                                onChange={handleChange}
                                rows="14"
                                placeholder="Write the lesson content here..."
                                className="w-full resize-y rounded-xl border border-[#F3EEDD]/10 bg-[#141C17] px-4 py-4 text-sm leading-7 text-[#F3EEDD] outline-none placeholder:text-[#777C74] focus:border-[#F2B84B]/40"
                            />

                            <div className="mt-3 flex justify-between text-xs text-[#777C74]">
                                <span>
                                    Keep the lesson focused on one learning
                                    objective.
                                </span>

                                <span className="font-mono">
                                    {formData.content.length} characters
                                </span>
                            </div>
                        </section>

                        {/* RESOURCES */}
                        <section className="rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-6">
                            <div className="mb-6">
                                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#7C9A82]">
                                    Supporting Material
                                </p>

                                <h2 className="mt-2 text-xl font-bold text-[#F3EEDD]">
                                    Lesson resources
                                </h2>

                                <p className="mt-1 text-sm text-[#777C74]">
                                    Add notes, cheat sheets, examples, or
                                    additional files.
                                </p>
                            </div>

                            {resources.length > 0 && (
                                <div className="mb-5 space-y-3">
                                    {resources.map((resource) => (
                                        <div
                                            key={resource.id}
                                            className="flex items-center gap-3 rounded-xl border border-[#F3EEDD]/10 bg-[#141C17] p-4"
                                        >
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#7C9A82]/10 text-[#9EB7A2]">
                                                <svg
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="1.7"
                                                >
                                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                                                    <path d="M14 2v6h6" />
                                                </svg>
                                            </div>

                                            <div className="min-w-0 flex-1">
                                                <p className="truncate text-sm font-semibold text-[#F3EEDD]">
                                                    {resource.name}
                                                </p>

                                                {resource.size && (
                                                    <p className="mt-1 text-xs text-[#777C74]">
                                                        {(
                                                            resource.size /
                                                            1024
                                                        ).toFixed(1)}{" "}
                                                        KB
                                                    </p>
                                                )}
                                            </div>

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    removeResource(
                                                        resource.id
                                                    )
                                                }
                                                className="rounded-lg p-2 text-[#777C74] transition hover:bg-[#D6402C]/10 hover:text-[#E97868]"
                                            >
                                                <svg
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="1.7"
                                                >
                                                    <path d="M4 7h16" />
                                                    <path d="M10 11v6" />
                                                    <path d="M14 11v6" />
                                                    <path d="M6 7l1 14h10l1-14" />
                                                    <path d="M9 7V4h6v3" />
                                                </svg>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div className="rounded-xl border border-dashed border-[#F3EEDD]/10 bg-[#141C17] p-5">
                                <div className="flex flex-col gap-3 sm:flex-row">
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        onChange={handleFileChange}
                                        className="hidden"
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            fileInputRef.current?.click()
                                        }
                                        className="flex-1 rounded-xl border border-[#F3EEDD]/10 px-4 py-3 text-sm font-semibold text-[#A9AAA1] transition hover:border-[#7C9A82]/30 hover:text-[#9EB7A2]"
                                    >
                                        {selectedFile
                                            ? selectedFile.name
                                            : "Choose Resource File"}
                                    </button>

                                    <button
                                        type="button"
                                        onClick={addFileResource}
                                        disabled={!selectedFile}
                                        className="rounded-xl bg-[#7C9A82]/10 px-5 py-3 text-sm font-semibold text-[#9EB7A2] transition hover:bg-[#7C9A82]/15 disabled:cursor-not-allowed disabled:opacity-40"
                                    >
                                        Add File
                                    </button>
                                </div>

                                <div className="my-4 flex items-center gap-3">
                                    <span className="h-px flex-1 bg-[#F3EEDD]/10" />

                                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#777C74]">
                                        Or
                                    </span>

                                    <span className="h-px flex-1 bg-[#F3EEDD]/10" />
                                </div>

                                <div className="flex flex-col gap-3 sm:flex-row">
                                    <input
                                        type="text"
                                        value={resourceName}
                                        onChange={(e) =>
                                            setResourceName(e.target.value)
                                        }
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                e.preventDefault();
                                                addResourceName();
                                            }
                                        }}
                                        placeholder="e.g. HTML Cheat Sheet"
                                        className="flex-1 rounded-xl border border-[#F3EEDD]/10 bg-[#1B241E] px-4 py-3 text-sm text-[#F3EEDD] outline-none placeholder:text-[#777C74] focus:border-[#F2B84B]/40"
                                    />

                                    <button
                                        type="button"
                                        onClick={addResourceName}
                                        className="rounded-xl border border-[#F2B84B]/20 bg-[#F2B84B]/10 px-5 py-3 text-sm font-semibold text-[#F2B84B] transition hover:bg-[#F2B84B]/15"
                                    >
                                        Add Resource
                                    </button>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* =========================================
                        RIGHT SIDEBAR
                    ========================================== */}
                    <div className="space-y-6">
                        {/* PUBLISHING */}
                        <section className="rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-6">
                            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#7C9A82]">
                                Publishing
                            </p>

                            <h2 className="mt-2 text-xl font-bold text-[#F3EEDD]">
                                Lesson status
                            </h2>

                            <div className="mt-5 space-y-3">
                                <button
                                    type="button"
                                    onClick={() =>
                                        setFormData((prev) => ({
                                            ...prev,
                                            status: "Draft",
                                        }))
                                    }
                                    className={`w-full rounded-xl border p-4 text-left transition ${formData.status === "Draft"
                                        ? "border-[#F2B84B]/40 bg-[#F2B84B]/10"
                                        : "border-[#F3EEDD]/10 bg-[#141C17]"
                                        }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-semibold text-[#F3EEDD]">
                                            Save as Draft
                                        </span>

                                        <span className="h-2.5 w-2.5 rounded-full bg-[#F2B84B]" />
                                    </div>

                                    <p className="mt-1 text-xs leading-5 text-[#777C74]">
                                        Keep this lesson hidden while you
                                        continue editing.
                                    </p>
                                </button>

                                <button
                                    type="button"
                                    onClick={() =>
                                        setFormData((prev) => ({
                                            ...prev,
                                            status: "Published",
                                        }))
                                    }
                                    className={`w-full rounded-xl border p-4 text-left transition ${formData.status === "Published"
                                        ? "border-[#7C9A82]/40 bg-[#7C9A82]/10"
                                        : "border-[#F3EEDD]/10 bg-[#141C17]"
                                        }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-semibold text-[#F3EEDD]">
                                            Publish Lesson
                                        </span>

                                        <span className="h-2.5 w-2.5 rounded-full bg-[#7C9A82]" />
                                    </div>

                                    <p className="mt-1 text-xs leading-5 text-[#777C74]">
                                        Make this lesson available to students.
                                    </p>
                                </button>
                            </div>
                        </section>

                        {/* FREE PREVIEW */}
                        <section className="rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-6">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#7C9A82]">
                                        Student Access
                                    </p>

                                    <h2 className="mt-2 text-lg font-bold text-[#F3EEDD]">
                                        Free Preview
                                    </h2>

                                    <p className="mt-2 text-xs leading-5 text-[#777C74]">
                                        Allow students to preview this lesson
                                        before enrollment.
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    onClick={() =>
                                        setFormData((prev) => ({
                                            ...prev,
                                            freePreview: !prev.freePreview,
                                        }))
                                    }
                                    className={`relative mt-1 h-6 w-11 shrink-0 rounded-full transition ${formData.freePreview
                                        ? "bg-[#7C9A82]"
                                        : "bg-[#3A433D]"
                                        }`}
                                >
                                    <span
                                        className={`absolute top-1 h-4 w-4 rounded-full bg-[#F3EEDD] transition ${formData.freePreview
                                            ? "left-6"
                                            : "left-1"
                                            }`}
                                    />
                                </button>
                            </div>
                        </section>

                        {/* LESSON LOCATION */}
                        <section className="rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-6">
                            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#7C9A82]">
                                Lesson Location
                            </p>

                            <div className="mt-5 space-y-4">
                                <InfoRow
                                    label="Course"
                                    value={
                                        formData.course || "Not selected"
                                    }
                                />

                                <InfoRow
                                    label="Module"
                                    value={
                                        formData.module || "Not selected"
                                    }
                                />

                                <InfoRow
                                    label="Type"
                                    value={formData.type}
                                />

                                <InfoRow
                                    label="Status"
                                    value={formData.status}
                                />
                            </div>
                        </section>

                        {/* CHECKLIST */}
                        <section className="rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-6">
                            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#7C9A82]">
                                Quick Checklist
                            </p>

                            <div className="mt-5 space-y-4">
                                <ChecklistItem
                                    checked={Boolean(formData.course)}
                                    label="Course selected"
                                />

                                <ChecklistItem
                                    checked={Boolean(formData.module)}
                                    label="Module selected"
                                />

                                <ChecklistItem
                                    checked={Boolean(formData.title)}
                                    label="Lesson title added"
                                />

                                <ChecklistItem
                                    checked={Boolean(formData.description)}
                                    label="Description added"
                                />

                                <ChecklistItem
                                    checked={Boolean(formData.content)}
                                    label="Learning content added"
                                />

                                <ChecklistItem
                                    checked={
                                        formData.type !== "Video" ||
                                        Boolean(formData.videoUrl)
                                    }
                                    label={
                                        formData.type === "Video"
                                            ? "Video URL added"
                                            : "Content type configured"
                                    }
                                />
                            </div>
                        </section>

                        {/* TIP */}
                        <section className="rounded-2xl border border-[#F2B84B]/20 bg-[#F2B84B]/5 p-6">
                            <div className="flex items-start gap-3">
                                <div className="text-[#F2B84B]">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.7"
                                    >
                                        <circle cx="12" cy="12" r="9" />
                                        <path d="M12 11v5" />
                                        <path d="M12 8h.01" />
                                    </svg>
                                </div>

                                <div>
                                    <h3 className="text-sm font-semibold text-[#F3EEDD]">
                                        Teaching tip
                                    </h3>

                                    <p className="mt-2 text-xs leading-5 text-[#777C74]">
                                        Keep every lesson focused on one clear
                                        concept. This makes the course easier
                                        for students to follow.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                {/* BOTTOM ACTIONS */}
                <div className="mt-6 flex flex-col-reverse gap-3 border-t border-[#F3EEDD]/10 pt-6 sm:flex-row sm:justify-end">
                    <Link
                        to="/teacher/lessons"
                        className="rounded-xl border border-[#F3EEDD]/10 bg-[#1B241E] px-6 py-3 text-center text-sm font-semibold text-[#A9AAA1] transition hover:border-[#F3EEDD]/20 hover:text-[#F3EEDD]"
                    >
                        Cancel
                    </Link>

                    <button
                        type="button"
                        onClick={() => {
                            console.log("Lesson draft saved", {
                                ...formData,
                                resources,
                            });
                        }}
                        className="rounded-xl border border-[#F2B84B]/20 bg-[#F2B84B]/10 px-6 py-3 text-sm font-semibold text-[#F2B84B] transition hover:bg-[#F2B84B]/15"
                    >
                        Save Draft
                    </button>

                    <button
                        type="submit"
                        className="rounded-xl bg-[#F2B84B] px-6 py-3 text-sm font-bold text-[#161F19] transition hover:bg-[#f5c766]"
                    >
                        Create Lesson
                    </button>
                </div>
            </form>
        </div>
    );
}

function InfoRow({ label, value }) {
    return (
        <div className="flex items-center justify-between gap-4 border-b border-[#F3EEDD]/10 pb-3 last:border-0 last:pb-0">
            <span className="text-xs text-[#777C74]">
                {label}
            </span>

            <span className="max-w-[180px] truncate text-right text-sm font-semibold text-[#F3EEDD]">
                {value}
            </span>
        </div>
    );
}

function ChecklistItem({ checked, label }) {
    return (
        <div className="flex items-center gap-3">
            <div
                className={`flex h-5 w-5 items-center justify-center rounded-full border ${checked
                    ? "border-[#7C9A82]/40 bg-[#7C9A82]/10 text-[#9EB7A2]"
                    : "border-[#F3EEDD]/10 bg-[#141C17] text-transparent"
                    }`}
            >
                <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path d="m5 12 4 4L19 6" />
                </svg>
            </div>

            <span
                className={`text-sm ${checked
                    ? "text-[#A9AAA1]"
                    : "text-[#777C74]"
                    }`}
            >
                {label}
            </span>
        </div>
    );
}

export default CreateLesson;