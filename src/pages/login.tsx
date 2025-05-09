import React, { useState } from "react";
import {
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaLock,
  FaSadCry,
  
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import logo from "../assets/person_1.jpg";

interface User {
  email: string;
  password: string;
  name: string;
  picture: string;
  amount: number;
}

const users: User[] = [
  {
    email: "Marindave54@gmail.com",
    password: "Hacked22",
    name: "David Marin",
    picture: logo,
    amount: 5000,
  },
  {
    email: "example2@gmail.com",
    password: "ExamplePass2$",
    name: "John Doe",
    picture: logo,
    amount: 3000,
  },
];

const LoginForm: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [popupMessage, setPopupMessage] = useState<string | null>(null);
  const [popupType, setPopupType] = useState<"success" | "error" | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleFormToggle = () => {
    setIsLogin(!isLogin);
    setPopupMessage(null);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); // Show loading screen
    setPopupMessage(null); // Clear previous popup message

    setTimeout(() => {
      setIsLoading(false); // Hide loading screen
      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        setPopupMessage(`Welcome Back, \n  ${user.name}!`);
        setPopupType("success");
        setShowPopup(true);

        // Save user data in session storage
        sessionStorage.setItem(
          "loggedInUser",
          JSON.stringify({
            name: user.name,
            email: user.email,
            picture: user.picture,
            amount: user.amount,
          })
        );

        setTimeout(() => {
          setShowPopup(false);
          navigate("/pin");
        }, 2000);
      } else {
        setPopupMessage("Incorrect email or password.");
        setPopupType("error");
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 2000);
      }
    }, 2000); // Simulated processing delay
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-orange-50 relative">
      {isLoading ? (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="w-16 h-16 border-4 border-orange-500 border-dotted rounded-full animate-spin"></div>
          <p className="mt-4 text-xl font-semibold text-black">Processing...</p>
        </div>
      ) : (
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold text-black mb-4 text-center">
            {isLogin ? "Welcome Back!" : "Create an Account"}
          </h1>

          <form onSubmit={isLogin ? handleLogin : undefined}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="flex items-center bg-orange-50 border border-orange-200 rounded-md px-4 py-2 focus-within:ring-2 focus-within:ring-orange-400"
              >
                <div className="text-orange-400 mr-2 p-3">
                  <FaEnvelope />
                </div>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-grow bg-transparent outline-none text-lg"
                />
              </label>
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="flex items-center bg-orange-50 border border-orange-200 rounded-md px-4 py-2 focus-within:ring-2 focus-within:ring-orange-400"
              >
                <div className="text-orange-400 mr-2 p-3">
                  <FaLock />
                </div>
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="flex-grow bg-transparent outline-none text-lg"
                />
                <span
                  className="cursor-pointer text-gray-500"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white font-semibold rounded-md py-2 hover:bg-gray-800 transition text-lg mt-2"
            >
              {isLogin ? "Sign In" : "Sign Up"}
            </button>
          </form>
          <div className="text-center mt-4">
            <p className="text-sm">
              {isLogin ? "No account?" : "Already have an account?"}{" "}
              <span
                onClick={handleFormToggle}
                className="text-orange-500 font-semibold cursor-pointer"
              >
                {isLogin ? "Register now" : "Sign in"}
              </span>
            </p>
          </div>
        </div>
      )}
      {showPopup && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-lg text-center flex flex-col items-center mb-4">
            {popupType === "success" ? (
              <>
                <img
                  src={logo}
                  alt="User Profile"
                  className="w-16 h-16 rounded-full mb-4"
                />
                <p className="text-lg font-semibold">{popupMessage}</p>
              </>
            ) : (
              <>
                <div className="text-orange-400 text-6xl mb-8 p-4 text-center">
                  <FaSadCry />
                </div>
                <p className="text-2xl font-semibold text-black">
                  {popupMessage}
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
