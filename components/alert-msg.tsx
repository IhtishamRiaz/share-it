import React from "react";
import { LuAlertCircle } from "react-icons/lu";

const AlertMsg = ({ msg }: { msg: string }) => {
   return (
      <div className="p-4 bg-red-500 mt-5 text-white rounded-md flex gap-5 items-center">
         <LuAlertCircle className="text-2xl" />
         {msg}
      </div>
   );
};

export default AlertMsg;
