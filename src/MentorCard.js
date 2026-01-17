import "./MentorCard.css";

export default function MentorCard({
  mentor,
  favorites,
  toggleFavorite,
  setSelectedMentor
}) {
  const isFavorite = favorites.includes(mentor.id);

  return (
    <div className="mentor-card">
      <span
        className={`favorite ${isFavorite ? "active" : ""}`}
        onClick={() => toggleFavorite(mentor.id)}
      >
        ♥
      </span>

      <span className="card-badge">{mentor.badge}</span>

      <img src={mentor.image} alt={mentor.name} className="mentor-avatar" />

      <h3>{mentor.name}</h3>
      <p className="expertise">{mentor.expertise}</p>
      <p className="rating">⭐ {mentor.rating}</p>

      <div className="packages">
        <button onClick={() => setSelectedMentor(mentor)}>
          Basic ${mentor.packages.basic}
        </button>
        <button onClick={() => setSelectedMentor(mentor)}>
          Standard ${mentor.packages.standard}
        </button>
        <button onClick={() => setSelectedMentor(mentor)}>
          Premium ${mentor.packages.premium}
        </button>
      </div>

      <div className="button-group">
        <button onClick={() => setSelectedMentor(mentor)}>View Profile</button>
        <button>Message</button>
      </div>
    </div>
  );
}
