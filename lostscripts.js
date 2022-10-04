// let group = [
//   "Ahmed",
//   "Andrei",
//   "Georg",
//   "Hendra",
//   "Lars",
//   "Lera",
//   "Luis",
//   "Marianne",
//   "Mathieu",
//   "Mulugeta",
//   "Nevin",
//   "Oriane",
//   "Robert",
//   "Stefan D",
//   "Stefan I",
//   "Valeriia",
//   "Vladyslava",
// ];
let group;
let numberOfGroups;
let finalGroups = [[]];
let errorOut;
let checkI;
let shuffleButton = document.querySelector("button");

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

  //shuffle the group names
  let shuffledGroup = group.sort(function () {
    return Math.random() - 0.5;
  });

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

      checkI = i;
      i++;

      if (i === group.length - 1 && errorOut !== 1) {
        i--;
        errorOut = 1;
      }
    }
  }
}
//only uses the program when clicking on the regroup button
shuffleButton.addEventListener("click", function (e) {
  group = document
    .querySelector("#allNames")
    .value.replaceAll(" ", "")
    .split(",");
  console.log(group);
  finalGroups = [[]];
  removeAllChildren();
  let groupSize = document.getElementById("groupSize").value;
  createGroups(groupSize);
  console.log(finalGroups);
  e.preventDefault();
  errorOut = 0;
  makeContainers();

  document
    .querySelector("#group-assignment")
    .scrollIntoView({ behavior: "smooth" });
});

// removes everything added by program (this is important for using the program multiple times)
function removeAllChildren() {
  let emptyDiv = document.querySelector("#group-assignment");
  emptyDiv.innerHTML = "";
}

function makeContainers() {
  let groupsContainer = document.querySelector("#group-assignment");

  for (let group in finalGroups) {
    //create outer container
    const groupContainer = document.createElement("div");
    groupContainer.classList.add("group-container");
    groupsContainer.appendChild(groupContainer);

    let newContainer = document.querySelectorAll(".group-container")[group];
    let x = parseInt(group) + 1;

    const groupNumber = document.createElement("div");
    groupNumber.classList.add("group-number");
    groupNumber.innerText = "Group " + x;
    newContainer.appendChild(groupNumber);
    const displayResult = document.createElement("div");
    displayResult.classList.add("new-groups");
    displayResult.innerText = finalGroups[group];
    newContainer.appendChild(displayResult);
    displayResult.innerHTML = displayResult.innerHTML.replaceAll(",", "</br>");
  }
}
