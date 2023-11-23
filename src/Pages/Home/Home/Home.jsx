import AboutBuilding from "../AboutBuilding/AboutBuilding";
import ApartmentLocation from "../ApartmentLocation/ApartmentLocation";
import Banner from "../Banner/Banner";
import Coupons from "../Coupons/Coupons";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutBuilding></AboutBuilding>
            <Coupons></Coupons>
            <ApartmentLocation></ApartmentLocation>
        </div>
    );
};

export default Home;
