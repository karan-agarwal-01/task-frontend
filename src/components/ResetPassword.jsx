import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { resetPassword } from "../services/Apis";
import { toast } from "react-toastify";

const ResetPassword = () => {
    const { token } = useParams();
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState:{errors, isSubmitting} } = useForm();

    const onSubmit = async (data) => {
        try {
            await resetPassword(token, { password: data.password });
            toast.success("Password reset successful");
            navigate("/login");
        } catch (err) {
            toast.error(err.response?.data?.message || "Invalid or expired token");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-400 p-2">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
                <h2 className="text-xl font-bold text-center text-indigo-600 mb-4">Reset Password</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block mb-1 font-medium text-gray-700">New Password</label>
                        <input type="password" {...register("password", {required: "Password required", minLength: {value: 8, message: "At least 8 characters"}})} className={`w-full border rounded-lg px-3 py-2 focus:ring-2 outline-none ${errors.cpassword ? "border-red-500 focus:ring-red-400" : "focus:ring-indigo-500 border-gray-300" }`}/>
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                        <input type="password" {...register("cpassword", {required: "Please confirm your password", minLength: { value: 8, message: "At least 8 characters" }, validate: (value) => value === watch("password") || "Password do not match"})} className={`w-full border rounded-lg px-3 py-2 focus:ring-2 outline-none ${errors.cpassword ? "border-red-500 focus:ring-red-400" : "focus:ring-indigo-500 border-gray-300" }`} />
                        {errors.cpassword && <p className="text-red-500 text-sm mt-1">{errors.cpassword.message}</p>}
                    </div>
                    <button disabled={isSubmitting} className="w-full bg-indigo-600 text-white py-2 rounded-lg mt-4 cursor-pointer">Reset Password</button>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;
