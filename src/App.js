import "./App.css";
import Headers from "./components/Header/Headers/Headers";
import { Route, Routes, useParams } from "react-router-dom";
import Navigation from "./components/Header/Navigation/Navigation";
import FoodDetails from "./components/FoodDetails/FoodDetails";
import Foods from "./components/Foods/Foods";
import Footer from "./components/Footer/Footer";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import RequireAuth from "./components/RequireAuth/RequireAuth";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Headers />} />
        <Route path="/mill/:keys" element={
          <RequireAuth>
            <FoodDetails ></FoodDetails>
          </RequireAuth>
        }
        ></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
