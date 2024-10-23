import { useEffect, useState } from "react";
import { students } from "../data/student";
import { SelectProps } from "../type";

const SelectStudent = (props:SelectProps) => {
  const {newFunc}=props
  const [name,setName]=useState("Ravi")
  const selectName=(event:React.ChangeEvent)=>{
    const inputTarget=event.target as HTMLInputElement
    setName(inputTarget.value)
  }
  const [result,setResult]=useState("")
  useEffect(()=>{
    setResult(newFunc(name))
  },[name])

  return (
    <>
      <select onChange={(e)=>selectName(e)}
        className="bg-zinc-900 rounded-md focus:border-none focus:outline-none text-sm p-1"
        name=""
        id=""
  
      >
        {students.map((std,ind) => (
          <option key={ind} value={std}>{std}</option>
        ))}
      </select>
      <div>{result}</div>
    </>
  );
};

export default SelectStudent;
