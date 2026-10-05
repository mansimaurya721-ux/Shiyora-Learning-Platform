import { useState } from "react";
import {
    CreditCard,
    Search,
    Filter,
    MoreVertical,
    CheckCircle,
    Clock,
    XCircle,
    TrendingUp,
    Users,
    Settings2,
    Plus,
    Trash2,
    Save,
    RotateCcw,
    Globe2,
    X,
} from "lucide-react";

const DEFAULT_PLANS = [
    {
        id: "basic",
        name: "Basic",
        price: "7999",
        billing: "Monthly",
        description: "For small institutes getting started with Shiyora.",
        isPublic: true,
        features: [
            "Course management",
            "Up to 250 students",
            "Basic analytics",
            "Email support",
        ],
    },
    {
        id: "professional",
        name: "Professional",
        price: "14999",
        billing: "Monthly",
        description: "For growing organizations that need more control.",
        isPublic: true,
        features: [
            "Everything in Basic",
            "Up to 1,000 students",
            "Advanced analytics",
            "Quizzes & assessments",
            "Priority support",
        ],
    },
    {
        id: "enterprise",
        name: "Enterprise",
        price: "24999",
        billing: "Monthly",
        description: "For large organizations with advanced LMS needs.",
        isPublic: true,
        features: [
            "Everything in Professional",
            "Custom student capacity",
            "Advanced reports",
            "Dedicated support",
            "Custom organization setup",
        ],
    },
];

const clonePlans = (plans) =>
    plans.map((plan) => ({
        ...plan,
        features: [...plan.features],
    }));

const Subscriptions = () => {
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");

    const [plans, setPlans] = useState(() => {
        try {
            const savedPlans = localStorage.getItem("shiyoraPublicPlans");
            return savedPlans ? JSON.parse(savedPlans) : DEFAULT_PLANS;
        } catch {
            return DEFAULT_PLANS;
        }
    });

    const [editingPlans, setEditingPlans] = useState([]);
    const [showPlanModal, setShowPlanModal] = useState(false);
    const [planSaved, setPlanSaved] = useState(false);

    const subscriptions = [
        {
            id: "SUB-001",
            organization: "Bright Future Academy",
            plan: "Enterprise",
            users: 850,
            amount: "₹24,999",
            billing: "Monthly",
            startDate: "01 Aug 2026",
            nextBilling: "01 Sep 2026",
            status: "Active",
        },
        {
            id: "SUB-002",
            organization: "TechVision Institute",
            plan: "Professional",
            users: 620,
            amount: "₹14,999",
            billing: "Monthly",
            startDate: "05 Aug 2026",
            nextBilling: "05 Sep 2026",
            status: "Active",
        },
        {
            id: "SUB-003",
            organization: "SkillHub Learning",
            plan: "Basic",
            users: 430,
            amount: "₹7,999",
            billing: "Monthly",
            startDate: "10 Aug 2026",
            nextBilling: "10 Sep 2026",
            status: "Pending",
        },
        {
            id: "SUB-004",
            organization: "Knowledge Point",
            plan: "Professional",
            users: 310,
            amount: "₹14,999",
            billing: "Monthly",
            startDate: "12 Aug 2026",
            nextBilling: "12 Sep 2026",
            status: "Active",
        },
        {
            id: "SUB-005",
            organization: "NextGen Academy",
            plan: "Basic",
            users: 180,
            amount: "₹7,999",
            billing: "Monthly",
            startDate: "15 Jul 2026",
            nextBilling: "-",
            status: "Expired",
        },
    ];

    // ============================================================
    // FILTER
    // ============================================================

    const filteredSubscriptions = subscriptions.filter((subscription) => {
        const searchValue = search.toLowerCase().trim();

        const matchesSearch =
            subscription.organization.toLowerCase().includes(searchValue) ||
            subscription.id.toLowerCase().includes(searchValue) ||
            subscription.plan.toLowerCase().includes(searchValue);

        const matchesStatus =
            statusFilter === "All" ||
            subscription.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

    // ============================================================
    // STATUS STYLE
    // ============================================================

    const getStatusStyle = (status) => {
        if (status === "Active") {
            return `
                bg-emerald-50
                text-emerald-700
                border
                border-emerald-200
                dark:bg-emerald-500/10
                dark:text-emerald-400
                dark:border-emerald-500/20
            `;
        }

        if (status === "Pending") {
            return `
                bg-amber-50
                text-amber-700
                border
                border-amber-200
                dark:bg-amber-500/10
                dark:text-amber-400
                dark:border-amber-500/20
            `;
        }

        return `
            bg-red-50
            text-red-700
            border
            border-red-200
            dark:bg-red-500/10
            dark:text-red-400
            dark:border-red-500/20
        `;
    };

    // ============================================================
    // STATUS ICON
    // ============================================================

    const getStatusIcon = (status) => {
        if (status === "Active") {
            return <CheckCircle size={14} />;
        }

        if (status === "Pending") {
            return <Clock size={14} />;
        }

        return <XCircle size={14} />;
    };

    // ============================================================
    // PLAN STYLE
    // ============================================================

    const getPlanStyle = (plan) => {
        if (plan === "Enterprise") {
            return `
                border-teal-200
                bg-teal-50
                text-teal-700
                dark:border-teal-500/20
                dark:bg-teal-500/10
                dark:text-teal-400
            `;
        }

        if (plan === "Professional") {
            return `
                border-blue-200
                bg-blue-50
                text-blue-700
                dark:border-blue-500/20
                dark:bg-blue-500/10
                dark:text-blue-400
            `;
        }

        return `
            border-slate-200
            bg-slate-100
            text-slate-600
            dark:border-slate-700
            dark:bg-slate-800
            dark:text-slate-300
        `;
    };

    // ============================================================
    // PUBLIC PLAN MANAGEMENT
    // ============================================================

    const openPlanManager = () => {
        setEditingPlans(clonePlans(plans));
        setPlanSaved(false);
        setShowPlanModal(true);
    };

    const updatePlan = (planId, field, value) => {
        setEditingPlans((previous) =>
            previous.map((plan) =>
                plan.id === planId
                    ? { ...plan, [field]: value }
                    : plan
            )
        );
        setPlanSaved(false);
    };

    const addFeature = (planId) => {
        setEditingPlans((previous) =>
            previous.map((plan) =>
                plan.id === planId
                    ? { ...plan, features: [...plan.features, "New feature"] }
                    : plan
            )
        );
        setPlanSaved(false);
    };

    const updateFeature = (planId, index, value) => {
        setEditingPlans((previous) =>
            previous.map((plan) => {
                if (plan.id !== planId) return plan;
                const nextFeatures = [...plan.features];
                nextFeatures[index] = value;
                return { ...plan, features: nextFeatures };
            })
        );
        setPlanSaved(false);
    };

    const removeFeature = (planId, index) => {
        setEditingPlans((previous) =>
            previous.map((plan) =>
                plan.id === planId
                    ? {
                        ...plan,
                        features: plan.features.filter((_, i) => i !== index),
                    }
                    : plan
            )
        );
        setPlanSaved(false);
    };

    const addPlan = () => {
        setEditingPlans((previous) => [
            ...previous,
            {
                id: `plan-${Date.now()}`,
                name: "New Plan",
                price: "0",
                billing: "Monthly",
                description: "Describe this plan.",
                isPublic: true,
                features: ["New feature"],
            },
        ]);
        setPlanSaved(false);
    };

    const removePlan = (planId) => {
        if (editingPlans.length === 1) {
            alert("At least one plan must remain.");
            return;
        }

        setEditingPlans((previous) =>
            previous.filter((plan) => plan.id !== planId)
        );
        setPlanSaved(false);
    };

    const savePlans = () => {
        try {
            setPlans(clonePlans(editingPlans));
            localStorage.setItem(
                "shiyoraPublicPlans",
                JSON.stringify(editingPlans)
            );
            window.dispatchEvent(new CustomEvent("shiyora:plans-updated"));
            setPlanSaved(true);
        } catch (error) {
            console.error("Unable to save Shiyora plans:", error);
            alert("Unable to save plans in this browser.");
        }
    };

    const resetPlans = () => {
        const confirmed = window.confirm(
            "Reset all plans and features to the Shiyora defaults?"
        );
        if (!confirmed) return;
        setEditingPlans(clonePlans(DEFAULT_PLANS));
        setPlanSaved(false);
    };

    // ============================================================
    // RETURN
    // ============================================================

    return (
        <main
            className="
                relative
                min-h-screen
                overflow-hidden

                bg-slate-50
                text-slate-700

                px-4
                py-6

                transition-colors
                duration-300

                dark:bg-[#07111f]
                dark:text-slate-300

                sm:px-6
                lg:px-8
            "
        >
            {/* =====================================================
                BACKGROUND DECORATION
            ====================================================== */}

            <div
                className="
                    pointer-events-none
                    fixed
                    -left-40
                    -top-40

                    h-[500px]
                    w-[500px]

                    rounded-full

                    bg-blue-500/[0.04]

                    blur-[130px]

                    dark:bg-blue-500/[0.06]
                "
            />

            <div
                className="
                    pointer-events-none
                    fixed
                    -right-40
                    bottom-0

                    h-[500px]
                    w-[500px]

                    rounded-full

                    bg-teal-500/[0.04]

                    blur-[140px]

                    dark:bg-teal-500/[0.06]
                "
            />

            {/* =====================================================
                CONTENT
            ====================================================== */}

            <div className="relative z-10">

                {/* =================================================
                    HEADER
                ================================================== */}

                <div
                    className="
                        mb-8
                        flex
                        flex-col
                        gap-5

                        md:flex-row
                        md:items-end
                        md:justify-between
                    "
                >
                    <div>
                        <p
                            className="
                                mb-1

                                text-[10px]
                                font-semibold
                                uppercase
                                tracking-[0.2em]

                                text-blue-600

                                dark:text-teal-400
                            "
                        >
                            Administration
                        </p>

                        <h1
                            className="
                                text-3xl
                                font-bold
                                tracking-tight

                                text-slate-900

                                dark:text-white

                                md:text-4xl
                            "
                        >
                            Subscriptions
                        </h1>

                        <p
                            className="
                                mt-2
                                max-w-xl

                                text-sm
                                leading-relaxed

                                text-slate-500

                                dark:text-slate-400
                            "
                        >
                            Manage Shiyora LMS organization subscriptions
                            and billing plans.
                        </p>
                    </div>

                    {/* MANAGE PLANS */}

                    <button
                        type="button"
                        onClick={openPlanManager}
                        className="
                            flex
                            items-center
                            justify-center
                            gap-2

                            rounded-xl

                            bg-gradient-to-r
                            from-blue-600
                            to-teal-500

                            px-5
                            py-3

                            text-sm
                            font-semibold
                            text-white

                            shadow-lg
                            shadow-blue-500/20

                            transition-all
                            duration-300

                            hover:-translate-y-0.5
                            hover:from-blue-700
                            hover:to-teal-600

                            dark:shadow-blue-500/10
                        "
                    >
                        <CreditCard size={18} />

                        Manage Plans
                    </button>
                </div>

                {/* =================================================
                    SUMMARY CARDS
                ================================================== */}

                <div
                    className="
                        mb-6

                        grid
                        grid-cols-1
                        gap-4

                        sm:grid-cols-2
                        xl:grid-cols-4
                    "
                >

                    {/* ACTIVE */}

                    <div
                        className="
                            rounded-2xl

                            border
                            border-slate-200

                            bg-white

                            p-5

                            shadow-sm

                            transition-all
                            duration-300

                            hover:-translate-y-1
                            hover:border-teal-200
                            hover:shadow-md

                            dark:border-[#1e334a]
                            dark:bg-[#0b1727]

                            dark:hover:border-teal-500/30
                        "
                    >
                        <div className="flex items-center justify-between">

                            <div>
                                <p
                                    className="
                                        text-xs
                                        text-slate-500

                                        dark:text-slate-400
                                    "
                                >
                                    Active Subscriptions
                                </p>

                                <h2
                                    className="
                                        mt-2

                                        text-2xl
                                        font-bold

                                        text-slate-900

                                        dark:text-white
                                    "
                                >
                                    96
                                </h2>

                                <p
                                    className="
                                        mt-1
                                        flex
                                        items-center
                                        gap-1

                                        text-[11px]
                                        font-medium

                                        text-emerald-600

                                        dark:text-emerald-400
                                    "
                                >
                                    <TrendingUp size={13} />
                                    +12.4%
                                </p>
                            </div>

                            <div
                                className="
                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center

                                    rounded-xl

                                    border
                                    border-teal-200

                                    bg-teal-50

                                    text-teal-600

                                    dark:border-teal-500/20
                                    dark:bg-teal-500/10
                                    dark:text-teal-400
                                "
                            >
                                <CheckCircle size={22} />
                            </div>
                        </div>
                    </div>

                    {/* PENDING */}

                    <div
                        className="
                            rounded-2xl

                            border
                            border-slate-200

                            bg-white

                            p-5

                            shadow-sm

                            transition-all
                            duration-300

                            hover:-translate-y-1
                            hover:border-amber-200
                            hover:shadow-md

                            dark:border-[#1e334a]
                            dark:bg-[#0b1727]

                            dark:hover:border-amber-500/30
                        "
                    >
                        <div className="flex items-center justify-between">

                            <div>
                                <p
                                    className="
                                        text-xs
                                        text-slate-500

                                        dark:text-slate-400
                                    "
                                >
                                    Pending
                                </p>

                                <h2
                                    className="
                                        mt-2

                                        text-2xl
                                        font-bold

                                        text-slate-900

                                        dark:text-white
                                    "
                                >
                                    8
                                </h2>

                                <p
                                    className="
                                        mt-1

                                        text-[11px]
                                        font-medium

                                        text-amber-600

                                        dark:text-amber-400
                                    "
                                >
                                    Awaiting activation
                                </p>
                            </div>

                            <div
                                className="
                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center

                                    rounded-xl

                                    border
                                    border-amber-200

                                    bg-amber-50

                                    text-amber-600

                                    dark:border-amber-500/20
                                    dark:bg-amber-500/10
                                    dark:text-amber-400
                                "
                            >
                                <Clock size={22} />
                            </div>
                        </div>
                    </div>

                    {/* EXPIRED */}

                    <div
                        className="
                            rounded-2xl

                            border
                            border-slate-200

                            bg-white

                            p-5

                            shadow-sm

                            transition-all
                            duration-300

                            hover:-translate-y-1
                            hover:border-red-200
                            hover:shadow-md

                            dark:border-[#1e334a]
                            dark:bg-[#0b1727]

                            dark:hover:border-red-500/30
                        "
                    >
                        <div className="flex items-center justify-between">

                            <div>
                                <p
                                    className="
                                        text-xs
                                        text-slate-500

                                        dark:text-slate-400
                                    "
                                >
                                    Expired
                                </p>

                                <h2
                                    className="
                                        mt-2

                                        text-2xl
                                        font-bold

                                        text-slate-900

                                        dark:text-white
                                    "
                                >
                                    12
                                </h2>

                                <p
                                    className="
                                        mt-1

                                        text-[11px]
                                        font-medium

                                        text-red-600

                                        dark:text-red-400
                                    "
                                >
                                    Need renewal
                                </p>
                            </div>

                            <div
                                className="
                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center

                                    rounded-xl

                                    border
                                    border-red-200

                                    bg-red-50

                                    text-red-600

                                    dark:border-red-500/20
                                    dark:bg-red-500/10
                                    dark:text-red-400
                                "
                            >
                                <XCircle size={22} />
                            </div>
                        </div>
                    </div>

                    {/* REVENUE */}

                    <div
                        className="
                            rounded-2xl

                            border
                            border-slate-200

                            bg-white

                            p-5

                            shadow-sm

                            transition-all
                            duration-300

                            hover:-translate-y-1
                            hover:border-blue-200
                            hover:shadow-md

                            dark:border-[#1e334a]
                            dark:bg-[#0b1727]

                            dark:hover:border-blue-500/30
                        "
                    >
                        <div className="flex items-center justify-between">

                            <div>
                                <p
                                    className="
                                        text-xs
                                        text-slate-500

                                        dark:text-slate-400
                                    "
                                >
                                    Monthly Revenue
                                </p>

                                <h2
                                    className="
                                        mt-2

                                        text-2xl
                                        font-bold

                                        text-slate-900

                                        dark:text-white
                                    "
                                >
                                    ₹2.18L
                                </h2>

                                <p
                                    className="
                                        mt-1
                                        flex
                                        items-center
                                        gap-1

                                        text-[11px]
                                        font-medium

                                        text-emerald-600

                                        dark:text-emerald-400
                                    "
                                >
                                    <TrendingUp size={13} />
                                    +24.6%
                                </p>
                            </div>

                            <div
                                className="
                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center

                                    rounded-xl

                                    border
                                    border-blue-200

                                    bg-blue-50

                                    text-blue-600

                                    dark:border-blue-500/20
                                    dark:bg-blue-500/10
                                    dark:text-blue-400
                                "
                            >
                                <CreditCard size={22} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* =================================================
                    SUBSCRIPTION SECTION
                ================================================== */}

                <section
                    className="
                        overflow-hidden

                        rounded-2xl

                        border
                        border-slate-200

                        bg-white

                        shadow-sm

                        dark:border-[#1e334a]
                        dark:bg-[#0b1727]
                    "
                >

                    {/* SECTION HEADER */}

                    <div
                        className="
                            flex
                            flex-col
                            gap-4

                            border-b
                            border-slate-200

                            bg-slate-50

                            p-6

                            xl:flex-row
                            xl:items-center
                            xl:justify-between

                            dark:border-[#1e334a]
                            dark:bg-[#0d1b2d]
                        "
                    >

                        <div>

                            <div className="flex items-center gap-2">

                                <span
                                    className="
                                        h-2
                                        w-2

                                        rounded-full

                                        bg-blue-600

                                        dark:bg-teal-400
                                    "
                                />

                                <p
                                    className="
                                        text-[10px]
                                        font-semibold
                                        uppercase
                                        tracking-[0.18em]

                                        text-blue-600

                                        dark:text-teal-400
                                    "
                                >
                                    Billing
                                </p>

                            </div>

                            <h2
                                className="
                                    mt-1

                                    text-xl
                                    font-semibold

                                    text-slate-900

                                    dark:text-white
                                "
                            >
                                All Subscriptions
                            </h2>

                            <p
                                className="
                                    mt-1
                                    text-xs

                                    text-slate-500

                                    dark:text-slate-400
                                "
                            >
                                View and manage organization subscription plans.
                            </p>

                        </div>

                        {/* SEARCH + FILTER */}

                        <div className="flex flex-col gap-3 sm:flex-row">

                            {/* SEARCH */}

                            <div className="relative">

                                <Search
                                    size={17}
                                    className="
                                        absolute
                                        left-3
                                        top-1/2
                                        -translate-y-1/2

                                        text-slate-400

                                        dark:text-slate-500
                                    "
                                />

                                <input
                                    type="text"
                                    placeholder="Search subscriptions..."
                                    value={search}
                                    onChange={(e) =>
                                        setSearch(e.target.value)
                                    }
                                    className="
                                        w-full

                                        rounded-xl

                                        border
                                        border-slate-200

                                        bg-white

                                        py-2.5
                                        pl-10
                                        pr-4

                                        text-sm

                                        text-slate-900

                                        outline-none

                                        placeholder:text-slate-400

                                        transition

                                        focus:border-blue-500
                                        focus:ring-2
                                        focus:ring-blue-500/10

                                        sm:w-64

                                        dark:border-[#1e334a]
                                        dark:bg-[#091725]

                                        dark:text-white

                                        dark:placeholder:text-slate-500

                                        dark:focus:border-teal-400
                                        dark:focus:ring-teal-400/10
                                    "
                                />

                            </div>

                            {/* FILTER */}

                            <div className="relative">

                                <Filter
                                    size={16}
                                    className="
                                        absolute
                                        left-3
                                        top-1/2
                                        -translate-y-1/2

                                        text-slate-400

                                        dark:text-slate-500
                                    "
                                />

                                <select
                                    value={statusFilter}
                                    onChange={(e) =>
                                        setStatusFilter(e.target.value)
                                    }
                                    className="
                                        appearance-none

                                        rounded-xl

                                        border
                                        border-slate-200

                                        bg-white

                                        py-2.5
                                        pl-9
                                        pr-9

                                        text-sm

                                        text-slate-700

                                        outline-none

                                        transition

                                        focus:border-blue-500
                                        focus:ring-2
                                        focus:ring-blue-500/10

                                        dark:border-[#1e334a]
                                        dark:bg-[#091725]

                                        dark:text-slate-200

                                        dark:focus:border-teal-400
                                        dark:focus:ring-teal-400/10
                                    "
                                >

                                    <option value="All">
                                        All Status
                                    </option>

                                    <option value="Active">
                                        Active
                                    </option>

                                    <option value="Pending">
                                        Pending
                                    </option>

                                    <option value="Expired">
                                        Expired
                                    </option>

                                </select>

                            </div>

                        </div>

                    </div>

                    {/* =================================================
                        TABLE
                    ================================================== */}

                    <div className="overflow-x-auto">

                        <table className="w-full min-w-[1050px]">

                            <thead
                                className="
                                    border-b
                                    border-slate-200

                                    bg-slate-50

                                    dark:border-[#1e334a]
                                    dark:bg-[#0d1b2d]
                                "
                            >

                                <tr>

                                    {[
                                        "Subscription",
                                        "Plan",
                                        "Users",
                                        "Amount",
                                        "Next Billing",
                                        "Status",
                                        "Action",
                                    ].map((heading, index) => (
                                        <th
                                            key={heading}
                                            className={`
                                                px-6
                                                py-4

                                                text-left

                                                text-[10px]
                                                font-semibold
                                                uppercase
                                                tracking-wider

                                                text-slate-500

                                                dark:text-slate-400

                                                ${index === 6
                                                    ? "text-right"
                                                    : ""
                                                }
                                            `}
                                        >
                                            {heading}
                                        </th>
                                    ))}

                                </tr>

                            </thead>

                            <tbody
                                className="
                                    divide-y
                                    divide-slate-100

                                    dark:divide-[#1e334a]
                                "
                            >

                                {filteredSubscriptions.length > 0 ? (

                                    filteredSubscriptions.map(
                                        (subscription) => (

                                            <tr
                                                key={subscription.id}
                                                className="
                                                    transition-colors

                                                    hover:bg-slate-50

                                                    dark:hover:bg-[#0d1b2d]
                                                "
                                            >

                                                {/* ORGANIZATION */}

                                                <td className="px-6 py-5">

                                                    <div
                                                        className="
                                                            flex
                                                            items-center
                                                            gap-3
                                                        "
                                                    >

                                                        <div
                                                            className="
                                                                flex
                                                                h-11
                                                                w-11
                                                                shrink-0
                                                                items-center
                                                                justify-center

                                                                rounded-xl

                                                                border
                                                                border-blue-200

                                                                bg-blue-50

                                                                text-sm
                                                                font-bold

                                                                text-blue-700

                                                                dark:border-blue-500/20
                                                                dark:bg-blue-500/10
                                                                dark:text-blue-400
                                                            "
                                                        >
                                                            {subscription.organization.charAt(
                                                                0
                                                            )}
                                                        </div>

                                                        <div>

                                                            <p
                                                                className="
                                                                    text-sm
                                                                    font-semibold

                                                                    text-slate-900

                                                                    dark:text-white
                                                                "
                                                            >
                                                                {
                                                                    subscription.organization
                                                                }
                                                            </p>

                                                            <p
                                                                className="
                                                                    mt-1

                                                                    text-[10px]

                                                                    text-slate-400

                                                                    dark:text-slate-500
                                                                "
                                                            >
                                                                {
                                                                    subscription.id
                                                                }
                                                            </p>

                                                        </div>

                                                    </div>

                                                </td>

                                                {/* PLAN */}

                                                <td className="px-6 py-5">

                                                    <span
                                                        className={`
                                                            inline-flex

                                                            rounded-lg

                                                            border

                                                            px-3
                                                            py-1

                                                            text-[9px]
                                                            font-semibold
                                                            uppercase
                                                            tracking-wider

                                                            ${getPlanStyle(
                                                            subscription.plan
                                                        )}
                                                        `}
                                                    >
                                                        {
                                                            subscription.plan
                                                        }
                                                    </span>

                                                    <p
                                                        className="
                                                            mt-1
                                                            text-xs

                                                            text-slate-400

                                                            dark:text-slate-500
                                                        "
                                                    >
                                                        {
                                                            subscription.billing
                                                        }
                                                    </p>

                                                </td>

                                                {/* USERS */}

                                                <td className="px-6 py-5">

                                                    <div
                                                        className="
                                                            flex
                                                            items-center
                                                            gap-2

                                                            text-xs

                                                            text-slate-600

                                                            dark:text-slate-300
                                                        "
                                                    >
                                                        <Users
                                                            size={15}
                                                            className="
                                                                text-slate-400
                                                                dark:text-slate-500
                                                            "
                                                        />

                                                        {
                                                            subscription.users
                                                        }
                                                    </div>

                                                </td>

                                                {/* AMOUNT */}

                                                <td className="px-6 py-5">

                                                    <p
                                                        className="
                                                            text-sm
                                                            font-semibold

                                                            text-slate-900

                                                            dark:text-white
                                                        "
                                                    >
                                                        {
                                                            subscription.amount
                                                        }
                                                    </p>

                                                    <p
                                                        className="
                                                            mt-1
                                                            text-xs

                                                            text-slate-400

                                                            dark:text-slate-500
                                                        "
                                                    >
                                                        per month
                                                    </p>

                                                </td>

                                                {/* NEXT BILLING */}

                                                <td
                                                    className="
                                                        px-6
                                                        py-5

                                                        text-xs

                                                        text-slate-600

                                                        dark:text-slate-300
                                                    "
                                                >
                                                    {
                                                        subscription.nextBilling
                                                    }
                                                </td>

                                                {/* STATUS */}

                                                <td className="px-6 py-5">

                                                    <span
                                                        className={`
                                                            inline-flex
                                                            items-center
                                                            gap-1.5

                                                            rounded-full

                                                            px-3
                                                            py-1

                                                            text-xs
                                                            font-semibold

                                                            ${getStatusStyle(
                                                            subscription.status
                                                        )}
                                                        `}
                                                    >

                                                        {getStatusIcon(
                                                            subscription.status
                                                        )}

                                                        {
                                                            subscription.status
                                                        }

                                                    </span>

                                                </td>

                                                {/* ACTION */}

                                                <td
                                                    className="
                                                        px-6
                                                        py-5

                                                        text-right
                                                    "
                                                >

                                                    <button
                                                        type="button"
                                                        className="
                                                            rounded-lg

                                                            p-2

                                                            text-slate-400

                                                            transition

                                                            hover:bg-slate-100
                                                            hover:text-slate-700

                                                            dark:text-slate-500

                                                            dark:hover:bg-slate-800
                                                            dark:hover:text-slate-200
                                                        "
                                                    >
                                                        <MoreVertical
                                                            size={18}
                                                        />
                                                    </button>

                                                </td>

                                            </tr>

                                        )
                                    )

                                ) : (

                                    <tr>

                                        <td
                                            colSpan="7"
                                            className="
                                                px-6
                                                py-14
                                                text-center
                                            "
                                        >

                                            <div
                                                className="
                                                    mx-auto

                                                    flex
                                                    h-14
                                                    w-14
                                                    items-center
                                                    justify-center

                                                    rounded-2xl

                                                    border
                                                    border-blue-200

                                                    bg-blue-50

                                                    text-blue-600

                                                    dark:border-blue-500/20
                                                    dark:bg-blue-500/10
                                                    dark:text-blue-400
                                                "
                                            >
                                                <CreditCard size={26} />
                                            </div>

                                            <p
                                                className="
                                                    mt-4

                                                    font-semibold

                                                    text-slate-900

                                                    dark:text-white
                                                "
                                            >
                                                No subscriptions found
                                            </p>

                                            <p
                                                className="
                                                    mt-1
                                                    text-sm

                                                    text-slate-500

                                                    dark:text-slate-400
                                                "
                                            >
                                                Try changing your search or
                                                filter.
                                            </p>

                                        </td>

                                    </tr>

                                )}

                            </tbody>

                        </table>

                    </div>

                    {/* =================================================
                        TABLE FOOTER
                    ================================================== */}

                    <div
                        className="
                            flex
                            flex-col
                            gap-2

                            border-t
                            border-slate-200

                            bg-slate-50

                            px-6
                            py-4

                            sm:flex-row
                            sm:items-center
                            sm:justify-between

                            dark:border-[#1e334a]
                            dark:bg-[#0d1b2d]
                        "
                    >

                        <p
                            className="
                                text-xs

                                text-slate-500

                                dark:text-slate-400
                            "
                        >
                            Showing{" "}

                            <span
                                className="
                                    font-semibold

                                    text-slate-700

                                    dark:text-slate-200
                                "
                            >
                                {filteredSubscriptions.length}
                            </span>{" "}

                            subscriptions
                        </p>

                        <p
                            className="
                                text-[9px]
                                font-medium
                                uppercase
                                tracking-wider

                                text-slate-400

                                dark:text-slate-500
                            "
                        >
                            Shiyora Billing Management
                        </p>

                    </div>

                </section>

                {/* =================================================
                    MANAGE PUBLIC PLANS MODAL
                ================================================== */}

                {showPlanModal && (
                    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm">
                        <div className="max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-[#1e334a] dark:bg-[#0b1727]">

                            {/* HEADER */}
                            <div className="flex items-center justify-between gap-4 border-b border-slate-200 p-5 dark:border-[#1e334a]">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                                            <Settings2 size={18} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-teal-400">
                                                Public Subscription
                                            </p>
                                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                                                Manage Plans & Features
                                            </h2>
                                        </div>
                                    </div>
                                    <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                                        Edit the plans that will later be shown on the public Shiyora subscription page.
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => setShowPlanModal(false)}
                                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-[#102337] dark:hover:text-white"
                                    aria-label="Close plan manager"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* BODY */}
                            <div className="max-h-[68vh] overflow-y-auto p-5">
                                {planSaved && (
                                    <div className="mb-4 flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-xs font-bold text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400">
                                        <CheckCircle size={15} />
                                        Plans saved. Public page can use this plan data.
                                    </div>
                                )}

                                <div className="grid gap-5 xl:grid-cols-3">
                                    {editingPlans.map((plan, planIndex) => (
                                        <div
                                            key={plan.id}
                                            className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-[#1e334a] dark:bg-[#102337]"
                                        >
                                            <div className="flex items-start justify-between gap-3">
                                                <div>
                                                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                                                        Plan {planIndex + 1}
                                                    </p>
                                                    <h3 className="mt-1 text-base font-bold text-slate-900 dark:text-white">
                                                        {plan.name || "Untitled Plan"}
                                                    </h3>
                                                </div>

                                                <button
                                                    type="button"
                                                    onClick={() => removePlan(plan.id)}
                                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-500/10 dark:hover:text-rose-400"
                                                    title="Delete plan"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>

                                            <div className="mt-4 space-y-3">
                                                <div>
                                                    <label className="mb-1.5 block text-[11px] font-bold text-slate-500 dark:text-slate-400">
                                                        Plan Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        value={plan.name}
                                                        onChange={(e) =>
                                                            updatePlan(plan.id, "name", e.target.value)
                                                        }
                                                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-semibold text-slate-900 outline-none focus:border-blue-500 dark:border-[#1e334a] dark:bg-[#07111f] dark:text-white"
                                                    />
                                                </div>

                                                <div className="grid grid-cols-2 gap-3">
                                                    <div>
                                                        <label className="mb-1.5 block text-[11px] font-bold text-slate-500 dark:text-slate-400">
                                                            Price (₹)
                                                        </label>
                                                        <input
                                                            type="number"
                                                            min="0"
                                                            value={plan.price}
                                                            onChange={(e) =>
                                                                updatePlan(plan.id, "price", e.target.value)
                                                            }
                                                            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-semibold text-slate-900 outline-none focus:border-blue-500 dark:border-[#1e334a] dark:bg-[#07111f] dark:text-white"
                                                        />
                                                    </div>

                                                    <div>
                                                        <label className="mb-1.5 block text-[11px] font-bold text-slate-500 dark:text-slate-400">
                                                            Billing
                                                        </label>
                                                        <select
                                                            value={plan.billing}
                                                            onChange={(e) =>
                                                                updatePlan(plan.id, "billing", e.target.value)
                                                            }
                                                            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-semibold text-slate-900 outline-none focus:border-blue-500 dark:border-[#1e334a] dark:bg-[#07111f] dark:text-white"
                                                        >
                                                            <option value="Monthly">Monthly</option>
                                                            <option value="Yearly">Yearly</option>
                                                            <option value="Custom">Custom</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="mb-1.5 block text-[11px] font-bold text-slate-500 dark:text-slate-400">
                                                        Description
                                                    </label>
                                                    <textarea
                                                        rows="3"
                                                        value={plan.description}
                                                        onChange={(e) =>
                                                            updatePlan(plan.id, "description", e.target.value)
                                                        }
                                                        className="w-full resize-none rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 dark:border-[#1e334a] dark:bg-[#07111f] dark:text-white"
                                                    />
                                                </div>

                                                <label className="flex cursor-pointer items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-3 dark:border-[#1e334a] dark:bg-[#07111f]">
                                                    <div>
                                                        <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
                                                            Show on public page
                                                        </p>
                                                        <p className="mt-0.5 text-[10px] text-slate-400">
                                                            Visitors can see this plan.
                                                        </p>
                                                    </div>
                                                    <input
                                                        type="checkbox"
                                                        checked={Boolean(plan.isPublic)}
                                                        onChange={(e) =>
                                                            updatePlan(plan.id, "isPublic", e.target.checked)
                                                        }
                                                        className="h-4 w-4 accent-blue-600"
                                                    />
                                                </label>

                                                <div className="rounded-xl border border-slate-200 bg-white p-3 dark:border-[#1e334a] dark:bg-[#07111f]">
                                                    <div className="flex items-center justify-between gap-3">
                                                        <div>
                                                            <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
                                                                Features
                                                            </p>
                                                            <p className="mt-0.5 text-[10px] text-slate-400">
                                                                Add, edit, or remove features.
                                                            </p>
                                                        </div>

                                                        <button
                                                            type="button"
                                                            onClick={() => addFeature(plan.id)}
                                                            className="inline-flex items-center gap-1.5 rounded-lg bg-blue-50 px-2.5 py-1.5 text-[10px] font-bold text-blue-700 hover:bg-blue-100 dark:bg-blue-500/10 dark:text-blue-300"
                                                        >
                                                            <Plus size={13} />
                                                            Add
                                                        </button>
                                                    </div>

                                                    <div className="mt-3 space-y-2">
                                                        {plan.features.map((feature, featureIndex) => (
                                                            <div
                                                                key={`${plan.id}-${featureIndex}`}
                                                                className="flex items-center gap-2"
                                                            >
                                                                <CheckCircle
                                                                    size={15}
                                                                    className="shrink-0 text-emerald-500"
                                                                />
                                                                <input
                                                                    type="text"
                                                                    value={feature}
                                                                    onChange={(e) =>
                                                                        updateFeature(
                                                                            plan.id,
                                                                            featureIndex,
                                                                            e.target.value
                                                                        )
                                                                    }
                                                                    className="min-w-0 flex-1 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-2 text-xs text-slate-700 outline-none focus:border-blue-500 dark:border-[#1e334a] dark:bg-[#102337] dark:text-slate-200"
                                                                />
                                                                <button
                                                                    type="button"
                                                                    onClick={() =>
                                                                        removeFeature(plan.id, featureIndex)
                                                                    }
                                                                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-400 hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-500/10 dark:hover:text-rose-400"
                                                                    title="Remove feature"
                                                                >
                                                                    <Trash2 size={14} />
                                                                </button>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* FOOTER */}
                            <div className="flex flex-col gap-3 border-t border-slate-200 p-5 dark:border-[#1e334a] sm:flex-row sm:items-center sm:justify-between">
                                <button
                                    type="button"
                                    onClick={addPlan}
                                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-4 py-2.5 text-sm font-bold text-blue-700 hover:bg-blue-100 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300"
                                >
                                    <Plus size={16} />
                                    Add New Plan
                                </button>

                                <div className="flex flex-col gap-2 sm:flex-row">
                                    <button
                                        type="button"
                                        onClick={resetPlans}
                                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-600 hover:bg-slate-50 dark:border-[#1e334a] dark:text-slate-300 dark:hover:bg-[#102337]"
                                    >
                                        <RotateCcw size={15} />
                                        Reset Defaults
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setShowPlanModal(false)}
                                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-600 hover:bg-slate-50 dark:border-[#1e334a] dark:text-slate-300 dark:hover:bg-[#102337]"
                                    >
                                        <X size={15} />
                                        Close
                                    </button>

                                    <button
                                        type="button"
                                        onClick={savePlans}
                                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:from-blue-700 hover:to-teal-600"
                                    >
                                        <Save size={16} />
                                        Save Plans
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* =================================================
                    FOOTER NOTE
                ================================================== */}

                <div
                    className="
                        mt-5

                        flex
                        items-center
                        justify-between
                    "
                >

                    <p
                        className="
                            text-[9px]
                            font-medium
                            uppercase
                            tracking-wider

                            text-slate-400

                            dark:text-slate-600
                        "
                    >
                        Shiyora Administration
                    </p>

                    <p
                        className="
                            text-[9px]
                            font-medium
                            uppercase
                            tracking-wider

                            text-slate-400

                            dark:text-slate-600
                        "
                    >
                        Subscription Management
                    </p>

                </div>

            </div>
        </main>
    );
};

export default Subscriptions;