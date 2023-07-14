import { createStore } from "redux"
const reducer = (state = 0, action) =>{
    switch (action.type) {
      case "INC":
        return state + 1
      case "DEC":
        return state - 1
      case "RND":
        return state + action.value 
      default:
        return state
    }
}
const inc = () =>({type:'inc'});
const dec = () =>({type:'dec'});
const rnd = (value) =>({type:'rnd', value});
const story = createStore(reducer)
document.getElementById('inc').addEventListener('click',()=>{
  story.dispatch(inc())
});
document.getElementById("dec").addEventListener("click", () => {
  story.dispatch(dec())
});
document.getElementById("rnd").addEventListener("click", () => {
  const value = Math.floor(Math.random()*10)
  story.dispatch(rnd(value))
});

const update = () =>{
  document.getElementById('counter').textContent = story.getState();
}
story.subscribe(update)
// story.subscribe(()=>{
//   console.log(story.getState())
// })
// story.dispatch({type:'INC'})
// story.dispatch({ type: "INC" })
// story.dispatch({ type: "INC" })
