const lights = document.getElementsByClassName("lights")
console.log(lights.item(1))


function on(){
for(let i = 0;i<lights.length;i++){
    lights.item(i).classList.toggle("lights-on")
    
}
}
setInterval(on,800)

