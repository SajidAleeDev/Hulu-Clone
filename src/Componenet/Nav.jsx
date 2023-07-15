import "../CssFiles/nav.css";
import Request from "../Request";

function Nav({ setSelectedoption }) {
  return (
    <>
      <div className="nav">
        <h2 onClick={() => setSelectedoption(Request.fetchTrending)}>
          Trending
        </h2>
        <h2 onClick={() => setSelectedoption(Request.fetchTOPRated)}>
          Top Rated
        </h2>
        <h2 onClick={() => setSelectedoption(Request.fetchActionMovies)}>
          Action
        </h2>
        <h2 onClick={() => setSelectedoption(Request.fetchComedyMovies)}>
          Comedy
        </h2>
        <h2 onClick={() => setSelectedoption(Request.fetchHorrorMovies)}>
          Horror
        </h2>
        <h2 onClick={() => setSelectedoption(Request.fetchRomanceMovies)}>
          Romance
        </h2>
        <h2 onClick={() => setSelectedoption(Request.fetchMystery)}>Mystery</h2>
        <h2 onClick={() => setSelectedoption(Request.fetchSciFi)}>Sci-fi</h2>
        <h2 onClick={() => setSelectedoption(Request.fetchWestern)}>Western</h2>
        <h2 onClick={() => setSelectedoption(Request.fetchAnimation)}>
          Animation
        </h2>
        <h2 onClick={() => setSelectedoption(Request.fetchTV)}>Movie</h2>
      </div>
      ;
    </>
  );
}

export default Nav;
