import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useDispatch } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
} from "../slices/basketSlice";

const CheckoutProduct = ({
  id,
  description,
  price,
  image,
  category,
  rating,
  title,
}) => {
  const dispatch = useDispatch();
  

  //   add item in basket
  function addItemToBasket() {
    const items = {
      id,
      description,
      price,
      image,
      category,
      rating,
      title,
    };

    dispatch(addToBasket(items));
  }
  //   remove item function
  function removeItemFromBasket() {
    dispatch(removeFromBasket({ id }));
  }

  return (
      <div className=" sm:grid mx-3 md:mx-0 my-10 grid-cols-5 ">
        <div className="col-span-1 flex justify-center ">
          <Image src={image} height={200} width={200} objectFit="contain" className="z-99" />
        </div>
        <div className="col-span-3 space-y-2 ">
          <h1>{title}</h1>
          <div className="flex">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <StarIcon className="h-7 text-yellow-500" />
              ))}
          </div>
          <p>${price}</p>
          <p className="line-clamp-3 sm:text:sm text-xs mb-2">{description}</p>
        </div>
        <div className="col-span-1 flex flex-col space-y-2 justify-end mr-2 mt-2">
          <button onClick={addItemToBasket} className="btn  text-xs md:text-sm">
            Add to Cart
          </button>
          <button
            onClick={removeItemFromBasket}
            className="btn text-xs md:text-sm"
          >
            Remove From Cart
          </button>
        </div>
      </div>
  );
};

export default CheckoutProduct;
