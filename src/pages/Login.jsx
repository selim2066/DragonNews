import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {

  const {loginUser}=useContext(AuthContext)
  const location = useLocation()
  const navigate =useNavigate()
  console.log(location)

  const handleLogin = (e) => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    loginUser(email, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    navigate(location?.state ? location.state : "/")
  })
  .catch((error) => {
    alert("error : " +error.message)
    const errorCode = error.code;
    const errorMessage = error.message;
  });


  };

  return (
    <div className="flex justify-center p-10">
      <form
        onSubmit={handleLogin}
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
      >
        <p className="text-center text-2xl font-bold">Login</p>

        <label className="label">Email</label>
        <input
          name="email"
          type="email"
          className="input"
          placeholder="Email"
        />

        <label className="label">Password</label>
        <input
          name="password"
          type="password"
          className="input"
          placeholder="Password"
        />

        <button className="btn btn-neutral mt-4">Login</button>
        <p>
          Don't Have An Account?{" "}
          <Link to="/auth/register" className="text-red-600 font-semibold">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
