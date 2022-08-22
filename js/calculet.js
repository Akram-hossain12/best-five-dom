function getAllPlayerById (calculatPer){
    const getElementFromInput =  document.getElementById(calculatPer);
    const getAllPlayerCostString = getElementFromInput.value;
    const getAllCostNumber = parseInt(getAllPlayerCostString);
    
    // console.log(allPlayerCost)
 return getAllCostNumber;
}
function playerCommon (){

}

document.getElementById('player-calculat').addEventListener('click', function(){
 const getInputForPlayer =  getAllPlayerById ("player-input-field");
 const totlePlayerCost = getInputForPlayer * 5;
//  const playerCost = getInnerTextById ("Player-expanse-totle");
 
 const getInnerTextField = document.getElementById("Player-expanse-totle");
 const getAllInnerTextString = getInnerTextField.innerText;
 const getInnerNumber = parseInt(getAllInnerTextString);
 getInnerTextField.innerText =  totlePlayerCost;

 console.log(getInputForPlayer)

})

document.getElementById('maneger-calculat').addEventListener('click', function(){
   const ManegerCostById = getAllPlayerById ("maneger-input-field");
  const cochlCostById =  getAllPlayerById ("coch-input-field");
  const cochManegerCost = ManegerCostById + cochlCostById;

  const getTotleExpenseField = document.getElementById("totle-expense");
  const getAllTotleExpenseString = getTotleExpenseField.innerText;
  const getInnerTotleExpense = parseInt(getAllTotleExpenseString);
  getTotleExpenseField.innerText = cochManegerCost;


 })



