import DashboardHeader from "@/components/dashboard-header";
import SideNav from "@/components/sidenav";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
   return (
      <div>
         <SideNav />
         <div className="md:ml-64">
            <DashboardHeader />
            {children}
         </div>
      </div>
   );
};

export default layout;
