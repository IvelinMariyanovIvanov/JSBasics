function solve() {
 let number = Number(document.getElementById('num1').value);
 let type = document.getElementById('type').value.toLowerCase();
 let result = document.getElementById('result');
 let  isInputValid = false;
 let temp; 

 validateInput(type);

 if(isInputValid === true) {
  convert(number, type);
  result.innerHTML = temp;
 } else{
  result.innerHTML = 'Error';
 }

 function convert(number, type) {

   if(type === 'celsius') {
    temp = number * 1.8+ 32;
   }else if(type === 'fahrenheit') {
    temp = (number-32) / 1.8;
   }
  //  result.innerHTML = temp;
 }

 function validateInput(type){
  if(type === 'celsius' || type === 'fahrenheit') {
   isInputValid = true;
  }
}

}