import AddIcon from "@mui/icons-material/Add";

function Button({ onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        type="button"
        className="flex items-center justify-evenly px-2 text-[#FFFFFF] rounded-[10px] w-[162px] h-[45px] bg-[#0B2585] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 duration-300 font-sans font-semibold text-sm mr-2 mb-2 focus:outline-none">
        <AddIcon className="text-[#FFFFFF] " />
        Add new project
      </button>
    </>
  );
}

export default Button;
