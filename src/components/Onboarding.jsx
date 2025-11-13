import { useState } from "react"
import Step1 from "./Onboarding/Step1";
import Step2 from "./Onboarding/Step2";
import Step3 from "./Onboarding/Step3";

const Onboarding = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);

    switch (step) {
        case 1:
            return <Step1 nextStep={nextStep} setFormData={setFormData} />
        case 2:
            return <Step2 prevStep={prevStep} nextStep={nextStep} setFormData={setFormData} />
        case 3:
            return <Step3 prevStep={prevStep} setFormData={setFormData} />
        default:
            return <div>Nothing!</div>
    }
};

export default Onboarding;