import "./Main.css";
import { mockWorks, getViolinWorks } from "../../utils/mockData";
import WorkList from "../WorkList/WorkList";
import Preloader from "../Preloader/Preloader";

function Main({ onWorkClick, searchQuery, savedWorks, onSaveWork }) {
  const violinWorks = getViolinWorks();

  return (
    <main className="main">
      <div className="main__container"></div>
      <p className="main__label">FEATURED</p>
      <h2 className="main__title">Concertos</h2>

      <WorkList
        works={violinWorks}
        onWorkClick={onWorkClick}
        searchQuery={searchQuery}
        savedWorks={savedWorks}
        onSaveWork={onSaveWork}
      />
    </main>
  );
}

export default Main;
