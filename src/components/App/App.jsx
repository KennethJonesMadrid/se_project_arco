import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";
import * as auth from "../../utils/auth";
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
  const [token, setToken] = useState(localStorage.getItem("arco_token") || "");
  const [authError, setAuthError] = useState("");

  const navigate = useNavigate();

  const isWorkSaved = selectedCard
    ? savedWorks.some((w) => w.id === selectedCard.id)
    : false;

  const handleLoginClick = () => {
    setAuthError("");
    setActiveModal("login");
  };

  const handleRegisterClick = () => {
    setAuthError("");
    setActiveModal("register");
  };

  const handleWorkCardClick = (card) => {
    setSelectedCard(card);
    setActiveModal("workDetail");
  };

  const handlePlayWork = (work) => {
    const query = `${work.composer.complete_name} ${work.title} violin`;
    const youtubeUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(
      query
    )}`;
    window.open(youtubeUrl, "_blank");
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

  const handleRegister = ({ name, email, password, confirmPassword }) => {
    setAuthError("");

    auth
      .register(name, email, password)
      .then((data) => {
        setToken(data.token);
        setCurrentUser(data.user);
        setIsLoggedIn(true);
        closeActiveModal();
      })
      .catch((err) => {
        console.error("Registration failed", err);
        setAuthError(err.message || "Registration failed");
      });
  };

  const handleLogin = ({ email, password }) => {
    setAuthError("");

    auth
      .authorize(email, password)
      .then((data) => {
        setToken(data.token);
        setCurrentUser(data.user);
        setIsLoggedIn(true);
        closeActiveModal();
      })
      .catch((err) => {
        console.error("Login failed", err);
        setAuthError(err.message || "Login failed");
      });
  };

  const handleLogout = () => {
    auth
      .logout()
      .then(() => {
        setToken("");
        setCurrentUser({ name: "", email: "" });
        setIsLoggedIn(false);
        navigate("/");
      })
      .catch((err) => {
        console.error("Logout failed", err);
      });
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

  useEffect(() => {
    const savedToken = localStorage.getItem("arco_token");

    if (!savedToken) {
      return;
    }

    auth
      .checkToken(savedToken)
      .then((userData) => {
        setToken(savedToken);
        setCurrentUser(userData);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        console.error("Token validation failed", err);
        localStorage.removeItem("arco_token");
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("arco_savedWorks", JSON.stringify(savedWorks));
  }, [savedWorks]);

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
                  onPlayWork={handlePlayWork}
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
                  onPlayWork={handlePlayWork}
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
        authError={authError}
      />
      <RegisterModal
        isOpen={activeModal === "register"}
        onClose={closeActiveModal}
        onToggleToLogin={handleLoginClick}
        onRegister={handleRegister}
        authError={authError}
      />
      <WorkDetailModal
        isOpen={activeModal === "workDetail"}
        onClose={closeActiveModal}
        work={selectedCard}
        onSaveWork={handleSaveWorkToggle}
        isSaved={isWorkSaved}
        onPlayWork={handlePlayWork}
      />
    </div>
  );
}

export default App;
