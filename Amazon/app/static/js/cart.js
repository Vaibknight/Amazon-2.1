// function getCartItems() {
//     db.collection("cart-items").onSnapshot((snapshot) => {
//         let cartItems = [];
//         snapshot.docs.forEach((doc) => {
//             cartItems.push({
//                 id: doc.id, 
//                 ...doc.data()
//             })
//         })
//        generateCartItems(cartItems);
//        getTotalCost(cartItems);
//     })
// }


// function getTotalCost(items){
//     let totalCost = 0;
//     items.forEach((item) =>{
//         totalCost += (item.price * item.quantity);
//     })
//     document.querySelector(".total-cost-number").innerText = numeral(totalCost).format('0,0.00');
// }

// function decreaseCount(itemId) {
//     let cartItem = db.collection("cart-items").doc(itemId);
//     cartItem.get().then(function(doc) {
//         if (doc.exists) {
//             if (doc.data().quantity > 1) {
//                 cartItem.update({
//                     quantity: doc.data().quantity - 1
//                 })
//             }
//         }
//     })
// }

// function increaseCount(itemId) {
//     let cartItem = db.collection("cart-items").doc(itemId);
//     cartItem.get().then(function(doc) {
//         if (doc.exists) {
//             if (doc.data().quantity > 0) {
//                 cartItem.update({
//                     quantity: doc.data().quantity + 1
//                 })
//             }
//         }
//     })
// }


// function deleteItem(itemId){
//     db.collection("cart-items").doc(itemId).delete();
// }

// function generateCartItems(cartItems){
//      let itemsHTML = ``;
//      cartItems.forEach((item) =>{
//         itemsHTML += `
            
//             <div class="cart-item flex items-center pb-4 mt-16">
//             <div class="cart-item-image w-40 h-24 bg-white p-4 rounded-lg">
//                 <img class="w-full h-full object-contain" src ="${item.image}">
//             </div>
//             <div class="cart-item-details font-bold  flex-grow w-48 ml-6">
//                 <div class="cart-title">
//                 ${item.name}
//                 </div>
//                 <div class="cart-brand text-sm text-gray-400">
//                 ${item.make}
//                 </div>
//             </div>
//             <div class="cart-item-counter w-48 flex items-counter">
//                 <div data-id="${item.id}" class="cart-item-decrease  cursor pointer text-gray-400 bg-gray-200 rounded h-6 w-6 flex justify-center items-center hover:bg-gray-300 mr-2">
//                     <i class="fa fa-angle-left font-bold"></i>
//                     &nbsp;
//                 </div>
                
//                 <h4 class="text-gray-400">x${item.quantity}</h4>
//                 &nbsp;
//                 <div data-id="${item.id}" class="cart-item-increase cursor pointer text-gray-400 bg-gray-200 rounded h-6 w-6 flex justify-center items-center hover:bg-gray-300 mr-2">
//                     &nbsp;
//                     <i class="fa fa-angle-right font-bold"></i>
//                 </div>
//             </div>
//             <div  class="cart-item-total-cost w-48 font-bold text-gray-400">₹
//             ${numeral(item.price * item.quantity).format('0,0.00')}
//             </div>
//             <div data-id="${item.id}" class="cart-item-delete w-10 font-bold text-gray-300 cursor-pointer hover:text-gray-400">
//                 <i class="material-icons">delete</i>
//             </div>
//             </div>
//         `;
//      })
//      document.querySelector(".cart-items").innerHTML=itemsHTML;
//      createEventListeners();
// }

// function createEventListeners() {
//     let decreaseButtons =  document.querySelectorAll(".cart-item-decrease");
//     let increaseButtons =  document.querySelectorAll(".cart-item-increase");

//     let deleteButtons = document.querySelectorAll(".cart-item-delete");

//     decreaseButtons.forEach((button) => {
//         button.addEventListener("click", function(){
//             decreaseCount(button.dataset.id);
//         })
//     })

//     increaseButtons.forEach((button) => {
//         button.addEventListener("click", function() {
//             increaseCount(button.dataset.id)
//         })
//     })

//     deleteButtons.forEach((button) =>{
//         button.addEventListener("click", function(){
//             deleteItem(button.dataset.id)
//         })
//     })

// }
// // $('#itemsJson').val(JSON.stringify(cart));

//   getCartItems();