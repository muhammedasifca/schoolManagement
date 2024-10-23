import { useEffect, useState } from "react";
import { subjects } from "../data/subjects";
import { SelectProps } from "../type";
const SelectsSubject = (props: SelectProps) => {
  const {newFunc}=props
  const [sub,setSub]=useState("English")
  const selectSubject=(event:React.ChangeEvent)=>{
    const inputTarget=event.target as HTMLInputElement
    setSub(inputTarget.value)
  }
  const [result,setResult]=useState("")
  useEffect(()=>{
    setResult(newFunc(sub))
  },[sub])
  return (
    <>
      <select onChange={(e)=>selectSubject(e)}
        className="bg-zinc-900 rounded-md focus:border-none focus:outline-none text-sm p-1"
        name=""
        id=""
      >
        {subjects.map((sub,ind) => (
          <option key={ind} value={sub}>{sub}</option>
        ))}
      </select>
      <div>{result}</div>
    </>
  );
};

export default SelectsSubject;
