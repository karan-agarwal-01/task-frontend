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
        // <FacebookLogin
        //   appId="1186947169471468"
        //   onSuccess={responseFacebook}
        //   onFail={(error) => console.log(error)}
        //   onProfileSuccess={(response) => console.log(response)}
        //   render={({ onClick }) => (
        //     <div
        //       onClick={onClick}
        //       className="cursor-pointer w-full flex items-center justify-center gap-2 border border-gray-300 py-2 my-2 rounded-lg hover:bg-gray-100 transition"
        //     >
        //       <img
        //         src="https://www.svgrepo.com/show/475647/facebook-color.svg"
        //         alt="facebook"
        //         className="w-5 h-5"
        //       />
        //       <span>Continue with Facebook</span>
        //     </div>
        //   )}
        // />
        <div  className="cursor-pointer w-full flex items-center justify-center gap-2 border border-gray-300 py-2 my-2 rounded-lg hover:bg-gray-100 transition">
             <img
                src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                alt="facebook"
                className="w-5 h-5"
              />
            <FacebookLogin
                appId={1186947169471468}
                autoLoad={false}
                fields='name,email,picture'
                callback={responseFacebook}
            />
        </div>
        // render={(renderProps) => (
        //     // <button
        //     //     onClick={renderProps.onClick}
        //     //     className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
        //     // >
        //     //     {/* <FaFacebookF className="w-5 h-5 mr-2" /> */}
        //     //     <span className="text-sm font-medium">Facebook</span>
        //     // </button>
        //     <Button
        //     type="primary"
        //     icon={<FacebookOutlined />}
        //     onClick={renderProps.onClick}
        //     className="bg-blue-600 hover:bg-blue-700 border-blue-600"
        // >
        //     Login With Facebook
        // </Button>
        // )}
    );
}
