import { Routes, Route } from 'react-router-dom';
import Login from '../pages/login/login';
import Student from '../pages/studentdashboard/student';
import Admin from '../pages/studentadmin/Admin';
import Facilitator from '../pages/facilitatordashboard/facilitator';
import Request from '../pages/studentrequest/Request';
import AdminRequest from '../pages/studentadminrequest/AdminRequest';
import Tasks from '../pages/adminusertasks/tasks';
import TeamLeadRequest from '../pages/adminDashboard/Admin';
import SignUp from '../pages/signup/signup';

const routes = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/student/facilitators" element={<Student />} />
    <Route path="/student/admin" element={<Admin />} />
    <Route path="/student/request" element={<Request />} />
    <Route path="/student/adminrequest" element={<AdminRequest />} />
    <Route path="/facilitator/students" element={<Facilitator />} />
    <Route path="/admin/task" element={<Tasks />} />
    <Route path="/admin/requests" element={<TeamLeadRequest />} />
    <Route path="/admin/adduser" element={<SignUp />} />

  </Routes>
);

export default routes;
