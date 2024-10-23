export type SubjectPercentages = {
  English: number;
  Maths: number;
  Physics: number;
  Chemistry: number;
  Computer: number;
};
export type Student =
  | {
      name: string;
      id: string;
      marks: {
        subject: string;
        mark: number;
      }[];
    }
  | undefined;

export type StudentName = {
  [key: string]: number;
};

export type SubjectObject = {
  total: number;
  count: number;
  subject: string;
}[];

export type NewStudent = {
  stdName: string;
  count: number;
};

export type AverageMark = { [key: string]: number };
export type AveragePercentage = { [key: string]: number };

export type Previous = { [key: string]: { total:number; count:number } };

export type UpdateSubject = {
  total: number;
  count: number;
  subject: string;
};

export type SubjectArray = {
  total: number;
  count: number;
};

export type SelectProps = {
  newFunc: (mark:string) => string;
};

export type TwoSelectProps = {
  newFunc: (mark:string,sub:string) => undefined;
};

export type PaginationProps = {
    pageNumber:number
    onIncrement:()=>void
    onDecrement:()=>void
    clickedPage:(e:React.MouseEvent)=>void
    currPage:number
}