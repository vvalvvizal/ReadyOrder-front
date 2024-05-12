import React from "react";
import Menu from "../../../menu/components/Menu";
import SelectButton from "../../util/select/SelectButton";
const ManagementMenuPage = () => {
  const MenuGroup = [
    { label: "간식 food" },
    { label: "main food" },
    { label: "side food" },
  ];

  return (
    <div>
      <div className="content">
        <div className="menuGroup">
          <SelectButton MenuGroup={MenuGroup} />
        </div>
        <Menu userType={"admin"} />
      </div>
    </div>
  );
};
export default ManagementMenuPage;
