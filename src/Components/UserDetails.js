import "./UserDetails.css";

const UserDetails = (prop) => {
  return (
    <div className="user-details-container">
      <div className="card card-glow-on-hover">
        <div>
          <img
            className="profile"
            src={prop.details.avatar}
            alt="User profile"
          ></img>
        </div>
        <div>
          <p>
            <span>First Name:</span> {prop.details.first_name}
          </p>
          <p>Last Name: {prop.details.last_name}</p>

          <p> Email: {prop.details.email}</p>
        </div>
      </div>
    </div>
  );
};
export default UserDetails;
