import React, { useEffect, useState } from 'react';
import { getMovieCredits } from './Api';
import './content.css';

const Content = ({data}) => {
  const [crew, setCrew] = useState(null);
  useEffect(() => {
    const fetchCredits = async () => {
      if (data) {
        const result = await getMovieCredits(data.id);
        setCrew(result);
      }
    };

    fetchCredits();
  }, [data]);

  return (
    <div className='global'>
      {(data && crew) ? (
        <>
        <div className='texte'>
          <p className='titre'>
            {data.title} 
          </p>
              <p className='carac'>
                Sorti en {data.release_date.slice(0, 4)}, 
                <br/>
                Réalisé par {crew.directorName}, 
                <br/>
                Avec{" "}
                {crew.actors.join(", ")}.
              </p>
              <h3>Résumé</h3>
              <p className='resume'>{data.overview}</p>
            </div>
            <img className='poster'
              src={`https://image.tmdb.org/t/p/w200${data.poster_path}`}
              alt={data.title}/>
          </>
          ) : (
        <h1>Bienvenue ! <br/>Choisissez un film ...</h1>
      )}
    </div>
  );
};

export default Content;
