import { useEffect } from "react";

export default function (localStorageKey, callback) {
  useEffect(() => {
    callback(localStorage.getItem(localStorageKey));
  }, []);
}
