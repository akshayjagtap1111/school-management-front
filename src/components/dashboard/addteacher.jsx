import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { addteacher } from "../../redux/teacher/action";

export default function Addteacher() {
  const initial = {
    first_name: "",
    last_name: "",
    email: "",
    age: 23,
    gender: "",
  };
  const [teacherdata, setteacherdata] = React.useState(initial);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setteacherdata((prev) => ({ ...prev, [name]: value }));
  };
  const dispatch = useDispatch();

  const postTeacher = () => {
    dispatch(addteacher(teacherdata));


    //     console.log(teacherdata)
    //    let  teacher = JSON.stringify(teacherdata)

    //     axios.post("https://school-teachers-api.herokuapp.com/teacher",teacher).then((res)=>{

    //     console.log(res.data)
    //         alert("teacher added succesfully")
    //     })

    //     console.log(teacher)

    // let reg_api = `http://localhost:3000/teacher`

    //  fetch(reg_api,{
    //   method:"POST",
    //   body:teacher,
    //   headers:{
    //     "Content-Type":"application/json",
    //   },
    // });
  };

  const { first_name, last_name, email, address, phone_number, age, gender } =
    teacherdata;
  return (
    <div>
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
        placeholder="enter email"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        placeholder="enter age"
        name="age"
        value={age}
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        placeholder="enter gender"
        name="gender"
        value={gender}
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        placeholder="enter address"
        name="address"
        value={address}
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        placeholder="enter phone_number"
        name="phone_number"
        value={phone_number}
        onChange={handleChange}
      />
      <br />
      <br />

      <button onClick={postTeacher}>ADD</button>
    </div>
  );
}
