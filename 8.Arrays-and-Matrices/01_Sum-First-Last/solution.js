function solve() {
  let input = document.getElementById('arr').value;

  console.log(input);
  
  let inputAsArr = JSON.parse(input);
  let lenght = inputAsArr.length;
  let result = document.getElementById('result');

  console.log(lenght);

  for (let i = 0; i < inputAsArr.length; i++) {
    const element = inputAsArr[i];

    
    let p = document.createElement('p');
    p.textContent = `${i} -> ${element * lenght}`;

    result.appendChild(p);

  }

  

 

}