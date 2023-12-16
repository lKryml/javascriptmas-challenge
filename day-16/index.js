const niceList = document.getElementById("nice-list")
const naughtyList = document.getElementById("naughty-list")
const btn = document.getElementById("btn")
// btn.addEventListener("click", sort)

const sorteesArr = [
    {
        name: "David",
        hasBeenGood: false
    },
    {
        name: "Del",
        hasBeenGood: true
    },
    {
        name: "Valerie",
        hasBeenGood: false
    },
    {
        name: "Astrid",
        hasBeenGood: true
    }
]

let temp = ""
for(let i = 0;i<sorteesArr.length;i++){
    for(let j = 1;j<sorteesArr.length-i;j++){
        if(sorteesArr[j].hasBeenGood === true && sorteesArr[j-1].hasBeenGood === false){
            temp = sorteesArr[j];
            sorteesArr[j] = sorteesArr[j-1]
            sorteesArr[j-1] = temp;
        }
    }
}

sorteesArr.forEach((person)=>{
    if(person.hasBeenGood){
        niceList.innerHTML += `<li>${person.name}</li>`
    }
    else{
        naughtyList.innerHTML += `<li>${person.name}</li>`
    }
    
})
console.log(sorteesArr)
/** Challenge: 
  - Write the JavaScript to sort the people in sorteesArr into the naughty and nice lists, according to whether they have been good or not. Then display the names in the relevant place in the DOM.
**/

/** Stretch goals:
  - Add the option to add new names to the sorteesArr.
  - Make it possible to switch people to the other list.
**/