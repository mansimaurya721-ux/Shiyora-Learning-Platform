import { useState } from "react";
import {
    ShieldCheck,
    Search,
    Award,
    CalendarDays,
    UserRound,
    Building2,
    BookOpen,
    BadgeCheck,
    AlertCircle,
    ArrowRight,
    LockKeyhole,
    FileCheck2,
    X,
} from "lucide-react";

const Certificate = () => {
    const [email, setEmail] = useState("");
    const [certificateId, setCertificateId] = useState("");
    const [certificate, setCertificate] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    // -----------------------------------------------------
    // DEMO CERTIFICATE DATA
    // Later this will come from the backend API.
    // -----------------------------------------------------

    const demoCertificate = {
        certificateId: "SHY-CERT-2026-00124",
        studentName: "Mansi Maurya",
        studentEmail: "mansi@test.com",
        courseName: "Full Stack Web Development",
        organizationName: "Shiyora Institute",
        instructorName: "Shiyora Learning Team",
        issueDate: "September 10, 2026",
        grade: "A+",
        status: "Verified",
    };

    // -----------------------------------------------------
    // VERIFY CERTIFICATE
    // -----------------------------------------------------

    const handleVerify = (e) => {
        e.preventDefault();

        setError("");
        setCertificate(null);

        if (!email.trim() || !certificateId.trim()) {
            setError("Please enter both email and certificate ID.");
            return;
        }

        setLoading(true);

        setTimeout(() => {
            const enteredEmail = email.trim().toLowerCase();
            const enteredCertificateId = certificateId
                .trim()
                .toUpperCase();

            if (
                enteredEmail ===
                demoCertificate.studentEmail.toLowerCase() &&
                enteredCertificateId ===
                demoCertificate.certificateId.toUpperCase()
            ) {
                setCertificate(demoCertificate);
                setError("");
            } else {
                setError(
                    "We could not verify this certificate. Please check your email and certificate ID."
                );
            }

            setLoading(false);
        }, 900);
    };

    // -----------------------------------------------------
    // RESET
    // -----------------------------------------------------

    const handleReset = () => {
        setEmail("");
        setCertificateId("");
        setCertificate(null);
        setError("");
    };

    return (
        <main className="min-h-screen bg-(--shiyora-bg) text-[var(--shiyora-text)]">

            {/* =================================================
                HERO / VERIFICATION SECTION
            ================================================= */}

            <section className="relative overflow-hidden px-4 pb-20 pt-24 sm:px-6 lg:px-8">

                {/* Background glow */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        -left-32
                        top-10
                        h-80
                        w-80
                        rounded-full
                        bg-blue-500/10
                        blur-3xl
                        dark:bg-blue-500/10
                    "
                />

                <div
                    className="
                        pointer-events-none
                        absolute
                        -right-32
                        top-40
                        h-96
                        w-96
                        rounded-full
                        bg-teal-400/10
                        blur-3xl
                        dark:bg-teal-400/10
                    "
                />

                <div className="relative mx-auto max-w-6xl">

                    {/* Heading */}

                    <div className="mx-auto max-w-3xl text-center">

                        <div
                            className="
                                mx-auto
                                mb-6
                                flex
                                h-16
                                w-16
                                items-center
                                justify-center
                                rounded-2xl
                                border
                                border-blue-200/70
                                bg-blue-50/80
                                shadow-lg
                                shadow-blue-500/10
                                dark:border-blue-400/20
                                dark:bg-blue-500/10
                            "
                        >
                            <ShieldCheck
                                size={32}
                                className="text-blue-600 dark:text-blue-400"
                            />
                        </div>

                        <p
                            className="
                                mb-4
                                text-sm
                                font-bold
                                uppercase
                                tracking-[0.22em]
                                text-teal-600
                                dark:text-teal-400
                            "
                        >
                            Certificate Verification
                        </p>

                        <h1
                            className="
                                text-4xl
                                font-extrabold
                                tracking-tight
                                text-(--shiyora-heading)
                                sm:text-5xl
                                lg:text-6xl
                            "
                        >
                            Verify a{" "}
                            <span className="shiyora-gradient-text">
                                Shiyora Certificate
                            </span>
                        </h1>

                        <p
                            className="
                                mx-auto
                                mt-5
                                max-w-2xl
                                text-base
                                leading-7
                                text-(--shiyora-muted)
                                sm:text-lg
                            "
                        >
                            Enter the certificate holder's email and
                            certificate ID to verify an officially issued
                            Shiyora certificate.
                        </p>

                    </div>

                    {/* =================================================
                        VERIFICATION CARD
                    ================================================= */}

                    <div className="mx-auto mt-12 max-w-2xl">

                        <div
                            className="
                                shiyora-glass-strong
                                rounded-3xl
                                p-6
                                shadow-2xl
                                shadow-slate-900/5
                                sm:p-8
                                dark:shadow-black/20
                            "
                        >

                            {/* Card Header */}

                            <div className="mb-7 flex items-start gap-4">

                                <div
                                    className="
                                        flex
                                        h-11
                                        w-11
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-xl
                                        bg-linear-to-br
                                        from-blue-600
                                        to-teal-500
                                        text-white
                                        shadow-lg
                                        shadow-blue-500/20
                                    "
                                >
                                    <Search size={21} />
                                </div>

                                <div>
                                    <h2
                                        className="
                                            text-xl
                                            font-bold
                                            text-(--shiyora-heading)
                                        "
                                    >
                                        Certificate lookup
                                    </h2>

                                    <p
                                        className="
                                            mt-1
                                            text-sm
                                            text-(--shiyora-muted)
                                        "
                                    >
                                        Enter the exact details printed on
                                        the certificate.
                                    </p>
                                </div>

                            </div>

                            {/* Form */}

                            <form
                                onSubmit={handleVerify}
                                className="space-y-5"
                            >

                                {/* Email */}

                                <div>

                                    <label
                                        htmlFor="certificate-email"
                                        className="
                                            mb-2
                                            block
                                            text-sm
                                            font-semibold
                                            text-(--shiyora-heading)
                                        "
                                    >
                                        Certificate holder email
                                    </label>

                                    <div className="relative">

                                        <UserRound
                                            size={18}
                                            className="
                                                pointer-events-none
                                                absolute
                                                left-4
                                                top-1/2
                                                -translate-y-1/2
                                                text-(--shiyora-muted)
                                            "
                                        />

                                        <input
                                            id="certificate-email"
                                            type="email"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                            placeholder="Enter certificate holder email"
                                            className="
                                                w-full
                                                rounded-xl
                                                border
                                                border-(--shiyora-border)
                                                bg-(--shiyora-surface)
                                                py-3.5
                                                pl-11
                                                pr-4
                                                text-sm
                                                text-(--shiyora-heading)
                                                outline-none
                                                transition
                                                placeholder:text-(--shiyora-muted)
                                                focus:border-blue-500
                                                focus:ring-4
                                                focus:ring-blue-500/10
                                                dark:focus:border-teal-400
                                                dark:focus:ring-teal-400/10
                                            "
                                        />

                                    </div>

                                </div>

                                {/* Certificate ID */}

                                <div>

                                    <label
                                        htmlFor="certificate-id"
                                        className="
                                            mb-2
                                            block
                                            text-sm
                                            font-semibold
                                            text-(--shiyora-heading)
                                        "
                                    >
                                        Certificate ID
                                    </label>

                                    <div className="relative">

                                        <Award
                                            size={18}
                                            className="
                                                pointer-events-none
                                                absolute
                                                left-4
                                                top-1/2
                                                -translate-y-1/2
                                                text-(--shiyora-muted)
                                            "
                                        />

                                        <input
                                            id="certificate-id"
                                            type="text"
                                            value={certificateId}
                                            onChange={(e) =>
                                                setCertificateId(
                                                    e.target.value
                                                )
                                            }
                                            placeholder="e.g. SHY-CERT-2026-00124"
                                            className="
                                                w-full
                                                rounded-xl
                                                border
                                                border-(--shiyora-border)
                                                bg-(--shiyora-surface)
                                                py-3.5
                                                pl-11
                                                pr-4
                                                text-sm
                                                uppercase
                                                tracking-wide
                                                text-(--shiyora-heading)
                                                outline-none
                                                transition
                                                placeholder:normal-case
                                                placeholder:tracking-normal
                                                placeholder:text-(--shiyora-muted)
                                                focus:border-blue-500
                                                focus:ring-4
                                                focus:ring-blue-500/10
                                                dark:focus:border-teal-400
                                                dark:focus:ring-teal-400/10
                                            "
                                        />

                                    </div>

                                </div>

                                {/* Error */}

                                {error && (
                                    <div
                                        className="
                                            flex
                                            items-start
                                            gap-3
                                            rounded-xl
                                            border
                                            border-red-200
                                            bg-red-50
                                            px-4
                                            py-3
                                            text-sm
                                            text-red-700
                                            dark:border-red-500/20
                                            dark:bg-red-500/10
                                            dark:text-red-300
                                        "
                                    >
                                        <AlertCircle
                                            size={18}
                                            className="mt-0.5 shrink-0"
                                        />

                                        <span>{error}</span>
                                    </div>
                                )}

                                {/* Verify Button */}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="
                                        flex
                                        w-full
                                        items-center
                                        justify-center
                                        gap-2
                                        rounded-xl
                                        bg-linear-to-r
                                        from-blue-600
                                        to-teal-500
                                        px-5
                                        py-3.5
                                        text-sm
                                        font-bold
                                        text-white
                                        shadow-lg
                                        shadow-blue-500/20
                                        transition
                                        hover:from-blue-700
                                        hover:to-teal-600
                                        disabled:cursor-not-allowed
                                        disabled:opacity-70
                                    "
                                >
                                    {loading ? (
                                        <>
                                            <span
                                                className="
                                                    h-4
                                                    w-4
                                                    animate-spin
                                                    rounded-full
                                                    border-2
                                                    border-white/30
                                                    border-t-white
                                                "
                                            />

                                            Verifying...
                                        </>
                                    ) : (
                                        <>
                                            View Certificate
                                            <ArrowRight size={17} />
                                        </>
                                    )}
                                </button>

                            </form>

                            {/* Security Note */}

                            <div
                                className="
                                    mt-6
                                    flex
                                    items-center
                                    justify-center
                                    gap-2
                                    text-xs
                                    text-(--shiyora-muted)
                                "
                            >
                                <LockKeyhole size={14} />

                                <span>
                                    Certificate verification is secure and
                                    publicly accessible.
                                </span>
                            </div>

                        </div>

                    </div>

                </div>
            </section>

            {/* =================================================
                VERIFIED CERTIFICATE
            ================================================= */}

            {certificate && (
                <section
                    className="
                        px-4
                        pb-24
                        sm:px-6
                        lg:px-8
                    "
                >

                    <div className="mx-auto max-w-5xl">

                        {/* Success Header */}

                        <div className="mb-8 text-center">

                            <div
                                className="
                                    mx-auto
                                    mb-4
                                    flex
                                    h-14
                                    w-14
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-teal-100
                                    text-teal-600
                                    dark:bg-teal-500/10
                                    dark:text-teal-400
                                "
                            >
                                <BadgeCheck size={30} />
                            </div>

                            <h2
                                className="
                                    text-2xl
                                    font-extrabold
                                    text-[var(--shiyora-heading)]
                                    sm:text-3xl
                                "
                            >
                                Certificate Verified
                            </h2>

                            <p
                                className="
                                    mt-2
                                    text-sm
                                    text-[var(--shiyora-muted)]
                                "
                            >
                                This certificate matches the records
                                available in Shiyora.
                            </p>

                        </div>

                        {/* Certificate Document */}

                        <div
                            className="
                                overflow-hidden
                                rounded-3xl
                                border
                                border-slate-200
                                bg-white
                                shadow-2xl
                                shadow-slate-900/10
                                dark:border-slate-700
                                dark:bg-white
                            "
                        >

                            {/* Certificate Top */}

                            <div
                                className="
                                    relative
                                    overflow-hidden
                                    border-b
                                    border-slate-200
                                    px-6
                                    py-10
                                    text-center
                                    sm:px-12
                                    sm:py-14
                                "
                            >

                                {/* Decorative circles */}

                                <div
                                    className="
                                        absolute
                                        -left-16
                                        -top-16
                                        h-40
                                        w-40
                                        rounded-full
                                        bg-blue-100
                                    "
                                />

                                <div
                                    className="
                                        absolute
                                        -bottom-20
                                        -right-16
                                        h-44
                                        w-44
                                        rounded-full
                                        bg-teal-100
                                    "
                                />

                                <div className="relative">

                                    <div
                                        className="
                                            mx-auto
                                            mb-5
                                            flex
                                            h-16
                                            w-16
                                            items-center
                                            justify-center
                                            rounded-2xl
                                            bg-gradient-to-br
                                            from-blue-600
                                            to-teal-500
                                            text-white
                                            shadow-lg
                                        "
                                    >
                                        <Award size={34} />
                                    </div>

                                    <p
                                        className="
                                            text-xs
                                            font-bold
                                            uppercase
                                            tracking-[0.3em]
                                            text-slate-500
                                        "
                                    >
                                        Shiyora Learning Platform
                                    </p>

                                    <h3
                                        className="
                                            mt-4
                                            text-3xl
                                            font-extrabold
                                            tracking-tight
                                            text-slate-900
                                            sm:text-4xl
                                        "
                                    >
                                        Certificate of Completion
                                    </h3>

                                    <p
                                        className="
                                            mx-auto
                                            mt-4
                                            max-w-2xl
                                            text-sm
                                            leading-6
                                            text-slate-500
                                        "
                                    >
                                        This certificate is proudly presented
                                        to
                                    </p>

                                    <p
                                        className="
                                            mt-4
                                            text-3xl
                                            font-extrabold
                                            text-slate-900
                                            sm:text-4xl
                                        "
                                    >
                                        {certificate.studentName}
                                    </p>

                                    <p
                                        className="
                                            mx-auto
                                            mt-4
                                            max-w-2xl
                                            text-sm
                                            leading-6
                                            text-slate-500
                                        "
                                    >
                                        for successfully completing
                                    </p>

                                    <p
                                        className="
                                            mt-3
                                            text-xl
                                            font-bold
                                            text-blue-700
                                            sm:text-2xl
                                        "
                                    >
                                        {certificate.courseName}
                                    </p>

                                </div>

                            </div>

                            {/* Certificate Details */}

                            <div className="px-6 py-8 sm:px-12 sm:py-10">

                                <div
                                    className="
                                        grid
                                        gap-4
                                        sm:grid-cols-2
                                    "
                                >

                                    {/* Student */}

                                    <div
                                        className="
                                            rounded-2xl
                                            border
                                            border-slate-200
                                            bg-slate-50
                                            p-5
                                        "
                                    >
                                        <div className="flex items-center gap-3">

                                            <UserRound
                                                size={19}
                                                className="text-blue-600"
                                            />

                                            <div>

                                                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                                                    Student
                                                </p>

                                                <p className="mt-1 font-bold text-slate-800">
                                                    {certificate.studentName}
                                                </p>

                                            </div>

                                        </div>
                                    </div>

                                    {/* Organization */}

                                    <div
                                        className="
                                            rounded-2xl
                                            border
                                            border-slate-200
                                            bg-slate-50
                                            p-5
                                        "
                                    >
                                        <div className="flex items-center gap-3">

                                            <Building2
                                                size={19}
                                                className="text-teal-600"
                                            />

                                            <div>

                                                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                                                    Organization
                                                </p>

                                                <p className="mt-1 font-bold text-slate-800">
                                                    {certificate.organizationName}
                                                </p>

                                            </div>

                                        </div>
                                    </div>

                                    {/* Course */}

                                    <div
                                        className="
                                            rounded-2xl
                                            border
                                            border-slate-200
                                            bg-slate-50
                                            p-5
                                        "
                                    >
                                        <div className="flex items-center gap-3">

                                            <BookOpen
                                                size={19}
                                                className="text-blue-600"
                                            />

                                            <div>

                                                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                                                    Course
                                                </p>

                                                <p className="mt-1 font-bold text-slate-800">
                                                    {certificate.courseName}
                                                </p>

                                            </div>

                                        </div>
                                    </div>

                                    {/* Issue Date */}

                                    <div
                                        className="
                                            rounded-2xl
                                            border
                                            border-slate-200
                                            bg-slate-50
                                            p-5
                                        "
                                    >
                                        <div className="flex items-center gap-3">

                                            <CalendarDays
                                                size={19}
                                                className="text-teal-600"
                                            />

                                            <div>

                                                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                                                    Issue Date
                                                </p>

                                                <p className="mt-1 font-bold text-slate-800">
                                                    {certificate.issueDate}
                                                </p>

                                            </div>

                                        </div>
                                    </div>

                                </div>

                                {/* Bottom Information */}

                                <div
                                    className="
                                        mt-8
                                        grid
                                        gap-6
                                        border-t
                                        border-slate-200
                                        pt-8
                                        sm:grid-cols-3
                                    "
                                >

                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                                            Certificate ID
                                        </p>

                                        <p className="mt-2 break-all font-mono text-sm font-bold text-slate-800">
                                            {certificate.certificateId}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                                            Grade
                                        </p>

                                        <p className="mt-2 text-lg font-extrabold text-blue-700">
                                            {certificate.grade}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                                            Status
                                        </p>

                                        <div className="mt-2 flex items-center gap-2">

                                            <span
                                                className="
                                                    flex
                                                    h-7
                                                    w-7
                                                    items-center
                                                    justify-center
                                                    rounded-full
                                                    bg-teal-100
                                                    text-teal-600
                                                "
                                            >
                                                <FileCheck2 size={15} />
                                            </span>

                                            <span className="font-bold text-teal-700">
                                                {certificate.status}
                                            </span>

                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* Reset Button */}

                        <div className="mt-8 text-center">

                            <button
                                onClick={handleReset}
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-xl
                                    border
                                    border-(--shiyora-border)
                                    bg-(--shiyora-surface)
                                    px-5
                                    py-3
                                    text-sm
                                    font-semibold
                                    text-(--shiyora-text)
                                    transition
                                    hover:border-blue-300
                                    hover:text-blue-600
                                    dark:hover:border-teal-400/40
                                    dark:hover:text-teal-400
                                "
                            >
                                <X size={16} />
                                Verify another certificate
                            </button>

                        </div>

                    </div>

                </section>
            )}

            {/* =================================================
                INFORMATION SECTION
            ================================================= */}

            {!certificate && (
                <section className="px-4 pb-24 sm:px-6 lg:px-8">

                    <div className="mx-auto max-w-6xl">

                        <div className="grid gap-6 md:grid-cols-3">

                            {/* Card 1 */}

                            <div
                                className="
                                    shiyora-glass
                                    shiyora-glass-hover
                                    rounded-2xl
                                    p-6
                                "
                            >
                                <div
                                    className="
                                        mb-5
                                        flex
                                        h-11
                                        w-11
                                        items-center
                                        justify-center
                                        rounded-xl
                                        bg-blue-100
                                        text-blue-600
                                        dark:bg-blue-500/10
                                        dark:text-blue-400
                                    "
                                >
                                    <ShieldCheck size={21} />
                                </div>

                                <h3
                                    className="
                                        text-lg
                                        font-bold
                                        text-(--shiyora-heading)
                                    "
                                >
                                    Authentic certificates
                                </h3>

                                <p
                                    className="
                                        mt-2
                                        text-sm
                                        leading-6
                                        text-(--shiyora-muted)
                                    "
                                >
                                    Verify whether a certificate was issued
                                    through the Shiyora learning platform.
                                </p>
                            </div>

                            {/* Card 2 */}

                            <div
                                className="
                                    shiyora-glass
                                    shiyora-glass-hover
                                    rounded-2xl
                                    p-6
                                "
                            >
                                <div
                                    className="
                                        mb-5
                                        flex
                                        h-11
                                        w-11
                                        items-center
                                        justify-center
                                        rounded-xl
                                        bg-teal-100
                                        text-teal-600
                                        dark:bg-teal-500/10
                                        dark:text-teal-400
                                    "
                                >
                                    <FileCheck2 size={21} />
                                </div>

                                <h3
                                    className="
                                        text-lg
                                        font-bold
                                        text-(--shiyora-heading)
                                    "
                                >
                                    Permanent records
                                </h3>

                                <p
                                    className="
                                        mt-2
                                        text-sm
                                        leading-6
                                        text-(--shiyora-muted)
                                    "
                                >
                                    Issued certificates can remain accessible
                                    even when a learner is no longer part of
                                    an organization.
                                </p>
                            </div>

                            {/* Card 3 */}

                            <div
                                className="
                                    shiyora-glass
                                    shiyora-glass-hover
                                    rounded-2xl
                                    p-6
                                "
                            >
                                <div
                                    className="
                                        mb-5
                                        flex
                                        h-11
                                        w-11
                                        items-center
                                        justify-center
                                        rounded-xl
                                        bg-blue-100
                                        text-blue-600
                                        dark:bg-blue-500/10
                                        dark:text-blue-400
                                    "
                                >
                                    <LockKeyhole size={21} />
                                </div>

                                <h3
                                    className="
                                        text-lg
                                        font-bold
                                        text-(--shiyora-heading)
                                    "
                                >
                                    Simple verification
                                </h3>

                                <p
                                    className="
                                        mt-2
                                        text-sm
                                        leading-6
                                        text-(--shiyora-muted)
                                    "
                                >
                                    Employers and institutions can verify
                                    certificate information using the holder's
                                    email and certificate ID.
                                </p>
                            </div>

                        </div>

                    </div>

                </section>
            )}

        </main>
    );
};

export default Certificate;