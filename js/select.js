const bestFive = [];

function display(showElement){

    let olBody = document.getElementById('best-selected-player');
  
    olBody.innerHTML="";
     
   for(let i = 0; i < showElement.length ; i++ ){

    //    console.log(bestFive[i].PlayersName);
       const player = bestFive[i].PlayersName;
       
       const ol = document.createElement('ol');

    ol.innerHTML= `
       <li style = " color: white; list-style:none; font-size:24px;">${i+1} .${player} </li>
       `;
      olBody.appendChild(ol)
     if (i !== 5 ){
        
      }
      else{
      
         alert("you alredy selected 5")
      }
    
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