import { MdClose } from "react-icons/md";

function CancelButton() {
  return (
    <div className=" flex flex-col items-center justify-center h-5 w-5 text-white rounded-full bg-gray-800 shadow-2xl mr-2">
      <MdClose />
    </div>
  );
}

export default CancelButton;
