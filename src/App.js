import './App.css';
import Navigation from "./components/navigation/navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./pages/404/404"
import Profile from "./pages/profile/profile"
import Home from "./pages/home/home"

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigation />}>
                    <Route index element={<Home />} />
                    {/*<Route path="drinks" element={<Drinks />} />
                    <Route path="Bars" element={<Bars />} />*/}
                    <Route path="/profile" element={<Profile />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
