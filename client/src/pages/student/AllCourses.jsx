import React, { useMemo, useState } from "react";
import {
    Award,
    BookOpen,
    CheckCircle2,
    Clock3,
    GraduationCap,
    PlayCircle,
    Search,
    Star,
    Users,
    X,
} from "lucide-react";

const AllCourses = () => {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [level, setLevel] = useState("All");
    const [selectedCourse, setSelectedCourse] = useState(null);

    // =====================================================
    // COURSE DATA
    // =====================================================

    const courses = [
        {
            id: 1,
            title: "Full Stack Web Development",
            category: "Development",
            level: "Intermediate",
            instructor: "Rahul Sharma",
            rating: 4.8,
            students: 245,
            lessons: 45,
            duration: "32 Hours",
            price: "₹2,999",
            description:
                "Learn full stack web development from frontend fundamentals to backend APIs and database integration.",
            topics: [
                "HTML & CSS",
                "JavaScript",
                "React.js",
                "Node.js",
                "Express.js",
                "Database",
            ],
        },
        {
            id: 2,
            title: "Java Programming",
            category: "Programming",
            level: "Beginner",
            instructor: "Amit Verma",
            rating: 4.7,
            students: 320,
            lessons: 50,
            duration: "38 Hours",
            price: "₹2,499",
            description:
                "Build a strong foundation in Java programming, object-oriented programming, collections, exception handling, and more.",
            topics: [
                "Java Basics",
                "OOPs",
                "Inheritance",
                "Collections",
                "Exception Handling",
                "File Handling",
            ],
        },
        {
            id: 3,
            title: "Database Management System",
            category: "Database",
            level: "Intermediate",
            instructor: "Priya Singh",
            rating: 4.6,
            students: 185,
            lessons: 35,
            duration: "24 Hours",
            price: "₹1,999",
            description:
                "Understand relational databases, SQL, normalization, transactions, keys, relationships, and database design.",
            topics: [
                "DBMS Basics",
                "SQL",
                "Normalization",
                "ER Model",
                "Transactions",
                "Database Design",
            ],
        },
        {
            id: 4,
            title: "HTML & CSS Fundamentals",
            category: "Web Development",
            level: "Beginner",
            instructor: "Neha Gupta",
            rating: 4.9,
            students: 410,
            lessons: 30,
            duration: "18 Hours",
            price: "₹1,499",
            description:
                "Learn how to build modern and responsive websites using HTML5 and CSS3 from the ground up.",
            topics: [
                "HTML5",
                "CSS3",
                "Flexbox",
                "Grid",
                "Responsive Design",
                "Animations",
            ],
        },
        {
            id: 5,
            title: "JavaScript Essentials",
            category: "Development",
            level: "Beginner",
            instructor: "Rahul Sharma",
            rating: 4.8,
            students: 375,
            lessons: 40,
            duration: "28 Hours",
            price: "₹2,199",
            description:
                "Master JavaScript fundamentals, DOM manipulation, events, arrays, objects, ES6, and asynchronous programming.",
            topics: [
                "JavaScript Basics",
                "Functions",
                "Arrays",
                "Objects",
                "DOM",
                "ES6",
            ],
        },
        {
            id: 6,
            title: "React.js Masterclass",
            category: "Development",
            level: "Advanced",
            instructor: "Vikash Kumar",
            rating: 4.9,
            students: 210,
            lessons: 48,
            duration: "35 Hours",
            price: "₹3,499",
            description:
                "Build modern React applications using components, hooks, routing, APIs, and best practices.",
            topics: [
                "React Components",
                "Hooks",
                "React Router",
                "State Management",
                "REST APIs",
                "Performance",
            ],
        },
        {
            id: 7,
            title: "UI/UX Design Fundamentals",
            category: "Design",
            level: "Beginner",
            instructor: "Sneha Kapoor",
            rating: 4.7,
            students: 160,
            lessons: 28,
            duration: "20 Hours",
            price: "₹1,799",
            description:
                "Learn the fundamentals of user interface and user experience design and create effective digital experiences.",
            topics: [
                "UI Principles",
                "UX Research",
                "Wireframing",
                "Prototyping",
                "Typography",
                "Design Systems",
            ],
        },
        {
            id: 8,
            title: "Advanced SQL",
            category: "Database",
            level: "Advanced",
            instructor: "Priya Singh",
            rating: 4.8,
            students: 135,
            lessons: 32,
            duration: "22 Hours",
            price: "₹2,299",
            description:
                "Take your SQL skills further with advanced queries, joins, subqueries, indexes, views, and database optimization.",
            topics: [
                "Advanced Queries",
                "Joins",
                "Subqueries",
                "Indexes",
                "Views",
                "Optimization",
            ],
        },
    ];

    const categories = [
        "All",
        "Development",
        "Programming",
        "Database",
        "Web Development",
        "Design",
    ];

    const levels = [
        "All",
        "Beginner",
        "Intermediate",
        "Advanced",
    ];

    // =====================================================
    // FILTER COURSES
    // =====================================================

    const filteredCourses = useMemo(() => {
        const searchValue = search.toLowerCase().trim();

        return courses.filter((course) => {
            const matchesSearch =
                course.title
                    .toLowerCase()
                    .includes(searchValue) ||
                course.instructor
                    .toLowerCase()
                    .includes(searchValue) ||
                course.category
                    .toLowerCase()
                    .includes(searchValue);

            const matchesCategory =
                category === "All" ||
                course.category === category;

            const matchesLevel =
                level === "All" ||
                course.level === level;

            return (
                matchesSearch &&
                matchesCategory &&
                matchesLevel
            );
        });
    }, [search, category, level]);

    // =====================================================
    // ENROLL
    // =====================================================

    const handleEnroll = (course) => {
        alert(
            `Enrollment for "${course.title}" will be connected to the backend later.`
        );
    };

    // =====================================================
    // CLEAR FILTERS
    // =====================================================

    const clearFilters = () => {
        setSearch("");
        setCategory("All");
        setLevel("All");
    };

    return (
        <div
            className="
                min-h-full
                bg-slate-50
                px-4 py-6
                text-slate-700
                sm:px-6
                lg:px-8
                lg:py-8
                dark:bg-[#07111f]
                dark:text-slate-300
            "
        >
            <div className="mx-auto max-w-7xl">

                {/* =================================================
                    HEADER
                ================================================= */}

                <div
                    className="
                        mb-7 flex flex-col
                        gap-4
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                    "
                >
                    <div className="flex items-center gap-4">

                        <div
                            className="
                                flex h-12 w-12
                                shrink-0
                                items-center
                                justify-center
                                rounded-2xl
                                bg-gradient-to-br
                                from-blue-600
                                to-teal-500
                                text-white
                                shadow-md
                                shadow-blue-500/20
                            "
                        >
                            <GraduationCap size={25} />
                        </div>

                        <div>
                            <h1
                                className="
                                    text-2xl
                                    font-extrabold
                                    tracking-tight
                                    text-slate-950
                                    sm:text-3xl
                                    dark:text-white
                                "
                            >
                                All Courses
                            </h1>

                            <p
                                className="
                                    mt-1 text-xs
                                    text-slate-500
                                    sm:text-sm
                                    dark:text-slate-400
                                "
                            >
                                Explore courses and find the
                                right one for your learning journey.
                            </p>
                        </div>
                    </div>
                </div>

                {/* =================================================
                    SEARCH & FILTERS
                ================================================= */}

                <div
                    className="
                        mb-7 rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        p-4
                        shadow-sm
                        dark:border-[#1e334a]
                        dark:bg-[#0b1727]
                    "
                >
                    <div
                        className="
                            flex flex-col
                            gap-3
                            lg:flex-row
                        "
                    >

                        {/* SEARCH */}

                        <div className="relative flex-1">
                            <Search
                                size={18}
                                className="
                                    absolute
                                    left-4 top-1/2
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
                                placeholder="Search courses, instructors..."
                                className="
                                    w-full
                                    rounded-xl
                                    border
                                    border-slate-200
                                    bg-slate-50
                                    py-3 pl-11 pr-4
                                    text-sm
                                    text-slate-800
                                    outline-none
                                    placeholder:text-slate-400
                                    focus:border-blue-500
                                    focus:ring-2
                                    focus:ring-blue-500/10
                                    dark:border-[#1e334a]
                                    dark:bg-[#07111f]
                                    dark:text-slate-200
                                    dark:placeholder:text-slate-500
                                    dark:focus:border-teal-400
                                "
                            />
                        </div>

                        {/* CATEGORY */}

                        <select
                            value={category}
                            onChange={(e) =>
                                setCategory(e.target.value)
                            }
                            className="
                                rounded-xl
                                border
                                border-slate-200
                                bg-slate-50
                                px-4 py-3
                                text-sm
                                text-slate-700
                                outline-none
                                focus:border-blue-500
                                dark:border-[#1e334a]
                                dark:bg-[#07111f]
                                dark:text-slate-300
                                dark:focus:border-teal-400
                            "
                        >
                            {categories.map((item) => (
                                <option
                                    key={item}
                                    value={item}
                                >
                                    {item}
                                </option>
                            ))}
                        </select>

                        {/* LEVEL */}

                        <select
                            value={level}
                            onChange={(e) =>
                                setLevel(e.target.value)
                            }
                            className="
                                rounded-xl
                                border
                                border-slate-200
                                bg-slate-50
                                px-4 py-3
                                text-sm
                                text-slate-700
                                outline-none
                                focus:border-blue-500
                                dark:border-[#1e334a]
                                dark:bg-[#07111f]
                                dark:text-slate-300
                                dark:focus:border-teal-400
                            "
                        >
                            {levels.map((item) => (
                                <option
                                    key={item}
                                    value={item}
                                >
                                    {item}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* =================================================
                    RESULT HEADER
                ================================================= */}

                <div
                    className="
                        mb-5 flex
                        items-center
                        justify-between
                    "
                >
                    <div>
                        <h2
                            className="
                                text-lg
                                font-bold
                                text-slate-900
                                dark:text-white
                            "
                        >
                            Available Courses
                        </h2>

                        <p
                            className="
                                mt-1 text-xs
                                text-slate-500
                                dark:text-slate-400
                            "
                        >
                            {filteredCourses.length}{" "}
                            {filteredCourses.length === 1
                                ? "course"
                                : "courses"}{" "}
                            found
                        </p>
                    </div>

                    {(search ||
                        category !== "All" ||
                        level !== "All") && (
                            <button
                                onClick={clearFilters}
                                className="
                                text-xs
                                font-semibold
                                text-blue-600
                                hover:text-blue-700
                                dark:text-teal-400
                            "
                            >
                                Clear filters
                            </button>
                        )}
                </div>

                {/* =================================================
                    COURSE GRID
                ================================================= */}

                {filteredCourses.length > 0 ? (
                    <div
                        className="
                            grid grid-cols-1
                            gap-5
                            md:grid-cols-2
                            xl:grid-cols-3
                        "
                    >
                        {filteredCourses.map((course) => (
                            <CourseCard
                                key={course.id}
                                course={course}
                                onViewDetails={() =>
                                    setSelectedCourse(course)
                                }
                                onEnroll={handleEnroll}
                            />
                        ))}
                    </div>
                ) : (
                    <EmptyState
                        onClear={clearFilters}
                    />
                )}

                {/* =================================================
                    COURSE DETAILS MODAL
                ================================================= */}

                {selectedCourse && (
                    <CourseModal
                        course={selectedCourse}
                        onClose={() =>
                            setSelectedCourse(null)
                        }
                        onEnroll={handleEnroll}
                    />
                )}
            </div>
        </div>
    );
};

// =====================================================
// COURSE CARD
// =====================================================

const CourseCard = ({
    course,
    onViewDetails,
    onEnroll,
}) => {
    return (
        <div
            className="
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                shadow-sm
                transition-all
                duration-200
                hover:-translate-y-1
                hover:shadow-lg
                dark:border-[#1e334a]
                dark:bg-[#0b1727]
            "
        >
            {/* COURSE BANNER */}

            <div
                className="
                    relative
                    flex h-36
                    items-center
                    justify-center
                    overflow-hidden
                    bg-gradient-to-br
                    from-blue-50
                    via-slate-50
                    to-teal-50
                    dark:from-blue-950/40
                    dark:via-[#0b1727]
                    dark:to-teal-950/30
                "
            >
                <div
                    className="
                        absolute -right-8 -top-8
                        h-28 w-28
                        rounded-full
                        bg-blue-500/10
                    "
                />

                <div
                    className="
                        absolute -bottom-10 -left-8
                        h-28 w-28
                        rounded-full
                        bg-teal-500/10
                    "
                />

                <div
                    className="
                        relative flex h-16 w-16
                        items-center
                        justify-center
                        rounded-2xl
                        bg-gradient-to-br
                        from-blue-600
                        to-teal-500
                        text-white
                        shadow-lg
                        shadow-blue-500/20
                    "
                >
                    <BookOpen size={29} />
                </div>
            </div>

            <div className="p-5">

                {/* CATEGORY + LEVEL */}

                <div
                    className="
                        mb-3 flex
                        items-center
                        justify-between
                        gap-2
                    "
                >
                    <span
                        className="
                            rounded-full
                            bg-blue-50
                            px-3 py-1
                            text-[10px]
                            font-bold
                            text-blue-700
                            dark:bg-blue-500/10
                            dark:text-blue-400
                        "
                    >
                        {course.category}
                    </span>

                    <span
                        className="
                            text-[10px]
                            font-semibold
                            text-slate-500
                            dark:text-slate-400
                        "
                    >
                        {course.level}
                    </span>
                </div>

                {/* TITLE */}

                <h3
                    className="
                        min-h-[48px]
                        text-lg
                        font-bold
                        leading-6
                        text-slate-900
                        dark:text-white
                    "
                >
                    {course.title}
                </h3>

                {/* INSTRUCTOR */}

                <p
                    className="
                        mt-2 text-xs
                        text-slate-500
                        dark:text-slate-400
                    "
                >
                    By {course.instructor}
                </p>

                {/* RATING */}

                <div
                    className="
                        mt-4 flex
                        items-center
                        gap-2
                    "
                >
                    <div
                        className="
                            flex items-center gap-1
                        "
                    >
                        <Star
                            size={15}
                            fill="currentColor"
                            className="
                                text-amber-400
                            "
                        />

                        <span
                            className="
                                text-xs
                                font-bold
                                text-slate-800
                                dark:text-slate-200
                            "
                        >
                            {course.rating}
                        </span>
                    </div>

                    <span
                        className="
                            text-[11px]
                            text-slate-400
                        "
                    >
                        ({course.students} students)
                    </span>
                </div>

                {/* COURSE STATS */}

                <div
                    className="
                        mt-5 grid
                        grid-cols-3
                        gap-2
                    "
                >
                    <CourseStat
                        icon={<BookOpen size={15} />}
                        value={course.lessons}
                        label="Lessons"
                    />

                    <CourseStat
                        icon={<Clock3 size={15} />}
                        value={course.duration}
                        label="Duration"
                    />

                    <CourseStat
                        icon={<Users size={15} />}
                        value={course.students}
                        label="Students"
                    />
                </div>

                {/* PRICE */}

                <div
                    className="
                        mt-5 flex
                        items-center
                        justify-between
                        gap-3
                    "
                >
                    <span
                        className="
                            text-xl
                            font-extrabold
                            text-slate-900
                            dark:text-white
                        "
                    >
                        {course.price}
                    </span>

                    <button
                        onClick={onViewDetails}
                        className="
                            rounded-xl
                            border
                            border-slate-200
                            px-4 py-2
                            text-xs
                            font-semibold
                            text-slate-600
                            transition
                            hover:border-blue-300
                            hover:bg-blue-50
                            hover:text-blue-700
                            dark:border-[#1e334a]
                            dark:text-slate-300
                            dark:hover:border-teal-500/40
                            dark:hover:bg-teal-500/10
                            dark:hover:text-teal-400
                        "
                    >
                        View Details
                    </button>
                </div>

                {/* ENROLL */}

                <button
                    onClick={() => onEnroll(course)}
                    className="
                        mt-4 flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-gradient-to-r
                        from-blue-600
                        to-teal-500
                        px-4 py-3
                        text-sm
                        font-bold
                        text-white
                        shadow-sm
                        shadow-blue-500/20
                        transition-all
                        hover:-translate-y-0.5
                        hover:shadow-md
                        hover:shadow-teal-500/20
                    "
                >
                    <PlayCircle size={17} />
                    Enroll Now
                </button>
            </div>
        </div>
    );
};

// =====================================================
// COURSE STAT
// =====================================================

const CourseStat = ({
    icon,
    value,
    label,
}) => {
    return (
        <div
            className="
                rounded-xl
                bg-slate-50
                p-3
                text-center
                dark:bg-[#07111f]
            "
        >
            <div
                className="
                    mx-auto flex
                    w-fit
                    items-center
                    justify-center
                    text-blue-500
                    dark:text-teal-400
                "
            >
                {icon}
            </div>

            <p
                className="
                    mt-1 text-xs
                    font-bold
                    text-slate-800
                    dark:text-slate-200
                "
            >
                {value}
            </p>

            <p
                className="
                    text-[9px]
                    text-slate-400
                "
            >
                {label}
            </p>
        </div>
    );
};

// =====================================================
// EMPTY STATE
// =====================================================

const EmptyState = ({ onClear }) => {
    return (
        <div
            className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-12
                text-center
                shadow-sm
                dark:border-[#1e334a]
                dark:bg-[#0b1727]
            "
        >
            <div
                className="
                    mx-auto flex
                    h-16 w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-blue-50
                    text-blue-600
                    dark:bg-blue-500/10
                    dark:text-blue-400
                "
            >
                <Search size={27} />
            </div>

            <h2
                className="
                    mt-5 text-xl
                    font-bold
                    text-slate-900
                    dark:text-white
                "
            >
                No courses found
            </h2>

            <p
                className="
                    mt-2 text-sm
                    text-slate-500
                    dark:text-slate-400
                "
            >
                Try changing your search or filters.
            </p>

            <button
                onClick={onClear}
                className="
                    mt-5 rounded-xl
                    bg-gradient-to-r
                    from-blue-600
                    to-teal-500
                    px-5 py-2.5
                    text-sm
                    font-bold
                    text-white
                    shadow-sm
                "
            >
                Clear Filters
            </button>
        </div>
    );
};

// =====================================================
// COURSE MODAL
// =====================================================

const CourseModal = ({
    course,
    onClose,
    onEnroll,
}) => {
    const handleModalEnroll = () => {
        onEnroll(course);
        onClose();
    };

    return (
        <div
            className="
                fixed inset-0 z-50
                flex items-center
                justify-center
                bg-slate-950/60
                p-4
                backdrop-blur-sm
            "
            onClick={onClose}
        >
            <div
                className="
                    w-full
                    max-w-2xl
                    max-h-[90vh]
                    overflow-y-auto
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    shadow-2xl
                    dark:border-[#1e334a]
                    dark:bg-[#0b1727]
                "
                onClick={(e) =>
                    e.stopPropagation()
                }
            >
                {/* MODAL HEADER */}

                <div
                    className="
                        flex items-start
                        justify-between
                        gap-4
                        border-b
                        border-slate-100
                        p-6
                        dark:border-[#1e334a]
                    "
                >
                    <div>
                        <span
                            className="
                                inline-flex
                                rounded-full
                                bg-blue-50
                                px-3 py-1
                                text-[10px]
                                font-bold
                                text-blue-700
                                dark:bg-blue-500/10
                                dark:text-blue-400
                            "
                        >
                            {course.category}
                        </span>

                        <h2
                            className="
                                mt-3 text-2xl
                                font-extrabold
                                text-slate-950
                                dark:text-white
                            "
                        >
                            {course.title}
                        </h2>

                        <p
                            className="
                                mt-1 text-sm
                                text-slate-500
                                dark:text-slate-400
                            "
                        >
                            By {course.instructor}
                        </p>
                    </div>

                    <button
                        onClick={onClose}
                        className="
                            shrink-0
                            rounded-xl
                            p-2
                            text-slate-400
                            transition
                            hover:bg-slate-100
                            hover:text-slate-700
                            dark:hover:bg-[#102337]
                            dark:hover:text-slate-200
                        "
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* MODAL BODY */}

                <div className="p-6">

                    {/* ABOUT */}

                    <h3
                        className="
                            text-lg
                            font-bold
                            text-slate-900
                            dark:text-white
                        "
                    >
                        About this course
                    </h3>

                    <p
                        className="
                            mt-2
                            text-sm
                            leading-7
                            text-slate-500
                            dark:text-slate-400
                        "
                    >
                        {course.description}
                    </p>

                    {/* STATS */}

                    <div
                        className="
                            mt-6 grid
                            grid-cols-2
                            gap-3
                            sm:grid-cols-4
                        "
                    >
                        <ModalStat
                            icon={<BookOpen size={19} />}
                            value={course.lessons}
                            label="Lessons"
                        />

                        <ModalStat
                            icon={<Clock3 size={19} />}
                            value={course.duration}
                            label="Duration"
                        />

                        <ModalStat
                            icon={<Users size={19} />}
                            value={course.students}
                            label="Students"
                        />

                        <ModalStat
                            icon={<Star size={19} />}
                            value={course.rating}
                            label="Rating"
                            star
                        />
                    </div>

                    {/* TOPICS */}

                    <div className="mt-7">
                        <h3
                            className="
                                text-lg
                                font-bold
                                text-slate-900
                                dark:text-white
                            "
                        >
                            What you'll learn
                        </h3>

                        <div
                            className="
                                mt-4 grid
                                grid-cols-1
                                gap-3
                                sm:grid-cols-2
                            "
                        >
                            {course.topics.map(
                                (topic) => (
                                    <div
                                        key={topic}
                                        className="
                                            flex
                                            items-center
                                            gap-3
                                            text-sm
                                            text-slate-600
                                            dark:text-slate-300
                                        "
                                    >
                                        <CheckCircle2
                                            size={18}
                                            className="
                                                shrink-0
                                                text-teal-500
                                            "
                                        />

                                        {topic}
                                    </div>
                                )
                            )}
                        </div>
                    </div>

                    {/* COURSE INFO */}

                    <div
                        className="
                            mt-7 flex
                            flex-col
                            gap-4
                            rounded-xl
                            border
                            border-slate-200
                            bg-slate-50
                            p-4
                            sm:flex-row
                            sm:items-center
                            sm:justify-between
                            dark:border-[#1e334a]
                            dark:bg-[#07111f]
                        "
                    >
                        <div
                            className="
                                flex items-center
                                gap-3
                            "
                        >
                            <div
                                className="
                                    flex h-10 w-10
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-blue-50
                                    text-blue-600
                                    dark:bg-blue-500/10
                                    dark:text-blue-400
                                "
                            >
                                <Award size={20} />
                            </div>

                            <div>
                                <p
                                    className="
                                        text-xs
                                        font-bold
                                        text-slate-900
                                        dark:text-white
                                    "
                                >
                                    Course Level
                                </p>

                                <p
                                    className="
                                        mt-0.5 text-xs
                                        text-slate-500
                                        dark:text-slate-400
                                    "
                                >
                                    {course.level}
                                </p>
                            </div>
                        </div>

                        <span
                            className="
                                text-2xl
                                font-extrabold
                                text-slate-950
                                dark:text-white
                            "
                        >
                            {course.price}
                        </span>
                    </div>

                    {/* ACTIONS */}

                    <div
                        className="
                            mt-7 flex
                            flex-col
                            gap-3
                            sm:flex-row
                        "
                    >
                        <button
                            onClick={onClose}
                            className="
                                flex-1
                                rounded-xl
                                border
                                border-slate-200
                                px-5 py-3
                                text-sm
                                font-semibold
                                text-slate-600
                                transition
                                hover:bg-slate-50
                                dark:border-[#1e334a]
                                dark:text-slate-300
                                dark:hover:bg-[#102337]
                            "
                        >
                            Close
                        </button>

                        <button
                            onClick={handleModalEnroll}
                            className="
                                flex flex-1
                                items-center
                                justify-center
                                gap-2
                                rounded-xl
                                bg-gradient-to-r
                                from-blue-600
                                to-teal-500
                                px-5 py-3
                                text-sm
                                font-bold
                                text-white
                                shadow-sm
                                shadow-blue-500/20
                            "
                        >
                            <PlayCircle size={17} />
                            Enroll Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// =====================================================
// MODAL STAT
// =====================================================

const ModalStat = ({
    icon,
    value,
    label,
    star = false,
}) => {
    return (
        <div
            className="
                rounded-xl
                bg-slate-50
                p-4
                text-center
                dark:bg-[#07111f]
            "
        >
            <div
                className={`
                    mx-auto flex
                    w-fit items-center
                    justify-center
                    ${star
                        ? "text-amber-400"
                        : "text-blue-600 dark:text-teal-400"
                    }
                `}
            >
                {React.cloneElement(icon, {
                    ...(star
                        ? {
                            fill: "currentColor",
                        }
                        : {}),
                })}
            </div>

            <p
                className="
                    mt-2 text-lg
                    font-extrabold
                    text-slate-900
                    dark:text-white
                "
            >
                {value}
            </p>

            <p
                className="
                    mt-1 text-[10px]
                    text-slate-400
                "
            >
                {label}
            </p>
        </div>
    );
};

export default AllCourses;