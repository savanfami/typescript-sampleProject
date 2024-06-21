
import { useState } from 'react'
import './App.css'
import Imageheader from './components/imageheader'
import Input from './components/Input';
import Button from './components/Button';

function App() {

  type items={
    title:string;
    id:string
  }
  const[items,setItems]=useState<items[]>([])
  const[inputvalue,setinputvalue]=useState<string>('')

  const handlesubmit=(event:React.FormEvent)=>{
    event.preventDefault()
    setItems(prev=>[...prev,{title:inputvalue,id:Date.now().toString()}])
    setinputvalue('')
  }

  const handledelete=(value:string)=>{
    setItems(prev=>prev.filter(data=>data.id!==value))
  }

  return (
    <>
      <div className='h-[100vh] flex flex-col justify-center items-center mb-8'>
        <Imageheader/>
        <div className='w-[350px]'>
          <form onSubmit={handlesubmit} className='mb-5'>
          <Input inputvalue={inputvalue} setinputvalue={setinputvalue} />
            <Button className='bg-gray-700 w-full p-2' title='Add'/>
         
          </form >                                      
          <div className='h-52 overflow-y-auto'>
            {items.map((data)=>(
            <div key={data.id} className='flex justify-between items-center border border-slate-600 mb-2'>
              <p>{data.title}</p>
           
              <Button onClick={()=>handledelete(data.id)}  className='bg-green-950 rounded-sm p-2' title={'delete'}/>
            </div>
            ))}
          </div>

        </div>
      </div>
    </>
  )
}

export default App
