export const mockWorks = [
  {
    id: "16458",
    title: "Violin Concerto in D major, op. 61",
    subtitle: "",
    genre: "Orchestral",
    popular: "1",
    recommended: "1",
    composer: {
      id: "145",
      name: "Beethoven",
      complete_name: "Ludwig van Beethoven",
      epoch: "Early Romantic",
      birth: "1770-01-01",
      death: "1827-01-01",
      portrait: "https://assets.openopus.org/portraits/55910756-1568084860.jpg",
    },
    image: "/images/beethoven-violin-concerto.jpg",
    duration: "40 min",
  },
  {
    id: "7764",
    title: "Violin Concerto in D major, op. 77",
    subtitle: "",
    genre: "Orchestral",
    popular: "1",
    recommended: "1",
    composer: {
      id: "80",
      name: "Brahms",
      complete_name: "Johannes Brahms",
      epoch: "Romantic",
      birth: "1833-01-01",
      death: "1897-01-01",
      portrait:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/JohannesBrahms.jpg/440px-JohannesBrahms.jpg",
    },
    image:
      "https://www.capitalmusicgear.com/content/images/products/full/Brahms-Violin-Concerto-In-D-Major-Op-77-Mmo3108-755801.webp",
    duration: "38 min",
  },
  {
    id: "23512",
    title: "Violin Concerto in E minor, op. 64",
    subtitle: "",
    genre: "Orchestral",
    popular: "1",
    recommended: "1",
    composer: {
      id: "42",
      name: "Mendelssohn",
      complete_name: "Felix Mendelssohn",
      epoch: "Romantic",
      birth: "1809-01-01",
      death: "1847-01-01",
      portrait:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjmoD_41T1WDgn4GGLuGGT7xpk3WTvqGNieup_ghgcPT7ehsAY0bvxw_-J6j4YPdzBfDTjwhr_6IYMAblv5cexCmRd5vMbfpJvl93arQ&s=10",
    },
    image: "/images/mendelssohn-violin-concerto.jpg",
    duration: "28 min",
  },
  {
    id: "15144",
    title: "Piano Concerto in A minor, op. 54",
    subtitle: "",
    genre: "Orchestral",
    popular: "1",
    recommended: "1",
    composer: {
      id: "129",
      name: "Schumann",
      complete_name: "Robert Schumann",
      epoch: "Romantic",
      birth: "1810-01-01",
      death: "1856-01-01",
      portrait: "https://assets.openopus.org/portraits/25233320-1568084946.jpg",
    },
    image: "/images/schumann-piano-concerto.jpg",
    duration: "31 min",
  },
  {
    id: "16218",
    title: 'Piano Concerto no. 5 in E flat major, op. 73, "Emperor"',
    subtitle: "",
    genre: "Orchestral",
    popular: "1",
    recommended: "1",
    composer: {
      id: "145",
      name: "Beethoven",
      complete_name: "Ludwig van Beethoven",
      epoch: "Early Romantic",
      birth: "1770-01-01",
      death: "1827-01-01",
      portrait: "https://assets.openopus.org/portraits/55910756-1568084860.jpg",
    },
    image: "/images/beethoven-emperor.jpg",
    duration: "42 min",
  },
  {
    id: "7774",
    title: "Piano Concerto no. 2 in B flat major, op. 83",
    subtitle: "",
    genre: "Orchestral",
    popular: "1",
    recommended: "1",
    composer: {
      id: "80",
      name: "Brahms",
      complete_name: "Johannes Brahms",
      epoch: "Romantic",
      birth: "1833-01-01",
      death: "1897-01-01",
      portrait: "https://assets.openopus.org/portraits/someurl.jpg",
    },
    image: "/images/brahms-piano-concerto-2.jpg",
    duration: "50 min",
  },
];

export const getViolinWorks = () => {
  return mockWorks.filter((work) =>
    work.title.toLowerCase().includes("violin")
  );
};

export const getWorksByGenre = (genre) => {
  return mockWorks.filter((work) => work.genre === genre);
};
