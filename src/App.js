import Home from "./Pages/Home";
import Question from "./Pages/Question";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Styles/index.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./Redux/rootReducer";
import Results from "./Pages/Results";

function App() {
  const store = createStore(rootReducer);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/question" element={<Question />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
