import { render } from "react-dom";
import { WatchMeProvider } from "./contexts/WatchMeContext";
import { App } from "./App";

render(
  <WatchMeProvider>
    <App />
  </WatchMeProvider>,
  document.getElementById("root")
);
