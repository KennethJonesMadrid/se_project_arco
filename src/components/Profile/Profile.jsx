import "./Profile.css";
import avatar from "../../assets/avatar-icon.png";
import WorkList from "../WorkList/WorkList";

function Profile({ savedWorks, onWorkClick, onSaveWork, currentUser }) {
  const hasSavedWorks = savedWorks.length > 0;
  return (
    <main className="profile">
      <div className="profile__user-section">
        <div className="profile__user-info">
          <div className="profile__avatar">
            <img className="profile__avatar-img" src={avatar} alt="avatar" />
          </div>
          <div className="profile__user-details">
            <h2 className="profile__user-name">{currentUser.name}</h2>
            <p className="profile__user-email">{currentUser.email}</p>
          </div>
        </div>
      </div>

      <div className="profile__works-section">
        <p className="profile__label">YOUR COLLECTION</p>
        <h1 className="profile__title">Saved Works</h1>
        {hasSavedWorks ? (
          <WorkList
            works={savedWorks}
            onWorkClick={onWorkClick}
            searchQuery=""
            savedWorks={savedWorks}
            onSaveWork={onSaveWork}
          />
        ) : (
          <div className="profile__empty">
            <p className="profile__empty-text">No saved works yet</p>
            <p className="profile__empty-subtext">
              Save your favorite violin concertos to see them here!
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

export default Profile;
