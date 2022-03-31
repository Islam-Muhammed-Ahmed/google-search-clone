import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDebounce } from "use-debounce";

import { useResultContext } from "../../context/ResultContextProvider";
const Search = () => {
  const { setSearchTerm } = useResultContext();
  const [text, setText] = useState("محمد صديق المنشاوي تلاوات نادره");

  const [debounceValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debounceValue) setSearchTerm(debounceValue);
  }, [debounceValue, setSearchTerm]);

  return (
    <div className="position-relative my-sm-3 my-md-4 mt-sm-4 mt-md-3">
      <input
        type="text"
        value={text}
        className="border rounded-pill p-2 shadow-sm"
        placeholder="search google-clone..."
        onChange={(e) => setText(e.target.value)}
      />
      {text !== "" && (
        <Button
          type="button"
          className="position-absolute top-0 text-secondary btn-danger rounded-circle  end-100"
          onClick={() => setText("")}
        >
          x
        </Button>
      )}
    </div>
  );
};

export default Search;
