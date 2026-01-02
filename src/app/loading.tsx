export default function Loading() {
  return (
    <div className="fixed inset-0 bg-zenith-base flex items-center justify-center z-50">
      {/* Background Effects */}
      <div className="absolute inset-0 noise opacity-20" />
      <div className="absolute inset-0 scanlines opacity-5" />

      {/* Decorative Corners */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-zenith-cyan/30" />
      <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-zenith-cyan/30" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-zenith-cyan/30" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-zenith-cyan/30" />

      <div className="flex flex-col items-center gap-6">
        {/* Spinner */}
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 border-t-2 border-zenith-cyan rounded-full animate-spin" />
          <div className="absolute inset-2 border-r-2 border-zenith-green rounded-full animate-spin [animation-direction:reverse]" />
          <div className="absolute inset-4 border-b-2 border-zenith-white/50 rounded-full animate-spin" />
          {/* Center glow */}
          <div className="absolute inset-6 bg-zenith-cyan/20 rounded-full blur-sm animate-pulse" />
        </div>

        {/* Loading Text */}
        <div className="space-y-2 text-center">
          <div className="font-mono text-zenith-cyan text-sm tracking-widest">
            INITIALIZING SYSTEM
          </div>
          {/* Progress dots */}
          <div className="flex justify-center gap-1">
            <span className="w-2 h-2 bg-zenith-cyan rounded-full animate-bounce [animation-delay:0ms]" />
            <span className="w-2 h-2 bg-zenith-cyan rounded-full animate-bounce [animation-delay:150ms]" />
            <span className="w-2 h-2 bg-zenith-cyan rounded-full animate-bounce [animation-delay:300ms]" />
          </div>
        </div>

        {/* Status line */}
        <div className="font-mono text-zenith-muted text-xs tracking-wider">
          &gt; Loading modules...
        </div>
      </div>
    </div>
  );
}
