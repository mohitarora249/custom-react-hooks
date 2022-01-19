import { useEffect, useState } from "react";

const useGeoLocationApi = () => {
  const [state, setState] = useState({
    location: null,
    error: null,
  });

  const onSuccess = ({ coords: { latitude, longitude } }) => {
    setState({
      ...state,
      location: {
        latitude,
        longitude,
      },
    });
  };

  const onError = (err) => {
    setState({
      ...state,
      error: err.message ? err.message : "Unable to get location",
    });
  };

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return state;
};

export default useGeoLocationApi;
