import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="p-12">
        <div className="m-auto bg-white w-1/2 flex items-center rounded-full shadow-md">
          <input
            className="ml-4 rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
            id="search"
            type="text"
            placeholder="¡Encuentra tus GIFS!"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />

          <div className="p-4">
            <button onClick={handleSubmit} className="bg-purple-500 text-white rounded-full p-2 hover:bg-purple-700 focus:outline-none w-24 h-12 flex items-center justify-center">
              Buscar
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
