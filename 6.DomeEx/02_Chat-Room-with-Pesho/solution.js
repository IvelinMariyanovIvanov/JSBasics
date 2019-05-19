function solve() {
     allBtns = Array.from(document.getElementsByTagName('button'));
     allInputs = Array.from(document.getElementsByTagName("input"));

     divChatHistory = document.getElementById("chatChronology");   


     allBtns.forEach(btn => {
        btn.addEventListener("click", function() {

            let myInputText = allInputs[0].value;
            let peshoInputText = allInputs[1].value;
       
            let span = document.createElement("span");
            let paragraph = document.createElement("p");
            let divMsg = document.createElement("div");

            if(btn.name === "myBtn") {               
                if(myInputText !== ""){
                    span.textContent = "Me";
                    paragraph.textContent = myInputText;
                    divMsg.style.textAlign ="left";
                    allInputs[0].value = "";
                } else {
                   
                }                
            } else {
               if(peshoInputText !== ""){
                span.textContent = "Pesho";
                paragraph.textContent = peshoInputText;
                divMsg.style.textAlign = "right";
                allInputs[1].value = "";
               }else{
                alert("Ente a message");
               }
            }

            divMsg.appendChild(span);
            divMsg.appendChild(paragraph);

            divChatHistory.appendChild(divMsg);
        });
    });
}