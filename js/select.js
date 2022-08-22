const bestFive = [];

function display(showElement){

    let olBody = document.getElementById('best-selected-player');
     
   for(let i = 0; i<showElement.length ; i++ ){

    //    console.log(bestFive[i].PlayersName);
       const player = bestFive[i].PlayersName;
       
       const ol = document.createElement('ol');

       ol.innerHTML= `
       <li> ${player} </li>
       `;
      ol.appendChild(olBody);
     
   }
  
}



function getAllButtonClicked (elementId){
   const PlayersName = elementId.parentNode.children[0].innerText;
   const PlayersObj = {
    PlayersName : PlayersName
   };
  bestFive.push(PlayersObj);


   display(bestFive); 

   return bestFive;
}