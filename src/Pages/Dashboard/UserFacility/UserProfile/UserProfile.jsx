import SectionTitle from "../../../../Shared/SectionTitle/SectionTitle";
import useAuth from "../../../../hooks/useAuth";

const UserProfile = () => {
    const {user} = useAuth();
    return (
        <div className="">
            <SectionTitle heading="My Profile"></SectionTitle>
            <div className="bg-[#F9F5F6] h-screen py-10 px-10 flex gap-16">
                <img className="rounded-full h-[200px] w-[200px]" src={user?.photoURL} alt="" />
                <div className="mt-10">
                    <h2 className="font-semibold">Full Name</h2>
                    <h2 className="text-xl">{user?.displayName}</h2>
                    <h2 className="font-semibold mt-4">Email Address</h2>
                    <h2 className="text-xl ">{user?.email}</h2>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;