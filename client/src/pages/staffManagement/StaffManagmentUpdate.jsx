import React from "react";
import NavBar from "../../components/core/NavBar";
import Footer from "../../components/core/Footer";

const StaffManagmentUpdate = () => {
  return (
    <div>
        <NavBar></NavBar>
        <div
      style={{
        backgroundColor: "#121C38",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#d9d9d9",
          padding: "10px",
          borderRadius: "20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          width: "500px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Staff Registration Update
        </h2>
        <form>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "15px",
            }}
          >
            <input
              type="text"
              placeholder="Name"
              style={{ flex: "1", marginRight: "10px", padding: "10px" }}
            />
            <input
              type="text"
              placeholder="Job Position"
              style={{ flex: "1", padding: "10px" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "15px",
            }}
          >
            <input
              type="email"
              placeholder="Email"
              style={{ flex: "1", marginRight: "10px", padding: "10px" }}
            />
            <input
              type="password"
              placeholder="Password"
              style={{ flex: "1", padding: "10px" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "15px",
            }}
          >
            <input
              type="text"
              placeholder="NIC"
              style={{ flex: "1", marginRight: "10px", padding: "10px" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "15px",
            }}
          >
            <input
              type="text"
              placeholder="Address"
              style={{ flex: "1", marginRight: "10px", padding: "10px" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            <input
              type="text"
              placeholder="Phone"
              style={{ flex: "1", padding: "10px" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <button
              type="submit"
              style={{
                backgroundColor: "#FFCC00",
                color: "#000",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Update
            </button>
            <button
              type="button"
              style={{
                backgroundColor: "#000",
                color: "#fff",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default StaffManagmentUpdate;
