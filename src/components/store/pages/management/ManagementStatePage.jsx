import React, { useState } from "react";
import axios from "axios";
import PosPage from "../../../pos/PosPage";
const ManagementStatePage = () => {
  // const [Data, setData] = useState();
  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(``);
  //     setData(response.data);
  //   } catch (error) {
  //     console.log("Get Error", error);
  //   }
  // };
  return (
    <div>
      <PosPage />
    </div>
  );
};
export default ManagementStatePage;
