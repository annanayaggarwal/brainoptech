import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../../actions/userAction";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

  const { user, loading } = useSelector((state) => state.auth);

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <div className="bg-black">
      <nav className="px-4 py-4">
        <Link to="/" className="text-xl font-blod text-white">
          Blog<span className="text-orange-400">Posts</span>
        </Link>
      </nav>
      {user ? (
        <div className="absolute  top-0 right-0 m-4">
          <Link
            className="bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in"
            to="/"
            onClick={logoutHandler}
          >
            Logout
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
