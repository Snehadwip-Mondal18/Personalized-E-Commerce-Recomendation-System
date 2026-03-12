import React, { useEffect, useRef } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import { Outlet, useLocation } from "react-router-dom";
import {animate} from "motion";

export default function MainLayout() {

  const hideFooterRoutes = ["/login", "/signup"];
  const location = useLocation();
  const shouldHideFooter = hideFooterRoutes.includes(location.pathname);
  const pageRef = useRef(null);

  useEffect(() =>{
    const el = pageRef.current;
    if(!el) return;

    el.style.opacity = 0;
    animate(
      el,
      {
        opacity: [0, 1],
        transform: ["translateY(10px)", "translateY(0)"],
      },
      {
        duration: 0.36,
        easing: [0.36, 1.56, 0.64, 1],
      },
    );
  }, [location.pathname])

  return (
    <>
        <div className="flex flex-col min-h-screen">
          <Header />
          <Navbar />
          <main className="grow">
              <div ref={pageRef} data-page-wrapper className="w-full h-full">
                <Outlet/>
              </div>
          </main>
          {!shouldHideFooter && <Footer />}
          {/* scrollButton */}
        </div>
    </>
  );
}