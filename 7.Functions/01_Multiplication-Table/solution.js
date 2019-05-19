function solve() {
 
  let number = Number(document.getElementById('num1').value);
  let multiplier = Number(document.getElementById('num2').value);
  let result = document.getElementById('result');

  result.textContent = '';

  multiply(number, multiplier);

 
  function multiply(number, multiplier) {
   
    if(number < multiplier) {
      
     for (let index = number; index <= multiplier; index++) {
      let myResult = document.createElement('p');
      myResult.textContent = `${index} * ${multiplier} = ${index*multiplier}`;
      result.appendChild(myResult);   
     }
    }else {
      validateInput(number, multiplier);
    }

    function validateInput(number, multiplier) {
      if(number > multiplier) {
        result.innerHTML = "Try with other numbers.";
      }
    } 
  }
}