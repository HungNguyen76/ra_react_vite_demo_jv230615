import ListCart from "./ListCart";
import ListProduct from "./ListProduct";

function ShoppingCart() {
  return (
    <div className="container" style={{ width: "40rem", marginLeft: "20px" }}>
      <div className="page-header">
        <h1>
          MiniProject - Shopping Carts
        </h1>
      </div>
      <div className="row">
        <ListProduct />
        <ListCart />
      </div>
    </div>
  );
}

export default ShoppingCart;
