import React, { useEffect, useState } from "react";
import "./App.css";
import SimpleMap from "./components/maps";
import { cities } from "./data.json";
import { getDistance } from "./helpers/getDistance";

function App() {
  const [score, setScore] = useState(1500);
  const [indexCity, setIndexCity] = useState(0);
  const [currentCity, setCurrentCity] = useState({});
  const [status, setStatus] = useState('Waiting');
  useEffect(() => {
    console.log(cities);
    if (score < 0) {
      setScore(0)
      setStatus('YOU LOSE...')
    }
    setCurrentCity(cities[indexCity])
  }, [indexCity, score]);

  function addMaps (event) {
    console.log(event);
    const { lat, lng } = currentCity.position
    const origin = `${lat},${lng}`
    const destination = `${event.lat},${event.lng}`
    setStatus('Loading...')
    getDistance(origin, destination)
      .then(({ data }) => {
        // distance is an object contains { value: number, text: string } of distance between origin and destination
        const distance = data.rows[0].elements[0].distance
        let newScore = score - distance.value/1000
        if (distance.value < 50000) {
          setStatus('Correct')
          setIndexCity(indexCity + 1)
        } else {
          setStatus('wrong')
        }
        setScore(newScore)
      })
      .catch(err => {
        console.log('error response', err.response || err);
      })
  }

  return (
    <div className='App container'>
      {JSON.stringify(cities)}
      <h3>My Score : {score}</h3>
      <h3>City to found : {currentCity.name}</h3>
      <h3>Status : {status}</h3>
      <SimpleMap addMaps={addMaps} />
    </div>
  );
}

export default App;
