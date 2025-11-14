import FacebookLogin from "@greatsumini/react-facebook-login";

export default function FB() {
  const responseFacebook = (response) => {
    console.log(response);

    fetch("https://task-backend-eight-delta.vercel.app/api/facebook-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ accessToken: response.accessToken })
    });
  };

  return (
    <FacebookLogin
      appId="1225272112996282"
      onSuccess={responseFacebook}
      onFail={(error) => console.log(error)}
      onProfileSuccess={(response) => console.log(response)}
      render={({ onClick }) => (
        <div
          onClick={onClick}
          className="cursor-pointer w-full flex items-center justify-center gap-2 border border-gray-300 py-2 my-2 rounded-lg hover:bg-gray-100 transition"
        >
          <img
            src="https://www.svgrepo.com/show/475647/facebook-color.svg"
            alt="facebook"
            className="w-5 h-5"
          />
          <span>Continue with Facebook</span>
        </div>
      )}
    />
  );
}