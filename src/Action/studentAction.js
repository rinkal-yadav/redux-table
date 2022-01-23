export const addStudent =(data)=>{
    return{
        type:"ADD_STUDENT",
        payload:data

    }
}

export const updateStudent =(data)=>{
    return{
        type:"UPDATE_STUDENT",
        payload:data

    }
}