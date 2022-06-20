import { useEffect, useState } from "react";

const UseTracking = () => {
  const [coords, setCoords] = useState(null);

  const CURRENT_POSITION_OPTIONS = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function successPosition(position) {
    setCoords(position);
  }

  function errorPosition() {}

  function runTraker() {
    setInterval(() => {
      navigator.geolocation.getCurrentPosition(
        successPosition,
        errorPosition,
        CURRENT_POSITION_OPTIONS
      );
    }, 1000);
  }

  return { coords, runTraker };
};

export default UseTracking;
