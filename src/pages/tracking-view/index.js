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
    console.log(coords?.timestamp);
    setCoordsList([...coordsList, coords?.timestamp]);
  }, [coords]);

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
