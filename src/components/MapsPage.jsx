import React, { useEffect, useState } from "react";
import "../App.css";
import SimpleMap from "../components/maps";
import { cities } from "../data.json";
import { getDistance } from "../helpers/getDistance";
import Panel from "./Panel";

function MapsPage() {
  const [score, setScore] = useState(1500);
  const [indexCity, setIndexCity] = useState(0);
  const [currentCity, setCurrentCity] = useState({});
  const [foundCity, setFoundCity] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState({});
  const [status, setStatus] = useState("Waiting");
  useEffect(() => {
    console.log(cities);
    if (score < 0) {
      setScore(0);
      setStatus("GAME OVER!!!");
    }
    setCurrentCity(cities[indexCity]);
  }, [indexCity, score]);

  function addMaps(event) {
    console.log(event);
    const { lat, lng } = currentCity.position;
    const origin = `${lat},${lng}`;
    const destination = `${event.lat},${event.lng}`;
    setStatus("Loading...");
    getDistance(origin, destination)
      .then(({ data }) => {
        // distance is an object contains { value: number, text: string } of distance between origin and destination
        const distance = data.rows[0].elements[0].distance;
        // 3 lines below is for Rounding numbers to 2 digits after comma
        const num = score - distance.value / 1000;
        const roundedString = num.toFixed(2);
        const newScore = Number(roundedString);

        if (distance.value < 50000) {
          setStatus("Correct");
          setCorrectAnswer({
            lat,
            lng,
            name: currentCity.name,
          });
          setIndexCity(indexCity + 1);
          setFoundCity(foundCity + 1);
        } else {
          setStatus("wrong");
        }
        setScore(newScore);
      })
      .catch((err) => {
        console.log("error response", err.response || err);
        setStatus("Error");
      });
  }

  return (
    <div className='App'>
      <Panel text={`${foundCity} cities placed`} />
      <Panel text={`${score} kilometers left`} />
      <div style={{marginTop: "20px"}}>
        <h3>Select the location of</h3>
        <h3>"{currentCity.name}"</h3>
      </div>
      <h6>Status : {status}</h6>
      <SimpleMap
        lat={correctAnswer.lat}
        lng={correctAnswer.lng}
        text={correctAnswer.name}
        addMaps={addMaps}
      />
    </div>
  );
}

export default MapsPage;
