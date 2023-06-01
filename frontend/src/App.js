import {Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MissingPage from "./pages/MissingPage";
import RequireAuth from "./utils/RequireAuth";
import Layout from "./components/Layout";
import HomeworkPage from "./pages/HomeworkPage";
import DivisionPage from "./pages/DivisionPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<LoginPage/>}/>

                <Route element={<RequireAuth/>}>
                    <Route path="divisions" element={<DivisionPage/>}/>
                    <Route path="homeworks" element={<HomeworkPage/>}/>
                </Route>

                <Route path="*" element={<MissingPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
