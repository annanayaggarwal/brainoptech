import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register, clearErrors } from "../../actions/userAction";

const SignUp = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [confirmPassword, setConfirmPassword] = useState();
  const [termsChecked, setTermsChecked] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const { username, email, password } = user;
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }

    if (error) {
      setErrorMsg(error);
      dispatch(clearErrors());
    }
  }, [dispatch, isAuthenticated, error, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!username) {
      setErrorMsg("Please enter username");
    } else if (!email) {
      setErrorMsg("Please enter email");
    } else if (!password) {
      setErrorMsg("Please enter password");
    } else if (password.length < 8) {
      setErrorMsg("Password must be 8 character long");
    } else if (!termsChecked) {
      setErrorMsg("Terms and Condition will be checked");
    } else {
      setEmailSent(true);
      dispatch(register(username, email, password));
    }
  };

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="h-screen flex justify-center flex-col ">
        <div className="flex justify-center ">
          <form
            className="shadow-lg"
            onSubmit={submitHandler}
            encType="multipart/form-data"
          >
            <a
              href="#"
              className="block max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 w-screen"
            >
              <div>
                <div className="px-10">
                  <div className="text-3xl font-extrabold">Sign up</div>
                </div>
                {errorMsg && (
                  <div
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-2"
                    role="alert"
                  >
                    <strong className="font-bold">Error:</strong>
                    <span className="block sm:inline">{errorMsg}</span>
                  </div>
                )}
                {emailSent && (
                  <p className="text-green-500 font-semibold bg-green-100 border border-green-300 rounded p-2 my-2">
                    Welcome email sent to: {email}
                  </p>
                )}
                <div className="pt-2">
                  <label className="block mb-2 text-sm text-black font-semibold pt-4">
                    Username
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    label="Username"
                    placeholder="username"
                    name="username"
                    value={username}
                    onChange={onChange}
                  />
                  <label className="block mb-2 text-sm text-black font-semibold pt-4">
                    Email
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    label="email"
                    placeholder="example@gmail.com"
                    onChange={onChange}
                    name="email"
                    value={email}
                  />
                  <label className="block mb-2 text-sm text-black font-semibold pt-4">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      label="Password"
                      placeholder="123456"
                      name="password"
                      value={password}
                      type={passwordVisible ? "text" : "password"}
                      onChange={onChange}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 px-3 py-2"
                      onClick={togglePasswordVisibility}
                    >
                      {passwordVisible ? "Hide" : "Show"}
                    </button>
                  </div>

                  <label className="block mb-2 text-sm text-black font-semibold pt-4">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      label="Confirm Password"
                      placeholder="Confirm Password"
                      type={passwordVisible ? "text" : "password"}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 px-3 py-2"
                      onClick={togglePasswordVisibility}
                    >
                      {passwordVisible ? "Hide" : "Show"}
                    </button>
                  </div>
                  <div class="flex items-center mb-4 mt-2">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      checked={termsChecked}
                      onChange={(e) => setTermsChecked(e.target.checked)}
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="default-checkbox"
                      class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      <Link to="/term">Terms and Conditions</Link>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
