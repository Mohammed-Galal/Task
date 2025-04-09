import { useDispatch, useSelector } from "react-redux";
import CartIcon from "../CartIcon";

export default function () {
  const dispatch = useDispatch(),
    cartItems = useSelector((e) => e.products).cart;

  let quantity = 0;
  cartItems.forEach((i) => (quantity += i.quantity));

  return (
    <nav
      className="py-3"
      style={{ background: "#fff", color: "var(--primary)" }}
    >
      <ul className="container d-flex justify-content-between list-unstyled my-0">
        <li style={{ fontSize: "20px", fontWeight: "bold" }}>
          MG <sub>Store</sub>
        </li>
        <li
          className="position-relative"
          style={{ cursor: "pointer" }}
          onClick={() => dispatch({ type: "products/showCart", payload: true })}
        >
          {CartIcon}
          <span className="position-absolute px-2">{quantity}</span>
        </li>
      </ul>
    </nav>
  );
}
