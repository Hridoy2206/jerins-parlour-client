import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Contact from "../Contact/Contact";
import HappyCustomer from "../HappyCustomer/HappyCustomer";
import Hero from "../Hero/Hero";
import OurServices from "../OurServices/OurServices";

const Home = () => {
    return (
        <div>
            <Hero />
            <OurServices />
            <HappyCustomer />
            <Contact />
        </div>
    );
};

export default Home;