function Navbar(){
    return (
        <nav>
            <h1>BLOOD BANK</h1>
            <ul>
                <li>Home</li>
                <li>Donor Registration</li>
                <li>Blood Request</li>
                <li>Contact Us</li>
                <div className="search-box">
                <input type="text"placeholder ="search blood Group=...."/>
                <button>search</button>
                </div>
            </ul>
        </nav>
    )
}
export default Navbar
