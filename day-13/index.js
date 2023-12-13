const food = document.getElementById('food')
const numOfGuest = document.getElementById("num-input")
const vegetarian = document.getElementById('vegetarian-input')
const calculateBtn = document.getElementById("btn")

const foodArr = ["mbatn + burek + pizza", "rshdt kskas", "couscsy", "3seeda", "rizz mbaw5(holyrizz)", "kambanya"]



function getFood(){
    let randomIndex = Math.floor(Math.random()*foodArr.length)
    let randomFood
    if(numOfGuest.value >=6){
        randomFood = "3osban"
    }
    else if(numOfGuest.value >=4){
        randomFood = "bazeen"
    }
    else{
       randomFood = foodArr[randomIndex] 
    }
    return randomFood
}

calculateBtn.addEventListener("click",renderFood)

function renderFood(){
    if(vegetarian.checked ){
      food.textContent = "get outta my house dawg"  
    }
    else
    food.textContent = getFood()
}



/**
Task:
- Write the code to help a user choose the perfect Christmas dinner idea
  based on the number of people attending.
- Include a checkbox for the user to specify the meal 
  should be vegetarian-friendly.

Dinner suggestions (or choose your own!):
Vegetarian: Winter Squash Risotto
4 people or less: Ham
5+ people: Turkey

Stretch goals:
- Add more dietary options.
- Show recipes when the meal has been selected.
 */

