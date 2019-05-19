function solve() {
  let inputAsArr = Array.from(document.getElementById('string').value);
  let char = document.getElementById('character').value;
  let result = document.getElementById('result');
  let counter = 0;


  count(inputAsArr);

  print(counter);

  function print(count) {
    if(count % 2 == 0) {
      result.innerHTML = `Count of charachter ${char} is even`;
    } else {
      result.innerHTML = `Count of charachter ${char} is odd`;
    }
  }

 function count(inputAsArr){
  for (let i = 0; i < inputAsArr.length; i++) {

    let current = inputAsArr[i];

    if(current === char) {
      counter ++;
    }
  }
 }

  
}