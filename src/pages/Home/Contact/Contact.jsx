import CustomBtn from "../../../components/CustomBtn";
import ContactInput from "./ContactInput";

const Contact = () => {
    return (
        <section className="bg-[#FFF8F5]  py-16 px-4 lg:px-0" id="contact-us" >
            <h2 className="font-semibold text-3xl lg:text-5xl text-center mb-10">
                Let us handle your <br className="hidden lg:block" />
                project, professionally.
            </h2>
            <form className=" lg:w-[630px] mx-auto" data-aos="zoom-in" >
                <div className="grid lg:grid-cols-2 gap-5">
                    {/*//*----- Input First Name----- */}
                    <ContactInput type={'text'} placeholder={"First name"} />
                    {/*//*----- Input Last Name----- */}
                    <ContactInput type={'text'} placeholder={"Last name"} />
                    {/*//*----- Input Email----- */}
                    <ContactInput type={'email'} placeholder={"Email address"} />
                    {/*//*----- Input Number----- */}
                    <ContactInput type={'number'} placeholder={"Phone Number"} />
                </div>
                <div>
                    <textarea className="w-full my-5 p-3 outline-none rounded-md" placeholder="Your message" name="" id="" rows="4"></textarea>
                </div>
                <div className="text-center">
                    <CustomBtn>Send Message</CustomBtn>
                </div>
            </form>
        </section>
    );
};

export default Contact;