import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import WorkDetailModal from "../WorkDetailModal/WorkDetailModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import {
  searchAll,
  transformSearchResults,
  filterViolinWorks,
  getFeaturedWorks,
  pickRandom,
} from "../../utils/openOpusApi";
import { getViolinWorks } from "../../utils/mockData";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [savedWorks, setSavedWorks] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({ name: "", email: "" });
  const [works, setWorks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const isWorkSaved = selectedCard
    ? savedWorks.some((w) => w.id === selectedCard.id)
    : false;

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handleRegisterClick = () => {
    setActiveModal("register");
  };

  const handleWorkCardClick = (card) => {
    setSelectedCard(card);
    setActiveModal("workDetail");
  };

  const closeActiveModal = () => {
    setActiveModal("");
    setSelectedCard(null);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setIsLoading(true);
    setErrorMessage(null);

    const q = `${query} violin`;

    searchAll(q)
      .then((res) => {
        const transformedWorks = transformSearchResults(res);

        setWorks(transformedWorks);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Search error", err);
        setErrorMessage("Could not fetch results. Showing sample data");

        const fallbackWorks = getViolinWorks().filter(
          (work) =>
            work.title.toLowerCase().includes(query.toLowerCase()) ||
            work.composer.complete_name
              .toLowerCase()
              .includes(query.toLowerCase())
        );

        setWorks(fallbackWorks);
        setIsLoading(false);
      });
  };

  const handleSaveWorkToggle = (work) => {
    setSavedWorks((prev) => {
      const isSaved = prev.some((w) => w.id === work.id);

      return isSaved ? prev.filter((w) => w.id !== work.id) : [...prev, work];
    });
  };

  const handleRegister = ({ name, email }) => {
    setCurrentUser({ name, email });
    setIsLoggedIn(true);
    closeActiveModal();
  };

  const handleLogin = ({ email }) => {
    setCurrentUser((prev) => ({ ...prev, email }));
    setIsLoggedIn(true);
    closeActiveModal();
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser({ name: "", email: "" });
    navigate("/");
  };

  useEffect(() => {
    if (!activeModal) return;

    const handleEscapeClose = (e) => {
      if (e.key === "Escape") {
        closeActiveModal();
      }
    };
    document.addEventListener("keydown", handleEscapeClose);

    return () => {
      document.removeEventListener("keydown", handleEscapeClose);
    };
  }, [activeModal, closeActiveModal]);

  useEffect(() => {
    setIsLoading(true);
    setErrorMessage(null);
    setSearchQuery("");

    getFeaturedWorks()
      .then((res) => {
        const transformedWorks = transformSearchResults(res);
        const violinWorks = filterViolinWorks(transformedWorks);

        const featuredWorks = pickRandom(violinWorks, 12);

        setWorks(featuredWorks);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error loading featured works", err);
        setErrorMessage("Could not load featured works. Showing sample data");

        setWorks(pickRandom(getViolinWorks(), 12));
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {});

  return (
    <div className="page">
      <div className="page__content">
        <Header
          onLoginClick={handleLoginClick}
          currentUser={currentUser}
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero onSearch={handleSearch} />
                <Main
                  searchQuery={searchQuery}
                  onWorkClick={handleWorkCardClick}
                  savedWorks={savedWorks}
                  onSaveWork={handleSaveWorkToggle}
                  works={works}
                  isLoading={isLoading}
                  errorMessage={errorMessage}
                />
              </>
            }
          ></Route>
          <Route
            path="/profile"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Profile
                  savedWorks={savedWorks}
                  onWorkClick={handleWorkCardClick}
                  onSaveWork={handleSaveWorkToggle}
                  currentUser={currentUser}
                />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
        <Footer />
      </div>
      <LoginModal
        isOpen={activeModal === "login"}
        onClose={closeActiveModal}
        onToggleToRegister={handleRegisterClick}
        onLogin={handleLogin}
      />
      <RegisterModal
        isOpen={activeModal === "register"}
        onClose={closeActiveModal}
        onToggleToLogin={handleLoginClick}
        onRegister={handleRegister}
      />
      <WorkDetailModal
        isOpen={activeModal === "workDetail"}
        onClose={closeActiveModal}
        work={selectedCard}
        onSaveWork={handleSaveWorkToggle}
        isSaved={isWorkSaved}
      />
    </div>
  );
}

export default App;
