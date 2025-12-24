import "./WorkDetailModal.css";
import closeIcon from "../../assets/close-icon.png";
import saveIcon from "../../assets/like-icon.png";
import playIcon from "../../assets/play-icon.png";
import dateIcon from "../../assets/date-icon.png";

function WorkDetailModal({ work, isOpen, onClose, onSaveWork, isSaved }) {
  if (!isOpen || !work) {
    return null;
  }

  const handleSaveClick = () => {
    onSaveWork(work);
  };

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__overlay" onClick={onClose}></div>

      <div className="work-detail">
        <button type="button" className="work-detail__close" onClick={onClose}>
          <img src={closeIcon} alt="close" />
        </button>

        <div className="work-detail__hero">
          <img
            className="work-detail__hero-image"
            src={work.image || work.composer.portrait}
            alt={work.title}
          />
          <div className="work-detail__hero-overlay">
            <div className="work-detail__year-badge">
              <img src={dateIcon} alt="date" />
              <span>{work.composer.birth.slice(0, 4)}</span>
            </div>
            <h2 className="work-detail__title">{work.title}</h2>
          </div>
        </div>

        <div className="work-detail__composer-section">
          <img
            src={work.composer.portrait}
            alt={work.composer.complete_name}
            className="work-detail__composer-portrait"
          />
          <div className="work-detail__composer-info">
            <h3 className="work-detail__composer-name">
              {work.composer.complete_name}
            </h3>
            <div className="work-detail__composer-meta">
              <img src={dateIcon} alt="dates" />
              <span>
                {work.composer.birth.slice(0, 4)} -{" "}
                {work.composer.death.slice(0, 4)}
              </span>
              <span> • {work.composer.epoch}</span>
            </div>
          </div>
        </div>

        <div className="work-detail__info-section">
          <div className="work-detail__metadata">
            <div>
              <p className="work-detail__label">Genre</p>
              <p className="work-detail__value">{work.genre}</p>
            </div>
          </div>

          <div className="work-detail__actions">
            <button className="work-detail__play-btn" type="button">
              <img src={playIcon} alt="play" />
              Play
            </button>
            <button
              className={`work-detail__save-btn ${
                isSaved ? "work-detail__save-btn_active" : ""
              }`}
              type="button"
              onClick={handleSaveClick}
            >
              <img src={saveIcon} alt="save" />
              {isSaved ? "Saved" : "Save"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkDetailModal;
