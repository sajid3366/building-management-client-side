
const Coupons = () => {
    return (
        <div className="bg-slate-100 p-2 md:py-10 ">
            <div className="max-w-md mx-auto text-center">
                <h2 className="text-3xl mb-2">Today's Offer</h2>
                <p>Do Not Miss The Opportunity. Grab Your Apartment Today</p>
            </div>
            <div className=" md:flex items-center justify-around">
                <div className="mt-5">
                    <h2>🏠 Unbelievable 50% DISCOUNT on Your Dream Apartment! 🏠</h2>
                    <h3>🌟 Limited Time Offer: Embrace luxury living at half the price!</h3>
                    <p className="py-2 mt-5 px-4 rounded-sm text-center text-white w-[150px] cursor-pointer bg-[#12486B]">Get The Code</p>

                </div>
                <div className="mt-8">
                    <img className="h-[200px] w-full" src="https://i.ibb.co/Tb8gchV/coupon2.jpg" alt="" />
                </div>

            </div>
        </div>
    );
};

export default Coupons;