const InstagramButton = () => (
    <button type="button" onClick={() => window.location.href = "https://task-backend-chi.vercel.app/api/auth/instagram"} className="cursor-pointer w-full flex items-center justify-center gap-2 border border-gray-300 py-2 my-2 rounded-lg hover:bg-gray-100 transition">
      <img src="https://www.svgrepo.com/show/452229/instagram-1.svg" alt="instagram" className="w-5 h-5" />
      <span>Continue with Instagram</span>
    </button>
  );
  
export default InstagramButton;