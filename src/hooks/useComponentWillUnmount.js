import { useEffect } from "react";

export default function (callback = () => {}) {
  useEffect(() => {
    return () => callback();
  }, []);
}
