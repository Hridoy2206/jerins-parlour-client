import { PulseLoader } from "react-spinners";

const CustomLoading = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <PulseLoader color="#36d7b7" />
        </div>
    );
};

export default CustomLoading;