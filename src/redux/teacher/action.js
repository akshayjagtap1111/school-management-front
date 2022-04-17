import axios from "axios"
export const ALL_TEACHERS ="ALL_TEACHERS";

export const CURRENT_TEACHER ="CURRENT_TEACHER";




export const all_teachers= (payload)=>{

    return {
        type:ALL_TEACHERS,
        payload
    }
}


export const current_teacher =(payload)=>{

    return {
        type:CURRENT_TEACHER,
        payload
    }

}

export const addteacher =(userDetails)=>(dispatch)=>{

    console.log(userDetails)

    console.log("dispatching........")

  
    axios
      .post("https://school-teachers-api.herokuapp.com/teacher", userDetails)
      .then((res) => {
        console.log(".then");
     
      })
      .catch((err) => {
       
        console.log(".catch");
       
      });

}