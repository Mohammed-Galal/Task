import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function () {
  const dispatch = useDispatch(),
    cart = useSelector((e) => e.products).cart;

  let totalPrice = 0;

  return (
    <>
      <Dismisser />
      <div className="container m-auto">
        <div className="d-flex flex-column gap-3 p-3 text-capitalize">
          <p
            className="align-items-center d-flex justify-content-between m-0"
            style={{ color: "var(--primary)", fontWeight: "600" }}
          >
            Shopping Cart
            <span className="remove-btn" onClick={clearCart}>
              remove all
            </span>
          </p>

          <ul className="list-unstyled m-0 p-0 d-flex flex-column gap-2">
            {cart.map(cartItem)}
          </ul>

          <hr className="m-0" />
          <p className="m-0">
            total price:{" "}
            <span style={{ color: "var(--primary)" }}>{totalPrice} $</span>
          </p>
        </div>
      </div>
    </>
  );

  function clearCart() {
    dispatch({ type: "products/clearCart" });
  }

  function cartItem(i) {
    totalPrice += i.data.price * i.quantity;

    return (
      <li key={i.data.id} className="d-flex align-items-center gap-3">
        <span className="remove-btn" onClick={removeFromCart}>
          remove
        </span>

        <span style={{ fontSize: "smaller", fontWeight: "600" }}>
          {i.data.name}
        </span>

        <span
          style={{
            color: "var(--primary)",
            marginLeft: "auto",
          }}
        >
          {i.data.price} $
        </span>

        <div className="align-items-center d-flex gap-2">
          <button type="button" className="btn control" onClick={addToCart}>
            +
          </button>
          <span>{i.quantity}</span>
          <button
            type="button"
            className="btn control"
            onClick={decreaseQuantity}
          >
            -
          </button>
        </div>
      </li>
    );

    function addToCart() {
      dispatch({ type: "products/addToCart", data: i.data });
    }

    function decreaseQuantity() {
      dispatch({ type: "products/decreaseQuantity", data: i.data });
    }

    function removeFromCart() {
      dispatch({ type: "products/removeFromCart", data: i.data });
    }
  }
}

function Dismisser() {
  const show = useSelector((e) => e.products).show,
    dispatch = useDispatch();

  useEffect(
    function () {
      document.querySelector("aside").style.display = show ? "flex" : "none";
    },
    [show]
  );

  return (
    <div className="dismisser position-absolute" onClick={closePopover}></div>
  );
  function closePopover() {
    dispatch({ type: "products/showCart", payload: false });
  }
}
