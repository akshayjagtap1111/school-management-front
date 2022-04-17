import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { userlogin, userregister } from "../../redux/admin/action";
import { Navigate, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const admin = useSelector((state) => state.admin);
  console.log(admin);
  const initialState = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  };

  const [logData, setlogData] = React.useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setlogData((prev) => ({ ...prev, [name]: value }));
  };

  const handlesubmit = () => {
      console.log("data to send",logData)
    dispatch(userregister(logData));

    console.log(admin.isAuthenticated);

  
     navigate("/admin_log")
    
  };


  const { email, password,first_name,last_name } = logData;
  return (
    <div>
      <h3>register</h3>
      <input
        type="text"
        placeholder="enter first name"
        name="first_name"
        value={first_name}
        onChange={handleChange}
      />
      <br />

      <input
        type="text"
        placeholder="enter last name"
        name="last_name"
        value={last_name}
        onChange={handleChange}
      />
      <br />

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
      <br></br>
      <button onClick={handlesubmit}>register</button>
    </div>
  );
}
