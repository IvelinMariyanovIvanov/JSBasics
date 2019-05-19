function solve() {
  let input = document.getElementById('str').value;
  let result = document.getElementById('result');

  let inputAsArr = input.split(' ');
  let numsArr = [];
  let wordsArr = [];

  console.log(inputAsArr);

  inputAsArr.forEach(element => {
    if(isNaN(element)) {
      wordsArr.push(element);
    } else {
      numsArr.push(element);
    }
  });


  let finalWordformNums = document.createElement('p');

  wordsArr.forEach(word => {
    let wordParagraph = document.createElement('p');

    for (let index = 0; index < word.length; index++) {
       wordParagraph.textContent +=   word[index].charCodeAt(0) + " ";     
    } 
    result.appendChild(wordParagraph);

  });

  numsArr.forEach(number => {
   finalWordformNums.textContent +=  String.fromCharCode(number);
  }); 

  result.appendChild(finalWordformNums); 

  console.log(wordsArr);
  console.log(numsArr);
}