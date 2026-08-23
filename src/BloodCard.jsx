

function BloodCard({ group, available }) {
  return (
    <>
    <div className="blood-card">
      <div className="blood-icon">🩸</div>

      <h2>{group}</h2>

      <p>{available} Donors Available</p>

      <button>Find Donors</button>
    </div>
     
    </>
  );
}

export default BloodCard;