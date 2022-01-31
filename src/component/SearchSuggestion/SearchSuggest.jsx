import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SearchSuggest = () => {
  const { search } = useSelector((state) => state.search);

  if (search) {
    return (
      <div className="absolute top-12 search-suggestion flex flex-col bg-black/50 max-h-20 overflow-y-auto">
        {search.map((item) => {
          const url = encodeURI(`/product/${item.title.toLowerCase()}`);
          return (
            <Link
              key={item.id}
              className="text-white text-sm px-3 py-1"
              to={url}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    );
  }
};

export default SearchSuggest;
