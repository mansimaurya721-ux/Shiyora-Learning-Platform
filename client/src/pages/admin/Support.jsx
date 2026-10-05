import { useState } from "react";
import {
    LifeBuoy,
    Search,
    MessageCircle,
    Mail,
    BookOpen,
    ChevronDown,
    ChevronUp,
} from "lucide-react";

const Support = () => {
    const [search, setSearch] = useState("");
    const [openFaq, setOpenFaq] = useState(null);

    const faqs = [
        {
            question: "How can I create a new course?",
            answer:
                "Go to the Courses section from the sidebar and use the Create Course option to add a new course.",
        },
        {
            question: "How can I add students?",
            answer:
                "You can manage students from the Students section and add or manage student records for your organization.",
        },
        {
            question: "How can I manage teachers?",
            answer:
                "Open the Teachers section from the sidebar to view and manage teachers associated with your organization.",
        },
        {
            question: "Where can I view reports?",
            answer:
                "Use the Reports section from the sidebar to access organization-level reports and performance information.",
        },
        {
            question: "What should I do if I face a technical problem?",
            answer:
                "If you experience a technical issue, contact the Shiyora support team using the support options provided on this page.",
        },
    ];

    const filteredFaqs = faqs.filter((faq) =>
        faq.question.toLowerCase().includes(search.toLowerCase())
    );

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="relative min-h-screen overflow-hidden bg-slate-50 px-4 py-6 text-slate-700 dark:bg-[#07111f] dark:text-slate-300 sm:px-6 lg:px-8">

            {/* =====================================================
                BACKGROUND GLOW
            ===================================================== */}

            <div className="pointer-events-none fixed -left-40 -top-40 h-125 w-125 rounded-full bg-blue-500/5 blur-[130px] dark:bg-blue-500/10" />

            <div className="pointer-events-none fixed -right-40 bottom-0 h-125 w-125 rounded-full bg-teal-500/5 blur-[140px] dark:bg-teal-500/8" />

            <div className="relative z-10 mx-auto max-w-7xl">

                {/* =====================================================
                    HEADER
                ===================================================== */}

                <div className="mb-8">
                    <div className="flex items-center gap-3">

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-200 bg-blue-50 text-blue-600 dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-blue-400">
                            <LifeBuoy size={24} />
                        </div>

                        <div>
                            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                                Administration
                            </p>

                            <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                                Help &amp; Support
                            </h1>

                            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                Find answers and get help with your Shiyora LMS.
                            </p>
                        </div>
                    </div>
                </div>

                {/* =====================================================
                    SUPPORT CARDS
                ===================================================== */}

                <div className="mb-8 grid gap-5 md:grid-cols-3">

                    {/* Documentation */}

                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lg dark:border-[#1e334a] dark:bg-[#0b1727]">

                        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 text-blue-600 dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-blue-400">
                            <BookOpen size={21} />
                        </div>

                        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                            Documentation
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                            Learn how to use the different features of your
                            organization dashboard.
                        </p>

                        <button
                            type="button"
                            className="mt-4 text-sm font-semibold text-blue-600 transition hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-blue-400 dark:hover:text-blue-300 dark:focus-visible:outline-blue-400"
                        >
                            View Guides →
                        </button>
                    </div>

                    {/* Support Center */}

                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lg dark:border-[#1e334a] dark:bg-[#0b1727]">

                        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-teal-200 bg-teal-50 text-teal-600 dark:border-teal-400/20 dark:bg-teal-500/10 dark:text-teal-400">
                            <MessageCircle size={21} />
                        </div>

                        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                            Support Center
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                            Get assistance with account, course, student,
                            and teacher management.
                        </p>

                        <button
                            type="button"
                            className="mt-4 text-sm font-semibold text-teal-600 transition hover:text-teal-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 dark:text-teal-400 dark:hover:text-teal-300 dark:focus-visible:outline-teal-400"
                        >
                            Get Support →
                        </button>
                    </div>

                    {/* Contact Support */}

                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lg dark:border-[#1e334a] dark:bg-[#0b1727]">

                        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 text-blue-600 dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-blue-400">
                            <Mail size={21} />
                        </div>

                        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                            Contact Support
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                            Need direct assistance? Contact the Shiyora
                            support team.
                        </p>

                        <button
                            type="button"
                            className="mt-4 text-sm font-semibold text-blue-600 transition hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-blue-400 dark:hover:text-blue-300 dark:focus-visible:outline-blue-400"
                        >
                            Contact Us →
                        </button>
                    </div>
                </div>

                {/* =====================================================
                    FAQ SECTION
                ===================================================== */}

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7 dark:border-[#1e334a] dark:bg-[#0b1727]">

                    {/* FAQ HEADER */}

                    <div className="mb-6 flex items-center gap-3">

                        <span className="h-2 w-2 shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" />

                        <div>
                            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
                                FAQ
                            </p>

                            <h2 className="mt-1 text-xl font-semibold text-slate-900 dark:text-white">
                                Frequently Asked Questions
                            </h2>

                            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                Find quick answers to common questions.
                            </p>
                        </div>
                    </div>

                    {/* SEARCH */}

                    <div className="relative mb-6">

                        <Search
                            size={19}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500"
                        />

                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search questions..."
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15 dark:border-[#1e334a] dark:bg-[#102337] dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/15"
                        />
                    </div>

                    {/* FAQ LIST */}

                    <div className="space-y-3">

                        {filteredFaqs.length > 0 ? (
                            filteredFaqs.map((faq, index) => (
                                <div
                                    key={faq.question}
                                    className="overflow-hidden rounded-xl border border-slate-200 dark:border-[#1e334a]"
                                >

                                    <button
                                        type="button"
                                        onClick={() => toggleFaq(index)}
                                        className="flex w-full items-center justify-between gap-4 bg-white px-4 py-4 text-left transition hover:bg-slate-50 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-blue-600 dark:bg-[#0b1727] dark:hover:bg-[#102337] dark:focus-visible:outline-blue-400"
                                    >

                                        <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                                            {faq.question}
                                        </span>

                                        {openFaq === index ? (
                                            <ChevronUp
                                                size={18}
                                                className="shrink-0 text-blue-600 dark:text-blue-400"
                                            />
                                        ) : (
                                            <ChevronDown
                                                size={18}
                                                className="shrink-0 text-slate-400 dark:text-slate-500"
                                            />
                                        )}
                                    </button>

                                    {openFaq === index && (
                                        <div className="border-t border-slate-200 bg-slate-50 px-4 py-4 dark:border-[#1e334a] dark:bg-[#102337]">
                                            <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))
                        ) : (
                            <div className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-8 text-center dark:border-[#1e334a] dark:bg-[#102337]">
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                    No questions found.
                                </p>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;