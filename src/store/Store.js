import { createStore } from "redux";
const store = createStore(reducer);
function reducer(state, action){
  if(action.type === '1'){
    return {
      text: 'Adidas',
      num: 1111
    }
  }
  return {
    text: 'Reebok',
    num: 1123
  }
} 
export default store