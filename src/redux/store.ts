import { createStore } from 'redux';
const reducer = (prevState, action) => {
  console.log(action);
  console.log(prevState);
  return action.type;
  return prevState;
};
const store = createStore(reducer);
export default store;
