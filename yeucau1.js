const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
if(!shoppingCart.includes("Meat")) {
    shoppingCart.unshift("Meat")
}
if(!shoppingCart.includes("Sugar")) {
    shoppingCart.push("Sugar")
}
if(true) {
   var newCart = shoppingCart.filter(e => e !== 'Honey')
}
if(true) {
    var newState = shoppingCart.map(ele =>
        ele === "Tea" ?  'Green Tea' : ele
    );
}
console.log(shoppingCart)
console.log(newCart)
console.log(newState)
console.log("UserID: "+ Math.random().toString(36).slice(2))
console.log("XX:XX:XX:XX:XX:XX".replace(/X/g, function() {
    return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16))
  }))