
function solve() {

 let input = document.getElementById('arr').value;
 let inputAsArr = JSON.parse(input);
 let result = document.getElementById('result');

// //1
//   inputAsArr.forEach(convertWord);

//   function convertWord(word) {
//      let reversedWord = word.split('').reverse().join('');

//      console.log(reversedWord);

//      return reversedWord;
//   }

// //2

//   inputAsArr.forEach(
//     function (word) {
//       let reversedWord = word.split('').reverse().join('');
 
//       console.log(reversedWord);
 
//       return reversedWord;
//     });

 //3
//  inputAsArr.forEach(word => {

//   let reversedWord = word.split('').reverse().join('');
 
//   console.log(reversedWord);

//   return reversedWord;
//  });

  //4
  inputAsArr.forEach((word, index, arr) =>  {
    arr[index] = word.split('').reverse().join('');
  });


  let resultArr = inputAsArr.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  
  console.log(resultArr);

  result.textContent = resultArr.join(' ');
}