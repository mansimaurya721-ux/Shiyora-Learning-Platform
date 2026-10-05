import React, { useEffect, useMemo, useState } from "react";
import {
    Award,
    BookOpen,
    CheckCircle2,
    ChevronLeft,
    ChevronRight,
    Clock3,
    FileQuestion,
    PlayCircle,
    Search,
    Trophy,
    X,
} from "lucide-react";

const Quiz = () => {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");
    const [selectedQuiz, setSelectedQuiz] = useState(null);

    const [quizStarted, setQuizStarted] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [timeLeft, setTimeLeft] = useState(0);

    const [quizSubmitted, setQuizSubmitted] = useState(false);
    const [showSubmitModal, setShowSubmitModal] = useState(false);
    const [showResult, setShowResult] = useState(false);

    const quizzes = [
        {
            id: 1,
            title: "JavaScript Fundamentals Quiz",
            course: "JavaScript Essentials",
            instructor: "Rahul Sharma",
            questions: 10,
            duration: 15,
            attempts: 2,
            maxAttempts: 3,
            status: "Available",
            difficulty: "Beginner",
            description:
                "Test your understanding of JavaScript variables, functions, arrays, objects, operators, and basic ES6 concepts.",
            questionsData: [
                {
                    question:
                        "Which keyword is used to declare a block-scoped variable in JavaScript?",
                    options: ["var", "let", "define", "variable"],
                    answer: "let",
                },
                {
                    question:
                        "Which method is used to add an element to the end of an array?",
                    options: ["push()", "pop()", "shift()", "unshift()"],
                    answer: "push()",
                },
                {
                    question:
                        "Which symbol is used for strict equality comparison?",
                    options: ["==", "=", "===", "!="],
                    answer: "===",
                },
                {
                    question: "Which of the following is an object in JavaScript?",
                    options: [
                        "{ name: 'Mansi' }",
                        "[1, 2, 3]",
                        "42",
                        "true",
                    ],
                    answer: "{ name: 'Mansi' }",
                },
                {
                    question:
                        "Which method converts a JSON string into a JavaScript object?",
                    options: [
                        "JSON.parse()",
                        "JSON.stringify()",
                        "JSON.convert()",
                        "JSON.object()",
                    ],
                    answer: "JSON.parse()",
                },
                {
                    question: "Which keyword is used to define a function?",
                    options: ["function", "func", "method", "define"],
                    answer: "function",
                },
                {
                    question: "What does DOM stand for?",
                    options: [
                        "Document Object Model",
                        "Data Object Model",
                        "Document Oriented Method",
                        "Data Oriented Model",
                    ],
                    answer: "Document Object Model",
                },
                {
                    question: "Which operator is used for logical AND?",
                    options: ["||", "&&", "!", "&"],
                    answer: "&&",
                },
                {
                    question:
                        "Which method removes the last element from an array?",
                    options: ["push()", "shift()", "pop()", "remove()"],
                    answer: "pop()",
                },
                {
                    question: "Which feature was introduced with ES6?",
                    options: [
                        "let and const",
                        "HTML",
                        "CSS selectors",
                        "SQL tables",
                    ],
                    answer: "let and const",
                },
            ],
        },

        {
            id: 2,
            title: "Java OOPs Assessment",
            course: "Java Programming",
            instructor: "Amit Verma",
            questions: 15,
            duration: 20,
            attempts: 1,
            maxAttempts: 2,
            status: "Available",
            difficulty: "Intermediate",
            description:
                "Evaluate your knowledge of classes, objects, inheritance, polymorphism, abstraction, encapsulation, and interfaces in Java.",
            questionsData: [
                {
                    question:
                        "Which concept combines data and methods into a single unit?",
                    options: [
                        "Inheritance",
                        "Encapsulation",
                        "Polymorphism",
                        "Abstraction",
                    ],
                    answer: "Encapsulation",
                },
                {
                    question:
                        "Which keyword is used to inherit a class in Java?",
                    options: ["inherits", "extends", "implements", "super"],
                    answer: "extends",
                },
                {
                    question: "Which keyword is used to create an object?",
                    options: ["class", "object", "new", "create"],
                    answer: "new",
                },
                {
                    question:
                        "Which OOP concept allows one interface to have multiple implementations?",
                    options: [
                        "Encapsulation",
                        "Polymorphism",
                        "Abstraction",
                        "Inheritance",
                    ],
                    answer: "Polymorphism",
                },
                {
                    question: "Which keyword refers to the current object?",
                    options: ["self", "current", "this", "object"],
                    answer: "this",
                },
            ],
        },

        {
            id: 3,
            title: "SQL & Database Quiz",
            course: "Database Management System",
            instructor: "Priya Singh",
            questions: 12,
            duration: 18,
            attempts: 0,
            maxAttempts: 2,
            status: "Available",
            difficulty: "Intermediate",
            description:
                "Check your understanding of SQL queries, keys, constraints, joins, normalization, and relational databases.",
            questionsData: [
                {
                    question: "Which SQL command is used to retrieve data?",
                    options: ["GET", "SELECT", "FETCH", "READ"],
                    answer: "SELECT",
                },
                {
                    question:
                        "Which key uniquely identifies each row in a table?",
                    options: [
                        "Foreign Key",
                        "Primary Key",
                        "Candidate Key",
                        "Composite Key",
                    ],
                    answer: "Primary Key",
                },
                {
                    question: "Which SQL clause is used to filter records?",
                    options: ["ORDER BY", "GROUP BY", "WHERE", "FILTER"],
                    answer: "WHERE",
                },
                {
                    question:
                        "Which JOIN returns matching rows from both tables?",
                    options: [
                        "INNER JOIN",
                        "OUTER JOIN",
                        "FULL JOIN",
                        "CROSS JOIN",
                    ],
                    answer: "INNER JOIN",
                },
                {
                    question:
                        "Which command is used to modify existing records?",
                    options: ["CHANGE", "MODIFY", "UPDATE", "ALTER"],
                    answer: "UPDATE",
                },
            ],
        },

        {
            id: 4,
            title: "HTML & CSS Fundamentals",
            course: "HTML & CSS Fundamentals",
            instructor: "Neha Gupta",
            questions: 10,
            duration: 15,
            attempts: 1,
            maxAttempts: 1,
            status: "Completed",
            difficulty: "Beginner",
            description:
                "Review your knowledge of HTML structure, semantic elements, CSS selectors, layouts, and responsive design.",
            score: 90,
            questionsData: [
                {
                    question:
                        "Which HTML element is used for the largest heading?",
                    options: ["<h6>", "<heading>", "<h1>", "<head>"],
                    answer: "<h1>",
                },
                {
                    question: "Which CSS property changes text color?",
                    options: [
                        "font-color",
                        "color",
                        "text-color",
                        "foreground",
                    ],
                    answer: "color",
                },
            ],
        },

        {
            id: 5,
            title: "React Basics Assessment",
            course: "Full Stack Web Development",
            instructor: "Rahul Sharma",
            questions: 15,
            duration: 25,
            attempts: 0,
            maxAttempts: 2,
            status: "Locked",
            difficulty: "Intermediate",
            description:
                "This assessment will become available after completing the required React lessons.",
            questionsData: [],
        },
    ];

    const filteredQuizzes = useMemo(() => {
        return quizzes.filter((quiz) => {
            const searchText = search.toLowerCase();

            const matchesSearch =
                quiz.title.toLowerCase().includes(searchText) ||
                quiz.course.toLowerCase().includes(searchText) ||
                quiz.instructor.toLowerCase().includes(searchText);

            const matchesFilter =
                filter === "All" || quiz.status === filter;

            return matchesSearch && matchesFilter;
        });
    }, [search, filter]);

    const totalQuizzes = quizzes.length;

    const availableQuizzes = quizzes.filter(
        (quiz) => quiz.status === "Available"
    ).length;

    const completedQuizzes = quizzes.filter(
        (quiz) => quiz.status === "Completed"
    ).length;

    const scoredQuizzes = quizzes.filter(
        (quiz) => typeof quiz.score === "number"
    );

    const averageScore =
        scoredQuizzes.length > 0
            ? Math.round(
                scoredQuizzes.reduce(
                    (sum, quiz) => sum + quiz.score,
                    0
                ) / scoredQuizzes.length
            )
            : 0;

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;

        return `${String(minutes).padStart(2, "0")}:${String(
            remainingSeconds
        ).padStart(2, "0")}`;
    };

    const startQuiz = (quiz) => {
        if (
            quiz.status !== "Available" ||
            quiz.attempts >= quiz.maxAttempts ||
            quiz.questionsData.length === 0
        ) {
            return;
        }

        setSelectedQuiz(quiz);
        setQuizStarted(true);
        setCurrentQuestion(0);
        setAnswers({});
        setQuizSubmitted(false);
        setShowResult(false);
        setShowSubmitModal(false);
        setTimeLeft(quiz.duration * 60);
    };

    const closeQuiz = () => {
        setSelectedQuiz(null);
        setQuizStarted(false);
        setCurrentQuestion(0);
        setAnswers({});
        setQuizSubmitted(false);
        setShowSubmitModal(false);
        setShowResult(false);
        setTimeLeft(0);
    };

    useEffect(() => {
        if (!quizStarted || quizSubmitted || showResult) {
            return;
        }

        if (timeLeft <= 0) {
            setQuizSubmitted(true);
            setShowResult(true);
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft((previous) => previous - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [quizStarted, quizSubmitted, showResult, timeLeft]);

    const selectAnswer = (option) => {
        setAnswers((previous) => ({
            ...previous,
            [currentQuestion]: option,
        }));
    };

    const calculateScore = () => {
        if (!selectedQuiz) return 0;

        const questions = selectedQuiz.questionsData;

        if (!questions.length) return 0;

        const correct = questions.reduce((total, question, index) => {
            return (
                total +
                (answers[index] === question.answer ? 1 : 0)
            );
        }, 0);

        return Math.round((correct / questions.length) * 100);
    };

    const submitQuiz = () => {
        setShowSubmitModal(false);
        setQuizSubmitted(true);
        setShowResult(true);
    };

    const getCorrectAnswers = () => {
        if (!selectedQuiz) return 0;

        return selectedQuiz.questionsData.reduce(
            (total, question, index) =>
                total +
                (answers[index] === question.answer ? 1 : 0),
            0
        );
    };

    const answeredCount = Object.keys(answers).length;

    /* =========================================================
       QUIZ RESULT
    ========================================================= */

    if (quizStarted && selectedQuiz && showResult) {
        const score = calculateScore();
        const correctAnswers = getCorrectAnswers();
        const totalQuestions = selectedQuiz.questionsData.length;

        return (
            <div className="min-h-screen bg-slate-50 p-4 text-slate-700 dark:bg-[#07111f] dark:text-slate-300 sm:p-6 lg:p-8">
                <div className="mx-auto max-w-4xl">
                    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">
                        {/* Result Header */}
                        <div className="bg-gradient-to-r from-blue-600 to-teal-500 p-8 text-center text-white sm:p-10">
                            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/25">
                                <Trophy size={38} />
                            </div>

                            <h1 className="text-3xl font-bold">
                                Quiz Completed
                            </h1>

                            <p className="mt-2 text-sm text-white/80 sm:text-base">
                                {selectedQuiz.title}
                            </p>
                        </div>

                        {/* Result Content */}
                        <div className="p-5 sm:p-8">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                <ResultStat
                                    label="Your Score"
                                    value={`${score}%`}
                                    accent="blue"
                                />

                                <ResultStat
                                    label="Correct Answers"
                                    value={`${correctAnswers}/${totalQuestions}`}
                                    accent="teal"
                                />

                                <ResultStat
                                    label="Status"
                                    value={
                                        score >= 60
                                            ? "Passed"
                                            : "Needs Practice"
                                    }
                                    accent={
                                        score >= 60 ? "teal" : "red"
                                    }
                                />
                            </div>

                            <div className="py-8 text-center">
                                <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border-[10px] border-blue-100 dark:border-blue-950">
                                    <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                                        {score}%
                                    </span>
                                </div>

                                <p className="mt-5 text-sm text-slate-500 dark:text-slate-400">
                                    {score >= 80
                                        ? "Excellent work! Keep learning."
                                        : score >= 60
                                            ? "Good job! Keep improving."
                                            : "Review the course material and try again."}
                                </p>
                            </div>

                            <div className="flex flex-col justify-center gap-3 sm:flex-row">
                                <button
                                    onClick={closeQuiz}
                                    className="rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:from-blue-700 hover:to-teal-600"
                                >
                                    Back to Quizzes
                                </button>

                                <button
                                    onClick={() => {
                                        setShowResult(false);
                                        setCurrentQuestion(0);
                                    }}
                                    className="rounded-xl border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-[#1e334a] dark:text-slate-200 dark:hover:bg-[#102337]"
                                >
                                    Review Answers
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    /* =========================================================
       QUIZ RUNNER
    ========================================================= */

    if (quizStarted && selectedQuiz) {
        const question =
            selectedQuiz.questionsData[currentQuestion];

        const totalQuestions =
            selectedQuiz.questionsData.length;

        const progress =
            ((currentQuestion + 1) / totalQuestions) * 100;

        return (
            <div className="min-h-screen bg-slate-50 p-4 text-slate-700 dark:bg-[#07111f] dark:text-slate-300 sm:p-6 lg:p-8">
                <div className="mx-auto max-w-6xl">
                    {/* Quiz Header */}
                    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="min-w-0">
                            <p className="text-sm font-medium text-blue-600 dark:text-teal-400">
                                {selectedQuiz.course}
                            </p>

                            <h1 className="mt-1 text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
                                {selectedQuiz.title}
                            </h1>
                        </div>

                        <div
                            className={`flex w-fit items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold ${timeLeft <= 60
                                ? "border-red-200 bg-red-50 text-red-600 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-400"
                                : "border-blue-200 bg-blue-50 text-blue-600 dark:border-blue-900/50 dark:bg-blue-950/30 dark:text-blue-400"
                                }`}
                        >
                            <Clock3 size={18} />
                            {formatTime(timeLeft)}
                        </div>
                    </div>

                    {/* Progress */}
                    <div className="mb-6">
                        <div className="mb-2 flex justify-between text-xs text-slate-500 dark:text-slate-400">
                            <span>Quiz Progress</span>
                            <span>{Math.round(progress)}%</span>
                        </div>

                        <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-[#102337]">
                            <div
                                className="h-full rounded-full bg-gradient-to-r from-blue-600 to-teal-500 transition-all"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_260px]">
                        {/* Question Card */}
                        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727] sm:p-8">
                            <div className="mb-6 flex items-center justify-between gap-3">
                                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                    Question {currentQuestion + 1} of{" "}
                                    {totalQuestions}
                                </span>

                                <span className="text-sm text-slate-500 dark:text-slate-400">
                                    {answeredCount}/{totalQuestions} answered
                                </span>
                            </div>

                            <h2 className="mb-8 text-xl font-semibold leading-relaxed text-slate-900 dark:text-white sm:text-2xl">
                                {question.question}
                            </h2>

                            {/* Options */}
                            <div className="space-y-3">
                                {question.options.map(
                                    (option, index) => {
                                        const selected =
                                            answers[currentQuestion] ===
                                            option;

                                        return (
                                            <button
                                                key={option}
                                                onClick={() =>
                                                    selectAnswer(option)
                                                }
                                                className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition ${selected
                                                    ? "border-blue-500 bg-blue-50 dark:border-teal-400 dark:bg-teal-950/30"
                                                    : "border-slate-200 hover:border-blue-300 hover:bg-slate-50 dark:border-[#1e334a] dark:hover:border-teal-700 dark:hover:bg-[#102337]"
                                                    }`}
                                            >
                                                <span
                                                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${selected
                                                        ? "bg-blue-600 text-white dark:bg-teal-500 dark:text-slate-950"
                                                        : "bg-slate-100 text-slate-500 dark:bg-[#102337] dark:text-slate-400"
                                                        }`}
                                                >
                                                    {String.fromCharCode(
                                                        65 + index
                                                    )}
                                                </span>

                                                <span className="text-sm font-medium text-slate-700 dark:text-slate-200 sm:text-base">
                                                    {option}
                                                </span>

                                                {selected && (
                                                    <CheckCircle2
                                                        size={20}
                                                        className="ml-auto shrink-0 text-blue-600 dark:text-teal-400"
                                                    />
                                                )}
                                            </button>
                                        );
                                    }
                                )}
                            </div>

                            {/* Navigation */}
                            <div className="mt-8 flex justify-between gap-3 border-t border-slate-200 pt-6 dark:border-[#1e334a]">
                                <button
                                    onClick={() =>
                                        setCurrentQuestion(
                                            (previous) =>
                                                Math.max(
                                                    previous - 1,
                                                    0
                                                )
                                        )
                                    }
                                    disabled={currentQuestion === 0}
                                    className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-30 dark:border-[#1e334a] dark:hover:bg-[#102337]"
                                >
                                    <ChevronLeft size={18} />
                                    <span className="hidden sm:inline">
                                        Previous
                                    </span>
                                </button>

                                {currentQuestion ===
                                    totalQuestions - 1 ? (
                                    <button
                                        onClick={() =>
                                            setShowSubmitModal(true)
                                        }
                                        className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 px-5 py-3 text-sm font-semibold text-white transition hover:from-blue-700 hover:to-teal-600"
                                    >
                                        Submit Quiz
                                        <CheckCircle2 size={18} />
                                    </button>
                                ) : (
                                    <button
                                        onClick={() =>
                                            setCurrentQuestion(
                                                (previous) =>
                                                    Math.min(
                                                        previous + 1,
                                                        totalQuestions - 1
                                                    )
                                            )
                                        }
                                        className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 px-5 py-3 text-sm font-semibold text-white transition hover:from-blue-700 hover:to-teal-600"
                                    >
                                        Next
                                        <ChevronRight size={18} />
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Question Navigator */}
                        <div className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">
                            <h3 className="mb-4 font-semibold text-slate-900 dark:text-white">
                                Questions
                            </h3>

                            <div className="grid grid-cols-5 gap-2 sm:grid-cols-8 lg:grid-cols-4">
                                {selectedQuiz.questionsData.map(
                                    (_, index) => {
                                        const answered =
                                            answers[index] !==
                                            undefined;

                                        const active =
                                            currentQuestion ===
                                            index;

                                        return (
                                            <button
                                                key={index}
                                                onClick={() =>
                                                    setCurrentQuestion(
                                                        index
                                                    )
                                                }
                                                className={`h-10 w-10 rounded-lg border text-sm font-semibold transition ${active
                                                    ? "border-blue-600 bg-blue-600 text-white dark:border-teal-500 dark:bg-teal-500 dark:text-slate-950"
                                                    : answered
                                                        ? "border-teal-400 bg-teal-50 text-teal-700 dark:border-teal-700 dark:bg-teal-950/40 dark:text-teal-300"
                                                        : "border-slate-200 bg-slate-50 text-slate-600 hover:border-blue-300 dark:border-[#1e334a] dark:bg-[#102337] dark:text-slate-300"
                                                    }`}
                                            >
                                                {index + 1}
                                            </button>
                                        );
                                    }
                                )}
                            </div>

                            <div className="mt-6 space-y-3 border-t border-slate-200 pt-5 text-sm dark:border-[#1e334a]">
                                <Legend
                                    label="Current"
                                    className="bg-blue-600 dark:bg-teal-500"
                                />

                                <Legend
                                    label="Answered"
                                    className="bg-teal-500"
                                />

                                <Legend
                                    label="Not Answered"
                                    className="border border-slate-400 bg-transparent"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Submit Modal */}
                {showSubmitModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm">
                        <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-[#1e334a] dark:bg-[#0b1727]">
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                                    Submit Quiz?
                                </h2>

                                <button
                                    onClick={() =>
                                        setShowSubmitModal(false)
                                    }
                                    className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-[#102337] dark:hover:text-white"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-slate-400">
                                You have answered{" "}
                                <span className="font-semibold text-slate-700 dark:text-slate-200">
                                    {answeredCount}
                                </span>{" "}
                                out of{" "}
                                <span className="font-semibold text-slate-700 dark:text-slate-200">
                                    {totalQuestions}
                                </span>{" "}
                                questions.
                            </p>

                            {answeredCount < totalQuestions && (
                                <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-700 dark:border-amber-900/40 dark:bg-amber-950/20 dark:text-amber-300">
                                    You still have unanswered questions. You
                                    can submit now or continue answering.
                                </div>
                            )}

                            <div className="mt-6 flex gap-3">
                                <button
                                    onClick={() =>
                                        setShowSubmitModal(false)
                                    }
                                    className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-[#1e334a] dark:text-slate-200 dark:hover:bg-[#102337]"
                                >
                                    Continue
                                </button>

                                <button
                                    onClick={submitQuiz}
                                    className="flex-1 rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 px-4 py-3 text-sm font-semibold text-white transition hover:from-blue-700 hover:to-teal-600"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }

    /* =========================================================
       QUIZ LIST
    ========================================================= */

    return (
        <div className="min-h-screen bg-slate-50 p-4 text-slate-700 dark:bg-[#07111f] dark:text-slate-300 sm:p-6 lg:p-8">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-teal-500 text-white shadow-sm">
                                <FileQuestion size={25} />
                            </div>

                            <div>
                                <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                                    Quizzes
                                </h1>

                                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 sm:text-base">
                                    Test your knowledge and track your
                                    learning results.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
                    <QuizStat
                        label="Total Quizzes"
                        value={totalQuizzes}
                        icon={FileQuestion}
                        iconStyle="blue"
                    />

                    <QuizStat
                        label="Available"
                        value={availableQuizzes}
                        icon={PlayCircle}
                        iconStyle="teal"
                    />

                    <QuizStat
                        label="Completed"
                        value={completedQuizzes}
                        icon={CheckCircle2}
                        iconStyle="teal"
                    />

                    <QuizStat
                        label="Average Score"
                        value={`${averageScore}%`}
                        icon={Award}
                        iconStyle="blue"
                    />
                </div>

                {/* Search + Filters */}
                <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">
                    <div className="flex flex-col gap-4 lg:flex-row">
                        <div className="relative flex-1">
                            <Search
                                size={19}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500"
                            />

                            <input
                                type="text"
                                placeholder="Search quizzes..."
                                value={search}
                                onChange={(e) =>
                                    setSearch(e.target.value)
                                }
                                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white dark:border-[#1e334a] dark:bg-[#07111f] dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus:border-teal-500 dark:focus:bg-[#102337]"
                            />
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {[
                                "All",
                                "Available",
                                "Completed",
                                "Locked",
                            ].map((item) => (
                                <button
                                    key={item}
                                    onClick={() =>
                                        setFilter(item)
                                    }
                                    className={`rounded-xl px-4 py-2.5 text-sm font-medium transition ${filter === item
                                        ? "bg-blue-600 text-white shadow-sm dark:bg-teal-500 dark:text-slate-950"
                                        : "border border-slate-200 text-slate-600 hover:bg-slate-50 dark:border-[#1e334a] dark:text-slate-300 dark:hover:bg-[#102337]"
                                        }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Quiz List */}
                {filteredQuizzes.length > 0 ? (
                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                        {filteredQuizzes.map((quiz) => (
                            <div
                                key={quiz.id}
                                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md dark:border-[#1e334a] dark:bg-[#0b1727] dark:hover:border-teal-800"
                            >
                                {/* Card Header */}
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex min-w-0 gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
                                            <FileQuestion size={23} />
                                        </div>

                                        <div className="min-w-0">
                                            <h2 className="font-semibold text-slate-900 dark:text-white sm:text-lg">
                                                {quiz.title}
                                            </h2>

                                            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                                {quiz.course}
                                            </p>
                                        </div>
                                    </div>

                                    <StatusBadge
                                        status={quiz.status}
                                    />
                                </div>

                                {/* Description */}
                                <p className="mt-5 text-sm leading-6 text-slate-500 dark:text-slate-400">
                                    {quiz.description}
                                </p>

                                {/* Quiz Info */}
                                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                                    <InfoBox
                                        icon={FileQuestion}
                                        label="Questions"
                                        value={quiz.questions}
                                    />

                                    <InfoBox
                                        icon={Clock3}
                                        label="Duration"
                                        value={`${quiz.duration} min`}
                                    />

                                    <InfoBox
                                        icon={BookOpen}
                                        label="Level"
                                        value={quiz.difficulty}
                                    />

                                    <InfoBox
                                        icon={Award}
                                        label="Attempts"
                                        value={`${quiz.attempts}/${quiz.maxAttempts}`}
                                    />
                                </div>

                                {/* Score */}
                                {quiz.status === "Completed" && (
                                    <div className="mt-4 flex items-center justify-between rounded-xl border border-blue-100 bg-blue-50 p-3 dark:border-blue-900/40 dark:bg-blue-950/20">
                                        <span className="text-sm text-slate-500 dark:text-slate-400">
                                            Your Score
                                        </span>

                                        <span className="font-bold text-blue-600 dark:text-teal-400">
                                            {quiz.score}%
                                        </span>
                                    </div>
                                )}

                                {/* Buttons */}
                                <div className="mt-5 flex gap-3">
                                    <button
                                        onClick={() =>
                                            setSelectedQuiz(quiz)
                                        }
                                        className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-[#1e334a] dark:text-slate-200 dark:hover:bg-[#102337]"
                                    >
                                        View Details
                                    </button>

                                    {quiz.status === "Available" ? (
                                        <button
                                            onClick={() =>
                                                startQuiz(quiz)
                                            }
                                            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 px-4 py-3 text-sm font-semibold text-white transition hover:from-blue-700 hover:to-teal-600"
                                        >
                                            <PlayCircle size={18} />
                                            Start Quiz
                                        </button>
                                    ) : (
                                        <button
                                            disabled
                                            className="flex-1 cursor-not-allowed rounded-xl bg-slate-100 px-4 py-3 text-sm font-medium text-slate-400 dark:bg-[#102337] dark:text-slate-500"
                                        >
                                            {quiz.status === "Completed"
                                                ? "Completed"
                                                : "Locked"}
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
                            <FileQuestion size={30} />
                        </div>

                        <h2 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">
                            No quizzes found
                        </h2>

                        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                            Try changing your search or filter.
                        </p>

                        <button
                            onClick={() => {
                                setSearch("");
                                setFilter("All");
                            }}
                            className="mt-5 rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 px-5 py-3 text-sm font-semibold text-white transition hover:from-blue-700 hover:to-teal-600"
                        >
                            Clear Filters
                        </button>
                    </div>
                )}

                {/* Details Modal */}
                {selectedQuiz && !quizStarted && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm">
                        <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-[#1e334a] dark:bg-[#0b1727]">
                            {/* Modal Header */}
                            <div className="flex items-start justify-between border-b border-slate-200 p-6 dark:border-[#1e334a]">
                                <div className="min-w-0 pr-4">
                                    <p className="text-sm font-medium text-blue-600 dark:text-teal-400">
                                        {selectedQuiz.course}
                                    </p>

                                    <h2 className="mt-1 text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
                                        {selectedQuiz.title}
                                    </h2>
                                </div>

                                <button
                                    onClick={() =>
                                        setSelectedQuiz(null)
                                    }
                                    className="shrink-0 rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-[#102337] dark:hover:text-white"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="p-6">
                                <p className="leading-7 text-slate-500 dark:text-slate-400">
                                    {selectedQuiz.description}
                                </p>

                                {/* Modal Stats */}
                                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                                    <ModalStat
                                        icon={FileQuestion}
                                        value={selectedQuiz.questions}
                                        label="Questions"
                                    />

                                    <ModalStat
                                        icon={Clock3}
                                        value={selectedQuiz.duration}
                                        label="Minutes"
                                    />

                                    <ModalStat
                                        icon={BookOpen}
                                        value={selectedQuiz.difficulty}
                                        label="Level"
                                    />

                                    <ModalStat
                                        icon={Award}
                                        value={selectedQuiz.maxAttempts}
                                        label="Max Attempts"
                                    />
                                </div>

                                {/* Instructions */}
                                <div className="mt-7">
                                    <h3 className="font-semibold text-slate-900 dark:text-white">
                                        Quiz Instructions
                                    </h3>

                                    <div className="mt-3 space-y-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                                        <p>
                                            • Answer all questions
                                            carefully.
                                        </p>
                                        <p>
                                            • The timer starts when you
                                            begin the quiz.
                                        </p>
                                        <p>
                                            • You can navigate between
                                            questions.
                                        </p>
                                        <p>
                                            • Your quiz will be submitted
                                            when the timer reaches zero.
                                        </p>
                                        <p>
                                            • You can use your remaining
                                            attempts if available.
                                        </p>
                                    </div>
                                </div>

                                {/* Previous Score */}
                                {selectedQuiz.status === "Completed" && (
                                    <div className="mt-6 flex items-center justify-between rounded-xl border border-blue-100 bg-blue-50 p-4 dark:border-blue-900/40 dark:bg-blue-950/20">
                                        <div>
                                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                                Previous Score
                                            </p>

                                            <p className="mt-1 text-2xl font-bold text-blue-600 dark:text-teal-400">
                                                {selectedQuiz.score}%
                                            </p>
                                        </div>

                                        <CheckCircle2
                                            size={32}
                                            className="text-teal-500"
                                        />
                                    </div>
                                )}

                                {/* Modal Buttons */}
                                <div className="mt-7 flex gap-3">
                                    <button
                                        onClick={() =>
                                            setSelectedQuiz(null)
                                        }
                                        className="flex-1 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-[#1e334a] dark:text-slate-200 dark:hover:bg-[#102337]"
                                    >
                                        Close
                                    </button>

                                    {selectedQuiz.status ===
                                        "Available" && (
                                            <button
                                                onClick={() =>
                                                    startQuiz(
                                                        selectedQuiz
                                                    )
                                                }
                                                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 px-5 py-3 text-sm font-semibold text-white transition hover:from-blue-700 hover:to-teal-600"
                                            >
                                                <PlayCircle size={18} />
                                                Start Quiz
                                            </button>
                                        )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

/* =========================================================
   QUIZ STAT
========================================================= */

const QuizStat = ({
    label,
    value,
    icon: Icon,
    iconStyle,
}) => {
    const styles =
        iconStyle === "teal"
            ? "bg-teal-50 text-teal-600 dark:bg-teal-950/40 dark:text-teal-400"
            : "bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400";

    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-[#1e334a] dark:bg-[#0b1727]">
            <div className="flex items-center justify-between gap-3">
                <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        {label}
                    </p>

                    <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
                        {value}
                    </p>
                </div>

                <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${styles}`}
                >
                    <Icon size={22} />
                </div>
            </div>
        </div>
    );
};

/* =========================================================
   INFO BOX
========================================================= */

const InfoBox = ({
    icon: Icon,
    label,
    value,
}) => {
    return (
        <div className="rounded-xl bg-slate-50 p-3 dark:bg-[#102337]">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                <Icon size={16} />

                <span className="text-xs">
                    {label}
                </span>
            </div>

            <p className="mt-1 truncate text-sm font-semibold text-slate-800 dark:text-slate-200">
                {value}
            </p>
        </div>
    );
};

/* =========================================================
   STATUS BADGE
========================================================= */

const StatusBadge = ({ status }) => {
    const styles = {
        Available:
            "border-teal-200 bg-teal-50 text-teal-700 dark:border-teal-800 dark:bg-teal-950/30 dark:text-teal-300",

        Completed:
            "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800 dark:bg-blue-950/30 dark:text-blue-300",

        Locked:
            "border-slate-200 bg-slate-100 text-slate-500 dark:border-[#1e334a] dark:bg-[#102337] dark:text-slate-400",
    };

    return (
        <span
            className={`shrink-0 rounded-full border px-3 py-1 text-xs font-semibold ${styles[status] || styles.Locked
                }`}
        >
            {status}
        </span>
    );
};

/* =========================================================
   MODAL STAT
========================================================= */

const ModalStat = ({
    icon: Icon,
    value,
    label,
}) => {
    return (
        <div className="rounded-xl bg-slate-50 p-4 text-center dark:bg-[#102337]">
            <Icon
                size={20}
                className="mx-auto text-blue-600 dark:text-teal-400"
            />

            <p className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                {value}
            </p>

            <p className="text-xs text-slate-500 dark:text-slate-400">
                {label}
            </p>
        </div>
    );
};

/* =========================================================
   RESULT STAT
========================================================= */

const ResultStat = ({
    label,
    value,
    accent,
}) => {
    const styles = {
        blue: "text-blue-600 dark:text-blue-400",
        teal: "text-teal-600 dark:text-teal-400",
        red: "text-red-600 dark:text-red-400",
    };

    return (
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-center dark:border-[#1e334a] dark:bg-[#102337]">
            <p className="text-sm text-slate-500 dark:text-slate-400">
                {label}
            </p>

            <p
                className={`mt-1 text-2xl font-bold ${styles[accent] || styles.blue
                    }`}
            >
                {value}
            </p>
        </div>
    );
};

/* =========================================================
   LEGEND
========================================================= */

const Legend = ({
    label,
    className,
}) => {
    return (
        <div className="flex items-center gap-2">
            <span
                className={`h-3 w-3 rounded-full ${className}`}
            />

            <span className="text-slate-500 dark:text-slate-400">
                {label}
            </span>
        </div>
    );
};

export default Quiz;