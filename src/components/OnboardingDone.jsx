import { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const OnboardingComplete = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-400 p-2">
      <div className="p-8 rounded-3xl text-center shadow-2xl w-[90%] max-w-md bg-white text-gray-700">
        <FaCheckCircle className="text-6xl text-green-400 mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-2">Onboarding Complete!</h2>
        <p className="text-lg opacity-90 mb-6">
          You've successfully set up your profile.  
          Redirecting you to your home page...
        </p>
      </div>
    </div>
  );
};

export default OnboardingComplete;
