import { renderOrderSummary } from "./checkout/orderSummary.js";
import {renderPaymentSummary} from "./checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
import { loadCart } from "../data/cart.js";
//import '../data/cart-class.js';
//this will run all the code inside this file without importing anything which is what we need in this situation.

Promise.all([
  new Promise((resolve)=>{
  loadProducts(()=>{
    resolve('value1');
  });
 }),

 new Promise((resolve)=>{
    loadCart(()=>{
      resolve();
    });
  })

]).then((values)=>{
  console.log (values);
  renderOrderSummary();
  renderPaymentSummary();
});

/*
new Promise((resolve)=>{
  loadProducts(()=>{
    resolve(value1);
  });

}).then((value)=>{
  return new Promise((resolve)=>{
    loadCart(()=>{
      resolve();
    });
  });

}).then(()=>{
  renderOrderSummary();
  renderPaymentSummary();
});
*/