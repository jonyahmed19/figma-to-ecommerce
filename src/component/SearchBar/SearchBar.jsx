import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { searchSuggestion } from "../../redux/search/search.actions";
import SearchSuggest from "../SearchSuggestion/SearchSuggest";
const SearchBar = () => {
  const {
    products: { data },
  } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const [blur, setBlur] = useState(false);

  const searchValue = (e) => {
    const value = e.target.value;
    dispatch(searchSuggestion({ data, value }));
    setBlur(true);
  };
  const searchBlur = () => {
    setTimeout(() => {
      setBlur(false);
    }, 300);
  };
  const searchSubmit = (e) => {
    console.log("submitted");
    e.preventDefault();
  };

  return (
    <div className="search relative flex flex-col flex-2">
      <form onSubmit={searchSubmit} className="flex flex-2">
        <input
          onBlur={searchBlur}
          onChange={searchValue}
          type="text"
          className=""
          name="search"
          autoComplete="off"
        />
        <button type="submit" className="py-4 px-5 bg-pinish">
          <FaSearch />
        </button>
      </form>
      {blur && <SearchSuggest blur={blur} />}
    </div>
  );
};

export default SearchBar;
