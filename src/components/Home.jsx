import { useEffect, useState } from "react";
import { fetchMe } from "../services/Apis";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Img from '../assets/img.webp';

const HomePage = () => {
  const [user, setUser] = useState(null);
  console.log(user)
  const navigate = useNavigate();

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

  // const getImageSrc = (url) => {
  //   if (!url) return Img;
  //   // If LinkedIn image (contains "media.licdn.com"), proxy it
  //   if (url.includes("media.licdn.com")) {
  //     return `https://task-backend-chi.vercel.app/proxy/image?url=${encodeURIComponent(url)}`;
  //   }
  //   return url;
  // };

  const getImageSrc = (filename) => {
    if (!filename) return Img;
    return `https://task-backend-chi.vercel.app/image/${filename}`;
  };
  
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
          Welcome {user.onboardingData?.personal?.fullname || user.fullname}
        </h1>

        {!user.onboarded ? (
          <p className="text-center text-gray-500">
            Please complete your onboarding to view your full profile.
            <p onClick={() => navigate('/onboarding')} className="text-indigo-600 text-sm mt-1 text-center font-semibold cursor-pointer">complete your profile</p>
          </p>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold mb-1">Personal Info</h2>
                <p><span className="font-medium">Full Name:</span> {user.fullname || user.onboardingData.personal.fullname}</p>
                <p><span className="font-medium">Email:</span> {user.email}</p>
                <p><span className="font-medium">Gender:</span> {user.onboardingData.personal.gender}</p>
              </div>

              <div className="flex gap-4">
                  <img src={getImageSrc(user?.photo)} alt="profile" className="w-20 h-20 rounded-full border-2 object-cover border-gray-200" />
              </div>
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
