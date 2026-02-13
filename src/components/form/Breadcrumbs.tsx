import { useNavigate } from "react-router-dom";
import backArrow from "../../assets/images/arrow-left.svg";

interface BreadcrumbsProps {
  to?: string;      
  label: string;
  subLabel?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  to,
  label,
  subLabel,
}) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (to) {
      navigate(to);   // navigate only if "to" is passed
    }
  };

  return (
    <div className="flex items-center gap-2 font-medium text-black">
      <img
        src={backArrow}
        alt="back"
        className={`w-4 h-4 ${to ? "cursor-pointer" : "cursor-default opacity-60"}`}
        onClick={handleBackClick}
      />

      <span>{label}</span>

      {subLabel && (
        <>
          <span>{">"}</span>
          <span>{subLabel}</span>
        </>
      )}
    </div>
  );
};

export default Breadcrumbs;
