import { Link, useNavigate } from "react-router-dom";
import "./LogInPage.css";
import { useState } from "react";
import { setToken } from "../../utils/getToken";
import { setUser } from "../../utils/getUser";

const LoginPage = () => {
  const navigate = useNavigate();
  const [userSignInData, setUserSignInData] = useState({
    studentId: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event?.target;
    setUserSignInData({ ...userSignInData, [name]: value });
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/users/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify that we're sending JSON data
        },
        body: JSON.stringify({ ...userSignInData }), // Convert the data to JSON format
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      // Assuming the response contains a JWT token and user details
      const { token, user } = data;
      setToken(token)
      setUser(user)

      navigate("/");

      return { token, user };
    } catch (error) {
      console.error("Failed to log in user:", error);
    }
  };

  return (
    <div className="Background_logIn">
      <div className="LogIn">
        <div className="LogInLeft">
          <p>uiu friends loan and crowd sourcing</p>
          <div>This project allows university students to take loans from each
             other and post for donations, fostering peer-to-peer support</div>
        </div>

        <div className="LogInRight">
          <form onChange={handleChange} onSubmit={handleLogin}>
            <p>log in</p>
            <div className="input_container">
              <label htmlFor="student_id">Student ID :</label>
              <input
                id="student_id"
                name="studentId"
                type="text"
                className="input1"
                placeholder="Enter id here"
                value={userSignInData?.studentId}
              />
            </div>
            <div className="input_container">
              <label htmlFor="pass">Password :</label>
              <input
                id="pass"
                name="password"
                type="password"
                className="input2"
                placeholder="Type password here"
              />{" "}
              <br />
            </div>
            <button className="LoginButton">Log In</button>
            <div className="external_info">
              <Link to="/signup">
                <a>Create New Account </a>
              </Link>{" "}
              <span>|</span> <a href="#">forget password ? </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
