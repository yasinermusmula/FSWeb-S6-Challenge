import axios from "axios";
import React, { useEffect, useState } from "react";
import Karakterler from "./components/Karakterler";
// import sahteVeri from "./sahte_veri";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [data, setData] = useState([]); //1-Axiostan gelen dataları bir state tuttuk
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(isLoading);
    axios
      .get("https://swapi.dev/api/people/?page=2")
      .then((res) => {
        console.log(res.data);
        setData(res.data); //2- Axiostan gelen datayı kaydettik. ".then" fonksiyonu aldığı parametriyi setData'ya iletti.
        setIsLoading(!isLoading)
      })
      .catch((err) => {
        console.warn(err.message);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Karakterler</h1>
      <Karakterler data={data} className="karakterler" />
    </div>
  );
};

export default App;
