import "./SearchForm.css";

function SearchForm() {
  return (
    <form className="search-form">
      <div className="search-form__wrapper">
        <input
          type="text"
          className="search-form__input"
          placeholder="Search for composers, works, or concertos..."
        />
        <button type="submit" className="search-form__button">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
