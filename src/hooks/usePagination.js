// Reusable Pagination hook

import { useMemo } from "react"

const usePagination = ({currentPage, totalPages, window = 2 }) =>{
    const pages = useMemo(() => {
        const results = [];

        const start = Math.max(2, currentPage - window);
        const end = Math.min(totalPages - 1, currentPage + window);

        results.push(1);
        if(start > 2){
            results.push("...");
        }

        for(let i = start; i <= end; i++){
            results.push(i);
        }

        if(end < totalPages-1){
            results.push("...");
        }

        if(totalPages>1){
            results.push(totalPages);
        }
        return results;
    }, [currentPage, totalPages, window]);
    return pages;
};

export default usePagination;