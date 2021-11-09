const initialData = {
    list: [''],
  };

const Reducer1 = ( state = initialData,action) => {



  switch (action.type) {
    case "Add_Todo":
      const { id, data } = action.payLoad;
      
      return{
           ...state,
          list : [
            ...state.list,
            {
              id: id,
              data: data,
            },
          ]
      }
    case "Delet_Todo":
 

      const newList=state.list.filter((elem)=>elem.id!==action.id)
      return{
           ...state,
          list : newList
      }
    case "Remove_all":
    return{
        ...state,
        list:['']
    }
      default: return state;
      
  }
};
export default Reducer1;
