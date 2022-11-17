import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { acLoading } from "../../Redux/Loading";
import { toast } from "react-toastify";
import close from "../../Assets/Icons/close_ring.svg";
import "./productView.css";
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
// import { MostView } from "./MostViewed/MostView";
import { useNavigate } from "react-router-dom";

export function ProductView() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const location = useLocation();
  const id = location.pathname.split("/").pop();
  const [productData, setProductData] = useState({});
  const [img, setImg] = useState([]);
  const [addOrder, setAddOrder] = useState(false);

  const relodeProduct = useSelector((state) => state.relodeProduct);

  useEffect(() => {
    dispatch(acLoading(true));
    axios
      .get(`https://honey.pandashop.uz/product/view/${id}`, {
        headers: {
          token: "token",
        },
      })
      .then((res) => {
        dispatch(acLoading(false));
        setProductData(res.data);
        setImg(res.data.img);
      })
      .catch((err) => {
        dispatch(acLoading(false));
        console.log(err);
      });
  }, [id, dispatch, relodeProduct]);


  return (
    <div id="product-view-main-container">
      <h1>Sifatli Tog' Asali</h1>

      <div className="product-view-container">
        <div className="product-view-img">
          <Swiper

            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            {img.map((item, index) => {
              return (
                <>
                  <SwiperSlide key={index}><img src={item} alt="" /></SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </div>

        <div className="product-view-about">
          <p className="product-view-about-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis illum cupiditate porro consequatur aspernatur? Atque porro explicabo, saepe beatae labore debitis laboriosam esse recusandae neque nemo dolore facilis, sed unde?</p>

          <div className="product-view-info">
            <h1>Narxi  : <p> {productData.price} so'm</p></h1>
            <h1>Og'irligi  : <p>{productData.weight} g</p></h1>
            <h1>Xudud  : <p>{productData.territory}</p></h1>
          </div>

          <div className="product-view-btns">
            <button
              onClick={(e) => {
                e.preventDefault();
                setAddOrder(true);
              }}
            >
              Xarid qilish
            </button>
            <button
              onClick={() => {
                navigate("/orders")
              }}
            >Mening Buyurtmalarim</button>
          </div>
        </div>
      </div>

      <div className={addOrder ? "product_body open" : "product_body"}>
        <form
          className={addOrder ? "modal_body activ" : "modal_body"}
          onSubmit={(e) => {
            e.preventDefault();

            //imgni massiv sifati jo'natadigan qilish kerak

            var data = JSON.stringify({
              customer: e.target.customer.value,
              phone: e.target.phone.value,
              address: e.target.address.value,
              name: productData.name,
              price: productData.price,
              territory: productData.territory,
              weight: productData.weight,
              about: productData.about,
              img: img[0],
            });

            axios("https://honey.pandashop.uz/order/add", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              data,
            }
            )
              .then(function (response) {
                toast.success(response.data.message);
                console.log(response.data);
                setAddOrder(false);
                e.target.customer.value = "";
                e.target.phone.value = "";
                e.target.address.value = "";
              })
              .catch(function (error) {
                toast(error.response.data.message);
              });
          }}
        >
          <button
            id="close_form"
            onClick={(e) => {
              e.preventDefault();
              setAddOrder(false);
            }}
          >
            <figure className="close_form_figure">
              <img src={close} alt="" />
            </figure>
          </button>

          <div className="product-view-form-texts">
            <p>
              {productData.name} {productData.weight}
            </p>
            <p>{productData.price} so'm</p>
          </div>

          <div className="product-view-inputs">
            <input
              type="text"
              name="customer"
              placeholder="Isim Familyangiz"
              autoComplete="off"
            />
            <input
              name="phone"
              placeholder="telefon raqamingiz"
              autoComplete="off"
            />
            <input
              type="text"
              name="address"
              placeholder="Sizning manzilingiz"
              autoComplete="off"
            />
            <button type="submit">Buyurtma Berish</button>
          </div>
        </form>
      </div>

      {/* <MostView /> */}
    </div>
  );
}
