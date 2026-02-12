import { useState } from "react";

export default function ProfileCard({ name, role, description, quote, color }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [showQuote, setShowQuote] = useState(false);

  const buttonLabel = isFollowing ? "Following" : "Follow";
  const statusLabel = isFollowing ? "Connected" : "Not connected";
  const quoteLabel = showQuote ? "Hide quote" : "Show quote";

  return (
    <article className="card" style={{ "--accent": color }}>
      <div className="card__badge">{role}</div>
      <h2>{name}</h2>
      <p className="card__description">{description}</p>
      {showQuote ? <p className="card__quote">“{quote}”</p> : null}

      <div className="card__footer">
        <span className={`status ${isFollowing ? "status--on" : ""}`}>
          {statusLabel}
        </span>
        <div className="card__actions">
          <button
            type="button"
            className="btn btn--ghost"
            onClick={() => setShowQuote((prev) => !prev)}
          >
            {quoteLabel}
          </button>
          <button
            type="button"
            className={`btn ${isFollowing ? "btn--active" : ""}`}
            onClick={() => setIsFollowing((prev) => !prev)}
          >
            {buttonLabel}
          </button>
        </div>
      </div>
    </article>
  );
}
