import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditCourse() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [thumbnail, setThumbnail] = useState(null);

    const [formData, setFormData] = useState({
        title: "Complete Web Development",
        category: "Web Development",
        level: "Intermediate",
        language: "English",
        description:
            "Learn modern web development from HTML and CSS to JavaScript and responsive interfaces.",
        access: "Free",
        price: "",
        status: "Published",
    });

    const [modules, setModules] = useState([
        {
            id: 1,
            title: "HTML Fundamentals",
            description: "Learn the fundamentals of HTML.",
        },
        {
            id: 2,
            title: "CSS Fundamentals",
            description: "Build beautiful and responsive layouts with CSS.",
        },
        {
            id: 3,
            title: "JavaScript Basics",
            description: "Understand JavaScript fundamentals and logic.",
        },
    ]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleThumbnail = (e) => {
        const file = e.target.files?.[0];

        if (!file) return;

        setThumbnail({
            file,
            preview: URL.createObjectURL(file),
        });
    };

    const addModule = () => {
        setModules((prev) => [
            ...prev,
            {
                id: Date.now(),
                title: "",
                description: "",
            },
        ]);
    };

    const updateModule = (id, field, value) => {
        setModules((prev) =>
            prev.map((module) =>
                module.id === id
                    ? {
                        ...module,
                        [field]: value,
                    }
                    : module
            )
        );
    };

    const removeModule = (id) => {
        setModules((prev) =>
            prev.filter((module) => module.id !== id)
        );
    };

    const moveModule = (index, direction) => {
        const newModules = [...modules];
        const targetIndex = index + direction;

        if (
            targetIndex < 0 ||
            targetIndex >= newModules.length
        ) {
            return;
        }

        [newModules[index], newModules[targetIndex]] = [
            newModules[targetIndex],
            newModules[index],
        ];

        setModules(newModules);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedCourse = {
            id,
            ...formData,
            modules,
            thumbnail,
        };

        console.log("Updated Course:", updatedCourse);

        navigate("/teacher/courses");
    };

    return (
        <div className="space-y-8">
            {/* Header */}
            <section className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div>
                    <div className="mb-3 flex items-center gap-3">
                        <span className="h-px w-10 bg-[#F2B84B]" />

                        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#F2B84B]">
                            Course Management
                        </span>
                    </div>

                    <h1 className="text-3xl font-bold tracking-tight text-[#F3EEDD] md:text-4xl">
                        Edit Course
                    </h1>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-[#A9AAA1]">
                        Update your course information, structure,
                        pricing, and publishing settings.
                    </p>
                </div>

                <Link
                    to="/teacher/courses"
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

                    Back to Courses
                </Link>
            </section>

            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
                    {/* LEFT SIDE */}
                    <div className="space-y-6 xl:col-span-2">
                        {/* Basic Information */}
                        <section className="rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-6">
                            <div className="mb-6">
                                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#7C9A82]">
                                    Course Information
                                </p>

                                <h2 className="mt-2 text-xl font-bold text-[#F3EEDD]">
                                    Basic details
                                </h2>

                                <p className="mt-1 text-sm text-[#777C74]">
                                    Update the information students see
                                    before enrolling.
                                </p>
                            </div>

                            <div className="space-y-5">
                                {/* Title */}
                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-[#F3EEDD]">
                                        Course Title
                                    </label>

                                    <input
                                        type="text"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-xl border border-[#F3EEDD]/10 bg-[#141C17] px-4 py-3 text-sm text-[#F3EEDD] outline-none placeholder:text-[#777C74] focus:border-[#F2B84B]/40"
                                    />
                                </div>

                                {/* Category / Level / Language */}
                                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-[#F3EEDD]">
                                            Category
                                        </label>

                                        <select
                                            name="category"
                                            value={formData.category}
                                            onChange={handleChange}
                                            className="w-full rounded-xl border border-[#F3EEDD]/10 bg-[#141C17] px-4 py-3 text-sm text-[#F3EEDD] outline-none focus:border-[#F2B84B]/40"
                                        >
                                            <option>
                                                Web Development
                                            </option>
                                            <option>
                                                Programming
                                            </option>
                                            <option>
                                                UI/UX Design
                                            </option>
                                            <option>
                                                Database
                                            </option>
                                            <option>
                                                Data Science
                                            </option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-[#F3EEDD]">
                                            Level
                                        </label>

                                        <select
                                            name="level"
                                            value={formData.level}
                                            onChange={handleChange}
                                            className="w-full rounded-xl border border-[#F3EEDD]/10 bg-[#141C17] px-4 py-3 text-sm text-[#F3EEDD] outline-none focus:border-[#F2B84B]/40"
                                        >
                                            <option>Beginner</option>
                                            <option>Intermediate</option>
                                            <option>Advanced</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-[#F3EEDD]">
                                            Language
                                        </label>

                                        <select
                                            name="language"
                                            value={formData.language}
                                            onChange={handleChange}
                                            className="w-full rounded-xl border border-[#F3EEDD]/10 bg-[#141C17] px-4 py-3 text-sm text-[#F3EEDD] outline-none focus:border-[#F2B84B]/40"
                                        >
                                            <option>English</option>
                                            <option>Hindi</option>
                                            <option>Hinglish</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Description */}
                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-[#F3EEDD]">
                                        Course Description
                                    </label>

                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        rows="6"
                                        required
                                        className="w-full resize-none rounded-xl border border-[#F3EEDD]/10 bg-[#141C17] px-4 py-3 text-sm leading-6 text-[#F3EEDD] outline-none placeholder:text-[#777C74] focus:border-[#F2B84B]/40"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Thumbnail */}
                        <section className="rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-6">
                            <div className="mb-6">
                                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#7C9A82]">
                                    Course Appearance
                                </p>

                                <h2 className="mt-2 text-xl font-bold text-[#F3EEDD]">
                                    Course thumbnail
                                </h2>
                            </div>

                            <div className="flex flex-col gap-5 md:flex-row md:items-center">
                                <div className="flex h-44 w-full items-center justify-center overflow-hidden rounded-2xl border border-[#F3EEDD]/10 bg-[#141C17] md:w-72">
                                    {thumbnail?.preview ? (
                                        <img
                                            src={thumbnail.preview}
                                            alt="Course thumbnail preview"
                                            className="h-full w-full object-cover"
                                        />
                                    ) : (
                                        <div className="text-center">
                                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#F2B84B]/10 text-[#F2B84B]">
                                                <svg
                                                    width="23"
                                                    height="23"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="1.7"
                                                >
                                                    <rect
                                                        x="3"
                                                        y="3"
                                                        width="18"
                                                        height="18"
                                                        rx="2"
                                                    />
                                                    <circle
                                                        cx="8.5"
                                                        cy="8.5"
                                                        r="1.5"
                                                    />
                                                    <path d="m21 15-5-5L5 21" />
                                                </svg>
                                            </div>

                                            <p className="mt-3 text-xs text-[#777C74]">
                                                Current thumbnail
                                            </p>
                                        </div>
                                    )}
                                </div>

                                <div className="flex-1">
                                    <label className="mb-2 block text-sm font-semibold text-[#F3EEDD]">
                                        Replace thumbnail
                                    </label>

                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleThumbnail}
                                        className="block w-full rounded-xl border border-[#F3EEDD]/10 bg-[#141C17] text-sm text-[#A9AAA1] file:mr-4 file:border-0 file:bg-[#F2B84B]/10 file:px-4 file:py-3 file:text-sm file:font-semibold file:text-[#F2B84B]"
                                    />

                                    <p className="mt-3 text-xs leading-5 text-[#777C74]">
                                        Recommended: 1280 × 720px. Use a
                                        clear image that represents the
                                        course.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Course Structure */}
                        <section className="rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-6">
                            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                                <div>
                                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#7C9A82]">
                                        Course Structure
                                    </p>

                                    <h2 className="mt-2 text-xl font-bold text-[#F3EEDD]">
                                        Modules
                                    </h2>

                                    <p className="mt-1 text-sm text-[#777C74]">
                                        Reorder or update the modules in
                                        your course.
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    onClick={addModule}
                                    className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#7C9A82]/10 px-4 py-2.5 text-sm font-semibold text-[#9EB7A2] transition hover:bg-[#7C9A82]/15"
                                >
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                    >
                                        <path d="M12 5v14" />
                                        <path d="M5 12h14" />
                                    </svg>

                                    Add Module
                                </button>
                            </div>

                            <div className="space-y-4">
                                {modules.map((module, index) => (
                                    <div
                                        key={module.id}
                                        className="rounded-2xl border border-[#F3EEDD]/10 bg-[#141C17] p-5"
                                    >
                                        <div className="flex gap-4">
                                            {/* Number */}
                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#F2B84B]/20 bg-[#F2B84B]/10 font-mono text-sm font-bold text-[#F2B84B]">
                                                {String(index + 1).padStart(
                                                    2,
                                                    "0"
                                                )}
                                            </div>

                                            <div className="min-w-0 flex-1 space-y-4">
                                                <input
                                                    type="text"
                                                    value={module.title}
                                                    onChange={(e) =>
                                                        updateModule(
                                                            module.id,
                                                            "title",
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Module title"
                                                    className="w-full rounded-xl border border-[#F3EEDD]/10 bg-[#1B241E] px-4 py-3 text-sm font-semibold text-[#F3EEDD] outline-none placeholder:text-[#777C74] focus:border-[#F2B84B]/40"
                                                />

                                                <textarea
                                                    value={module.description}
                                                    onChange={(e) =>
                                                        updateModule(
                                                            module.id,
                                                            "description",
                                                            e.target.value
                                                        )
                                                    }
                                                    rows="2"
                                                    placeholder="Module description"
                                                    className="w-full resize-none rounded-xl border border-[#F3EEDD]/10 bg-[#1B241E] px-4 py-3 text-sm text-[#A9AAA1] outline-none placeholder:text-[#777C74] focus:border-[#F2B84B]/40"
                                                />

                                                <div className="flex flex-wrap items-center gap-2">
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            moveModule(
                                                                index,
                                                                -1
                                                            )
                                                        }
                                                        disabled={index === 0}
                                                        className="rounded-lg border border-[#F3EEDD]/10 px-3 py-2 text-xs text-[#A9AAA1] transition hover:text-[#F2B84B] disabled:cursor-not-allowed disabled:opacity-30"
                                                    >
                                                        ↑ Move Up
                                                    </button>

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            moveModule(
                                                                index,
                                                                1
                                                            )
                                                        }
                                                        disabled={
                                                            index ===
                                                            modules.length - 1
                                                        }
                                                        className="rounded-lg border border-[#F3EEDD]/10 px-3 py-2 text-xs text-[#A9AAA1] transition hover:text-[#F2B84B] disabled:cursor-not-allowed disabled:opacity-30"
                                                    >
                                                        ↓ Move Down
                                                    </button>

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            removeModule(
                                                                module.id
                                                            )
                                                        }
                                                        className="rounded-lg border border-[#D6402C]/10 px-3 py-2 text-xs text-[#E97868] transition hover:bg-[#D6402C]/10"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {modules.length === 0 && (
                                    <div className="rounded-2xl border border-dashed border-[#F3EEDD]/10 p-10 text-center">
                                        <p className="text-sm text-[#777C74]">
                                            No modules added yet.
                                        </p>

                                        <button
                                            type="button"
                                            onClick={addModule}
                                            className="mt-4 rounded-xl bg-[#F2B84B]/10 px-4 py-2 text-sm font-semibold text-[#F2B84B]"
                                        >
                                            Add First Module
                                        </button>
                                    </div>
                                )}
                            </div>
                        </section>

                        {/* Pricing */}
                        <section className="rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-6">
                            <div className="mb-6">
                                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#7C9A82]">
                                    Access & Pricing
                                </p>

                                <h2 className="mt-2 text-xl font-bold text-[#F3EEDD]">
                                    Course access
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <button
                                    type="button"
                                    onClick={() =>
                                        setFormData((prev) => ({
                                            ...prev,
                                            access: "Free",
                                            price: "",
                                        }))
                                    }
                                    className={`rounded-2xl border p-5 text-left transition ${formData.access === "Free"
                                        ? "border-[#7C9A82]/40 bg-[#7C9A82]/10"
                                        : "border-[#F3EEDD]/10 bg-[#141C17]"
                                        }`}
                                >
                                    <p className="text-sm font-bold text-[#F3EEDD]">
                                        Free Course
                                    </p>

                                    <p className="mt-2 text-xs leading-5 text-[#777C74]">
                                        Anyone can access this course without
                                        payment.
                                    </p>
                                </button>

                                <button
                                    type="button"
                                    onClick={() =>
                                        setFormData((prev) => ({
                                            ...prev,
                                            access: "Paid",
                                        }))
                                    }
                                    className={`rounded-2xl border p-5 text-left transition ${formData.access === "Paid"
                                        ? "border-[#F2B84B]/40 bg-[#F2B84B]/10"
                                        : "border-[#F3EEDD]/10 bg-[#141C17]"
                                        }`}
                                >
                                    <p className="text-sm font-bold text-[#F3EEDD]">
                                        Paid Course
                                    </p>

                                    <p className="mt-2 text-xs leading-5 text-[#777C74]">
                                        Students need to purchase access
                                        before learning.
                                    </p>
                                </button>
                            </div>

                            {formData.access === "Paid" && (
                                <div className="mt-5">
                                    <label className="mb-2 block text-sm font-semibold text-[#F3EEDD]">
                                        Course Price (₹)
                                    </label>

                                    <input
                                        type="number"
                                        min="0"
                                        name="price"
                                        value={formData.price}
                                        onChange={handleChange}
                                        placeholder="e.g. 999"
                                        className="w-full rounded-xl border border-[#F3EEDD]/10 bg-[#141C17] px-4 py-3 text-sm text-[#F3EEDD] outline-none placeholder:text-[#777C74] focus:border-[#F2B84B]/40"
                                    />
                                </div>
                            )}
                        </section>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="space-y-6">
                        {/* Publishing */}
                        <section className="rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-6">
                            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#7C9A82]">
                                Publishing
                            </p>

                            <h2 className="mt-2 text-xl font-bold text-[#F3EEDD]">
                                Course status
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
                                            Draft
                                        </span>

                                        <span className="h-2.5 w-2.5 rounded-full bg-[#F2B84B]" />
                                    </div>

                                    <p className="mt-1 text-xs text-[#777C74]">
                                        Keep the course hidden while editing.
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
                                            Published
                                        </span>

                                        <span className="h-2.5 w-2.5 rounded-full bg-[#7C9A82]" />
                                    </div>

                                    <p className="mt-1 text-xs text-[#777C74]">
                                        Make the course available to students.
                                    </p>
                                </button>
                            </div>
                        </section>

                        {/* Course Stats */}
                        <section className="rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-6">
                            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#7C9A82]">
                                Course Overview
                            </p>

                            <div className="mt-5 space-y-4">
                                <InfoRow
                                    label="Course ID"
                                    value={`#${id || "COURSE-001"}`}
                                />

                                <InfoRow
                                    label="Modules"
                                    value={modules.length}
                                />

                                <InfoRow
                                    label="Access"
                                    value={formData.access}
                                />

                                <InfoRow
                                    label="Status"
                                    value={formData.status}
                                />
                            </div>
                        </section>

                        {/* Checklist */}
                        <section className="rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-6">
                            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#7C9A82]">
                                Update Checklist
                            </p>

                            <div className="mt-5 space-y-4">
                                <ChecklistItem
                                    checked={Boolean(formData.title)}
                                    label="Course title"
                                />

                                <ChecklistItem
                                    checked={Boolean(formData.category)}
                                    label="Category selected"
                                />

                                <ChecklistItem
                                    checked={Boolean(formData.description)}
                                    label="Description added"
                                />

                                <ChecklistItem
                                    checked={modules.length > 0}
                                    label="At least one module"
                                />

                                <ChecklistItem
                                    checked={
                                        formData.access === "Free" ||
                                        Boolean(formData.price)
                                    }
                                    label="Pricing configured"
                                />
                            </div>
                        </section>

                        {/* Manage Content */}
                        <section className="rounded-2xl border border-[#F2B84B]/20 bg-[#F2B84B]/5 p-6">
                            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#F2B84B]">
                                Next Step
                            </p>

                            <h3 className="mt-2 text-lg font-bold text-[#F3EEDD]">
                                Manage lessons
                            </h3>

                            <p className="mt-2 text-xs leading-5 text-[#777C74]">
                                Course editing controls the course structure.
                                Add the actual lessons separately from the
                                Lessons section.
                            </p>

                            <Link
                                to="/teacher/lessons"
                                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#F2B84B]/20 bg-[#F2B84B]/10 px-4 py-3 text-sm font-semibold text-[#F2B84B] transition hover:bg-[#F2B84B]/15"
                            >
                                Manage Lessons

                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                >
                                    <path d="M5 12h14" />
                                    <path d="m13 6 6 6-6 6" />
                                </svg>
                            </Link>
                        </section>
                    </div>
                </div>

                {/* Bottom Actions */}
                <div className="mt-6 flex flex-col-reverse gap-3 border-t border-[#F3EEDD]/10 pt-6 sm:flex-row sm:justify-end">
                    <Link
                        to="/teacher/courses"
                        className="rounded-xl border border-[#F3EEDD]/10 bg-[#1B241E] px-6 py-3 text-center text-sm font-semibold text-[#A9AAA1] transition hover:border-[#F3EEDD]/20 hover:text-[#F3EEDD]"
                    >
                        Cancel
                    </Link>

                    <button
                        type="button"
                        onClick={() => {
                            console.log("Course draft saved", {
                                id,
                                ...formData,
                                modules,
                                thumbnail,
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
                        Update Course
                    </button>
                </div>
            </form>
        </div>
    );
}

function InfoRow({ label, value }) {
    return (
        <div className="flex items-center justify-between gap-4 border-b border-[#F3EEDD]/10 pb-3 last:border-0 last:pb-0">
            <span className="text-xs text-[#777C74]">{label}</span>

            <span className="max-w-45 truncate text-right text-sm font-semibold text-[#F3EEDD]">
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
                className={`text-sm ${checked ? "text-[#A9AAA1]" : "text-[#777C74]"
                    }`}
            >
                {label}
            </span>
        </div>
    );
}

export default EditCourse;