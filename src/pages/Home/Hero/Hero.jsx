import heroImg from "../../../assets/images/HeroImg.png"
import CustomBtn from "../../../components/CustomBtn";
const Hero = () => {
    return (
        <div className="bg-[#FFF8F5] pb-8 "  >
            <div className="lg:flex items-center justify-between lg:padding gap-12 space-y-6 lg:space-y-0 px-4">
                <div className="space-y-8 text-center lg:text-left">
                    <h1 className="font-bold text-3xl lg:text-5xl lg:flex flex-col gap-3">
                        <span>BEAUTY SALON </span>
                        <span> FOR EVERY WOMEN</span>
                    </h1>
                    <p className=" text-[#555] text-xl">
                        Lorem ipsum, dolor sit amet  consectetur  <br className="lg:block hidden" /> adipisicing elit. Quos placeat harum  dictaur <br className="lg:block hidden" /> facere fugiat iusto magni iure
                    </p>
                    <CustomBtn>Get an Appointment</CustomBtn>
                </div>
                <div className="lg:w-1/2 mt-0 " data-aos="fade-left" >
                    <img src={heroImg} className="w-full" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;