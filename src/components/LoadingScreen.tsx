
export const LoadingScreen = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black z-50">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-400 rounded-full animate-spin mb-4"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-cyan-600 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        </div>
        <div className="text-cyan-400 font-mono text-lg animate-pulse">
          INITIALIZING HYPERSPACE...
        </div>
        <div className="text-cyan-500 font-mono text-sm mt-2">
          Loading Portfolio Systems
        </div>
      </div>
    </div>
  );
};
