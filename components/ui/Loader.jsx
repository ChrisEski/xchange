import { PuffLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-[300px]">
      <PuffLoader color="#000" />
    </div>
  );
};

export default Loader;
