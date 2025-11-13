import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { login } from "../services/Apis";
import { toast } from "react-toastify";

const Login = () => {

    const { register, handleSubmit, formState: {errors, isSubmitting} } = useForm();
    const navigate = useNavigate('');

    const onSubmit = async (data) => {
        try {
            const res = await login({ email: data.email, password: data.password })
            if (res) {
                toast.success("login successfully")
                if (res?.onboarded) {
                    navigate('/home')
                } else {
                    navigate('/onboarding')
                }
            }
        } catch (error) {
            toast.error(error.message);
            console.log(error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-400 p-2">
            <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">Login to your account</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" {...register("email", {required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email format" }})} className={`w-full border rounded-lg px-3 py-2 focus:ring-2 outline-none ${errors.email ? "border-red-500 focus:ring-red-400" : "focus:ring-indigo-500 border-gray-300" }`} />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input type="password" {...register("password", {required: "Password is required", minLength: { value: 8, message: "At least 8 characters" }})} className={`w-full border rounded-lg px-3 py-2 focus:ring-2 outline-none ${errors.password ? "border-red-500 focus:ring-red-400" : "focus:ring-indigo-500 border-gray-300" }`} />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                    </div>
                    <button type="submit" className="cursor-pointer w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition disabled:opacity-70" disabled={isSubmitting}>
                        {isSubmitting ? "Creating..." : "Login"}
                    </button>
                </form>
                <p className="mt-4 text-sm text-center text-gray-600">
                    Didn't have an account ? <span onClick={() => navigate('/register')} className="text-indigo-600 cursor-pointer font-medium">Register</span>
                </p>
            </div>
        </div>
    );
}

export default Login;