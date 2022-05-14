// array of object
let students = [
  ["John", "A", 87],
  ["Peter", "B", 75],
  ["Amy", "A", 91],
  ["Hannah", "B", 78],
];

function groupClass(array) {
  let result = {};
  let classA = {
    class: "A",
    students: [],
    scores: [],
  };
  let classB = {
    class: "B",
    students: [],
    scores: [],
  };

  for (let i = 0; i < array.length; i++) {
    if (array[i][1] == "A") {
      classA.students.push(array[i][0]);
      classA.scores.push(array[i][2]);
    } else {
      classB.students.push(array[i][0]);
      classB.scores.push(array[i][2]);
    }
  }
  result.push(classA);
  result.push(classB);

  return result;
}
