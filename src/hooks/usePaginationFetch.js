import { useEffect, useState } from "react";

export default function usePaginationFetch(url, limit=5){
    const[data, setData] = useState([]);
    const[currentPage, setCurrentPage] = useState(1);
    const[totalPages, setTotalPages] = useState(0);
    const[isLoading, setIsLoading] = useState(false);

    const fetchData = async() =>{
        try{
            setIsLoading(true);
            const response = await fetch(`${url}?_page=${currentPage}&_limit=${limit}`);
            const json = await response.json();
            const total = Number(response.headers.get("X-Total-Count"));
            setData(json);
            setTotalPages(total/limit);
        }catch(error){
            console.log("Error Fetching Data", error);
        }finally{
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [currentPage]);

    return {data, currentPage, setCurrentPage, totalPages, isLoading};
}