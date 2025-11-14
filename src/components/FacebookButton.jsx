const FacebookButton = () => (
    <button type="button" onClick={() => window.location.href = "https://task-backend-eight-delta.vercel.app/api/auth/facebook"} className="cursor-pointer w-full flex items-center justify-center gap-2 border border-gray-300 py-2 my-2 rounded-lg hover:bg-gray-100 transition">
      <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="facebook" className="w-5 h-5" />
      <span>Continue with Facebook</span>
    </button>
  );
  
  export default FacebookButton;