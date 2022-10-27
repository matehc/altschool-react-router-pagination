import React from "react";
import "./pagination.css";

function Pagination({ totalPage, handlePageBtn }) {
  console.log();
  return (
    <>
      <div className="ui buttons">
        {Array.from({ length: totalPage }, (value, index) => index + 1).map(
          (each) => {
            return (
              <div
                key={each}
                className="ui button"
                onClick={() => handlePageBtn(each)}
              >
                {each}
              </div>
            );
          }
        )}
      </div>
    </>
  );
}

export default Pagination;
