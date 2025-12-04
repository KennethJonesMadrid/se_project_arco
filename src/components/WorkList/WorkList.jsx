import "./WorkList.css";
import { getViolinWorks } from "../../utils/mockData";
import WorkCard from "../WorkCard/WorkCard";

function WorkList({ onWorkClick }) {
  const violinWorks = getViolinWorks();

  return (
    <div className="cards">
      <ul className="cards__list">
        {violinWorks.map((work) => {
          return (
            <WorkCard
              onWorkClick={() => onWorkClick(work)}
              work={work}
              key={work.id}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default WorkList;
