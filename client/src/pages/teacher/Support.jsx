import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

function Support() {
    const [showForm, setShowForm] = useState(false);
    const [search, setSearch] = useState("");

    const [formData, setFormData] = useState({
        category: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    const [requests, setRequests] = useState([
        {
            id: "SUP-1001",
            category: "Technical Issue",
            subject: "Unable to upload lesson video",
            message:
                "I am unable to upload a video while creating a lesson.",
            status: "In Progress",
            date: "18 Sep 2026",
        },
        {
            id: "SUP-1002",
            category: "Student Issue",
            subject: "Student submission not visible",
            message:
                "One student's assignment submission is not appearing in the review section.",
            status: "Open",
            date: "16 Sep 2026",
        },
        {
            id: "SUP-1003",
            category: "Course & Lesson",
            subject: "Lesson content update",
            message:
                "I need help updating the notes attached to an existing lesson.",
            status: "Resolved",
            date: "12 Sep 2026",
        },
    ]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.category) {
            newErrors.category = "Please select a category.";
        }

        if (!formData.subject.trim()) {
            newErrors.subject = "Please enter a subject.";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Please describe your issue.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        const newRequest = {
            id: `SUP-${1000 + requests.length + 1}`,
            category: formData.category,
            subject: formData.subject,
            message: formData.message,
            status: "Open",
            date: new Date().toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
            }),
        };

        setRequests((prev) => [newRequest, ...prev]);

        setFormData({
            category: "",
            subject: "",
            message: "",
        });

        setErrors({});
        setShowForm(false);
    };

    const handleDelete = (id) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this support request?"
        );

        if (!confirmed) return;

        setRequests((prev) =>
            prev.filter((request) => request.id !== id)
        );
    };

    const filteredRequests = useMemo(() => {
        const value = search.toLowerCase().trim();

        if (!value) return requests;

        return requests.filter(
            (request) =>
                request.id.toLowerCase().includes(value) ||
                request.subject.toLowerCase().includes(value) ||
                request.category.toLowerCase().includes(value) ||
                request.status.toLowerCase().includes(value)
        );
    }, [requests, search]);

    const getStatusStyle = (status) => {
        switch (status) {
            case "Open":
                return {
                    badge:
                        "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20",
                    dot: "bg-blue-500",
                };

            case "In Progress":
                return {
                    badge:
                        "bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-500/10 dark:text-teal-400 dark:border-teal-500/20",
                    dot: "bg-teal-500",
                };

            case "Resolved":
                return {
                    badge:
                        "bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700",
                    dot: "bg-slate-500",
                };

            default:
                return {
                    badge:
                        "bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700",
                    dot: "bg-slate-500",
                };
        }
    };

    const totalRequests = requests.length;

    const openRequests = requests.filter(
        (request) => request.status === "Open"
    ).length;

    const inProgressRequests = requests.filter(
        (request) => request.status === "In Progress"
    ).length;

    const resolvedRequests = requests.filter(
        (request) => request.status === "Resolved"
    ).length;

    return (
        <div className="space-y-8">

            {/* =====================================================
                HEADER
            ====================================================== */}
            <section>
                <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

                    <div>
                        <div className="mb-2 flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-teal-500" />

                            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
                                Teacher Support
                            </p>
                        </div>

                        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
                            How can we help?
                        </h1>

                        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
                            Raise a support request whenever you need help
                            with courses, students, assignments, quizzes, or
                            technical issues.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={() => setShowForm(true)}
                        className="
                            inline-flex items-center justify-center gap-2
                            rounded-xl
                            bg-gradient-to-r from-blue-600 to-teal-500
                            px-5 py-3
                            text-sm font-semibold text-white
                            shadow-sm
                            transition
                            hover:from-blue-700 hover:to-teal-600
                        "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 5v14M5 12h14"
                            />
                        </svg>

                        Raise a Request
                    </button>
                </div>
            </section>

            {/* =====================================================
                STATS
            ====================================================== */}
            <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

                {/* Total */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                Total Requests
                            </p>

                            <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
                                {totalRequests}
                            </p>
                        </div>

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.8"
                                stroke="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.5 10.5h7M8.5 14h4"
                                />

                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 3a9 9 0 019 9c0 4.97-4.03 9-9 9a8.96 8.96 0 01-4.24-1.06L3 21l1.06-4.76A8.96 8.96 0 013 12a9 9 0 019-9z"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Open */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                Open
                            </p>

                            <p className="mt-2 text-3xl font-bold text-blue-600 dark:text-blue-400">
                                {openRequests}
                            </p>
                        </div>

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                            <span className="h-3 w-3 rounded-full bg-blue-500" />
                        </div>
                    </div>
                </div>

                {/* In Progress */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                In Progress
                            </p>

                            <p className="mt-2 text-3xl font-bold text-teal-600 dark:text-teal-400">
                                {inProgressRequests}
                            </p>
                        </div>

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-600 dark:bg-teal-500/10 dark:text-teal-400">
                            <span className="h-3 w-3 rounded-full bg-teal-500" />
                        </div>
                    </div>
                </div>

                {/* Resolved */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                Resolved
                            </p>

                            <p className="mt-2 text-3xl font-bold text-slate-700 dark:text-slate-300">
                                {resolvedRequests}
                            </p>
                        </div>

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                QUICK HELP
            ====================================================== */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">

                <div className="mb-6">
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                        Quick Help
                    </p>

                    <h2 className="mt-1 text-xl font-bold text-slate-900 dark:text-slate-100">
                        What do you need help with?
                    </h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

                    {[
                        {
                            title: "Course & Lesson",
                            description:
                                "Help with lessons, course content and resources.",
                            icon: "📚",
                            category: "Course & Lesson",
                        },
                        {
                            title: "Student Issue",
                            description:
                                "Report problems related to students or enrollments.",
                            icon: "👥",
                            category: "Student Issue",
                        },
                        {
                            title: "Quiz & Assignment",
                            description:
                                "Get help with quizzes, assignments and submissions.",
                            icon: "✓",
                            category: "Quiz & Assignment",
                        },
                        {
                            title: "Technical Issue",
                            description:
                                "Report technical problems or unexpected errors.",
                            icon: "⚙",
                            category: "Technical Issue",
                        },
                    ].map((item) => (
                        <button
                            key={item.category}
                            type="button"
                            onClick={() => {
                                setFormData((prev) => ({
                                    ...prev,
                                    category: item.category,
                                }));

                                setShowForm(true);
                            }}
                            className="
                                group rounded-xl border
                                border-slate-200
                                bg-slate-50
                                p-5 text-left
                                transition
                                hover:border-blue-300
                                hover:bg-blue-50/60
                                dark:border-[#1e334a]
                                dark:bg-[#07111f]
                                dark:hover:border-teal-500/30
                                dark:hover:bg-teal-500/5
                            "
                        >
                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-lg dark:bg-blue-500/10">
                                {item.icon}
                            </div>

                            <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                                {item.title}
                            </h3>

                            <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                                {item.description}
                            </p>
                        </button>
                    ))}
                </div>
            </section>

            {/* =====================================================
                REQUESTS
            ====================================================== */}
            <section className="rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">

                {/* Header */}
                <div className="flex flex-col gap-4 border-b border-slate-200 p-6 dark:border-[#1e334a] md:flex-row md:items-center md:justify-between">

                    <div>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                            My Support Requests
                        </h2>

                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                            Track your previous support conversations.
                        </p>
                    </div>

                    <div className="relative w-full md:w-72">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.8"
                            stroke="currentColor"
                            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m21 21-4.35-4.35m1.35-5.15a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
                            />
                        </svg>

                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search requests..."
                            className="
                                w-full rounded-xl border
                                border-slate-200
                                bg-slate-50
                                py-2.5 pl-10 pr-4
                                text-sm
                                text-slate-900
                                placeholder:text-slate-400
                                outline-none
                                transition
                                focus:border-blue-400
                                focus:ring-2
                                focus:ring-blue-500/10
                                dark:border-[#1e334a]
                                dark:bg-[#07111f]
                                dark:text-slate-100
                                dark:placeholder:text-slate-500
                                dark:focus:border-teal-400
                            "
                        />
                    </div>
                </div>

                {/* Requests */}
                <div className="divide-y divide-slate-200 dark:divide-[#1e334a]">

                    {filteredRequests.length === 0 ? (
                        <div className="px-6 py-16 text-center">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.8"
                                    stroke="currentColor"
                                    className="h-6 w-6 text-slate-400"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 12h6m-6 4h4m5-13H6a2 2 0 00-2 2v14l4-3h10a2 2 0 002-2V5a2 2 0 00-2-2z"
                                    />
                                </svg>
                            </div>

                            <h3 className="mt-4 font-semibold text-slate-900 dark:text-slate-100">
                                No requests found
                            </h3>

                            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                Try a different search or raise a new support
                                request.
                            </p>
                        </div>
                    ) : (
                        filteredRequests.map((request) => {
                            const statusStyle =
                                getStatusStyle(request.status);

                            return (
                                <div
                                    key={request.id}
                                    className="p-6 transition hover:bg-slate-50 dark:hover:bg-[#102337]"
                                >
                                    <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

                                        <div className="min-w-0 flex-1">

                                            <div className="flex flex-wrap items-center gap-2">
                                                <span className="font-mono text-xs font-semibold text-blue-600 dark:text-blue-400">
                                                    {request.id}
                                                </span>

                                                <span className="text-slate-300 dark:text-slate-700">
                                                    •
                                                </span>

                                                <span className="text-xs text-slate-500 dark:text-slate-400">
                                                    {request.date}
                                                </span>

                                                <span
                                                    className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${statusStyle.badge}`}
                                                >
                                                    <span
                                                        className={`h-1.5 w-1.5 rounded-full ${statusStyle.dot}`}
                                                    />

                                                    {request.status}
                                                </span>
                                            </div>

                                            <h3 className="mt-3 text-base font-semibold text-slate-900 dark:text-slate-100">
                                                {request.subject}
                                            </h3>

                                            <p className="mt-1 text-xs font-medium text-teal-600 dark:text-teal-400">
                                                {request.category}
                                            </p>

                                            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-500 dark:text-slate-400">
                                                {request.message}
                                            </p>
                                        </div>

                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleDelete(request.id)
                                            }
                                            className="
                                                self-start rounded-lg
                                                p-2
                                                text-slate-400
                                                transition
                                                hover:bg-rose-50
                                                hover:text-rose-600
                                                dark:hover:bg-rose-500/10
                                                dark:hover:text-rose-400
                                            "
                                            title="Delete request"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.8"
                                                stroke="currentColor"
                                                className="h-5 w-5"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M6 7h12M10 11v6M14 11v6M9 7l1-2h4l1 2m-8 0 1 14h8l1-14"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
            </section>

            {/* =====================================================
                HELP FOOTER
            ====================================================== */}
            <section className="rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-teal-50 p-6 dark:border-blue-500/10 dark:from-blue-500/5 dark:to-teal-500/5">

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    <div>
                        <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                            Still need help?
                        </h3>

                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                            Submit a detailed request and the support team
                            can review your issue.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={() => setShowForm(true)}
                        className="
                            inline-flex items-center justify-center
                            rounded-xl
                            border border-blue-200
                            bg-white
                            px-5 py-2.5
                            text-sm font-semibold
                            text-blue-600
                            transition
                            hover:bg-blue-50
                            dark:border-blue-500/20
                            dark:bg-[#0b1727]
                            dark:text-blue-400
                            dark:hover:bg-blue-500/10
                        "
                    >
                        Contact Support
                    </button>
                </div>
            </section>

            {/* =====================================================
                SUPPORT FORM MODAL
            ====================================================== */}
            {showForm && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm">

                    <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-[#1e334a] dark:bg-[#0b1727]">

                        {/* Modal Header */}
                        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5 dark:border-[#1e334a]">

                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-600 dark:text-teal-400">
                                    Support Request
                                </p>

                                <h2 className="mt-1 text-xl font-bold text-slate-900 dark:text-slate-100">
                                    Tell us what you need
                                </h2>
                            </div>

                            <button
                                type="button"
                                onClick={() => {
                                    setShowForm(false);
                                    setErrors({});
                                }}
                                className="
                                    rounded-lg p-2
                                    text-slate-400
                                    transition
                                    hover:bg-slate-100
                                    hover:text-slate-700
                                    dark:hover:bg-slate-800
                                    dark:hover:text-white
                                "
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    className="h-5 w-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 6l12 12M18 6L6 18"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Form */}
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6 p-6"
                        >

                            {/* Category */}
                            <div>
                                <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                                    Category
                                </label>

                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="
                                        w-full rounded-xl border
                                        border-slate-200
                                        bg-slate-50
                                        px-4 py-3
                                        text-sm
                                        text-slate-900
                                        outline-none
                                        transition
                                        focus:border-blue-400
                                        focus:ring-2
                                        focus:ring-blue-500/10
                                        dark:border-[#1e334a]
                                        dark:bg-[#07111f]
                                        dark:text-slate-100
                                        dark:focus:border-teal-400
                                    "
                                >
                                    <option value="">
                                        Select a category
                                    </option>

                                    <option value="Course & Lesson">
                                        Course & Lesson
                                    </option>

                                    <option value="Student Issue">
                                        Student Issue
                                    </option>

                                    <option value="Quiz & Assignment">
                                        Quiz & Assignment
                                    </option>

                                    <option value="Technical Issue">
                                        Technical Issue
                                    </option>

                                    <option value="Other">
                                        Other
                                    </option>
                                </select>

                                {errors.category && (
                                    <p className="mt-1.5 text-xs text-rose-500">
                                        {errors.category}
                                    </p>
                                )}
                            </div>

                            {/* Subject */}
                            <div>
                                <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                                    Subject
                                </label>

                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="What is the issue about?"
                                    className="
                                        w-full rounded-xl border
                                        border-slate-200
                                        bg-slate-50
                                        px-4 py-3
                                        text-sm
                                        text-slate-900
                                        placeholder:text-slate-400
                                        outline-none
                                        transition
                                        focus:border-blue-400
                                        focus:ring-2
                                        focus:ring-blue-500/10
                                        dark:border-[#1e334a]
                                        dark:bg-[#07111f]
                                        dark:text-slate-100
                                        dark:placeholder:text-slate-500
                                        dark:focus:border-teal-400
                                    "
                                />

                                {errors.subject && (
                                    <p className="mt-1.5 text-xs text-rose-500">
                                        {errors.subject}
                                    </p>
                                )}
                            </div>

                            {/* Message */}
                            <div>
                                <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                                    Describe your issue
                                </label>

                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={6}
                                    placeholder="Explain the problem in detail..."
                                    className="
                                        w-full resize-none rounded-xl border
                                        border-slate-200
                                        bg-slate-50
                                        px-4 py-3
                                        text-sm
                                        leading-6
                                        text-slate-900
                                        placeholder:text-slate-400
                                        outline-none
                                        transition
                                        focus:border-blue-400
                                        focus:ring-2
                                        focus:ring-blue-500/10
                                        dark:border-[#1e334a]
                                        dark:bg-[#07111f]
                                        dark:text-slate-100
                                        dark:placeholder:text-slate-500
                                        dark:focus:border-teal-400
                                    "
                                />

                                {errors.message && (
                                    <p className="mt-1.5 text-xs text-rose-500">
                                        {errors.message}
                                    </p>
                                )}
                            </div>

                            {/* Actions */}
                            <div className="flex flex-col-reverse gap-3 border-t border-slate-200 pt-5 dark:border-[#1e334a] sm:flex-row sm:justify-end">

                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowForm(false);
                                        setErrors({});
                                    }}
                                    className="
                                        rounded-xl border
                                        border-slate-200
                                        px-5 py-3
                                        text-sm font-semibold
                                        text-slate-600
                                        transition
                                        hover:bg-slate-50
                                        dark:border-[#1e334a]
                                        dark:text-slate-300
                                        dark:hover:bg-slate-800
                                    "
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="
                                        rounded-xl
                                        bg-gradient-to-r
                                        from-blue-600
                                        to-teal-500
                                        px-5 py-3
                                        text-sm font-semibold
                                        text-white
                                        shadow-sm
                                        transition
                                        hover:from-blue-700
                                        hover:to-teal-600
                                    "
                                >
                                    Submit Request
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Support;