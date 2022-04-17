import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { all_teachers, current_teacher } from "../../redux/teacher/action";

export default function Dashboard() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [page, setpage] = React.useState(1);

  const [data, setdata] = React.useState([]);

  const [refresh, setrefresh] = React.useState(1);
  const initstate = {
    qty: 5,
    order: 1,
    gender: "",
  };
  const [querry, setquerry] = React.useState(initstate);

  const handlebutton = (e) => {
    const { name, value } = e.target;

    setquerry((prev) => ({ ...prev, [name]: value }));
  };
  //////////////////////////////////////////////////////// change url
  const { qty, order, gender } = querry;
  let init_url = `http://localhost:3000/teacher?page=${page}&qty=${qty}&order=${order}&gender=${gender}`;

  React.useEffect(() => {
    axios.get(init_url).then((res) => {
      dispatch(all_teachers(res.data));
      setdata(res.data);
      console.log(res.data);
    });
  }, [querry,page]);

  const handledelete = (el) => {
    axios.delete(`http://localhost:3000/teacher/${el._id}`).then((res) => {
      console.log(res, data);
      setrefresh(Math.random());
    });

    axios.get(init_url).then((res) => {
      dispatch(all_teachers(res.data));
      setdata(res.data);
    });
  };

  const handleedit = (el) => {
    dispatch(current_teacher(el._id));
    ///////////////////////////////////////////////// set it to localstorage
    navigate("/update_teacher");
  };

  const handleTOClass = (el) => {
    dispatch(current_teacher(el._id));
    navigate("/display_class");
  };
  const teachers = useSelector((state) => state.teacher);

  console.log(teachers);

  console.log(init_url)

  return (
    <div>
      <div id="all filters">
        <div>
          <input type="text" />
          <button>search</button>
        </div>
        <button onClick={handlebutton} value="male" name="gender">
          Male
        </button>
        <button onClick={handlebutton} value="female" name="gender">
          Female
        </button>

        <button onClick={handlebutton} value={1} name="order">
          sort asc
        </button>
        <button onClick={handlebutton} value={-1} name="order">
          sort dsc
        </button>
      </div>
      <div id="container">
        <table>
          <tbody>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            {data.map((el) => (
              <tr>
                <td
                  onClick={() => {
                    handleTOClass(el);
                  }}
                >
                  {el.first_name}
                </td>
                <td
                  onClick={() => {
                    handleTOClass(el);
                  }}
                >
                  {el.last_name}
                </td>
                <td>{el.gender}</td>
                <td>{el.age}</td>
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

      <div>
        <button
          onClick={() => {
            setpage((prev) => (prev > 1 ? prev - 1 : 1));
          }}
          name="page"
        >
          prev
        </button>{" "}
        <button
          onClick={() => {
            setpage((prev) => prev + 1);
          }}
          name="page"
        >
          next
        </button>
      </div>
    </div>
  );
}
