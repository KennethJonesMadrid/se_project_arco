import "./Main.css";
import { mockWorks } from "../../utils/mockData";
import WorkList from "../WorkList/WorkList";

function Main({ onWorkClick }) {
  return (
    <main className="main">
      <div className="main__container"></div>
      <p className="main__label">FEATURED</p>
      <h2 className="main__title">Concertos</h2>
      <WorkList onWorkClick={onWorkClick} />
    </main>
  );
}

export default Main;
