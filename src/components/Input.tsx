type Input= {
    inputvalue:string;
    setinputvalue:React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({inputvalue,setinputvalue}:Input) => {
  return (
    <input value={inputvalue}  onChange={(e)=>setinputvalue(e.target.value)} type="text" className='w-full p-2 rounded-sm mb-2 text-black' />
  )
}

export default Input
