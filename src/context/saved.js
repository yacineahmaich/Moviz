import { createContext, useContext, useState, useEffect } from "react";

const SavedContext = createContext({
  movies: [],
});

export const useSavedContext = () => useContext(SavedContext);

const SavedProvider = ({ children }) => {
  const [savedMovies, setSavedMovies] = useState(null);
  console.log(savedMovies);
  // Load Saved movies from local storage
  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem("saved"));
    setSavedMovies(storage ?? []);
  }, []);

  // update local storage
  useEffect(() => {
    savedMovies && localStorage.setItem("saved", JSON.stringify(savedMovies));
  }, [savedMovies]);

  const saveMovie = (movie) => {
    const movieInSaved = savedMovies.find((item) => item.id === movie.id);

    // if the movie already exists remove it.
    if (movieInSaved) {
      setSavedMovies((movies) => movies.filter((item) => item.id !== movie.id));
      return;
    }

    setSavedMovies((movies) => [movie, ...movies]);
  };

  return (
    <SavedContext.Provider value={{ savedMovies, saveMovie }}>
      {children}
    </SavedContext.Provider>
  );
};

export default SavedProvider;
