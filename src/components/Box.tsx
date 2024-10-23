import { useState } from "react";
import Popup from "./Popup";

type BoxProps = {
  question: string;
  id: number;
  answer: any;
  type?: string;
};
const Box = (props: BoxProps) => {
  const [isPop, setIsPop] = useState(false);
  const { answer, type } = props;
  const updatePop = () => {
    setIsPop(!isPop);
    console.log("kk");
  };
  return (
    <>
      <div onClick={updatePop} className=" hover:scale-105 bg-slate-800 m-4 rounded-md shadow-l text-white py-4 px-2 cursor-pointer text-lg text-center mx-5">
        <h1>
          {props.id}: {props.question}
        </h1>
      </div>
      {isPop ? <Popup answer={answer} type={type} /> : null}
    </>
  );
};
export default Box;
