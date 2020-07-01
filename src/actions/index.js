
import { getCategories } from "../api";


export async function loadCategories() {
  return(dispatch)=>{
    return getCategories().then(response => {
      dispatch(setCategories(response))
    })
  }
}



function setCategories(data){
  return {
    type: "GET_CATEGORIES",
    payload: data
  }
}