import "./WorkList.css";
import { getViolinWorks } from "../../utils/mockData";
import WorkCard from "../WorkCard/WorkCard";

function WorkList({ onWorkClick, searchQuery }) {
  const violinWorks = getViolinWorks();

  const filteredWorks = violinWorks.filter((work) => {
    if (!searchQuery) return true;

    const query = searchQuery.toLowerCase();

    return (
      work.title.toLowerCase().includes(query) ||
      work.composer.complete_name.toLowerCase().includes(query) ||
      work.composer.name.toLowerCase().includes(query) ||
      work.genre.toLowerCase().includes(query) ||
      work.composer.epoch.toLowerCase().includes(query) ||
      work.subtitle.toLowerCase().includes(query)
    );
  });

  return (
    <div className="cards">
      <ul className="cards__list">
        {filteredWorks.map((work) => {
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
