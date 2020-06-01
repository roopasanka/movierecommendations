import React from 'react';


export default function MoviePoster(props) {
  const { movie, width} = props;

  return (
    <div>
      <img
        src={movie.imageUrl}
        style={{
          marginLeft: '10', display: 'block',
        }}
      />
    </div>
  );
}

