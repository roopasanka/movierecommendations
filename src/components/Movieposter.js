import React from 'react';
import '../App.css'


export default function MoviePoster(props) {
  const { movie } = props;

  return (
    <div>
      <img
      data-testid = {"Image"}
        src={movie.imageUrl}
        className= "image"
        alt=" "
      />
    </div>
  );
}

