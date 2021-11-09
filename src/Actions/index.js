export const addTodo=(data)=>{
    return {
        type:"Add_Todo",
        payLoad:{
            id: new Date().getTime().toString(),
            data:data
        }
    }
}
export const deletTodo=(id)=>{
    return {
        type:"Delet_Todo",
        id:id
    }
}
export const removeAll=()=>{
    return {
        type:"Remove_all"
    }
}