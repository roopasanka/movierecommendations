import React from 'react';


export default function MoviePoster(props) {
  const { movie } = props;

  return (
    <div>
      <img
        src={movie.imageUrl}
        style={{
          marginLeft: '10', display: 'block',
        }}
        alt=" "
      />
    </div>
  );
}

