import { useForm } from "react-hook-form";
import { saveStep1 } from "../../services/Apis";
import { toast } from "react-toastify";

const Step1 = ({ nextStep, setFormData }) => {

    const { register, handleSubmit, formState: {errors, isSubmitting} } = useForm();

    const onSubmit = async (data) => {
        try {
            setFormData((prev) => ({...prev,...data}));
            await saveStep1({ fullname: data.fullname, gender: data.gender });
            toast.success("Personal info saved successfully");
            nextStep();
        } catch (error) {
            toast.error("Failed to save personal info");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-400 p-2">
            <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">Step 1: Basic Info</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input type="text" placeholder="Enter your full name" {...register("fullname", {required: "Fullname is required",})} className={`w-full border rounded-lg px-3 py-2 focus:ring-2 outline-none ${errors.fullname ? "border-red-500 focus:ring-red-400" : "focus:ring-indigo-500 border-gray-300" }`} />
                        {errors.fullname && <p className="text-red-500 text-sm mt-1">{errors.fullname.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                        <div className="flex gap-6">
                        {["Male", "Female", "Other"].map((option) => (
                            <label key={option} className="flex items-center space-x-2 cursor-pointer">
                                <input type="radio" value={option} {...register("gender", { required: "Gender is required" })} className="w-4 h-4 accent-indigo-600 focus:ring-indigo-500 border-gray-300" />
                                <span className="text-gray-700">{option}</span>
                            </label>
                        ))}
                        </div>
                        {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>}
                    </div>
                    <div className="mt-5">
                        <button type="submit" disabled={isSubmitting} className="cursor-pointer w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition disabled:opacity-70">Next</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Step1;