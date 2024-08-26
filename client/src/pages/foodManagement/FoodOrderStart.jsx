import React from 'react'
import styles from '../../pages/foodManagement/styles/foodOrderStyles.module.css'
import NavBar from '../../components/core/NavBar'
import Footer from '../../components/core/Footer'
const FoodOrderStart = () => {
  return (
    <>
    <NavBar/>
    <div className={styles.mainContainer}>
      <div className={styles.portal}>
        <div>
            <div style={{lineHeight:"1.5rem"}}>
                <h3>LAKEVIEW <br /> RESTAURANT</h3>
            </div>
        </div>
        <div >
            <h4>Welcome to our Food management Portal</h4>
            <br />
            <p>
                Your gateway to a seamless dining experience at Lakeview Gaming zone. 
            </p>
            <br />
            <br />

        </div>
      </div>
      <div></div>
    </div>
    <Footer />
    </>
  )
}

export default FoodOrderStart
