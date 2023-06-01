import {Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Missing from "./components/Missing";
import DivisionPage from "./pages/DivisionPage";
import RequireAuth from "./utils/RequireAuth";
import Layout from "./components/Layout";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<LoginPage/>}/>

                <Route element={<RequireAuth/>}>
                    <Route path="divisions" element={<DivisionPage/>}/>
                </Route>

                <Route path="*" element={<Missing/>}/>
            </Route>
        </Routes>
    );
}

export default App;
