import { React, useState } from "react";
import useFetch from "../hooks/useFetch.hook";
import Loading from "../components/loading/Loading.component";
import Pagination from "../components/pagination/Pagination.component";
import UserCard from "../components/user/userCard.component";
import ErrorBoundary from "../components/error/ErrorBoundary";

function Users() {
  const [page, setPage] = useState(1);
  const { loading, response, error } = useFetch(
    `https://randomuser.me/api/?page=${page}&results=10&seed=abc`
  );

  const totalPage = 5;

  if (loading) {
    return (
      <div className="all-centered loading-container">
        <Loading />
      </div>
    );
  }

  if (!loading && error) {
    return <>Error......</>;
  }

  const handlePrev = () => {
    setPage((prev) => prev - 1);
  };
  const handleNext = () => {
    setPage((prev) => prev + 1);
  };
  const handlePageBtn = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <div className="centered">
      <h1 className="heading">User List</h1>
      <div className="ui grid container centered">
        {response?.results.map((user) => {
          const username = `${user.name.title} ${user.name.first} ${user.name.last}`;
          return (
            <div style={{ margin: "10px" }} key={user.login.uuid}>
              <ErrorBoundary>
                <UserCard
                  username={username}
                  userId={user.login.uuid}
                  user={user}
                />
              </ErrorBoundary>
            </div>
          );
        })}
      </div>
      <div className="pagination-container">
        <button
          className="next-prev ui button"
          onClick={handlePrev}
          disabled={page <= 1}
        >
          Prev
        </button>

        <Pagination totalPage={totalPage} handlePageBtn={handlePageBtn} />

        <button
          className="next-prev ui button"
          onClick={handleNext}
          disabled={page >= totalPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Users;
