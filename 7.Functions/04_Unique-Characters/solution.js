function solve() {
  let inputAsArr = (document.getElementById('string').value);
  let result = document.getElementById('result');

  let distinct = '';

  for (let i = 0; i < inputAsArr.length; i++) {

    let currentChar = inputAsArr[i];

    console.log(currentChar);

    if(currentChar === ' ') {
      distinct += currentChar;
    }

    if(distinct.indexOf(currentChar) === -1){
      distinct += currentChar;
    }
    

    // ischarWhiteSpace(i);

    // fincUniqueChars(i);
   
  }

  result.innerHTML = distinct;

  function ischarWhiteSpace(i) {
    if(inputAsArr[i] === ' '){
      distinct += inputAsArr[i];
    }
  }

  function fincUniqueChars(i){
    if(distinct.indexOf(inputAsArr[i]) === -1){
      distinct += inputAsArr[i];
    }
  }



}