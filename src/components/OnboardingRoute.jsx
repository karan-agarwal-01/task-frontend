import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { fetchMe } from "../services/Apis";

const OnboardingRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [onboarded, setOnboarded] = useState(false);

  useEffect(() => {
    const checkOnboarding = async () => {
      try {
        const user = await fetchMe();
        setOnboarded(user.onboarded);
      } catch (error) {
        console.error("Onboarding check failed:", error);
      } finally {
        setLoading(false);
      }
    };
    checkOnboarding();
  }, []);

  if (loading) return <p className="text-center mt-10">Checking access...</p>;
  if (onboarded) return <Navigate to="/home" />;

  return children;
};

export default OnboardingRoute;
