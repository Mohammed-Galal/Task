import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import CartIcon from "../CartIcon";

const defaultConfig = {};
defaultConfig.modules = [Autoplay, A11y, Scrollbar, Pagination, Navigation];
defaultConfig.navigation = false;
defaultConfig.spaceBetween = 28;
defaultConfig.slidesPerView = "auto";
defaultConfig.autoplay = false && {
  delay: 1500,
  pauseOnMouseEnter: true,
};
defaultConfig.scrollbar = {
  snapOnRelease: true,
  draggable: true,
};

export default function () {
  return (
    <>
      <section id="hero" className="container-fluid container-lg">
        <div className="row gap-3 text-center">
          <div className="align-items-center col-12 col-md d-flex flex-column gap-2 m-auto">
            <h3 className="m-0">Some Title!</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iste
            soluta amet officia, voluptatibus saepe, cumque magnam rem nam
            labore maiores quidem earum? Cumque odit distinctio molestias
            dolorem deleniti nostrum.
            <button type="button" className="btn px-5 mt-3 mt-md-4">
              explore
            </button>
          </div>

          <ul className="col-12 col-md d-grid gap-2 list-unstyled m-0 py-0">
            <li>
              <img src="/assets/beats.jpg" alt="beats" />
            </li>

            <li>
              <img src="/assets/watch.jpg" alt="watch" />
            </li>

            <li>
              <img src="/assets/mouse.jpg" alt="mouse" />
            </li>
          </ul>
        </div>
      </section>

      <Products />
    </>
  );
}

function Products() {
  const dispatch = useDispatch(),
    products = useSelector((e) => e.products).data;

  return (
    <section id="products" className="container-fluid container-lg">
      <h4 className="mb-4">Products</h4>
      <Swiper {...defaultConfig}>{products.map(productItem)}</Swiper>
    </section>
  );

  function productItem(data) {
    return (
      <SwiperSlide key={data.id} style={{ width: "auto" }}>
        <div className="product-item p-2">
          <img src="https://placehold.co/600x400/0004/fff.png" alt="img" />

          <div className="d-flex decs flex-column gap-1 mt-2">
            <span className="h6 m-0" style={{ color: "var(--primary)" }}>
              {data.name}
            </span>
            <p className="m-0">{data.description}</p>
            <p className="m-0">
              <span>{data.price}</span> $
            </p>

            <button
              type="button"
              className="align-items-center btn d-flex gap-1 justify-content-center mt-2 text-capitalize"
              onClick={addItemToCart}
            >
              {CartIcon}
              <span>add to cart</span>
            </button>
          </div>
        </div>
      </SwiperSlide>
    );

    function addItemToCart() {
      dispatch({ type: "products/addToCart", data });
    }
  }
}
