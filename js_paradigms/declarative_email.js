import { useState } from "react";

const EmailInput = () => {
    const [message, setMessage] = useState("")
    const [isError, setIsError] = useState(false)
  

    function evaluateEmail(event) {
      // Get value from input field
      const enteredEmail = event.target.value.trim();
      
      // Check for email attributes
      if (enteredEmail.trim() === '' || !enteredEmail.includes("@")) {
        setMessage("The entered email is invalid");
        setIsError(true)
      } else {
        setMessage("Appears to be a valid email address");
        setIsError(false);
      }
    };

    // Returning the JSX
      return (
        <div style={emailContainer}>
          <h1>Declarative JS Programming example</h1>
          
          <div style={inputContainer}>
            <label htmlFor="emailInput">Enter email:</label>
            <input
              id="emailInput" 
              style={inputStyle} 
              placeholder="Enter your email address" 
              type="email" 
              onBlur={evaluateEmail} 
              />
          </div>

          <div>
            <p style={isError ? errorStyle : correctStyle}>{message}</p>
          </div>
        </div>
      );
    };
    
const emailContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontSize: "1.5em"
}
const inputContainer = {
  display: "flex",
  gap: "20px",
  fontSize: "1.5em",
}
const inputStyle = {
  width: "300px",
}
const errorStyle = {
  color: "red",
  fontSize: "2em",
}
const correctStyle = {
  color: "green",
  fontSize: "2em"
}

export default EmailInput;