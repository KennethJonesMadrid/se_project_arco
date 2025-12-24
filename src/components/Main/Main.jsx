import "./Main.css";
import { mockWorks, getViolinWorks } from "../../utils/mockData";
import WorkList from "../WorkList/WorkList";
import Preloader from "../Preloader/Preloader";

function Main({
  onWorkClick,
  searchQuery,
  savedWorks,
  onSaveWork,
  works,
  isLoading,
  errorMessage,
}) {
  const violinWorks = getViolinWorks();

  return (
    <main className="main">
      <div className="main__container">
        <p className="main__label">FEATURED</p>
        <h2 className="main__title">
          {searchQuery ? `Results for "${searchQuery}"` : "Works"}
        </h2>
        {errorMessage && <p className="main__error">{errorMessage}</p>}
      </div>

      {isLoading ? (
        <Preloader />
      ) : (
        <WorkList
          works={works}
          onWorkClick={onWorkClick}
          searchQuery={searchQuery}
          savedWorks={savedWorks}
          onSaveWork={onSaveWork}
        />
      )}
    </main>
  );
}

export default Main;
