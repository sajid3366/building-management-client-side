import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Announcements = () => {
    const axiosSecure = useAxiosSecure();
    const { data: announcements = [] } = useQuery({
        queryKey: ['user-announcements'],
        queryFn: async () => {
            const res = await axiosSecure.get('/announcement')
            console.log(res.data);
            return res.data;
        }
    })
    console.log(announcements);
    return (
        <div >
            <SectionTitle heading="Announcements"></SectionTitle>
            <div className="">
                {
                    announcements.map(announcement => <div key={announcement.title} className="join join-vertical mb-3 w-full">
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                                {announcement?.title}
                            </div>
                            <div className="collapse-content">
                                <p>{announcement?.description}</p>
                            </div>
                        </div>
                        
                    </div>)
                }
            </div>
        </div>
    );
};

export default Announcements;