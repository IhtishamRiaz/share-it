"use client";
import DashboardHeader from "@/components/dashboard-header";
import SideNav from "@/components/sidenav";
import React, { useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
   const [isNavOpen, setIsNavOpen] = useState(false);
   const closeNav = () => setIsNavOpen(false);
   const openNav = () => setIsNavOpen(true);

   return (
      <div>
         <SideNav isNavOpen={isNavOpen} closeNav={closeNav} />
         <div className="md:ml-64">
            <DashboardHeader openNav={openNav} />
            {children}
         </div>
      </div>
   );
};

export default Layout;
