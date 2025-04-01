import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const FixedConsultationButton = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-4 right-4 z-[100]">
      <Button 
        className="bg-rose hover:bg-rose-dark text-white py-3 px-6 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 text-sm font-medium"
        onClick={() => navigate("/consultation")}
      >
        Consultation
      </Button>
    </div>
  );
};

export default FixedConsultationButton; 