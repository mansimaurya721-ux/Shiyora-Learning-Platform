import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const lessonData = {
    id: 1,
    title: "Introduction to HTML",
    course: "Web Development",
    module: "HTML Fundamentals",
    type: "Video",
    status: "Published",
    duration: "18:32",
    description:
        "Learn the fundamentals of HTML, understand document structure, and create your first webpage.",
    videoUrl: "https://example.com/video",
    content:
        "In this lesson, students will learn what HTML is, how an HTML document is structured, and how to create a basic webpage using headings, paragraphs, links, and images.",
    resources: [
        "HTML Cheat Sheet.pdf",
        "Lesson Notes.pdf",
    ],
};

function EditLesson() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [formData, setFormData] = useState({
        title: lessonData.title,
        course: lessonData.course,
        module: lessonData.module,
        type: lessonData.type,
        status: lessonData.status,
        duration: lessonData.duration,
        description: lessonData.description,
        videoUrl: lessonData.videoUrl,
        content: lessonData.content,
    });

    const [resources, setResources] = useState(lessonData.resources);

    const [newResource, setNewResource] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const addResource = () => {
        const resource = newResource.trim();

        if (!resource) return;

        setResources((prev) => [...prev, resource]);
        setNewResource("");
    };

    const removeResource = (resource) => {
        setResources((prev) =>
            prev.filter((item) => item !== resource)
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Updated lesson:", {
            id,
            ...formData,
            resources,
        });

        navigate("/teacher/lessons");
    };

    return (
        <div className="space-y-8">
            {/* Header */}
            <section className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div>
                    <div className="mb-3 flex items-center gap-3">
                        <span className="h-px w-10 bg-[#F2B84B]" />

                        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#F2B84B]">
                            Teaching Workspace
                        </span>
                    </div>

                    <h1 className="text-3xl font-bold tracking-tight text-[#F3EEDD] md:text-4xl">
                        Edit Lesson
                    </h1>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-[#A9AAA1]">
                        Update lesson information, learning content, video
                        details, and supporting resources.
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
                    {/* Main Form */}
                    <div className="space-y-6 xl:col-span-2">
                        {/* Basic Information */}
                        <section className="rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-6">
                            <div className="mb-6">
                                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#7C9A82]">
                                    Lesson Information
                                </p>

                                <h2 className="mt-2 text-xl font-bold text-[#F3EEDD]">
                                    Basic details
                                </h2>
                            </div>

                            <div className="space-y-5">
                                {/* Lesson Title */}
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
                                        className="w-full rounded-xl border border-[#F3EEDD]/10 bg-[#141C17] px-4 py-3 text-sm text-[#F3EEDD] outline-none focus:border-[#F2B84B]/40"
                                    />
                                </div>

                                {/* Course + Module */}
                                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-[#F3EEDD]">
                                            Course
                                        </label>

                                        <select
                                            name="course"
                                            value={formData.course}
                                            onChange={handleChange}
                                            className="w-full rounded-xl border border-[#F3EEDD]/10 bg-[#141C17] px-4 py-3 text-sm text-[#F3EEDD] outline-none focus:border-[#F2B84B]/40"
                                        >
                                            <option>
                                                Web Development
                                            </option>
                                            <option>
                                                JavaScript Mastery
                                            </option>
                                            <option>
                                                React Development
                                            </option>
                                            <option>
                                                CSS & UI Design
                                            </option>
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
                                            className="w-full rounded-xl border border-[#F3EEDD]/10 bg-[#141C17] px-4 py-3 text-sm text-[#F3EEDD] outline-none focus:border-[#F2B84B]/40"
                                        >
                                            <option>
                                                HTML Fundamentals
                                            </option>
                                            <option>
                                                CSS Fundamentals
                                            </option>
                                            <option>
                                                JavaScript Basics
                                            </option>
                                            <option>
                                                Advanced Concepts
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                {/* Type + Duration */}
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
                                            <option>Video</option>
                                            <option>Article</option>
                                            <option>PDF</option>
                                            <option>Live Class</option>
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
                                            placeholder="e.g. 18:32"
                                            className="w-full rounded-xl border border-[#F3EEDD]/10 bg-[#141C17] px-4 py-3 text-sm text-[#F3EEDD] outline-none placeholder:text-[#777C74] focus:border-[#F2B84B]/40"
                                        />
                                    </div>
                                </div>

                                {/* Description */}
                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-[#F3EEDD]">
                                        Short Description
                                    </label>

                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full resize-none rounded-xl border border-[#F3EEDD]/10 bg-[#141C17] px-4 py-3 text-sm leading-6 text-[#F3EEDD] outline-none focus:border-[#F2B84B]/40"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Video */}
                        {formData.type === "Video" && (
                            <section className="rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-6">
                                <div className="mb-6">
                                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#7C9A82]">
                                        Lesson Media
                                    </p>

                                    <h2 className="mt-2 text-xl font-bold text-[#F3EEDD]">
                                        Video content
                                    </h2>
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-[#F3EEDD]">
                                        Video URL
                                    </label>

                                    <input
                                        type="url"
                                        name="videoUrl"
                                        value={formData.videoUrl}
                                        onChange={handleChange}
                                        placeholder="https://..."
                                        className="w-full rounded-xl border border-[#F3EEDD]/10 bg-[#141C17] px-4 py-3 text-sm text-[#F3EEDD] outline-none placeholder:text-[#777C74] focus:border-[#F2B84B]/40"
                                    />

                                    <p className="mt-2 text-xs leading-5 text-[#777C74]">
                                        Add the URL of the hosted lesson video.
                                        Actual video storage can be connected
                                        later through your backend/cloud
                                        storage.
                                    </p>
                                </div>

                                <div className="mt-5 rounded-xl border border-[#F2B84B]/10 bg-[#141C17] p-5">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F2B84B]/10 text-[#F2B84B]">
                                            <svg
                                                width="21"
                                                height="21"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.7"
                                            >
                                                <path d="m9 7 8 5-8 5V7Z" />
                                            </svg>
                                        </div>

                                        <div>
                                            <p className="text-sm font-semibold text-[#F3EEDD]">
                                                Video preview
                                            </p>

                                            <p className="mt-1 text-xs text-[#777C74]">
                                                Preview will be available once
                                                video hosting is connected.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* Lesson Content */}
                        <section className="rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-6">
                            <div className="mb-6">
                                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#7C9A82]">
                                    Learning Material
                                </p>

                                <h2 className="mt-2 text-xl font-bold text-[#F3EEDD]">
                                    Lesson content
                                </h2>
                            </div>

                            <textarea
                                name="content"
                                value={formData.content}
                                onChange={handleChange}
                                rows="12"
                                placeholder="Write the lesson content..."
                                className="w-full resize-y rounded-xl border border-[#F3EEDD]/10 bg-[#141C17] px-4 py-4 text-sm leading-7 text-[#F3EEDD] outline-none placeholder:text-[#777C74] focus:border-[#F2B84B]/40"
                            />

                            <div className="mt-3 flex items-center justify-between text-xs text-[#777C74]">
                                <span>
                                    Keep the content clear and structured for
                                    students.
                                </span>

                                <span className="font-mono">
                                    {formData.content.length} characters
                                </span>
                            </div>
                        </section>

                        {/* Resources */}
                        <section className="rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-6">
                            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                                <div>
                                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#7C9A82]">
                                        Supporting Material
                                    </p>

                                    <h2 className="mt-2 text-xl font-bold text-[#F3EEDD]">
                                        Lesson resources
                                    </h2>
                                </div>

                                <span className="font-mono text-xs text-[#777C74]">
                                    {resources.length} resources
                                </span>
                            </div>

                            <div className="mt-6 space-y-3">
                                {resources.map((resource) => (
                                    <div
                                        key={resource}
                                        className="flex items-center gap-3 rounded-xl border border-[#F3EEDD]/10 bg-[#141C17] p-4"
                                    >
                                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#7C9A82]/10 text-[#9EB7A2]">
                                            <svg
                                                width="17"
                                                height="17"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.7"
                                            >
                                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                                                <path d="M14 2v6h6" />
                                            </svg>
                                        </div>

                                        <span className="flex-1 truncate text-sm text-[#A9AAA1]">
                                            {resource}
                                        </span>

                                        <button
                                            type="button"
                                            onClick={() =>
                                                removeResource(resource)
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

                            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                                <input
                                    type="text"
                                    value={newResource}
                                    onChange={(e) =>
                                        setNewResource(e.target.value)
                                    }
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            e.preventDefault();
                                            addResource();
                                        }
                                    }}
                                    placeholder="Resource name..."
                                    className="flex-1 rounded-xl border border-[#F3EEDD]/10 bg-[#141C17] px-4 py-3 text-sm text-[#F3EEDD] outline-none placeholder:text-[#777C74] focus:border-[#F2B84B]/40"
                                />

                                <button
                                    type="button"
                                    onClick={addResource}
                                    className="rounded-xl border border-[#7C9A82]/20 bg-[#7C9A82]/10 px-5 py-3 text-sm font-semibold text-[#9EB7A2] transition hover:bg-[#7C9A82]/15"
                                >
                                    + Add Resource
                                </button>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Status */}
                        <section className="rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-6">
                            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#7C9A82]">
                                Publishing
                            </p>

                            <h2 className="mt-2 text-xl font-bold text-[#F3EEDD]">
                                Lesson status
                            </h2>

                            <div className="mt-6 space-y-3">
                                {["Published", "Draft"].map((status) => (
                                    <button
                                        key={status}
                                        type="button"
                                        onClick={() =>
                                            setFormData((prev) => ({
                                                ...prev,
                                                status,
                                            }))
                                        }
                                        className={`w-full rounded-xl border p-4 text-left transition ${formData.status === status
                                            ? status === "Published"
                                                ? "border-[#7C9A82]/40 bg-[#7C9A82]/10"
                                                : "border-[#F2B84B]/40 bg-[#F2B84B]/10"
                                            : "border-[#F3EEDD]/10 bg-[#141C17]"
                                            }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-semibold text-[#F3EEDD]">
                                                {status}
                                            </span>

                                            <span
                                                className={`h-2.5 w-2.5 rounded-full ${status === "Published"
                                                    ? "bg-[#7C9A82]"
                                                    : "bg-[#F2B84B]"
                                                    }`}
                                            />
                                        </div>

                                        <p className="mt-1 text-xs text-[#777C74]">
                                            {status === "Published"
                                                ? "Students can access this lesson."
                                                : "Keep this lesson hidden while editing."}
                                        </p>
                                    </button>
                                ))}
                            </div>
                        </section>

                        {/* Lesson Details */}
                        <section className="rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-6">
                            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#7C9A82]">
                                Current Lesson
                            </p>

                            <div className="mt-5 space-y-4">
                                <div>
                                    <p className="text-[10px] uppercase tracking-wider text-[#777C74]">
                                        Lesson ID
                                    </p>

                                    <p className="mt-1 font-mono text-sm text-[#F3EEDD]">
                                        #{id || lessonData.id}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-[10px] uppercase tracking-wider text-[#777C74]">
                                        Course
                                    </p>

                                    <p className="mt-1 text-sm text-[#F3EEDD]">
                                        {formData.course}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-[10px] uppercase tracking-wider text-[#777C74]">
                                        Module
                                    </p>

                                    <p className="mt-1 text-sm text-[#F3EEDD]">
                                        {formData.module}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-[10px] uppercase tracking-wider text-[#777C74]">
                                        Content Type
                                    </p>

                                    <p className="mt-1 text-sm text-[#F3EEDD]">
                                        {formData.type}
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Tip */}
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
                                        Lesson tip
                                    </h3>

                                    <p className="mt-2 text-xs leading-5 text-[#777C74]">
                                        Keep each lesson focused on one
                                        learning objective and give students
                                        useful supporting material.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                {/* Actions */}
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
                                id,
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
                        Update Lesson
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditLesson;