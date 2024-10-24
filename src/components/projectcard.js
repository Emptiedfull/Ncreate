import { useEffect, useState } from "react";
import guest from "./images/Guest.png";
import "./styles/projectcard.css";

function Projectcard({ img, title, author, projecttype, pfp = guest }) {
  const [vote, setVote] = useState(0);
  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);

  useEffect(() => {
    setVote(Math.floor(Math.random() * 100));
  }, []);

  const upvote = () => {
    if (downvoted) {
      setVote(vote + 1);
      setDownvoted(false);
    }
    if (upvoted) {
      setVote(vote - 1);
      setUpvoted(false);
    } else {
      setVote(vote + 1);
      setUpvoted(true);
    }
  };

  const downvote = () => {
    if (upvoted) {
      setVote(vote - 1);
      setUpvoted(false);
    }
    if (downvoted) {
      setVote(vote + 1);
      setDownvoted(false);
    } else {
      setVote(vote - 1);
      setDownvoted(true);
    }
  };

  return (
    <div className="Projectcard">
      <div className="Projectcardmain">
        <img src={img} alt="Project"></img>
        <div className="Project-card-hover">
          <div className="Project-card-votes">
            <button
              className={`vote-button upvot ${upvoted ? "upvoted" : ""}`}
              onClick={upvote}
            >
              <i className="fas fa-arrow-up"></i>
            </button>
            <span className="vote-count">{vote}</span>{" "}
            {/* Placeholder for vote count */}
            <button
              className={`vote-button downvote ${downvoted ? "upvoted" : ""}`}
              onClick={downvote}
            >
              <i className="fas fa-arrow-down"></i>
            </button>
          </div>

          <div className="Project-card-hover-content">
            <p className="projectype">{projecttype}</p>
            <div className="Creator">
              <p className="author">{author}</p>
              <div className="socials">
                <a href="/" className="socials-link">
                  <i className="fab fa-github"></i>
                </a>
                <a href="/" className="socials-link">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="/" className="socials-link">
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ProjectTitle">
        <img src={pfp} className="pfp" alt=""></img>
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default Projectcard;
