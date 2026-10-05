import { useEffect, useMemo, useState } from "react";

import {
    Building2,
    Users,
    BookOpen,
    Search,
    Plus,
    MoreVertical,
    Eye,
    EyeOff,
    Pencil,
    Trash2,
    TrendingUp,
    X,
    KeyRound,
    Copy,
    Check,
} from "lucide-react";

import {
    getOrganizations,
    getOrganizationById,
    createOrganization,
    updateOrganization,
    deleteOrganization as deleteOrganizationApi,
    getOrganizationStats,
} from "../../services/organizationService";


const Organizations = () => {

    // ============================================================
    // BASIC STATE
    // ============================================================

    const [search, setSearch] = useState("");
    const [openMenu, setOpenMenu] = useState(null);

    const [organizations, setOrganizations] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    // ============================================================
    // ADD ORGANIZATION
    // ============================================================

    const [showAddModal, setShowAddModal] = useState(false);
    const [creating, setCreating] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        plan: "Basic",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [copiedPassword, setCopiedPassword] = useState(false);


    // ============================================================
    // VIEW ORGANIZATION
    // ============================================================

    const [viewOrganization, setViewOrganization] = useState(null);
    const [viewLoading, setViewLoading] = useState(false);


    // ============================================================
    // EDIT ORGANIZATION
    // ============================================================

    const [editOrganization, setEditOrganization] = useState(null);
    const [updating, setUpdating] = useState(false);


    // ============================================================
    // DELETE ORGANIZATION
    // ============================================================

    const [deleteOrganizationId, setDeleteOrganizationId] = useState(null);
    const [deleting, setDeleting] = useState(false);


    // ============================================================
    // STATISTICS
    // ============================================================

    const [stats, setStats] = useState({
        total_organizations: 0,
        active_organizations: 0,
        total_users: 0,
        total_courses: 0,
    });


    // ============================================================
    // LOAD ORGANIZATIONS + STATS
    // ============================================================

    useEffect(() => {
        loadOrganizations();
    }, []);


    const loadOrganizations = async () => {

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
                organizationsResponse.data || []
            );


            setStats(
                statsResponse.data || {
                    total_organizations: 0,
                    active_organizations: 0,
                    total_users: 0,
                    total_courses: 0,
                }
            );

        } catch (error) {

            console.error(
                "Error loading organizations:",
                error
            );

            setError(
                error.message ||
                "Failed to load organizations"
            );

        } finally {

            setLoading(false);

        }
    };


    // ============================================================
    // SEARCH
    // ============================================================

    const filteredOrganizations = useMemo(() => {

        const searchValue =
            search.toLowerCase().trim();


        return organizations.filter(
            (organization) => {

                return (
                    organization.name
                        ?.toLowerCase()
                        .includes(searchValue) ||

                    organization.email
                        ?.toLowerCase()
                        .includes(searchValue)
                );

            }
        );

    }, [organizations, search]);


    // ============================================================
    // STATISTICS VALUES
    // ============================================================

    const totalOrganizations =
        stats.total_organizations;

    const activeOrganizations =
        stats.active_organizations;

    const totalUsers =
        stats.total_users;

    const totalCourses =
        stats.total_courses;


    // ============================================================
    // GENERATE PASSWORD
    // ============================================================

    const generatePassword = () => {

        const characters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%";

        let password = "";

        for (let i = 0; i < 12; i++) {

            password += characters.charAt(
                Math.floor(
                    Math.random() * characters.length
                )
            );

        }

        setFormData((previous) => ({
            ...previous,
            password,
        }));

        setShowPassword(true);
        setCopiedPassword(false);
    };


    // ============================================================
    // COPY PASSWORD
    // ============================================================

    const copyPassword = async () => {

        if (!formData.password) {
            return;
        }

        try {

            await navigator.clipboard.writeText(
                formData.password
            );

            setCopiedPassword(true);

            setTimeout(() => {
                setCopiedPassword(false);
            }, 1500);

        } catch (error) {

            console.error(
                "Failed to copy password:",
                error
            );

        }
    };


    // ============================================================
    // OPEN VIEW MODAL
    // ============================================================

    const handleView = async (organization) => {

        try {

            setOpenMenu(null);
            setError("");
            setViewLoading(true);

            const response =
                await getOrganizationById(
                    organization.id
                );

            setViewOrganization(
                response.data
            );

        } catch (error) {

            console.error(
                "Error fetching organization:",
                error
            );

            setError(
                error.message ||
                "Failed to fetch organization"
            );

        } finally {

            setViewLoading(false);

        }
    };


    // ============================================================
    // OPEN EDIT MODAL
    // ============================================================

    const handleEdit = (organization) => {

        setOpenMenu(null);
        setError("");

        setEditOrganization({
            id: organization.id,
            name: organization.name || "",
            email: organization.email || "",
            plan: organization.plan || "Basic",
            status: organization.status || "Active",
        });
    };


    // ============================================================
    // UPDATE ORGANIZATION
    // ============================================================

    const handleUpdate = async (event) => {

        event.preventDefault();

        if (!editOrganization) {
            return;
        }


        try {

            setUpdating(true);
            setError("");

            await updateOrganization(
                editOrganization.id,
                {
                    name: editOrganization.name,
                    email: editOrganization.email,
                    plan: editOrganization.plan,
                    status: editOrganization.status,
                }
            );


            setEditOrganization(null);

            await loadOrganizations();

        } catch (error) {

            console.error(
                "Error updating organization:",
                error
            );

            setError(
                error.message ||
                "Failed to update organization"
            );

        } finally {

            setUpdating(false);

        }
    };


    // ============================================================
    // DELETE ORGANIZATION
    // ============================================================

    const handleDelete = async () => {

        if (!deleteOrganizationId) {
            return;
        }


        try {

            setDeleting(true);
            setError("");

            await deleteOrganizationApi(
                deleteOrganizationId
            );


            setDeleteOrganizationId(null);

            await loadOrganizations();

        } catch (error) {

            console.error(
                "Error deleting organization:",
                error
            );

            setError(
                error.message ||
                "Failed to delete organization"
            );

        } finally {

            setDeleting(false);

        }
    };


    // ============================================================
    // ADD ORGANIZATION
    // ============================================================

    const handleCreate = async (event) => {

        event.preventDefault();

        try {

            setCreating(true);
            setError("");

            await createOrganization(formData);


            setFormData({
                name: "",
                email: "",
                plan: "Basic",
                password: "",
            });

            setShowPassword(false);
            setCopiedPassword(false);

            setShowAddModal(false);

            await loadOrganizations();

        } catch (error) {

            console.error(
                "Error creating organization:",
                error
            );

            setError(
                error.message ||
                "Failed to create organization"
            );

        } finally {

            setCreating(false);

        }
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

                text-slate-900

                transition-colors
                duration-300

                sm:px-6
                lg:px-8

                dark:bg-[#07111f]
                dark:text-slate-100
            "
        >

            {/* =====================================================
                BACKGROUND GLOW
            ====================================================== */}

            <div
                className="
                    pointer-events-none
                    fixed
                    -left-40
                    -top-40
                    h-[420px]
                    w-[420px]
                    rounded-full
                    bg-blue-100/60
                    blur-[130px]

                    dark:bg-blue-600/5
                "
            />

            <div
                className="
                    pointer-events-none
                    fixed
                    -right-40
                    bottom-0
                    h-[420px]
                    w-[420px]
                    rounded-full
                    bg-teal-100/60
                    blur-[140px]

                    dark:bg-teal-500/5
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

                        <div className="mb-2 flex items-center gap-2">

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
                                    font-bold
                                    uppercase
                                    tracking-[0.2em]
                                    text-blue-600

                                    dark:text-teal-400
                                "
                            >
                                Administration
                            </p>

                        </div>


                        <h1
                            className="
                                text-3xl
                                font-bold
                                tracking-tight
                                text-slate-950

                                md:text-4xl

                                dark:text-white
                            "
                        >
                            Organizations
                        </h1>


                        <p
                            className="
                                mt-2
                                max-w-xl
                                text-sm
                                leading-relaxed
                                text-slate-600

                                dark:text-slate-400
                            "
                        >
                            Manage all organizations registered on the
                            Shiyora LMS platform.
                        </p>

                    </div>


                    {/* ADD */}

                    <button
                        type="button"
                        onClick={() => {

                            setError("");

                            setFormData({
                                name: "",
                                email: "",
                                plan: "Basic",
                                password: "",
                            });

                            setShowPassword(false);
                            setCopiedPassword(false);

                            setShowAddModal(true);

                        }}
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
                            font-bold
                            text-white

                            shadow-lg
                            shadow-blue-500/15

                            transition-all
                            duration-200

                            hover:-translate-y-0.5
                            hover:shadow-xl
                            hover:shadow-blue-500/20

                            active:translate-y-0
                        "
                    >
                        <Plus size={18} />

                        Add Organization

                    </button>

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

                    {/* TOTAL ORGANIZATIONS */}

                    <div
                        className="
                            rounded-2xl
                            border
                            border-slate-200
                            bg-white
                            p-5

                            shadow-sm

                            transition-all
                            duration-200

                            hover:-translate-y-1
                            hover:border-blue-200
                            hover:shadow-md

                            dark:border-slate-800
                            dark:bg-[#0b1727]
                            dark:hover:border-blue-500/30
                        "
                    >

                        <div className="flex items-center justify-between">

                            <div>

                                <p
                                    className="
                                        text-xs
                                        font-semibold
                                        text-slate-500

                                        dark:text-slate-400
                                    "
                                >
                                    Total Organizations
                                </p>


                                <h2
                                    className="
                                        mt-2
                                        text-2xl
                                        font-bold
                                        text-slate-950

                                        dark:text-white
                                    "
                                >
                                    {totalOrganizations}
                                </h2>


                                <p
                                    className="
                                        mt-1
                                        text-[11px]
                                        font-medium
                                        text-slate-500

                                        dark:text-slate-500
                                    "
                                >
                                    Registered organizations
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
                                <Building2 size={22} />
                            </div>

                        </div>

                    </div>


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
                            duration-200

                            hover:-translate-y-1
                            hover:border-teal-200
                            hover:shadow-md

                            dark:border-slate-800
                            dark:bg-[#0b1727]
                            dark:hover:border-teal-500/30
                        "
                    >

                        <div className="flex items-center justify-between">

                            <div>

                                <p
                                    className="
                                        text-xs
                                        font-semibold
                                        text-slate-500

                                        dark:text-slate-400
                                    "
                                >
                                    Active Organizations
                                </p>


                                <h2
                                    className="
                                        mt-2
                                        text-2xl
                                        font-bold
                                        text-slate-950

                                        dark:text-white
                                    "
                                >
                                    {activeOrganizations}
                                </h2>


                                <p
                                    className="
                                        mt-1
                                        text-[11px]
                                        font-semibold
                                        text-emerald-600

                                        dark:text-emerald-400
                                    "
                                >
                                    Currently active
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
                                    border-teal-100
                                    bg-teal-50
                                    text-teal-600

                                    dark:border-teal-500/20
                                    dark:bg-teal-500/10
                                    dark:text-teal-400
                                "
                            >
                                <Building2 size={22} />
                            </div>

                        </div>

                    </div>


                    {/* USERS */}

                    <div
                        className="
                            rounded-2xl
                            border
                            border-slate-200
                            bg-white
                            p-5

                            shadow-sm

                            transition-all
                            duration-200

                            hover:-translate-y-1
                            hover:border-slate-300
                            hover:shadow-md

                            dark:border-slate-800
                            dark:bg-[#0b1727]
                            dark:hover:border-slate-700
                        "
                    >

                        <div className="flex items-center justify-between">

                            <div>

                                <p
                                    className="
                                        text-xs
                                        font-semibold
                                        text-slate-500

                                        dark:text-slate-400
                                    "
                                >
                                    Total Users
                                </p>


                                <h2
                                    className="
                                        mt-2
                                        text-2xl
                                        font-bold
                                        text-slate-950

                                        dark:text-white
                                    "
                                >
                                    {totalUsers.toLocaleString()}
                                </h2>


                                <p
                                    className="
                                        mt-1
                                        text-[11px]
                                        font-medium
                                        text-slate-500

                                        dark:text-slate-500
                                    "
                                >
                                    Across organizations
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
                                    border-slate-200
                                    bg-slate-50
                                    text-slate-600

                                    dark:border-slate-700
                                    dark:bg-slate-800
                                    dark:text-slate-300
                                "
                            >
                                <Users size={22} />
                            </div>

                        </div>

                    </div>


                    {/* COURSES */}

                    <div
                        className="
                            rounded-2xl
                            border
                            border-slate-200
                            bg-white
                            p-5

                            shadow-sm

                            transition-all
                            duration-200

                            hover:-translate-y-1
                            hover:border-blue-200
                            hover:shadow-md

                            dark:border-slate-800
                            dark:bg-[#0b1727]
                            dark:hover:border-blue-500/30
                        "
                    >

                        <div className="flex items-center justify-between">

                            <div>

                                <p
                                    className="
                                        text-xs
                                        font-semibold
                                        text-slate-500

                                        dark:text-slate-400
                                    "
                                >
                                    Total Courses
                                </p>


                                <h2
                                    className="
                                        mt-2
                                        text-2xl
                                        font-bold
                                        text-slate-950

                                        dark:text-white
                                    "
                                >
                                    {totalCourses.toLocaleString()}
                                </h2>


                                <p
                                    className="
                                        mt-1
                                        text-[11px]
                                        font-medium
                                        text-slate-500

                                        dark:text-slate-500
                                    "
                                >
                                    Published courses
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
                                <BookOpen size={22} />
                            </div>

                        </div>

                    </div>

                </div>


                {/* =================================================
                    SEARCH
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

                        dark:border-slate-800
                        dark:bg-[#0b1727]
                    "
                >

                    <div className="relative w-full max-w-md">

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
                            onChange={(event) =>
                                setSearch(
                                    event.target.value
                                )
                            }
                            placeholder="Search organizations..."
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
                                font-medium
                                text-slate-900

                                outline-none

                                placeholder:text-slate-400

                                transition

                                focus:border-blue-500
                                focus:bg-white
                                focus:ring-2
                                focus:ring-blue-500/10

                                dark:border-slate-700
                                dark:bg-[#07111f]
                                dark:text-white
                                dark:placeholder:text-slate-600

                                dark:focus:border-teal-500
                                dark:focus:bg-[#07111f]
                                dark:focus:ring-teal-500/10
                            "
                        />

                    </div>

                </div>


                {/* =================================================
                    ERROR
                ================================================== */}

                {error &&
                    !showAddModal &&
                    !editOrganization &&
                    !viewOrganization &&
                    !deleteOrganizationId && (

                        <div
                            className="
                                mb-6
                                rounded-xl

                                border
                                border-red-200

                                bg-red-50

                                px-4
                                py-3

                                text-sm
                                font-medium
                                text-red-700

                                dark:border-red-500/20
                                dark:bg-red-500/10
                                dark:text-red-400
                            "
                        >
                            {error}
                        </div>

                    )}


                {/* =================================================
                    ORGANIZATION TABLE
                ================================================== */}

                <section
                    className="
                        overflow-hidden
                        rounded-2xl

                        border
                        border-slate-200

                        bg-white

                        shadow-sm

                        dark:border-slate-800
                        dark:bg-[#0b1727]
                    "
                >

                    {/* HEADER */}

                    <div
                        className="
                            flex
                            flex-col
                            gap-3

                            border-b
                            border-slate-200

                            bg-white

                            p-6

                            sm:flex-row
                            sm:items-center
                            sm:justify-between

                            dark:border-slate-800
                            dark:bg-[#0b1727]
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
                                        font-bold
                                        uppercase
                                        tracking-[0.18em]

                                        text-blue-600

                                        dark:text-teal-400
                                    "
                                >
                                    Organizations
                                </p>

                            </div>


                            <h2
                                className="
                                    mt-1
                                    text-xl
                                    font-bold
                                    text-slate-950

                                    dark:text-white
                                "
                            >
                                All Organizations
                            </h2>


                            <p
                                className="
                                    mt-1
                                    text-xs
                                    font-medium
                                    text-slate-500

                                    dark:text-slate-400
                                "
                            >
                                Organizations using the Shiyora LMS
                                platform.
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
                                border-teal-100
                                bg-teal-50

                                px-3
                                py-2

                                dark:border-teal-500/20
                                dark:bg-teal-500/10
                            "
                        >

                            <TrendingUp
                                size={14}
                                className="
                                    text-teal-600

                                    dark:text-teal-400
                                "
                            />

                            <span
                                className="
                                    text-[10px]
                                    font-bold
                                    text-teal-700

                                    dark:text-teal-400
                                "
                            >
                                {filteredOrganizations.length} RESULTS
                            </span>

                        </div>

                    </div>


                    {/* TABLE */}

                    <div className="overflow-x-auto">

                        <table className="w-full min-w-[900px]">

                            <thead
                                className="
                                    border-b
                                    border-slate-200
                                    bg-slate-50

                                    dark:border-slate-800
                                    dark:bg-[#101f32]
                                "
                            >

                                <tr>

                                    <th className="px-6 py-4 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Organization
                                    </th>

                                    <th className="px-6 py-4 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Users
                                    </th>

                                    <th className="px-6 py-4 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Courses
                                    </th>

                                    <th className="px-6 py-4 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Plan
                                    </th>

                                    <th className="px-6 py-4 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Status
                                    </th>

                                    <th className="px-6 py-4 text-right text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Action
                                    </th>

                                </tr>

                            </thead>


                            <tbody
                                className="
                                    divide-y
                                    divide-slate-100

                                    dark:divide-slate-800
                                "
                            >

                                {loading ? (

                                    <tr>

                                        <td
                                            colSpan="6"
                                            className="px-6 py-14 text-center"
                                        >

                                            <div
                                                className="
                                                    mx-auto
                                                    mb-3
                                                    h-6
                                                    w-6
                                                    animate-spin
                                                    rounded-full
                                                    border-2
                                                    border-slate-200
                                                    border-t-blue-600

                                                    dark:border-slate-700
                                                    dark:border-t-teal-400
                                                "
                                            />

                                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                                Loading organizations...
                                            </p>

                                        </td>

                                    </tr>

                                ) : filteredOrganizations.length > 0 ? (

                                    filteredOrganizations.map(
                                        (organization) => (

                                            <tr
                                                key={organization.id}
                                                className="
                                                    transition-colors
                                                    hover:bg-slate-50
                                                    dark:hover:bg-[#101f32]
                                                "
                                            >

                                                {/* ORGANIZATION */}

                                                <td className="px-6 py-5">

                                                    <div className="flex items-center gap-3">

                                                        <div
                                                            className="
                                                                flex
                                                                h-11
                                                                w-11
                                                                shrink-0
                                                                items-center
                                                                justify-center
                                                                rounded-xl

                                                                bg-gradient-to-br
                                                                from-blue-600
                                                                to-teal-500

                                                                text-sm
                                                                font-bold
                                                                text-white
                                                            "
                                                        >
                                                            {organization.name
                                                                ?.charAt(0)
                                                                ?.toUpperCase()}
                                                        </div>


                                                        <div className="min-w-0">

                                                            <p className="truncate text-sm font-bold text-slate-900 dark:text-white">
                                                                {organization.name}
                                                            </p>

                                                            <p className="mt-1 truncate text-xs font-medium text-slate-500 dark:text-slate-400">
                                                                {organization.email}
                                                            </p>

                                                        </div>

                                                    </div>

                                                </td>


                                                {/* USERS */}

                                                <td className="px-6 py-5 text-sm font-semibold text-slate-700 dark:text-slate-300">
                                                    {organization.users ?? 0}
                                                </td>


                                                {/* COURSES */}

                                                <td className="px-6 py-5 text-sm font-semibold text-slate-700 dark:text-slate-300">
                                                    {organization.courses ?? 0}
                                                </td>


                                                {/* PLAN */}

                                                <td className="px-6 py-5">

                                                    <span
                                                        className="
                                                            inline-flex
                                                            rounded-lg

                                                            border
                                                            border-slate-200

                                                            bg-slate-50

                                                            px-3
                                                            py-1

                                                            text-[9px]
                                                            font-bold
                                                            uppercase
                                                            tracking-wider
                                                            text-slate-600

                                                            dark:border-slate-700
                                                            dark:bg-slate-800
                                                            dark:text-slate-300
                                                        "
                                                    >
                                                        {organization.plan ?? "Basic"}
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
                                                            px-3
                                                            py-1
                                                            text-xs
                                                            font-bold

                                                            ${(
                                                                organization.status ||
                                                                "Active"
                                                            ).toLowerCase() ===
                                                                "active"

                                                                ? `
                                                                        bg-emerald-50
                                                                        text-emerald-700

                                                                        dark:bg-emerald-500/10
                                                                        dark:text-emerald-400
                                                                    `

                                                                : `
                                                                        bg-amber-50
                                                                        text-amber-700

                                                                        dark:bg-amber-500/10
                                                                        dark:text-amber-400
                                                                    `
                                                            }
                                                        `}
                                                    >

                                                        <span
                                                            className={`
                                                                h-1.5
                                                                w-1.5
                                                                rounded-full

                                                                ${(
                                                                    organization.status ||
                                                                    "Active"
                                                                ).toLowerCase() ===
                                                                    "active"

                                                                    ? "bg-emerald-500"

                                                                    : "bg-amber-500"
                                                                }
                                                            `}
                                                        />

                                                        {organization.status ?? "Active"}

                                                    </span>

                                                </td>


                                                {/* ACTION */}

                                                <td className="relative px-6 py-5 text-right">

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            setOpenMenu(
                                                                openMenu ===
                                                                    organization.id
                                                                    ? null
                                                                    : organization.id
                                                            )
                                                        }
                                                        className="
                                                            rounded-lg
                                                            p-2

                                                            text-slate-500

                                                            transition

                                                            hover:bg-slate-100
                                                            hover:text-slate-900

                                                            dark:text-slate-400
                                                            dark:hover:bg-slate-800
                                                            dark:hover:text-white
                                                        "
                                                    >
                                                        <MoreVertical size={18} />
                                                    </button>


                                                    {/* DROPDOWN */}

                                                    {openMenu === organization.id && (

                                                        <div
                                                            className="
                                                                absolute
                                                                right-6
                                                                top-14
                                                                z-30
                                                                w-36
                                                                overflow-hidden
                                                                rounded-xl

                                                                border
                                                                border-slate-200

                                                                bg-white

                                                                py-1

                                                                text-left

                                                                shadow-xl

                                                                dark:border-slate-700
                                                                dark:bg-[#101f32]
                                                            "
                                                        >

                                                            {/* VIEW */}

                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    handleView(
                                                                        organization
                                                                    )
                                                                }
                                                                className="
                                                                    flex
                                                                    w-full
                                                                    items-center
                                                                    gap-2
                                                                    px-4
                                                                    py-2.5

                                                                    text-sm
                                                                    font-medium
                                                                    text-slate-700

                                                                    transition

                                                                    hover:bg-blue-50
                                                                    hover:text-blue-700

                                                                    dark:text-slate-300
                                                                    dark:hover:bg-blue-500/10
                                                                    dark:hover:text-blue-400
                                                                "
                                                            >
                                                                <Eye size={15} />
                                                                View
                                                            </button>


                                                            {/* EDIT */}

                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    handleEdit(
                                                                        organization
                                                                    )
                                                                }
                                                                className="
                                                                    flex
                                                                    w-full
                                                                    items-center
                                                                    gap-2
                                                                    px-4
                                                                    py-2.5

                                                                    text-sm
                                                                    font-medium
                                                                    text-slate-700

                                                                    transition

                                                                    hover:bg-blue-50
                                                                    hover:text-blue-700

                                                                    dark:text-slate-300
                                                                    dark:hover:bg-blue-500/10
                                                                    dark:hover:text-blue-400
                                                                "
                                                            >
                                                                <Pencil size={15} />
                                                                Edit
                                                            </button>


                                                            {/* DELETE */}

                                                            <button
                                                                type="button"
                                                                onClick={() => {

                                                                    setOpenMenu(null);
                                                                    setError("");

                                                                    setDeleteOrganizationId(
                                                                        organization.id
                                                                    );

                                                                }}
                                                                className="
                                                                    flex
                                                                    w-full
                                                                    items-center
                                                                    gap-2
                                                                    px-4
                                                                    py-2.5

                                                                    text-sm
                                                                    font-medium
                                                                    text-red-600

                                                                    transition

                                                                    hover:bg-red-50

                                                                    dark:text-red-400
                                                                    dark:hover:bg-red-500/10
                                                                "
                                                            >
                                                                <Trash2 size={15} />
                                                                Delete
                                                            </button>

                                                        </div>

                                                    )}

                                                </td>

                                            </tr>

                                        )
                                    )

                                ) : null}

                            </tbody>

                        </table>

                    </div>


                    {/* EMPTY STATE */}

                    {!loading &&
                        filteredOrganizations.length === 0 && (

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
                                    <Building2 size={26} />
                                </div>


                                <h3 className="mt-4 font-bold text-slate-900 dark:text-white">
                                    No organizations found
                                </h3>


                                <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
                                    {search
                                        ? "Try changing your search."
                                        : "Create your first organization to get started."}
                                </p>

                            </div>

                        )}

                </section>


                {/* =================================================
                    ADD ORGANIZATION MODAL
                ================================================== */}

                {showAddModal && (

                    <div
                        className="
                            fixed
                            inset-0
                            z-50
                            flex
                            items-center
                            justify-center

                            bg-slate-950/50

                            px-4

                            backdrop-blur-sm

                            dark:bg-black/70
                        "
                    >

                        <div
                            className="
                                w-full
                                max-w-md

                                max-h-[90vh]
                                overflow-y-auto

                                rounded-2xl

                                border
                                border-slate-200

                                bg-white

                                p-6

                                shadow-2xl

                                dark:border-slate-700
                                dark:bg-[#0b1727]
                            "
                        >

                            {/* HEADER */}

                            <div className="mb-6 flex items-start justify-between">

                                <div>

                                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-teal-400">
                                        Organization
                                    </p>

                                    <h2 className="mt-1 text-2xl font-bold text-slate-950 dark:text-white">
                                        Add Organization
                                    </h2>

                                    <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                                        Create a new organization on Shiyora.
                                    </p>

                                </div>


                                <button
                                    type="button"
                                    onClick={() => {

                                        setShowAddModal(false);
                                        setError("");
                                        setShowPassword(false);
                                        setCopiedPassword(false);

                                    }}
                                    className="
                                        flex
                                        h-9
                                        w-9
                                        items-center
                                        justify-center
                                        rounded-lg

                                        text-slate-500

                                        transition

                                        hover:bg-slate-100
                                        hover:text-slate-900

                                        dark:text-slate-400
                                        dark:hover:bg-slate-800
                                        dark:hover:text-white
                                    "
                                >
                                    <X size={18} />
                                </button>

                            </div>


                            {/* FORM */}

                            <form onSubmit={handleCreate}>

                                {/* NAME */}

                                <div className="mb-4">

                                    <label className="mb-2 block text-xs font-bold text-slate-700 dark:text-slate-300">
                                        Organization Name
                                    </label>

                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(event) =>
                                            setFormData({
                                                ...formData,
                                                name: event.target.value,
                                            })
                                        }
                                        placeholder="Enter organization name"
                                        className="
                                            w-full
                                            rounded-xl
                                            border
                                            border-slate-200
                                            bg-slate-50
                                            px-4
                                            py-3
                                            text-sm
                                            font-medium
                                            text-slate-900
                                            outline-none
                                            placeholder:text-slate-400
                                            transition
                                            focus:border-blue-500
                                            focus:bg-white
                                            focus:ring-2
                                            focus:ring-blue-500/10

                                            dark:border-slate-700
                                            dark:bg-[#07111f]
                                            dark:text-white
                                            dark:placeholder:text-slate-600
                                            dark:focus:border-teal-500
                                        "
                                    />

                                </div>


                                {/* EMAIL */}

                                <div className="mb-4">

                                    <label className="mb-2 block text-xs font-bold text-slate-700 dark:text-slate-300">
                                        Organization Email
                                    </label>

                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(event) =>
                                            setFormData({
                                                ...formData,
                                                email: event.target.value,
                                            })
                                        }
                                        placeholder="admin@example.com"
                                        className="
                                            w-full
                                            rounded-xl
                                            border
                                            border-slate-200
                                            bg-slate-50
                                            px-4
                                            py-3
                                            text-sm
                                            font-medium
                                            text-slate-900
                                            outline-none
                                            placeholder:text-slate-400
                                            transition
                                            focus:border-blue-500
                                            focus:bg-white
                                            focus:ring-2
                                            focus:ring-blue-500/10

                                            dark:border-slate-700
                                            dark:bg-[#07111f]
                                            dark:text-white
                                            dark:focus:border-teal-500
                                        "
                                    />

                                </div>


                                {/* PLAN */}

                                <div className="mb-4">

                                    <label className="mb-2 block text-xs font-bold text-slate-700 dark:text-slate-300">
                                        Plan
                                    </label>

                                    <select
                                        value={formData.plan}
                                        onChange={(event) =>
                                            setFormData({
                                                ...formData,
                                                plan: event.target.value,
                                            })
                                        }
                                        className="
                                            w-full
                                            rounded-xl
                                            border
                                            border-slate-200
                                            bg-slate-50
                                            px-4
                                            py-3
                                            text-sm
                                            font-medium
                                            text-slate-900
                                            outline-none

                                            focus:border-blue-500
                                            focus:ring-2
                                            focus:ring-blue-500/10

                                            dark:border-slate-700
                                            dark:bg-[#07111f]
                                            dark:text-white
                                            dark:focus:border-teal-500
                                        "
                                    >

                                        <option value="Basic">
                                            Basic
                                        </option>

                                        <option value="Pro">
                                            Pro
                                        </option>

                                        <option value="Enterprise">
                                            Enterprise
                                        </option>

                                    </select>

                                </div>


                                {/* PASSWORD */}

                                <div className="mb-5">

                                    <div className="mb-2 flex items-center justify-between gap-3">

                                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                                            Organization Password
                                        </label>


                                        <button
                                            type="button"
                                            onClick={generatePassword}
                                            className="
                                                flex
                                                shrink-0
                                                items-center
                                                gap-1.5

                                                rounded-lg

                                                bg-blue-50
                                                px-2.5
                                                py-1.5

                                                text-[10px]
                                                font-bold
                                                text-blue-700

                                                transition

                                                hover:bg-blue-100

                                                dark:bg-blue-500/10
                                                dark:text-blue-400
                                                dark:hover:bg-blue-500/20
                                            "
                                        >
                                            <KeyRound size={13} />

                                            Generate Password
                                        </button>

                                    </div>


                                    <div className="relative">

                                        <input
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            required
                                            minLength={8}
                                            value={formData.password}
                                            onChange={(event) =>
                                                setFormData({
                                                    ...formData,
                                                    password:
                                                        event.target.value,
                                                })
                                            }
                                            placeholder="Enter or generate password"
                                            className="
                                                w-full
                                                rounded-xl
                                                border
                                                border-slate-200
                                                bg-slate-50

                                                py-3
                                                pl-4
                                                pr-24

                                                text-sm
                                                font-medium
                                                text-slate-900

                                                outline-none

                                                placeholder:text-slate-400

                                                transition

                                                focus:border-blue-500
                                                focus:bg-white
                                                focus:ring-2
                                                focus:ring-blue-500/10

                                                dark:border-slate-700
                                                dark:bg-[#07111f]
                                                dark:text-white
                                                dark:placeholder:text-slate-600
                                                dark:focus:border-teal-500
                                            "
                                        />


                                        <div
                                            className="
                                                absolute
                                                right-2
                                                top-1/2
                                                flex
                                                -translate-y-1/2
                                                items-center
                                                gap-1
                                            "
                                        >

                                            {/* SHOW / HIDE */}

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setShowPassword(
                                                        !showPassword
                                                    )
                                                }
                                                className="
                                                    flex
                                                    h-8
                                                    w-8
                                                    items-center
                                                    justify-center
                                                    rounded-lg

                                                    text-slate-500

                                                    transition

                                                    hover:bg-slate-200
                                                    hover:text-slate-900

                                                    dark:text-slate-400
                                                    dark:hover:bg-slate-800
                                                    dark:hover:text-white
                                                "
                                                title={
                                                    showPassword
                                                        ? "Hide password"
                                                        : "Show password"
                                                }
                                            >

                                                {showPassword ? (
                                                    <EyeOff size={16} />
                                                ) : (
                                                    <Eye size={16} />
                                                )}

                                            </button>


                                            {/* COPY */}

                                            <button
                                                type="button"
                                                onClick={copyPassword}
                                                disabled={
                                                    !formData.password
                                                }
                                                className="
                                                    flex
                                                    h-8
                                                    w-8
                                                    items-center
                                                    justify-center
                                                    rounded-lg

                                                    text-slate-500

                                                    transition

                                                    hover:bg-slate-200
                                                    hover:text-slate-900

                                                    disabled:cursor-not-allowed
                                                    disabled:opacity-40

                                                    dark:text-slate-400
                                                    dark:hover:bg-slate-800
                                                    dark:hover:text-white
                                                "
                                                title="Copy password"
                                            >

                                                {copiedPassword ? (
                                                    <Check
                                                        size={16}
                                                        className="text-emerald-500"
                                                    />
                                                ) : (
                                                    <Copy size={16} />
                                                )}

                                            </button>

                                        </div>

                                    </div>


                                    <p
                                        className="
                                            mt-2
                                            text-[10px]
                                            font-medium
                                            text-slate-400

                                            dark:text-slate-500
                                        "
                                    >
                                        Minimum 8 characters. You can generate
                                        a secure temporary password automatically.
                                    </p>

                                </div>


                                {/* ERROR */}

                                {error && (

                                    <p
                                        className="
                                            mb-4
                                            rounded-lg
                                            border
                                            border-red-200
                                            bg-red-50
                                            px-3
                                            py-2
                                            text-xs
                                            font-medium
                                            text-red-700

                                            dark:border-red-500/20
                                            dark:bg-red-500/10
                                            dark:text-red-400
                                        "
                                    >
                                        {error}
                                    </p>

                                )}


                                {/* BUTTONS */}

                                <div className="flex gap-3">

                                    <button
                                        type="button"
                                        onClick={() => {

                                            setShowAddModal(false);
                                            setError("");
                                            setShowPassword(false);
                                            setCopiedPassword(false);

                                        }}
                                        className="
                                            flex-1
                                            rounded-xl
                                            border
                                            border-slate-200
                                            bg-white
                                            px-4
                                            py-3
                                            text-sm
                                            font-bold
                                            text-slate-700
                                            transition
                                            hover:bg-slate-50

                                            dark:border-slate-700
                                            dark:bg-slate-900
                                            dark:text-slate-300
                                            dark:hover:bg-slate-800
                                        "
                                    >
                                        Cancel
                                    </button>


                                    <button
                                        type="submit"
                                        disabled={creating}
                                        className="
                                            flex-1
                                            rounded-xl
                                            bg-gradient-to-r
                                            from-blue-600
                                            to-teal-500
                                            px-4
                                            py-3
                                            text-sm
                                            font-bold
                                            text-white
                                            shadow-sm
                                            transition
                                            hover:shadow-md
                                            disabled:cursor-not-allowed
                                            disabled:opacity-50
                                        "
                                    >
                                        {creating
                                            ? "Creating..."
                                            : "Create Organization"}
                                    </button>

                                </div>

                            </form>

                        </div>

                    </div>

                )}


                {/* =================================================
                    VIEW ORGANIZATION MODAL
                ================================================== */}

                {(viewLoading || viewOrganization) && (

                    <div
                        className="
                            fixed
                            inset-0
                            z-50
                            flex
                            items-center
                            justify-center
                            bg-slate-950/50
                            px-4
                            backdrop-blur-sm
                            dark:bg-black/70
                        "
                    >

                        <div
                            className="
                                w-full
                                max-w-md
                                rounded-2xl
                                border
                                border-slate-200
                                bg-white
                                p-6
                                shadow-2xl

                                dark:border-slate-700
                                dark:bg-[#0b1727]
                            "
                        >

                            {viewLoading ? (

                                <div className="py-10 text-center">

                                    <div
                                        className="
                                            mx-auto
                                            mb-4
                                            h-7
                                            w-7
                                            animate-spin
                                            rounded-full
                                            border-2
                                            border-slate-200
                                            border-t-blue-600

                                            dark:border-slate-700
                                            dark:border-t-teal-400
                                        "
                                    />

                                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                        Loading organization...
                                    </p>

                                </div>

                            ) : (

                                <>

                                    {/* HEADER */}

                                    <div className="mb-6 flex items-start justify-between">

                                        <div>

                                            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-teal-400">
                                                Organization Details
                                            </p>

                                            <h2 className="mt-1 text-2xl font-bold text-slate-950 dark:text-white">
                                                {viewOrganization?.name}
                                            </h2>

                                        </div>


                                        <button
                                            type="button"
                                            onClick={() =>
                                                setViewOrganization(null)
                                            }
                                            className="
                                                flex
                                                h-9
                                                w-9
                                                items-center
                                                justify-center
                                                rounded-lg

                                                text-slate-500

                                                transition

                                                hover:bg-slate-100
                                                hover:text-slate-900

                                                dark:text-slate-400
                                                dark:hover:bg-slate-800
                                                dark:hover:text-white
                                            "
                                        >
                                            <X size={18} />
                                        </button>

                                    </div>


                                    {/* DETAILS */}

                                    <div className="space-y-3">

                                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-[#07111f]">

                                            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                                Email
                                            </p>

                                            <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                                                {viewOrganization?.email}
                                            </p>

                                        </div>


                                        <div className="grid grid-cols-2 gap-3">

                                            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-[#07111f]">

                                                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                                    Users
                                                </p>

                                                <p className="mt-1 text-xl font-bold text-slate-900 dark:text-white">
                                                    {viewOrganization?.users ?? 0}
                                                </p>

                                            </div>


                                            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-[#07111f]">

                                                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                                    Courses
                                                </p>

                                                <p className="mt-1 text-xl font-bold text-slate-900 dark:text-white">
                                                    {viewOrganization?.courses ?? 0}
                                                </p>

                                            </div>

                                        </div>


                                        <div className="grid grid-cols-2 gap-3">

                                            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-[#07111f]">

                                                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                                    Plan
                                                </p>

                                                <p className="mt-1 text-sm font-bold text-slate-900 dark:text-white">
                                                    {viewOrganization?.plan || "Basic"}
                                                </p>

                                            </div>


                                            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-[#07111f]">

                                                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                                    Status
                                                </p>

                                                <p className="mt-1 text-sm font-bold text-emerald-600 dark:text-emerald-400">
                                                    {viewOrganization?.status || "Active"}
                                                </p>

                                            </div>

                                        </div>


                                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-[#07111f]">

                                            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                                Created
                                            </p>

                                            <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                                                {viewOrganization?.created_at
                                                    ? new Date(
                                                        viewOrganization.created_at
                                                    ).toLocaleString()
                                                    : "—"}
                                            </p>

                                        </div>

                                    </div>


                                    <button
                                        type="button"
                                        onClick={() =>
                                            setViewOrganization(null)
                                        }
                                        className="
                                            mt-6
                                            w-full
                                            rounded-xl
                                            bg-gradient-to-r
                                            from-blue-600
                                            to-teal-500
                                            px-4
                                            py-3
                                            text-sm
                                            font-bold
                                            text-white
                                        "
                                    >
                                        Close
                                    </button>

                                </>

                            )}

                        </div>

                    </div>

                )}


                {/* =================================================
                    EDIT ORGANIZATION MODAL
                ================================================== */}

                {editOrganization && (

                    <div
                        className="
                            fixed
                            inset-0
                            z-50
                            flex
                            items-center
                            justify-center
                            bg-slate-950/50
                            px-4
                            backdrop-blur-sm
                            dark:bg-black/70
                        "
                    >

                        <div
                            className="
                                w-full
                                max-w-md
                                rounded-2xl
                                border
                                border-slate-200
                                bg-white
                                p-6
                                shadow-2xl

                                dark:border-slate-700
                                dark:bg-[#0b1727]
                            "
                        >

                            {/* HEADER */}

                            <div className="mb-6 flex items-start justify-between">

                                <div>

                                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-teal-400">
                                        Organization
                                    </p>

                                    <h2 className="mt-1 text-2xl font-bold text-slate-950 dark:text-white">
                                        Edit Organization
                                    </h2>

                                </div>


                                <button
                                    type="button"
                                    onClick={() => {
                                        setEditOrganization(null);
                                        setError("");
                                    }}
                                    className="
                                        flex
                                        h-9
                                        w-9
                                        items-center
                                        justify-center
                                        rounded-lg
                                        text-slate-500
                                        transition
                                        hover:bg-slate-100
                                        hover:text-slate-900
                                        dark:text-slate-400
                                        dark:hover:bg-slate-800
                                        dark:hover:text-white
                                    "
                                >
                                    <X size={18} />
                                </button>

                            </div>


                            <form onSubmit={handleUpdate}>

                                {/* NAME */}

                                <div className="mb-4">

                                    <label className="mb-2 block text-xs font-bold text-slate-700 dark:text-slate-300">
                                        Organization Name
                                    </label>

                                    <input
                                        type="text"
                                        required
                                        value={editOrganization.name}
                                        onChange={(event) =>
                                            setEditOrganization({
                                                ...editOrganization,
                                                name: event.target.value,
                                            })
                                        }
                                        className="
                                            w-full
                                            rounded-xl
                                            border
                                            border-slate-200
                                            bg-slate-50
                                            px-4
                                            py-3
                                            text-sm
                                            font-medium
                                            text-slate-900
                                            outline-none

                                            focus:border-blue-500
                                            focus:ring-2
                                            focus:ring-blue-500/10

                                            dark:border-slate-700
                                            dark:bg-[#07111f]
                                            dark:text-white
                                            dark:focus:border-teal-500
                                        "
                                    />

                                </div>


                                {/* EMAIL */}

                                <div className="mb-4">

                                    <label className="mb-2 block text-xs font-bold text-slate-700 dark:text-slate-300">
                                        Organization Email
                                    </label>

                                    <input
                                        type="email"
                                        required
                                        value={editOrganization.email}
                                        onChange={(event) =>
                                            setEditOrganization({
                                                ...editOrganization,
                                                email: event.target.value,
                                            })
                                        }
                                        className="
                                            w-full
                                            rounded-xl
                                            border
                                            border-slate-200
                                            bg-slate-50
                                            px-4
                                            py-3
                                            text-sm
                                            font-medium
                                            text-slate-900
                                            outline-none

                                            focus:border-blue-500
                                            focus:ring-2
                                            focus:ring-blue-500/10

                                            dark:border-slate-700
                                            dark:bg-[#07111f]
                                            dark:text-white
                                            dark:focus:border-teal-500
                                        "
                                    />

                                </div>


                                {/* PLAN */}

                                <div className="mb-4">

                                    <label className="mb-2 block text-xs font-bold text-slate-700 dark:text-slate-300">
                                        Plan
                                    </label>

                                    <select
                                        value={editOrganization.plan}
                                        onChange={(event) =>
                                            setEditOrganization({
                                                ...editOrganization,
                                                plan: event.target.value,
                                            })
                                        }
                                        className="
                                            w-full
                                            rounded-xl
                                            border
                                            border-slate-200
                                            bg-slate-50
                                            px-4
                                            py-3
                                            text-sm
                                            font-medium
                                            text-slate-900
                                            outline-none

                                            dark:border-slate-700
                                            dark:bg-[#07111f]
                                            dark:text-white
                                        "
                                    >

                                        <option value="Basic">
                                            Basic
                                        </option>

                                        <option value="Pro">
                                            Pro
                                        </option>

                                        <option value="Enterprise">
                                            Enterprise
                                        </option>

                                    </select>

                                </div>


                                {/* STATUS */}

                                <div className="mb-5">

                                    <label className="mb-2 block text-xs font-bold text-slate-700 dark:text-slate-300">
                                        Status
                                    </label>

                                    <select
                                        value={editOrganization.status}
                                        onChange={(event) =>
                                            setEditOrganization({
                                                ...editOrganization,
                                                status: event.target.value,
                                            })
                                        }
                                        className="
                                            w-full
                                            rounded-xl
                                            border
                                            border-slate-200
                                            bg-slate-50
                                            px-4
                                            py-3
                                            text-sm
                                            font-medium
                                            text-slate-900
                                            outline-none

                                            dark:border-slate-700
                                            dark:bg-[#07111f]
                                            dark:text-white
                                        "
                                    >

                                        <option value="Active">
                                            Active
                                        </option>

                                        <option value="Suspended">
                                            Suspended
                                        </option>

                                    </select>

                                </div>


                                {/* ERROR */}

                                {error && (

                                    <p
                                        className="
                                            mb-4
                                            rounded-lg
                                            border
                                            border-red-200
                                            bg-red-50
                                            px-3
                                            py-2
                                            text-xs
                                            font-medium
                                            text-red-700

                                            dark:border-red-500/20
                                            dark:bg-red-500/10
                                            dark:text-red-400
                                        "
                                    >
                                        {error}
                                    </p>

                                )}


                                {/* BUTTONS */}

                                <div className="flex gap-3">

                                    <button
                                        type="button"
                                        disabled={updating}
                                        onClick={() => {
                                            setEditOrganization(null);
                                            setError("");
                                        }}
                                        className="
                                            flex-1
                                            rounded-xl
                                            border
                                            border-slate-200
                                            bg-white
                                            px-4
                                            py-3
                                            text-sm
                                            font-bold
                                            text-slate-700

                                            dark:border-slate-700
                                            dark:bg-slate-900
                                            dark:text-slate-300
                                        "
                                    >
                                        Cancel
                                    </button>


                                    <button
                                        type="submit"
                                        disabled={updating}
                                        className="
                                            flex-1
                                            rounded-xl
                                            bg-gradient-to-r
                                            from-blue-600
                                            to-teal-500
                                            px-4
                                            py-3
                                            text-sm
                                            font-bold
                                            text-white

                                            disabled:cursor-not-allowed
                                            disabled:opacity-50
                                        "
                                    >
                                        {updating
                                            ? "Saving..."
                                            : "Save Changes"}
                                    </button>

                                </div>

                            </form>

                        </div>

                    </div>

                )}


                {/* =================================================
                    DELETE CONFIRMATION
                ================================================== */}

                {deleteOrganizationId && (

                    <div
                        className="
                            fixed
                            inset-0
                            z-50
                            flex
                            items-center
                            justify-center
                            bg-slate-950/50
                            px-4
                            backdrop-blur-sm
                            dark:bg-black/70
                        "
                    >

                        <div
                            className="
                                w-full
                                max-w-sm
                                rounded-2xl
                                border
                                border-slate-200
                                bg-white
                                p-6
                                shadow-2xl

                                dark:border-slate-700
                                dark:bg-[#0b1727]
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
                                    bg-red-50
                                    text-red-600

                                    dark:bg-red-500/10
                                    dark:text-red-400
                                "
                            >
                                <Trash2 size={24} />
                            </div>


                            <h2
                                className="
                                    mt-5
                                    text-center
                                    text-xl
                                    font-bold
                                    text-slate-950

                                    dark:text-white
                                "
                            >
                                Delete Organization?
                            </h2>


                            <p
                                className="
                                    mt-2
                                    text-center
                                    text-sm
                                    leading-relaxed
                                    text-slate-500

                                    dark:text-slate-400
                                "
                            >
                                This action will permanently delete the
                                organization and its related data.
                            </p>


                            {error && (

                                <p
                                    className="
                                        mt-4
                                        rounded-lg
                                        border
                                        border-red-200
                                        bg-red-50
                                        px-3
                                        py-2
                                        text-xs
                                        font-medium
                                        text-red-700

                                        dark:border-red-500/20
                                        dark:bg-red-500/10
                                        dark:text-red-400
                                    "
                                >
                                    {error}
                                </p>

                            )}


                            <div className="mt-6 flex gap-3">

                                <button
                                    type="button"
                                    disabled={deleting}
                                    onClick={() => {
                                        setDeleteOrganizationId(null);
                                        setError("");
                                    }}
                                    className="
                                        flex-1
                                        rounded-xl
                                        border
                                        border-slate-200
                                        bg-white
                                        px-4
                                        py-3
                                        text-sm
                                        font-bold
                                        text-slate-700

                                        dark:border-slate-700
                                        dark:bg-slate-900
                                        dark:text-slate-300
                                    "
                                >
                                    Cancel
                                </button>


                                <button
                                    type="button"
                                    disabled={deleting}
                                    onClick={handleDelete}
                                    className="
                                        flex-1
                                        rounded-xl
                                        bg-red-600
                                        px-4
                                        py-3
                                        text-sm
                                        font-bold
                                        text-white

                                        transition
                                        hover:bg-red-700

                                        disabled:cursor-not-allowed
                                        disabled:opacity-50
                                    "
                                >
                                    {deleting
                                        ? "Deleting..."
                                        : "Delete"}
                                </button>

                            </div>

                        </div>

                    </div>

                )}


                {/* =================================================
                    FOOTER
                ================================================== */}

                <div
                    className="
                        mt-5
                        flex
                        flex-col
                        gap-2

                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                    "
                >

                    <p
                        className="
                            text-[9px]
                            font-bold
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
                            font-bold
                            uppercase
                            tracking-wider
                            text-slate-400

                            dark:text-slate-600
                        "
                    >
                        Organization Management
                    </p>

                </div>

            </div>

        </main>
    );
};


export default Organizations;