import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactPage from "./pages/ReactPage";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/react" element={<ReactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
