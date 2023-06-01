import {Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import Missing from "./components/Missing";
import DivisionPage from "./pages/DivisionPage";
import RequireAuth from "./utils/RequireAuth";
import Layout from "./components/Layout";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Login/>}/>

                <Route element={<RequireAuth/>}>
                    <Route path="divisions" element={<DivisionPage/>}/>
                </Route>

                <Route path="*" element={<Missing/>}/>
            </Route>
        </Routes>
    );
}

export default App;
