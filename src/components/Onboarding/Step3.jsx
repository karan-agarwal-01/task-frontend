import { useForm } from "react-hook-form";
import { completeOnboarding, saveStep3 } from "../../services/Apis";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Step3 = ({ prevStep, setFormData }) => {

    const { register, handleSubmit, formState: {errors} } = useForm();
    const navigate = useNavigate();

    const handleFinalSubmit = async (data) => {
        try {
          setFormData((prev) => ({ ...prev, ...data }));
          await saveStep3({ bio: data.bio, profession: data.profession });
          await completeOnboarding();
          toast.success("Onboarding completed");  
          navigate("/onboarding/complete");
        } catch (error) {
          toast.error("Failed to save data");
        }
    };
    
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-400 p-2">
            <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">Step 3: Bio & Profession</h2>
                <form onSubmit={handleSubmit(handleFinalSubmit)}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Profession Name</label>
                        <input type="text" placeholder="e.g., Software Engineer, Designer, etc." {...register("profession", {required: "Profession is required",})} className={`w-full border rounded-lg px-3 py-2 focus:ring-2 outline-none ${errors.profession ? "border-red-500 focus:ring-red-400" : "focus:ring-indigo-500 border-gray-300" }`} />
                        {errors.profession && <p className="text-red-500 text-sm mt-1">{errors.profession.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                        <textarea placeholder="Write a short bio about yourself..." rows={4} {...register("bio", {required: "Bio required", maxLength: { value: 150, message: "Bio cannot exceed 150 characters"}})} className={`w-full border rounded-lg px-3 py-2 focus:ring-2 outline-none resize-none ${ errors.bio ? "border-red-500 focus:ring-red-400" : "focus:ring-indigo-500 border-gray-300"}`} />
                        {errors.bio && <p className="text-red-500 text-sm mt-1">{errors.bio.message}</p>}
                    </div>
                    <div className="flex gap-2 mt-5">
                        <button type="button" onClick={prevStep}  className="cursor-pointer w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition disabled:opacity-70">Prev</button>
                        <button type="submit" className="cursor-pointer w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition disabled:opacity-70">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Step3;