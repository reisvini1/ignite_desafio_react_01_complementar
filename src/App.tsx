import { SideBar } from "./components/SideBar";
import { Content } from "./components/Content";
import { Header } from "./components/Header";

import "./styles/global.scss";

export function App() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar />
      <div className="container">
        <Header />
        <main>
          <Content />
        </main>
      </div>
    </div>
  );
}
