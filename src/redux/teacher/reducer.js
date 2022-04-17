import { ALL_TEACHERS, CURRENT_TEACHER } from "./action"

const initstate ={
    allTeachers:[],
    currentTeacher:""
}

export const teacher_reducer =(state=initstate,{type,payload})=>{


    switch(type){

        case ALL_TEACHERS:
            return{
                ...state,allTeachers:[...payload]
            }
        case CURRENT_TEACHER:
            return {
                ...state,currentTeacher:payload
            }
        default:
            return state
    }
}