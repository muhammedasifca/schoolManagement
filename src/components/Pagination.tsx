
import { PaginationProps } from "../type";

const Pagination = (props:PaginationProps) => {
  const { pageNumber,onIncrement,onDecrement,clickedPage,currPage} = props;

    const numbers=[]
    for (let i = 0; i < pageNumber; i++) {
        numbers.push(i+1)
        
    }
   
    
    
  return (
    <div className="text-center my-5">
      <button disabled={currPage==1?true:false} className={`mr-4 text-white py-0.5 px-2 rounded-2xl text-[16px] inline-block  bg-${currPage==1?"slate-400":"black"}`} onClick={onDecrement}>Previous</button>
        {
            numbers.map((num)=>(
                <button onClick={(e)=>clickedPage(e)} value={num} className={`mx-1 w-6 h-6 p-[2px] rounded-full bg-[${num==currPage?"black":"white"}] text-${num==currPage?"white":"black"}`} key={num}>{num}</button>
            ))
        }
      <button disabled={currPage==pageNumber?true:false} className={`ml-4 bg-[${currPage==pageNumber?"white":"black"}] text-white py-0.5 px-2.5 rounded-2xl text-[16px] inline-block`} onClick={onIncrement}>Next</button>
    </div>
  );
};

export default Pagination;

