import { useState } from "react";
import {
    Mail,
    Phone,
    MapPin,
    Send,
    Clock,
    CheckCircle2,
    ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import shiyoraLogo from "../../assets/shiyora.logo.png";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setSubmitted(true);

        setTimeout(() => {
            setSubmitted(false);
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        }, 3000);
    };

    return (
        <main className="min-h-screen bg-slate-50 text-slate-700 transition-colors duration-300 dark:bg-[#07111f] dark:text-slate-300">

            {/* =====================================================
                HERO
            ====================================================== */}

            <section className="relative overflow-hidden">

                {/* Background decoration */}

                <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl dark:bg-blue-500/10" />

                <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-teal-200/40 blur-3xl dark:bg-teal-500/10" />

                <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-20 md:px-10 lg:pb-20 lg:pt-28">

                    {/* Small brand */}

                    <div className="mb-8 flex items-center gap-3">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-[#0d1b2a]">
                            <img
                                src={shiyoraLogo}
                                alt="Shiyora"
                                className="h-8 w-8 object-contain"
                            />
                        </div>

                        <div>
                            <p className="text-sm font-bold tracking-wide text-slate-900 dark:text-white">
                                SHIYORA
                            </p>

                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                Learning Management System
                            </p>
                        </div>

                    </div>

                    {/* Heading */}

                    <div className="max-w-4xl">

                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-teal-400">
                            Contact & Support
                        </p>

                        <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">
                            Let's make learning
                            <span className="block bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                                better together.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-400">
                            Have a question, suggestion, or need help with
                            Shiyora? Our team is here to help you get the most
                            out of your learning experience.
                        </p>

                    </div>

                </div>

            </section>


            {/* =====================================================
                CONTACT CONTENT
            ====================================================== */}

            <section className="relative border-y border-slate-200 bg-white dark:border-slate-800 dark:bg-[#0a1727]">

                <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:py-20">

                    {/* =================================================
                        LEFT SIDE
                    ================================================== */}

                    <div>

                        <div className="mb-8">

                            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-teal-400">
                                Get in touch
                            </p>

                            <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
                                We would love to hear from you.
                            </h2>

                            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                                Whether you're a student, teacher, or
                                organization, feel free to reach out to us.
                            </p>

                        </div>


                        {/* Contact information */}

                        <div className="space-y-4">

                            {/* Email */}

                            <div className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg dark:border-slate-700 dark:bg-[#0d1b2a] dark:hover:border-teal-500/40">

                                <div className="flex gap-4">

                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                                        <Mail size={20} />
                                    </div>

                                    <div>
                                        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                                            Email
                                        </p>

                                        <p className="mt-1 font-semibold text-slate-900 dark:text-white">
                                            support@shiyora.com
                                        </p>

                                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-500">
                                            We usually reply within 24 hours.
                                        </p>
                                    </div>

                                </div>

                            </div>


                            {/* Phone */}

                            <div className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg dark:border-slate-700 dark:bg-[#0d1b2a] dark:hover:border-teal-500/40">

                                <div className="flex gap-4">

                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-teal-600 dark:bg-teal-500/10 dark:text-teal-400">
                                        <Phone size={20} />
                                    </div>

                                    <div>
                                        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                                            Phone
                                        </p>

                                        <p className="mt-1 font-semibold text-slate-900 dark:text-white">
                                            +91 00000 00000
                                        </p>

                                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-500">
                                            Monday – Friday
                                        </p>
                                    </div>

                                </div>

                            </div>


                            {/* Location */}

                            <div className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg dark:border-slate-700 dark:bg-[#0d1b2a] dark:hover:border-teal-500/40">

                                <div className="flex gap-4">

                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                                        <MapPin size={20} />
                                    </div>

                                    <div>
                                        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                                            Location
                                        </p>

                                        <p className="mt-1 font-semibold text-slate-900 dark:text-white">
                                            India
                                        </p>

                                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-500">
                                            Serving learners everywhere.
                                        </p>
                                    </div>

                                </div>

                            </div>


                            {/* Working hours */}

                            <div className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg dark:border-slate-700 dark:bg-[#0d1b2a] dark:hover:border-teal-500/40">

                                <div className="flex gap-4">

                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-teal-600 dark:bg-teal-500/10 dark:text-teal-400">
                                        <Clock size={20} />
                                    </div>

                                    <div>
                                        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                                            Support Hours
                                        </p>

                                        <p className="mt-1 font-semibold text-slate-900 dark:text-white">
                                            Mon – Fri
                                        </p>

                                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-500">
                                            9:00 AM – 6:00 PM
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* =================================================
                        RIGHT SIDE FORM
                    ================================================== */}

                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-8 lg:p-10 dark:border-slate-700 dark:bg-[#0d1b2a]">

                        <div className="mb-8">

                            <p className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-teal-400">
                                Send a message
                            </p>

                            <h2 className="mt-2 text-2xl font-bold text-slate-950 dark:text-white">
                                How can we help?
                            </h2>

                            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                                Fill in the form and our team will get back to
                                you as soon as possible.
                            </p>

                        </div>


                        {submitted ? (

                            /* =============================================
                               SUCCESS MESSAGE
                            ============================================== */

                            <div className="flex min-h-[420px] flex-col items-center justify-center text-center">

                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-teal-600 dark:bg-teal-500/10 dark:text-teal-400">
                                    <CheckCircle2 size={32} />
                                </div>

                                <h3 className="mt-6 text-2xl font-bold text-slate-950 dark:text-white">
                                    Message sent!
                                </h3>

                                <p className="mt-3 max-w-sm leading-7 text-slate-500 dark:text-slate-400">
                                    Thank you for contacting Shiyora. We will
                                    get back to you soon.
                                </p>

                            </div>

                        ) : (

                            /* =============================================
                               FORM
                            ============================================== */

                            <form
                                onSubmit={handleSubmit}
                                className="space-y-5"
                            >

                                {/* Name + Email */}

                                <div className="grid gap-5 md:grid-cols-2">

                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                                        >
                                            Your Name
                                        </label>

                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Enter your name"
                                            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-[#07111f] dark:text-white dark:placeholder:text-slate-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
                                        />
                                    </div>


                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                                        >
                                            Email Address
                                        </label>

                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="you@example.com"
                                            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-[#07111f] dark:text-white dark:placeholder:text-slate-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
                                        />
                                    </div>

                                </div>


                                {/* Subject */}

                                <div>

                                    <label
                                        htmlFor="subject"
                                        className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                                    >
                                        Subject
                                    </label>

                                    <input
                                        id="subject"
                                        name="subject"
                                        type="text"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="What would you like to discuss?"
                                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-[#07111f] dark:text-white dark:placeholder:text-slate-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
                                    />

                                </div>


                                {/* Message */}

                                <div>

                                    <label
                                        htmlFor="message"
                                        className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                                    >
                                        Message
                                    </label>

                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows="6"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Write your message here..."
                                        className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-[#07111f] dark:text-white dark:placeholder:text-slate-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
                                    />

                                </div>


                                {/* Submit */}

                                <button
                                    type="submit"
                                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/25"
                                >
                                    <Send
                                        size={18}
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    />

                                    Send Message

                                    <ArrowRight
                                        size={18}
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </button>

                            </form>

                        )}

                    </div>

                </div>

            </section>


            {/* =====================================================
                BOTTOM CTA
            ====================================================== */}

            <section className="bg-slate-50 dark:bg-[#07111f]">

                <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">

                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-teal-500 px-6 py-12 text-center shadow-xl md:px-12">

                        {/* Glow */}

                        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

                        <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

                        <div className="relative">

                            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                                Ready to start learning?
                            </h2>

                            <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-50">
                                Explore Shiyora and discover a smarter,
                                simpler way to learn and manage education.
                            </p>

                            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                                <Link
                                    to="/course"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-blue-700 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                                >
                                    Explore Courses
                                    <ArrowRight size={18} />
                                </Link>

                                <Link
                                    to="/about"
                                    className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
                                >
                                    About Shiyora
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default Contact;