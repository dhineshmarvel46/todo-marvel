import React from "react"

const Value = ({inpu,btnn,setInpu,addtodo}) => {
  
  return (
   <div>
    <form className='form' >   <input   type='text'placeholder="Enter Here" className="val"  value={inpu} onChange={(e) => setInpu(e.target.value)}  ></input><button type="submit" onClick={btnn} className="addbtn"   >ADD</button > </form>

   </div>
  )
}

export default Value