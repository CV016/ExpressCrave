import { Link } from "react-router-dom";
import LinkButton from "../../UI/LinkButton";
import Button from "../../UI/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
// import { getUsername } from "../user/userSlice";
import EmptyCart from "./EmptyCart";

function Cart() {
  const username = useSelector((state) => state.user.username);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  // console.log(username);

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <LinkButton
        to="/menu"
        className="text-sm text-blue-400 hover:text-blue-700 hover:underline"
      >
        &larr; Back to menu
      </LinkButton>

      <h2 className="mt-8 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mt-4 divide-y divide-stone-300 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>
        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
