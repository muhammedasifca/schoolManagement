import SelectMark from "./SelectMark";
import SelectMarkAndSub from "./SelectMarkAndSub";
import SelectsSubject from "./SelectsSubject";
import SelectStudent from "./SelectStudent";

type PopupProps = {
  answer: any;
  type?: string;
};
const Popup = (props: PopupProps) => {
  const { answer, type } = props;
  console.log(answer);

  return (
    <div>
      <div className="block break-words bg-teal-900 rounded-md mx-20 py-5 px-3 text-xl text-white">
        {type == undefined ? (
          answer()
        ) : type == "student" ? (
          <SelectStudent newFunc={answer} />
        ) : type == "subject" ? (
          <SelectsSubject newFunc={answer} />
        ) : type == "mark" ? (
          <SelectMark newFunc={answer} />
        ) : type == "markAndSub" ? (
          <SelectMarkAndSub newFunc={answer} />
        ) : null}
      </div>
      {/* <div className="h-[2px] bg-black my-1"></div> */}
    </div>
  );
};

export default Popup;
