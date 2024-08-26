import React from 'react'
import styles from '../../pages/foodManagement/styles/foodOrderStyles.module.css'
import NavBar from '../../components/core/NavBar'
import Footer from '../../components/core/Footer'
import CustomButton from '../../components/reUseable/CustomButton'
const FoodOrderStart = () => {
  return (
    <>
    <NavBar name='foods'/>
    <div className={styles.portalHeader}>
            <div style={{lineHeight:"1.5rem", paddingLeft:"10px"}}>
                <h3>LAKEVIEW <br /> RESTAURANT</h3>
            </div>
    </div>
    <div className={styles.mainContainer}>
        
        <div className={styles.portalBody} >
            
            <h4>Welcome to our Food management Portal</h4>
            <br />
            <p>
                Your gateway to a seamless dining experience at Lakeview Gaming zone. 
            </p>
            <br />
            <br />
            <div>
                <CustomButton color="yellow" buttonText="Order"/>
            </div>
        </div>
      </div>
      <div></div>
    <Footer />
    </>
  )
}

export default FoodOrderStart
