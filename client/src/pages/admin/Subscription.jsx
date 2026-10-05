import { useMemo, useState } from "react";
import {
    CreditCard,
    CheckCircle,
    Clock,
    XCircle,
    TrendingUp,
    Search,
    MoreVertical,
    Eye,
    Pencil,
    Ban,
} from "lucide-react";

const Subscriptions = () => {
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");
    const [planFilter, setPlanFilter] = useState("All");
    const [openMenu, setOpenMenu] = useState(null);

    // =====================================================
    // SAMPLE STUDENT SUBSCRIPTION DATA
    // =====================================================

    const subscriptions = [
        {
            id: 1,
            studentName: "Aarav Sharma",
            email: "aarav.sharma@gmail.com",
            studentId: "STU-2026-001",
            plan: "Premium",
            price: "₹5,999",
            startDate: "01 Aug 2026",
            expiryDate: "01 Aug 2027",
            courses: 8,
            courseLimit: 10,
            status: "Active",
        },
        {
            id: 2,
            studentName: "Priya Verma",
            email: "priya.verma@gmail.com",
            studentId: "STU-2026-002",
            plan: "Standard",
            price: "₹3,999",
            startDate: "10 Aug 2026",
            expiryDate: "10 Aug 2027",
            courses: 6,
            courseLimit: 8,
            status: "Active",
        },
        {
            id: 3,
            studentName: "Rahul Singh",
            email: "rahul.singh@gmail.com",
            studentId: "STU-2026-003",
            plan: "Basic",
            price: "₹2,999",
            startDate: "05 Aug 2026",
            expiryDate: "05 Sep 2026",
            courses: 4,
            courseLimit: 5,
            status: "Expiring Soon",
        },
        {
            id: 4,
            studentName: "Ananya Gupta",
            email: "ananya.gupta@gmail.com",
            studentId: "STU-2026-004",
            plan: "Standard",
            price: "₹3,999",
            startDate: "15 Jul 2026",
            expiryDate: "15 Jul 2027",
            courses: 5,
            courseLimit: 8,
            status: "Active",
        },
        {
            id: 5,
            studentName: "Aditya Mishra",
            email: "aditya.mishra@gmail.com",
            studentId: "STU-2026-005",
            plan: "Basic",
            price: "₹2,999",
            startDate: "20 Jun 2026",
            expiryDate: "20 Jul 2026",
            courses: 3,
            courseLimit: 5,
            status: "Expired",
        },
        {
            id: 6,
            studentName: "Sneha Yadav",
            email: "sneha.yadav@gmail.com",
            studentId: "STU-2026-006",
            plan: "Premium",
            price: "₹5,999",
            startDate: "12 Aug 2026",
            expiryDate: "12 Aug 2027",
            courses: 9,
            courseLimit: 10,
            status: "Active",
        },
    ];

    // =====================================================
    // FILTER
    // =====================================================

    const filteredSubscriptions = useMemo(() => {
        return subscriptions.filter((subscription) => {
            const searchText = search.toLowerCase();

            const matchesSearch =
                subscription.studentName
                    .toLowerCase()
                    .includes(searchText) ||
                subscription.email
                    .toLowerCase()
                    .includes(searchText) ||
                subscription.studentId
                    .toLowerCase()
                    .includes(searchText) ||
                subscription.plan
                    .toLowerCase()
                    .includes(searchText);

            const matchesStatus =
                statusFilter === "All" ||
                subscription.status === statusFilter;

            const matchesPlan =
                planFilter === "All" ||
                subscription.plan === planFilter;

            return matchesSearch && matchesStatus && matchesPlan;
        });
    }, [search, statusFilter, planFilter]);

    // =====================================================
    // STATISTICS
    // =====================================================

    const totalSubscriptions = subscriptions.length;

    const activeSubscriptions = subscriptions.filter(
        (subscription) => subscription.status === "Active"
    ).length;

    const expiringSubscriptions = subscriptions.filter(
        (subscription) => subscription.status === "Expiring Soon"
    ).length;

    const expiredSubscriptions = subscriptions.filter(
        (subscription) => subscription.status === "Expired"
    ).length;

    // =====================================================
    // PLAN BADGE
    // =====================================================

    const getPlanStyle = (plan) => {
        if (plan === "Premium") {
            return "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400";
        }

        if (plan === "Standard") {
            return "bg-teal-50 text-teal-700 dark:bg-teal-500/10 dark:text-teal-400";
        }

        return "bg-slate-100 text-slate-600 dark:bg-slate-700/40 dark:text-slate-300";
    };

    // =====================================================
    // STATUS BADGE
    // =====================================================

    const getStatusStyle = (status) => {
        if (status === "Active") {
            return "bg-teal-50 text-teal-700 dark:bg-teal-500/10 dark:text-teal-400";
        }

        if (status === "Expiring Soon") {
            return "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400";
        }

        return "bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400";
    };

    // =====================================================
    // COURSE USAGE
    // =====================================================

    const getUsagePercentage = (courses, limit) => {
        return Math.round((courses / limit) * 100);
    };

    return (
        <div className="relative min-h-screen overflow-hidden bg-slate-50 px-4 py-6 text-slate-700 dark:bg-[#07111f] dark:text-slate-300 sm:px-6 lg:px-8">

            {/* =================================================
                BACKGROUND GLOW
            ================================================= */}

            <div className="pointer-events-none fixed -left-40 -top-40 h-125 w-125 rounded-full bg-blue-500/5 blur-[130px] dark:bg-blue-500/10" />

            <div className="pointer-events-none fixed -right-40 bottom-0 h-125 w-125 rounded-full bg-teal-500/[0.05] blur-[140px] dark:bg-teal-500/[0.08]" />

            <div className="relative z-10">

                {/* =================================================
                    HEADER
                ================================================= */}

                <div className="mb-8">
                    <p className="mb-1 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                        Administration
                    </p>

                    <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                        Subscriptions
                    </h1>

                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                        Manage student subscriptions, plans and billing status.
                    </p>
                </div>

                {/* =================================================
                    STATISTICS
                ================================================= */}

                <div className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

                    {/* TOTAL */}

                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">
                        <div className="flex items-center justify-between">

                            <div>
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                    Total Subscriptions
                                </p>

                                <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                                    {totalSubscriptions}
                                </h2>

                                <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
                                    Student subscriptions
                                </p>
                            </div>

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                                <CreditCard size={23} />
                            </div>

                        </div>
                    </div>

                    {/* ACTIVE */}

                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">
                        <div className="flex items-center justify-between">

                            <div>
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                    Active
                                </p>

                                <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                                    {activeSubscriptions}
                                </h2>

                                <p className="mt-1 text-xs text-teal-600 dark:text-teal-400">
                                    Currently active
                                </p>
                            </div>

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600 dark:bg-teal-500/10 dark:text-teal-400">
                                <CheckCircle size={23} />
                            </div>

                        </div>
                    </div>

                    {/* EXPIRING */}

                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">
                        <div className="flex items-center justify-between">

                            <div>
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                    Expiring Soon
                                </p>

                                <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                                    {expiringSubscriptions}
                                </h2>

                                <p className="mt-1 text-xs text-amber-600 dark:text-amber-400">
                                    Requires attention
                                </p>
                            </div>

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400">
                                <Clock size={23} />
                            </div>

                        </div>
                    </div>

                    {/* EXPIRED */}

                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">
                        <div className="flex items-center justify-between">

                            <div>
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                    Expired
                                </p>

                                <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                                    {expiredSubscriptions}
                                </h2>

                                <p className="mt-1 text-xs text-red-600 dark:text-red-400">
                                    Subscription ended
                                </p>
                            </div>

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400">
                                <XCircle size={23} />
                            </div>

                        </div>
                    </div>

                </div>

                {/* =================================================
                    SEARCH + FILTER
                ================================================= */}

                <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727] lg:flex-row lg:items-center lg:justify-between">

                    {/* SEARCH */}

                    <div className="relative w-full lg:max-w-md">

                        <Search
                            size={19}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500"
                        />

                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search student, ID or plan..."
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-800 outline-none placeholder:text-slate-400 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15 dark:border-[#1e334a] dark:bg-[#102337] dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/15"
                        />

                    </div>

                    {/* FILTERS */}

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                        <select
                            value={planFilter}
                            onChange={(e) => setPlanFilter(e.target.value)}
                            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-600 outline-none focus:border-blue-500 dark:border-[#1e334a] dark:bg-[#102337] dark:text-slate-300 dark:focus:border-blue-400"
                        >
                            <option value="All">All Plans</option>
                            <option value="Basic">Basic</option>
                            <option value="Standard">Standard</option>
                            <option value="Premium">Premium</option>
                        </select>

                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-600 outline-none focus:border-blue-500 dark:border-[#1e334a] dark:bg-[#102337] dark:text-slate-300 dark:focus:border-blue-400"
                        >
                            <option value="All">All Status</option>
                            <option value="Active">Active</option>
                            <option value="Expiring Soon">
                                Expiring Soon
                            </option>
                            <option value="Expired">Expired</option>
                        </select>

                    </div>
                </div>

                {/* =================================================
                    SUBSCRIPTIONS TABLE
                ================================================= */}

                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">

                    {/* TABLE HEADER */}

                    <div className="border-b border-slate-200 px-5 py-5 dark:border-[#1e334a] sm:px-6">

                        <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                            Student Subscription Details
                        </h2>

                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                            View and manage student subscription information.
                        </p>

                    </div>

                    {/* TABLE */}

                    <div className="overflow-x-auto">

                        <table className="w-full min-w-287.5">

                            <thead className="bg-slate-50 dark:bg-[#102337]">

                                <tr>

                                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Student
                                    </th>

                                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Plan
                                    </th>

                                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Billing
                                    </th>

                                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Courses
                                    </th>

                                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Expiry
                                    </th>

                                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Status
                                    </th>

                                    <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Action
                                    </th>

                                </tr>

                            </thead>

                            <tbody className="divide-y divide-slate-200 dark:divide-[#1e334a]">

                                {filteredSubscriptions.map((subscription) => {

                                    const usage = getUsagePercentage(
                                        subscription.courses,
                                        subscription.courseLimit
                                    );

                                    return (
                                        <tr
                                            key={subscription.id}
                                            className="transition-colors hover:bg-slate-50 dark:hover:bg-[#102337]/70"
                                        >

                                            {/* STUDENT */}

                                            <td className="px-6 py-5">

                                                <div className="flex items-center gap-3">

                                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-700 dark:bg-blue-500/10 dark:text-blue-400">
                                                        {subscription.studentName.charAt(
                                                            0
                                                        )}
                                                    </div>

                                                    <div>

                                                        <p className="font-semibold text-slate-900 dark:text-slate-100">
                                                            {subscription.studentName}
                                                        </p>

                                                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                                            {subscription.studentId}{" "}
                                                            •{" "}
                                                            {subscription.email}
                                                        </p>

                                                    </div>

                                                </div>

                                            </td>

                                            {/* PLAN */}

                                            <td className="px-6 py-5">

                                                <span
                                                    className={`inline-flex rounded-full px-3 py-1.5 text-xs font-semibold ${getPlanStyle(
                                                        subscription.plan
                                                    )}`}
                                                >
                                                    {subscription.plan}
                                                </span>

                                            </td>

                                            {/* BILLING */}

                                            <td className="px-6 py-5">

                                                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                                                    {subscription.price}
                                                </p>

                                                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                                    Monthly
                                                </p>

                                            </td>

                                            {/* COURSES */}

                                            <td className="px-6 py-5">

                                                <div className="w-36">

                                                    <div className="mb-1.5 flex items-center justify-between">

                                                        <span className="text-xs text-slate-600 dark:text-slate-300">
                                                            {subscription.courses}
                                                        </span>

                                                        <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                                                            {usage}%
                                                        </span>

                                                    </div>

                                                    <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">

                                                        <div
                                                            className="h-full rounded-full bg-linear-to-r from-blue-600 to-teal-500 transition-all dark:from-blue-500 dark:to-teal-400"
                                                            style={{
                                                                width: `${usage}%`,
                                                            }}
                                                        />

                                                    </div>

                                                    <p className="mt-1 text-[10px] text-slate-500 dark:text-slate-400">
                                                        Limit:{" "}
                                                        {subscription.courseLimit}
                                                    </p>

                                                </div>

                                            </td>

                                            {/* EXPIRY */}

                                            <td className="px-6 py-5">

                                                <p className="text-sm text-slate-700 dark:text-slate-300">
                                                    {subscription.expiryDate}
                                                </p>

                                                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                                    Started{" "}
                                                    {subscription.startDate}
                                                </p>

                                            </td>

                                            {/* STATUS */}

                                            <td className="px-6 py-5">

                                                <span
                                                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyle(
                                                        subscription.status
                                                    )}`}
                                                >

                                                    <span
                                                        className={`h-1.5 w-1.5 rounded-full ${subscription.status ===
                                                            "Active"
                                                            ? "bg-teal-500"
                                                            : subscription.status ===
                                                                "Expiring Soon"
                                                                ? "bg-amber-500"
                                                                : "bg-red-500"
                                                            }`}
                                                    />

                                                    {subscription.status}

                                                </span>

                                            </td>

                                            {/* ACTION */}

                                            <td className="relative px-6 py-5 text-right">

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setOpenMenu(
                                                            openMenu ===
                                                                subscription.id
                                                                ? null
                                                                : subscription.id
                                                        )
                                                    }
                                                    className="rounded-lg p-2 text-slate-400 transition hover:bg-blue-50 hover:text-blue-600 dark:text-slate-500 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
                                                >
                                                    <MoreVertical size={19} />
                                                </button>

                                                {/* DROPDOWN */}

                                                {openMenu === subscription.id && (
                                                    <div className="absolute right-6 top-14 z-20 w-40 overflow-hidden rounded-xl border border-slate-200 bg-white py-1 text-left shadow-xl dark:border-[#1e334a] dark:bg-[#0b1727]">

                                                        {/* VIEW */}

                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                setOpenMenu(null)
                                                            }
                                                            className="flex w-full items-center gap-2 px-4 py-2.5 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
                                                        >
                                                            <Eye size={15} />
                                                            View
                                                        </button>

                                                        {/* EDIT */}

                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                setOpenMenu(null)
                                                            }
                                                            className="flex w-full items-center gap-2 px-4 py-2.5 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
                                                        >
                                                            <Pencil size={15} />
                                                            Edit
                                                        </button>

                                                        {/* CANCEL */}

                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                setOpenMenu(null)
                                                            }
                                                            className="flex w-full items-center gap-2 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-500/10"
                                                        >
                                                            <Ban size={15} />
                                                            Cancel
                                                        </button>

                                                    </div>
                                                )}

                                            </td>

                                        </tr>
                                    );
                                })}

                            </tbody>

                        </table>

                    </div>

                    {/* =================================================
                        EMPTY STATE
                    ================================================= */}

                    {filteredSubscriptions.length === 0 && (
                        <div className="px-6 py-14 text-center">

                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                                <CreditCard size={26} />
                            </div>

                            <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">
                                No student subscriptions found
                            </h3>

                            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                Try changing your search or filters.
                            </p>

                        </div>
                    )}

                </div>

                {/* =================================================
                    BOTTOM SUMMARY
                ================================================= */}

                <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">

                    {/* CURRENT PLAN */}

                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                    Student Current Plan
                                </p>

                                <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                                    Standard
                                </h3>

                                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                                    ₹3,999 / month
                                </p>

                            </div>

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                                <CreditCard size={24} />
                            </div>

                        </div>

                        <div className="mt-5">

                            <div className="mb-2 flex justify-between">

                                <span className="text-xs text-slate-600 dark:text-slate-300">
                                    Course usage
                                </span>

                                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                                    62%
                                </span>

                            </div>

                            <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">

                                <div className="h-full w-[62%] rounded-full bg-linear-to-r from-blue-600 to-teal-500 dark:from-blue-500 dark:to-teal-400" />

                            </div>

                        </div>

                    </div>

                    {/* BILLING */}

                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                    Next Billing Date
                                </p>

                                <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                                    30 Sep 2026
                                </h3>

                                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                                    Automatic renewal enabled
                                </p>

                            </div>

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600 dark:bg-teal-500/10 dark:text-teal-400">
                                <TrendingUp size={24} />
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Subscriptions;