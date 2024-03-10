import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from "react-icons/ai"
import { HiLocationMarker } from 'react-icons/hi'
const Footer = () => {
    const copyright = new Date().getFullYear()
    return (
        <footer className='bg-primary  padding py-16 text-gray-100' >
            <div className="lg:flex justify-between space-y-6 lg:space-y-0  text-center lg:text-left px-4 lg:px-0">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3 mt-6" data-aos="fade-right">
                    <HiLocationMarker className="text-3xl" />
                    <p>H#000 (0th Floor), Road #00, <br className="hidden lg:block" />
                        New DOHS, Mohakhali, Dhaka, Bangladesh
                    </p>
                </div>
                <div data-aos="zoom-in">
                    <h1 className="text-2xl font-semibold mb-6">Company</h1>
                    <ul className="space-y-3">
                        <li>About</li>
                        <li>Project</li>
                        <li>Our Team</li>
                        <li>Terms Condition</li>
                        <li>Submit Listing</li>
                    </ul>
                </div>
                <div data-aos="zoom-in">
                    <h1 className="text-2xl font-semibold mb-6">Company</h1>
                    <ul className="space-y-3">
                        <li>About</li>
                        <li>Project</li>
                        <li>Our Team</li>
                        <li>Terms Condition</li>
                        <li>Submit Listing</li>
                    </ul>
                </div>
                <div data-aos="fade-left">
                    <h1 className="text-2xl font-semibold mb-6">Company</h1>
                    <p className="leading-7 mb-4">
                        Lorem ipsum dolor sit amet, consectetur <br className="hidden lg:block" />
                        adipiscing elit. Purus commodo ipsum<br className="hidden lg:block" />
                        duis laoreet maecenas. Feugiat
                    </p>
                    <div className="flex gap-5 text-4xl justify-center lg:justify-start">
                        <AiFillFacebook />
                        <AiFillInstagram />
                        <AiFillLinkedin />
                        <AiFillYoutube />
                    </div>
                </div>
            </div>
            <div className="text-center lg:mt-14 mt-10">
                <p > {copyright} Jerin's parlour. All Rights Reserved. Website by Jerin's parlour.</p>
            </div>
        </footer>
    );
};

export default Footer;