import React from 'react'

const PagiNation = ({currentPage, setCurrentPage, totalPages}) => {
    const pages = [];
    for(let i=1; i<=totalPages; i++){
        pages.push(i);
    }
  return (
    <div>
        <button onClick={() => setCurrentPage(prev => prev - 1)}
            disabled={currentPage===1}
        >
            Prev
        </button>
        {
          pages.map((page) => (
            <button onClick={() => setCurrentPage(page)}>
                {page}
            </button>
          ))
        }
        <button onClick={() => setCurrentPage(prev => prev +1)}
            disabled={currentPage===totalPages}
        >
            Next
        </button>
    </div>
  )
}

export default PagiNation;