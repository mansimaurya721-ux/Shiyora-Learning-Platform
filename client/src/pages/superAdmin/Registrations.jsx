import React, { useMemo, useState } from "react";
import {
    Bell,
    Building2,
    CheckCircle2,
    Clock3,
    Eye,
    Mail,
    Phone,
    Search,
    XCircle,
    CreditCard,
    KeyRound,
    Send,
    QrCode,
    Copy,
} from "lucide-react";

const Registrations = () => {
    // =========================================================
    // DEMO REGISTRATION DATA
    // =========================================================

    const [registrations, setRegistrations] = useState([
        {
            id: "REG-1001",
            organization: "ABC Institute",
            contactPerson: "Rahul Sharma",
            email: "rahul@abcinstitute.com",
            phone: "+91 9876543210",
            plan: "Professional",
            students: 250,
            date: "28 Sep 2026",
            status: "Pending",
            paymentSent: false,
            paymentDetailsSent: false,
            qrSent: false,
            paymentVerified: false,
            accessGranted: false,
        },
        {
            id: "REG-1002",
            organization: "Bright Future Academy",
            contactPerson: "Neha Verma",
            email: "neha@brightfuture.edu",
            phone: "+91 9123456780",
            plan: "Enterprise",
            students: 850,
            date: "28 Sep 2026",
            status: "Pending",
            paymentSent: false,
            paymentDetailsSent: false,
            qrSent: false,
            paymentVerified: false,
            accessGranted: false,
        },
        {
            id: "REG-1003",
            organization: "Global Tech Institute",
            contactPerson: "Amit Singh",
            email: "amit@globaltech.in",
            phone: "+91 9988776655",
            plan: "Professional",
            students: 400,
            date: "27 Sep 2026",
            status: "Pending",
            paymentSent: false,
            paymentDetailsSent: false,
            qrSent: false,
            paymentVerified: false,
            accessGranted: false,
        },
        {
            id: "REG-1004",
            organization: "Future Skills College",
            contactPerson: "Priya Gupta",
            email: "priya@futureskills.com",
            phone: "+91 9876501234",
            plan: "Enterprise",
            students: 1200,
            date: "26 Sep 2026",
            status: "Approved",
            paymentSent: true,
            paymentDetailsSent: true,
            qrSent: true,
            paymentVerified: true,
            accessGranted: true,
        },
    ]);

    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");

    const [selectedRegistration, setSelectedRegistration] =
        useState(null);

    const [showReviewModal, setShowReviewModal] = useState(false);
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [qrSent, setQrSent] = useState(false);

    const [generatedPassword, setGeneratedPassword] = useState("");

    // =========================================================
    // FILTER
    // =========================================================

    const filteredRegistrations = useMemo(() => {
        return registrations.filter((registration) => {
            const matchesSearch =
                registration.organization
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                registration.contactPerson
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                registration.email
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                registration.id
                    .toLowerCase()
                    .includes(search.toLowerCase());

            const matchesStatus =
                statusFilter === "All" ||
                registration.status === statusFilter;

            return matchesSearch && matchesStatus;
        });
    }, [registrations, search, statusFilter]);

    // =========================================================
    // STATS
    // =========================================================

    const totalRegistrations = registrations.length;

    const pendingRegistrations = registrations.filter(
        (item) => item.status === "Pending"
    ).length;

    const approvedRegistrations = registrations.filter(
        (item) => item.status === "Approved"
    ).length;

    const enterpriseRegistrations = registrations.filter(
        (item) => item.plan === "Enterprise"
    ).length;

    // =========================================================
    // PASSWORD GENERATOR
    // =========================================================

    const generatePassword = () => {
        const characters =
            "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789@#$";

        let password = "";

        for (let i = 0; i < 12; i++) {
            password +=
                characters[
                Math.floor(Math.random() * characters.length)
                ];
        }

        setGeneratedPassword(password);
        return password;
    };

    // =========================================================
    // REGISTRATION WORKFLOW
    // 1. Super Admin checks registration
    // 2. Send payment method
    // 3. Verify payment
    // 4. Generate password + grant access
    // =========================================================

    const handleReview = (registration) => {
        setSelectedRegistration(registration);
        setShowReviewModal(true);
    };

    const handleSendPaymentMethod = () => {
        if (!selectedRegistration) return;
        setQrSent(Boolean(selectedRegistration.qrSent));
        setShowPaymentModal(true);
    };

    const handleSendPayment = ({ includeBank = true, includeQr = false } = {}) => {
        if (!selectedRegistration) return;

        if (!includeBank && !includeQr) return;

        const nextQrSent =
            Boolean(selectedRegistration.qrSent) || includeQr;

        setRegistrations((previous) =>
            previous.map((registration) =>
                registration.id === selectedRegistration.id
                    ? {
                        ...registration,
                        status: "Payment Sent",
                        paymentSent: true,
                        paymentDetailsSent:
                            Boolean(registration.paymentDetailsSent) || includeBank,
                        qrSent:
                            Boolean(registration.qrSent) || includeQr,
                    }
                    : registration
            )
        );

        setSelectedRegistration((previous) => ({
            ...previous,
            status: "Payment Sent",
            paymentSent: true,
            paymentDetailsSent:
                Boolean(previous.paymentDetailsSent) || includeBank,
            qrSent: nextQrSent,
        }));

        setQrSent(nextQrSent);
        setShowPaymentModal(false);

        alert(
            `${includeBank && includeQr
                ? "Payment details and QR code"
                : includeQr
                    ? "Payment QR code"
                    : "Payment details"
            } sent to ${selectedRegistration.organization}.`
        );
    };

    const handleSendQrOnly = () => {
        handleSendPayment({ includeBank: false, includeQr: true });
    };

    const handleSendBankOnly = () => {
        handleSendPayment({ includeBank: true, includeQr: false });
    };

    const handleSendBothPaymentOptions = () => {
        handleSendPayment({ includeBank: true, includeQr: true });
    };

    const handleVerifyPayment = () => {
        if (!selectedRegistration) return;

        const confirmed = window.confirm(
            `Verify payment for ${selectedRegistration.organization}?`
        );

        if (!confirmed) return;

        setRegistrations((previous) =>
            previous.map((registration) =>
                registration.id === selectedRegistration.id
                    ? {
                        ...registration,
                        status: "Payment Verified",
                        paymentVerified: true,
                    }
                    : registration
            )
        );

        setSelectedRegistration((previous) => ({
            ...previous,
            status: "Payment Verified",
            paymentVerified: true,
        }));

        alert(
            `Payment verified for ${selectedRegistration.organization}.`
        );
    };

    const handleGenerateAccess = () => {
        if (!selectedRegistration) return;

        const newPassword = generatePassword();

        setGeneratedPassword(newPassword);

        setRegistrations((previous) =>
            previous.map((registration) =>
                registration.id === selectedRegistration.id
                    ? {
                        ...registration,
                        status: "Access Ready",
                    }
                    : registration
            )
        );

        setSelectedRegistration((previous) => ({
            ...previous,
            status: "Access Ready",
        }));
    };

    const handleGrantAccess = () => {
        if (!selectedRegistration || !generatedPassword) return;

        setRegistrations((previous) =>
            previous.map((registration) =>
                registration.id === selectedRegistration.id
                    ? {
                        ...registration,
                        status: "Approved",
                        accessGranted: true,
                    }
                    : registration
            )
        );

        setSelectedRegistration((previous) => ({
            ...previous,
            status: "Approved",
            accessGranted: true,
        }));

        alert(
            `Access granted to ${selectedRegistration.organization}.\n\nLogin Email: ${selectedRegistration.email}\nTemporary Password: ${generatedPassword}`
        );
    };

    // =========================================================
    // REJECT
    // =========================================================

    const handleReject = () => {
        if (!selectedRegistration) return;

        const confirmed = window.confirm(
            `Reject registration from ${selectedRegistration.organization}?`
        );

        if (!confirmed) return;

        setRegistrations((previous) =>
            previous.map((registration) =>
                registration.id === selectedRegistration.id
                    ? {
                        ...registration,
                        status: "Rejected",
                    }
                    : registration
            )
        );

        setShowReviewModal(false);
        setSelectedRegistration(null);
    };

    // =========================================================
    // STATUS STYLE
    // =========================================================

    const getStatusStyle = (status) => {
        if (status === "Pending") {
            return "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400";
        }

        if (status === "Payment Sent") {
            return "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400";
        }

        if (status === "Payment Verified") {
            return "bg-teal-50 text-teal-700 dark:bg-teal-500/10 dark:text-teal-400";
        }

        if (status === "Access Ready") {
            return "bg-violet-50 text-violet-700 dark:bg-violet-500/10 dark:text-violet-400";
        }

        if (status === "Approved") {
            return "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400";
        }

        return "bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400";
    };

    const paymentUpiId = "payments@shiyora";
    const paymentQrValue =
        `upi://pay?pa=${paymentUpiId}&pn=Shiyora%20Education&cu=INR`;
    const paymentQrUrl =
        `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(
            paymentQrValue
        )}`;

    const copyPaymentDetails = async () => {
        try {
            await navigator.clipboard.writeText(
                "Bank: Shiyora Education Pvt. Ltd. | Account: 000000000000 | IFSC: SHIY0000001 | UPI: payments@shiyora"
            );
            alert("Payment details copied.");
        } catch {
            alert("Unable to copy payment details.");
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 p-5 text-slate-700 dark:bg-[#07111f] dark:text-slate-300 sm:p-6 lg:p-8">

            {/* =====================================================
                HEADER
            ===================================================== */}

            <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                <div>
                    <div className="mb-2 flex items-center gap-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                            <Bell size={18} />
                        </div>

                        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                            Registration Management
                        </span>
                    </div>

                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
                        New Registrations
                    </h1>

                    <p className="mt-2 max-w-2xl text-sm text-slate-500 dark:text-slate-400">
                        Review organization and institute registration
                        requests for Professional and Enterprise plans.
                    </p>
                </div>

                <div className="flex items-center gap-2 rounded-xl border border-blue-100 bg-blue-50 px-4 py-3 dark:border-blue-500/20 dark:bg-blue-500/10">
                    <Clock3
                        size={17}
                        className="text-blue-600 dark:text-blue-400"
                    />

                    <div>
                        <p className="text-xs font-semibold text-blue-700 dark:text-blue-300">
                            Pending Requests
                        </p>

                        <p className="text-lg font-bold text-blue-800 dark:text-blue-200">
                            {pendingRegistrations}
                        </p>
                    </div>
                </div>
            </div>

            {/* =====================================================
                STATS
            ===================================================== */}

            <div className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                        Total Registrations
                    </p>

                    <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                        {totalRegistrations}
                    </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                        Pending Review
                    </p>

                    <p className="mt-2 text-2xl font-bold text-amber-600 dark:text-amber-400">
                        {pendingRegistrations}
                    </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                        Approved
                    </p>

                    <p className="mt-2 text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                        {approvedRegistrations}
                    </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                        Enterprise Requests
                    </p>

                    <p className="mt-2 text-2xl font-bold text-teal-600 dark:text-teal-400">
                        {enterpriseRegistrations}
                    </p>
                </div>
            </div>

            {/* =====================================================
                TABLE CARD
            ===================================================== */}

            <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">

                {/* FILTER BAR */}

                <div className="flex flex-col gap-4 border-b border-slate-200 p-5 dark:border-[#1e334a] lg:flex-row lg:items-center lg:justify-between">

                    <div>
                        <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                            Registration Requests
                        </h2>

                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                            Review and approve incoming organization
                            registrations.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">

                        {/* SEARCH */}

                        <div className="relative">
                            <Search
                                size={16}
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                            />

                            <input
                                type="text"
                                value={search}
                                onChange={(e) =>
                                    setSearch(e.target.value)
                                }
                                placeholder="Search registration..."
                                className="
                                    h-10
                                    w-full
                                    rounded-xl
                                    border
                                    border-slate-200
                                    bg-slate-50
                                    pl-9
                                    pr-3
                                    text-sm
                                    text-slate-700
                                    outline-none
                                    transition
                                    focus:border-blue-500
                                    focus:ring-2
                                    focus:ring-blue-500/10

                                    dark:border-[#1e334a]
                                    dark:bg-[#07111f]
                                    dark:text-slate-200
                                    dark:placeholder:text-slate-500
                                "
                            />
                        </div>

                        {/* STATUS */}

                        <select
                            value={statusFilter}
                            onChange={(e) =>
                                setStatusFilter(e.target.value)
                            }
                            className="
                                h-10
                                rounded-xl
                                border
                                border-slate-200
                                bg-slate-50
                                px-3
                                text-sm
                                font-medium
                                text-slate-700
                                outline-none

                                dark:border-[#1e334a]
                                dark:bg-[#07111f]
                                dark:text-slate-200
                            "
                        >
                            <option value="All">All Status</option>
                            <option value="Pending">Pending</option>
                            <option value="Payment Sent">Payment Sent</option>
                            <option value="Payment Verified">Payment Verified</option>
                            <option value="Access Ready">Access Ready</option>
                            <option value="Approved">Approved</option>
                            <option value="Rejected">Rejected</option>
                        </select>
                    </div>
                </div>

                {/* =====================================================
                    DESKTOP TABLE
                ===================================================== */}

                <div className="hidden overflow-x-auto lg:block">

                    <table className="w-full">

                        <thead>
                            <tr className="border-b border-slate-200 bg-slate-50 dark:border-[#1e334a] dark:bg-[#102337]">

                                <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                    Organization
                                </th>

                                <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                    Plan
                                </th>

                                <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                    Contact
                                </th>

                                <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                    Students
                                </th>

                                <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                    Status
                                </th>

                                <th className="px-5 py-4 text-right text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                    Action
                                </th>
                            </tr>
                        </thead>

                        <tbody>

                            {filteredRegistrations.map(
                                (registration) => (
                                    <tr
                                        key={registration.id}
                                        className="border-b border-slate-100 last:border-0 hover:bg-slate-50 dark:border-[#1e334a]/70 dark:hover:bg-[#102337]"
                                    >

                                        <td className="px-5 py-4">
                                            <div className="flex items-center gap-3">

                                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                                                    <Building2 size={18} />
                                                </div>

                                                <div>
                                                    <p className="font-semibold text-slate-900 dark:text-white">
                                                        {
                                                            registration.organization
                                                        }
                                                    </p>

                                                    <p className="mt-0.5 text-xs text-slate-400">
                                                        {registration.id}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="px-5 py-4">
                                            <span
                                                className={`rounded-lg px-2.5 py-1 text-xs font-bold ${registration.plan ===
                                                    "Enterprise"
                                                    ? "bg-teal-50 text-teal-700 dark:bg-teal-500/10 dark:text-teal-400"
                                                    : "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400"
                                                    }`}
                                            >
                                                {registration.plan}
                                            </span>
                                        </td>

                                        <td className="px-5 py-4">
                                            <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                                                {
                                                    registration.contactPerson
                                                }
                                            </p>

                                            <p className="mt-1 text-xs text-slate-400">
                                                {registration.email}
                                            </p>
                                        </td>

                                        <td className="px-5 py-4 text-sm font-semibold text-slate-700 dark:text-slate-200">
                                            {registration.students}
                                        </td>

                                        <td className="px-5 py-4">
                                            <span
                                                className={`rounded-full px-3 py-1 text-[11px] font-bold ${getStatusStyle(
                                                    registration.status
                                                )}`}
                                            >
                                                {
                                                    registration.status
                                                }
                                            </span>
                                        </td>

                                        <td className="px-5 py-4 text-right">
                                            <button
                                                onClick={() =>
                                                    handleReview(registration)
                                                }
                                                title="View registration"
                                                aria-label={`View ${registration.organization} registration`}
                                                className="
                                                    inline-flex h-9 w-9
                                                    items-center justify-center
                                                    rounded-xl
                                                    border border-slate-200
                                                    bg-slate-50
                                                    text-slate-600
                                                    transition
                                                    hover:border-blue-200
                                                    hover:bg-blue-50
                                                    hover:text-blue-600
                                                    dark:border-[#1e334a]
                                                    dark:bg-[#102337]
                                                    dark:text-slate-300
                                                    dark:hover:border-blue-500/30
                                                    dark:hover:bg-blue-500/10
                                                    dark:hover:text-blue-400
                                                "
                                            >
                                                <Eye size={17} />
                                            </button>
                                        </td>
                                    </tr>
                                )
                            )}

                        </tbody>
                    </table>
                </div>

                {/* =====================================================
                    MOBILE CARDS
                ===================================================== */}

                <div className="divide-y divide-slate-100 lg:hidden dark:divide-[#1e334a]">

                    {filteredRegistrations.map(
                        (registration) => (
                            <div
                                key={registration.id}
                                className="p-5"
                            >
                                <div className="flex items-start justify-between gap-4">

                                    <div className="flex items-start gap-3">

                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                                            <Building2 size={18} />
                                        </div>

                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white">
                                                {
                                                    registration.organization
                                                }
                                            </p>

                                            <p className="mt-1 text-xs text-slate-400">
                                                {registration.id}
                                            </p>
                                        </div>
                                    </div>

                                    <span
                                        className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold ${getStatusStyle(
                                            registration.status
                                        )}`}
                                    >
                                        {registration.status}
                                    </span>
                                </div>

                                <div className="mt-4 grid grid-cols-2 gap-3">

                                    <div>
                                        <p className="text-[10px] font-semibold uppercase text-slate-400">
                                            Plan
                                        </p>

                                        <p className="mt-1 text-sm font-semibold text-slate-700 dark:text-slate-200">
                                            {registration.plan}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-[10px] font-semibold uppercase text-slate-400">
                                            Students
                                        </p>

                                        <p className="mt-1 text-sm font-semibold text-slate-700 dark:text-slate-200">
                                            {registration.students}
                                        </p>
                                    </div>

                                    <div className="col-span-2">
                                        <p className="text-[10px] font-semibold uppercase text-slate-400">
                                            Contact
                                        </p>

                                        <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">
                                            {
                                                registration.contactPerson
                                            }
                                        </p>

                                        <p className="mt-0.5 text-xs text-slate-400">
                                            {registration.email}
                                        </p>
                                    </div>
                                </div>

                                <button
                                    onClick={() =>
                                        handleReview(registration)
                                    }
                                    title="View registration"
                                    aria-label={`View ${registration.organization} registration`}
                                    className="
                                        mt-4
                                        flex h-10 w-full
                                        items-center
                                        justify-center
                                        rounded-xl
                                        border border-slate-200
                                        bg-slate-50
                                        text-slate-600
                                        transition
                                        hover:border-blue-200
                                        hover:bg-blue-50
                                        hover:text-blue-600
                                        dark:border-[#1e334a]
                                        dark:bg-[#102337]
                                        dark:text-slate-300
                                        dark:hover:border-blue-500/30
                                        dark:hover:bg-blue-500/10
                                        dark:hover:text-blue-400
                                    "
                                >
                                    <Eye size={18} />
                                </button>
                            </div>
                        )
                    )}
                </div>

                {/* EMPTY */}

                {filteredRegistrations.length === 0 && (
                    <div className="px-6 py-16 text-center">
                        <Building2
                            size={30}
                            className="mx-auto text-slate-300 dark:text-slate-600"
                        />

                        <h3 className="mt-4 font-bold text-slate-900 dark:text-white">
                            No registrations found
                        </h3>

                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                            Try changing your search or status filter.
                        </p>
                    </div>
                )}
            </section>

            {/* =====================================================
                PAYMENT METHOD MODAL
            ===================================================== */}

            {showPaymentModal && selectedRegistration && (
                <div className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm">
                    <div className="max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-[#1e334a] dark:bg-[#0b1727]">

                        <div className="flex items-center justify-between border-b border-slate-200 p-5 dark:border-[#1e334a]">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                                    Payment Setup
                                </p>

                                <h2 className="mt-1 text-xl font-bold text-slate-900 dark:text-white">
                                    Send Payment Method
                                </h2>

                                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                    Review the payment information before sending it to{" "}
                                    <span className="font-semibold text-slate-700 dark:text-slate-200">
                                        {selectedRegistration.organization}
                                    </span>
                                    .
                                </p>
                            </div>

                            <button
                                onClick={() => setShowPaymentModal(false)}
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-[#172337] dark:hover:text-white"
                                aria-label="Close payment method"
                            >
                                <XCircle size={20} />
                            </button>
                        </div>

                        <div className="grid gap-5 p-5 lg:grid-cols-[1.25fr_0.75fr]">

                            {/* BANK + UPI DETAILS */}

                            <div className="space-y-4">

                                <div className="rounded-xl border border-blue-100 bg-blue-50 p-4 dark:border-blue-500/20 dark:bg-blue-500/10">
                                    <div className="flex items-center justify-between gap-3">
                                        <div className="flex items-center gap-2">
                                            <CreditCard
                                                size={18}
                                                className="text-blue-600 dark:text-blue-400"
                                            />

                                            <h3 className="text-sm font-bold text-blue-800 dark:text-blue-300">
                                                Official Payment Details
                                            </h3>
                                        </div>

                                        <button
                                            onClick={copyPaymentDetails}
                                            className="inline-flex items-center gap-1.5 rounded-lg border border-blue-200 bg-white px-3 py-1.5 text-xs font-bold text-blue-700 hover:bg-blue-50 dark:border-blue-500/20 dark:bg-[#102337] dark:text-blue-300"
                                        >
                                            <Copy size={14} />
                                            Copy
                                        </button>
                                    </div>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-2">
                                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-[#1e334a] dark:bg-[#102337]">
                                        <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                                            Business Name
                                        </p>
                                        <p className="mt-1 text-sm font-bold text-slate-900 dark:text-white">
                                            Shiyora Education Pvt. Ltd.
                                        </p>
                                    </div>

                                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-[#1e334a] dark:bg-[#102337]">
                                        <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                                            Account Type
                                        </p>
                                        <p className="mt-1 text-sm font-bold text-slate-900 dark:text-white">
                                            Current Account
                                        </p>
                                    </div>

                                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-[#1e334a] dark:bg-[#102337]">
                                        <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                                            Bank Name
                                        </p>
                                        <p className="mt-1 text-sm font-bold text-slate-900 dark:text-white">
                                            Example National Bank
                                        </p>
                                    </div>

                                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-[#1e334a] dark:bg-[#102337]">
                                        <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                                            Account Number
                                        </p>
                                        <p className="mt-1 font-mono text-sm font-bold text-slate-900 dark:text-white">
                                            000000000000
                                        </p>
                                    </div>

                                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-[#1e334a] dark:bg-[#102337]">
                                        <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                                            IFSC
                                        </p>
                                        <p className="mt-1 font-mono text-sm font-bold text-slate-900 dark:text-white">
                                            SHIY0000001
                                        </p>
                                    </div>

                                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-[#1e334a] dark:bg-[#102337]">
                                        <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                                            UPI ID
                                        </p>
                                        <p className="mt-1 font-mono text-sm font-bold text-slate-900 dark:text-white">
                                            payments@shiyora
                                        </p>
                                    </div>
                                </div>

                                <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-500/20 dark:bg-amber-500/10">
                                    <p className="text-xs font-bold text-amber-800 dark:text-amber-300">
                                        Amount to be paid
                                    </p>
                                    <p className="mt-1 text-lg font-bold text-amber-900 dark:text-amber-200">
                                        {selectedRegistration.plan === "Enterprise"
                                            ? "₹ 49,999 / year"
                                            : "₹ 24,999 / year"}
                                    </p>
                                    <p className="mt-1 text-xs text-amber-700 dark:text-amber-300">
                                        Demo amount — replace this with your actual plan pricing.
                                    </p>
                                </div>
                            </div>

                            {/* QR CODE */}

                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-[#1e334a] dark:bg-[#102337]">
                                <div className="flex items-center gap-2">
                                    <QrCode
                                        size={18}
                                        className="text-teal-600 dark:text-teal-400"
                                    />

                                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                                        UPI QR Payment
                                    </h3>
                                </div>

                                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                    Scan this QR code to make the payment.
                                </p>

                                <div className="mx-auto mt-5 flex w-fit rounded-2xl border border-slate-200 bg-white p-3 shadow-sm dark:border-[#1e334a]">
                                    <img
                                        src={paymentQrUrl}
                                        alt="Shiyora payment QR code"
                                        className="h-52 w-52 rounded-lg object-contain"
                                    />
                                </div>

                                <div className="mt-4 rounded-xl bg-white p-3 dark:bg-[#07111f]">
                                    <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                                        UPI
                                    </p>

                                    <p className="mt-1 font-mono text-sm font-bold text-slate-900 dark:text-white">
                                        payments@shiyora
                                    </p>
                                </div>

                                <div className="mt-4 flex items-center gap-2">
                                    <span
                                        className={`h-2.5 w-2.5 rounded-full ${
                                            qrSent
                                                ? "bg-emerald-500"
                                                : "bg-slate-300 dark:bg-slate-600"
                                        }`}
                                    />

                                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                                        {qrSent
                                            ? "QR code has already been sent."
                                            : "QR code is ready to send."}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 border-t border-slate-200 p-5 dark:border-[#1e334a] sm:flex-row sm:justify-end">
                            <button
                                onClick={() => setShowPaymentModal(false)}
                                className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-600 hover:bg-slate-50 dark:border-[#1e334a] dark:text-slate-300 dark:hover:bg-[#102337]"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={handleSendBankOnly}
                                className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-4 py-2.5 text-sm font-bold text-blue-700 hover:bg-blue-100 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300"
                            >
                                <CreditCard size={16} />
                                Send Bank Details
                            </button>

                            <button
                                onClick={handleSendQrOnly}
                                className="inline-flex items-center justify-center gap-2 rounded-xl border border-teal-200 bg-teal-50 px-4 py-2.5 text-sm font-bold text-teal-700 hover:bg-teal-100 dark:border-teal-500/20 dark:bg-teal-500/10 dark:text-teal-300"
                            >
                                <QrCode size={16} />
                                Send QR Code
                            </button>

                            <button
                                onClick={handleSendBothPaymentOptions}
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:from-blue-700 hover:to-teal-600"
                            >
                                <Send size={16} />
                                Send Both
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* =====================================================
                REVIEW MODAL
            ===================================================== */}

            {showReviewModal && selectedRegistration && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm">

                    <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-[#1e334a] dark:bg-[#0b1727]">

                        {/* HEADER */}

                        <div className="flex items-center justify-between border-b border-slate-200 p-5 dark:border-[#1e334a]">

                            <div>
                                <p className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                                    Registration Request
                                </p>

                                <h2 className="mt-1 text-xl font-bold text-slate-900 dark:text-white">
                                    Review Registration
                                </h2>
                            </div>

                            <button
                                onClick={() => {
                                    setShowReviewModal(false);
                                    setSelectedRegistration(null);
                                }}
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-[#172337] dark:hover:text-white"
                            >
                                <XCircle size={20} />
                            </button>
                        </div>

                        {/* DETAILS */}

                        <div className="grid gap-4 p-5 sm:grid-cols-2">

                            <div className="rounded-xl bg-slate-50 p-4 dark:bg-[#102337]">
                                <p className="text-[10px] font-bold uppercase text-slate-400">
                                    Organization
                                </p>

                                <p className="mt-1 font-bold text-slate-900 dark:text-white">
                                    {
                                        selectedRegistration.organization
                                    }
                                </p>
                            </div>

                            <div className="rounded-xl bg-slate-50 p-4 dark:bg-[#102337]">
                                <p className="text-[10px] font-bold uppercase text-slate-400">
                                    Plan
                                </p>

                                <p className="mt-1 font-bold text-blue-600 dark:text-blue-400">
                                    {selectedRegistration.plan}
                                </p>
                            </div>

                            <div className="rounded-xl bg-slate-50 p-4 dark:bg-[#102337]">
                                <p className="text-[10px] font-bold uppercase text-slate-400">
                                    Contact Person
                                </p>

                                <p className="mt-1 font-semibold text-slate-900 dark:text-white">
                                    {
                                        selectedRegistration.contactPerson
                                    }
                                </p>
                            </div>

                            <div className="rounded-xl bg-slate-50 p-4 dark:bg-[#102337]">
                                <p className="text-[10px] font-bold uppercase text-slate-400">
                                    Students
                                </p>

                                <p className="mt-1 font-semibold text-slate-900 dark:text-white">
                                    {
                                        selectedRegistration.students
                                    }
                                </p>
                            </div>

                            <div className="rounded-xl bg-slate-50 p-4 dark:bg-[#102337]">
                                <div className="flex items-center gap-2">
                                    <Mail size={14} className="text-blue-500" />
                                    <p className="text-[10px] font-bold uppercase text-slate-400">
                                        Email
                                    </p>
                                </div>

                                <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-200">
                                    {selectedRegistration.email}
                                </p>
                            </div>

                            <div className="rounded-xl bg-slate-50 p-4 dark:bg-[#102337]">
                                <div className="flex items-center gap-2">
                                    <Phone size={14} className="text-teal-500" />
                                    <p className="text-[10px] font-bold uppercase text-slate-400">
                                        Phone
                                    </p>
                                </div>

                                <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-200">
                                    {selectedRegistration.phone}
                                </p>
                            </div>
                        </div>

                        {/* PAYMENT METHOD STATUS */}

                        {(selectedRegistration.paymentDetailsSent ||
                            selectedRegistration.qrSent ||
                            selectedRegistration.status === "Payment Sent" ||
                            selectedRegistration.status === "Payment Verified") && (
                            <div className="mx-5 mb-5 rounded-xl border border-blue-100 bg-blue-50 p-4 dark:border-blue-500/20 dark:bg-blue-500/10">
                                <div className="flex flex-wrap items-center gap-2">
                                    <CreditCard
                                        size={16}
                                        className="text-blue-600 dark:text-blue-400"
                                    />

                                    <p className="text-xs font-bold uppercase tracking-wide text-blue-700 dark:text-blue-300">
                                        Payment Method
                                    </p>
                                </div>

                                <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold">
                                    <span
                                        className={`rounded-full px-3 py-1 ${
                                            selectedRegistration.paymentDetailsSent
                                                ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400"
                                                : "bg-slate-100 text-slate-500 dark:bg-slate-700/40 dark:text-slate-400"
                                        }`}
                                    >
                                        {selectedRegistration.paymentDetailsSent
                                            ? "Bank Details Sent"
                                            : "Bank Details Not Sent"}
                                    </span>

                                    <span
                                        className={`rounded-full px-3 py-1 ${
                                            selectedRegistration.qrSent
                                                ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400"
                                                : "bg-slate-100 text-slate-500 dark:bg-slate-700/40 dark:text-slate-400"
                                        }`}
                                    >
                                        {selectedRegistration.qrSent
                                            ? "QR Code Sent"
                                            : "QR Code Not Sent"}
                                    </span>
                                </div>
                            </div>
                        )}

                        {selectedRegistration.status === "Access Ready" &&
                            generatedPassword && (
                                <div className="mx-5 mb-5 rounded-xl border border-violet-200 bg-violet-50 p-4 dark:border-violet-500/20 dark:bg-violet-500/10">
                                    <div className="flex items-center gap-2">
                                        <KeyRound
                                            size={16}
                                            className="text-violet-600 dark:text-violet-400"
                                        />
                                        <p className="text-xs font-bold uppercase tracking-wide text-violet-700 dark:text-violet-300">
                                            Generated Temporary Password
                                        </p>
                                    </div>

                                    <p className="mt-2 rounded-lg bg-white px-3 py-2 font-mono text-sm font-bold text-slate-900 shadow-sm dark:bg-[#07111f] dark:text-white">
                                        {generatedPassword}
                                    </p>

                                    <p className="mt-2 text-xs text-violet-700 dark:text-violet-300">
                                        Give this temporary password to the organization only after clicking "Give Organization Access".
                                    </p>
                                </div>
                            )}

                        {/* ACTIONS */}

                        <div className="flex flex-col gap-3 border-t border-slate-200 p-5 sm:flex-row sm:justify-end dark:border-[#1e334a]">

                            {selectedRegistration.status === "Pending" && (
                                <>
                                    <button
                                        onClick={handleReject}
                                        className="
                                            inline-flex items-center justify-center gap-2
                                            rounded-xl border border-rose-200 px-4 py-2.5
                                            text-sm font-bold text-rose-600
                                            hover:bg-rose-50
                                            dark:border-rose-500/20 dark:hover:bg-rose-500/10
                                        "
                                    >
                                        <XCircle size={16} />
                                        Reject
                                    </button>

                                    <button
                                        onClick={handleSendPaymentMethod}
                                        className="
                                            inline-flex items-center justify-center gap-2
                                            rounded-xl bg-gradient-to-r from-blue-600 to-teal-500
                                            px-5 py-2.5 text-sm font-bold text-white shadow-sm
                                            hover:from-blue-700 hover:to-teal-600
                                        "
                                    >
                                        <CreditCard size={16} />
                                        Open Payment Method
                                    </button>
                                </>
                            )}

                            {selectedRegistration.status === "Payment Sent" && (
                                <button
                                    onClick={handleVerifyPayment}
                                    className="
                                        inline-flex items-center justify-center gap-2
                                        rounded-xl bg-gradient-to-r from-blue-600 to-teal-500
                                        px-5 py-2.5 text-sm font-bold text-white shadow-sm
                                        hover:from-blue-700 hover:to-teal-600
                                    "
                                >
                                    <CheckCircle2 size={16} />
                                    Verify Payment
                                </button>
                            )}

                            {selectedRegistration.status === "Payment Verified" && (
                                <button
                                    onClick={handleGenerateAccess}
                                    className="
                                        inline-flex items-center justify-center gap-2
                                        rounded-xl bg-gradient-to-r from-blue-600 to-teal-500
                                        px-5 py-2.5 text-sm font-bold text-white shadow-sm
                                        hover:from-blue-700 hover:to-teal-600
                                    "
                                >
                                    <KeyRound size={16} />
                                    Generate Password
                                </button>
                            )}

                            {selectedRegistration.status === "Access Ready" && (
                                <button
                                    onClick={handleGrantAccess}
                                    className="
                                        inline-flex items-center justify-center gap-2
                                        rounded-xl bg-gradient-to-r from-blue-600 to-teal-500
                                        px-5 py-2.5 text-sm font-bold text-white shadow-sm
                                        hover:from-blue-700 hover:to-teal-600
                                    "
                                >
                                    <Send size={16} />
                                    Give Organization Access
                                </button>
                            )}

                            {selectedRegistration.status === "Approved" && (
                                <div className="flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-2.5 text-sm font-bold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                                    <CheckCircle2 size={17} />
                                    Access Granted
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Registrations;