import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

const min = 1;
const max = 5;

const Product = ({ id, price, image, description, title, category }) => {
  const [rating] = useState(Math.floor(Math.random() * (max - min) + min));

  const dispatch = useDispatch();
 

  function addToReduxBaskit() {
    const items = {
        id,
        price,
        image,
        description,
        title,
        category,
        rating,
      };
    dispatch(addToBasket(items));
  }

  return (
    <div className="relative z-333 flex flex-col justify-between space-y-6 m-4 p-4 sm:8 shadow-md bg-white">
      <h1 className="absolute top-2 sm:top-1  text-xs text-gray-500  right-2 z-333">{category}</h1>
      <div className="flex justify-center">
        <Image
          src={image}
          width={200}
          height={200}
          objectFit="contain"
          className="cursor-pointer z-30"
        />
      </div> 
      <div className="mt-1">
        <h1 className="text-sm ">{title}</h1>
        <p className="line-clamp-2 mt-3 text-gray-600 text-sm">{description}</p>
      </div>
      <h1 className="text-sm">${price}</h1>

      <div className="flex flex-col sm:flex-row justify-between">
        <div className="flex pb-4 sm:pb-0">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="text-yellow-500 h-5" key={i} />
            ))}
        </div>
        <button onClick={addToReduxBaskit} className="btn cursor-pointer">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
