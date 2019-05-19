function solve() {
    allCardsArr = Array.from(document.getElementsByTagName("img"));
    divReslut = document.getElementById("result");

    resultSpans = divReslut.getElementsByTagName("span");
    let leftSpan = resultSpans[0];
    let  rightSpan = resultSpans[2];


    allCardsArr.forEach(card => {
        card.addEventListener("click", getCardStats)
    });

    function getCardStats(event) {
        
        let cardvalue = event.target.name;
        let plaeyrId = event.target.parentElement.id;
        
        let clickedCard = event.target;
        clickedCard.src = "images/whiteCard.jpg";
    
        clickedCard.removeEventListener("click", getCardStats);

        if(plaeyrId === "player1Div"){
            leftSpan.textContent = cardvalue;
        } else {
            rightSpan.textContent = cardvalue;
        }

        if(leftSpan.textContent !=="" && rightSpan.textContent !== "") {

            let winner;
            let looser;
            
            // winner =  document.getElementsByName(String(leftSpan.textContent))[0];

            if(Number(leftSpan.textContent) > (Number(rightSpan.textContent))) {

                 winner =  document.querySelector(`#player1Div img[name="${leftSpan.textContent}"]`);
                 looser =  document.querySelector(`#player2Div img[name="${rightSpan.textContent}"]`);
              
            }else {
                looser =  document.querySelector(`#player1Div img[name="${leftSpan.textContent}"]`);
                winner =  document.querySelector(`#player2Div img[name="${rightSpan.textContent}"]`);
          }

          winner.style.border = "2px solid green";
          looser.style.border = "2px solid darkred";

          let divHistory = document.getElementById("history");
          divHistory.textContent += `[${leftSpan.textContent} VS ${rightSpan.textContent}] `;
          // works
        //   let currentHand = document.createElement("span");
        //   currentHand.textContent = document.getElementById("result").textContent;

        //   divHistory.appendChild(currentHand);

          setTimeout(function() {
            leftSpan.textContent = "";
            rightSpan.textContent = "";
          }, 2000);  

        }

    };
}