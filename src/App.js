import Home from "./Pages/Home";
import Question from "./Pages/Question";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Styles/index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/question" element={<Question />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
