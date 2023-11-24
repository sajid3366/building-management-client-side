import { Link } from "react-router-dom";
import useAllApartment from "../../hooks/useAllApartment";
import Button from "../../Shared/Button/Button";
import { useEffect, useState } from "react";

const Apartment = () => {
    const [loadedApartments] = useAllApartment();
    // console.log(loadedApartments);
    const [apartments, setApartments] = useState(loadedApartments)
    const [apartmentPerPage, setapArtmentPerPage] = useState(6)
    const [currentPage, setCurrentPage] = useState(0);
    const [count, setCount] = useState(0);
    const numOfPages = Math.ceil(count / apartmentPerPage);
    console.log('num of pages', numOfPages);
    const pages = [...Array(numOfPages).keys()]


    useEffect(() => {
        fetch(`http://localhost:5000/countApartment`)
            .then(res => res.json())
            .then(data => {
                setCount(data.count)
            })
    }, [])
    useEffect(() => {
        fetch(`http://localhost:5000/apartments?page=${currentPage}&size=${apartmentPerPage}`)
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
            <div className="grid grid-cols-3 gap-5">
                {
                    apartments.map(apartment => (
                        <div key={apartment._id} className="rounded-sm">
                            <figure><img className="w-full rounded-sm h-[250px]" src={apartment.apartmentImage} alt="Apartment Image" /></figure>
                            <div className="px-5 my-4 space-y-2">
                                <h2 className="text-2xl font-bold">{apartment.blockName}</h2>
                                <p className="text-lg font-medium">Floor no - {apartment.floorNo}</p>
                                <p className="text-lg font-medium">Apartment no - {apartment.apartmentNo}</p>
                                <hr className="my-2 border-2" />
                                <div className="card-actions justify-between ">
                                    <p className="text-xl text-[#A1A1A1] font-semibold">${apartment.rent}</p>
                                    <Link to={`/agreement/${apartment._id}`}><Button title={"Agreement"}></Button></Link>
                                </div>
                            </div>
                        </div>
                    ))
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
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>
            </div>
        </div>
    );
};

export default Apartment;