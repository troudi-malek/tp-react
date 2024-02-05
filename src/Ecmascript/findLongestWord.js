const findLongestWord = (words) => {
    let [firstWord, ...remainingWords] = words;
  
    let wordObjects = [firstWord, ...remainingWords].map((word) => ({
      mot: word,
      longueur: word.length,
    }));

    let longestWordObject = wordObjects.reduce(
      (acc, current) => (current.longueur > acc.longueur ? current : acc),
      { longueur: 0 }
    );
    return {
      mot: longestWordObject.mot,
      longueur: longestWordObject.longueur,
    };
  };
  
  const wordsArray = ["ab", "abc", "abcd", "abcde", "abcdefg"];
  const result = findLongestWord(wordsArray);
  console.log(result);
  
const countOccurrences = (arrayOfArrays) => {
    const flattenedArray = arrayOfArrays.flat();


    const occurrenceCount = flattenedArray.reduce((acc, current) => {
      acc[current] = (acc[current] || 0) + 1;
      console.log(acc[current]);
      return acc;
    }, {});
  
    return occurrenceCount;
  };

  const arrayOfArrays = [
    ["a", "b", "c"],
    ["d", "a", "b"],
    ["f", "g", "g"],
    ["x", "v"],
  ];
  
  const result2 = countOccurrences(arrayOfArrays);
  console.log(result2);
  
const students = [
    { name: 'Alice', score: 45 },
    { name: 'Bob', score: 60 },
    { name: 'Charlie', score: 30 },
    { name: 'David', score: 80 },
  ];
  
  const studentsWithBonus = students.map(student => ({
    name: student.name,
    score: student.score < 50 ? student.score + 15 : student.score,
  }));
  
  const highScoringStudents = studentsWithBonus.filter(student => student.score > 50);
  
  const totalScore = highScoringStudents.reduce((accumulator, student) => {
    return accumulator + student.score;
  }, 0);
  
  console.log(totalScore);
  

let Tab = [
    { name: 'Objet 1', value: 'A' },
    { name: 'Objet 2', value: 'B' },
  ];
  
  let lastUsedID = 1;

  const addIDtoObject = (obj) => {
    obj.id = lastUsedID++;
  };
  const newObj1 = { name: 'Nouvel Objet 1', value: 'C' };
  addIDtoObject(newObj1);
  Tab.push(newObj1);
  
  const newObj2 = { name: 'Nouvel Objet 2', value: 'D' };
  addIDtoObject(newObj2);
  Tab.unshift(newObj2);
  