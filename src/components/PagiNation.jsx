import React, { useEffect, useRef, useState } from "react";
import usePagination from "../hooks/usePagination";

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const [pageInput, setPageInput] = useState("");
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef(null);

  const pages = usePagination({currentPage, totalPages}); // custom hook 

  useEffect(() => {
    if (showInput) {
      inputRef.current.focus();
    }
  }, [showInput]);

  const handleJump = () => {
    const page = Number(pageInput);

    if (page < 1 || page > totalPages) {
      alert(`Enter Page Number Between 1 - ${totalPages}`);
      return;
    }

    setCurrentPage(page);
    setShowInput(false);
    setPageInput("");
  };

  return (
    <div className="pagination">
      {/* Prev Button */}
      <button
        onClick={() => setCurrentPage((prev) => prev - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {/* Page Numbers */}
      {pages.map((page, index) =>
        page === "..." ? (
          <span
            key={`dots-${index}`}
            onClick={() => setShowInput(true)}
            style={{ margin: "0 8px", cursor: "pointer" }}
          >
            ...
          </span>
        ) : (
          <button
            key={`page-${page}`}
            className={currentPage === page ? "active" : ""}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        )
      )}

      {/* Next Button */}
      <button
        onClick={() => setCurrentPage((prev) => prev + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>

      {/* Jump Input */}
      {showInput && (
        <div style={{ marginTop: "10px" }}>
          <input
            ref={inputRef}
            type="number"
            placeholder="Page No"
            value={pageInput}
            onChange={(e) => setPageInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleJump();
            }}
            style={{
              border: "none",
              margin: "4px",
              padding: "6px 12px",
              background: "#e0e0e0",
              color: "black",
              borderRadius: "4px",
            }}
          />

          <button onClick={handleJump}>Go</button>
        </div>
      )}
    </div>
  );
};

export default Pagination;