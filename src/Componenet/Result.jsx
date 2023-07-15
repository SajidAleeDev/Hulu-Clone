import { useEffect, useState } from "react";
import "../CssFiles/result.css";
import VideoCard from "./VideoCard";
import axios from "../axiox";
import FlipMove from "react-flip-move";

function Result({ Selectedoption }) {
  const [movie, setmovie] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      const request = await axios.get(Selectedoption);
      setmovie(request.data.results);
      return request;
    }
    fetchdata();
  }, [Selectedoption]);
  return (
    <div className="result">
      <FlipMove>
        {movie.map((movies) => (
          <VideoCard key={movies.id} movie={movies} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Result;
