import { MenuIcon } from "@heroicons/react/solid";
const Nav = () => {
  return (
    <div className=" text-white space-x-4 flex items-center z-999 text-xs py-1 px-2 bg-amazon_blue-light">
      <div className="flex items-center cursor-pointer">
        <MenuIcon className="h-6" />
        <h3 className="text-sm">All</h3>
      </div>
      <div className="flex  justify-between flex-grow sm:flex-grow-0 focus:select-none items-center text-xs  sm:space-x-2">
        <p className="cursor-pointer pl-0.5 sm:px-0">Today's Deals</p>
        <p className="cursor-pointer pl-o.5 sm:px-0">Customer Service</p>
        <p className="cursor-pointer pl-0.5 sm:px-0">Gift Cards</p>
        <p className="cursor-pointer pl-0.5 sm:px-0">Registory</p>
        <p className="cursor-pointer pl-0.5 sm:px-0">Sell</p>
      </div>
    </div>
  );
};

export default Nav;
