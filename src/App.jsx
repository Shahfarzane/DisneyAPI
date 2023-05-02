import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Splash from "./pages/Splash";
import MainPage from "./pages/MainPage";
import Info from "./pages/Info";
import Add from "./pages/Add";
import EditPage from "./pages/Edit";
import WatchList from "./components/WatchList";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="container">
      <Nav />
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Splash />}></Route>
          <Route path="/main" element={<MainPage />}></Route>
          <Route path="/info/:movieId" element={<Info />}></Route>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/watchlist" element={<WatchList />}></Route>
          <Route path="/edit/:movieId" element={<EditPage />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
