import React from "react";
import LoginButton from "../atoms/LoginButton";
import Logo from "../atoms/Logo";
import SearchBar from "../atoms/SearchBar";
import { Link } from "react-router-dom";
const HeaderOrg = () => {
  return (
    <>
      <Link to="/">
        {" "}
        <Logo />
      </Link>

      <Link to="/search">
        {" "}
        <SearchBar />
      </Link>

      <LoginButton />
    </>
  );
};

export default HeaderOrg;
