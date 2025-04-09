import axios from 'axios';

const requestToken = process.env.REACT_APP_TMDB_REQUEST_TOKEN;


export const searchMovies = async (query) => {
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=fr-FR&page=1`,
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${requestToken}`
        }
      };

      try{
        const res = await axios.request(options);
        return res.data.results;
      } catch(err) {
        console.error(err);
      }
};


export const getMovieCredits = async (movieId) => {
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${movieId}/credits?language=fr`,
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${requestToken}`
    }
  };

  try {
    const res = await axios.request(options).then(res => res.data);
    const director = res.crew.find(person => person.job === "Director");
    const directorName = director.name;
    const actors = res.cast.slice(0, 3).map(element => element.name);
    return { actors, directorName };
  } catch (err) {
    console.error('Erreur lors de la récupération du crew :', err.message);
    return null;
  }
};

