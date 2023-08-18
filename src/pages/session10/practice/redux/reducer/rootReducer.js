import { combineReducers } from "redux";
import { notify } from "./notify";
import { listProduct } from "./listProduct";
import { listCart } from "./listCart";
// sử dụng combineReducers đều gộp các reducer thành phần
export const rootReducer = combineReducers({ listProduct, listCart, notify });
