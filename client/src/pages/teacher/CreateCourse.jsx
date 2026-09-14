import { useRef, useState } from "react";
import { Link } from "react-router-dom";

function CreateCourse() {
    const fileInputRef = useRef(null);

    const [formData, setFormData] = useState({
        title: "",
        category: "",
        level: "",
        language: "English",
        description: "",
        price: "",
        access: "Free",
    });

    const [thumbnail, setThumbnail] = useState(null);
    const [thumbnailPreview, setThumbnailPreview] = useState("");
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    const handleThumbnailChange = (e) => {
        const file = e.target.files?.[0];

        if (!file) return;

        setThumbnail(file);
        setThumbnailPreview(URL.createObjectURL(file));
    };

    const removeThumbnail = () => {
        setThumbnail(null);
        setThumbnailPreview("");

        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setMessage(
            "Course details saved locally. Backend integration can be added next."
        );
    };

    return (
        <div className="space-y-7">

            {/* ===================================================== */}
            {/* HEADER */}
            {/* ===================================================== */}

            <section className="relative overflow-hidden rounded-3xl border border-[#F2B84B]/15 bg-[#1B241E] p-7 lg:p-8">

                <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#F2B84B]/5 blur-3xl" />

                <div className="pointer-events-none absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-[#7C9A82]/5 blur-3xl" />

                <div className="relative">

                    <Link
                        to="/teacher/courses"
                        className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#7C9A82] transition hover:text-[#F2B84B]"
                    >
                        <span>←</span>
                        Back to Courses
                    </Link>

                    <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

                        <div>
                            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#7C9A82]">
                                Teacher Workspace / Course Builder
                            </p>

                            <h1 className="mt-2 font-['Space_Grotesk'] text-3xl font-bold tracking-tight text-[#F3EEDD] md:text-4xl">
                                Create New Course
                            </h1>

                            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#F3EEDD]/50">
                                Build a structured learning experience for your
                                students. Add the course details now and
                                organize lessons and assessments afterward.
                            </p>
                        </div>

                        <div className="hidden font-mono text-[9px] uppercase tracking-[0.2em] text-[#F3EEDD]/25 lg:block">
                            Draft / New Course
                        </div>

                    </div>

                </div>
            </section>


            {/* ===================================================== */}
            {/* SUCCESS / INFO MESSAGE */}
            {/* ===================================================== */}

            {message && (
                <div className="flex items-start gap-3 rounded-2xl border border-[#7C9A82]/20 bg-[#7C9A82]/5 p-4">

                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#7C9A82]/20 bg-[#7C9A82]/10 text-sm font-bold text-[#7C9A82]">
                        ✓
                    </div>

                    <div>
                        <p className="text-sm font-semibold text-[#F3EEDD]">
                            Course saved
                        </p>

                        <p className="mt-1 text-xs text-[#F3EEDD]/40">
                            {message}
                        </p>
                    </div>

                </div>
            )}


            {/* ===================================================== */}
            {/* FORM */}
            {/* ===================================================== */}

            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-6 xl:grid-cols-3"
            >

                {/* ================================================= */}
                {/* LEFT / MAIN FORM */}
                {/* ================================================= */}

                <div className="space-y-6 xl:col-span-2">

                    {/* --------------------------------------------- */}
                    {/* BASIC INFORMATION */}
                    {/* --------------------------------------------- */}

                    <section className="rounded-3xl border border-[#F2B84B]/10 bg-[#1B241E]">

                        <div className="border-b border-[#F2B84B]/10 px-6 py-5">

                            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#7C9A82]">
                                Step 01
                            </p>

                            <h2 className="mt-1 font-['Space_Grotesk'] text-xl font-bold text-[#F3EEDD]">
                                Course Information
                            </h2>

                            <p className="mt-1 text-xs text-[#F3EEDD]/35">
                                Start with the basic information students will
                                see about your course.
                            </p>

                        </div>


                        <div className="space-y-5 p-6">

                            {/* Course Title */}

                            <div>
                                <label className="mb-2 block text-xs font-semibold text-[#F3EEDD]/70">
                                    Course Title
                                    <span className="ml-1 text-[#D6402C]">
                                        *
                                    </span>
                                </label>

                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    placeholder="e.g. Full Stack Web Development"
                                    required
                                    className="w-full rounded-xl border border-[#F2B84B]/10 bg-[#161F19] px-4 py-3 text-sm text-[#F3EEDD] outline-none placeholder:text-[#F3EEDD]/20 transition focus:border-[#F2B84B]/35 focus:ring-1 focus:ring-[#F2B84B]/10"
                                />

                                <p className="mt-2 text-[10px] text-[#F3EEDD]/25">
                                    Choose a clear and descriptive course title.
                                </p>
                            </div>


                            {/* Category + Level */}

                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                                <div>
                                    <label className="mb-2 block text-xs font-semibold text-[#F3EEDD]/70">
                                        Category
                                        <span className="ml-1 text-[#D6402C]">
                                            *
                                        </span>
                                    </label>

                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-xl border border-[#F2B84B]/10 bg-[#161F19] px-4 py-3 text-sm text-[#F3EEDD]/75 outline-none focus:border-[#F2B84B]/35"
                                    >
                                        <option value="">
                                            Select category
                                        </option>
                                        <option value="Development">
                                            Development
                                        </option>
                                        <option value="Programming">
                                            Programming
                                        </option>
                                        <option value="Database">
                                            Database
                                        </option>
                                        <option value="Design">
                                            Design
                                        </option>
                                        <option value="Business">
                                            Business
                                        </option>
                                        <option value="Other">
                                            Other
                                        </option>
                                    </select>
                                </div>


                                <div>
                                    <label className="mb-2 block text-xs font-semibold text-[#F3EEDD]/70">
                                        Difficulty Level
                                        <span className="ml-1 text-[#D6402C]">
                                            *
                                        </span>
                                    </label>

                                    <select
                                        name="level"
                                        value={formData.level}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-xl border border-[#F2B84B]/10 bg-[#161F19] px-4 py-3 text-sm text-[#F3EEDD]/75 outline-none focus:border-[#F2B84B]/35"
                                    >
                                        <option value="">
                                            Select level
                                        </option>
                                        <option value="Beginner">
                                            Beginner
                                        </option>
                                        <option value="Intermediate">
                                            Intermediate
                                        </option>
                                        <option value="Advanced">
                                            Advanced
                                        </option>
                                    </select>
                                </div>

                            </div>


                            {/* Language */}

                            <div className="md:max-w-md">

                                <label className="mb-2 block text-xs font-semibold text-[#F3EEDD]/70">
                                    Course Language
                                </label>

                                <select
                                    name="language"
                                    value={formData.language}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border border-[#F2B84B]/10 bg-[#161F19] px-4 py-3 text-sm text-[#F3EEDD]/75 outline-none focus:border-[#F2B84B]/35"
                                >
                                    <option value="English">
                                        English
                                    </option>
                                    <option value="Hindi">
                                        Hindi
                                    </option>
                                    <option value="Hinglish">
                                        Hinglish
                                    </option>
                                </select>

                            </div>


                            {/* Description */}

                            <div>

                                <div className="mb-2 flex items-center justify-between">

                                    <label className="text-xs font-semibold text-[#F3EEDD]/70">
                                        Course Description
                                        <span className="ml-1 text-[#D6402C]">
                                            *
                                        </span>
                                    </label>

                                    <span className="font-mono text-[9px] text-[#F3EEDD]/25">
                                        {formData.description.length}/500
                                    </span>

                                </div>

                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={(e) => {
                                        if (e.target.value.length <= 500) {
                                            handleChange(e);
                                        }
                                    }}
                                    placeholder="Describe what students will learn, who the course is for, and what they can expect..."
                                    rows={6}
                                    required
                                    className="w-full resize-none rounded-xl border border-[#F2B84B]/10 bg-[#161F19] px-4 py-3 text-sm leading-6 text-[#F3EEDD] outline-none placeholder:text-[#F3EEDD]/20 transition focus:border-[#F2B84B]/35 focus:ring-1 focus:ring-[#F2B84B]/10"
                                />

                            </div>

                        </div>
                    </section>


                    {/* --------------------------------------------- */}
                    {/* COURSE CONTENT PLAN */}
                    {/* --------------------------------------------- */}

                    <section className="rounded-3xl border border-[#F2B84B]/10 bg-[#1B241E]">

                        <div className="border-b border-[#F2B84B]/10 px-6 py-5">

                            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#7C9A82]">
                                Step 02
                            </p>

                            <h2 className="mt-1 font-['Space_Grotesk'] text-xl font-bold text-[#F3EEDD]">
                                Course Content
                            </h2>

                            <p className="mt-1 text-xs text-[#F3EEDD]/35">
                                You can organize lessons, quizzes and
                                assignments after creating the course.
                            </p>

                        </div>


                        <div className="p-6">

                            <div className="rounded-2xl border border-dashed border-[#F2B84B]/15 bg-[#161F19] p-7 text-center">

                                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#F2B84B]/15 bg-[#F2B84B]/5 font-['Space_Grotesk'] text-xl font-bold text-[#F2B84B]">
                                    +
                                </div>

                                <h3 className="mt-4 font-['Space_Grotesk'] text-lg font-bold text-[#F3EEDD]">
                                    Build your curriculum
                                </h3>

                                <p className="mx-auto mt-2 max-w-md text-xs leading-5 text-[#F3EEDD]/35">
                                    Once the course is created, you can add
                                    lessons, video lectures, PDF notes,
                                    quizzes and assignments.
                                </p>

                                <div className="mt-5 flex flex-wrap justify-center gap-2">

                                    <span className="rounded-lg border border-[#F2B84B]/10 bg-[#1B241E] px-3 py-2 font-mono text-[9px] uppercase tracking-wider text-[#F3EEDD]/40">
                                        Lessons
                                    </span>

                                    <span className="rounded-lg border border-[#F2B84B]/10 bg-[#1B241E] px-3 py-2 font-mono text-[9px] uppercase tracking-wider text-[#F3EEDD]/40">
                                        Video
                                    </span>

                                    <span className="rounded-lg border border-[#F2B84B]/10 bg-[#1B241E] px-3 py-2 font-mono text-[9px] uppercase tracking-wider text-[#F3EEDD]/40">
                                        PDF
                                    </span>

                                    <span className="rounded-lg border border-[#F2B84B]/10 bg-[#1B241E] px-3 py-2 font-mono text-[9px] uppercase tracking-wider text-[#F3EEDD]/40">
                                        Quiz
                                    </span>

                                    <span className="rounded-lg border border-[#F2B84B]/10 bg-[#1B241E] px-3 py-2 font-mono text-[9px] uppercase tracking-wider text-[#F3EEDD]/40">
                                        Assignment
                                    </span>

                                </div>

                            </div>

                        </div>
                    </section>


                    {/* --------------------------------------------- */}
                    {/* ACTIONS */}
                    {/* --------------------------------------------- */}

                    <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

                        <Link
                            to="/teacher/courses"
                            className="rounded-xl border border-[#F2B84B]/10 bg-[#1B241E] px-5 py-3 text-center text-xs font-semibold text-[#F3EEDD]/60 transition hover:border-[#F2B84B]/20 hover:text-[#F3EEDD]"
                        >
                            Cancel
                        </Link>

                        <button
                            type="button"
                            onClick={() =>
                                setMessage(
                                    "Draft saved locally. Backend integration can be added next."
                                )
                            }
                            className="rounded-xl border border-[#F2B84B]/20 bg-[#F2B84B]/5 px-5 py-3 text-xs font-semibold text-[#F2B84B] transition hover:bg-[#F2B84B]/10"
                        >
                            Save as Draft
                        </button>

                        <button
                            type="submit"
                            className="rounded-xl bg-[#F2B84B] px-6 py-3 text-xs font-bold text-[#161F19] transition hover:-translate-y-0.5 hover:bg-[#F2B84B]/90"
                        >
                            Create Course
                        </button>

                    </div>

                </div>


                {/* ================================================= */}
                {/* RIGHT SIDEBAR */}
                {/* ================================================= */}

                <div className="space-y-6">

                    {/* --------------------------------------------- */}
                    {/* THUMBNAIL */}
                    {/* --------------------------------------------- */}

                    <section className="rounded-3xl border border-[#F2B84B]/10 bg-[#1B241E]">

                        <div className="border-b border-[#F2B84B]/10 px-6 py-5">

                            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#7C9A82]">
                                Course Visual
                            </p>

                            <h2 className="mt-1 font-['Space_Grotesk'] text-lg font-bold text-[#F3EEDD]">
                                Thumbnail
                            </h2>

                        </div>


                        <div className="p-5">

                            {thumbnailPreview ? (
                                <div className="relative overflow-hidden rounded-2xl border border-[#F2B84B]/10">

                                    <img
                                        src={thumbnailPreview}
                                        alt="Course thumbnail preview"
                                        className="h-48 w-full object-cover"
                                    />

                                    <button
                                        type="button"
                                        onClick={removeThumbnail}
                                        className="absolute right-3 top-3 rounded-lg border border-[#D6402C]/20 bg-[#161F19]/90 px-3 py-2 text-[10px] font-semibold text-[#D6402C] backdrop-blur transition hover:bg-[#D6402C]/10"
                                    >
                                        Remove
                                    </button>

                                </div>
                            ) : (
                                <button
                                    type="button"
                                    onClick={() =>
                                        fileInputRef.current?.click()
                                    }
                                    className="group flex h-48 w-full flex-col items-center justify-center rounded-2xl border border-dashed border-[#F2B84B]/15 bg-[#161F19] transition hover:border-[#F2B84B]/30 hover:bg-[#F2B84B]/5"
                                >

                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#F2B84B]/15 bg-[#F2B84B]/5 font-bold text-[#F2B84B] transition group-hover:bg-[#F2B84B]/10">
                                        +
                                    </div>

                                    <p className="mt-3 text-xs font-semibold text-[#F3EEDD]/65">
                                        Upload Thumbnail
                                    </p>

                                    <p className="mt-1 text-[10px] text-[#F3EEDD]/25">
                                        PNG, JPG or WEBP
                                    </p>

                                </button>
                            )}

                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/png,image/jpeg,image/webp"
                                onChange={handleThumbnailChange}
                                className="hidden"
                            />

                            <p className="mt-3 text-[10px] leading-5 text-[#F3EEDD]/25">
                                A clear course thumbnail helps students
                                identify your course quickly.
                            </p>

                        </div>
                    </section>


                    {/* --------------------------------------------- */}
                    {/* ACCESS & PRICING */}
                    {/* --------------------------------------------- */}

                    <section className="rounded-3xl border border-[#F2B84B]/10 bg-[#1B241E]">

                        <div className="border-b border-[#F2B84B]/10 px-6 py-5">

                            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#7C9A82]">
                                Course Access
                            </p>

                            <h2 className="mt-1 font-['Space_Grotesk'] text-lg font-bold text-[#F3EEDD]">
                                Pricing
                            </h2>

                        </div>


                        <div className="space-y-5 p-5">

                            {/* Access */}

                            <div>

                                <label className="mb-3 block text-xs font-semibold text-[#F3EEDD]/70">
                                    Access Type
                                </label>

                                <div className="grid grid-cols-2 gap-2">

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setFormData((previous) => ({
                                                ...previous,
                                                access: "Free",
                                                price: "",
                                            }))
                                        }
                                        className={`rounded-xl border px-3 py-3 text-xs font-semibold transition ${formData.access === "Free"
                                            ? "border-[#F2B84B]/30 bg-[#F2B84B]/10 text-[#F2B84B]"
                                            : "border-[#F2B84B]/10 bg-[#161F19] text-[#F3EEDD]/40 hover:border-[#F2B84B]/20"
                                            }`}
                                    >
                                        Free
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setFormData((previous) => ({
                                                ...previous,
                                                access: "Paid",
                                            }))
                                        }
                                        className={`rounded-xl border px-3 py-3 text-xs font-semibold transition ${formData.access === "Paid"
                                            ? "border-[#F2B84B]/30 bg-[#F2B84B]/10 text-[#F2B84B]"
                                            : "border-[#F2B84B]/10 bg-[#161F19] text-[#F3EEDD]/40 hover:border-[#F2B84B]/20"
                                            }`}
                                    >
                                        Paid
                                    </button>

                                </div>

                            </div>


                            {/* Price */}

                            {formData.access === "Paid" && (
                                <div>

                                    <label className="mb-2 block text-xs font-semibold text-[#F3EEDD]/70">
                                        Course Price
                                    </label>

                                    <div className="relative">

                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-sm text-[#7C9A82]">
                                            ₹
                                        </span>

                                        <input
                                            type="number"
                                            name="price"
                                            value={formData.price}
                                            onChange={handleChange}
                                            min="0"
                                            placeholder="999"
                                            className="w-full rounded-xl border border-[#F2B84B]/10 bg-[#161F19] py-3 pl-9 pr-4 text-sm text-[#F3EEDD] outline-none placeholder:text-[#F3EEDD]/20 focus:border-[#F2B84B]/35"
                                        />

                                    </div>

                                </div>
                            )}

                        </div>
                    </section>


                    {/* --------------------------------------------- */}
                    {/* CREATION CHECKLIST */}
                    {/* --------------------------------------------- */}

                    <section className="rounded-3xl border border-[#F2B84B]/10 bg-[#141C17] p-5">

                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#7C9A82]">
                            Before Publishing
                        </p>

                        <h3 className="mt-1 font-['Space_Grotesk'] text-lg font-bold text-[#F3EEDD]">
                            Course Checklist
                        </h3>

                        <div className="mt-5 space-y-3">

                            <ChecklistItem
                                label="Course title added"
                                complete={Boolean(formData.title)}
                            />

                            <ChecklistItem
                                label="Category selected"
                                complete={Boolean(formData.category)}
                            />

                            <ChecklistItem
                                label="Difficulty level selected"
                                complete={Boolean(formData.level)}
                            />

                            <ChecklistItem
                                label="Course description added"
                                complete={Boolean(formData.description)}
                            />

                            <ChecklistItem
                                label="Course thumbnail uploaded"
                                complete={Boolean(thumbnail)}
                            />

                        </div>

                    </section>

                </div>

            </form>

        </div>
    );
}


/* ============================================================= */
/* CHECKLIST ITEM */
/* ============================================================= */

function ChecklistItem({ label, complete }) {
    return (
        <div className="flex items-center gap-3">

            <div
                className={`flex h-5 w-5 items-center justify-center rounded-md border ${complete
                    ? "border-[#7C9A82]/30 bg-[#7C9A82]/10 text-[#7C9A82]"
                    : "border-[#F3EEDD]/10 bg-[#161F19] text-transparent"
                    }`}
            >
                ✓
            </div>

            <span
                className={`text-xs ${complete
                    ? "text-[#F3EEDD]/65"
                    : "text-[#F3EEDD]/30"
                    }`}
            >
                {label}
            </span>

        </div>
    );
}

export default CreateCourse;