import "./WorkCard.css";
import DateIcon from "../../assets/date-icon.png";
import DurationIcon from "../../assets/duration-icon.svg";
import PlayIcon from "../../assets/play-icon.png";
import LikeIcon from "../../assets/like-icon.png";
import { mockWorks } from "../../utils/mockData";

function WorkCard({ onWorkClick, work }) {
  return (
    <li onClick={onWorkClick} className="work-card">
      <div className="work-card__image-wrapper">
        <img
          src={work.composer.portrait || work.image}
          alt={`${work.composer.complete_name} - ${work.title}`}
          className="work-card__image"
        />
        <div className="work-card__year-badge-container">
          <img className="work-card__year-icon" src={DateIcon} />
          <p className="work-card__year">{work.composer.birth.slice(0, 4)}</p>
        </div>
      </div>
      <div className="work-card__content">
        <h3 className="work-card__title">{work.title}</h3>
        <p className="work-card__composer">{work.composer.complete_name}</p>
        <div className="work-card__footer">
          <div className="work-card__duration-container">
            <img
              className="work-card__duration-icon"
              src={DurationIcon}
              alt="Duration"
            />
            <p className="work-card__duration">{`~ ${work.duration}`}</p>
          </div>
          <div className="work-card__actions-btns">
            <button type="button" className="work-card__play-btn">
              <img className="work-card__play-icon" src={PlayIcon} alt="Play" />
            </button>
            <button type="button" className="work-card__like-btn">
              <img className="work-card__like-icon" src={LikeIcon} alt="Like" />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default WorkCard;
