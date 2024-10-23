import {
  className,
  idsOfStudents,
  teacherName,
  studentsAllName,
  subjectName,
  subjectMark,
  averageMark,
  totalMark,
  subjectAverage,
  subjectTotal,
  topStudentInSubject,
  weakStudentInSubject,
  highestTotalMark,
  lowestTotalMark,
  highestAvrgSubject,
  lowestAvrgSubject,
  overallAvrgMark,
  overallTotalMark,
  avrgMarksForSubjects,
  totalMarksForSubject,
  highTotalMarkSub,
  lowTotalMarkSub,
  studentWithHighAvrgMark,
  studentWithLowAvrgMark,
  studentWithHighMark,
  studentWithLowMark,
  stdCountAboveMark,
  stdCountBelowMark,
  stdCountMarkASub,
  stdCountMarkBSub,
  stdPercentageAboveMark,
  stdPercentageBelowMark,
  stdPercentageAMark,
  stdPercentageBMark,
  stdHighMarkPerc,
  stdLowMarkPerc,
  subHighMarkPerc,
  subLowMarkPerc,
  TopMarkPercStdInSub,
  weakMarkPercStdInSub,
  highPercSub,
  LowPercSub,
  findSubAboveCerMark,
  findSubBelowCerMark,
  findSubAverageAllAbove,
  findSubAverageAllBelow,
  stdTopAtleastOneSub,
  stdLowAtleastOneSub,
  avrgMarkEachStdEachSub,
  totalMarkEachStdEachSub,
  stdWithTopInSub,
  stdWithLowInSub,
  highestMarkSub,
  lowestMarkSub,
  stdScoredAbvClsAvrg,
  stdScoredBelClsAverage,
  subAvrgAbvClsAvrg,
  subAvrgBelClsAvrg,
  subWhichHighPercStdScrAbove,
  subWhichHighPercStdScrBelow,
  subWhichLowPercStdScrAbove,
  subWhichLowPercStdScrBelow,
  percStdScoredAbovClasAvrg,
  percStdScoredBelowClasAvrg,
  stdPercentageAboveClsAvrg,
  stdPercentageBelowClsAvrg,
  stdScoredAbovClsAvrgAllSub,
  stdScoredBelowClsAvrgAllSub,
  stdScoredAbvClsAvrgMajSub,
  stdScoredBelClsAvrgMajSub,
  subWhichMajStdScrAbvClsAvrgMark,
  subWhichMajStdScrBelClsAvrgMark,
  showStdPercScrdAboveAvrg,
  showStdPercScrdBelowAvrg,
  showPercScrAbvAvrgMarksInAtleastOneSub,
  showPercScrBelAvrgMarksInAtleastOneSub,
  showStdScordAbvAvrMarkOfSpecStdAllSUb,
  showStdScordBelAvrMarkOfSpecStdAllSUb,
  showSubjectAboveAvrgMark,
  showSubjectBelowAvrgMark,
  showSubStdScrdAbvAvrg,
  showSubStdScrdBelAvrg,
  showSubLowPercStdScrdAbvAvrg,
  showSubLowPercStdScrdBelAvrg,
  showPercOfStdScrdAbvMark,
  showPercOfStdScrdBelMark,
  ShowPerStdScrdAbvAvrgMinOneSub,
  ShowPerStdScrdBelAvrgMinOneSub,
  showStdScrdAbvAvrgAllSub,
  showStdScrdAbvAvrgInMajoritySub,
  showStdScrdBelAvrgAllSub,
  showStdScrdBelAvrgInMajoritySub,
  showSubMajorityStdScrdAbvAvrg,
  showSubMajorityStdScrdBelAvrg,
  showPercOfStdScrdAbvAvrgSpStd,
  showPerStdScrdBelAvrgSpStd,
  showSubScrdAbvAvrgMark,
  showSubScrdBelAvrgMark,
} from "./utils/functions";
export const functionArray = [
  {
    id: 1,
    isSelect: false,
    question: "Name of the class",
    answer:className,  
      
  },
  {
    id: 2,
    isSelect: false,
    question: "Name of teacher",
    answer: teacherName,  
    
  },
  {
    id: 3,
    isSelect: false,
    question: "Name of all the students in the class",
    answer: studentsAllName,
   
  },
  {
    id: 4,
    isSelect: false,
    question: "IDs of all students in the class",
    answer: idsOfStudents,
   
  },  
  {
    id: 5,
    isSelect: true,
    question: "The subject names for specific students",
    answer: subjectName,
    type:"student",
   
  },
  {
    id: 6,
    isSelect: true,
    question: "Mark of a specific student in all subject",
    answer: subjectMark,
    type:"student"
  },
  {
    id: 7,
    isSelect: true,
    question: "Average Mark for a specific student",
    answer: averageMark,
    type:"student"
  },
  {
    id: 8,
    isSelect: true,
    question: "Total marks for the specific student",
    answer: totalMark,
    type:"student"
  },
  {
    id: 9,
    isSelect: true,
    question: "Average mark of all students in each subject",
    answer: subjectAverage,
    type:"subject"
  },
  {
    id: 10, 
    isSelect: true,
    question: "Total mark obtained for each subject",
    answer:subjectTotal,
    type:"subject"
  },
  {
   id:11,
   isSelect:true,
   question:"Name of the student with highest score in each subject",
   answer:topStudentInSubject,
   type:"subject"
  },
  {
   id:12,
   isSelect:true,
   question:"Name of the student with lowest score in each subject",
   answer:weakStudentInSubject,
   type:"subject"
  },
  {
   id:13,
   isSelect:false,
   question:"Student with highest total mark",
   answer:highestTotalMark
  },
  {
   id:14,
   isSelect:false,
   question:"Student with lowest total mark",
   answer:lowestTotalMark
  },
  {
   id:15,
   isSelect:false,
   question:"The subject with highest average mark",
   answer:highestAvrgSubject
  },
  {
   id:16,
   isSelect:false, 
   question:"The subject with lowest average mark",
   answer:lowestAvrgSubject
  },
  {
   id:17,
   isSelect:false,
   question:"Overall average marks for the class",
   answer:overallAvrgMark
  },
  {
   id:18,
   isSelect:false,
   question:"Overall total marks for the class",
   answer:overallTotalMark
  },
  {
   id:19,
   isSelect:false,
   question:"Average mark for each subject",
   answer:avrgMarksForSubjects
  },
  {
   id:20,
   isSelect:false,
   question:"Total marks for each subject",
   answer:totalMarksForSubject
  },
  {
   id:21,
   isSelect:false,
   question:"Subject with highest total marks",
   answer:highTotalMarkSub
  },
  {
   id:22,
   isSelect:false,
   question:"Subject with lowest total marks",
   answer:lowTotalMarkSub
  },
  {
   id:23,
   isSelect:false,
   question:"Student with highest average marks",
   answer:studentWithHighAvrgMark
  },
  {
   id:24,
   isSelect:false,
   question:"Student with lowest average marks",
   answer:studentWithLowAvrgMark
  },
  {
   id:25,
   isSelect:false,
   question:"Student with highest total marks",
   answer:studentWithHighMark
  },
  {
   id:26,
   isSelect:false,
   question:"Student with lowest total marks",
   answer:studentWithLowMark
  },
  {
   id:27,
   isSelect:true,             
   question:"The number of students who scored above a certain mark in specific subject",
   type:"markAndSub",
   answer:stdCountAboveMark               
  },
  {
   id:28,
   isSelect:true,
   question:"The number of students who scored below a certain marks in specific subject",
   type:"markAndSub",
   answer:stdCountBelowMark
  },
  {
   id:29,           
   isSelect:true,
   type:"mark",
   question:"The number of students who scored above a certain mark in all subject",
   answer:stdCountMarkASub
  },
  {
   id:30,
   isSelect:true,
   type:"mark",
   question:"The number of students who scored below a certain mark in all subject",
   answer: stdCountMarkBSub
  },
  {
   id:31,
   isSelect:true,
   type:"markAndSub",
   question:"The percentage of students who scored above a certain mark in a specific subject",
   answer:stdPercentageAboveMark
  },
  {
   id:32,
   isSelect:true,
   type:"markAndSub",
   question:"The percentage of students who scored below a certain mark in a specific subject",
   answer:stdPercentageBelowMark
  },
  {
   id:33,
   isSelect:true,
   type:"mark",
   question:"The percentage of students who scored above a certain mark in all subjects",
   answer:stdPercentageAMark
  },
  {
   id:34,
   isSelect:true,
   type:"mark",
   question:"The percentage of students who scored below a certain mark in all subjects",
   answer: stdPercentageBMark
  },
  {
   id:35,
   isSelect:false,
   question:"The student with the highest percentage of marks",
   answer: stdHighMarkPerc
  },
  {
   id:36,
   isSelect:false,
   question:"The student with the lowest percentage of marks",
   answer: stdLowMarkPerc
  },
  {
   id:37,
   isSelect:false,
   question:"The subject with the highest percentage of marks",
   answer:subHighMarkPerc
  },
  {
   id:38,
   isSelect:false,
   question:"THe subject with the lowest percentage of marks",
   answer:subLowMarkPerc
  },
  {
   id:39,
   isSelect:true,
   type:"subject",
   question:"The student with the highest percentage of marks in a specific subject",
   answer:TopMarkPercStdInSub
  },
  {
   id:40,
   isSelect:true,
   type:"subject",
   question:"The student with the lowest percentage of marks in a specific subject",
   answer:weakMarkPercStdInSub
  },
  {
   id:41,
   isSelect:true,
   type:"student",
   question:"The subject with the highest percentage of marks for a specific student",
   answer:highPercSub
  },
  {
   id:42,
   isSelect:true,
   type:"student",
   question:"The subject with the lowest percentage of marks for a specific student",
   answer:LowPercSub
  },
  {
   id:43,
   isSelect:true,
   type:"mark",
   question:"The subject in which all students scored above a certain mark",
   answer:findSubAboveCerMark
  },      
  {
   id:44,
   isSelect:true,
   type:"mark",
   question:"The subject in which all students scored below a certain mark",
   answer:findSubBelowCerMark
  },
  {
   id:45,
   isSelect:true,
   type:"mark",
   question:"The subject in which the average marks of all students are above a certain mark",
   answer:findSubAverageAllAbove
  },
  {
   id:46,
   isSelect:true,
   type:"mark",
   question:"The subject in which the average marks of all students are below a certain mark",
   answer:findSubAverageAllBelow
  },
  {
   id:47,
   isSelect:false,
   question:"The students who scored the highest marks in least one subject",
   answer:stdTopAtleastOneSub
  },
  {
   id:48,
   isSelect:false,
   question:"The students who scored the lowest marks in at least one subject",
   answer:stdLowAtleastOneSub
  },
  {
   id:49,
   isSelect:false,
   question:"The average marks for each student in each subjce",
   answer:avrgMarkEachStdEachSub
  },
  {
   id:50,
   isSelect:false,
   question:"The total marks for each student in each subject",
   answer:totalMarkEachStdEachSub
  },
  {
   id:51,
   isSelect:false,
   question:"The student who scored the highest marks in each subject",
   answer:stdWithTopInSub
  },
  {
   id:52,
   isSelect:false,
   question:"The student who scored the lowest marks in each subject",
   answer:stdWithLowInSub
  },
  {
   id:53,
   isSelect:false,
   question:"The subject in which the highest marks were scored",
   answer:highestMarkSub
  },
  {
   id:54,
   isSelect:false,
   question:"The subject  in which the lowest marks are scored",
   answer:lowestMarkSub
  },
  {
   id:55,
   isSelect:false,
   question:"The students who scored above the class average marks",
   answer:stdScoredAbvClsAvrg
  },
  {
   id:56,
   isSelect:false,
   question:"The student who scored below the class average marks",
   answer:stdScoredBelClsAverage
  },
  {
   id:57,
   isSelect:false,
   question:"The subject in which the average marks are above the class average marks",
   answer:subAvrgAbvClsAvrg
  },
  {
   id:58,
   isSelect:false,
   question:"The average marks are below the class average marks",
   answer:subAvrgBelClsAvrg
  },
  {
   id:59,
   isSelect:false,
   type:"mark",
   question:"The subjects in which the highest percentage of student scored above a certain mark",
   answer:subWhichHighPercStdScrAbove
  },
  {
   id:60,
   isSelect:false,
   type:"mark",
   question:"The subjects in which the highest percentage of students scored below a ceratain mark",
   answer:subWhichHighPercStdScrBelow
  },
  {
   id:61,
   isSelect:false,
   type:"mark",
   question:"The subjects in which the lowest percentage of students scored above a certain mark",
   answer:subWhichLowPercStdScrAbove
  },
  {
   id:62,
   isSelect:false,
   type:"mark",
   question:"The subjects in which the lowest percentage of students scored below a certain mark",
   answer:subWhichLowPercStdScrBelow
  },
  {
   id:63,
   isSelect:false,
   question:"The percentage of students who scored above the class average marks in each subject",
   answer:percStdScoredAbovClasAvrg
  },
  {
   id:64,
   isSelect:false,
   question:"The percentage of students who scored below the class average marks in each subject",
   answer:percStdScoredBelowClasAvrg
  },
  {
   id:65,
   isSelect:false,
   question:"The percentage of students who scored above the class average marks in atleast one subject",
   answer:stdPercentageAboveClsAvrg
  },
  {
   id:66,
   isSelect:false,
   question:"The percentage of students who scored below the class average marks in atleast one subject",
   answer:stdPercentageBelowClsAvrg
  },
  {
   id:67,
   isSelect:false,
   question:"The students who scored above the class average marks in all subjects",
   answer:stdScoredAbovClsAvrgAllSub
  },
  {
   id:68,
   isSelect:false,
   question:"The student who scored below the class average marks in all subjects",
   answer:stdScoredBelowClsAvrgAllSub
  },
  {
   id:69,
   isSelect:false,
   question:"The student who scored above the class average marks in the majority of subjects",
   answer:stdScoredAbvClsAvrgMajSub
  },
  {
   id:70,  
   isSelect:false,
   question:"The student who scored below the class average marks in the majority of subjects",
   answer:stdScoredBelClsAvrgMajSub
  },
  {
   id:71,  
   isSelect:false,
   question:"The subject in which the majority of students scored above the class average marks",
   answer:subWhichMajStdScrAbvClsAvrgMark
  },
  {
   id:72,  
   isSelect:false,
   question:"The subjects in which the majority of students scored below the class average marks",
   answer:subWhichMajStdScrBelClsAvrgMark
  },
  {
   id:73,  
   isSelect:false,
   type:"student",
   question:"The percentage of students who scored above the average marks of specific student in each subject",
   answer:showStdPercScrdAboveAvrg
  },
  {
   id:74,  
   isSelect:false,
   type:"student",
   question:"The percentage of students who scored below the average marks of specific student in each subject",
   answer:showStdPercScrdBelowAvrg
  },
  {
   id:75,  
   isSelect:false,
   type:"student",
   question:"The percentage of students who scored above the average marks of a specific student in at least one subject",
   answer:showPercScrAbvAvrgMarksInAtleastOneSub
  },
  {
   id:76,  
   isSelect:false,
   type:"student",
   question:"The percentage of students who scored below the average marks of specific student in at least one subject",
   answer:showPercScrBelAvrgMarksInAtleastOneSub
  },
  {
   id:77,  
   isSelect:false,
   type:"student",
   question:"The students who scored above the average marks of a specific student in all subjects",
   answer:showStdScordAbvAvrMarkOfSpecStdAllSUb
  },
  {
   id:78,  
   isSelect:false,
   type:"student",
   question:"The student who scored velow the avearge marks of a specific student in all subjects",
   answer:showStdScordBelAvrMarkOfSpecStdAllSUb
  },
  {
   id:79,  
   isSelect:false,
   type:"student",
   question:"The subject in which the average marks are above the average marks of specific student",
   answer:showSubjectAboveAvrgMark
  },
  {
   id:80,  
   isSelect:false,
   type:"student",
   question:"The subject in which the average marks are below the average marks of a specific student",
   answer:showSubjectBelowAvrgMark
  },
  {
   id:81,  
   isSelect:false,
   type:"student",
   question:"The subject in which the highest percentage of students scored above the average marks of specific student",
   answer:showSubStdScrdAbvAvrg
  },
  {
   id:82,  
   isSelect:false,
   type:"student",
   question:"The subject in which the highest percentage of students scored below the average marks of specific student",
   answer:showSubStdScrdBelAvrg
  },
  {
   id:83,  
   isSelect:false,
   type:"student",
   question:"The subject in which the average marks are below the average marks of a specific student",
   answer:showSubLowPercStdScrdAbvAvrg
  },
  {
   id:84,  
   isSelect:false,
   type:"student",
   question:"The subject in which the lowest percentage of students scored below the average marks of a specific student",
   answer:showSubLowPercStdScrdBelAvrg
  },
  {
   id:85,   
   isSelect:false,
   question:"The percentage of students who scored above the average marks of the class in each subject",
   answer:showPercOfStdScrdAbvMark
  },
  {
   id:86,  
   isSelect:false,
   question:"The percentage of students who scored below the average marks of the class in each subject",
   answer:showPercOfStdScrdBelMark
  },
  {
   id:87,  
   isSelect:false,
   question:"The percentage of students who scored above the average marks of the class in at least one subject",
   answer:ShowPerStdScrdAbvAvrgMinOneSub
  },
  {
   id:88,  
   isSelect:false,
   question:"The percentage of students who scored below the average marks of the class in at least one subject",
   answer:ShowPerStdScrdBelAvrgMinOneSub
  },
  {
   id:89,  
   isSelect:false,
   question:"The students who scored above the average marks of the class in all subject",
   answer:showStdScrdAbvAvrgAllSub
  },
  {
   id:90,  
   isSelect:false,
   question:"The student who scored below the average marks of the class in all subjects",
   answer:showStdScrdBelAvrgAllSub
  },
  {
   id:91,  
   isSelect:false,
   question:"The student who scored above the average marks of the class in the majority of subjects",
   answer:showStdScrdAbvAvrgInMajoritySub
  },
  {
   id:92,  
   isSelect:false,
   question:"The student who scored below the average marks of the class in the majority of subjects",
   answer:showStdScrdBelAvrgInMajoritySub
  },
  {
   id:93,  
   isSelect:false,
   question:"The subject in which the majority of students scored above the average marks of the class",
   answer:showSubMajorityStdScrdAbvAvrg
  },
  {
   id:94,  
   isSelect:false,
   question:"The subjects in which the majority of students scored below the average marks of the class",
   answer:showSubMajorityStdScrdBelAvrg
  },
  {
   id:95,  
   isSelect:false,
   type:"student",
   question:"The percentage of students who scored above the average marks of a specific student in the majority of subjects",
   answer:showPercOfStdScrdAbvAvrgSpStd
  },
  {
   id:96,  
   isSelect:false,
   type:"student",
   question:"The percentage of students who scored below the average marks of a specific students in the majority of subjects",
   answer:showPerStdScrdBelAvrgSpStd
  },
  {
   id:97,  
   isSelect:false,
   type:"student",
   question:"The percentage of students who scored above the average marks of specific student in the majority of subjects",
   answer:showPercOfStdScrdAbvAvrgSpStd
  },
  {
   id:98,  
   isSelect:false,
   type:"student",
   question:"The percentage of students who scored below the average marks of specific student in the majority of subjects",
   answer:showPerStdScrdBelAvrgSpStd
  },
  {
   id:99,  
   isSelect:false,
   type:"student",
   question:"The subjects in which the highest percentage of students scored above the average marks of a specific student",
   answer:showSubScrdAbvAvrgMark
  },
  {
   id:100,  
   isSelect:false,
   type:"student",
   question:"The subjects in which the highest percentage of students scored below the average marks of a specific student",
   answer:showSubScrdBelAvrgMark
  }
  
];

