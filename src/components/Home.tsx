import React, { useState } from "react";
import { functionArray } from "../functionArray";
import Box from "./Box";
import Pagination from "./Pagination";

const Home = () => {
  const totalCount = functionArray.length;
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);
  const pageNumber = Math.ceil(totalCount / pageSize);

  const nextPage = () => {
    currentPage < pageNumber && setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    currentPage !== 1 && setCurrentPage(currentPage - 1);

  };
  const samePage=(e:React.MouseEvent)=>{
    const eventTarget=e.target as HTMLInputElement
    setCurrentPage(parseInt(eventTarget.value))
   
    
  }

  const newArray = functionArray.slice(
    (currentPage - 1) * pageSize,
    pageSize * currentPage
  );

  return (
    <div className="flex flex-col">
      <h2 className="text-center bg-gray-950 py-4 text-red-500 text-2xl sticky top-0 shadow-xl ">
        100 Questions! Click for Answer
      </h2>
      <div className="w-[60%] m-auto">
        {newArray.map((item, index) => (
          <div key={index}>
            <Box
              question={item.question}
              id={item.id}
              answer={item.answer}
              type={item.type}
            ></Box>
          </div>
        ))}
      </div>
      <Pagination
        pageNumber={pageNumber}
        onIncrement={nextPage}
        onDecrement={prevPage}
        clickedPage={samePage}
        currPage={currentPage}
      ></Pagination>
    </div>
  );
};

export default Home;
