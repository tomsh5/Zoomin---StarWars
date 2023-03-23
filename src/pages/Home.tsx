import { useState, useEffect } from "react";
import "./Home.scss";
import Loader from "../assets/Spinner-2.gif";
import { filmService } from "../services/film-service.js";
import FilmList from "../components/FilmList/FilmList";
import FilmDetails from "../components/FilmDetails/FilmDetails";

function Home() {
  const [films, setFilms] = useState(null);
  const [activeFilm, setActiveFilm] = useState(4);

  useEffect(() => {
    getAllFilms();
  }, []);

  const getAllFilms = async () => {
    const films = await filmService.getFilms();
    setFilms(films);
    setActiveFilm(films[0]);
  };

  const onFilmClick = (filmID) => {
    const film = films.filter((film) => film.episode_id === filmID);
    setActiveFilm(film[0]);
  };

  return (
    <div className="home-page">
      {films ? (
        <div className="main-container">
          {films && <FilmList films={films} onFilmClick={onFilmClick} />}
          {activeFilm && <FilmDetails film={activeFilm} />}
        </div>
      ) : (
        <img src={Loader} alt="loading..." />
      )}
    </div>
  );
}

export default Home;
