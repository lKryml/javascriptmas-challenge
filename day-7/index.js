const wishlistEl = document.getElementById('wishlist');
const wishlist = [
  item = {
    name:"Macbook Air M2",
    img:"https://www.apple.com/v/mac/home/bx/images/overview/select/product_tile_mba_13__ci4jh6tvqvyq_large.png",
    description:"An overpriced laptop",
    url:"https://www.apple.com/macbook-air-13-and-15-m2/"
  },
  item2 = {
    name:"Scrimba Pro",
    img:"https://yt3.googleusercontent.com/1-4XurcrfGySCcRZrY8r3Uh_iwlwIssrdMdXyIlimCiAZNObH6voe2jYZzEtwwSmFpnfeaw9KQ=w2120-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    description:"An amazing learning platform subscription",
    url:"https://scrimba.com/gifts"
  }

];

for(i =0;i<wishlist.length;i++){
  wishlistEl.innerHTML += 
  `<h2 class="name">${wishlist[i].name}</h2>
  <img src="${wishlist[i].img}" class="item-img">
  <p class="description">${wishlist[i].description}</p>
  <a class="url" href="${wishlist[i].url}" target="_blank">Link</a>
  `
}

/** Challenge: 
  - Iterate over the wishlist array.
  - Dynamically render your wishlist from the array.
  - Style the wishlist with CSS.
**/