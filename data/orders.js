export const orders = JSON.parse(localStorage.getItem('orders')) || [];

export function addOrder(order){
  //this unshift will add the order in the front of the array
  orders.unshift(order);
  saveToStorage();
}

function saveToStorage(){
  localStorage.setItem('orders',JSON.stringify(orders));
}
