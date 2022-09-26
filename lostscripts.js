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
let numberOfGroups;
let finalGroups = [[]];
let errorOut;
let checkI;

//shuffle the group names
let shuffledGroup = group.sort(function () {
  return Math.random() - 0.5;
});

function amountOfGroups(groupSize) {
  //find out if the rest of people is an own group or needs to be distributed
  if (group.length % groupSize <= groupSize / 2) {
    numberOfGroups = group.length / groupSize;
    numberOfGroups = numberOfGroups - (numberOfGroups % 1);
  } else {
    numberOfGroups = group.length / groupSize;
    numberOfGroups = numberOfGroups - (numberOfGroups % 1) + 1;
  }

  //extend empty finalGroups array with necessary empty arrays to fill
  for (let l = 0; l < numberOfGroups - 1; l++) {
    finalGroups.push([]);
  }
}

function createGroups(groupSize) {
  amountOfGroups(groupSize);

  for (let i = 0; i < group.length; i++) {
    if (i > 0 || i === group.length) {
      //to fix the problem with the loop (missing people or undefined result)
      i--;
    }
    for (let j = 1; j <= numberOfGroups; j++) {
      // NEW CODE - Create Object
      // check if there is value on position i in shuffledGroup & if not, end program

      if (shuffledGroup[i] === undefined) {
        return;
      }
      if (checkI === i) {
        i++;
      }
      // fill groups with members
      finalGroups[j - 1].push(shuffledGroup[i]);

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
    }
  }
}

createGroups(groupSize);
console.log(finalGroups);
