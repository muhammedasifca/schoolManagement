import { datas } from "./datas";
import { subjects } from "../data/subjects";
import {
  AverageMark,
  AveragePercentage,
  NewStudent,
  Previous,
  Student,
  UpdateSubject,
} from "../type";
import { students } from "../data/student";
export const className = () => {
  const name = datas.name;
  return `${name}`;
};

export const teacherName = () => {
  const teacherName = datas.teacherName;
  return `${teacherName}`;
};

export const studentsAllName = () => {
  const stName = datas.students.map((student) => student.name);
  return stName.join(", ");
};

export const idsOfStudents = () => {
  const data = datas.students.map((student) => {
    return student.id;
  });
  return data.join(", ");
};

export const subjectName = (name: string) => {
  const data = datas.students
    .filter((nameObj) => nameObj.name === name)[0]
    .marks.map((sub) => sub.subject);
  return data.join(", ");
};

export const subjectMark = (name: string) => {
  let subjectMark: string[] = [];
  const data = datas.students.filter((nameObj) => nameObj.name === name)[0]
    .marks;
  data.forEach((item) => {
    subjectMark.push(`${item.subject}=${item.mark}`);
  });
  return subjectMark.join(" ,");
};

export const averageMark = (name: string) => {
  const mark = datas.students.filter((nameObj) => nameObj.name === name)[0]
    .marks;
  const totalScore = mark.reduce((prev, curr) => prev + curr.mark, 0);
  return `average mark = ${totalScore / mark.length}`;
};

export const totalMark = (name: string) => {
  const mark = datas.students.filter((nameObj) => nameObj.name === name)[0]
    .marks;
  const totalScore = mark.reduce((prev, curr) => prev + curr.mark, 0);
  return `Total = ${totalScore}`;
};

export const subjectAverage = (sub: string) => {
  const mark = datas.students
    .map((student) => student.marks)
    .map((arr) => arr.filter((text) => text.subject == sub))
    .flat();
  const totalScore = mark.reduce((prev, curr) => prev + curr.mark, 0);
  return `Average = ${totalScore / mark.length}`;
};

export const subjectTotal = (sub: string) => {
  const mark = datas.students
    .map((student) => student.marks)
    .map((arr) => arr.filter((text) => text.subject == sub))
    .flat();
  const totalScore = mark.reduce((prev, curr) => prev + curr.mark, 0);

  return `Total = ${totalScore}`;
};
console.log(subjectTotal("Maths"));


export const topStudentInSubject = (sub: string) => {
  let initialMark = 0;
  let nameOfStudent;
  datas.students.forEach((student) => {
    const mark =
      student.marks.find((subject) => subject.subject == sub)?.mark || 0;
    if (initialMark < mark) {
      initialMark = mark;
      nameOfStudent = student.name;
    }
  });
  return nameOfStudent;
};
// console.log(topStudentInSubject('English'));

export const weakStudentInSubject = (sub: string) => {
  let initialMark = 50;
  let nameOfStudent;
  datas.students.forEach((student) => {
    const mark =
      student.marks.find((subject) => subject.subject == sub)?.mark || 0;
    if (initialMark > mark) {
      initialMark = mark;
      nameOfStudent = student.name;
    }
  });
  return nameOfStudent;
};

export const highestTotalMark = () => {
  let initialTotal = 0;
  let nameOfStudent;
  datas.students.forEach((student) => {
    const totalMark = student.marks.reduce(
      (prev, curr) => (prev = prev + curr.mark),
      0
    );
    if (initialTotal < totalMark) {
      initialTotal = totalMark;
      nameOfStudent = student.name;
    }
  });
  return nameOfStudent;
};

export const lowestTotalMark = () => {
  let initialTotal = 250;
  let nameOfStudent;
  datas.students.forEach((student) => {
    const totalMark = student.marks.reduce(
      (prev, curr) => (prev = prev + curr.mark),
      0
    );
    if (initialTotal > totalMark) {
      initialTotal = totalMark;
      nameOfStudent = student.name;
    }
  });
  return nameOfStudent;
};

export const highestAvrgSubject = () => {
  const updatedObject = subjectObject();
  let highAvrgsub = null;
  let highAvrg = 0;

  for (const subject in updatedObject) {
    const average = updatedObject[subject].total / updatedObject[subject].count;
    if (average > highAvrg) {
      highAvrg = average;
      highAvrgsub = subject;
    }
  }
  return highAvrgsub;
};

export const lowestAvrgSubject = () => {
  const updatedObject = subjectObject();
  let lowAvrgsub = null;
  let lowAvrg = Infinity;

  for (const subject in updatedObject) {
    const average = updatedObject[subject].total / updatedObject[subject].count;
    if (average < lowAvrg) {
      lowAvrg = average;
      lowAvrgsub = subject;
    }
  }
  return lowAvrgsub;
};

export const overallAvrgMark = () => {
  let totalMark = 0;

  datas.students.forEach((student) => {
    totalMark += student.marks.reduce(
      (prev, curr) => (prev = prev + curr.mark),
      0
    );
  });
  return (totalMark /students.length );
};

export const overallTotalMark = () => {
  let totalMark = 0;
  datas.students.forEach((student) => {
    totalMark += student.marks.reduce(
      (prev, curr) => (prev = prev + curr.mark),
      0
    );
  });
  return totalMark;
};

export const avrgMarksForSubjects = () => {
  const subjectMark = updatedSubjectObject();
  const averageMark = subjectMark.map(
    (sub) => `${sub.subject}=${sub.total / sub.count}`
  );
  console.log(averageMark);

  return averageMark.join(", ");
};
console.log(avrgMarksForSubjects());

export const totalMarksForSubject = () => {
  const subjectMark = updatedSubjectObject();
  const mark = subjectMark.map((sub) => `${sub.subject}=${sub.total}`);
  return mark.join(", ");
};

export const highTotalMarkSub = () => {
  return highestAvrgSubject();
};

export const lowTotalMarkSub = () => {
  return lowestAvrgSubject();
};

export const studentWithHighAvrgMark = () => {
  const listOfStd = datas.students.map((student) => {
    const name = student.name;
    const totalMark = student.marks.reduce(
      (prev, curr) => (prev = prev + curr.mark),
      0
    );
    const averageMark = totalMark / student.marks.length;
    return { name: name, totalMarks: averageMark };
  });
  let initialMark = -Infinity;
  let studentName = null;
  listOfStd.forEach((list) => {
    if (initialMark < list.totalMarks) {
      initialMark = list.totalMarks;
      studentName = list.name;
    }
  });
  return studentName;
};

export const studentWithLowAvrgMark = () => {
  const listOfStd = datas.students.map((student) => {
    const name = student.name;
    const totalMark = student.marks.reduce(
      (prev, curr) => (prev = prev + curr.mark),
      0
    );
    console.log(totalMark);

    const averageMark = totalMark / student.marks.length;
    return { name: name, totalMarks: averageMark };
  });
  console.log(listOfStd);
  let initialMark = Infinity;
  let studentName = null;
  listOfStd.forEach((list) => {
    if (initialMark > list.totalMarks) {
      initialMark = list.totalMarks;
      studentName = list.name;
    }
  });
  return studentName;
};

export const studentWithHighMark = () => {
  return studentWithHighAvrgMark();
};

export const studentWithLowMark = () => {
  return studentWithLowAvrgMark();
};

export const stdCountAboveMark = (mark: number, sub: string) => {
  let stdArray: { subject: string; mark: number }[] = [];
  datas.students.forEach((student) => {
    let data = student.marks.filter(
      (item) => item.mark > mark && item.subject == sub
    );
    if (data) {
      stdArray.push(...data);
    }
  });
    console.log(stdArray);
  return `number of students: ${stdArray.length}`;
};
console.log(stdCountAboveMark(20,"Physics"));

export const stdCountBelowMark = (mark: number, sub: string) => {
  let stdArray: { subject: string; mark: number }[] = [];
  datas.students.forEach((student) => {
    let data = student.marks.filter(
      (item) => item.mark < mark && item.subject == sub
    );
    if (data) {
      stdArray.push(...data);
    }
  });
  //   console.log(stdArray);
  return `number of students: ${stdArray.length}`;
};

export const stdCountMarkASub = (mark: number) => {
  let count = 0;
  datas.students.forEach((student) => {
    let data = student.marks.filter((item) => item.mark > mark);
    if (data.length === student.marks.length) {
      count++;
    }
  });
  return `Number of students: ${count}`;
};

export const stdCountMarkBSub = (mark: number) => {
  let count = 0;
  datas.students.forEach((student) => {
    let data = student.marks.filter((item) => item.mark < mark);
    if (data.length === student.marks.length) {
      count++;
    }
  });
  return `Number of students: ${count}`;
};

export const stdPercentageAboveMark = (mark: number, sub: string) => {
  let activeStdCount = parseInt(stdCountAboveMark(mark, sub).slice(-2));
  let numberOfStudent = datas.students.length;
  const stdPercentage = (activeStdCount / numberOfStudent) * 100;
  return `Percentage: ${stdPercentage}%`;
};

export const stdPercentageBelowMark = (mark: number, sub: string) => {
  let activeStdCount = parseInt(stdCountBelowMark(mark, sub).slice(-2));
  let numberOfStudent = datas.students.length;
  const stdPercentage = (activeStdCount / numberOfStudent) * 100;
  return `Percentage: ${stdPercentage}%`;
};

export const stdPercentageAMark = (mark: number) => {
  let activeStdCount = parseInt(stdCountMarkASub(mark).slice(-2));
  let numberOfStudent = datas.students.length;
  const stdPercentage = (activeStdCount / numberOfStudent) * 100;
  return `Percentage: ${stdPercentage}%`;
};

export const stdPercentageBMark = (mark: number) => {
  let activeStdCount = parseInt(stdCountMarkBSub(mark).slice(-2));
  let numberOfStudent = datas.students.length;
  const stdPercentage = (activeStdCount / numberOfStudent) * 100;
  return `Percentage: ${stdPercentage}%`;
};

export const stdHighMarkPerc = () => {
  return highestTotalMark();
};

export const stdLowMarkPerc = () => {
  return lowestTotalMark();
};

export const subHighMarkPerc = () => {
  return highTotalMarkSub();
};

export const subLowMarkPerc = () => {
  return lowTotalMarkSub();
};

export const TopMarkPercStdInSub = (sub: string) => {
  return topStudentInSubject(sub);
};

export const weakMarkPercStdInSub = (sub: string) => {
  return weakStudentInSubject(sub);
};

export const highPercSub = (name: string) => {
  let initialMark = 0;
  let subject = null;
  const [studDet] = datas.students.filter((student) => student.name == name);
  // console.log(studDet);
  studDet.marks.forEach((sub) => {
    if (initialMark < sub.mark) {
      initialMark = sub.mark;
      subject = sub.subject;
    }
  });
  return subject;
};

export const LowPercSub = (name: string) => {
  let initialMark = Infinity;
  let subject = null;
  const [studDet] = datas.students.filter((student) => student.name == name);
  // console.log(studDet);
  studDet.marks.forEach((sub) => {
    if (initialMark > sub.mark) {
      initialMark = sub.mark;
      subject = sub.subject;
    }
  });
  return subject;
};


export const findSubAboveCerMark = (mark: number) => {
  let subObject:{[key:string]:number} = {};
  subjects.forEach((sub) => {
    subObject[sub] = 0;
  });
  datas.students.forEach((student) => {
    student.marks.forEach((subject) => {
      if (subject.mark > mark) {
        subObject[subject.subject]++;
      }
    });
  });
  console.log(subObject);
  const result = Object.keys(subObject).filter(
    (item) => subObject[item] === datas.students.length
  );
  console.log(result);
  if (result.length == 0) {
    return `No subjects found`;
  } else {
    return `Subject: ${result.join(", ")}`;
  }
};

export const findSubBelowCerMark = (mark: number) => {
  let subObject:{[key:string]:number} = {};
  subjects.forEach((sub) => {
    subObject[sub] = 0;
  });

  datas.students.forEach((student) => {
    student.marks.forEach((subject) => {
      if (subject.mark < mark) {
        subObject[subject.subject]++;
      }
    });
  });

  const result = Object.keys(subObject).filter(
    (item) => subObject[item] === datas.students.length
  );
  if (result.length == 0) {
    return `No subjects found`;
  } else {
    return `Subject: ${result.join(", ")}`;
  }
};

export const findSubAverageAllAbove = (mark: number) => {
  return findSubAboveCerMark(mark);
};

export const findSubAverageAllBelow = (mark: number) => {
  return findSubBelowCerMark(mark);
};

export const stdTopAtleastOneSub = () => {
  let topStd: string[] = [];
  subjects.forEach((subject) => {
    let highestMark = -1;
    let highScoringStd: string[] = [];
    datas.students.forEach((student) => {
      let newMark:number|undefined = student.marks.find(
        (mar) => mar.subject == subject
      )?.mark!;
      if (newMark > highestMark) {
        highestMark = newMark;
        highScoringStd = [student.name];
      } else if (newMark === highestMark) {
        highScoringStd.push(student.name);
      }
    });

    highScoringStd.forEach((student) => topStd.push(student));
  });

  let filteredArr = topStd.filter((top, ind) => topStd.indexOf(top) === ind);
  return filteredArr.join(", ");
};

export const stdLowAtleastOneSub = () => {
  let topStd: string[] = [];
  subjects.forEach((subject) => {
    let highestMark = Infinity;
    let highScoringStd: string[] = [];
    datas.students.forEach((student) => {
      let newMark: number |undefined = student.marks.find(
        (mar) => mar.subject == subject
      )?.mark!;
      if (newMark < highestMark) {
        highestMark = newMark;
        highScoringStd = [student.name];
      } else if (newMark === highestMark) {
        highScoringStd.push(student.name);
      }
    });

    highScoringStd.forEach((student) => topStd.push(student));
  });

  let filteredArr = topStd.filter((top, ind) => topStd.indexOf(top) === ind);
  return filteredArr.join(", ");
};

export const avrgMarkEachStdEachSub = () => {
  let fullData = datas.students.map((student) => {
    const name = student.name;
    const mark = student.marks.map((mark) => {
      const subName = mark.subject;
      const subMark = mark.mark;

      return `${subName}=${subMark}`;
    });
    return `${name}(${mark})`;
  });
  return fullData.join(", ");
};

export const totalMarkEachStdEachSub = () => {
  return avrgMarkEachStdEachSub();
};

export const stdWithTopInSub = () => {
  let dataArr: string[] = [];
  subjects.forEach((sub) => {
    let initialMark = 0;
    let nameOfStudent: string;
    let highestMark = datas.students.map((student) => {
      const mark =
        student.marks.find((subject) => subject.subject == sub)?.mark || 0;
      if (initialMark < mark) {
        initialMark = mark;
        nameOfStudent = student.name;
      }
      return `${sub}:${nameOfStudent}`;
    });
    console.log(highestMark[highestMark.length - 1]);
    dataArr.push(highestMark[highestMark.length - 1]);
  });
  return dataArr.join(", ");
};

export const stdWithLowInSub = () => {
  let dataArr: string[] = [];
  subjects.forEach((sub) => {
    let initialMark = Infinity;
    let nameOfStudent: string;
    let highestMark = datas.students.map((student) => {
      const mark =
        student.marks.find((subject) => subject.subject == sub)?.mark || 0;
      if (initialMark > mark) {
        initialMark = mark;
        nameOfStudent = student.name;
      }
      return `${sub}:${nameOfStudent}`;
    });
    console.log(highestMark[highestMark.length - 1]);
    dataArr.push(highestMark[highestMark.length - 1]);
  });
  return dataArr.join(", ");
};

export const highestMarkSub = () => {
  const newArray: { subject: string; mark: number }[] = [];
  datas.students.forEach((student) => {
    newArray.push(...student.marks);
  });
  console.log(newArray);
  let initialMark = 0;
  let subject;
  newArray.forEach((arr) => {
    if (arr.mark > initialMark) {
      initialMark = arr.mark;
      subject = arr.subject;
    }
  });
  return subject;
};

export const lowestMarkSub = () => {
  const newArray: { subject: string; mark: number }[] = [];
  datas.students.forEach((student) => {
    newArray.push(...student.marks);
  });
  console.log(newArray);
  let initialMark = Infinity;
  let subject;
  newArray.forEach((arr) => {
    if (arr.mark < initialMark) {
      initialMark = arr.mark;
      subject = arr.subject;
    }
  });
  return subject;
};

export const stdScoredAbvClsAvrg = () => {
  return studentWithHighAvrgMark();
};

export const stdScoredBelClsAverage = () => {
  let classTotal = 0;
  const listOfStd = datas.students.map((student) => {
    const name = student.name;
    const totalMark = student.marks.reduce(
      (prev, curr) => (prev = prev + curr.mark),
      0
    );
    console.log(totalMark);
    classTotal = classTotal + totalMark;
    const averageMark = totalMark;
    return { name: name, totalMarks: averageMark };
  });
  let classAverage = classTotal / listOfStd.length;
  const list = listOfStd
    .filter((list) => list.totalMarks < classAverage)
    .map((name) => name.name);
  return list.join(", ");
};

export const subAvrgAbvClsAvrg = () => {
  let subArry: UpdateSubject[] = updatedSubjectObject();
  console.log(subArry);

  let classTotal = subArry.reduce((prev, curr) => (prev += curr.total), 0);
  let filteredArr = subArry
    .filter((sub) => sub.total > classTotal / subArry.length)
    .map((subject) => subject.subject);
  return filteredArr.join();
};

export const subAvrgBelClsAvrg = () => {
  let subArry = updatedSubjectObject();
  let classTotal = subArry.reduce((prev, curr) => (prev += curr.total), 0);
  let filteredArr = subArry
    .filter((sub) => sub.total < classTotal / subArry.length)
    .map((subject) => subject.subject);
  return filteredArr.join(", ");
};
subAvrgAbvClsAvrg();
export const subWhichHighPercStdScrAbove = (mark: number) => {
  const newArray: { subject: string; mark: number }[] = [];
  datas.students.forEach((student) => {
    newArray.push(...student.marks);
  });
  let filteredArr = newArray
    .filter((arr) => arr.mark > mark)
    .map((sub) => sub.subject);
  let newFilteredArr = filteredArr.filter(
    (newsub, index) => filteredArr.indexOf(newsub) === index
  ); 
  if (newFilteredArr.length==0) {
    return `No Subjects found`
  }
  else{
    return newFilteredArr.join(", ");
  }
};

export const subWhichHighPercStdScrBelow = (mark: number) => {
  const newArray: { subject: string; mark: number }[] = [];
  datas.students.forEach((student) => {
    newArray.push(...student.marks);
  });
  let filteredArr = newArray
    .filter((arr) => arr.mark < mark)
    .map((sub) => sub.subject);
  let newFilteredArr = filteredArr.filter(
    (newsub, index) => filteredArr.indexOf(newsub) === index
  );
  if (newFilteredArr.length==0) {
    return `No Subjects found`
  }
  else{
    return newFilteredArr.join(", ");
  }
};

export const subWhichLowPercStdScrAbove = (mark: number) => {
  let subjectCount: {[key:string]:number} = {};
  let totalStudent = datas.students.length;

  datas.students.forEach((student) => {
    student.marks.forEach((std) => {
      const subject = std.subject;
      const stdMark = std.mark;
      if (!subjectCount[subject]) {
        subjectCount[subject] = 0;
      }
      if (stdMark > mark) {
        subjectCount[subject]++;
      }
    });
  });
  let subjectPercentage: {[key:string]:number} = {};
  let lowerstPercentage: number;
  Object.keys(subjectCount).forEach((subject) => {
    subjectPercentage[subject] = (subjectCount[subject] / totalStudent) * 100;
  });
  let lowest: number[] = Object.values(subjectPercentage);
  lowerstPercentage = Math.min(...lowest);

  let lowestSubject = Object.keys(subjectPercentage).filter(
    (subject) => subjectPercentage[subject] === lowerstPercentage
  );
  return lowestSubject.join(", ");
};

export const subWhichLowPercStdScrBelow = (mark: number) => {
  let subjectCount: {[key:string]:number} = {};
  let totalStudent = datas.students.length;

  datas.students.forEach((student) => {
    student.marks.forEach((std) => {
      const subject = std.subject;
      const stdMark = std.mark;
      if (!subjectCount[subject]) {
        subjectCount[subject] = 0;
      }
      if (stdMark < mark) {
        subjectCount[subject]++;
      }
    });
  });
  let subjectPercentage: {[key:string]:number} = {};
  let lowerstPercentage: number;
  Object.keys(subjectCount).forEach((subject) => {
    subjectPercentage[subject] = (subjectCount[subject] / totalStudent) * 100;
  });
  let lowest: number[] = Object.values(subjectPercentage);
  lowerstPercentage = Math.min(...lowest);

  let lowestSubject = Object.keys(subjectPercentage).filter(
    (subject) => subjectPercentage[subject] === lowerstPercentage
  );
  return lowestSubject.join(", ");
};

export const percStdScoredAbovClasAvrg = () => {
  const totalMark: { [key: string]: number } = {};
  const studentCount = datas.students.length;
  subjects.forEach((subject) => {
    totalMark[subject] = 0;
  });

  datas.students.forEach((student) => {
    student.marks.forEach((subj) => {
      totalMark[subj.subject] += subj.mark;
    });
  });

  const averageMark: { [key: string]: number } = {};
  console.log(averageMark);
  subjects.forEach((subject: string) => {
    averageMark[subject] = totalMark[subject] / studentCount;
  });
  console.log(averageMark);

  const averagePercentage: { [key: string]: number } = {};
  subjects.forEach((subject) => {
    const aboveAvrgCount = datas.students.filter((student) => {
      return (
        student.marks.find((mark) => mark.subject == subject)?.mark! >
        averageMark[subject]
      );
    }).length;
    averagePercentage[subject] = (aboveAvrgCount / studentCount) * 100;
  });
  const averageArr = Object.keys(averagePercentage).map((sub) => {
    return `${sub}=${averagePercentage[sub]}%`;
  });
  return averageArr.join(", ");
};
percStdScoredAbovClasAvrg();
export const percStdScoredBelowClasAvrg = () => {
  const totalMark:{[key:string]:number} = {};
  const studentCount = datas.students.length;
  subjects.forEach((subject) => {
    totalMark[subject] = 0;
  });

  datas.students.forEach((student) => {
    student.marks.forEach((subj) => {
      totalMark[subj.subject] += subj.mark;
    });
  });
  const averageMark: {[key:string]:number} = {};
  subjects.forEach((subject) => {
    averageMark[subject] = totalMark[subject] / studentCount;
  });

  const averagePercentage: {[key:string]:number} = {};
  subjects.forEach((subject) => {
    const aboveAvrgCount: number | undefined = datas.students.filter(
      (student) => {
        return (
          student.marks.find((mark) => mark.subject == subject)?.mark! <
          averageMark[subject]
        );
      }
    ).length;
    averagePercentage[subject] = (aboveAvrgCount / studentCount) * 100;
  });
  const averageArr = Object.keys(averagePercentage).map((sub) => {
    return `${sub}=${averagePercentage[sub]}%`;
  });
  return averageArr.join(", ");
};

export const stdPercentageAboveClsAvrg = () => {
  const totalMark: {[key:string]:number} = {};
  const studentCount = datas.students.length;
  const subjectCount = subjects.length;
  subjects.forEach((subject) => {
    totalMark[subject] = 0;
  });

  datas.students.forEach((student) => {
    student.marks.forEach((subj) => {
      totalMark[subj.subject] += subj.mark;
    });
  });

  const averageMark: AverageMark = {};
  subjects.forEach((subject) => {
    averageMark[subject] = totalMark[subject] / studentCount;
  });
  const scoreAboveCount: { [key: string]: number } = {};
  subjects.forEach((subject) => {
    const aboveAvrgCount: number = datas.students.filter((student) => {
      return (
        student.marks.find((mark) => mark.subject == subject)?.mark! >
        averageMark[subject]
      );
    }).length;
    scoreAboveCount[subject] = aboveAvrgCount;
  });
  const newArr = Object.values(scoreAboveCount);
  const updatedArr = newArr.filter((arr) => arr != 0);
  const percentage = (updatedArr.length / subjectCount) * 100;
  return `${percentage}%`;
};

export const stdPercentageBelowClsAvrg = () => {
  const totalMark: {[key:string]:number} = {};
  const studentCount = datas.students.length;
  const subjectCount = subjects.length;
  subjects.forEach((subject) => {
    totalMark[subject] = 0;
  });

  datas.students.forEach((student) => {
    student.marks.forEach((subj) => {
      totalMark[subj.subject] += subj.mark;
    });
  });

  const averageMark: AverageMark = {};
  subjects.forEach((subject) => {
    averageMark[subject] = totalMark[subject] / studentCount;
  });
  const scoreAboveCount: AveragePercentage = {};
  subjects.forEach((subject) => {
    const aboveAvrgCount: number = datas.students.filter((student) => {
      return (
        student.marks.find((mark) => mark.subject == subject)?.mark! <
        averageMark[subject]
      );
    }).length;
    scoreAboveCount[subject] = aboveAvrgCount;
  });
  const newArr = Object.values(scoreAboveCount);
  const updatedArr = newArr.filter((arr) => arr != 0);
  const percentage = (updatedArr.length / subjectCount) * 100;
  return `${percentage}%`;
};

export const stdScoredAbovClsAvrgAllSub = () => {
  const totalMark: {[key:string]:number} = {};
  const studentCount = datas.students.length;
  const subjectCount = subjects.length;
  subjects.forEach((subject) => {
    totalMark[subject] = 0;
  });
  datas.students.forEach((student) => {
    student.marks.forEach((subj) => {
      totalMark[subj.subject] += subj.mark;
    });
  });
  const averageMark: {[key:string]:number} = {};
  subjects.forEach((subject) => {
    averageMark[subject] = totalMark[subject] / studentCount;
  });
  console.log(averageMark);

  const studentScored: string[] = [];
  datas.students.forEach((student) => {
    let count = student.marks.filter(
      (mark) => mark.mark > averageMark[mark.subject]
    );
    console.log(count);
    if (count.length == subjectCount) {
      studentScored.push(student.name);
    }
  });
  if (studentScored.length != 0) {
    return studentScored.join("");
  } else return `No student Scored Above Average`;
};

export const stdScoredBelowClsAvrgAllSub = () => {
  const totalMark: {[key:string]:number} = {};
  const studentCount = datas.students.length;
  const subjectCount = subjects.length;
  subjects.forEach((subject) => {
    totalMark[subject] = 0;
  });
  datas.students.forEach((student) => {
    student.marks.forEach((subj) => {
      totalMark[subj.subject] += subj.mark;
    });
  });
  const averageMark: {[key:string]:number} = {};
  subjects.forEach((subject) => {
    averageMark[subject] = totalMark[subject] / studentCount;
  });
  console.log(averageMark);

  const studentScored: string[] = [];
  datas.students.forEach((student) => {
    let count = student.marks.filter(
      (mark) => mark.mark < averageMark[mark.subject]
    );
    console.log(count);
    if (count.length == subjectCount) {
      studentScored.push(student.name);
    }
  });
  if (studentScored.length != 0) {
    return studentScored.join("");
  } else return `No student Scored below Average`;
};
// console.log(stdScoredBelowClsAvrgAllSub());

export const stdScoredAbvClsAvrgMajSub = () => {
  const totalMark: {[key:string]:number} = {};
  const studentCount = datas.students.length;
  const subjectCount = subjects.length;
  subjects.forEach((subject) => {
    totalMark[subject] = 0;
  });
  datas.students.forEach((student) => {
    student.marks.forEach((subj) => {
      totalMark[subj.subject] += subj.mark;
    });
  });
  const averageMark: {[key:string]:number} = {};
  subjects.forEach((subject) => {
    averageMark[subject] = totalMark[subject] / studentCount;
  });
  console.log(averageMark);

  const studentScored: string[] = [];
  datas.students.forEach((student) => {
    let count = student.marks.filter(
      (mark) => mark.mark > averageMark[mark.subject]
    );
    console.log(count);
    if (count.length >= subjectCount / 2) {
      studentScored.push(student.name);
    }
  });
  if (studentScored.length != 0) {
    return studentScored.join(", ");
  } else return `No students scored`;
};

export const stdScoredBelClsAvrgMajSub = () => {
  const totalMark: {[key:string]:number} = {};
  const studentCount = datas.students.length;
  const subjectCount = subjects.length;
  subjects.forEach((subject) => {
    totalMark[subject] = 0;
  });
  datas.students.forEach((student) => {
    student.marks.forEach((subj) => {
      totalMark[subj.subject] += subj.mark;
    });
  });
  const averageMark: {[key:string]:number} = {};
  subjects.forEach((subject) => {
    averageMark[subject] = totalMark[subject] / studentCount;
  });
  console.log(averageMark);

  const studentScored: string[] = [];
  datas.students.forEach((student) => {
    let count = student.marks.filter(
      (mark) => mark.mark < averageMark[mark.subject]
    );
    console.log(count);
    if (count.length >= subjectCount / 2) {
      studentScored.push(student.name);
    }
  });
  if (studentScored.length != 0) {
    return studentScored.join(", ");
  } else return `No students scored`;
};

export const subWhichMajStdScrAbvClsAvrgMark = () => {
  const totalMark: {[key:string]:number} = {};
  const studentCount = datas.students.length;
  subjects.forEach((subject) => {
    totalMark[subject] = 0;
  });
  datas.students.forEach((student) => {
    student.marks.forEach((subj) => {
      totalMark[subj.subject] += subj.mark;
    });
  });
  const averageMark: {[key:string]:number} = {};
  subjects.forEach((subject) => {
    averageMark[subject] = totalMark[subject] / studentCount;
  });
  console.log(averageMark);

  const newArray: { subject: string; mark: number }[] = [];
  datas.students.forEach((student) => {
    newArray.push(...student.marks);
  });
  let filteredArr = newArray
    .filter((arr) => arr.mark > averageMark[arr.subject])
    .map((sub) => sub.subject);
  let newFilteredArr = filteredArr.filter(
    (newsub, index) => filteredArr.indexOf(newsub) === index
  );
  return newFilteredArr.join(", ");
};

export const subWhichMajStdScrBelClsAvrgMark = () => {
  const totalMark: {[key:string]:number} = {};
  const studentCount = datas.students.length;
  subjects.forEach((subject) => {
    totalMark[subject] = 0;
  });
  datas.students.forEach((student) => {
    student.marks.forEach((subj) => {
      totalMark[subj.subject] += subj.mark;
    });
  });
  const averageMark: {[key:string]:number} = {};
  subjects.forEach((subject) => {
    averageMark[subject] = totalMark[subject] / studentCount;
  });
  console.log(averageMark);

  const newArray: { subject: string; mark: number }[] = [];
  datas.students.forEach((student) => {
    newArray.push(...student.marks);
  });
  let filteredArr = newArray
    .filter((arr) => arr.mark < averageMark[arr.subject])
    .map((sub) => sub.subject);
  let newFilteredArr = filteredArr.filter(
    (newsub, index) => filteredArr.indexOf(newsub) === index
  );
  return newFilteredArr.join(", ");
};

export const showStdPercScrdAboveAvrg = (name: string) => {
  const student: Student = datas.students.find(
    (student) => student.name == name
  );
  const StdTotal: number = student?student.marks.reduce(
    (fun, curr) => (fun = fun + curr.mark),0
    
  ):0
  const average = StdTotal / subjects.length;

  const subjectCount = subjects.map(() => ({ count: 0, total: 0 }));

  console.log(subjectCount);
  datas.students.forEach((student) => {
    student.marks.forEach((mark, index) => {
      if (mark.mark > average) {
        subjectCount[index].count += 1;
      }
      subjectCount[index].total += 1;
    });
  });
  const newArr = student?.marks.map((mark, index) => {
    const percentage =
      (subjectCount[index].count / subjectCount[index].total) * 100;

    return `${mark.subject}=${percentage}%`;
  });
  return newArr?.join(" ");
};

export const showStdPercScrdBelowAvrg = (name: string) => {
  const student: Student = datas.students.find(
    (student) => student.name == name
  );
  const StdTotal: number  = student?student.marks.reduce(
    (fun, curr) => (fun = fun + curr.mark),
    0
  ):0
  const average = StdTotal / subjects.length;

  const subjectCount = subjects.map(() => ({ count: 0, total: 0 }));

  console.log(subjectCount);
  datas.students.forEach((student) => {
    student.marks.forEach((mark, index) => {
      if (mark.mark < average) {
        subjectCount[index].count += 1;
      }
      subjectCount[index].total += 1;
    });
  });
  const newArr = student?.marks.map((mark, index) => {
    const percentage =
      (subjectCount[index].count / subjectCount[index].total) * 100;

    return `${mark.subject}=${percentage}%`;
  });
  return newArr?.join(" ");
};

export const showPercScrAbvAvrgMarksInAtleastOneSub = (name: string) => {
  return showStdPercScrdAboveAvrg(name);
};

export const showPercScrBelAvrgMarksInAtleastOneSub = (name: string) => {
  return showStdPercScrdBelowAvrg(name);
};
export const showStdScordAbvAvrMarkOfSpecStdAllSUb = (name: string) => {
  const student: Student = datas.students.find(
    (student) => student.name == name
  );
  const StdTotal: number = student?student.marks.reduce(
    (fun, curr) => (fun = fun + curr.mark),
    0
  ):0
  const average = StdTotal / subjects.length;
  const studentName = students.map((std) => ({
    stdName: std,
    count: 0,
    total: 0,
  }));
  console.log(average);

  datas.students.forEach((student) => {
    student.marks.forEach((mark) => {
      if (mark.mark > average) {
        const newStd: NewStudent = studentName.find(
          (std) => std.stdName == student.name
        )!;
        newStd.count += 1;
      }
    });
  });
  console.log(studentName);
  const newStdArr = studentName.filter((std) => std.count === subjects.length);
  const nameArr = newStdArr.map((name) => name.stdName);
  if (nameArr.length == 0) {
    return `No students found`;
  } else {
    return nameArr.join(", ");
  }
};

export const showStdScordBelAvrMarkOfSpecStdAllSUb = (name: string) => {
  const student: Student = datas.students.find(
    (student) => student.name == name
  );
  const StdTotal: number =student?student.marks.reduce(
    (fun, curr) => (fun = fun + curr.mark),
    0
  ):0
  const average = StdTotal / subjects.length;
  const studentName = students.map((std) => ({
    stdName: std,
    count: 0,
  }));
  console.log(average);

  datas.students.forEach((student) => {
    student.marks.forEach((mark) => {
      if (mark.mark < average) {
        const newStd: NewStudent = studentName.find(
          (std) => std.stdName == student.name
        )!;
        newStd.count += 1;
      }
    });
  });
  console.log(studentName);
  const newStdArr = studentName.filter((std) => std.count === subjects.length);
  const nameArr = newStdArr.map((name) => name.stdName);
  if (nameArr.length == 0) {
    return `No students found`;
  } else {
    return nameArr.join(", ");
  }
};

export const showSubjectAboveAvrgMark = (name: string) => {
  const totalArray: UpdateSubject []= updatedSubjectObject();
  const newTotalArray = totalArray.map((arr) => ({
    total: (arr.total as number) / Number(arr.count),
    subject: arr.subject,
  }));
  console.log(newTotalArray);

  const student: Student = datas.students.find(
    (student) => student.name == name
  );
  const StdTotal: number = student?student.marks.reduce(
    (fun, curr) => (fun = fun + curr.mark),
    0
  ):0
  const average = StdTotal / subjects.length;

  const subjectFilter = newTotalArray
    .filter((arr) => arr.total > average)
    .map((sub) => sub.subject);
  console.log(subjectFilter);
  if (subjectFilter.length == 0) {
    return `There is no Subject`;
  } else {
    return subjectFilter.join(", ");
  }
};

export const showSubjectBelowAvrgMark = (name: string) => {
  const totalArray: UpdateSubject[] = updatedSubjectObject();
  console.log(totalArray);

  const newTotalArray: { [key: string]: number | string }[] = totalArray.map(
    (arr) => ({
      total: (arr.total as number) / Number(arr.count),
      subject: arr.subject,
    })
  );
  console.log(newTotalArray);

  const student: Student = datas.students.find(
    (student) => student.name == name
  );
  const StdTotal: number =student? student.marks.reduce(
    (fun, curr) => (fun = fun + curr.mark),
    0
  ):0
  const average = StdTotal / subjects.length;

  const subjectFilter = newTotalArray
    .filter((arr) => (arr.total as number) < average)
    .map((sub) => sub.subject);
  console.log(subjectFilter);
  if (subjectFilter.length == 0) {
    return `There is no Subject`;
  } else {
    return subjectFilter.join(", ");
  }
};
console.log(showSubjectBelowAvrgMark("Binu"));

export const showSubStdScrdAbvAvrg = (name: string) => {
  const student: Student = datas.students.find(
    (student) => student.name == name
  );
  const StdTotal: number = student?student.marks.reduce(
    (fun, curr) => (fun = fun + curr.mark),
    0
  ):0;
  const average: number = StdTotal / subjects.length;
  const subjectObject = subjects.map((sub) => {
    return { subject: sub, count: 0, total: 0 };
  });
  console.log(subjectObject);
  datas.students.forEach((student) => {
    student.marks.forEach((mark) => {
      if (mark.mark > average) {
        subjectObject.forEach((sub) => {
          if (sub.subject == mark.subject) {
            sub.count++;
          }
          sub.total++;
        });
      }
    });
  });

  const HighPerc = subjectObject.reduce((max, curr) =>
    max.count > curr.count ? max : curr
  ).subject;

  return HighPerc;
};

export const showSubStdScrdBelAvrg = (name: string) => {
  const student: Student = datas.students.find(
    (student) => student.name == name
  );
  const StdTotal: number = student?student.marks.reduce(
    (fun, curr) => (fun = fun + curr.mark),
    0
  ):0
  const average: number = StdTotal / subjects.length;
  const subjectObject = subjects.map((sub) => {
    return { subject: sub, count: 0, total: 0 };
  });
  console.log(subjectObject);
  datas.students.forEach((student) => {
    student.marks.forEach((mark) => {
      if (mark.mark < average) {
        subjectObject.forEach((sub) => {
          if (sub.subject == mark.subject) {
            sub.count++;
          }
          sub.total++;
        });
      }
    });
  });

  const HighPerc = subjectObject.reduce((max, curr) =>
    max.count > curr.count ? max : curr
  ).subject;

  return HighPerc;
};

export const showSubLowPercStdScrdAbvAvrg = (name: string) => {
  const student: Student = datas.students.find(
    (student) => student.name == name
  );
  const StdTotal: number =student? student?.marks.reduce(
    (fun, curr) => (fun = fun + curr.mark),
    0
  ):0
  const average: number = StdTotal / subjects.length;
  const subjectObject = subjects.map((sub) => {
    return { subject: sub, count: 0, total: 0 };
  });
  console.log(subjectObject);
  datas.students.forEach((student) => {
    student.marks.forEach((mark) => {
      if (mark.mark > average) {
        subjectObject.forEach((sub) => {
          if (sub.subject == mark.subject) {
            sub.count++;
          }
          sub.total++;
        });
      }
    });
  });

  const HighPerc = subjectObject.reduce((max, curr) =>
    max.count < curr.count ? max : curr
  ).subject;

  return HighPerc;
};

export const showSubLowPercStdScrdBelAvrg = (name: string) => {
  const student: Student = datas.students.find(
    (student) => student.name == name
  );
  const StdTotal: number = student?student?.marks.reduce(
    (fun, curr) => (fun = fun + curr.mark),
    0
  ):0
  const average: number = StdTotal / subjects.length;
  const subjectObject = subjects.map((sub) => {
    return { subject: sub, count: 0, total: 0 };
  });
  console.log(subjectObject);
  datas.students.forEach((student) => {
    student.marks.forEach((mark) => {
      if (mark.mark < average) {
        subjectObject.forEach((sub) => {
          if (sub.subject == mark.subject) {
            sub.count++;
          }
          sub.total++;
        });
      }
    });
  });

  const HighPerc = subjectObject.reduce((max, curr) => {
    return max.count < curr.count ? max : curr;
  }).subject;
  return HighPerc;
};

export const showPercOfStdScrdAbvMark = () => {
  // let totalMark=0
  // datas.students.forEach(student=>{
  //   const mark=student.marks.reduce((call,initial)=>call+=initial.mark,0)
  //   totalMark=totalMark+mark
  // })
  // const averageMark=totalMark/students.length
  // console.log(averageMark);

  const totalMark: {[key:string]:number} = {};
  const studentCount = datas.students.length;
  const subjectCount = subjects.length;

  subjects.forEach((subject) => {
    totalMark[subject] = 0;
  });
  datas.students.forEach((student) => {
    student.marks.forEach((subj) => {
      totalMark[subj.subject] += subj.mark;
    });
  });
  const averageMark: {[key:string]:number} = {};
  subjects.forEach((subject) => {
    averageMark[subject] = totalMark[subject] / studentCount;
  });
  console.log(averageMark);

  const studentObject = students.map((std) => ({
    name: std,
    count: 0,
    total: 0,
  }));
  console.log(studentObject);

  datas.students.forEach((student) => {
    const countSub = student.marks.filter((mark) => {
      return mark.mark > averageMark[mark.subject];
    });
    console.log(countSub);
    if (countSub.length == subjectCount) {
      studentObject.forEach((stud) => {
        if (stud.name == student.name) {
          stud.count++;
        }
      });
    }
  });
  const mainStudent = studentObject.filter((std) => std.count == 1).length;
  if (mainStudent == 0) {
    return `No student scored`;
  } else {
    const percentage = (mainStudent / studentCount) * 100;
    return `${percentage}%`;
  }
};

export const showPercOfStdScrdBelMark = () => {
  const totalMark: {[key:string]:number} = {};
  const studentCount = datas.students.length;
  const subjectCount = subjects.length;

  subjects.forEach((subject) => {
    totalMark[subject] = 0;
  });
  datas.students.forEach((student) => {
    student.marks.forEach((subj) => {
      totalMark[subj.subject] += subj.mark;
    });
  });
  const averageMark: {[key:string]:number} = {};
  subjects.forEach((subject) => {
    averageMark[subject] = totalMark[subject] / studentCount;
  });
  console.log(averageMark);

  const studentObject = students.map((std) => ({
    name: std,
    count: 0,
    total: 0,
  }));
  console.log(studentObject);

  datas.students.forEach((student) => {
    const countSub = student.marks.filter((mark) => {
      return mark.mark < averageMark[mark.subject];
    });
    console.log(countSub);
    if (countSub.length == subjectCount) {
      studentObject.forEach((stud) => {
        if (stud.name == student.name) {
          stud.count++;
        }
      });
    }
  });
  const mainStudent = studentObject.filter((std) => std.count == 1).length;
  if (mainStudent == 0) {
    return `No student scored`;
  } else {
    const percentage = (mainStudent / studentCount) * 100;
    return `${percentage}%`;
  }
};

export const ShowPerStdScrdAbvAvrgMinOneSub = () => {
  const totalMark: {[key:string]:number} = {};
  const studentCount = datas.students.length;

  subjects.forEach((subject) => {
    totalMark[subject] = 0;
  });
  datas.students.forEach((student) => {
    student.marks.forEach((subj) => {
      totalMark[subj.subject] += subj.mark;
    });
  });
  const averageMark: {[key:string]:number} = {};
  subjects.forEach((subject) => {
    averageMark[subject] = totalMark[subject] / studentCount;
  });
  console.log(averageMark);

  const studentObject = students.map((std) => ({
    name: std,
    count: 0,
    total: 0,
  }));
  console.log(studentObject);

  datas.students.forEach((student) => {
    const countSub = student.marks.filter((mark) => {
      return mark.mark > averageMark[mark.subject];
    });
    console.log(countSub);
    if (countSub.length >= 1) {
      studentObject.forEach((stud) => {
        if (stud.name == student.name) {
          stud.count++;
        }
      });
    }
  });
  const mainStudent = studentObject.filter((std) => std.count == 1).length;
  if (mainStudent == 0) {
    return `No student scored`;
  } else {
    const percentage = (mainStudent / studentCount) * 100;
    return `${percentage}%`;
  }
};

export const ShowPerStdScrdBelAvrgMinOneSub = () => {
  const totalMark: {[key:string]:number} = {};
  const studentCount = datas.students.length;

  subjects.forEach((subject) => {
    totalMark[subject] = 0;
  });
  datas.students.forEach((student) => {
    student.marks.forEach((subj) => {
      totalMark[subj.subject] += subj.mark;
    });
  });
  const averageMark: {[key:string]:number} = {};
  subjects.forEach((subject) => {
    averageMark[subject] = totalMark[subject] / studentCount;
  });
  console.log(averageMark);

  const studentObject = students.map((std) => ({
    name: std,
    count: 0,
    total: 0,
  }));
  console.log(studentObject);

  datas.students.forEach((student) => {
    const countSub = student.marks.filter((mark) => {
      return mark.mark < averageMark[mark.subject];
    });
    console.log(countSub);
    if (countSub.length >= 1) {
      studentObject.forEach((stud) => {
        if (stud.name == student.name) {
          stud.count++;
        }
      });
    }
  });
  const mainStudent = studentObject.filter((std) => std.count == 1).length;
  if (mainStudent == 0) {
    return `No student scored`;
  } else {
    const percentage = (mainStudent / studentCount) * 100;
    return `${percentage}%`;
  }
};

export const showStdScrdAbvAvrgAllSub = () => {
  const totalMark: {[key:string]:number} = {};
  const studentCount = datas.students.length;

  subjects.forEach((subject) => {
    totalMark[subject] = 0;
  });
  datas.students.forEach((student) => {
    student.marks.forEach((subj) => {
      totalMark[subj.subject] += subj.mark;
    });
  });
  const averageMark: {[key:string]:number} = {};
  subjects.forEach((subject) => {
    averageMark[subject] = totalMark[subject] / studentCount;
  });
  console.log(averageMark);

  const studentObject = students.map((std) => ({
    name: std,
    count: 0,
  }));
  console.log(studentObject);
  datas.students.forEach((student) => {
    const countSub = student.marks.filter((mark) => {
      return mark.mark > averageMark[mark.subject];
    });
    console.log(countSub);
    if (countSub.length == subjects.length) {
      studentObject.forEach((stud) => {
        if (stud.name == student.name) {
          stud.count++;
        }
      });
    }
  });
  const stdName = studentObject
    .filter((std) => std.count == 1)
    .map((std) => std.name);
  console.log(stdName);
  if (stdName.length == 0) {
    return `There is no student`;
  } else {
    return stdName.join(", ");
  }
};

export const showStdScrdBelAvrgAllSub = () => {
  const totalMark: {[key:string]:number} = {};
  const studentCount = datas.students.length;

  subjects.forEach((subject) => {
    totalMark[subject] = 0;
  });
  datas.students.forEach((student) => {
    student.marks.forEach((subj) => {
      totalMark[subj.subject] += subj.mark;
    });
  });
  const averageMark: {[key:string]:number} = {};
  subjects.forEach((subject) => {
    averageMark[subject] = totalMark[subject] / studentCount;
  });
  console.log(averageMark);

  const studentObject = students.map((std) => ({
    name: std,
    count: 0,
  }));
  console.log(studentObject);
  datas.students.forEach((student) => {
    const countSub = student.marks.filter((mark) => {
      return mark.mark < averageMark[mark.subject];
    });
    console.log(countSub);
    if (countSub.length == subjects.length) {
      studentObject.forEach((stud) => {
        if (stud.name == student.name) {
          stud.count++;
        }
      });
    }
  });
  const stdName = studentObject
    .filter((std) => std.count == 1)
    .map((std) => std.name);
  console.log(stdName);
  if (stdName.length == 0) {
    return `There is no student`;
  } else {
    return stdName.join(", ");
  }
};

export const showStdScrdAbvAvrgInMajoritySub = () => {
  const totalMark: {[key:string]:number} = {};
  const studentCount = datas.students.length;

  subjects.forEach((subject) => {
    totalMark[subject] = 0;
  });
  datas.students.forEach((student) => {
    student.marks.forEach((subj) => {
      totalMark[subj.subject] += subj.mark;
    });
  });
  const averageMark: {[key:string]:number} = {};
  subjects.forEach((subject) => {
    averageMark[subject] = totalMark[subject] / studentCount;
  });
  console.log(averageMark);
  const studentObject = students.map((std) => ({
    name: std,
    count: 0,
  }));
  console.log(studentObject);
  datas.students.forEach((student) => {
    const countSub = student.marks.filter((mark) => {
      return mark.mark > averageMark[mark.subject];
    });
    console.log(countSub);
    if (countSub.length > subjects.length / 2) {
      studentObject.forEach((stud) => {
        if (stud.name == student.name) {
          stud.count++;
        }
      });
    }
  });
  const stdName = studentObject
    .filter((std) => std.count == 1)
    .map((std) => std.name);
  console.log(stdName);
  if (stdName.length == 0) {
    return `There is no student`;
  } else {
    return stdName.join(", ");
  }
};

export const showStdScrdBelAvrgInMajoritySub = () => {
  const totalMark: {[key:string]:number} = {};
  const studentCount = datas.students.length;

  subjects.forEach((subject) => {
    totalMark[subject] = 0;
  });
  datas.students.forEach((student) => {
    student.marks.forEach((subj) => {
      totalMark[subj.subject] += subj.mark;
    });
  });
  const averageMark: {[key:string]:number} = {};
  subjects.forEach((subject) => {
    averageMark[subject] = totalMark[subject] / studentCount;
  });
  console.log(averageMark);
  const studentObject = students.map((std) => ({
    name: std,
    count: 0,
  }));
  console.log(studentObject);
  datas.students.forEach((student) => {
    const countSub = student.marks.filter((mark) => {
      return mark.mark < averageMark[mark.subject];
    });
    console.log(countSub);
    if (countSub.length > subjects.length / 2) {
      studentObject.forEach((stud) => {
        if (stud.name == student.name) {
          stud.count++;
        }
      });
    }
  });
  const stdName = studentObject
    .filter((std) => std.count == 1)
    .map((std) => std.name);
  console.log(stdName);
  if (stdName.length == 0) {
    return `There is no student`;
  } else {
    return stdName.join(", ");
  }
};

export const showSubMajorityStdScrdAbvAvrg = () => {
  const totalMark: {[key:string]:number} = {};
  const studentCount = datas.students.length;

  subjects.forEach((subject) => {
    totalMark[subject] = 0;
  });
  datas.students.forEach((student) => {
    student.marks.forEach((subj) => {
      totalMark[subj.subject] += subj.mark;
    });
  });
  const averageMark: {[key:string]:number} = {};
  subjects.forEach((subject) => {
    averageMark[subject] = totalMark[subject] / studentCount;
  });
  console.log(averageMark);

  const subjectObject = subjects.map((sub) => ({ subject: sub, count: 0 }));
  console.log(subjectObject);

  datas.students.forEach((student) => {
    student.marks.forEach((mark) => {
      if (mark.mark > averageMark[mark.subject]) {
        subjectObject.forEach((sub) => {
          if (sub.subject == mark.subject) {
            sub.count++;
          }
        });
      }
    });
  });

  const subjectArr = subjectObject
    .filter((sub) => sub.count > students.length / 2)
    .map((sub) => sub.subject);
  if (subjectArr.length == 0) {
    return `There is no subject`;
  } else {
    return subjectArr.join(", ");
  }
};

export const showSubMajorityStdScrdBelAvrg = () => {
  const totalMark: {[key:string]:number} = {};
  const studentCount = datas.students.length;

  subjects.forEach((subject) => {
    totalMark[subject] = 0;
  });
  datas.students.forEach((student) => {
    student.marks.forEach((subj) => {
      totalMark[subj.subject] += subj.mark;
    });
  });
  const averageMark: {[key:string]:number} = {};
  subjects.forEach((subject) => {
    averageMark[subject] = totalMark[subject] / studentCount;
  });
  console.log(averageMark);

  const subjectObject = subjects.map((sub) => ({ subject: sub, count: 0 }));
  console.log(subjectObject);

  datas.students.forEach((student) => {
    student.marks.forEach((mark) => {
      if (mark.mark < averageMark[mark.subject]) {
        subjectObject.forEach((sub) => {
          if (sub.subject == mark.subject) {
            sub.count++;
          }
        });
      }
    });
  });

  const subjectArr = subjectObject
    .filter((sub) => sub.count > students.length / 2)
    .map((sub) => sub.subject);
  if (subjectArr.length == 0) {
    return `There is no subject`;
  } else {
    return subjectArr.join(", ");
  }
};

export const showPercOfStdScrdAbvAvrgSpStd = (name: string) => {
  let stdAverage = 0;
  let subjectTotal = 0;
  const findStd = datas.students.find((std) => std.name == name);
  findStd?.marks.forEach((sub) => {
    subjectTotal += sub.mark;
  });
  stdAverage = subjectTotal / subjects.length;

  const studentObject = students.map((std) => ({
    name: std,
    count: 0,
    total: 0,
  }));
  console.log(studentObject);
  datas.students.forEach((student) => {
    if (student.name != name) {
      const subjectCount = student.marks.filter(
        (mark) => mark.mark > stdAverage
      ).length;
      if (subjectCount > subjects.length / 2) {
        studentObject.forEach((std) => {
          if (std.name == student.name) {
            std.count++;
          }
        });
      }
    }
  });
  const stdFiltered = studentObject.filter((std) => std.count == 1).length;
  const percentageOfStd = (stdFiltered / (students.length - 1)) * 100;

  return `${percentageOfStd}%`;
};

export const showPerStdScrdBelAvrgSpStd = (name: string) => {
  let stdAverage = 0;
  let subjectTotal = 0;
  const findStd = datas.students.find((std) => std.name == name);
  findStd?.marks.forEach((sub) => {
    subjectTotal += sub.mark;
  });
  stdAverage = subjectTotal / subjects.length;

  const studentObject = students.map((std) => ({
    name: std,
    count: 0,
    total: 0,
  }));
  console.log(studentObject);
  datas.students.forEach((student) => {
    if (student.name != name) {
      const subjectCount = student.marks.filter(
        (mark) => mark.mark < stdAverage
      ).length;
      if (subjectCount > subjects.length / 2) {
        studentObject.forEach((std) => {
          if (std.name == student.name) {
            std.count++;
          }
        });
      }
    }
  });
  const stdFiltered = studentObject.filter((std) => std.count == 1).length;
  const percentageOfStd = (stdFiltered / (students.length - 1)) * 100;

  return `${Math.floor(percentageOfStd)}%`;
};

export const showSubScrdAbvAvrgMark = (name: string) => {
  let stdAverage = 0;
  let subjectTotal = 0;
  const findStd = datas.students.find((std) => std.name == name);
  findStd?.marks.forEach((sub) => {
    subjectTotal += sub.mark;
  });
  stdAverage = subjectTotal / subjects.length;
  const subName: string[] = [];

  datas.students.forEach((student) => {
    if (student.name != name) {
      student.marks
        .filter((sub) => sub.mark > stdAverage)
        .forEach((newSub) => {
          subName.push(newSub.subject);
        });
    }
  });
  const subArr = subName.filter((sub, ind) => subName.indexOf(sub) == ind);
  console.log(subArr);
  if (subArr.length == 0) {
    return `No subjects found`;
  } else {
    return subArr.join(", ");
  }
};

export const showSubScrdBelAvrgMark = (name: string) => {
  let stdAverage = 0;
  let subjectTotal = 0;
  const findStd = datas.students.find((std) => std.name == name);
  findStd?.marks.forEach((sub) => {
    subjectTotal += sub.mark;
  });
  stdAverage = subjectTotal / subjects.length;
  const subName: string[] = [];

  datas.students.forEach((student) => {
    if (student.name != name) {
      student.marks
        .filter((sub) => sub.mark < stdAverage)
        .forEach((newSub) => {
          subName.push(newSub.subject);
        });
    }
  });
  const subArr = subName.filter((sub, ind) => subName.indexOf(sub) == ind);
  console.log(subArr);
  if (subArr.length == 0) {
    return `No subjects found`;
  } else {
    return subArr.join(", ");
  }
};

////////////////////////////////////////////////////////////////////

function subjectObject() {
  return datas.students.reduce((prev: Previous, value) => {
    value.marks.forEach((item) => {
      const subject = item.subject;
      const mark = item.mark;
      if (!prev[subject]) {
        prev[subject] = { total: 0, count: 0 };
      }
      prev[subject].total += mark;
      prev[subject].count += 1;
    });

    return prev;
  }, {});
}
console.log(subjectObject());

function updatedSubjectObject() {
  const subjectArray: Previous = subjectObject();
  console.log(subjectArray);

  const updatedArrayOfObj: UpdateSubject [] = Object.keys(subjectArray).map(
    (key) => ({ ...subjectArray[key], subject: key})
  );
  console.log(updatedArrayOfObj);

  return updatedArrayOfObj;
}
console.log(updatedSubjectObject());
