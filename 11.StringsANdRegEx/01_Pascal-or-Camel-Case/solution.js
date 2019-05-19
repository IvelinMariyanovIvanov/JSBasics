  /// works
// function solve() {
//    let input = document.getElementById('str1').value;
//    let converType = document.getElementById('str2').value;
//    let result = document.getElementById('result');

//    let resultText = '';
//    let inputAssArr = input.toLowerCase().split(' ');

//    if(converType === 'Pascal Case' || converType === "Camel Case"){
     
//     inputAssArr.forEach((word,index) => {
//      inputAssArr[index] = word[0].toUpperCase() + word.slice(1);
//     });

//     resultText = inputAssArr.join('');
//     result.textContent = resultText;
    
//    }else{
//     result.textContent = 'Error!';
//    }

//    if(converType === "Camel Case"){
//     result.textContent = resultText[0].toLowerCase() + resultText.slice(1);
//    }
     
// }

function solve() {
  let input = document.getElementById('str1').value;
  let converType = document.getElementById('str2').value;
  let result = document.getElementById('result');

  let resultText = '';
  let inputAssArr = input.toLowerCase().split(' ');

  if(converType === 'Pascal Case' || converType === "Camel Case"){
    
  resultText = input
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase()+ word.slice(1))
    .join('');

   result.textContent = resultText;
   
  }else{
   result.textContent = 'Error!';
  }

  if(converType === "Camel Case"){
   result.textContent = resultText[0].toLowerCase() + resultText.slice(1);
  }
    
}
