
import { useState } from "react";
const Header = ({search,setSearch}) => {
  let [word,setWord] = useState("click to subscribe");
  function subs(){
    setWord(word= "subscribed");
}
function substwo(){
  setWord(word="click to subscribe")
}

  return (
    <div>
      <nav className="navv">
      <h1 style={{
        backgroundColor : 'lightblue',color :"black",fontWeight : "bolder",height:30,padding:10,borderRadius:15
        
        }}  className="todoname">dhinesh todolist</h1>
       <button onClick={subs} onDoubleClick={substwo} style={{borderRadius:10,backgroundColor:'red',color:'white',padding:10,fontWeight:'bolder',margin:10,cursor:"pointer"}} >{word}</button>
<input type="text" placeholder="search" value={search} onChange={(e)=> setSearch(e.target.value)} className="searchinput"></input>
        </nav>
    </div>
  )
}

export default Header