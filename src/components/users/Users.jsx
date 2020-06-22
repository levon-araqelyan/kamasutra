import React from "react"
import Pagination from "../Pagination/Pagination";
import User from "./User";

const Users = ({
                   totalCount,
                   pageSize,
                   currentPage,
                   changePage,
                   users,
                   handleFollowed,
                   followProgress
}) => {

    return (

        <div>
            <Pagination pageSize={pageSize} totalCount={totalCount} pageButtons={changePage} page={currentPage}/>
            {users.map(el => (
              <User user={el} handleFollowed={handleFollowed} followProgress={followProgress}/>
            ))}
        </div>
    )
}

export default Users