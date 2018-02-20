var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var cartLiteral = []

function addToCart(item) {
  cartLiteral.push(item)
  console.log(`${item} has been added to your cart.`)
  item = {[item]: getRandomInt(100)}
  cart.push(item)
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log(`Your shopping cart is empty.`)
  }
  else if (cart.length === 1) {
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][`${Object.keys(cart[0])}`]}.`)
  }
  else if (cart.length === 2) {
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][`${Object.keys(cart[0])}`]} and ${Object.keys(cart[1])} at $${cart[1][`${Object.keys(cart[1])}`]}.`)
  }
  else {
      console.log(`In your cart, you have `)
      for (i = 0; i < cart.length; i++) {
        var complex = `${Object.keys(cart[i])} at $${cart[i][`${Object.keys(cart[i])}`]}, `
        console.log(`${complex}`)
    }
    console.log(`.`)
}


function total() {
  var tot = 0
  for (i = 0; i < cart.length; i++) {
    tot += cart[i][`${Object.keys(cart[i])}`]
  }
  return `$${tot}.`
}

function removeFromCart(item) {
  if (cartLiteral.includes(item)) {
    var What = cartLiteral.indexOf(item)
    cart.splice(What, 1)
    cartLiteral.splice(What, 1)
    return cart
  }
  else {
    return "That item is not in your cart."
  }
}


}
function placeOrder(cardNumber) {
  var returnOrder = `Your total cost is ${total()}, which will be charged to card ${cardNumber}.`
  cart = []
  return returnOrder
  
}
