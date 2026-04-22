import { useState } from "react";

export default function LoginPage({
  onLogin,
  onSwitchToSignup
}: {
  onLogin: () => void;
  onSwitchToSignup: () => void;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen bg-[#EAF2FB] flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl p-12 w-full max-w-md shadow-[0_8px_30px_rgb(47,93,159,0.12)]">
        <div className="text-center mb-10">
          <h1 className="text-[#1F3E72] mb-2" style={{ fontSize: '32px' }}>AutoPulse</h1>
          <p className="text-[#5C7BA8]">Welcome back</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-[#1F3E72] mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3.5 border-2 border-[#D6E4F5] rounded-xl focus:outline-none focus:border-[#2F5D9F] bg-white transition-colors"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-[#1F3E72] mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3.5 border-2 border-[#D6E4F5] rounded-xl focus:outline-none focus:border-[#2F5D9F] bg-white transition-colors"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-[#2F5D9F] text-white rounded-xl hover:bg-[#1F3E72] transition-colors shadow-[0_4px_14px_rgb(47,93,159,0.25)] mt-8"
          >
            Login
          </button>
        </form>

        <p className="mt-8 text-center text-[#5C7BA8]">
          Don't have an account?{" "}
          <button
            onClick={onSwitchToSignup}
            className="text-[#2F5D9F] hover:text-[#1F3E72] transition-colors"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}
