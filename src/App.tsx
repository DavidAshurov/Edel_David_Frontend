import './App.css'
import Header from "./components/Header.tsx";
import {Routes, Route} from "react-router-dom";
import MainPage from "./components/MainPage.tsx";
import Login from "./pages/Login";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<Login />} />
            </Routes>

        </>
    )
}

export default App
