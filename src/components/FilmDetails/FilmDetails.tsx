import { useEffect, useState } from "react";
import "./FilmDetails.scss";

const FilmDetails = ({ film }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const isActiveFilmFavorite = JSON.parse(
      localStorage.getItem(`${film.title}`)
    );
    setIsFavorite(isActiveFilmFavorite);
  }, [film.title]);

  const toggleFavorite = () => {
    if (!isFavorite) {
      setIsFavorite(true);
      localStorage.setItem(`${film.title}`, `${film.episode_id}`);
    } else {
      setIsFavorite(false);
      localStorage.removeItem(`${film.title}`);
    }
  };

  return (
    <div className="film-details">
      <div className="header">
        <h2>{film.title}</h2>
        <i
          onClick={toggleFavorite}
          className={isFavorite ? "fas fa-star" : "far fa-star"}
        ></i>
      </div>
      <p>{film.opening_crawl}</p>
    </div>
  );
};

export default FilmDetails;
