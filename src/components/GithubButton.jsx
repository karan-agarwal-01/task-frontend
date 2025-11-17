import { GithubLogin } from "../services/Apis";

export default function GithubButton() {
  const handleLogin = async () => {
    const data = await GithubLogin();
    window.location.href = data.url;
  };

  return (
    <div
      onClick={handleLogin}
      className="cursor-pointer w-full flex items-center justify-center gap-2 border border-gray-300 py-2 my-2 rounded-lg hover:bg-gray-100 transition"
    >
    <img src={'https://www.svgrepo.com/show/452211/github.svg'} alt="github" className="w-5 h-5" />
     Continue with github
    </div>
  );
}
