import {Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MissingPage from "./pages/MissingPage";
import RequireAuth from "./utils/RequireAuth";
import Layout from "./components/layout/Layout";
import DivisionPage from "./pages/DivisionPage";
import HomeworkPage from "./pages/HomeworkPage";
import ProfilePage from "./pages/ProfilePage";
import SchedulePage from "./pages/SchedulePage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<LoginPage/>}/>

                <Route element={<RequireAuth/>}>
                    <Route path="divisions" element={<DivisionPage/>}/>
                    <Route path="homeworks" element={<HomeworkPage/>}/>
                    <Route path="profile" element={<ProfilePage/>}/>
                    <Route path="schedule" element={<SchedulePage/>}/>
                </Route>

                <Route path="*" element={<MissingPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
