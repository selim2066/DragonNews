import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);
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
