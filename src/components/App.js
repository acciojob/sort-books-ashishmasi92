
import React, { useEffect, useState } from "react";
import './../styles/App.css';
import { useSelector, useDispatch } from "react-redux";
import postData from "../Redux/action/postActionCreator.js"
import { set_sort } from "../Redux/action/postActionCreator.js";

const App = () => {
  let [data1, setData1] = useState([])
  let [search, setSearch] = useState("")
  let { loading, data, error,sortBy,order } = useSelector(state => state)
console.log(sortBy,order);

  let x = data.results?.books || []





  let dispatch = useDispatch()


  useEffect(() => {
    dispatch(postData())
  }, [])

  console.log(sortBy,order);
  

  let sortedBooks = [...x].sort((a,b)=>{
    let x = (a[sortBy]||"").toLowerCase()
    let y = (b[sortBy]||"").toLowerCase()

if(x>y){
  return order=="asc"?1:-1
}  
else{
  return order=="asc"?-1:1

}
return 0
  })

  console.log(sortedBooks);
  

function handleChange(e){
 dispatch(set_sort(e.target.value,order)) 
}

function handleChange2(e){
  dispatch(set_sort(sortBy,e.target.value))
}


  return (
    <div>
      <input type="text" onChange={(e) => { setSearch(e.target.value) }} />
      <ul>
        {sortedBooks.map((v)=>{
          return <li>{v.title}</li>
        })}
      </ul>
     <label>
      <select value={sortBy} onChange={handleChange}>
        <option>title</option>
        <option>author</option>
        <option>publisher</option>
      </select>
     </label>
<label>
      <select value={order} onChange={handleChange2} >
        <option>asc</option>
        <option>desc</option>
      </select>
     </label>
    </div>
  )
}

export default App
