import React, { useState,  useEffect } from 'react';
import { RiMenuLine } from "react-icons/ri";
import { IoMdSkipBackward } from "react-icons/io";
import './menu.css'
import Content from './content';
import { searchMovies} from './Api';


const App = () =>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const [selectedItem, setSelectedItem] = useState(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleSearch = async (query) => {
        if (!query) return;
        setLoading(true);
        setError('');
        try {
            const results = await searchMovies(query);
            setMovies(results);
        }catch(error){
            console.error(error);
        } finally {
            setLoading(false);
        }
    };


    const handleChange = (e) => {
        setQuery(e.target.value);
      };

      useEffect(() => {
        if (query) {
          handleSearch(query);
        }
      }, [query]);


return (
    <div className='app'>
        <button className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            {isMenuOpen ? <IoMdSkipBackward /> : <RiMenuLine />}
        </button>
        <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
            <input type='text'
            value={query}
            onChange={handleChange}
            placeholder='Cherchez un film...'/>
            {movies && (
                <div className='moviesList'>
                <ul>
                {movies.sort((a,b) => b.popularity - a.popularity).map((movie) => (
                    <li key={movie.id}>
                <h3 onClick={()=>setSelectedItem(movie)}>{movie.title}</h3>
              {movie.poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                  onClick={()=>setSelectedItem(movie)}
                />
              )}
            </li>
          ))}
                </ul>
                </div>    
            )}
        </div>
    <div className={`content ${isMenuOpen ? 'menu-open' : ''}`}>
        <Content data={selectedItem} /> 
    </div> 

    </div>
)

};

export default App;