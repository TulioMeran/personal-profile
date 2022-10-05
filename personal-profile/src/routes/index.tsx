import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "../pages/home"

const MainRouter = () => {

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL} >
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainRouter