import { useState } from "react";
import EntryPage from "./components/EntryPage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import Dashboard from "./components/Dashboard";
import FamilyMembersPage from "./components/FamilyMembersPage";

type Page = "entry" | "login" | "signup" | "dashboard" | "family-members";

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

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("entry");
  const [selectedMemberId, setSelectedMemberId] = useState(1);
  const [members, setMembers] = useState<Member[]>([
    {
      id: 1,
      name: "John Doe",
      age: 45,
      gender: "Male",
      height: "175 cm",
      weight: "78 kg",
      bloodGroup: "O+",
      avatar: "JD",
    },
    {
      id: 2,
      name: "Sarah Smith",
      age: 38,
      gender: "Female",
      height: "165 cm",
      weight: "62 kg",
      bloodGroup: "A+",
      avatar: "SS",
    },
    {
      id: 3,
      name: "Mike Johnson",
      age: 52,
      gender: "Male",
      height: "180 cm",
      weight: "85 kg",
      bloodGroup: "B+",
      avatar: "MJ",
    },
  ]);

  const selectedMember = members.find((m) => m.id === selectedMemberId) || members[0];

  const handleAddMember = (memberData: Omit<Member, "id" | "avatar">) => {
    const newId = Math.max(...members.map((m) => m.id)) + 1;
    const initials = memberData.name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

    const newMember: Member = {
      ...memberData,
      id: newId,
      avatar: initials,
    };

    setMembers([...members, newMember]);
  };

  const handleSelectMember = (id: number) => {
    setSelectedMemberId(id);
  };

  return (
    <div className="size-full">
      {currentPage === "entry" && (
        <EntryPage onGetStarted={() => setCurrentPage("login")} />
      )}

      {currentPage === "login" && (
        <LoginPage
          onLogin={() => setCurrentPage("family-members")}
          onSwitchToSignup={() => setCurrentPage("signup")}
        />
      )}

      {currentPage === "signup" && (
        <SignupPage
          onSignup={() => setCurrentPage("family-members")}
          onSwitchToLogin={() => setCurrentPage("login")}
        />
      )}

      {currentPage === "dashboard" && (
        <Dashboard
          selectedMember={selectedMember}
          onNavigateToMembers={() => setCurrentPage("family-members")}
        />
      )}

      {currentPage === "family-members" && (
        <FamilyMembersPage
          members={members}
          onAddMember={handleAddMember}
          onSelectMember={handleSelectMember}
          onBack={() => setCurrentPage("dashboard")}
        />
      )}
    </div>
  );
}