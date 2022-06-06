import styles from "./Login.module.css";
import { Link } from "react-router-dom";

const Login = (props) => {
  return (
    <div className={`${styles["login-container"]}`}>
      <div className={`${styles["login-form"]}`}>
        {props.user.map((user) => (
          <div key={user.id}>
            <h2>Face Scan Complete.....</h2>
            <h3>User Verified</h3>
            <h4>Welcome {user.name}</h4>
          </div>
        ))}
        <Link to="/welcome-page">
          <button className={`${styles["login-button"]}`}>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
