import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addteacher } from "../../redux/teacher/action";

export default function Updateteacher() {

    const dispatch = useDispatch();
    const teacher = useSelector((state)=>state.teacher)

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


  const postTeacher = () => {
    axios.patch(`https://school-teachers-api.herokuapp.com/teacher${teacher.currentTeacher}`,teacherdata).then((res)=>{
        console.log(".then")
    })

  };



  console.log(teacher)


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

      <button onClick={postTeacher}>update</button>
    </div>
  );
}
