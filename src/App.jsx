import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Splash from "./pages/Splash";
import MainPage from "./pages/MainPage";
import Info from "./pages/Info";
import Add from "./pages/Add";

function App() {
  return (
    <div className="container">
      <Nav />
      <Routes>
        <Route path="/" element={<Splash />}></Route>
        <Route path="/main" element={<MainPage />}></Route>
        <Route path="/info" element={<Info />}></Route>
        <Route path="/add" element={<Add />}></Route>
      </Routes>
    </div>
  );
}

export default App;
