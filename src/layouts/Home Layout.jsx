import React from "react";
import Header from "../components/header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftNav from "../components/layoutComponent/LeftNav";
import RightNav from "../components/layoutComponent/RightNav";

import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <section className="w-11/12 mx-auto">
        <LatestNews />
      </section>
      <nav className="w-11/12 mx-auto">
        <Navbar />
      </nav>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5 pt-5 font-poppins">
        <aside className="col-span-3">
          <LeftNav />
        </aside>
        {/* <Outlet>
            <section className="col-span-6"><h1>Main Content</h1>
        <Middle/></section>
        </Outlet> */}

        <section className="col-span-6"><h1>Main Content</h1>
        <Outlet/>
        </section>
        <aside className="col-span-3">
            
          <RightNav />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
