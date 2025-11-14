import { FaCheckCircle } from "react-icons/fa";

const EmailSentConfirmation = () => {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-400 p-2">
      <div className="p-8 rounded-3xl text-center shadow-2xl w-[90%] max-w-md bg-white text-gray-700">
        <FaCheckCircle className="text-6xl text-green-400 mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-2">Reset Password Link Sent!</h2>
        <p className="text-lg opacity-90 mb-6">
           Check your mail account or spam folder.
        </p>
      </div>
    </div>
  );
};

export default EmailSentConfirmation;
