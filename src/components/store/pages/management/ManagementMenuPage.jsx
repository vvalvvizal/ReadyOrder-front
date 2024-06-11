import React, { useState } from "react";
import Menu from "../../../menu/components/MenuRoot";
import Header from "../../../../shared/header/Header";

const ManagementMenuPage = () => {
  const viewHeader = "management-menu";

  return (
    <div>
      <Header viewHeader={viewHeader} />
      <div className="content">
        <div>
          <Menu userType={"admin"} />
        </div>
      </div>
    </div>
  );
};
export default ManagementMenuPage;
