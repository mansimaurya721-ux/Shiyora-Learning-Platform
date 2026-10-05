import React, { useState } from "react";
import {
    HelpCircle,
    MessageSquare,
    Mail,
    BookOpen,
    ChevronDown,
    Search,
    Send,
    CheckCircle2,
    Clock3,
    Headphones,
    ArrowUpRight,
    LifeBuoy,
} from "lucide-react";

const Support = () => {
    const [search, setSearch] = useState("");
    const [openFaq, setOpenFaq] = useState(null);
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const faqs = [
        {
            id: 1,
            question: "How can I enroll in a course?",
            answer:
                "Open Browse Courses from the sidebar, select the course you want to join, and click the Enroll Now button.",
        },
        {
            id: 2,
            question: "Where can I find my enrolled courses?",
            answer:
                "You can find all your enrolled courses in the My Courses section from the student sidebar.",
        },
        {
            id: 3,
            question: "How can I submit an assignment?",
            answer:
                "Open Assignments from the sidebar, select the required assignment, and use the submission option available on the assignment page.",
        },
        {
            id: 4,
            question: "Where can I see my learning progress?",
            answer:
                "Open the Progress section to view your overall progress, course completion, learning hours, goals, and weekly activity.",
        },
        {
            id: 5,
            question: "When will I receive my certificate?",
            answer:
                "Certificates become available after successfully completing the required course. You can view them from the Certificates section.",
        },
        {
            id: 6,
            question: "How can I update my profile?",
            answer:
                "Open Profile from the sidebar. You can manage your available account information from there.",
        },
    ];

    const filteredFaqs = faqs.filter((faq) =>
        faq.question.toLowerCase().includes(search.toLowerCase())
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!subject.trim() || !message.trim()) {
            return;
        }

        setSubmitted(true);
        setSubject("");
        setMessage("");

        setTimeout(() => {
            setSubmitted(false);
        }, 4000);
    };

    return (
        <div className="space-y-6">

            {/* =====================================================
                HEADER
            ====================================================== */}
            <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727] sm:p-8">

                <div className="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-400/10" />

                <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                    <div>
                        <div className="mb-3 flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-500/10">
                                <LifeBuoy
                                    size={16}
                                    className="text-blue-600 dark:text-blue-400"
                                />
                            </div>

                            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                                Student Assistance
                            </span>
                        </div>

                        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                            Help & Support
                        </h1>

                        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400 sm:text-base">
                            Find answers to common questions or contact our
                            support team if you need additional help.
                        </p>
                    </div>

                    <div className="flex w-fit items-center gap-3 rounded-2xl border border-teal-100 bg-teal-50 px-4 py-3 dark:border-teal-500/10 dark:bg-teal-500/10">

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white dark:bg-[#102337]">
                            <Headphones
                                size={20}
                                className="text-teal-600 dark:text-teal-400"
                            />
                        </div>

                        <div>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                Support Status
                            </p>

                            <div className="mt-1 flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-emerald-500" />

                                <span className="text-sm font-semibold text-teal-700 dark:text-teal-400">
                                    Available
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                SUPPORT OPTIONS
            ====================================================== */}
            <section className="grid grid-cols-1 gap-4 md:grid-cols-3">

                <SupportOption
                    icon={MessageSquare}
                    title="Live Support"
                    description="Get help with your learning experience."
                    action="Contact Support"
                />

                <SupportOption
                    icon={Mail}
                    title="Email Support"
                    description="Send us your questions and concerns."
                    action="Send Email"
                />

                <SupportOption
                    icon={BookOpen}
                    title="Knowledge Base"
                    description="Browse guides and helpful resources."
                    action="View Guides"
                />

            </section>

            {/* =====================================================
                FAQ + CONTACT FORM
            ====================================================== */}
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">

                {/* =================================================
                    FAQ
                ================================================== */}
                <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727] xl:col-span-2">

                    <div className="border-b border-slate-200 p-5 dark:border-[#1e334a] sm:p-6">

                        <div className="flex items-center gap-3">

                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-500/10">
                                <HelpCircle
                                    size={20}
                                    className="text-blue-600 dark:text-blue-400"
                                />
                            </div>

                            <div>
                                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                                    Frequently Asked Questions
                                </h2>

                                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                    Find quick answers to common questions.
                                </p>
                            </div>
                        </div>

                        {/* FAQ Search */}
                        <div className="relative mt-5">

                            <Search
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500"
                            />

                            <input
                                type="text"
                                value={search}
                                onChange={(e) =>
                                    setSearch(e.target.value)
                                }
                                placeholder="Search your question..."
                                className="
                                    w-full
                                    rounded-xl
                                    border
                                    border-slate-200
                                    bg-slate-50
                                    py-3
                                    pl-11
                                    pr-4
                                    text-sm
                                    text-slate-900
                                    outline-none
                                    transition
                                    placeholder:text-slate-400
                                    focus:border-blue-400
                                    focus:bg-white
                                    focus:ring-2
                                    focus:ring-blue-500/10
                                    dark:border-[#1e334a]
                                    dark:bg-[#102337]
                                    dark:text-white
                                    dark:placeholder:text-slate-500
                                    dark:focus:border-blue-500/50
                                    dark:focus:bg-[#102337]
                                "
                            />
                        </div>
                    </div>

                    {/* FAQ Items */}
                    <div className="divide-y divide-slate-100 dark:divide-[#1e334a]">

                        {filteredFaqs.length > 0 ? (
                            filteredFaqs.map((faq) => {

                                const isOpen = openFaq === faq.id;

                                return (
                                    <div key={faq.id}>

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setOpenFaq(
                                                    isOpen
                                                        ? null
                                                        : faq.id
                                                )
                                            }
                                            className="
                                                flex
                                                w-full
                                                items-center
                                                justify-between
                                                gap-4
                                                px-5
                                                py-4
                                                text-left
                                                transition
                                                hover:bg-slate-50
                                                dark:hover:bg-[#102337]
                                                sm:px-6
                                            "
                                        >

                                            <div className="flex min-w-0 items-center gap-3">

                                                <span
                                                    className={`
                                                        flex
                                                        h-7
                                                        w-7
                                                        shrink-0
                                                        items-center
                                                        justify-center
                                                        rounded-lg
                                                        text-xs
                                                        font-semibold
                                                        ${isOpen
                                                            ? "bg-blue-600 text-white"
                                                            : "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400"
                                                        }
                                                    `}
                                                >
                                                    {faq.id}
                                                </span>

                                                <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                                                    {faq.question}
                                                </span>
                                            </div>

                                            <ChevronDown
                                                size={18}
                                                className={`
                                                    shrink-0
                                                    text-slate-400
                                                    transition-transform
                                                    dark:text-slate-500
                                                    ${isOpen
                                                        ? "rotate-180 text-blue-600 dark:text-blue-400"
                                                        : ""
                                                    }
                                                `}
                                            />

                                        </button>

                                        {isOpen && (
                                            <div className="px-5 pb-5 sm:px-6">

                                                <div className="ml-10 rounded-xl border border-blue-100 bg-blue-50/60 p-4 dark:border-blue-500/10 dark:bg-blue-500/5">

                                                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                                                        {faq.answer}
                                                    </p>

                                                </div>

                                            </div>
                                        )}

                                    </div>
                                );
                            })
                        ) : (
                            <div className="px-5 py-12 text-center">

                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800">
                                    <HelpCircle
                                        size={25}
                                        className="text-slate-400 dark:text-slate-500"
                                    />
                                </div>

                                <p className="mt-4 text-sm font-semibold text-slate-800 dark:text-slate-200">
                                    No questions found
                                </p>

                                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                    Try searching with a different keyword.
                                </p>

                            </div>
                        )}

                    </div>
                </section>

                {/* =================================================
                    CONTACT FORM
                ================================================== */}
                <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727] sm:p-6">

                    <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 dark:bg-teal-500/10">
                            <Send
                                size={19}
                                className="text-teal-600 dark:text-teal-400"
                            />
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                                Contact Support
                            </h2>

                            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                Send us a message.
                            </p>
                        </div>

                    </div>

                    {submitted ? (
                        <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center dark:border-emerald-500/20 dark:bg-emerald-500/10">

                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-500/10">
                                <CheckCircle2
                                    size={27}
                                    className="text-emerald-600 dark:text-emerald-400"
                                />
                            </div>

                            <h3 className="mt-4 text-sm font-semibold text-slate-900 dark:text-white">
                                Message Sent Successfully
                            </h3>

                            <p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-400">
                                Our support team will review your message and
                                get back to you.
                            </p>

                        </div>
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            className="mt-6 space-y-4"
                        >

                            {/* Subject */}
                            <div>
                                <label
                                    htmlFor="subject"
                                    className="mb-2 block text-xs font-semibold text-slate-700 dark:text-slate-300"
                                >
                                    Subject
                                </label>

                                <input
                                    id="subject"
                                    type="text"
                                    value={subject}
                                    onChange={(e) =>
                                        setSubject(e.target.value)
                                    }
                                    placeholder="Enter subject"
                                    className="
                                        w-full
                                        rounded-xl
                                        border
                                        border-slate-200
                                        bg-slate-50
                                        px-4
                                        py-3
                                        text-sm
                                        text-slate-900
                                        outline-none
                                        transition
                                        placeholder:text-slate-400
                                        focus:border-blue-400
                                        focus:bg-white
                                        focus:ring-2
                                        focus:ring-blue-500/10
                                        dark:border-[#1e334a]
                                        dark:bg-[#102337]
                                        dark:text-white
                                        dark:placeholder:text-slate-500
                                        dark:focus:border-blue-500/50
                                    "
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-2 block text-xs font-semibold text-slate-700 dark:text-slate-300"
                                >
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    rows="6"
                                    value={message}
                                    onChange={(e) =>
                                        setMessage(e.target.value)
                                    }
                                    placeholder="Describe your issue..."
                                    className="
                                        w-full
                                        resize-none
                                        rounded-xl
                                        border
                                        border-slate-200
                                        bg-slate-50
                                        px-4
                                        py-3
                                        text-sm
                                        text-slate-900
                                        outline-none
                                        transition
                                        placeholder:text-slate-400
                                        focus:border-blue-400
                                        focus:bg-white
                                        focus:ring-2
                                        focus:ring-blue-500/10
                                        dark:border-[#1e334a]
                                        dark:bg-[#102337]
                                        dark:text-white
                                        dark:placeholder:text-slate-500
                                        dark:focus:border-blue-500/50
                                    "
                                />
                            </div>

                            <button
                                type="submit"
                                className="
                                    flex
                                    w-full
                                    items-center
                                    justify-center
                                    gap-2
                                    rounded-xl
                                    bg-gradient-to-r
                                    from-blue-600
                                    to-teal-500
                                    px-4
                                    py-3
                                    text-sm
                                    font-semibold
                                    text-white
                                    shadow-sm
                                    transition
                                    hover:from-blue-700
                                    hover:to-teal-600
                                    hover:shadow-md
                                "
                            >
                                <Send size={16} />
                                Send Message
                            </button>

                        </form>
                    )}

                </section>
            </div>

            {/* =====================================================
                SUPPORT STATUS
            ====================================================== */}
            <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727] sm:p-6">

                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                    <div className="flex items-center gap-4">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 dark:bg-teal-500/10">
                            <Headphones
                                size={21}
                                className="text-teal-600 dark:text-teal-400"
                            />
                        </div>

                        <div>
                            <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
                                Support Team
                            </h2>

                            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                We're here to help you with your learning
                                experience.
                            </p>
                        </div>

                    </div>

                    <div className="flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 dark:border-emerald-500/20 dark:bg-emerald-500/10">

                        <span className="h-2 w-2 rounded-full bg-emerald-500" />

                        <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                            Support Available
                        </span>

                    </div>

                </div>

                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">

                    {/* Response Time */}
                    <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-[#1e334a] dark:bg-[#102337]">

                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-500/10">
                            <Clock3
                                size={17}
                                className="text-blue-600 dark:text-blue-400"
                            />
                        </div>

                        <div>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                Response Time
                            </p>

                            <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                                Within 24 hours
                            </p>
                        </div>

                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-[#1e334a] dark:bg-[#102337]">

                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-50 dark:bg-teal-500/10">
                            <Mail
                                size={17}
                                className="text-teal-600 dark:text-teal-400"
                            />
                        </div>

                        <div className="min-w-0">
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                Email
                            </p>

                            <p className="mt-1 truncate text-sm font-semibold text-slate-900 dark:text-white">
                                support@shiyora.com
                            </p>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    );
};

/* =========================================================
   SUPPORT OPTION
========================================================= */

const SupportOption = ({
    icon: Icon,
    title,
    description,
    action,
}) => {
    return (
        <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md dark:border-[#1e334a] dark:bg-[#0b1727] dark:hover:border-blue-500/20">

            <div className="flex items-start justify-between gap-4">

                <div className="flex items-start gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-500/10">
                        <Icon
                            size={21}
                            className="text-blue-600 dark:text-blue-400"
                        />
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                            {title}
                        </h3>

                        <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                            {description}
                        </p>

                        <button
                            type="button"
                            className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-blue-600 transition hover:text-teal-600 dark:text-blue-400 dark:hover:text-teal-400"
                        >
                            {action}

                            <ArrowUpRight
                                size={13}
                            />
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Support;