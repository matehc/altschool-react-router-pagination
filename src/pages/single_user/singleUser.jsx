import { React } from "react";
import { useLocation, Outlet } from "react-router-dom";
import "./singleUser.css";

function SingleUser() {
  const { state } = useLocation();
  const username = `${state.name.first} ${state.name.last}`;

  console.log("from singleUser today", state);
  return (
    <>
      <Outlet />
      <div className="all-centered ">
        <div className="colour-box shad">
          <div className="center shad">
            <div className="profile">
              <div className="profile-pic-box">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
                <img
                  src={state.picture.thumbnail}
                  alt={`${username}`}
                  className="profile-pic_img"
                />
              </div>

              <div className="profile-jd-box">
                <span className="blockify profile_name boldify">
                  {username}
                </span>
                <span className="blockify profile_jd shrinker">
                  {state.email}
                </span>
              </div>

              <div className="profile-action-box">
                <button className="blockify profile_btn profile_btn--follow">
                  Follow
                </button>
                <button className="blockify profile_btn profile_btn--message">
                  Message
                </button>
              </div>
            </div>

            <div className="stats-container">
              <div className="stat-box">
                <span className="stats_number boldify">{state.gender}</span>
                <span className="stats_name shrinker">Gender</span>
              </div>

              <div className="stat-box">
                <span className="stats_number boldify">{state.phone}</span>
                <span className="stats_name shrinker">Phone</span>
              </div>

              <div className="stat-box">
                <span className="stats_number boldify">
                  {state.location.country}
                </span>
                <span className="stats_name shrinker">Country</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleUser;
