import React, { useState } from "react";

const SearchForm = ({ value, saveCity }) => {
  const [cityName, setCityName] = useState("");
  const handleChange = (e) => {
    setCityName(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log(saveCity, "jj");
    if (cityName) {
      saveCity(cityName);
    }

    e.preventDefault();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form-input"
        placeholder="Введите название города"
        onChange={handleChange}
      />

      <input className="form-button" type="submit" />
    </form>
  );
};

export default SearchForm;
