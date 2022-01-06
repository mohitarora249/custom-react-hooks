import { useEffect } from "react";

export default function (eventName) {
  useEffect(() => {
    return () => window.removeEventListener(eventName);
  }, []);
}
