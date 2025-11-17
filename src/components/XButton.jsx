import axios from "axios";
import { xLogin } from "../services/Apis";

export default function XLogin() {
  const handleLogin = async () => {
    const data = await xLogin();
    window.location.href = data.url;
  };

  return (
    <div
      onClick={handleLogin}
      className="cursor-pointer w-full flex items-center justify-center gap-2 border border-gray-300 py-2 my-2 rounded-lg hover:bg-gray-100 transition"
    >
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/X_icon.svg/768px-X_icon.svg.png?20250519203220" alt="facebook" className="w-5 h-5" />
      Continue with X
    </div>
  );
}
