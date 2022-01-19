import "./App.css";

import useComponentDidMount from "./hooks/useComponentDidMount";
import useComponentWillUnmount from "./hooks/useComponentWillUnmount";
import useGetDataFromLocalStorageOnComponentDidMount from "./hooks/useGetDataFromLocalStorageOnComponentDidMount";
import useRemoveEventListenerOnComponentUnmount from "./hooks/useRemoveEventListenerOnComponentUnmount";
import usePageVisibilityApi from "./hooks/usePageVisibilityApi";
import useGeoLocationApi from "./hooks/useGeoLocationApi";

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

  const status = usePageVisibilityApi();
  console.log("SATUS :: ", status);

  const location = useGeoLocationApi();
  console.log("location ::", location);
  return <div className="App">Check Console</div>;
}

export default App;
