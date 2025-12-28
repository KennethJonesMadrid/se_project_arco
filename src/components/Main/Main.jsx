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
  onPlayWork,
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
        {!isLoading && !errorMessage && works.length === 0 && searchQuery && (
          <p className="main__no-results">
            No results found for "{searchQuery}"
          </p>
        )}
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
          onPlayWork={onPlayWork}
        />
      )}
    </main>
  );
}

export default Main;
