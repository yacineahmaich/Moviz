import React, { useState } from "react";
import { Link } from "react-router-dom";
import icons from "../../assets/icons.svg";
import { API_KEY, API_BASE_URL } from "../../config/API";
import useFetch from "../../hooks/useFetch";
import useDebounce from "../../hooks/useDebounce";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const searchQuery = useDebounce(searchTerm, 500);

  const { data, isLoading, error } = useFetch(
    `${API_BASE_URL}search/movie?api_key=${API_KEY}&query=${searchQuery}`
  );

  const suggestions = data?.results ?? [];

  const searchTermChangeHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="absolute left-0 w-full px-6 py-2 bg-white md:bg-transparent dark:bg-dark dark:md:bg-transparent sm:w-auto sm:relative top-full sm:top-auto sm:ml-0">
      <div className="flex items-center px-5 bg-white border rounded-full h-9 sm:w-auto dark:bg-dark border-gray dark:border-gray-light">
        <input
          type="text"
          className="flex-1 transition-transform origin-right bg-transparent outline-none peer text-dark dark:text-gray-light placeholder:font-bebas placeholder:tracking-wider placeholder:text-gray dark:placeholder:text-gray-light"
          placeholder="Seacrh movies"
          value={searchTerm}
          onChange={searchTermChangeHandler}
        />
        {isLoading ? (
          <svg className="w-5 h-5 fill-gray dark:fill-gray-light animate-spin">
            <use href={`${icons}#icon-spinner`}></use>
          </svg>
        ) : searchTerm ? (
          <svg
            className="w-4 h-4 cursor-pointer fill-gray dark:fill-gray-light"
            onClick={() => setSearchTerm("")}
          >
            <use href={`${icons}#icon-close`}></use>
          </svg>
        ) : (
          <svg className="w-5 h-5 fill-gray dark:fill-gray-light">
            <use href={`${icons}#icon-search`}></use>
          </svg>
        )}

        {/* search suggestions */}
        {searchTerm && !isLoading && (
          <div className="absolute left-0 w-full py-3 mt-2 overflow-y-scroll bg-white border rounded-lg shadow-lg dark:bg-dark border-gray top-12 max-h-72">
            <ul
              className="flex flex-col w-full text-dark dark:text-gray-light font-bebas"
              onClick={() => setSearchTerm("")}
            >
              {suggestions.map((suggestion) => (
                <li key={suggestion.id}>
                  <Link
                    to={`/movies/${suggestion.id}`}
                    className="flex items-center justify-between px-3 py-2 hover:bg-gray-light dark:hover:bg-gray"
                  >
                    <span className="truncate">{suggestion.title}</span>
                    <label className="flex items-center gap-2 text-md text-gray dark:text-gray-light">
                      <span>{suggestion.vote_average.toFixed(1)}</span>
                      <svg className="w-3 h-3 translate-y-[-2px] fill-gray dark:fill-primary">
                        <use href={`${icons}#icon-star`}></use>
                      </svg>
                    </label>
                  </Link>
                </li>
              ))}

              {suggestions.length === 0 && !isLoading && (
                <p className="tracking-wide text-center text-gray">
                  No movies !
                </p>
              )}

              {error && (
                <p className="tracking-wide text-center text-red-300">
                  Something Went Wrong 💥
                </p>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
