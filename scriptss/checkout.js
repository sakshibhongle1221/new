import { renderOrderSummary } from "./checkout/orderSummary.js";
import {renderPaymentSummary} from "./checkout/paymentSummary.js";
import '../data/cart-class.js';
//this will run all the code inside this file without importing anything which is what we need in this situation.
renderOrderSummary();
renderPaymentSummary();
