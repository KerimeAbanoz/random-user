import "./index.css";
import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState("");

  const getUser = () => {
    fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then((data) => setUser(data.results[0]));
  };

  useEffect(() => {
    getUser();
  }, []);

  console.log(user);
  const { name, phone, location, dob, email, picture } = user;

  return (
    <div className="all-inside">
      <div className="big-div">
        <div className="pic-name">
          <img className="person-image" src={picture?.large} alt="img" />
          <p className="name-surname">
            {/* Optional Chaining */}
            {/* name?.first?.second */}
            {name?.first} {name?.last}
          </p>
        </div>
        <div className="other-stuff">
          <div className="info icon">
            <i className="fa-regular fa-envelope"></i>
            <i className="fa-regular fa-phone"></i>
            <i className="fa-regular fa-location-pin"></i>
          </div>

          <div className="info email-phone-location">
            <p>{email}</p>
            <p>{phone}</p>
            <p>
              {location?.state} - {location?.country}
            </p>
          </div>
        </div>

        <div className="info">
          <p>Age: {dob?.age}</p>
          <p>
            Register Date: {new Date(dob?.date).toLocaleDateString("tr-TR")}
          </p>
        </div>
      </div>
      <button className="button" onClick={getUser}>
        Get User
      </button>
    </div>
  );
}

export default App;
