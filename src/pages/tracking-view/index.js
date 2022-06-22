import { useEffect, useState } from "react";
import UseTracking from "../../hooks/useTracking";
import "./styles.css";

const TrakingView = () => {
  const [coordsList, setCoordsList] = useState([]);
  const runTracking = () => {
    runTraker();
  };

  const { coords, runTraker } = UseTracking();

  useEffect(() => {
    setCoordsList([...coordsList, "lat: "+ coords?.coords.latitude + " lon: "+ coords?.coords.longitude  + " accu: " + coords?.coords.accuracy ]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coords]);

  useEffect(() => {
    
   
  

  }, [])

  return (
    <section>
      <ul>
        {coordsList.map((coords) => (
          <li>{coords}</li>
        ))}
      </ul>
      <button onClick={runTracking}>START AGAIN|</button>
    </section>
  );
};

export default TrakingView;
