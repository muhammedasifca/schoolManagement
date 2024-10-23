import { useEffect, useState } from "react"
import { SelectProps } from "../type";


const SelectMark = (props:SelectProps) => {
  const {newFunc}=props
  const [mark,setMark]=useState("")

  const selectMark=(event:React.ChangeEvent)=>{
    const inputTarget=event.target as HTMLInputElement
    setMark(inputTarget.value)
  }
  const [result,setResult]=useState("")
  useEffect(()=>{
    setResult(newFunc(mark))
    
  },[mark])

  // const a={
  //   func:kkk
  // }
  // let d=3
  // function kkk(d){
  //   console.log(d);
  //   return d
  // }
  // console.log(a.func(d));
  
  return (
    <>
      <select onChange={(e)=>selectMark(e)} value={mark} className="bg-zinc-900 rounded-md focus:border-none focus:outline-none text-sm p-1"  name="" id="">
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={30}>30</option>
        <option value={40}>40</option>
        <option value={50}>50</option>
      </select>
      <div>
        {result}
      </div>
    </>


  )
}

export default SelectMark
