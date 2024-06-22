
import { useState } from 'react'
import './App.css'
import Imageheader from './components/imageheader'  
import Input from './components/Input';
import Button from './components/Button';
import { type Items } from './types/utils';
import Itemlist from './components/Itemlist';

function App() {


  const[items,setItems]=useState<Items[]>([])
  const[inputvalue,setinputvalue]=useState<string>('')

  const handlesubmit=(event:React.FormEvent)=>{
    event.preventDefault()
    setItems(prev=>[...prev,{title:inputvalue,id:Date.now().toString()}])
    setinputvalue('')
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
          <Itemlist items={items} setItems={setItems}/>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
