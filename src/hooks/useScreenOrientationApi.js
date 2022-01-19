import { useEffect, useState } from "react";

// window.screen.orientation is experimental feature
const useScreenOrientationApi = () => {
  const [state, setState] = useState({
    orientation: null,
    angle: null,
  });

  window.screen.orientation.addEventListener("change", (res) => {
    setState({
      orientation: res.currentTarget.type,
      angle: res.currentTarget.angle,
    });
  });

  useEffect(() => {
    setState({
      orientation: window.screen.orientation.type,
      angle: window.screen.orientation.angle,
    });
  }, []);

  return state;
};

export default useScreenOrientationApi;
