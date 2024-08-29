import { useContext } from "react";
import Title from "./Title";
import { StoreContext } from "../context/StoreContext";

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(StoreContext);

  console.log(getCartAmount());
  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"CART"} text2={"TOTAL"} />
      </div>

      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency} {(getCartAmount()).toFixed(2)}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>
            {currency} {delivery_fee}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b>Total</b>
          <b>
            {currency}{" "}
            {getCartAmount() === 0.00 ? '0.00' : (getCartAmount() + delivery_fee).toFixed(2)}
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
