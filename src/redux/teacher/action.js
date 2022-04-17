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