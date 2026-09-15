import React, { useEffect, useState } from "react";
import {
    Building2,
    Users,
    BookOpen,
    CreditCard,
    TrendingUp,
    Activity,
    ArrowRight,
    CheckCircle2,
    Clock3,
    UserPlus,
    Plus,
    BarChart3,
    Settings,
    ShieldCheck,
    AlertCircle,
} from "lucide-react";

import {
    getOrganizations,
    getOrganizationStats,
} from "../../services/organizationService";


// =====================================================
// SUPER ADMIN DASHBOARD
// =====================================================

const Dashboard = () => {

    // =================================================
    // STATE
    // =================================================

    const [organizations, setOrganizations] = useState([]);

    const [stats, setStats] = useState({
        total_organizations: 0,
        active_organizations: 0,
        total_users: 0,
        total_courses: 0,
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    // =================================================
    // LOAD DASHBOARD DATA
    // =================================================

    useEffect(() => {
        loadDashboardData();
    }, []);


    const loadDashboardData = async () => {

        try {

            setLoading(true);
            setError("");

            const [
                organizationsResponse,
                statsResponse,
            ] = await Promise.all([
                getOrganizations(),
                getOrganizationStats(),
            ]);

            setOrganizations(
                organizationsResponse?.data || []
            );

            setStats(
                statsResponse?.data || {
                    total_organizations: 0,
                    active_organizations: 0,
                    total_users: 0,
                    total_courses: 0,
                }
            );

        } catch (err) {

            console.error(
                "Dashboard loading error:",
                err
            );

            setError(
                err.message ||
                "Failed to load dashboard data"
            );

        } finally {

            setLoading(false);

        }
    };


    // =================================================
    // FORMAT DATE
    // =================================================

    const formatDate = (date) => {

        if (!date) {
            return "—";
        }

        return new Date(date).toLocaleDateString(
            "en-IN",
            {
                day: "2-digit",
                month: "short",
                year: "numeric",
            }
        );
    };


    // =================================================
    // STATUS STYLE
    // =================================================

    const getStatusStyle = (status) => {

        if (
            String(status).toLowerCase() ===
            "active"
        ) {

            return {
                background: "#ECFDF5",
                color: "#059669",
            };

        }

        return {
            background: "#FEF2F2",
            color: "#DC2626",
        };
    };


    // =================================================
    // LOADING SCREEN
    // =================================================

    if (loading) {

        return (
            <div
                style={{
                    minHeight: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "40px",
                    background: "#F8FAFC",
                }}
            >

                <div
                    style={{
                        textAlign: "center",
                    }}
                >

                    <div
                        style={{
                            width: "42px",
                            height: "42px",
                            border:
                                "4px solid #E2E8F0",
                            borderTop:
                                "4px solid #2563EB",
                            borderRadius: "50%",
                            margin: "0 auto 16px",
                            animation:
                                "shiyoraSpin 0.8s linear infinite",
                        }}
                    />

                    <p
                        style={{
                            margin: 0,
                            color: "#64748B",
                            fontSize: "14px",
                        }}
                    >
                        Loading dashboard...
                    </p>

                    <style>
                        {`
                            @keyframes shiyoraSpin {
                                from {
                                    transform: rotate(0deg);
                                }
                                to {
                                    transform: rotate(360deg);
                                }
                            }
                        `}
                    </style>

                </div>

            </div>
        );
    }


    // =================================================
    // DASHBOARD
    // =================================================

    return (

        <div
            style={{
                minHeight: "100%",
                background: "#F8FAFC",
                color: "#0F172A",
                padding: "32px 36px 50px",
                fontFamily:
                    "Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
            }}
        >

            {/* =================================================
                HEADER
            ================================================= */}

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "24px",
                    marginBottom: "30px",
                    flexWrap: "wrap",
                }}
            >

                <div>

                    <div
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "7px 14px",
                            borderRadius: "999px",
                            background: "#EFF6FF",
                            border:
                                "1px solid #BFDBFE",
                            color: "#2563EB",
                            fontSize: "12px",
                            fontWeight: 700,
                            marginBottom: "12px",
                        }}
                    >

                        <Activity size={14} />

                        ADMINISTRATION

                        <span
                            style={{
                                color: "#CBD5E1",
                            }}
                        >
                            •
                        </span>

                        <span
                            style={{
                                color: "#94A3B8",
                            }}
                        >
                            Overview
                        </span>

                    </div>


                    <h1
                        style={{
                            margin: 0,
                            fontSize: "34px",
                            lineHeight: 1.15,
                            fontWeight: 800,
                            letterSpacing: "-1px",
                            color: "#020617",
                        }}
                    >
                        Super Admin Dashboard
                    </h1>


                    <p
                        style={{
                            margin:
                                "8px 0 0",
                            color: "#64748B",
                            fontSize: "16px",
                        }}
                    >
                        Monitor your Shiyora learning
                        platform and manage everything
                        from one place.
                    </p>

                </div>


                {/* REFRESH BUTTON */}

                <button
                    onClick={loadDashboardData}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        padding:
                            "11px 16px",
                        borderRadius: "10px",
                        border:
                            "1px solid #E2E8F0",
                        background: "#FFFFFF",
                        color: "#334155",
                        fontWeight: 600,
                        cursor: "pointer",
                        boxShadow:
                            "0 2px 8px rgba(15,23,42,0.05)",
                    }}
                >

                    <Activity size={17} />

                    Refresh

                </button>

            </div>


            {/* =================================================
                ERROR
            ================================================= */}

            {error && (

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "14px 16px",
                        marginBottom: "24px",
                        borderRadius: "12px",
                        background: "#FEF2F2",
                        border:
                            "1px solid #FECACA",
                        color: "#B91C1C",
                    }}
                >

                    <AlertCircle size={18} />

                    <span>
                        {error}
                    </span>

                </div>

            )}


            {/* =================================================
                TOP STAT CARDS
            ================================================= */}

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(4, minmax(0, 1fr))",
                    gap: "18px",
                    marginBottom: "24px",
                }}
            >

                {/* ORGANIZATIONS */}

                <StatCard
                    title="Total Organizations"
                    value={
                        stats.total_organizations
                    }
                    icon={<Building2 size={22} />}
                    iconBackground="#EFF6FF"
                    iconColor="#2563EB"
                    footer={
                        `${stats.active_organizations} active organizations`
                    }
                />


                {/* USERS */}

                <StatCard
                    title="Total Users"
                    value={
                        stats.total_users
                    }
                    icon={<Users size={22} />}
                    iconBackground="#ECFDF5"
                    iconColor="#0F766E"
                    footer="Registered platform users"
                />


                {/* COURSES */}

                <StatCard
                    title="Total Courses"
                    value={
                        stats.total_courses
                    }
                    icon={<BookOpen size={22} />}
                    iconBackground="#EEF2FF"
                    iconColor="#4F46E5"
                    footer="Courses available on platform"
                />


                {/* REVENUE */}

                <StatCard
                    title="Total Revenue"
                    value="—"
                    icon={<CreditCard size={22} />}
                    iconBackground="#ECFEFF"
                    iconColor="#0891B2"
                    footer="Billing system not connected"
                />

            </div>


            {/* =================================================
                MAIN GRID
            ================================================= */}

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "minmax(0, 2fr) minmax(300px, 1fr)",
                    gap: "24px",
                    marginBottom: "24px",
                }}
            >

                {/* =================================================
                    PLATFORM OVERVIEW
                ================================================= */}

                <div
                    style={{
                        background: "#FFFFFF",
                        border:
                            "1px solid #E2E8F0",
                        borderRadius: "16px",
                        padding: "24px",
                        boxShadow:
                            "0 2px 8px rgba(15,23,42,0.04)",
                    }}
                >

                    <div
                        style={{
                            display: "flex",
                            justifyContent:
                                "space-between",
                            alignItems: "center",
                            marginBottom: "26px",
                        }}
                    >

                        <div>

                            <h2
                                style={{
                                    margin: 0,
                                    fontSize: "18px",
                                    fontWeight: 750,
                                }}
                            >
                                Platform Overview
                            </h2>

                            <p
                                style={{
                                    margin:
                                        "5px 0 0",
                                    color: "#94A3B8",
                                    fontSize: "13px",
                                }}
                            >
                                Current platform statistics
                            </p>

                        </div>


                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                color: "#64748B",
                                fontSize: "13px",
                                fontWeight: 600,
                            }}
                        >

                            <BarChart3 size={17} />

                            Live Data

                        </div>

                    </div>


                    {/* REAL PLATFORM DATA */}

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns:
                                "repeat(3, minmax(0, 1fr))",
                            gap: "16px",
                        }}
                    >

                        <OverviewItem
                            label="Organizations"
                            value={
                                stats.total_organizations
                            }
                            icon={
                                <Building2 size={20} />
                            }
                            color="#2563EB"
                        />

                        <OverviewItem
                            label="Users"
                            value={
                                stats.total_users
                            }
                            icon={
                                <Users size={20} />
                            }
                            color="#0F766E"
                        />

                        <OverviewItem
                            label="Courses"
                            value={
                                stats.total_courses
                            }
                            icon={
                                <BookOpen size={20} />
                            }
                            color="#4F46E5"
                        />

                    </div>


                    {/* PLATFORM STATUS */}

                    <div
                        style={{
                            marginTop: "24px",
                            padding: "16px",
                            borderRadius: "12px",
                            background: "#F8FAFC",
                            border:
                                "1px solid #E2E8F0",
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                        }}
                    >

                        <div
                            style={{
                                width: "38px",
                                height: "38px",
                                borderRadius: "10px",
                                background: "#ECFDF5",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >

                            <CheckCircle2
                                size={20}
                                color="#059669"
                            />

                        </div>


                        <div>

                            <div
                                style={{
                                    fontSize: "14px",
                                    fontWeight: 700,
                                    color: "#0F172A",
                                }}
                            >
                                Platform data connected
                            </div>

                            <div
                                style={{
                                    fontSize: "12px",
                                    color: "#64748B",
                                    marginTop: "3px",
                                }}
                            >
                                Statistics are being loaded
                                from PostgreSQL.
                            </div>

                        </div>

                    </div>

                </div>


                {/* =================================================
                    PLATFORM USERS
                ================================================= */}

                <div
                    style={{
                        background: "#FFFFFF",
                        border:
                            "1px solid #E2E8F0",
                        borderRadius: "16px",
                        padding: "24px",
                        boxShadow:
                            "0 2px 8px rgba(15,23,42,0.04)",
                    }}
                >

                    <h2
                        style={{
                            margin: 0,
                            fontSize: "18px",
                            fontWeight: 750,
                        }}
                    >
                        Platform Users
                    </h2>

                    <p
                        style={{
                            margin:
                                "5px 0 24px",
                            color: "#94A3B8",
                            fontSize: "13px",
                        }}
                    >
                        User distribution by role
                    </p>


                    <RoleNotice
                        icon={
                            <Users size={19} />
                        }
                        title="User distribution"
                        value={
                            stats.total_users
                        }
                        description="Total registered users"
                        color="#2563EB"
                    />


                    <div
                        style={{
                            marginTop: "18px",
                            padding: "14px",
                            borderRadius: "12px",
                            background: "#F8FAFC",
                            border:
                                "1px solid #E2E8F0",
                            fontSize: "12px",
                            color: "#64748B",
                            lineHeight: 1.5,
                        }}
                    >

                        Role-wise student,
                        teacher and admin statistics
                        will appear here once the
                        role analytics API is connected.

                    </div>


                    <div
                        style={{
                            marginTop: "20px",
                            padding: "15px",
                            borderRadius: "12px",
                            background: "#F8FAFC",
                            display: "flex",
                            alignItems: "center",
                            justifyContent:
                                "space-between",
                        }}
                    >

                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "9px",
                            }}
                        >

                            <ShieldCheck
                                size={18}
                                color="#0F766E"
                            />

                            <span
                                style={{
                                    fontSize: "13px",
                                    color: "#475569",
                                    fontWeight: 600,
                                }}
                            >
                                Active organizations
                            </span>

                        </div>


                        <strong
                            style={{
                                fontSize: "16px",
                            }}
                        >
                            {
                                stats.active_organizations
                            }
                        </strong>

                    </div>

                </div>

            </div>


            {/* =================================================
                RECENT ORGANIZATIONS
            ================================================= */}

            <div
                style={{
                    background: "#FFFFFF",
                    border:
                        "1px solid #E2E8F0",
                    borderRadius: "16px",
                    padding: "24px",
                    boxShadow:
                        "0 2px 8px rgba(15,23,42,0.04)",
                    marginBottom: "24px",
                }}
            >

                <div
                    style={{
                        display: "flex",
                        justifyContent:
                            "space-between",
                        alignItems: "center",
                        marginBottom: "20px",
                    }}
                >

                    <div>

                        <h2
                            style={{
                                margin: 0,
                                fontSize: "18px",
                                fontWeight: 750,
                            }}
                        >
                            Recent Organizations
                        </h2>

                        <p
                            style={{
                                margin:
                                    "5px 0 0",
                                color: "#94A3B8",
                                fontSize: "13px",
                            }}
                        >
                            Organizations recently added
                            to Shiyora
                        </p>

                    </div>


                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "7px",
                            color: "#2563EB",
                            fontSize: "13px",
                            fontWeight: 700,
                        }}
                    >

                        <Building2 size={16} />

                        {organizations.length} total

                    </div>

                </div>


                {organizations.length === 0 ? (

                    <div
                        style={{
                            padding: "35px",
                            textAlign: "center",
                            color: "#64748B",
                            border:
                                "1px dashed #CBD5E1",
                            borderRadius: "12px",
                        }}
                    >

                        <Building2
                            size={28}
                            style={{
                                marginBottom: "8px",
                            }}
                        />

                        <div
                            style={{
                                fontWeight: 700,
                                marginBottom: "4px",
                            }}
                        >
                            No organizations found
                        </div>

                        <div
                            style={{
                                fontSize: "13px",
                            }}
                        >
                            Create an organization to
                            see it here.
                        </div>

                    </div>

                ) : (

                    <div
                        style={{
                            overflowX: "auto",
                        }}
                    >

                        <table
                            style={{
                                width: "100%",
                                borderCollapse:
                                    "collapse",
                                minWidth: "700px",
                            }}
                        >

                            <thead>

                                <tr
                                    style={{
                                        borderBottom:
                                            "1px solid #E2E8F0",
                                    }}
                                >

                                    <TableHeader>
                                        Organization
                                    </TableHeader>

                                    <TableHeader>
                                        Email
                                    </TableHeader>

                                    <TableHeader>
                                        Plan
                                    </TableHeader>

                                    <TableHeader>
                                        Users
                                    </TableHeader>

                                    <TableHeader>
                                        Courses
                                    </TableHeader>

                                    <TableHeader>
                                        Status
                                    </TableHeader>

                                    <TableHeader>
                                        Created
                                    </TableHeader>

                                </tr>

                            </thead>


                            <tbody>

                                {organizations
                                    .slice(0, 5)
                                    .map(
                                        (organization) => (

                                            <tr
                                                key={
                                                    organization.id
                                                }
                                                style={{
                                                    borderBottom:
                                                        "1px solid #F1F5F9",
                                                }}
                                            >

                                                <TableCell>

                                                    <div
                                                        style={{
                                                            display:
                                                                "flex",
                                                            alignItems:
                                                                "center",
                                                            gap: "10px",
                                                        }}
                                                    >

                                                        <div
                                                            style={{
                                                                width:
                                                                    "36px",
                                                                height:
                                                                    "36px",
                                                                borderRadius:
                                                                    "10px",
                                                                background:
                                                                    "#EFF6FF",
                                                                display:
                                                                    "flex",
                                                                alignItems:
                                                                    "center",
                                                                justifyContent:
                                                                    "center",
                                                            }}
                                                        >

                                                            <Building2
                                                                size={
                                                                    17
                                                                }
                                                                color="#2563EB"
                                                            />

                                                        </div>


                                                        <div>

                                                            <div
                                                                style={{
                                                                    fontWeight:
                                                                        700,
                                                                    color:
                                                                        "#0F172A",
                                                                }}
                                                            >
                                                                {
                                                                    organization.name
                                                                }
                                                            </div>

                                                            <div
                                                                style={{
                                                                    fontSize:
                                                                        "11px",
                                                                    color:
                                                                        "#94A3B8",
                                                                }}
                                                            >
                                                                ID #
                                                                {
                                                                    organization.id
                                                                }
                                                            </div>

                                                        </div>

                                                    </div>

                                                </TableCell>


                                                <TableCell>
                                                    {
                                                        organization.email
                                                    }
                                                </TableCell>


                                                <TableCell>

                                                    <span
                                                        style={{
                                                            fontWeight:
                                                                600,
                                                        }}
                                                    >
                                                        {
                                                            organization.plan ||
                                                            "Basic"
                                                        }
                                                    </span>

                                                </TableCell>


                                                <TableCell>
                                                    {
                                                        organization.users ??
                                                        0
                                                    }
                                                </TableCell>


                                                <TableCell>
                                                    {
                                                        organization.courses ??
                                                        0
                                                    }
                                                </TableCell>


                                                <TableCell>

                                                    <span
                                                        style={{
                                                            ...getStatusStyle(
                                                                organization.status
                                                            ),
                                                            padding:
                                                                "5px 10px",
                                                            borderRadius:
                                                                "999px",
                                                            fontSize:
                                                                "11px",
                                                            fontWeight:
                                                                700,
                                                        }}
                                                    >
                                                        {
                                                            organization.status ||
                                                            "Active"
                                                        }
                                                    </span>

                                                </TableCell>


                                                <TableCell>

                                                    {
                                                        formatDate(
                                                            organization.created_at
                                                        )
                                                    }

                                                </TableCell>

                                            </tr>

                                        )
                                    )}

                            </tbody>

                        </table>

                    </div>

                )}

            </div>


            {/* =================================================
                QUICK ACTIONS
            ================================================= */}

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(3, minmax(0, 1fr))",
                    gap: "18px",
                }}
            >

                <QuickAction
                    icon={<Plus size={19} />}
                    title="Add Organization"
                    description="Create a new organization"
                />

                <QuickAction
                    icon={<UserPlus size={19} />}
                    title="Manage Users"
                    description="View and manage platform users"
                />

                <QuickAction
                    icon={<Settings size={19} />}
                    title="Platform Settings"
                    description="Configure Shiyora settings"
                />

            </div>


            {/* =================================================
                INFORMATION
            ================================================= */}

            <div
                style={{
                    marginTop: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    color: "#94A3B8",
                    fontSize: "12px",
                }}
            >

                <Clock3 size={14} />

                Dashboard data is loaded from
                your Shiyora PostgreSQL database.

            </div>

        </div>
    );
};


// =====================================================
// STAT CARD
// =====================================================

const StatCard = ({
    title,
    value,
    icon,
    iconBackground,
    iconColor,
    footer,
}) => {

    return (

        <div
            style={{
                background: "#FFFFFF",
                border:
                    "1px solid #E2E8F0",
                borderRadius: "16px",
                padding: "22px",
                boxShadow:
                    "0 2px 8px rgba(15,23,42,0.05)",
            }}
        >

            <div
                style={{
                    display: "flex",
                    justifyContent:
                        "space-between",
                    alignItems: "flex-start",
                }}
            >

                <div>

                    <div
                        style={{
                            color: "#64748B",
                            fontSize: "13px",
                            fontWeight: 650,
                            marginBottom: "8px",
                        }}
                    >
                        {title}
                    </div>


                    <div
                        style={{
                            fontSize: "30px",
                            fontWeight: 800,
                            letterSpacing: "-0.7px",
                            color: "#020617",
                        }}
                    >
                        {value}
                    </div>

                </div>


                <div
                    style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "14px",
                        background:
                            iconBackground,
                        color: iconColor,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {icon}
                </div>

            </div>


            <div
                style={{
                    marginTop: "18px",
                    paddingTop: "13px",
                    borderTop:
                        "1px solid #F1F5F9",
                    color: "#94A3B8",
                    fontSize: "12px",
                }}
            >
                {footer}
            </div>

        </div>

    );
};


// =====================================================
// OVERVIEW ITEM
// =====================================================

const OverviewItem = ({
    label,
    value,
    icon,
    color,
}) => {

    return (

        <div
            style={{
                padding: "18px",
                border:
                    "1px solid #E2E8F0",
                borderRadius: "13px",
                background: "#FFFFFF",
            }}
        >

            <div
                style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "10px",
                    background: "#F8FAFC",
                    color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "12px",
                }}
            >
                {icon}
            </div>


            <div
                style={{
                    color: "#64748B",
                    fontSize: "12px",
                    marginBottom: "4px",
                }}
            >
                {label}
            </div>


            <div
                style={{
                    fontSize: "23px",
                    fontWeight: 800,
                    color: "#0F172A",
                }}
            >
                {value}
            </div>

        </div>

    );
};


// =====================================================
// ROLE NOTICE
// =====================================================

const RoleNotice = ({
    icon,
    title,
    value,
    description,
    color,
}) => {

    return (

        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: "13px",
                padding: "16px",
                borderRadius: "13px",
                background: "#F8FAFC",
                border:
                    "1px solid #E2E8F0",
            }}
        >

            <div
                style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "11px",
                    background: "#EFF6FF",
                    color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {icon}
            </div>


            <div
                style={{
                    flex: 1,
                }}
            >

                <div
                    style={{
                        fontSize: "13px",
                        fontWeight: 700,
                    }}
                >
                    {title}
                </div>

                <div
                    style={{
                        color: "#94A3B8",
                        fontSize: "11px",
                        marginTop: "2px",
                    }}
                >
                    {description}
                </div>

            </div>


            <strong
                style={{
                    fontSize: "20px",
                }}
            >
                {value}
            </strong>

        </div>

    );
};


// =====================================================
// QUICK ACTION
// =====================================================

const QuickAction = ({
    icon,
    title,
    description,
}) => {

    return (

        <button
            type="button"
            style={{
                border:
                    "1px solid #E2E8F0",
                background: "#FFFFFF",
                borderRadius: "14px",
                padding: "18px",
                display: "flex",
                alignItems: "center",
                gap: "14px",
                textAlign: "left",
                cursor: "pointer",
                boxShadow:
                    "0 2px 8px rgba(15,23,42,0.03)",
            }}
        >

            <div
                style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "11px",
                    background: "#EFF6FF",
                    color: "#2563EB",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                }}
            >
                {icon}
            </div>


            <div
                style={{
                    flex: 1,
                }}
            >

                <div
                    style={{
                        fontSize: "14px",
                        fontWeight: 750,
                        color: "#0F172A",
                    }}
                >
                    {title}
                </div>


                <div
                    style={{
                        fontSize: "11px",
                        color: "#94A3B8",
                        marginTop: "3px",
                    }}
                >
                    {description}
                </div>

            </div>


            <ArrowRight
                size={17}
                color="#94A3B8"
            />

        </button>

    );
};


// =====================================================
// TABLE HEADER
// =====================================================

const TableHeader = ({ children }) => {

    return (

        <th
            style={{
                textAlign: "left",
                padding:
                    "11px 12px",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                color: "#94A3B8",
                fontWeight: 750,
                whiteSpace: "nowrap",
            }}
        >
            {children}
        </th>

    );
};


// =====================================================
// TABLE CELL
// =====================================================

const TableCell = ({ children }) => {

    return (

        <td
            style={{
                padding:
                    "13px 12px",
                fontSize: "12px",
                color: "#475569",
                whiteSpace: "nowrap",
            }}
        >
            {children}
        </td>

    );
};


export default Dashboard;