// Track Gym progress -- umay sa may bayad na apps
// Program Start




// Global variables


// get DOMS
// Boxes - Workout
var pushDayDivParent = document.getElementById("push-day");
var getRepetitions = document.getElementById("repetitions");
var getSets = document.getElementById("sets"); 

var count = 0;

var pushDayButton = document.getElementById("push-button");
pushDayButton.addEventListener("click", () => {
  count += 1;
  let inputBoxType = document.createElement("input");
  inputBoxType.classList.add("inputBoxType-stlye");
  inputBoxType.type = "text";
  // inputBoxType.disabled = true;
  inputBoxType.readOnly = true;
  inputBoxType.placeholder = `Sets ${getSets.value} :: Repetitions ${getRepetitions.value} `;
  // inputBoxType.innerHTML = `Sets ${getSets.value} :: Repetitions ${getRepetitions.value} `;
  
  
  


  pushDayDivParent.appendChild(inputBoxType);

  
  inputBoxType.addEventListener("click", () => {
    console.log("clicked");
    inputBoxType.readOnly = false;
    // let deleteBox = delete box?
    let deleteBox = document.createElement("span");
    deleteBox.textContent = "X";
    inputBoxType.after(deleteBox);

    deleteBox.addEventListener("click", () => {
      inputBoxType.remove();
      deleteBox.remove();
    })
  })

  

 
 
 

})

