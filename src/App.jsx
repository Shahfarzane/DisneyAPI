import "./styles/main.scss";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import MainPage from "./pages/MainPage";
import Details from "./pages/Details";
import Add from "./pages/Add";
import EditPage from "./pages/Edit";
import WatchList from "./components/WatchList";
import Dashboard from "./components/Dashboard";
import Page404 from "./components/Page404";

function App() {
  return (
    <div className="main-container">
      <Nav />
      <div className="page-container">
        <Routes>
          <Route path="*" element={<Page404 />}></Route>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/details/:movieId" element={<Details />}></Route>
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
