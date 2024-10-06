import { useState } from "react";

const SignUpPage = () => {
  const [userData, setUserData] = useState({
    userName: "",
    studentId: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event?.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify that we're sending JSON data
        },
        body: JSON.stringify({...userData}), // Convert the data to JSON format
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("User signed up successfully:", data);
    } catch (error) {
      console.error("Failed to sign up user:", error);
    }
  };

  return (
    <div className="Background_logIn">
      <div className="LogIn">
        <div className="LogInLeft">
          <p>Uiu friends loan and crowd sourcing</p>
          <div>This project allows university students to take loans from each
          other and post for donations, fostering peer-to-peer support</div>
        </div>

        <div className="LogInRight">
          <form action="" onChange={handleChange} onSubmit={handleSubmit}>
            <p>Sign Up</p>
            <div className="input_container">
              <label htmlFor="student_name">Student Name :</label>
              <input
                id="student_name"
                name="userName"
                type="text"
                className="input1"
                placeholder="Enter name here"
                value={userData?.studentName}
              />
            </div>
            <div className="input_container">
              <label htmlFor="student_id">Student ID :</label>
              <input
                id="student_id"
                name="studentId"
                type="text"
                className="input1"
                placeholder="Enter id here"
                value={userData?.studentId}
              />
            </div>
            <div className="input_container">
              <label htmlFor="student_phone">Phone :</label>
              <input
                id="student_phone"
                name="phone"
                type="text"
                className="input3"
                placeholder="Enter phone here"
                value={userData?.phone}
              />
            </div>
            <div className="input_container">
              <label htmlFor="student_email">Email :</label>
              <input
                id="student_email"
                name="email"
                type="email"
                className="input4"
                placeholder="Enter email here"
                value={userData?.email}
              />
            </div>
            <div className="input_container">
              <label htmlFor="pass"> Password :</label>
              <input
                id="pass"
                name="password"
                type="text"
                className="input5"
                placeholder="Type password here"
                value={userData?.password}
              />
            </div>
            <button className="LoginButton">Sign Up</button> <br />
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignUpPage;
