import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

export const MovieDetails = () => {
  const params = useParams();
  const { pokemonName } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(params.pokemonName)
    console.log(pokemonName)
  });

  const goBack = () => {
    navigate(-1);
  }
  return (
    <div>
      <p>I am detail component</p>
      <button type="button" onClick={goBack}> Go back </button>
    </div>
  );
}
export default MovieDetails;
