import React, { useState } from "react";
const countries = [
  {
    name: "India",
    id: "IN",
    cities: ["Mumbai", "Delhi"]
  },
  {
    name: "United States",
    id: "US",
    cities: ["New York", "Los Angeles"]
  },
  {
    name: "United Kingdom",
    id: "UK",
    cities: ["London", "Manchester"]
  },
  {
    name: "France",
    id: "FR",
    cities: ["Paris", "Marseille"]
  }
];

function App() {
  const [country, setCountry] = useState("IN");
  const [id, setId] = useState("IN");
  const [city, setCity] = useState("Mumbai");
  function handel(id) {
    console.log(id + " " + myMap.has(id));
    setId(id);
  }
  const myMap = new Map();
  console.log(myMap);
  return (
    <>
      <select
        value={country}
        onChange={(e) => {
          setCountry(e.target.value);
          let id = e.target.key;
          console.log(e.target.key);
          // countries.filter()
          // handelchange(id);
          handel(e.target.value);
        }}
      >
        {countries.map((country, index) => {
          let cities = country.cities;
          myMap.set(country.id, cities);
          return (
            <option value={country.id} key={country.id}>
              {country.name}
            </option>
          );
        })}
      </select>
      <select
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
      >
        {myMap.get(id).map((city, index) => {
          return (
            <option value={city} key={index}>
              {city}
            </option>
          );
        })}
      </select>
      ;
    </>
  );
}
export default App;
