import { useState } from "react";
import { X } from "lucide-react";

interface MemberData {
  name: string;
  age: number;
  gender: string;
  height: string;
  weight: string;
  bloodGroup: string;
}

export default function AddMemberModal({
  onClose,
  onSave,
}: {
  onClose: () => void;
  onSave: (data: MemberData) => void;
}) {
  const [formData, setFormData] = useState<MemberData>({
    name: "",
    age: 0,
    gender: "",
    height: "",
    weight: "",
    bloodGroup: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 w-full max-w-lg shadow-lg max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-[#1F3E72]">Add Family Member</h3>
          <button onClick={onClose} className="text-[#5C7BA8] hover:text-[#1F3E72]">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-[#1F3E72] mb-2">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border-2 border-[#D6E4F5] rounded-xl focus:outline-none focus:border-[#2F5D9F] bg-white"
              placeholder="Enter name"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[#1F3E72] mb-2">Age</label>
              <input
                type="number"
                value={formData.age || ""}
                onChange={(e) =>
                  setFormData({ ...formData, age: parseInt(e.target.value) || 0 })
                }
                className="w-full px-4 py-3 border-2 border-[#D6E4F5] rounded-xl focus:outline-none focus:border-[#2F5D9F] bg-white"
                placeholder="Age"
                required
              />
            </div>

            <div>
              <label className="block text-[#1F3E72] mb-2">Gender</label>
              <select
                value={formData.gender}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                className="w-full px-4 py-3 border-2 border-[#D6E4F5] rounded-xl focus:outline-none focus:border-[#2F5D9F] bg-white"
                required
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[#1F3E72] mb-2">Height</label>
              <input
                type="text"
                value={formData.height}
                onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                className="w-full px-4 py-3 border-2 border-[#D6E4F5] rounded-xl focus:outline-none focus:border-[#2F5D9F] bg-white"
                placeholder="e.g., 170 cm"
                required
              />
            </div>

            <div>
              <label className="block text-[#1F3E72] mb-2">Weight</label>
              <input
                type="text"
                value={formData.weight}
                onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                className="w-full px-4 py-3 border-2 border-[#D6E4F5] rounded-xl focus:outline-none focus:border-[#2F5D9F] bg-white"
                placeholder="e.g., 70 kg"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-[#1F3E72] mb-2">Blood Group</label>
            <select
              value={formData.bloodGroup}
              onChange={(e) => setFormData({ ...formData, bloodGroup: e.target.value })}
              className="w-full px-4 py-3 border-2 border-[#D6E4F5] rounded-xl focus:outline-none focus:border-[#2F5D9F] bg-white"
              required
            >
              <option value="">Select</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 border-2 border-[#D6E4F5] text-[#1F3E72] rounded-xl hover:bg-[#EAF2FB] transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-3 bg-[#2F5D9F] text-white rounded-xl hover:bg-[#1F3E72] transition-colors shadow-[0_4px_14px_rgb(47,93,159,0.25)]"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
