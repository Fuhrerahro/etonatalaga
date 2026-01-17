import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./App.css";
import MentorCard from "./MentorCard";

const mentorsData = [
  { id: 1, name: "Juan Dela Cruz", expertise: "Web Development", rating: 4.9, reviews: ["Very helpful mentor!", "Explains concepts clearly."], packages: { basic: 15, standard: 30, premium: 50 }, bio: "Senior Web Developer with 10 years experience.", badge: "Top Rated", image: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "Maria Santos", expertise: "UI/UX Design", rating: 4.8, reviews: ["Amazing design insights", "Highly recommended"], packages: { basic: 12, standard: 25, premium: 45 }, bio: "UI/UX Designer specializing in web & mobile apps.", badge: "Verified", image: "https://i.pravatar.cc/150?img=2" },
  { id: 3, name: "Pedro Reyes", expertise: "Data Science", rating: 4.7, reviews: ["Great guidance", "Very professional"], packages: { basic: 18, standard: 35, premium: 60 }, bio: "Data scientist with focus on machine learning and AI.", badge: "Top Rated", image: "https://i.pravatar.cc/150?img=3" },
  { id: 4, name: "Ana Cruz", expertise: "Mobile Development", rating: 4.8, reviews: ["Excellent tutor", "Very patient"], packages: { basic: 20, standard: 40, premium: 65 }, bio: "Mobile app developer for iOS and Android.", badge: "Verified", image: "https://i.pravatar.cc/150?img=4" },
  { id: 5, name: "Carlos Medina", expertise: "Graphic Design", rating: 4.6, reviews: ["Creative and helpful", "Great feedback"], packages: { basic: 10, standard: 20, premium: 35 }, bio: "Creative graphic designer for brands and social media.", badge: "New", image: "https://i.pravatar.cc/150?img=5" },
  { id: 6, name: "Liza Gomez", expertise: "Digital Marketing", rating: 4.7, reviews: ["Very knowledgeable", "Great strategies"], packages: { basic: 15, standard: 28, premium: 50 }, bio: "Digital marketer with 7 years experience.", badge: "Top Rated", image: "https://i.pravatar.cc/150?img=6" },
  { id: 7, name: "Ramon Santos", expertise: "AI & Machine Learning", rating: 4.9, reviews: ["Expert in the field", "Clear explanations"], packages: { basic: 25, standard: 50, premium: 80 }, bio: "AI specialist and ML engineer.", badge: "Verified", image: "https://i.pravatar.cc/150?img=7" },
  { id: 8, name: "Sophia Reyes", expertise: "Photography", rating: 4.5, reviews: ["Amazing photographer", "Very inspiring"], packages: { basic: 12, standard: 25, premium: 45 }, bio: "Professional photographer and creative artist.", badge: "New", image: "https://i.pravatar.cc/150?img=8" }
];

export default function App() {
  const [search, setSearch] = useState("");
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [dark, setDark] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  // ✅ Page title
  useEffect(() => {
    document.title = "ConnectEd | Mentorship Platform";
  }, []);

  // ✅ FIX: define toggleFavorite
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id]
    );
  };

  const filteredMentors = mentorsData.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase()) ||
    m.expertise.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={`app ${dark ? "dark" : ""}`}>
      <Navbar
        darkMode={dark}
        toggleDarkMode={() => setDark(!dark)}
        loggedIn={loggedIn}
        toggleLogin={() => setLoggedIn(!loggedIn)}
      />

      <header className="header-hero">
        <h1>Find Your Expert Mentor</h1>
        <p className="subtitle">Book 1-on-1 sessions with top professionals worldwide</p>
        <input
          className="search"
          placeholder="Search skills or mentors"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>

      <div className="mentor-list" id="mentor-list">
        {filteredMentors.map((mentor) => (
          <div className="mentor-card" key={mentor.id}>
            <div
              className={`favorite ${favorites.includes(mentor.id) ? "active" : ""}`}
              onClick={() => toggleFavorite(mentor.id)}
            >
              ♥
            </div>

            <img src={mentor.image} alt={mentor.name} className="mentor-avatar" />
            <div className="card-badge">{mentor.badge}</div>
            <h3>{mentor.name}</h3>
            <p className="expertise">{mentor.expertise}</p>
            <p className="rating">
              ⭐ {mentor.rating} ({mentor.reviews.length} reviews)
            </p>

            <div className="packages">
              <button onClick={() => setSelectedMentor(mentor)}>Basic ${mentor.packages.basic}</button>
              <button onClick={() => setSelectedMentor(mentor)}>Standard ${mentor.packages.standard}</button>
              <button onClick={() => setSelectedMentor(mentor)}>Premium ${mentor.packages.premium}</button>
            </div>

            <div className="button-group">
              <button onClick={() => setSelectedMentor(mentor)}>View Profile</button>
              <button>Message</button>
            </div>
          </div>
        ))}
      </div>

      {selectedMentor && (
        <div className="modal">
          <div className="modal-content">
            <img src={selectedMentor.image} alt={selectedMentor.name} className="modal-avatar" />
            <h2>{selectedMentor.name}</h2>
            <p className="expertise">{selectedMentor.expertise}</p>
            <p className="bio">{selectedMentor.bio}</p>

            <h4>Reviews</h4>
            {selectedMentor.reviews.map((r, i) => (
              <p key={i}>“{r}”</p>
            ))}

            <h4>Book Session</h4>
            <input type="date" />
            <button>Confirm Booking</button>
            <button className="close" onClick={() => setSelectedMentor(null)}>
              Close
            </button>
          </div>
        </div>
      )}

      <footer className="footer">
        <div className="footer-links">
          <span>About</span>
          <span>Contact</span>
          <span>Privacy</span>
          <span>Terms</span>
        </div>
        <p>© 2026 ConnectEd. All rights reserved.</p>
      </footer>

      <footer className="bottom-nav">
        <span>🏠</span>
        <span>❤️</span>
        <span>💬</span>
        <span>👤</span>
      </footer>
    </div>
  );
}
