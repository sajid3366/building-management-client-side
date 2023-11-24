import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllApartment = () => {
    const axiosPublic = useAxiosPublic();

    const {data: apartment = [] } = useQuery({
        queryKey: ['apartment'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/apartments')
            return res.data;
        }
    })
    return [apartment];
};

export default useAllApartment;