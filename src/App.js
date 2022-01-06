import "./App.css";

import useComponentDidMount from "./hooks/useComponentDidMount";
import useComponentWillUnmount from "./hooks/useComponentWillUnmount";
import useGetDataFromLocalStorageOnComponentDidMount from "./hooks/useGetDataFromLocalStorageOnComponentDidMount";
import useRemoveEventListenerOnComponentUnmount from "./hooks/useRemoveEventListenerOnComponentUnmount";

function App() {
  const getDataFromApi = () => {
    console.log("getDataFromApi");
    localStorage.setItem("displayName", "Dummy Name");
    window.addEventListener("click", clickEventHdlr);
  };

  const clickEventHdlr = () => {
    console.log("MOUSE CLICKED");
  };

  const performCleanupActivity = () => {
    console.log("performCleanupActivity");
  };

  const setNameFromLocalStorage = (val) => {
    console.log("Name :: ", val);
  };

  useComponentDidMount(getDataFromApi);
  useComponentWillUnmount(performCleanupActivity);

  useGetDataFromLocalStorageOnComponentDidMount(
    "displayName",
    setNameFromLocalStorage
  );

  useRemoveEventListenerOnComponentUnmount("click", clickEventHdlr);
  return <div className="App"></div>;
}

export default App;
