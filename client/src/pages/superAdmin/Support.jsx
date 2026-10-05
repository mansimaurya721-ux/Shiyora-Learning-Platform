import { useMemo, useState } from "react";
import {
    Search,
    MessageCircle,
    Clock,
    CheckCircle,
    AlertCircle,
    Building2,
    X,
    Send,
    Bot,
    ChevronDown,
} from "lucide-react";

const Support = () => {
    const [search, setSearch] = useState("");
    const [roleFilter, setRoleFilter] = useState("All");
    const [statusFilter, setStatusFilter] = useState("All");
    const [selectedTicket, setSelectedTicket] = useState(null);
    const [reply, setReply] = useState("");

    // ============================================================
    // SAMPLE SUPPORT TICKETS
    // ============================================================

    const [tickets, setTickets] = useState([
        {
            id: "#1024",
            user: "Rahul Sharma",
            email: "rahul@example.com",
            role: "Admin",
            organization: "Bright Future Academy",
            subject: "Unable to create a new course",
            message:
                "I am trying to create a new course but the course creation form is not working.",
            priority: "High",
            status: "Open",
            createdAt: "Sep 1, 2026",
            agent: "Unassigned",
            replies: [],
        },
        {
            id: "#1023",
            user: "Priya Singh",
            email: "priya@example.com",
            role: "Teacher",
            organization: "Knowledge Hub",
            subject: "Video upload problem",
            message:
                "My lecture video is not uploading properly. It gets stuck during upload.",
            priority: "Medium",
            status: "Pending",
            createdAt: "Aug 31, 2026",
            agent: "Agent 01",
            replies: [
                {
                    sender: "Agent 01",
                    message:
                        "We are checking the video upload issue.",
                },
            ],
        },
        {
            id: "#1022",
            user: "Aman Verma",
            email: "aman@example.com",
            role: "Student",
            organization: "Bright Future Academy",
            subject: "Unable to access enrolled course",
            message:
                "I enrolled in a course but it is not appearing in my dashboard.",
            priority: "High",
            status: "Resolved",
            createdAt: "Aug 30, 2026",
            agent: "Agent 02",
            replies: [
                {
                    sender: "Agent 02",
                    message:
                        "Your enrollment has been refreshed. Please check again.",
                },
            ],
        },
        {
            id: "#1021",
            user: "Neha Gupta",
            email: "neha@example.com",
            role: "Teacher",
            organization: "Digital Learning School",
            subject: "Quiz result issue",
            message:
                "The quiz result is not showing correctly for some students.",
            priority: "Medium",
            status: "Open",
            createdAt: "Aug 29, 2026",
            agent: "Unassigned",
            replies: [],
        },
        {
            id: "#1020",
            user: "Arjun Patel",
            email: "arjun@example.com",
            role: "Student",
            organization: "Knowledge Hub",
            subject: "Certificate not showing",
            message:
                "I completed my course but I cannot see my certificate.",
            priority: "Low",
            status: "Resolved",
            createdAt: "Aug 28, 2026",
            agent: "Agent 01",
            replies: [],
        },
    ]);

    // ============================================================
    // FILTER TICKETS
    // ============================================================

    const filteredTickets = useMemo(() => {
        const searchValue = search.toLowerCase().trim();

        return tickets.filter((ticket) => {
            const matchesSearch =
                ticket.user.toLowerCase().includes(searchValue) ||
                ticket.subject.toLowerCase().includes(searchValue) ||
                ticket.organization.toLowerCase().includes(searchValue) ||
                ticket.id.toLowerCase().includes(searchValue);

            const matchesRole =
                roleFilter === "All" ||
                ticket.role === roleFilter;

            const matchesStatus =
                statusFilter === "All" ||
                ticket.status === statusFilter;

            return (
                matchesSearch &&
                matchesRole &&
                matchesStatus
            );
        });
    }, [tickets, search, roleFilter, statusFilter]);

    // ============================================================
    // STATISTICS
    // ============================================================

    const totalTickets = tickets.length;

    const openTickets = tickets.filter(
        (ticket) => ticket.status === "Open"
    ).length;

    const pendingTickets = tickets.filter(
        (ticket) => ticket.status === "Pending"
    ).length;

    const resolvedTickets = tickets.filter(
        (ticket) => ticket.status === "Resolved"
    ).length;

    // ============================================================
    // CHANGE STATUS
    // ============================================================

    const changeStatus = (status) => {
        if (!selectedTicket) return;

        setTickets((prev) =>
            prev.map((ticket) =>
                ticket.id === selectedTicket.id
                    ? {
                        ...ticket,
                        status,
                    }
                    : ticket
            )
        );

        setSelectedTicket((prev) => ({
            ...prev,
            status,
        }));
    };

    // ============================================================
    // SEND REPLY
    // ============================================================

    const sendReply = () => {
        if (!reply.trim() || !selectedTicket) return;

        const newReply = {
            sender: "Super Admin",
            message: reply.trim(),
        };

        setTickets((prev) =>
            prev.map((ticket) =>
                ticket.id === selectedTicket.id
                    ? {
                        ...ticket,
                        replies: [
                            ...ticket.replies,
                            newReply,
                        ],
                        status: "Pending",
                    }
                    : ticket
            )
        );

        setSelectedTicket((prev) => ({
            ...prev,
            replies: [
                ...prev.replies,
                newReply,
            ],
            status: "Pending",
        }));

        setReply("");
    };

    // ============================================================
    // STATUS STYLE
    // ============================================================

    const getStatusStyle = (status) => {
        if (status === "Open") {
            return "border-red-200 bg-red-50 text-red-600 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400";
        }

        if (status === "Pending") {
            return "border-amber-200 bg-amber-50 text-amber-600 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-400";
        }

        return "border-emerald-200 bg-emerald-50 text-emerald-600 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400";
    };

    // ============================================================
    // PRIORITY STYLE
    // ============================================================

    const getPriorityStyle = (priority) => {
        if (priority === "High") {
            return "text-red-600 dark:text-red-400";
        }

        if (priority === "Medium") {
            return "text-amber-600 dark:text-amber-400";
        }

        return "text-slate-500 dark:text-slate-400";
    };

    // ============================================================
    // STATUS DOT
    // ============================================================

    const getStatusDot = (status) => {
        if (status === "Open") {
            return "bg-red-500";
        }

        if (status === "Pending") {
            return "bg-amber-500";
        }

        return "bg-emerald-500";
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
                px-4
                py-6
                text-slate-700
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
                    bg-blue-500/5
                    blur-[130px]
                    dark:bg-blue-500/10
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
                    bg-teal-400/5
                    blur-[140px]
                    dark:bg-teal-400/10
                "
            />

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
                            Support Center
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
                            Manage queries and support requests from
                            users across the Shiyora LMS platform.
                        </p>
                    </div>

                    {/* AI AGENT */}

                    <div
                        className="
                            flex
                            w-fit
                            items-center
                            gap-3
                            rounded-xl
                            border
                            border-slate-200
                            bg-white
                            px-4
                            py-3
                            shadow-sm
                            dark:border-[#1e334a]
                            dark:bg-[#0b1727]
                        "
                    >
                        <div
                            className="
                                flex
                                h-8
                                w-8
                                items-center
                                justify-center
                                rounded-lg
                                bg-gradient-to-br
                                from-blue-500
                                to-teal-500
                                text-white
                            "
                        >
                            <Bot size={17} />
                        </div>

                        <span
                            className="
                                text-sm
                                font-semibold
                                text-slate-800
                                dark:text-white
                            "
                        >
                            AI Agent
                        </span>

                        <span
                            className="
                                rounded-full
                                border
                                border-blue-100
                                bg-blue-50
                                px-2
                                py-1
                                text-[9px]
                                font-semibold
                                uppercase
                                tracking-wider
                                text-blue-600
                                dark:border-blue-500/20
                                dark:bg-blue-500/10
                                dark:text-blue-400
                            "
                        >
                            Coming Soon
                        </span>
                    </div>
                </div>

                {/* =================================================
                    STATISTICS
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
                    {/* TOTAL */}

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
                                <p className="text-xs text-slate-500 dark:text-slate-400">
                                    Total Tickets
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
                                    {totalTickets}
                                </h2>

                                <p className="mt-1 text-[11px] text-slate-400 dark:text-slate-500">
                                    All support requests
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
                                    border-blue-100
                                    bg-blue-50
                                    text-blue-600
                                    dark:border-blue-500/20
                                    dark:bg-blue-500/10
                                    dark:text-blue-400
                                "
                            >
                                <MessageCircle size={22} />
                            </div>
                        </div>
                    </div>

                    {/* OPEN */}

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
                                <p className="text-xs text-slate-500 dark:text-slate-400">
                                    Open Tickets
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
                                    {openTickets}
                                </h2>

                                <p className="mt-1 text-[11px] text-red-500 dark:text-red-400">
                                    Needs attention
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
                                    border-red-100
                                    bg-red-50
                                    text-red-600
                                    dark:border-red-500/20
                                    dark:bg-red-500/10
                                    dark:text-red-400
                                "
                            >
                                <AlertCircle size={22} />
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
                                <p className="text-xs text-slate-500 dark:text-slate-400">
                                    Pending Tickets
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
                                    {pendingTickets}
                                </h2>

                                <p className="mt-1 text-[11px] text-amber-600 dark:text-amber-400">
                                    Waiting for response
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
                                    border-amber-100
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

                    {/* RESOLVED */}

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
                            hover:border-emerald-200
                            hover:shadow-md
                            dark:border-[#1e334a]
                            dark:bg-[#0b1727]
                            dark:hover:border-emerald-500/30
                        "
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs text-slate-500 dark:text-slate-400">
                                    Resolved Tickets
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
                                    {resolvedTickets}
                                </h2>

                                <p className="mt-1 text-[11px] text-emerald-600 dark:text-emerald-400">
                                    Successfully resolved
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
                                    border-emerald-100
                                    bg-emerald-50
                                    text-emerald-600
                                    dark:border-emerald-500/20
                                    dark:bg-emerald-500/10
                                    dark:text-emerald-400
                                "
                            >
                                <CheckCircle size={22} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* =================================================
                    FILTER BAR
                ================================================== */}

                <div
                    className="
                        mb-6
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        p-4
                        shadow-sm
                        dark:border-[#1e334a]
                        dark:bg-[#0b1727]
                    "
                >
                    <div className="flex flex-col gap-3 lg:flex-row">

                        {/* SEARCH */}

                        <div className="relative flex-1">
                            <Search
                                size={18}
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
                                value={search}
                                onChange={(e) =>
                                    setSearch(e.target.value)
                                }
                                placeholder="Search tickets, users, organizations..."
                                className="
                                    w-full
                                    rounded-xl
                                    border
                                    border-slate-200
                                    bg-slate-50
                                    py-3
                                    pl-10
                                    pr-4
                                    text-sm
                                    text-slate-800
                                    outline-none
                                    transition
                                    placeholder:text-slate-400
                                    focus:border-blue-400
                                    focus:ring-2
                                    focus:ring-blue-500/10
                                    dark:border-[#1e334a]
                                    dark:bg-[#07111f]
                                    dark:text-slate-200
                                    dark:placeholder:text-slate-600
                                    dark:focus:border-teal-500
                                    dark:focus:ring-teal-500/10
                                "
                            />
                        </div>

                        {/* ROLE */}

                        <div className="relative">
                            <select
                                value={roleFilter}
                                onChange={(e) =>
                                    setRoleFilter(e.target.value)
                                }
                                className="
                                    w-full
                                    appearance-none
                                    rounded-xl
                                    border
                                    border-slate-200
                                    bg-slate-50
                                    px-4
                                    py-3
                                    pr-10
                                    text-sm
                                    text-slate-700
                                    outline-none
                                    transition
                                    focus:border-blue-400
                                    dark:border-[#1e334a]
                                    dark:bg-[#07111f]
                                    dark:text-slate-300
                                    dark:focus:border-teal-500
                                    lg:w-40
                                "
                            >
                                <option value="All">All Roles</option>
                                <option value="Admin">Admin</option>
                                <option value="Teacher">Teacher</option>
                                <option value="Student">Student</option>
                            </select>

                            <ChevronDown
                                size={16}
                                className="
                                    pointer-events-none
                                    absolute
                                    right-3
                                    top-1/2
                                    -translate-y-1/2
                                    text-slate-400
                                    dark:text-slate-500
                                "
                            />
                        </div>

                        {/* STATUS */}

                        <div className="relative">
                            <select
                                value={statusFilter}
                                onChange={(e) =>
                                    setStatusFilter(e.target.value)
                                }
                                className="
                                    w-full
                                    appearance-none
                                    rounded-xl
                                    border
                                    border-slate-200
                                    bg-slate-50
                                    px-4
                                    py-3
                                    pr-10
                                    text-sm
                                    text-slate-700
                                    outline-none
                                    transition
                                    focus:border-blue-400
                                    dark:border-[#1e334a]
                                    dark:bg-[#07111f]
                                    dark:text-slate-300
                                    dark:focus:border-teal-500
                                    lg:w-40
                                "
                            >
                                <option value="All">All Status</option>
                                <option value="Open">Open</option>
                                <option value="Pending">Pending</option>
                                <option value="Resolved">Resolved</option>
                            </select>

                            <ChevronDown
                                size={16}
                                className="
                                    pointer-events-none
                                    absolute
                                    right-3
                                    top-1/2
                                    -translate-y-1/2
                                    text-slate-400
                                    dark:text-slate-500
                                "
                            />
                        </div>
                    </div>
                </div>

                {/* =================================================
                    SUPPORT TICKETS
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
                            gap-3
                            border-b
                            border-slate-200
                            bg-slate-50/80
                            p-6
                            sm:flex-row
                            sm:items-center
                            sm:justify-between
                            dark:border-[#1e334a]
                            dark:bg-[#102337]/50
                        "
                    >
                        <div>
                            <div className="flex items-center gap-2">
                                <span
                                    className="
                                        h-2
                                        w-2
                                        rounded-full
                                        bg-gradient-to-r
                                        from-blue-500
                                        to-teal-500
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
                                    Support
                                </p>
                            </div>

                            <h2
                                className="
                                    mt-1
                                    text-xl
                                    font-bold
                                    text-slate-900
                                    dark:text-white
                                "
                            >
                                Support Tickets
                            </h2>

                            <p
                                className="
                                    mt-1
                                    text-xs
                                    text-slate-500
                                    dark:text-slate-400
                                "
                            >
                                Manage support requests from Shiyora users.
                            </p>
                        </div>

                        <div
                            className="
                                flex
                                w-fit
                                items-center
                                gap-2
                                rounded-lg
                                border
                                border-blue-100
                                bg-blue-50
                                px-3
                                py-2
                                dark:border-blue-500/20
                                dark:bg-blue-500/10
                            "
                        >
                            <MessageCircle
                                size={14}
                                className="text-blue-600 dark:text-blue-400"
                            />

                            <span
                                className="
                                    text-[10px]
                                    font-bold
                                    text-blue-600
                                    dark:text-blue-400
                                "
                            >
                                {filteredTickets.length} RESULTS
                            </span>
                        </div>
                    </div>

                    {/* TABLE */}

                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[1100px]">

                            <thead
                                className="
                                    border-b
                                    border-slate-200
                                    bg-slate-50
                                    dark:border-[#1e334a]
                                    dark:bg-[#102337]
                                "
                            >
                                <tr>
                                    <th className="px-6 py-4 text-left text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Ticket
                                    </th>

                                    <th className="px-6 py-4 text-left text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        User
                                    </th>

                                    <th className="px-6 py-4 text-left text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Organization
                                    </th>

                                    <th className="px-6 py-4 text-left text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Subject
                                    </th>

                                    <th className="px-6 py-4 text-left text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Priority
                                    </th>

                                    <th className="px-6 py-4 text-left text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Status
                                    </th>

                                    <th className="px-6 py-4 text-right text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Action
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-slate-200 dark:divide-[#1e334a]">

                                {filteredTickets.map((ticket) => (
                                    <tr
                                        key={ticket.id}
                                        className="
                                            transition-colors
                                            hover:bg-slate-50
                                            dark:hover:bg-[#102337]/60
                                        "
                                    >
                                        {/* TICKET */}

                                        <td className="px-6 py-5">
                                            <span
                                                className="
                                                    text-xs
                                                    font-bold
                                                    text-blue-600
                                                    dark:text-teal-400
                                                "
                                            >
                                                {ticket.id}
                                            </span>

                                            <p className="mt-1 text-[10px] text-slate-400 dark:text-slate-500">
                                                {ticket.createdAt}
                                            </p>
                                        </td>

                                        {/* USER */}

                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-3">

                                                <div
                                                    className="
                                                        flex
                                                        h-10
                                                        w-10
                                                        shrink-0
                                                        items-center
                                                        justify-center
                                                        rounded-xl
                                                        bg-gradient-to-br
                                                        from-blue-100
                                                        to-teal-100
                                                        text-sm
                                                        font-bold
                                                        text-blue-700
                                                        dark:from-blue-500/20
                                                        dark:to-teal-500/20
                                                        dark:text-teal-300
                                                    "
                                                >
                                                    {ticket.user.charAt(0)}
                                                </div>

                                                <div>
                                                    <p
                                                        className="
                                                            text-sm
                                                            font-semibold
                                                            text-slate-800
                                                            dark:text-white
                                                        "
                                                    >
                                                        {ticket.user}
                                                    </p>

                                                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                                        {ticket.role}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>

                                        {/* ORGANIZATION */}

                                        <td className="px-6 py-5">
                                            <div
                                                className="
                                                    flex
                                                    items-center
                                                    gap-2
                                                    text-sm
                                                    text-slate-600
                                                    dark:text-slate-300
                                                "
                                            >
                                                <Building2
                                                    size={15}
                                                    className="text-slate-400 dark:text-slate-500"
                                                />

                                                {ticket.organization}
                                            </div>
                                        </td>

                                        {/* SUBJECT */}

                                        <td className="px-6 py-5">
                                            <p
                                                className="
                                                    max-w-60
                                                    text-sm
                                                    font-semibold
                                                    text-slate-800
                                                    dark:text-slate-100
                                                "
                                            >
                                                {ticket.subject}
                                            </p>
                                        </td>

                                        {/* PRIORITY */}

                                        <td className="px-6 py-5">
                                            <span
                                                className={`
                                                    text-[10px]
                                                    font-bold
                                                    uppercase
                                                    tracking-wider
                                                    ${getPriorityStyle(
                                                    ticket.priority
                                                )}
                                                `}
                                            >
                                                {ticket.priority}
                                            </span>
                                        </td>

                                        {/* STATUS */}

                                        <td className="px-6 py-5">
                                            <span
                                                className={`
                                                    inline-flex
                                                    items-center
                                                    gap-1.5
                                                    rounded-full
                                                    border
                                                    px-3
                                                    py-1.5
                                                    text-xs
                                                    font-semibold
                                                    ${getStatusStyle(
                                                    ticket.status
                                                )}
                                                `}
                                            >
                                                <span
                                                    className={`
                                                        h-1.5
                                                        w-1.5
                                                        rounded-full
                                                        ${getStatusDot(
                                                        ticket.status
                                                    )}
                                                    `}
                                                />

                                                {ticket.status}
                                            </span>
                                        </td>

                                        {/* ACTION */}

                                        <td className="px-6 py-5 text-right">
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setSelectedTicket(ticket)
                                                }
                                                className="
                                                    rounded-lg
                                                    border
                                                    border-blue-200
                                                    bg-blue-50
                                                    px-4
                                                    py-2
                                                    text-xs
                                                    font-semibold
                                                    text-blue-600
                                                    transition
                                                    hover:border-blue-300
                                                    hover:bg-blue-100
                                                    dark:border-blue-500/20
                                                    dark:bg-blue-500/10
                                                    dark:text-blue-400
                                                    dark:hover:bg-blue-500/20
                                                "
                                            >
                                                View
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* EMPTY STATE */}

                    {filteredTickets.length === 0 && (
                        <div className="px-6 py-14 text-center">
                            <div
                                className="
                                    mx-auto
                                    flex
                                    h-14
                                    w-14
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    bg-blue-50
                                    text-blue-600
                                    dark:bg-blue-500/10
                                    dark:text-blue-400
                                "
                            >
                                <MessageCircle size={26} />
                            </div>

                            <h3
                                className="
                                    mt-4
                                    font-semibold
                                    text-slate-900
                                    dark:text-white
                                "
                            >
                                No support tickets found
                            </h3>

                            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                Try changing your search or filters.
                            </p>
                        </div>
                    )}
                </section>

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
                            font-semibold
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
                            font-semibold
                            uppercase
                            tracking-wider
                            text-slate-400
                            dark:text-slate-600
                        "
                    >
                        Support Management
                    </p>
                </div>
            </div>

            {/* =====================================================
                TICKET MODAL
            ====================================================== */}

            {selectedTicket && (
                <div
                    className="
                        fixed
                        inset-0
                        z-50
                        flex
                        items-center
                        justify-center
                        bg-slate-950/60
                        p-4
                        backdrop-blur-sm
                    "
                >
                    <div
                        className="
                            w-full
                            max-w-3xl
                            max-h-[90vh]
                            overflow-hidden
                            rounded-2xl
                            border
                            border-slate-200
                            bg-white
                            shadow-2xl
                            dark:border-[#1e334a]
                            dark:bg-[#0b1727]
                        "
                    >

                        {/* MODAL HEADER */}

                        <div
                            className="
                                flex
                                items-center
                                justify-between
                                border-b
                                border-slate-200
                                bg-slate-50
                                px-6
                                py-5
                                dark:border-[#1e334a]
                                dark:bg-[#102337]
                            "
                        >
                            <div>
                                <div className="flex flex-wrap items-center gap-3">

                                    <h2
                                        className="
                                            text-xl
                                            font-bold
                                            text-slate-900
                                            dark:text-white
                                        "
                                    >
                                        {selectedTicket.subject}
                                    </h2>

                                    <span
                                        className={`
                                            rounded-full
                                            border
                                            px-3
                                            py-1
                                            text-xs
                                            font-semibold
                                            ${getStatusStyle(
                                            selectedTicket.status
                                        )}
                                        `}
                                    >
                                        {selectedTicket.status}
                                    </span>
                                </div>

                                <p
                                    className="
                                        mt-1
                                        text-[10px]
                                        font-semibold
                                        text-slate-500
                                        dark:text-slate-400
                                    "
                                >
                                    Ticket {selectedTicket.id}
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={() => {
                                    setSelectedTicket(null);
                                    setReply("");
                                }}
                                className="
                                    rounded-lg
                                    p-2
                                    text-slate-400
                                    transition
                                    hover:bg-slate-200
                                    hover:text-slate-700
                                    dark:hover:bg-[#1e334a]
                                    dark:hover:text-white
                                "
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* MODAL BODY */}

                        <div
                            className="
                                max-h-[65vh]
                                overflow-y-auto
                                p-6
                            "
                        >
                            {/* USER INFORMATION */}

                            <div
                                className="
                                    mb-6
                                    grid
                                    grid-cols-1
                                    gap-4
                                    md:grid-cols-3
                                "
                            >
                                <div
                                    className="
                                        rounded-xl
                                        border
                                        border-slate-200
                                        bg-slate-50
                                        p-4
                                        dark:border-[#1e334a]
                                        dark:bg-[#102337]/60
                                    "
                                >
                                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                                        User
                                    </p>

                                    <p className="mt-1 text-sm font-semibold text-slate-800 dark:text-white">
                                        {selectedTicket.user}
                                    </p>
                                </div>

                                <div
                                    className="
                                        rounded-xl
                                        border
                                        border-slate-200
                                        bg-slate-50
                                        p-4
                                        dark:border-[#1e334a]
                                        dark:bg-[#102337]/60
                                    "
                                >
                                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                                        Role
                                    </p>

                                    <p className="mt-1 text-sm font-semibold text-slate-800 dark:text-white">
                                        {selectedTicket.role}
                                    </p>
                                </div>

                                <div
                                    className="
                                        rounded-xl
                                        border
                                        border-slate-200
                                        bg-slate-50
                                        p-4
                                        dark:border-[#1e334a]
                                        dark:bg-[#102337]/60
                                    "
                                >
                                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                                        Organization
                                    </p>

                                    <p className="mt-1 text-sm font-semibold text-slate-800 dark:text-white">
                                        {selectedTicket.organization}
                                    </p>
                                </div>
                            </div>

                            {/* USER QUERY */}

                            <div className="mb-6">
                                <p
                                    className="
                                        mb-2
                                        text-sm
                                        font-semibold
                                        text-slate-800
                                        dark:text-white
                                    "
                                >
                                    User Query
                                </p>

                                <div
                                    className="
                                        rounded-xl
                                        border
                                        border-slate-200
                                        bg-slate-50
                                        p-4
                                        dark:border-[#1e334a]
                                        dark:bg-[#07111f]
                                    "
                                >
                                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                                        {selectedTicket.message}
                                    </p>
                                </div>
                            </div>

                            {/* CONVERSATION */}

                            <div>
                                <p
                                    className="
                                        mb-3
                                        text-sm
                                        font-semibold
                                        text-slate-800
                                        dark:text-white
                                    "
                                >
                                    Conversation
                                </p>

                                <div className="space-y-3">
                                    {selectedTicket.replies.length === 0 ? (
                                        <div
                                            className="
                                                rounded-xl
                                                border
                                                border-dashed
                                                border-slate-300
                                                bg-slate-50
                                                p-5
                                                text-center
                                                dark:border-[#1e334a]
                                                dark:bg-[#102337]/40
                                            "
                                        >
                                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                                No replies yet.
                                            </p>
                                        </div>
                                    ) : (
                                        selectedTicket.replies.map(
                                            (item, index) => (
                                                <div
                                                    key={index}
                                                    className="
                                                        rounded-xl
                                                        border
                                                        border-blue-100
                                                        bg-blue-50
                                                        p-4
                                                        dark:border-teal-500/20
                                                        dark:bg-teal-500/10
                                                    "
                                                >
                                                    <p
                                                        className="
                                                            mb-1
                                                            text-[10px]
                                                            font-bold
                                                            uppercase
                                                            tracking-wider
                                                            text-blue-600
                                                            dark:text-teal-400
                                                        "
                                                    >
                                                        {item.sender}
                                                    </p>

                                                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                                                        {item.message}
                                                    </p>
                                                </div>
                                            )
                                        )
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* MODAL FOOTER */}

                        <div
                            className="
                                border-t
                                border-slate-200
                                bg-slate-50
                                px-6
                                py-4
                                dark:border-[#1e334a]
                                dark:bg-[#102337]
                            "
                        >
                            <div className="flex flex-col gap-3 sm:flex-row">

                                {/* REPLY */}

                                <div className="relative flex-1">
                                    <input
                                        type="text"
                                        value={reply}
                                        onChange={(e) =>
                                            setReply(e.target.value)
                                        }
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                sendReply();
                                            }
                                        }}
                                        placeholder="Type your reply..."
                                        className="
                                            w-full
                                            rounded-xl
                                            border
                                            border-slate-200
                                            bg-white
                                            px-4
                                            py-3
                                            pr-12
                                            text-sm
                                            text-slate-800
                                            outline-none
                                            placeholder:text-slate-400
                                            focus:border-blue-400
                                            focus:ring-2
                                            focus:ring-blue-500/10
                                            dark:border-[#1e334a]
                                            dark:bg-[#07111f]
                                            dark:text-slate-200
                                            dark:placeholder:text-slate-600
                                            dark:focus:border-teal-500
                                            dark:focus:ring-teal-500/10
                                        "
                                    />

                                    <button
                                        type="button"
                                        onClick={sendReply}
                                        className="
                                            absolute
                                            right-2
                                            top-1/2
                                            -translate-y-1/2
                                            rounded-lg
                                            bg-gradient-to-r
                                            from-blue-600
                                            to-teal-500
                                            p-2
                                            text-white
                                            shadow-sm
                                            transition
                                            hover:from-blue-700
                                            hover:to-teal-600
                                        "
                                    >
                                        <Send size={16} />
                                    </button>
                                </div>

                                {/* STATUS */}

                                <div className="relative">
                                    <select
                                        value={selectedTicket.status}
                                        onChange={(e) =>
                                            changeStatus(e.target.value)
                                        }
                                        className="
                                            h-full
                                            w-full
                                            appearance-none
                                            rounded-xl
                                            border
                                            border-slate-200
                                            bg-white
                                            px-4
                                            py-3
                                            pr-10
                                            text-sm
                                            text-slate-700
                                            outline-none
                                            dark:border-[#1e334a]
                                            dark:bg-[#07111f]
                                            dark:text-slate-300
                                            sm:w-36
                                        "
                                    >
                                        <option value="Open">
                                            Open
                                        </option>

                                        <option value="Pending">
                                            Pending
                                        </option>

                                        <option value="Resolved">
                                            Resolved
                                        </option>
                                    </select>

                                    <ChevronDown
                                        size={16}
                                        className="
                                            pointer-events-none
                                            absolute
                                            right-3
                                            top-1/2
                                            -translate-y-1/2
                                            text-slate-400
                                            dark:text-slate-500
                                        "
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
};

export default Support;