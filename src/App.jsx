import Navbar from './Navbar'
import Hero from './Hero'
import FindDonor from'./FindDonor'
import BloodCard from "./BloodCard";
import BecomeDonor from "./BecomeDonor"

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      
      <FindDonor/>

      <h1>Blood Availability</h1>

      <div className="blood-container">
        <BloodCard group="A+" available="12" />
        <BloodCard group="A-" available="5" />
        <BloodCard group="B+" available="18" />
        <BloodCard group="B-" available="7" />
        <BloodCard group="O+" available="25" />
        <BloodCard group="O-" available="4" />
        <BloodCard group="AB+" available="9" />
        <BloodCard group="AB-" available="3" />
      </div><br></br>
      <BecomeDonor/>
    </>
    
  )
}

    
    
  
   
        
        



export default App