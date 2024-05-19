import React from "react";
import axios from "axios";
import ManagementCreateMenuPage from "./ManagementCreateMenuPage";

const ManagementCreateMenuRoot = () => {
  let create_response = "";
  const handleCreate = async (body) => {
    console.log(body);

    try {
      await axios.post("/api/menus/", body, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        },
      });
      console.log("create ok");
      create_response = "success";
    } catch (error) {
      console.log("Create Error", error);
      create_response = "fail";
    }
  };
  return (
    <div>
      <ManagementCreateMenuPage
        onSave={handleCreate}
        response={create_response}
      />
    </div>
  );
};

export default ManagementCreateMenuRoot;
