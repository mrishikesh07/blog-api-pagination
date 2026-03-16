import React, { useEffect, useRef, useState } from 'react'

const PagiNation = ({currentPage, setCurrentPage, totalPages}) => {
    const[pageInput, setPageInput] = useState("");
    const[showInput, setShowInput] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        if(showInput){
            inputRef.current.focus();
        }
    }, [showInput]);

    const pages = [];
    for(let i= 1; i<= totalPages; i++){
        if(i === 1 || i === totalPages || (i>= currentPage-1 && i<= currentPage + 1)){
            pages.push(i);
        }else if((i === currentPage - 2 && currentPage > 3) || (i=== currentPage + 2 && currentPage < totalPages - 2) ){
            pages.push("...");
        }
    }

    const handleJump = () =>{
        const page = Number(pageInput);
        if(page <1 || page>totalPages){
            alert(`Enter Page Number Between 1 - ${totalPages}`)
        }
        if(page>=1 && page<=totalPages){
            setCurrentPage(page);
            setShowInput(false);
            setPageInput("");
        }
    }
  return (
    <div className='pagination'>
        <button onClick={() => setCurrentPage(prev => prev - 1)}
            disabled={currentPage===1}
        >
            Prev
        </button>
        {
          pages.map((page, index) => (
            page === "..." ? (
                <span onClick={() => setShowInput(true)}
                    key={`dots-${index}`} style={{margin: "0 8px"}}
                >...</span>
            ) : (
                <button
                    className={currentPage === page ? "active" : ""}
                    key={`page-${page}`} onClick={() => setCurrentPage(page)}
                >
                    {page}
                </button>
            )
          ))
        }
        <button onClick={() => setCurrentPage(prev => prev +1)}
            disabled={currentPage===totalPages}
        >
            Next
        </button>
        {
            showInput && (
                <div style={{marginTop: "10px"}}>
                    <input
                        style={{
                            border: "none",
                            margin: "4px",
                            padding: "6px 12px",
                            background:"#e0e0e0",
                            color: "black",
                            borderRadius: "4px",
                        }}
                        ref={inputRef}
                        type='number'
                        placeholder='Page No'
                        onKeyDown={(e) => {
                            if(e.key === 'Enter'){
                                handleJump();
                            }
                        }}
                        onChange={e => setPageInput(e.target.value)}
                    />
                    <button
                        onClick={handleJump}
                    >
                        Go
                    </button>
                </div>
            )
        }
    </div>
  )
}

export default PagiNation;