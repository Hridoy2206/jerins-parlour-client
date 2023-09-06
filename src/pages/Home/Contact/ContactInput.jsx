
const ContactInput = ({ type, placeholder }) => {
    return (
        <div>
            <input className="text-gray-600 p-3 w-full rounded-md outline-none" type={type} placeholder={placeholder} />
        </div>
    );
};

export default ContactInput;