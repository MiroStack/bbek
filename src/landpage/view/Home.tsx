import { useState } from "react"

export const HomePage = ()=>{
  const[counter, setCounter] = useState(0);
  const increment = ()=>{
    setCounter(counter + 1);
  }
  const[name, setName] = useState("");
  const inputName = (e:React.ChangeEvent<HTMLInputElement>)=>{
      const myname = e.target.value
       setName(myname);         
  }


  return(
    <>
        <div className="w-screen h-screen bg-red-500 items-center flex justify-center">
            This is Homepage
        </div>
        <p>{counter}</p>
        <p>{name}</p>
        <button onClick={increment}></button>
        <input type="text" id="name" onChange={inputName}/>
    </>
  )
}