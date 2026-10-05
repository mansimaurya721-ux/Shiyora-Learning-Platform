import { Link } from "react-router-dom";
import {
    Check,
    ArrowRight,
    Sparkles,
    Users,
    BookOpen,
    BarChart3,
} from "lucide-react";

const plans = [
    {
        name: "Free",
        price: "₹0",
        description:
            "Perfect for individuals and small organizations getting started with digital learning.",
        features: [
            "Up to 25 Students",
            "2 Teachers",
            "3 Courses",
            "Lesson Management",
            "PDF Notes",
            "Basic Quizzes",
            "Student Progress Tracking",
        ],
    },

    {
        name: "Professional",
        price: "₹999",
        description:
            "Designed for growing organizations that need more learning capacity.",
        popular: true,
        features: [
            "Up to 250 Students",
            "20 Teachers",
            "Unlimited Courses",
            "Lesson Management",
            "Video Lectures",
            "PDF Notes",
            "Quizzes",
            "Progress Tracking",
            "Organization Dashboard",

            // White-label features
            "Custom Institute Name",
            "Replace Shiyora Branding",
        ],
    },

    {
        name: "Enterprise",
        price: "₹2,499",
        description:
            "For larger organizations that need powerful learning management capabilities.",
        features: [
            "Unlimited Students",
            "Unlimited Teachers",
            "Unlimited Courses",
            "Advanced Organization Management",
            "Video & PDF Learning",
            "Advanced Quizzes",
            "Progress Tracking",
            "Organization Reports",
            "Priority Support",

            // White-label features
            "White-Label Branding",
            "Custom Institute Name & Identity",
            "Custom Organization Branding",
        ],
    },
];

function Subscription() {
    return (
        <main className="min-h-screen overflow-hidden bg-slate-50 text-slate-700 transition-colors duration-300 dark:bg-[#07111f] dark:text-slate-300">

            {/* =====================================================
                HERO
            ====================================================== */}

            <section className="relative overflow-hidden">

                {/* Background glow */}

                <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl dark:bg-blue-500/10" />

                <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-teal-200/40 blur-3xl dark:bg-teal-500/10" />

                <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-20 text-center md:px-10 lg:pb-20 lg:pt-28">

                    {/* Label */}

                    <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
                        <Sparkles size={14} />
                        Shiyora Plans
                    </div>

                    {/* Heading */}

                    <h1 className="mx-auto mt-7 max-w-4xl text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">

                        Plans that grow

                        <span className="block bg-linear-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                            with your organization.
                        </span>

                    </h1>

                    {/* Description */}

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-400">
                        Choose a plan that fits your learning requirements and
                        upgrade whenever your organization grows.
                    </p>

                </div>

            </section>


            {/* =====================================================
                PRICING
            ====================================================== */}

            <section className="relative px-6 pb-24 md:px-10">

                <div className="mx-auto grid max-w-7xl items-stretch gap-6 lg:grid-cols-3">

                    {plans.map((plan) => (

                        <div
                            key={plan.name}
                            className={`relative flex h-full flex-col rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-2 md:p-8 ${plan.popular
                                ? "border-blue-300 bg-white shadow-xl shadow-blue-500/10 dark:border-teal-500/40 dark:bg-[#0d1b2a] dark:shadow-teal-500/5"
                                : "border-slate-200 bg-white shadow-sm hover:border-blue-200 hover:shadow-xl dark:border-slate-700 dark:bg-[#0d1b2a] dark:hover:border-teal-500/30"
                                }`}
                        >

                            {/* Popular badge */}

                            {plan.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">

                                    <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-linear-to-r from-blue-600 to-teal-500 px-4 py-1.5 text-xs font-bold text-white shadow-lg shadow-blue-500/20">
                                        <Sparkles size={12} />
                                        Most Popular
                                    </span>

                                </div>
                            )}


                            {/* Plan header */}

                            <div>

                                <div className="flex items-start justify-between">

                                    <div>

                                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                                            Shiyora Plan
                                        </p>

                                        <h2 className="mt-2 text-2xl font-bold text-slate-950 dark:text-white">
                                            {plan.name}
                                        </h2>

                                    </div>

                                    <div
                                        className={`flex h-10 w-10 items-center justify-center rounded-xl ${plan.popular
                                            ? "bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
                                            : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                                            }`}
                                    >

                                        {plan.name === "Free" && (
                                            <BookOpen size={19} />
                                        )}

                                        {plan.name === "Professional" && (
                                            <BarChart3 size={19} />
                                        )}

                                        {plan.name === "Enterprise" && (
                                            <Users size={19} />
                                        )}

                                    </div>

                                </div>


                                <p className="mt-5 min-h-18 text-sm leading-7 text-slate-500 dark:text-slate-400">
                                    {plan.description}
                                </p>


                                {/* Price */}

                                <div className="mt-7 flex items-end gap-2">

                                    <span className="text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white">
                                        {plan.price}
                                    </span>

                                    <span className="mb-1 text-sm text-slate-400 dark:text-slate-500">
                                        / month
                                    </span>

                                </div>

                            </div>


                            {/* Button */}

                            <Link
                                to="/signup"
                                className={`mt-7 flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 ${plan.popular
                                    ? "bg-linear-to-r from-blue-600 to-teal-500 text-white shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/25"
                                    : "border border-slate-300 bg-slate-100 text-slate-800 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-teal-500/40 dark:hover:bg-teal-500/10 dark:hover:text-teal-300"
                                    }`}
                            >

                                Choose {plan.name}

                                <ArrowRight
                                    size={17}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />

                            </Link>


                            {/* Divider */}

                            <div className="my-8 border-t border-slate-200 dark:border-slate-700" />


                            {/* Features */}

                            <div className="flex items-center justify-between">

                                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                                    Plan Includes
                                </h3>

                                <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">
                                    {plan.features.length} features
                                </span>

                            </div>


                            <ul className="mt-5 space-y-4">

                                {plan.features.map((feature) => (

                                    <li
                                        key={feature}
                                        className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400"
                                    >

                                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-600 dark:bg-teal-500/10 dark:text-teal-400">
                                            <Check size={13} strokeWidth={3} />
                                        </span>

                                        <span>{feature}</span>

                                    </li>

                                ))}

                            </ul>

                        </div>

                    ))}

                </div>

            </section>


            {/* =====================================================
                WHY SHIYORA
            ====================================================== */}

            <section className="border-y border-slate-200 bg-white dark:border-slate-800 dark:bg-[#0a1727]">

                <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 lg:py-24">

                    {/* Heading */}

                    <div className="mx-auto max-w-2xl text-center">

                        <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-teal-400">
                            Why Shiyora
                        </p>

                        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl dark:text-white">
                            A flexible learning platform.
                        </h2>

                        <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
                            Start with the Free plan and upgrade as your
                            organization grows. Shiyora provides the essential
                            tools needed to manage modern digital learning.
                        </p>

                    </div>


                    {/* Summary cards */}

                    <div className="mt-12 grid gap-5 md:grid-cols-3">

                        {/* Free */}

                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-[#0d1b2a]">

                            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                                <BookOpen size={20} />
                            </div>

                            <h3 className="mt-5 text-lg font-bold text-slate-950 dark:text-white">
                                Free
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                                Start your digital learning journey.
                            </p>

                        </div>


                        {/* Professional */}

                        <div className="rounded-2xl border border-blue-200 bg-blue-50/60 p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-teal-500/20 dark:bg-teal-500/5">

                            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-teal-500/10 dark:text-teal-400">
                                <BarChart3 size={20} />
                            </div>

                            <h3 className="mt-5 text-lg font-bold text-slate-950 dark:text-white">
                                Professional
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                                Designed for growing organizations.
                            </p>

                        </div>


                        {/* Enterprise */}

                        <div className="rounded-2xl border border-teal-200 bg-teal-50/60 p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-teal-500/20 dark:bg-teal-500/5">

                            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-teal-100 text-teal-600 dark:bg-teal-500/10 dark:text-teal-400">
                                <Users size={20} />
                            </div>

                            <h3 className="mt-5 text-lg font-bold text-slate-950 dark:text-white">
                                Enterprise
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                                Built for larger learning communities.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                CTA
            ====================================================== */}

            <section className="bg-slate-50 px-6 py-20 dark:bg-[#07111f] md:px-10">

                <div className="mx-auto max-w-5xl">

                    <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-blue-600 to-teal-500 px-7 py-14 text-center shadow-xl shadow-blue-500/10 md:px-16">

                        {/* Decorative glow */}

                        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

                        <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

                        <div className="relative">

                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-50">
                                Start Your Journey
                            </p>

                            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                                Ready to learn with Shiyora?
                            </h2>

                            <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-50">
                                Create your account, choose the plan that works
                                for you and take control of your learning
                                journey.
                            </p>

                            <Link
                                to="/signup"
                                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-bold text-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                Create Your Account
                                <ArrowRight size={18} />
                            </Link>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default Subscription;