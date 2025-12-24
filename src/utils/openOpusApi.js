import { checkResponse } from "./api";
import { OPEN_OPUS_BASE_URL } from "./constants";

export const searchAll = (query) => {
  return fetch(
    `${OPEN_OPUS_BASE_URL}/omnisearch/${encodeURIComponent(query)}/0.json`
  ).then(checkResponse);
};

export const getFeaturedWorks = () => {
  return searchAll("violin");
};

export const transformSearchResults = (searchResults) => {
  if (!searchResults || !searchResults.results) {
    return [];
  }

  const works = [];

  searchResults.results.forEach((result) => {
    if (result.work && result.composer) {
      works.push({
        id: result.work.id,
        title: result.work.title,
        subtitle: result.work.subtitle || "",
        genre: result.work.genre || "Unknown",
        popular: result.work.popular || "0",
        recommended: result.work.recommended || "0",
        composer: {
          id: result.composer.id,
          name: result.composer.name,
          complete_name: result.composer.complete_name,
          epoch: result.composer.epoch || "Unknown",
          birth: result.composer.birth || "",
          death: result.composer.death || "",
          portrait: result.composer.portrait || null,
        },
        image: null,
        duration: null,
      });
    }
  });

  return works;
};

export const filterViolinWorks = (works) => {
  if (!Array.isArray(works)) return [];
  return works.filter((work) =>
    (work.title || "").toLowerCase().includes("violin")
  );
};

export const pickRandom = (items, count = 12) => {
  const arr = Array.isArray(items) ? [...items] : [];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, count);
};
