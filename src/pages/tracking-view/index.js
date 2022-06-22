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
    
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('../../../public/worker.js', { scope: '/' })
      .catch(function(err) {
        console.log('ServiceWorker failed to register. Are you visiting the HTTPS site?');
      });
    }
  
    return () => {
      console.log('destroy')
    };
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
