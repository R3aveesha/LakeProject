import React from "react";
import NavBar from "../../components/core/NavBar";
import Footer from "../../components/core/Footer";

const ResourcesTable = () => {
  return (
   <div>
    <NavBar></NavBar>
     <div style={{ backgroundColor: "#1b1f38", padding: "20px", height: "80vh" }}>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <table
          style={{
            width: "80%",
            borderCollapse: "collapse",
            backgroundColor: "#1b1f38",
            color: "#fff",
            textAlign: "left",
          }}
        >
          <thead>
            <tr>
              <th style={headerStyle}>Resource ID</th>
              <th style={headerStyle}>Resource Name</th>
              <th style={headerStyle}>Resource Type</th>
              <th style={headerStyle}>Available Quantity</th>
              <th style={headerStyle}>Created At</th>
              <th style={headerStyle}>Actions</th> /* Add report genertaion button and delete button */
            </tr>
          </thead>
        </table>
      </div>
    </div>
    <Footer></Footer>
   </div>
  );
};

const headerStyle = {
  borderBottom: "1px solid #ddd",
  padding: "12px",
  backgroundColor: "#282c45",
  color: "#fff",
};

export default ResourcesTable;
