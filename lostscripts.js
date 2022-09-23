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
let arr = [[], [], [], [], [], [], [], []];
let errorOut;
let checkI;

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
  //console.log("groupLength: " + group.length);
  for (let i = 0; i < group.length; i++) {
    if (i > 0 || i === group.length) {
      //to fix the problem with the loop (missing people or undefined result)
      i--;
    }
    for (let j = 1; j <= numberOfGroups; j++) {
      // NEW CODE - Create Object
      // check if there is value on position i in shuffledGroup & if not, end program
      //console.log("(inner top loop i = " + i);

      if (shuffledGroup[i] === undefined) {
        return;
      }
      if (checkI === i) {
        i++;
      }
      // create array of arrays with all group members
      arr[j - 1].push(shuffledGroup[i]);

      // Display result in HTML page
      const displayResult = document.createElement("div");
      displayResult.innerText = shuffledGroup[i] + " was added to Group " + j;
      document.querySelector("div").appendChild(displayResult);
      checkI = i;
      i++;

      if (i === group.length - 1 && errorOut !== 1) {
        i--;
        errorOut = 1;
      }
      // if (checkI === i) {
      //   i++;
      // }
    }
  }
}

createGroups(groupSize);
console.log(arr);
