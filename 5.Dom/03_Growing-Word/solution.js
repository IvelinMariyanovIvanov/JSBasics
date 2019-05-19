function solve() {

   let button = document.getElementById("clickme");
   let count = 0;
   
   button.onclick = function() {
     count += 1;
     button.innerHTML = "Click me: " + count;
     
     let allP = document.getElementsByTagName('p');

     let paragraph = allP[2];
     console.log(allP);
     
     paragraph.style.fontSize = count*2+"px";
      
     if(count % 2 == 0) {
        paragraph.style.backgroundColor = "green";
     }
     else if(count % 3 == 0) {
        paragraph.style.backgroundColor = "red";
     }
     else {
        paragraph.style.backgroundColor = "blue"
     }


}

   

   // let paragraph = document.getElementById("exercise").lastChild.innerHTML;


   
   // if(count % 2 == 0) {
   //    paragraph.colo
   // }
   

};