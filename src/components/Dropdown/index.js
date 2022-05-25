import React, { useEffect, useState } from "react";
import { getData } from "../../redux/covidSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

const Dropdown = () => {
  const dispatch = useDispatch();
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("Global");

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get("https://covid19.mathdro.id/api/countries")
        .then((res) => res.data)
        .then((data) => data.countries)
        .then((names) => setCountries(names));
    };
    fetchData();
  }, [countries]);

  useEffect(() => {
    dispatch(getData(selectedCountry));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCountry]);

  const handleChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div className="flex justify-center mt-8">
      <select
        onChange={handleChange}
        className="block  md:w-54 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
      >
        <option value="Global">Global</option>
        {countries.map((item) => (
          <option key={item.name} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
