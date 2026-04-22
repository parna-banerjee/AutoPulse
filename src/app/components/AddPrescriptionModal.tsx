import { useState } from "react";
import { X } from "lucide-react";

export default function AddPrescriptionModal({ onClose }: { onClose: () => void }) {
  const [fileName, setFileName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 w-full max-w-md shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-[#1F3E72]">Add Prescription</h3>
          <button onClick={onClose} className="text-[#5C7BA8] hover:text-[#1F3E72]">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-[#1F3E72] mb-2">File Name</label>
            <input
              type="text"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              className="w-full px-4 py-3 border border-[#D6E4F5] rounded-lg focus:outline-none focus:border-[#2F5D9F] bg-white"
              placeholder="Enter prescription name"
              required
            />
          </div>

          <div>
            <label className="block text-[#1F3E72] mb-2">Upload File</label>
            <button
              type="button"
              className="w-full py-3 border border-[#2F5D9F] text-[#2F5D9F] rounded-lg hover:bg-[#EAF2FB] transition-colors"
            >
              Choose File
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-[#2F5D9F] text-white rounded-lg hover:bg-[#1F3E72] transition-colors mt-6"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
