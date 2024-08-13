const csv = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
// Part 1: Refactoring Old Code

const data = [];
let cell = '';
// let rows = []; 


// csv.split('').filter(char => char !== ',' && char !== '\n').join('');
// console.log(csv);

//3. Transform Data
// const rows = csv.split('\n');

// rows.forEach(row => {
//     const cells = row.split(',');

//     const obj = {
//         ID: cells[0],
//         Name: cells[1],
//         Occupation: cells[2],
//         Age: cells[3] 
//     };
//     data.push(obj);
// });
// console.log(data);
 
// //Part 4: Sorting and Manipulating Data
// //1. Remove the last element from the sorted array

//   data.pop([3]);
//  console.log(data);

// //2. Insert object at index 1
  const newObject = { id: "7", name: "Bilbo", occupation: "None", age: "111" };

//  data.splice(1, 0, newObject);
//  console.log(data);

// //3. Add the object to the end of the array
//const newObject = { id: "7", name: "Bilbo", occupation: "None", age: "111" };

//  data.push(newObject)
//  console.log(data);

 //Part 5: Full Circle
  
 data.toString();
console.log(csv);


// //Old Code
//  csv.forEach((element) => {console.log(element)};


// for (let i = 0; i < csv.length; i++) {
//   let currentCharacter = csv[i];
//   //when the currentCharacter is comma or string don't add it?
//   if (currentCharacter !== "," && currentCharacter !== "\n") {
//     cell = cell + currentCharacter;
//   }
//   // this is add last cell to the row array then resets so it can hold next cell
//   if ("," === currentCharacter) {
//     row.push(cell);
//     cell = "";
//   }

//   //at the end
//   // this is adds last rows to the data array then resets so it can hold next row
//   else if  (currentCharacter === "\n" || i === csv.length - 1) {
//     row.push(cell);
//     cell = "";
//     data.push(row);
//     row = [];
//   }
// }







