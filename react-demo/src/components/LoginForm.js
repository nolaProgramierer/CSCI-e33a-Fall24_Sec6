// Login form using State
import { useState } from "react";

const LoginForm = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });

    // Function to handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        // Passing a callback function w/ argument representing previous data
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", formData.email);
        console.log("Password:", formData.password);
    };

    return (
        <div style={loginFormStyle}>
            <h3>Login Form</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label><br />
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                /><br />

                <label htmlFor="password">Password:</label><br />
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Your password"
                    value={formData.password}
                    onChange={handleChange}
                /><br />

                <button type="submit">Login</button>
            </form>
            <p>This is your email:</p>
            <p>{formData.email}</p>
            <p>This is your password:</p>
            <p>{formData.password.replace(/./g, "*")}</p> {/* Masking password display */}
        </div>
    );
};

const loginFormStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid black",
    padding: "20px",
    width: "300px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

export default LoginForm;
