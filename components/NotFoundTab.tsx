import Icon from "./Icon";

interface NotFoundTabProps {
  onBackToHome: () => void;
}

export default function NotFoundTab({ onBackToHome }: NotFoundTabProps) {
  return (
    <div className="py-20 flex flex-col items-center justify-center text-center space-y-6 max-w-md mx-auto animate-fade-in select-none">
      {/* 404 Icon/Illustration container */}
      <div className="relative w-20 h-20 rounded-3xl bg-[#252526] border border-[#ffdb70]/20 flex items-center justify-center text-[#ffdb70] shadow-xl">
        {/* Pulsing ring */}
        <div className="absolute inset-0 rounded-3xl bg-[#ffdb70]/5 animate-ping" />
        <Icon name="AlertCircle" size={32} />
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-extrabold text-white tracking-tight uppercase">
          404: Node Unreachable
        </h3>
        <p className="text-xs text-gray-400 font-light leading-relaxed">
          The requested system node or article does not exist or has been
          relocated to another workspace coordinate.
        </p>
      </div>

      <button
        id="not-found-back-btn"
        onClick={onBackToHome}
        className="px-5 py-3 rounded-xl border border-[#383838] hover:border-[#ffdb70] bg-[#252526] hover:bg-[#ffdb70]/5 flex items-center justify-center gap-2 text-xs font-semibold tracking-wide text-gray-200 hover:text-[#ffdb70] transition-all duration-300 shadow-md cursor-pointer"
      >
        <Icon name="ArrowLeft" size={14} className="text-[#ffdb70]" />
        <span>Return to Main Profile</span>
      </button>
    </div>
  );
}
