import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { Search, Users } from "lucide-react";
import AddPrescriptionModal from "./AddPrescriptionModal";
import AddReportModal from "./AddReportModal";
import ShareQRModal from "./ShareQRModal";

const mockHealthData = {
  BP: [
    { time: "Mon", value: 120 },
    { time: "Tue", value: 118 },
    { time: "Wed", value: 122 },
    { time: "Thu", value: 119 },
    { time: "Fri", value: 121 },
    { time: "Sat", value: 117 },
    { time: "Sun", value: 120 },
  ],
  ECG: [
    { time: "Mon", value: 75 },
    { time: "Tue", value: 78 },
    { time: "Wed", value: 76 },
    { time: "Thu", value: 80 },
    { time: "Fri", value: 77 },
    { time: "Sat", value: 74 },
    { time: "Sun", value: 76 },
  ],
};

const mockPrescriptions = [
  { id: 1, name: "Annual Checkup Report", date: "2026-04-15" },
  { id: 2, name: "Blood Test Results", date: "2026-04-10" },
  { id: 3, name: "Prescription - Antibiotics", date: "2026-04-05" },
  { id: 4, name: "X-Ray Report", date: "2026-03-28" },
];

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

interface DashboardProps {
  selectedMember: Member;
  onNavigateToMembers: () => void;
}

export default function Dashboard({ selectedMember, onNavigateToMembers }: DashboardProps) {
  const [selectedMetric, setSelectedMetric] = useState<"BP" | "ECG">("BP");
  const [searchQuery, setSearchQuery] = useState("");
  const [showPrescriptionModal, setShowPrescriptionModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [showQRModal, setShowQRModal] = useState(false);

  return (
    <div className="min-h-screen bg-[#EAF2FB] flex">
      {/* Left Panel - Basic Details */}
      <div className="w-80 bg-white border-r border-[#D6E4F5] p-6">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={onNavigateToMembers}
            className="flex items-center gap-2 text-[#2F5D9F] hover:text-[#1F3E72] transition-colors"
          >
            <Users size={20} />
            <span>All Members</span>
          </button>
        </div>

        <h3 className="text-[#1F3E72] mb-6">Basic Details</h3>

        <div className="space-y-6">
          <div className="flex flex-col items-center pb-6 border-b border-[#D6E4F5]">
            <div className="w-24 h-24 rounded-full bg-[#2F5D9F] text-white flex items-center justify-center text-2xl mb-4">
              {selectedMember.avatar}
            </div>
            <h4 className="text-[#1F3E72]">{selectedMember.name}</h4>
            <p className="text-[#5C7BA8]">
              {selectedMember.age} years, {selectedMember.gender}
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-[#EAF2FB] rounded-xl">
              <p className="text-sm text-[#5C7BA8] mb-1">Height</p>
              <p className="text-[#1F3E72]">{selectedMember.height}</p>
            </div>

            <div className="p-4 bg-[#EAF2FB] rounded-xl">
              <p className="text-sm text-[#5C7BA8] mb-1">Weight</p>
              <p className="text-[#1F3E72]">{selectedMember.weight}</p>
            </div>

            <div className="p-4 bg-[#EAF2FB] rounded-xl">
              <p className="text-sm text-[#5C7BA8] mb-1">Blood Group</p>
              <p className="text-[#1F3E72]">{selectedMember.bloodGroup}</p>
            </div>
          </div>

          <button
            onClick={onNavigateToMembers}
            className="w-full py-3 border-2 border-[#2F5D9F] text-[#2F5D9F] rounded-xl hover:bg-[#EAF2FB] transition-colors"
          >
            View All Members
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Top Actions */}
          <div className="grid grid-cols-3 gap-4">
            <button
              onClick={() => setShowPrescriptionModal(true)}
              className="p-6 bg-white border border-[#D6E4F5] rounded-xl hover:border-[#2F5D9F] transition-colors text-[#1F3E72]"
            >
              Add Prescription
            </button>
            <button
              onClick={() => setShowReportModal(true)}
              className="p-6 bg-white border border-[#D6E4F5] rounded-xl hover:border-[#2F5D9F] transition-colors text-[#1F3E72]"
            >
              Add Report
            </button>
            <button
              onClick={() => setShowQRModal(true)}
              className="p-6 bg-white border border-[#D6E4F5] rounded-xl hover:border-[#2F5D9F] transition-colors text-[#1F3E72]"
            >
              Share QR
            </button>
          </div>

          {/* Health Data Graph */}
          <div className="bg-white rounded-xl p-6 border border-[#D6E4F5]">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-[#1F3E72]">Health Data</h3>
              <select
                value={selectedMetric}
                onChange={(e) => setSelectedMetric(e.target.value as "BP" | "ECG")}
                className="px-4 py-2 border border-[#D6E4F5] rounded-lg focus:outline-none focus:border-[#2F5D9F] bg-white text-[#1F3E72]"
              >
                <option value="BP">Blood Pressure</option>
                <option value="ECG">Heart Rate</option>
              </select>
            </div>

            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={mockHealthData[selectedMetric]}>
                <CartesianGrid strokeDasharray="3 3" stroke="#D6E4F5" />
                <XAxis dataKey="time" stroke="#5C7BA8" />
                <YAxis stroke="#5C7BA8" />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#2F5D9F"
                  strokeWidth={2}
                  dot={{ fill: "#2F5D9F", r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Previous Prescriptions */}
          <div className="bg-white rounded-xl p-6 border border-[#D6E4F5]">
            <h3 className="text-[#1F3E72] mb-4">Previous Prescriptions</h3>

            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5C7BA8]" size={18} />
              <input
                type="text"
                placeholder="Search prescriptions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-[#D6E4F5] rounded-lg focus:outline-none focus:border-[#2F5D9F] bg-white"
              />
            </div>

            <div className="space-y-3">
              {mockPrescriptions.map((prescription) => (
                <div
                  key={prescription.id}
                  className="flex items-center justify-between p-4 border border-[#D6E4F5] rounded-lg hover:bg-[#EAF2FB] transition-colors"
                >
                  <div>
                    <p className="text-[#1F3E72]">{prescription.name}</p>
                    <p className="text-sm text-[#5C7BA8]">{prescription.date}</p>
                  </div>
                  <button className="text-[#2F5D9F] hover:underline">
                    View More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Appointment */}
      <div className="w-80 bg-white border-l border-[#D6E4F5] p-6">
        <h3 className="text-[#1F3E72] mb-6">Next Appointment</h3>

        <div className="p-6 border border-[#D6E4F5] rounded-xl bg-[#EAF2FB]">
          <p className="text-sm text-[#5C7BA8] mb-2">Upcoming</p>
          <p className="text-[#1F3E72] mb-1">Dr. Emily Carter</p>
          <p className="text-[#5C7BA8]">April 25, 2026</p>
          <p className="text-[#5C7BA8]">10:30 AM</p>
        </div>
      </div>

      {/* Modals */}
      {showPrescriptionModal && (
        <AddPrescriptionModal onClose={() => setShowPrescriptionModal(false)} />
      )}
      {showReportModal && (
        <AddReportModal onClose={() => setShowReportModal(false)} />
      )}
      {showQRModal && (
        <ShareQRModal onClose={() => setShowQRModal(false)} />
      )}
    </div>
  );
}
