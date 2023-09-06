
const ServiceCart = ({ service }) => {
    const { image, title, price, discription } = service;
    return (
        <div className=" p-8 text-center space-y-2">
            <img className="w-16 mx-auto" src={image} alt="" />
            <h5 className="font-medium">{title}</h5>
            <p className="text-[#f63e7b] font-medium">$ {price}</p>
            <p className="text-[#555]">{discription}</p>
        </div>
    );
};

export default ServiceCart;