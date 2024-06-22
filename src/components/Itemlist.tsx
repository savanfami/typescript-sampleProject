import React from "react";
import { Items } from "../types/utils"
import Button from "./Button"

type Itemlist={
    items:Items[];
    setItems:React.Dispatch<React.SetStateAction<Items[]>>;
}


const Itemlist = ({items,setItems}:Itemlist) => {
    const handledelete=(value:string)=>{
        setItems(prev=>prev.filter(data=>data.id!==value))
      }
    
  return (
    <>
    {items.map((data)=>(
        <div key={data.id} className='flex justify-between items-center border border-slate-600 mb-2'>
          <p>{data.title}</p>
       
          <Button onClick={()=>handledelete(data.id)}  className='bg-green-950 rounded-sm p-2' title={'delete'}/>
        </div>
   
   ))}
   </>
  )
}

export default Itemlist
