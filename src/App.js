import "./App.css";
import Headers from "./components/Header/Headers/Headers";
import { Route, Routes, useParams } from "react-router-dom";
import Navigation from "./components/Header/Navigation/Navigation";
import FoodDetails from "./components/FoodDetails/FoodDetails";
import Foods from "./components/Foods/Foods";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Headers />} />
        {/* <Route path="/foods" element={<Foods/>}></Route> */}
        <Route path="/mill/:keys" element={<FoodDetails ></FoodDetails>}></Route>
      </Routes>
    </div>
  );
}

export default App;
