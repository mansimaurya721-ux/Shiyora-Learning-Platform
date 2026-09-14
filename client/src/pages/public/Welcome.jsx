import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import shiyoraLogo from "../../assets/shiyora.logo.png";
import "./Welcome.css";

function ArrowIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
        </svg>
    );
}

function Welcome() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/home", { replace: true });
        }, 2500);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <main className="welcome-page">

            {/* ================= BACKGROUND ================= */}

            <div className="welcome-bg">

                <div className="gradient-orb orb-one"></div>
                <div className="gradient-orb orb-two"></div>
                <div className="gradient-orb orb-three"></div>

                <div className="grid-background"></div>

                <div className="floating-dot dot-one"></div>
                <div className="floating-dot dot-two"></div>
                <div className="floating-dot dot-three"></div>

            </div>


            {/* ================= NAVBAR ================= */}

            <header className="welcome-navbar">

                <div className="welcome-brand">

                    <div className="welcome-brand-logo">
                        <img
                            src={shiyoraLogo}
                            alt="Shiyora"
                        />
                    </div>

                    <div className="welcome-brand-text">
                        <span>Shiyora</span>
                        <small>Learning Platform</small>
                    </div>

                </div>

                <div className="welcome-nav-pill">
                    <span></span>
                    Smart Learning
                </div>

            </header>


            {/* ================= MAIN ================= */}

            <section className="welcome-main">

                {/* LEFT DECORATION */}

                <div className="side-decoration left-decoration">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>


                {/* LOGO */}

                <div className="welcome-logo-container">

                    <div className="logo-ring ring-one"></div>
                    <div className="logo-ring ring-two"></div>

                    <div className="welcome-logo-card">

                        <div className="logo-shine"></div>

                        <img
                            src={shiyoraLogo}
                            alt="Shiyora Logo"
                        />

                    </div>

                </div>


                {/* BADGE */}

                <div className="welcome-badge">

                    <span className="badge-dot"></span>

                    <span>
                        YOUR LEARNING JOURNEY STARTS HERE
                    </span>

                </div>


                {/* HEADING */}

                <h1 className="welcome-title">

                    <span className="title-line line-one">
                        Learn.
                    </span>

                    <span className="title-line line-two">
                        Grow.
                    </span>

                    <span className="title-line line-three">
                        Achieve.
                    </span>

                </h1>


                {/* DESCRIPTION */}

                <p className="welcome-description">

                    A smarter way to learn, build skills,
                    <br className="desktop-break" />
                    and create your future.

                </p>


                {/* FEATURES */}

                <div className="welcome-mini-features">

                    <div className="mini-feature">
                        <span className="feature-icon">01</span>
                        <span>Learn</span>
                    </div>

                    <div className="feature-line"></div>

                    <div className="mini-feature">
                        <span className="feature-icon">02</span>
                        <span>Practice</span>
                    </div>

                    <div className="feature-line"></div>

                    <div className="mini-feature">
                        <span className="feature-icon">03</span>
                        <span>Grow</span>
                    </div>

                </div>


                {/* LOADING */}

                <div className="welcome-loading">

                    <div className="loading-header">

                        <span>
                            Preparing your learning experience
                        </span>

                        <span className="loading-percentage">
                            100%
                        </span>

                    </div>

                    <div className="loading-track">

                        <div className="loading-progress"></div>

                    </div>

                </div>


                {/* ARROW */}

                <div className="welcome-arrow">

                    <ArrowIcon />

                </div>


                {/* RIGHT DECORATION */}

                <div className="side-decoration right-decoration">

                    <span></span>
                    <span></span>
                    <span></span>

                </div>

            </section>


            {/* ================= FOOTER ================= */}

            <footer className="welcome-footer">

                <span>SHIYORA</span>

                <div className="footer-line"></div>

                <span>LEARN • GROW • ACHIEVE</span>

            </footer>

        </main>
    );
}

export default Welcome;