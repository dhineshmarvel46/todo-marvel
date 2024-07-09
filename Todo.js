
import React from "react"

const Todo = ({items ,change ,btn,}) => {


  return (
  
    <div>
      {(items.length )? (
      
    <ul className='todolist'>
    
    {items.map(work => 
    <li className='list' >
    <input className='input'  type='checkbox' onChange={()=>change(work.id)} checked = {work.checked}></input>
    <label style={(work.checked)?{textDecoration:'line-through',color:'red'}:null} onDoubleClick={()=>change(work.id)}>{work.item}</label>
    <button className='btn'onClick={()=>btn(work.id)}  >delete</button>
    </li>
    )
    
    
    
    }  
    </ul>
      ) :(
        <p style={{letterSpacing:3,fontWeight:'bolder',borderRadius:10,height:40,padding:15,margin:25,backgroundColor:'blueviolet',justifyItems:'center',color:'whitesmoke',flexDirection:'row',display:'flex',justifyContent:'center'}} >YOUR TODOLIST IS EMPTY NOW</p>
      )   
     }     </div>
  )
  
}
  

export default Todo