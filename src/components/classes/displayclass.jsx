import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Displayclass() {
  const teachers = useSelector((state) => state.teacher);
  const navigate = useNavigate();

  const [classdata, setclassdata] = React.useState([]);
  const [refresh, setrefresh] = React.useState(1);

  console.log(teachers);

  React.useEffect(() => {
    axios
      .get(`https://school-teachers-api.herokuapp.com/class/${teachers.currentTeacher}`)
      .then((res) => {
        console.log(res.data);
        setclassdata(res.data);
      });

    console.log(teachers.currentTeacher);
  }, []);

  const handledelete = (el) => {
    axios.delete(`https://school-teachers-api.herokuapp.com/class/${el._id}`).then((res) => {
      console.log(res.data);
      setrefresh(Math.random());
    });

    axios
      .get(`http://localhost:3000/class/${teachers.currentTeacher}`)
      .then((res) => {
        setclassdata(res.data);
      });
  };

  const handleedit = (el) => {
    navigate("/update_class");
  };

  return (
    <div>
         <h3>classes</h3>
      <div id="displaydiv">
         
        <table>
          <tbody>
            <tr>
              <th>Grade</th>
              <th>section</th>
              <th>subject</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            {classdata.map((el) => (
              <tr>
                <td>{el.grade}</td>
                <td>{el.section}</td>
                <td>{el.subject}</td>
                <td
                  onClick={() => {
                    handleedit(el);
                  }}
                >
                  edit
                </td>
                <td
                  onClick={() => {
                    handledelete(el);
                  }}
                >
                  delete
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
