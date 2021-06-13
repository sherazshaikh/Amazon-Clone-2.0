import Image from "next/image";
import { SearchIcon, ShoppingCartIcon } from "@heroicons/react/solid";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import {useRouter} from "next/router"
const Header = () => {
  const items = useSelector(selectItems)
  const router = useRouter()
  return (
    <div className="bg-amazon_blue px-2 py-2 flex items-center  z-999 md:space-x-7">
      <div className="flex items-center flex-grow sm:flex-grow-0 ">
        <Image
          src="https://links.papareact.com/f90"
          height={40}
          width={70}
          objectFit="contain"
          className="cursor-pointer "
          onClick={ ()=> router.push('/')}
        />
      </div>
      <div className="rounded-md  flex-grow bg-yellow-400 hover:bg-yellow-500  flex-shrink hidden sm:flex items-center">
        <input
          className=" rounded-l-md py-2 px-2 flex-grow border-none focus:outline-none"
          type="text"
        />
        <SearchIcon className="h-8 p-1 cursor-pointer" />
      </div>
      <div className="flex text-white space-x-2  text-xs items-center">
        <div>
          <p className="cursor-pointer">Hello sign in</p>
          <p className="font-bold cursor-pointer">Account & List</p>
        </div>
        <div>
          <p className="cursor-pointer">Return</p>
          <p className="font-bold cursor-pointer">& Order</p>
        </div>
        <div onClick={()=> router.push('/checkout')} className="flex items-end cursor-pointer relative">
          <span className="absolute text-xs  -top-2 left-4 px-1 bg-yellow-500 text-black rounded-full">
            {items.length}
          </span>
          <ShoppingCartIcon className="h-8 " />
          <p className="font-bold hidden  sm:block">Cart</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
