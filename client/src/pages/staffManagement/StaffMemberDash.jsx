import React from "react";
import Footer from "../../components/core/Footer";
import NavBar from "../../components/core/NavBar";

const StaffmemberDash = () => {
  return (
    <div>
      <NavBar></NavBar>
    <div
      style={{
        backgroundColor: "#404267",
        height: "65vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Dashboard Content */}
      <div
        style={{
          width: "80%",
          maxWidth: "900px",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        <h1 style={{ color: "white", marginBottom: "30px" }}>
          STAFF MEMBER DASHBOARD
        </h1>

        {/* Button Groups */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginRight: "50px",
              backgroundColor: "#1e2e4f",
              padding: "30px",
              borderRadius: "10px",
            }}
          >
            <button
              style={{
                backgroundColor: "#ffcc00",
                color: "white",
                border: "none",
                padding: "15px 30px",
                margin: "10px 0",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Mark Attendance
            </button>
            <button
              style={{
                backgroundColor: "#000000",
                color: "white",
                border: "none",
                padding: "15px 30px",
                margin: "10px 0",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Leave
            </button>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              style={{
                backgroundColor: "#e3e3e3",
                color: "black",
                border: "none",
                padding: "15px 30px",
                margin: "10px 0",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Apply Leaves
            </button>
            <button
              style={{
                backgroundColor: "#e3e3e3",
                color: "black",
                border: "none",
                padding: "15px 30px",
                margin: "10px 0",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              View Leaves
            </button>
            <button
              style={{
                backgroundColor: "#e3e3e3",
                color: "black",
                border: "none",
                padding: "15px 30px",
                margin: "10px 0",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              View Salary
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default StaffmemberDash;
