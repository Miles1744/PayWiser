import "./register.css";

const Register = () => {
  return (
    <div className="register-container">
      <h2>Welcome to PayWiser!</h2>
      <p>Let's help you get registered!</p>
      <form className="register-form">
        <input type="text" placeholder="Enter username" className="input-field" />
        <input type="email" placeholder="Enter email" className="input-field" />
        <input type="password" placeholder="Enter password" className="input-field" />
        <input type="password" placeholder="Confirm password" className="input-field" />
        <button type="submit" className="register-button">Register</button>
      </form>
      <p className="signin-link">Already have an account? <a href="/Login">Sign in</a></p>
    </div>
  );
};

export default Register;