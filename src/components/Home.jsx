import { useEffect, useState } from "react";
import { fetchMe } from "../services/Apis";
import { toast } from "react-toastify";

const HomePage = () => {
  const [user, setUser] = useState(null);
  console.log(user)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetchMe();
        console.log(res)
        setUser(res);
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch user");
      }
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken"); 
    toast.success("Logged out successfully");
    setUser(null);
    window.location.href = "/login";
  };

  if (!user) return <p className="text-center mt-10 text-gray-600"></p>;

  return (
    <div className="flex justify-center items-center min-h-screen  bg-gray-400 p-2">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Welcome {user.onboardingData?.personal?.fullname || user.email}
        </h1>

        {!user.onboarded ? (
          <p className="text-center text-gray-500">
            Please complete your onboarding to view your full profile.
          </p>
        ) : (
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold mb-1">Personal Info</h2>
              <p><span className="font-medium">Full Name:</span> {user.onboardingData.personal.fullname}</p>
              <p><span className="font-medium">Gender:</span> {user.onboardingData.personal.gender}</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-1">Links</h2>
              <p><span className="font-medium">Instagram:</span> {user.onboardingData.links.instagram}</p>
              <p><span className="font-medium">LinkedIn:</span> {user.onboardingData.links.linkedin}</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-1">Professional Info</h2>
              <p><span className="font-medium">Bio:</span> {user.onboardingData.professional.bio}</p>
              <p><span className="font-medium">Profession:</span> {user.onboardingData.professional.profession}</p>
            </div>
          </div>
        )}

        <button
          onClick={handleLogout}
          className="mt-6 w-full cursor-pointer bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default HomePage;
