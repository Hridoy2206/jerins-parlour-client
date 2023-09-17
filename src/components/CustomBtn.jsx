
const CustomBtn = ({ children }) => {
    return (
        <div>
            <button className='px-10 py-3 rounded-md active:scale-95 duration-300 bg-primary text-[#f1f1f1]'>{children}</button>
        </div>
    );
};

export default CustomBtn;