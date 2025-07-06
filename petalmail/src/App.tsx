import { useEffect, useState } from "react";
import { petals } from "./data/petals";
import "./styles/index.css";
import Theme from "./components/Theme";
import PetalCard from "./components/PetalCard";

function getRandomPetal() {
  return petals[Math.floor(Math.random() * petals.length)];
}

function App() {
  const [petal, setPetal] = useState(getRandomPetal);

  const refreshPetal = () => setPetal(getRandomPetal());

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
  }, []);

  return (
    <div className="app-container">
      <Theme />
      <div className="content">
        <h1 className="title">petal_mail.exe</h1>
        <PetalCard flower={petal.flower} message={petal.message} />
        <button className="refresh-btn" onClick={refreshPetal}>
          Show Another 🌼
        </button>
      </div>
    </div>
  );
}

export default App;
