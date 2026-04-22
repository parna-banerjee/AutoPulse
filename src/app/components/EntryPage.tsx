export default function EntryPage({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <div className="min-h-screen bg-[#EAF2FB] flex flex-col items-center justify-center">
      <div className="text-center space-y-12">
        <h1 className="text-[#1F3E72] tracking-tight" style={{ fontSize: '48px' }}>
          AutoPulse
        </h1>

        <button
          onClick={onGetStarted}
          className="px-12 py-3.5 bg-[#2F5D9F] text-white rounded-xl hover:bg-[#1F3E72] transition-colors"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
