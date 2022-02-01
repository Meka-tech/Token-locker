import "./App.css";
import "./custom.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Homepage from "./Pages/Homepage";
import RoadMapPage from "./Pages/RoadMapPage";
import ContactPage from "./Pages/ContactPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Roadmap" element={<RoadMapPage />} />
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
