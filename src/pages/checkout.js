import Image from "next/image";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { selectItems, selectTotal } from "../slices/basketSlice";

const checkout = () => {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  return (
    <div className="bg-gray-100 min-h-screen">
     <div className="sticky top-0 z-999">
     <Header />
      <Nav />
     </div>
      {/* left side */}
      <div className=" md:flex md:space-x-4">
        <div className="bg-white lg:max-w-screen-1xl  mx-auto">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={200}
            className="z-99"
          />
          <h1 className="ml-5">
            {items.length > 0 ? `Shoping Basket` : `Your Basket is Empty`}
          </h1>
          {items.map((item, i) => (
            <CheckoutProduct
              key={i}
              id={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              image={item.image}
              category={item.category}
              rating={item.rating}
            />
          ))}
        </div>
        {/* right side */}
        {items.length > 0 && (
          <div className="flex flex-col bg-white p-10">
            <h2 className="text-sm">
              Subtotal({items.length}) items: <span>${total}</span>{" "}
            </h2>
            <button className="btn m-4 text-xs">Processed Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default checkout;
