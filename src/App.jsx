import { useDispatch, useSelector } from "react-redux"

function App(){
  const num = useSelector(state => state);
  const dispatch = useDispatch();

  const handleClick = () => {
    if(num.text === 'Reebok'){
      dispatch({
        type: '1'
      })
    } else (
      dispatch({
        type: '2'
      })
    )
  }
  return(
    <div className="App">
      {num.text} - {num.num}
      <button onClick={handleClick}>click</button>
    </div>
  )
}
export default App