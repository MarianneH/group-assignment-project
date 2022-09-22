//get the array of people from the form
let group = document.getElementById('allNames'); 
group = group.innerHTML.split(','); 
console.log(group);

//get the size of group of the form
let groupSize = document.getElementById('groupSize');
groupSize = groupSize.size
console.log(groupSize);


//find the number of group
function numberOfGroup(group, groupSize){

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
  
     console.log("Number of groups: " + numberOfGroups);
     return numberOfGroups;

}


console.log(numberOfGroup(group,groupSize));


 //shuffle the group names
 let shuffledGroup = group.sort(function () {
   return Math.random() - 0.5;
 });
// console.log("Shuffled array: ", shuffledGroup);


function createGroups(shuffledGroup, numberOfGroup, groupSize){
    //console.log("Array inside function", shuffledGroup);
  //console.log("NumberOfGroups inside Fuction: ", numberOfGroup);
 let personLeft = ""; 
 let groups = []; 
  // if 1 person left, put number in person - 1 in number of group + person left in one of the group
  console.log("Modulo", shuffledGroup.length % numberOfGroup)
  if (shuffledGroup.length % numberOfGroup === 1){
    // take the first person of array in personleft and delete it of array; 
    let personLeft = shuffledGroup[0]; 
    console.log("Person left:", personLeft); 
    shuffledGroup.shift(); 
    console.log("new shuffled group:", shuffledGroup)
    // creates the group with newshuffledGroup
    console.log("Group size:", groupSize)
    for (let i = 0; i < shuffledGroup.length; i+=groupSize){
      groups.push(shuffledGroup.slice(i, i + groupSize))
      }
      //I push the person Left in one of the group randomly 
      groups[Math.floor(Math.random() * numberOfGroup)].push(personLeft); 
    
    console.log("Final groups odds:", groups); 
    return groups

  } 
   // if 0 person left devide array in number of group
  else if (shuffledGroup.length % numberOfGroup === 0){
    for (let i = 0; i < shuffledGroup.length; i+=groupSize){
      groups.push(shuffledGroup.slice(i, i + groupSize))
      }
      console.log("Final groups even:", groups)
      return groups
  }

  

}

console.log(createGroups(shuffledGroup, numberOfGroup(group,groupSize), groupSize));

