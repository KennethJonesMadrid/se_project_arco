import "./Hero.css";
import SearchForm from "../SearchForm/SearchForm";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Discover Violin Repertoire</h1>
        <p className="hero__text">
          Explore the world's greatest violin concertos and works from classical
          masters
        </p>
        <SearchForm />
      </div>
    </div>
  );
}

export default Hero;
