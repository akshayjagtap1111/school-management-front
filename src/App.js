import logo from "./logo.svg";
import "./App.css";

import { Link, Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";
import Login from "./components/admin/login";
import Register from "./components/admin/register";
import Addteacher from "./components/dashboard/addteacher";
import Updateteacher from "./components/dashboard/updateteacher";
import Addclass from "./components/classes/addclass";
import Updateclass from "./components/classes/updateclass";
import Displayclass from "./components/classes/displayclass";

function App() {
  return (
    <div className="App">
      <div id="navbar">
        <Link to="/admin_log">admin_log</Link>
        <Link to="admin_reg">admin_reg</Link>
        <Link to="/">home</Link>
        <Link to="/add_teacher">add_teacher</Link>
        <Link to="/update_teacher">update_teacher</Link>
        <Link to="/display_class">display_class"</Link>
        <Link to="/update_class">update_class</Link>
        <Link to="/add_class">add_class</Link>
      </div>
      <Routes>
        <Route path="/admin_log" element={<Login />}></Route>
        <Route path="/admin_reg" element={<Register />}></Route>

        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/add_teacher" element={<Addteacher />}></Route>
        <Route path="/update_teacher" element={<Updateteacher />}></Route>

        <Route path="/display_class" element={<Displayclass />}></Route>
        <Route path="/update_class" element={<Updateclass />}></Route>
        <Route path="/add_class" element={<Addclass />}></Route>
      </Routes>
    </div>
  );
}

export default App;
