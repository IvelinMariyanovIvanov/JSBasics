function solve() {

  // let softuni = document.getElementById('SoftUni');
 
  // softuni.onclick = function() {
   
  //   let span = document.getElementById("SoftUniSpan");
  //   let times = Number(span.innerHTML.split(' ')[1]);
   
  //   times++; 
  //    span.innerHTML = `Visited ${times} times`;
  // };

}

function solve1(id) {
  
  // let aTag = document.getElementById(id);
 
  // let span = document.nextSibling(a);
  let span = document.getElementById(id).nextElementSibling;

  let times = Number(span.innerHTML.split(' ')[1]);

  times++; 
  span.innerHTML = `Visited ${times} times`;
  
};