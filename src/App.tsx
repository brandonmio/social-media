import { useState } from "react";
import "./styles.css";

import depressoImg from "./assets/depresso.webp";
import doomImg from "./assets/doomscrolling.webp";
import dopamineImg from "./assets/dopamine.png";
import selfesteemImg from "./assets/selfesteem.webp";
import sleepImg from "./assets/sleep.jpg";
import bluelightImg from "./assets/bluelight.jpg";
import brainBg from "./assets/brainbg.webp";

type Slide = {
  title: string;
  points: string[];
  image: string;
};

export default function App() {
  const [activeTab, setActiveTab] = useState<"mental" | "addiction" | "sleep">("mental");
  const [currentSlide, setCurrentSlide] = useState(0);

  const data: Record<"mental" | "addiction" | "sleep", Slide[]> = {
    mental: [
      {
        title: "Anxiety & Depression",
        points: [
          "Comparison increases anxiety",
          "Unrealistic standards harm self-image",
          "Linked to depression",
          "FOMO effects",
        ],
        image: depressoImg,
      },
      {
        title: "Self-Esteem",
        points: [
          "Validation through likes",
          "Filtered content creates insecurity",
          "Body image issues",
          "Confidence drops",
        ],
        image: selfesteemImg,
      },
    ],
    addiction: [
      {
        title: "Endless Scrolling",
        points: [
          "Infinite feeds",
          "Time distortion",
          "Hard to stop",
          "Built for retention",
        ],
        image: doomImg,
      },
      {
        title: "Dopamine Effect",
        points: [
          "Likes trigger reward system",
          "Notifications addictive",
          "Repeated behavior",
          "Brain dependency",
        ],
        image: dopamineImg,
      },
    ],
    sleep: [
      {
        title: "Sleep Disruption",
        points: [
          "Delays sleep",
          "Interrupts cycles",
          "Less REM sleep",
          "Lower quality",
        ],
        image: sleepImg,
      },
      {
        title: "Blue Light",
        points: [
          "Reduces melatonin",
          "Harder to sleep",
          "Circadian disruption",
          "Night alertness",
        ],
        image: bluelightImg,
      },
    ],
  };

  const slides = data[activeTab];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const handleTabChange = (tab: "mental" | "addiction" | "sleep") => {
    setActiveTab(tab);
    setCurrentSlide(0);
  };

  return (
    <div className={`app ${activeTab}`}>
      {/* NAVBAR */}
      <nav className="navbar">
        <h2>Social Media & Young Adults</h2>
      </nav>

      {/* TABS */}
      <div className="tabs">
        <button className={activeTab === "mental" ? "active" : ""} onClick={() => handleTabChange("mental")}>
          Mental Health
        </button>
        <button className={activeTab === "addiction" ? "active" : ""} onClick={() => handleTabChange("addiction")}>
          Addiction
        </button>
        <button className={activeTab === "sleep" ? "active" : ""} onClick={() => handleTabChange("sleep")}>
          Sleep Impact
        </button>
      </div>

      {/* HERO */}
      <div className="hero">
        <img src={brainBg} alt="background" />
        <h1>Social Media & Mental Health</h1>
      </div>

      {/* CONTENT */}
      <div className="content">
        <div className="slider">
          <button className="arrow left" onClick={prevSlide}>◀</button>

          <div className="slide fade">
            <img src={slides[currentSlide].image} />
            <div className="card">
              <h2>{slides[currentSlide].title}</h2>
              <ul>
                {slides[currentSlide].points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          </div>

          <button className="arrow right" onClick={nextSlide}>▶</button>
        </div>

        <div className="dots">
          {slides.map((_, i) => (
            <span
              key={i}
              className={i === currentSlide ? "dot active-dot" : "dot"}
              onClick={() => setCurrentSlide(i)}
            />
          ))}
        </div>
      </div>

      {/* SOLUTIONS */}
      <div className="solutions">
        <h2>Healthy Social Media Habits</h2>

        <div className="solution-grid">
          <div className="solution-card">
            <h3>⏱ Set Time Limits</h3>
            <p>Use app timers to control daily usage and avoid endless scrolling.</p>
          </div>

          <div className="solution-card">
            <h3>📵 Take Breaks</h3>
            <p>Schedule time away from screens to reset your mind.</p>
          </div>

          <div className="solution-card">
            <h3>🧠 Be Mindful</h3>
            <p>Notice how content makes you feel and unfollow negative influences.</p>
          </div>

          <div className="solution-card">
            <h3>🌙 No Phones Before Bed</h3>
            <p>Avoid screens at least 30–60 minutes before sleeping.</p>
          </div>

          <div className="solution-card">
            <h3>👥 Real-Life Connections</h3>
            <p>Spend more time with friends and family offline.</p>
          </div>

          <div className="solution-card">
            <h3>🔕 Turn Off Notifications</h3>
            <p>Reduce distractions and constant dopamine triggers.</p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <p>Contact: info@email.com</p>
        <p>Phone: (123) 456-7890</p>
      </footer>
    </div>
  );
}