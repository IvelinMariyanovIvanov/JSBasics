function solve(){
  
  let input = document.getElementById('input');
  let value = input.innerHTML;
  console.log(value);

  // let inputAsArr = input.split(/[\\.!\?]/);
  let inputAsArr = value.split('.');
  // let inputAsArr  = input.match(/[^.?!]+[.!?]+[\])'"`’”]*/g);

  let formatedText = document.getElementById('output');

  for (let i = 0; i < inputAsArr.length; i+=3) {
    
    input = document.getElementById('input').value = '';

    let first = inputAsArr[i];
    let secondt = inputAsArr[i+1];
    let third = inputAsArr[i+2];

    let sentace = inputAsArr[i];

    let paragraph = document.createElement('p');

    if(first != "") {
      
      // paragraph.textContent = sentace;   
      paragraph.textContent = first; 
      
      paragraph.textContent += ".";
    }
    if(secondt != "") {

      // paragraph.textContent = sentace;   
      paragraph.textContent += secondt; 
      
      paragraph.textContent += ".";
    }
    if(third != "") {
      
      // paragraph.textContent = sentace;  
      paragraph.textContent += third;  

      paragraph.textContent += ".";
    }
    formatedText.appendChild(paragraph);
  }

  //  input = document.getElementById('input').value = '';
  
}