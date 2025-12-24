import { useState, useEffect } from "react";

import "./WorkList.css";
import WorkCard from "../WorkCard/WorkCard";
import { INITIAL_WORKS_COUNT, WORKS_INCREMENT } from "../../utils/constants";

function WorkList({ onWorkClick, searchQuery, savedWorks, onSaveWork, works }) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_WORKS_COUNT);

  useEffect(() => {
    setVisibleCount(INITIAL_WORKS_COUNT);
  }, [searchQuery]);

  const filteredWorks = works.filter((work) => {
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

  const visibleWorks = filteredWorks.slice(0, visibleCount);

  return (
    <div className="cards">
      <ul className="cards__list">
        {visibleWorks.map((work) => {
          const isSaved = savedWorks.some((w) => w.id === work.id);
          return (
            <WorkCard
              onWorkClick={() => onWorkClick(work)}
              work={work}
              key={work.id}
              isSaved={isSaved}
              onSaveWork={onSaveWork}
            />
          );
        })}
        {visibleCount < filteredWorks.length && (
          <button
            type="button"
            className="cards__show-more-btn"
            onClick={() => setVisibleCount((count) => count + WORKS_INCREMENT)}
          >
            Show more
          </button>
        )}
      </ul>
    </div>
  );
}

export default WorkList;
