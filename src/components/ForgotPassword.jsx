import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { forgetPassword } from "../services/Apis";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
    const { register, handleSubmit, formState:{errors, isSubmitting} } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const res = await forgetPassword({ email: data.email });
            toast.success("Reset link sent to your email");
            if (res) {
                navigate('/sent-email')
            }
        } catch (err) {
            toast.error(err.response?.data?.message || "Something went wrong");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-400 p-2">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
                <h2 className="text-xl font-bold text-center mb-4 text-indigo-600">Forgot Password</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="block mb-1 font-medium text-gray-700">Email</label>
                    <input type="email" {...register("email", {required: "Email is required"})} className={`w-full border rounded-lg px-3 py-2 focus:ring-2 outline-none ${errors.email ? "border-red-500 focus:ring-red-400" : "focus:ring-indigo-500 border-gray-300" }`} />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    <button disable={isSubmitting} className="w-full bg-indigo-600 text-white py-2 rounded-lg mt-4 cursor-pointer">
                        {isSubmitting ? "Sending..." : "Send Reset Link"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ForgetPassword;
