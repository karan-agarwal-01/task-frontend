// import { useEffect, useState } from "react";
// import { fetchMe } from "../services/Apis";
// import axios from "axios";

// const ProfilePage = () => {
//     const [user, setUser] = useState(null);

//     console.log(user)
  
//     useEffect(() => {
//       const fetchUser = async () => {
//         try {
//           const res = await axios.get('http://localhost:3000/api/auth/me')
//           console.log(res)
//           setUser(res);
//         } catch (error) {
//           console.error(error);
//           toast.error("Failed to fetch user");
//         }
//       };
  
//       fetchUser();
//     }, []);
  
//     return (
//       <div className="min-h-screen flex justify-center items-center bg-gray-400 p-6">
//         <div className="bg-white shadow-xl rounded-2xl w-full max-w-xl p-8">
//           <div className="flex flex-col items-center">
//             <img src={user.photo} alt="Profile" className="w-32 h-32 rounded-full border-4 border-gray-200 shadow-md" />
//             <h1 className="text-3xl font-bold mt-4">{user.fullname}</h1>
//             <p className="text-gray-500 text-lg">{user.email}</p>
//           </div>
//           <button className="mt-8 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl text-lg font-semibold shadow">Logout</button>
//         </div>
//       </div>
//     );
// };
  
// export default ProfilePage;