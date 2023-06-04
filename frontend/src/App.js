import {Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MissingPage from "./pages/MissingPage";
import RequireAuth from "./utils/requireAuth";
import Layout from "./components/layout/Layout";
import StudDivisionPage from "./pages/student/StudDivisionPage";
import ProfHomeworkPage from "./pages/professor/ProfHomeworkPage";
import StudProfilePage from "./pages/student/StudProfilePage";
import StudSchedulePage from "./pages/student/StudSchedulePage";
import AdminProfilePage from "./pages/admin/AdminProfilePage";
import ProfProfilePage from "./pages/professor/ProfProfilePage";
import AdminManagementUsers from "./pages/admin/AdminManagementUsers";
import AdminAccountCreationPage from "./pages/admin/AdminAccountCreationPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<LoginPage/>}/>

                <Route path="admin" element={<RequireAuth allowedRole={"ADMIN"}/>}>
                    <Route path="profile" element={<AdminProfilePage/>}/>
                    <Route path="users" element={<AdminManagementUsers/>}/>
                    <Route path="users/create" element={<AdminAccountCreationPage/>}/>
                </Route>

                <Route path="professor" element={<RequireAuth allowedRole={"PROFESSOR"}/>}>
                    <Route path="profile" element={<ProfProfilePage/>}/>
                    <Route path="homeworks" element={<ProfHomeworkPage/>}/>
                </Route>

                <Route path="student" element={<RequireAuth allowedRole={"STUDENT"}/>}>
                    <Route path="profile" element={<StudProfilePage/>}/>
                    <Route path="divisions" element={<StudDivisionPage/>}/>
                    <Route path="schedule" element={<StudSchedulePage/>}/>
                </Route>

                <Route path="*" element={<MissingPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
