function FindDonor (){
    return (
        <section className="FindDonor">
        <h2>Find a Blood Group</h2>
        <select >
         <option >Search Blood Group</option>
         <option >A+</option>
         <option >B+</option>
         <option >O-</option>
         <option >AB-</option>
         <option >O+</option>
         <option >A-</option>
         <option >AB+</option>
         

        </select>
        <input type="text" placeholder="Enter Your City" />
        <button>Search Donor</button>
        </section>
    )
}
export default FindDonor