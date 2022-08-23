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
     if (i !==  5 ){
       
      }
      else{
         
         alert("you alredy selected 5")
      }
    
   }
  
}
// calculet area 

    //  common function for innputFild 

function getAllPlayerById (calculatPer){
   const getElementFromInput =  document.getElementById(calculatPer);
   const getAllPlayerCostString = getElementFromInput.value;
   const getAllCostNumber = parseInt(getAllPlayerCostString);
   
  
   // console.log(allPlayerCost)
return  getAllCostNumber;
}

   //   common function for innerText 

function commonInnerTextField (innerTextId){
   const getInnerTextField = document.getElementById(innerTextId);
   const getAllInnerTextString = getInnerTextField.innerText;
   const getInnerNumber = parseInt(getAllInnerTextString);
   return getInnerNumber;
}

document.getElementById('player-calculat').addEventListener('click', function(){
   //   player per cost calculet  

   const getInputForPlayer =  getAllPlayerById ("player-input-field");
   const perlayerPer = getInputForPlayer;
   const totlePlayerCost = perlayerPer * bestFive.length;
   
   // show in the valu innerTEXt 
   
   const getInnerTextField = document.getElementById("Player-expanse-totle");
   const getAllInnerTextString = getInnerTextField.innerText;
   const getInnerNumber = parseInt(getAllInnerTextString);
   getInnerTextField.innerText =  totlePlayerCost;
  
   console.log(totlePlayerCost)
  
  })

  function commonInnerTextField (innerTextId){
   const getInnerTextField = document.getElementById(innerTextId);
   const getAllInnerTextString = getInnerTextField.innerText;
   const getInnerNumber = parseInt(getAllInnerTextString);
   return getInnerNumber;
}

  document.getElementById('maneger-calculat').addEventListener('click', function(){

   //  call all common function by id 

   const ManegerCostById = getAllPlayerById ("maneger-input-field");
  const cochlCostById =  getAllPlayerById ("coch-input-field");
  const getInnerTextField = commonInnerTextField("Player-expanse-totle");
 
//   all cost calculet area  

  const getInputForPlayer =  getAllPlayerById ("player-input-field");
  const perlayerPer = getInputForPlayer;
  const totlePlayerCost = perlayerPer * bestFive.length;
   const cochManegerPlayerCost = totlePlayerCost + ManegerCostById + cochlCostById;
 
   

//  totle cost calculet show totle expens area
  
  const getTotleExpenseField = document.getElementById("totle-expense");
  const getAllInnerTextString = getInnerTextField.innerText;
  const getInnerNumber = parseInt(getAllInnerTextString);
  getTotleExpenseField.innerText = cochManegerPlayerCost;


 })


// calculet end 





function getAllButtonClicked (elementId){
   const PlayersName = elementId.parentNode.children[0].innerText;
   // getAllButtonClicked.this.disabeld = true;
   const PlayersObj = {
    PlayersName : PlayersName
   };
  bestFive.push(PlayersObj);

   display(bestFive); 

   return bestFive;
}