import React from "react";
import Reviews from "../../Reviews/Reviews";
import Embedeb from "../Embedeb/Embedeb";
import Packages from "../Packages/Packages";

const Home = () => {
  return (
    <div>
      <Packages></Packages>
      <Reviews></Reviews>
      <Embedeb></Embedeb>
    </div>
  );
};

export default Home;
