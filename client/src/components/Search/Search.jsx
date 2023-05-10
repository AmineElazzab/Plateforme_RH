import Search from "../../assets/icons/Search.svg";
import Line from "../../assets/icons/Line 1.svg";
function Searchbar() {
  return (
    <div className="flex flex-row items-center absolute bg-gray-200 rounded-lg px-[10px]  pr-[22px] pl-[10px]  gap-[10px] w-[442px] h-[39px] left-[248px] top-[30px] right-[750px] shadow-md ">
      <img src={Search} alt="search" />
      <img src={Line} alt="line" />
      <input
        placeholder="Search"
        placeholderTextColor="#A9A9A9"
        type="text"
        className="font-normal text-sm  text-black font-sans bg-transparent outline-none"
      />
    </div>
  );
}

export default Searchbar;