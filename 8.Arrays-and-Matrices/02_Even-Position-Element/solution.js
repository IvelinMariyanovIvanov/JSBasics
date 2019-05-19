function solve() {
  
  let input = document.getElementById('arr').value;

  console.log(input);

  let inputAsArr = JSON.parse(input);
  let resul = document.getElementById('result');

  for (let i = 0; i < inputAsArr.length; i++) {

   if(i % 2 != 0){
     inputAsArr[i] = 'x';
   }
    
  }

  resul.textContent = inputAsArr.join(' ');



}