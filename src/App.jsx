import { useState } from "react";
import Home from "./pages/Home.jsx";
import Test from "./pages/Test.jsx";

function App() {
  const [screen, setScreen] = useState("home");

  if (screen === "test") {
    return <Test />;
  }

  return <Home onStart={() => setScreen("test")} />;
}

export default App;
