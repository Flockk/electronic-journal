import {Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Missing from "./components/Missing";
import RequireAuth from "./utils/RequireAuth";
import Layout from "./components/Layout";
import HomeworkPage from "./pages/HomeworkPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<LoginPage/>}/>

                <Route element={<RequireAuth/>}>
                    <Route path="divisions" element={<HomeworkPage/>}/>
                </Route>

                <Route path="*" element={<Missing/>}/>
            </Route>
        </Routes>
    );
}

export default App;
