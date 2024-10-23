import { useEffect, useState } from "react";
import { subjects } from "../data/subjects";
import { TwoSelectProps } from "../type";

const SelectMarkAndSub = (props: TwoSelectProps) => {
  const { newFunc } = props;
  const [mark,setMark]=useState("")
  const selectMark=(event:React.ChangeEvent)=>{
    const targetEvent=event.target as HTMLInputElement
    setMark(targetEvent.value)
  }
  const [sub,setSub]=useState("")
  const selectSubject=(event:React.ChangeEvent)=>{
    const targetEvent=event.target as HTMLInputElement
    setSub(targetEvent.value)
  }
  const [result,setResult]=useState()
useEffect(()=>{
  setResult(newFunc(mark,sub))
},[mark,sub])
  return (
    <div>
      <div>
      <select
        onChange={(e) => selectMark(e)}
        className="bg-zinc-900 rounded-md focus:border-none focus:outline-none text-sm p-1"
        name=""
        id=""
      >
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={30}>30</option>
        <option value={40}>40</option>
        <option value={50}>50</option>
      </select>
      <select
        onChange={(e) => selectSubject(e)}
        className="bg-zinc-900 rounded-md focus:border-none focus:outline-none text-sm p-1"
        name=""
        id=""
      >
        {subjects.map((sub, ind) => (
          <option key={ind} value={sub}>
            {sub}
          </option>
        ))}
      </select>
      </div>
      <div>{result}</div>
    </div>
  );
};

export default SelectMarkAndSub;
