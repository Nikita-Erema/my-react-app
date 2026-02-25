import "./App.css";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./components/MainPage/MainPage";
import NotFound from "./components/NotFound/ErrorNotFound";
import { SelectPage } from "./components/SearchBiletsPage/SelectPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/select" element={<SelectPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;