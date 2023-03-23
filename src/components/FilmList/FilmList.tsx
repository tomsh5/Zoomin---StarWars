import { useState } from "react";
import "./FilmList.scss";

const FilmList = ({ films, onFilmClick }) => {
  const [active, setActive] = useState(4);

  const onClickHandler = (filmID) => {
    onFilmClick(filmID);
    setActive(filmID);
  };

  return (
    <div className="film-list">
      {films.map((film) => (
        <div
          onClick={() => onClickHandler(film.episode_id)}
          key={film.episode_id}
          className={`film-title ${active === film.episode_id && "active"}`}
        >
          {film.title}
        </div>
      ))}
    </div>
  );
};

export default FilmList;
