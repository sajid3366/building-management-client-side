
const ApartmentLocation = () => {
    return (
        <div className="my-10 max-w-5xl mx-auto p-2">
            <div className="text-center">
                <h2 className="text-3xl">Find Us on the Map</h2>
            </div>
            <div className="flex mt-10 justify-between gap-x-10 items-center">

                <div className="w-1/2">
                    <img src="https://i.ibb.co/Kyy0SjS/map.png" alt="" />
                </div>
                <div className="w-1/2">
                    <h2 className="text-xl font-bold">Adress</h2>
                    <p className="font-medium">Smart Build, Gulshan-1, Dhaka</p>
                    <p className="font-medium">Support: smart@build.com</p>
                    <p className="font-medium">Helpline: 01404112553</p>
                </div>
            </div>
        </div>
    );
};

export default ApartmentLocation;