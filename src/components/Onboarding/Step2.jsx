import { useForm } from "react-hook-form";
import { saveStep2 } from "../../services/Apis";
import { toast } from "react-toastify";

const Step2 = ({ prevStep, nextStep, setFormData  }) => {

    const { register, handleSubmit, formState: {errors} } = useForm();

    const onSubmit = async (data) => {
        try {
            setFormData((prev) => ({...prev,...data}));
            await saveStep2({ instagram: data.instagram, linkedin: data.linkedin });
            toast.success("Profile link saved successfully");
            nextStep();
        } catch (error) {
            toast.error("Failed to saved profile info");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-400 p-2">
            <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">Step 2: Profile Links</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Instagram</label>
                        <input type="text" placeholder="Enter Instagram profile link" {...register("instagram", {required: "Instagram profile link is required",})} className={`w-full border rounded-lg px-3 py-2 focus:ring-2 outline-none ${errors.instagram ? "border-red-500 focus:ring-red-400" : "focus:ring-indigo-500 border-gray-300" }`} />
                        {errors.instagram && <p className="text-red-500 text-sm mt-1">{errors.instagram.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn</label>
                        <input type="text" placeholder="Enter LinkedIn profile link" {...register("linkedin", {required: "Linkedin profile link is required",})} className={`w-full border rounded-lg px-3 py-2 focus:ring-2 outline-none ${errors.linkedin ? "border-red-500 focus:ring-red-400" : "focus:ring-indigo-500 border-gray-300" }`} />
                        {errors.linkedin && <p className="text-red-500 text-sm mt-1">{errors.linkedin.message}</p>}
                    </div>
                    <div className="flex gap-2 mt-5">
                        <button type="button" onClick={prevStep}  className="cursor-pointer w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition disabled:opacity-70">Prev</button>
                        <button type="submit" className="cursor-pointer w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition disabled:opacity-70">Next</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Step2;