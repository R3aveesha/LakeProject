import React from "react";
import NavBar from "../../components/core/NavBar";
import Footer from "../../components/core/Footer";

const AddResourceForm = () => {
  return (
   <div>
    <NavBar></NavBar>
     <div style={{ backgroundColor: "#1b1f38", padding: "20px", minHeight: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
        <div
          style={{
            backgroundColor: "#f0f0f5",
            padding: "40px",
            borderRadius: "15px",
            width: "40%",
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 style={{ textAlign: "center", color: "#000" }}>ADD NEW RESOURCE</h2>
          <form>
            <div style={{ marginBottom: "20px" }}>
              <label style={labelStyle}>Resource Name</label>
              <input type="text" style={inputStyle} />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label style={labelStyle}>Resource Type</label>
              <input type="text" style={inputStyle} />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label style={labelStyle}>Quantity</label>
              <input type="number" style={inputStyle} />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label style={labelStyle}>Date</label>
              <input type="date" style={inputStyle} />
            </div>
            <div style={{ textAlign: "center" }}>
              <button type="submit" style={buttonStyle}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer></Footer>
   </div>
  );
};

const labelStyle = {
  display: "block",
  marginBottom: "8px",
  color: "#000",
  fontSize: "16px",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  fontSize: "14px",
};

const buttonStyle = {
  backgroundColor: "#ffcc00",
  color: "#000",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  fontSize: "16px",
  cursor: "pointer",
};

export default AddResourceForm;
