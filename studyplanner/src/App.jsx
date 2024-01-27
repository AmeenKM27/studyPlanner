import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/Home";
import Preferences from "./assets/Preferences";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/preferences" element={<Preferences />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
