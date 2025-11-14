import { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const SocialAuthSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const token = query.get("token");

    if (token) {
      localStorage.setItem("accessToken", token);
      setTimeout(() => {
          navigate("/home");
      }, 2000)
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-400 p-2">
        <div className="p-8 rounded-3xl text-center shadow-2xl w-[90%] max-w-md bg-white text-gray-700">
        <FaCheckCircle className="text-6xl text-green-400 mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-2">Successfully Login!</h2>
        <p className="text-lg opacity-90 mb-6">
            Redirecting  to home page......
        </p>
        </div>
    </div>
  );
};

export default SocialAuthSuccess;
