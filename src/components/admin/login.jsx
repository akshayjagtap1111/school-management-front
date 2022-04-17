import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { userlogin } from "../../redux/admin/action";
import { Navigate, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const admin = useSelector((state) => state.admin);
  console.log(admin)
  const initialState = {
    email: "",
    password: "",
  };

  const [logData, setlogData] = React.useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setlogData((prev) => ({ ...prev, [name]: value }));
  };

  const handlesubmit = () => {
    dispatch(userlogin(logData));

    console.log(admin.isAuthenticated)
    if (admin.isAuthenticated) {
        return <Navigate to="/" />;
      }
  };


//   if (admin.isAuthenticated) {
//     return <Navigate to="/" />;
//   }
  const { email, password } = logData;
  return (
    <div>
      <h3>Welcome....please login</h3>
      <input
        type="text"
        placeholder="enter username"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <br></br>
      <input
        type="text"
        placeholder="enter password"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <br />
      <button onClick={handlesubmit}>Login</button>

     <br />
     <br />
     <p>create dummy account</p>
     <button onClick={()=>{navigate("/admin_reg")}}>create</button>
    </div>
  );
}
