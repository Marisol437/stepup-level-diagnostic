import { useState } from "react";
import Home from "./pages/Home.jsx";
import Test from "./pages/Test.jsx";
import Result from "./pages/Result.jsx";

function App() {
  const [screen, setScreen] = useState("home");

  if (screen === "test") {
    return <Test onFinish={() => setScreen("result")} />;
  }

  if (screen === "result") {
    return <Result onRestart={() => setScreen("home")} />;
  }

  return <Home onStart={() => setScreen("test")} />;
}

export default App;
