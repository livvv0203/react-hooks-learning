import React, { useEffect, useState, useCallback } from 'react';
import MoviesList from './components/MoviesList';
import moment from 'moment';
import './App.css';
import AddMovie from './components/AddMovie';

function App() {
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDataHandler = useCallback(async () => { 
    try {
      setIsLoading(true);
      setError(null); // clear the previous error

      // fetch returns a promise
      const response = await fetch('https://react-test-project-jd-default-rtdb.firebaseio.com/movies.json');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      
      const loadedMovies = [];

      for(const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate
        });
      }
      console.log(loadedMovies);
      // const transformedMovies = data.results.map((movieData) => {
      //   return {
      //     id: movieData.episode_id,
      //     title: movieData.title,
      //     openingText: movieData.opening_crawl,
      //     releaseDate: movieData.release_date
      //   };
      // });
      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  // fetch("https://api-shipgoodies.jd.com/api/1.0/order_volumn?customer_wild=trafi&date_range=cw").then(response => {
  //   return response.json();
  // }).then(data => {
  //   console.log(data);
  // });

  // To avoid infinite loop
  useEffect(() => {
    fetchDataHandler();
  }, [fetchDataHandler]);

  let now = moment();

  let content = <p>Found No Movie</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies}></MoviesList>;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  async function addMovieHandler(movie) {
    // Configure the request in second parameter
    // Post, then firebase will create a resource in the database
    // In body, convert JavaScript object to JSON
    const response = await fetch('https://react-test-project-jd-default-rtdb.firebaseio.com/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json(); 
    console.log(data);
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler}/>
      </section>
      <section>
        <button onClick={fetchDataHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
        <p>Time: {now.format()}</p>
      </section>
    </React.Fragment>
  );
}

export default App;
