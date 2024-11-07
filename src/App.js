import { Routes, Route } from "react-router-dom";
// routes
import Home from "./routes/Home";
import Seniors from "./routes/Seniors";
import Gallery from "./routes/Gallery";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seniors" element={<Seniors />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
