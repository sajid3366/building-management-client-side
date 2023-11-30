
const AboutBuilding = () => {
    return (
        <div className="my-16">
            <div className="max-w-md mx-auto text-center">
                <h2 className="text-3xl mb-8 ">About the Building</h2>
            </div>
            <div className="md:flex mt-5 p-2 gap-10 justify-between items-center">
                <div>
                    {/* <div className="w-[400px] h-[300px] bg-red-600 "></div> */}
                    <img className="w-[400px] border-l-[20px] border-b-[20px] rounded-sm border-slate-200" src="https://i.ibb.co/kMmj3SL/deborah-cortelazzi-g-REqu-CUXQLI-unsplash.jpg" alt="" />
                </div>
                <div className="flex-1 mt-5 md:mt-0">
                    <p>Step into Smart Build Ltd.'s premier rental spaces, where innovation and comfort converge. Our strategically located offices boast cutting-edge smart technologies, fostering collaboration and productivity. With a commitment to sustainability, our one-year legacy reflects excellence in providing efficient, client-centric workspaces for businesses to thrive. Welcome to the future of office solutions.... <button className="btn text-red-600">Learn More</button></p>
                    
                </div>
            </div>
        </div>
    );
};

export default AboutBuilding;