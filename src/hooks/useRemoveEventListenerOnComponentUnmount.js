import { useEffect } from "react";

export default function (eventName, hdlr) {
  useEffect(() => {
    return () => window.removeEventListener(eventName, hdlr);
  }, []);
}
