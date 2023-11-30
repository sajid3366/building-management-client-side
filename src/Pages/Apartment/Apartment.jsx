import useAllApartment from "../../hooks/useAllApartment";
import { useEffect, useState } from "react";
import ApartmentCard from "./ApartmentCard";

const Apartment = () => {
    const [loadedApartments] = useAllApartment();
    const [apartments, setApartments] = useState(loadedApartments)
    const [apartmentPerPage, setapArtmentPerPage] = useState(6)
    const [currentPage, setCurrentPage] = useState(0);
    const [count, setCount] = useState(0);
    const numOfPages = Math.ceil(count / apartmentPerPage);
    const pages = [...Array(numOfPages).keys()]

    useEffect(() => {
        fetch(`https://smart-build-server.vercel.app/countApartment`)
            .then(res => res.json())
            .then(data => {
                setCount(data.count)
            })
    }, [])
    useEffect(() => {
        fetch(`https://smart-build-server.vercel.app/apartments?page=${currentPage}&size=${apartmentPerPage}`)
            .then(res => res.json())
            .then(data => setApartments(data))
    }, [currentPage, apartmentPerPage]);



    // for pagination
    const handlePagination = e => {
        const val = parseInt(e.target.value)
        setapArtmentPerPage(val);
        setCurrentPage(0)
    }

    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
        }
    }

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }

    return (
        <div className="my-12">
            <h2 className="text-center text-3xl font-semibold mb-4">Book Your Apartment <span className="text-red-500">NOW</span></h2>
            <hr className="max-w-lg border-2 mx-auto mb-10" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    apartments.map(apartment => <ApartmentCard key={apartment._id} apartment={apartment}></ApartmentCard> )
                }
            </div>
            <div className='text-center my-16'>
                <button onClick={handlePrevPage} className="btn  border-2 mr-2 border-gray-200" >Prev</button>
                {
                    pages.map(page => <button
                        onClick={() => setCurrentPage(page)}
                        className={`w-12 rounded-md h-12 bg-gray-200 border-2 mr-2 border-gray-200 ${currentPage === page ? "bg-orange-400" : undefined} `} key={page}>
                        {page + 1}
                    </button>)
                }
                <button onClick={handleNextPage} className="btn border-2 border-gray-200">Next</button>
                <select className="ml-2 w-14 h-12 text-lg rounded-md" value={apartmentPerPage} onChange={handlePagination} name="" id="">
                    <option value="5">6</option>
                    <option value="10">12</option>
                    <option value="20">24</option>
                    <option value="50">48</option>
                </select>
            </div>
        </div>
    );
};

export default Apartment;