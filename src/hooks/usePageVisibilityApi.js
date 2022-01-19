import { useEffect, useState } from "react";

const usePageVisibilityApi = () => {
  const [state, setState] = useState({
    hidden: document.hidden,
    visibilityState: document.visibilityState,
  });

  const onVisibilityChangeEventHdlr = () => {
    setState({
      hidden: document.hidden,
      visibilityState: document.visibilityState,
    });
  };

  useEffect(() => {
    document.addEventListener("visibilitychange", onVisibilityChangeEventHdlr);

    return () => {
      document.removeEventListener(
        "visibilitychange",
        onVisibilityChangeEventHdlr
      );
    };
  }, []);

  return state;
};

export default usePageVisibilityApi;
