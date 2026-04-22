import { X } from "lucide-react";

export default function ShareQRModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 w-full max-w-md shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-[#1F3E72]">Share QR Code</h3>
          <button onClick={onClose} className="text-[#5C7BA8] hover:text-[#1F3E72]">
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col items-center space-y-6">
          <div className="w-64 h-64 bg-[#EAF2FB] border-2 border-[#D6E4F5] rounded-xl flex items-center justify-center">
            <div className="w-48 h-48 bg-white border border-[#D6E4F5]">
              <svg viewBox="0 0 100 100" className="w-full h-full p-2">
                <rect x="0" y="0" width="45" height="45" fill="#1F3E72" />
                <rect x="55" y="0" width="45" height="45" fill="#1F3E72" />
                <rect x="0" y="55" width="45" height="45" fill="#1F3E72" />
                <rect x="10" y="10" width="25" height="25" fill="white" />
                <rect x="65" y="10" width="25" height="25" fill="white" />
                <rect x="10" y="65" width="25" height="25" fill="white" />
                <rect x="20" y="20" width="5" height="5" fill="#1F3E72" />
                <rect x="75" y="20" width="5" height="5" fill="#1F3E72" />
                <rect x="20" y="75" width="5" height="5" fill="#1F3E72" />
              </svg>
            </div>
          </div>

          <div className="flex gap-3 w-full">
            <button className="flex-1 py-3 border border-[#2F5D9F] text-[#2F5D9F] rounded-lg hover:bg-[#EAF2FB] transition-colors">
              Download
            </button>
            <button className="flex-1 py-3 bg-[#2F5D9F] text-white rounded-lg hover:bg-[#1F3E72] transition-colors">
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
