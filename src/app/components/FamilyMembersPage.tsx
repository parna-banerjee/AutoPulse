import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import AddMemberModal from "./AddMemberModal";

interface Member {
  id: number;
  name: string;
  age: number;
  gender: string;
  height: string;
  weight: string;
  bloodGroup: string;
  avatar: string;
}

interface FamilyMembersPageProps {
  members: Member[];
  onAddMember: (member: Omit<Member, "id" | "avatar">) => void;
  onSelectMember: (id: number) => void;
  onBack: () => void;
}

export default function FamilyMembersPage({
  members,
  onAddMember,
  onSelectMember,
  onBack,
}: FamilyMembersPageProps) {
  const [showAddModal, setShowAddModal] = useState(false);

  const handleAddMember = (memberData: Omit<Member, "id" | "avatar">) => {
    onAddMember(memberData);
    setShowAddModal(false);
  };

  const handleMemberClick = (id: number) => {
    onSelectMember(id);
    onBack();
  };

  return (
    <div className="min-h-screen bg-[#EAF2FB]">
      <div className="max-w-6xl mx-auto p-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[#1F3E72]">Family Members</h2>

          <button
            onClick={() => setShowAddModal(true)}
            className="px-6 py-3 bg-[#2F5D9F] text-white rounded-xl hover:bg-[#1F3E72] transition-colors"
          >
            Add Member
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member) => (
            <div
              key={member.id}
              onClick={() => handleMemberClick(member.id)}
              className="bg-white p-6 rounded-xl border-2 border-[#D6E4F5] hover:border-[#2F5D9F] cursor-pointer transition-all shadow-sm hover:shadow-md"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-[#2F5D9F] text-white flex items-center justify-center text-xl">
                  {member.avatar}
                </div>

                <div>
                  <h3 className="text-[#1F3E72] mb-2">{member.name}</h3>
                  <p className="text-[#5C7BA8]">
                    {member.age} years, {member.gender}
                  </p>
                </div>

                <div className="w-full pt-4 border-t border-[#D6E4F5] space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#5C7BA8]">Height:</span>
                    <span className="text-[#1F3E72]">{member.height}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5C7BA8]">Weight:</span>
                    <span className="text-[#1F3E72]">{member.weight}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5C7BA8]">Blood Group:</span>
                    <span className="text-[#1F3E72]">{member.bloodGroup}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showAddModal && (
        <AddMemberModal
          onClose={() => setShowAddModal(false)}
          onSave={handleAddMember}
        />
      )}
    </div>
  );
}
