export default function Loading() {
    return (
        <div className="fixed inset-0 bg-zenith-base flex items-center justify-center z-50">
            <div className="flex flex-col items-center gap-4">
                {/* Spinner */}
                <div className="relative w-16 h-16">
                    <div className="absolute inset-0 border-t-2 border-zenith-cyan rounded-full animate-spin" />
                    <div className="absolute inset-2 border-r-2 border-zenith-green rounded-full animate-spin [animation-direction:reverse]" />
                    <div className="absolute inset-4 border-b-2 border-zenith-white rounded-full animate-spin" />
                </div>

                {/* Loading Text */}
                <div className="font-mono text-zenith-cyan text-sm tracking-widest animate-pulse">
                    INITIALIZING...
                </div>
            </div>
        </div>
    );
}
