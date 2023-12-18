import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(`/api/movies/${id}`)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div>
      <h2>Movie Details</h2>
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <video controls>
        <source src={movie.videoUrl} type="video/mp4" />
      </video>
    </div>
  );
};

export default MovieDetails;
