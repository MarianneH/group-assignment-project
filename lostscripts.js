let group = [
  "Ahmed",
  "Andrei",
  "Georg",
  "Hendra",
  "Lars",
  "Lera",
  "Luis",
  "Marianne",
  "Mathieu",
  "Mulugeta",
  "Nevin",
  "Oriane",
  "Robert",
  "Stefan D",
  "Stefan I",
  "Valeriia",
  "Vladyslava",
];
let groupSize = prompt("How many people should be in a group?");

//shuffle the group names
let shuffledGroup = group.sort(function () {
  return Math.random() - 0.5;
});
console.log(shuffledGroup);

function createGroups(groupSize) {
  //define the number of groups
  let numberOfGroups;
  //find out if the rest of people is an own group or needs to be distributed
  if (group.length % groupSize <= groupSize / 2) {
    //bsp 4er gruppe
    numberOfGroups = group.length / groupSize;
    // = 17/4 = 4,25
    numberOfGroups = numberOfGroups - (numberOfGroups % 1);
    // 4,25 - (0,25) =4
  } else {
    numberOfGroups = group.length / groupSize;
    numberOfGroups = numberOfGroups - (numberOfGroups % 1) + 1;
    // 19/4 = 4,75
    // = 4,75 - 0,75 + 1 = 5
  }
  //console.log("Number of groups: " + numberOfGroups);

  for (let i = 0; i < group.length; i++) {
    if (i > 0) {
      //to fix the problem with the loop (missing people or undefined result)
      i--;
    }
    for (let j = 1; j <= numberOfGroups; j++) {
      //initiate a table
      if (i < group.length) {
        //console.log(shuffledGroup[i] + " was added to Group " + j);
        //show result on html document
        const displayResult = document.createElement("div");
        displayResult.innerText = shuffledGroup[i] + " was added to Group " + j;
        document.querySelector("div").appendChild(displayResult);
        i++;
      } else {
        return;
      }
    }
  }
}

createGroups(groupSize);

// // function randomStudent(array) {
// //   const student = array[Math.floor(Math.random() * array.length)];
// //   console.log("Random Student: ", student);
// //   return student;
// // }
// //randomStudent(group);

// // more things to do:
// // rework display of group
// // create a form for name-input and use it for the program
// // prefill with current group
// // make it pretty with CSS
