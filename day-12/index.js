const xmasGifts = ["bear 🧸", "games console 🎮 ", "guitar 🎸", "jewellery 💍", "kite 🪁", "laptop 💻", "scarf 🧣", "skates ⛸️"]
let temp;
for(let i = 0;i<xmasGifts.length;i++){
    
    for(let j = 1;j<xmasGifts.length-i;j++){ 
        if(xmasGifts[j-1] < xmasGifts[j]){
            temp = xmasGifts[j-1]
            xmasGifts[j-1] = xmasGifts[j];
            xmasGifts[j] = temp
        }
    }
}
console.log(xmasGifts)
for(let i = 0;i<xmasGifts.length;i++){
    
    for(let j = 1;j<xmasGifts.length-i;j++){ 
        if(xmasGifts[j-1] > xmasGifts[j]){
            temp = xmasGifts[j-1]
            xmasGifts[j-1] = xmasGifts[j];
            xmasGifts[j] = temp
        }
    }
}
console.log(xmasGifts)

