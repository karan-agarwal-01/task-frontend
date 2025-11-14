import FacebookLogin from "react-facebook-login";

export default function FB() {
  const responseFacebook = (response) => {
    console.log(response);

    // Send token to backend
    fetch("https://task-backend-eight-delta.vercel.app/api/facebook-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ accessToken: response.accessToken })
    });
  };

  return (
    <div className="cursor-pointer w-full flex items-center justify-center gap-2 border border-gray-300 py-2 my-2 rounded-lg hover:bg-gray-100 transition">
        <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="facebook" className="w-5 h-5" />  
        <FacebookLogin appId="1225272112996282" autoLoad={false} fields="name,email,picture" callback={responseFacebook} cssClass="cursor-pointer" />
    </div>
  );
}