import React from "react";
import styles from "../../pages/foodManagement/styles/foodOrderStyles.module.css";
import NavBar from "../../components/core/NavBar";
import Footer from "../../components/core/Footer";
import CustomButton from "../../components/reUseable/CustomButton";
import pic1 from  '../../../public/Food_Management(Restaurant)/pic1.jpg'

const FoodOrderStart = () => {
  return (
    <>
      <NavBar name="foods" />
      <div className={styles.main}>
        <div className={styles.mainContainer}>
          <div className={styles.mainContainerHeader}>
            <div className={styles.mainContainerTitle}>
              <h3>
                {" "}
                LAKEVIEW <br /> RESTAURANT{" "}
              </h3>
            </div>
            <div className="mainContainerNavBar"></div>
          </div>
          <div className={styles.mainContainerBody}>
            <h4>Welcome to our Food management Portal</h4>
            <br />
            <p>
              Your gateway to a seamless dining experience at Lakeview Gaming
              zone.
            </p>
            <br />
            <br />
            <div>
              <CustomButton color="yellow" buttonText="Order" />
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
            <img src={pic1} alt=""/>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FoodOrderStart;

/*
<div className="main">
        <div className={styles.portalHeader}>
          <div style={{ lineHeight: "1.5rem", paddingLeft: "10px" }}>
            <h3>
              LAKEVIEW <br /> RESTAURANT
            </h3>
          </div>
        </div>
        <div className={styles.mainContainer}>
          <div className={styles.portalBody}>
            <h4>Welcome to our Food management Portal</h4>
            <br />
            <p>
              Your gateway to a seamless dining experience at Lakeview Gaming
              zone.
            </p>
            <br />
            <br />
            <div>
              <CustomButton color="yellow" buttonText="Order" />
            </div>
          </div>
        </div>
        <div className="imageContainer">
            <img
        </div>
      </div>*/
