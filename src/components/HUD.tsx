
import { useState, useEffect } from 'react';

export const HUD = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-30">
      {/* Top HUD Bar */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
        <div className="bg-black/70 border border-cyan-500/50 rounded p-2 backdrop-blur-sm">
          <div className="text-cyan-400 text-sm font-mono">
            SYSTEM STATUS: <span className="text-green-400">ONLINE</span>
          </div>
        </div>
        
        <div className="bg-black/70 border border-cyan-500/50 rounded p-2 backdrop-blur-sm">
          <div className="text-cyan-400 text-sm font-mono">
            STARDATE: {time.toLocaleString()}
          </div>
        </div>
      </div>

      {/* Bottom HUD Elements */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
        <div className="bg-black/70 border border-cyan-500/50 rounded p-3 backdrop-blur-sm">
          <div className="text-cyan-400 text-xs font-mono mb-1">NAVIGATION</div>
          <div className="text-cyan-300 text-xs">
            • Mouse: Navigate<br/>
            • Click: Interact<br/>
            • Scroll: Zoom
          </div>
        </div>
        
        <div className="bg-black/70 border border-cyan-500/50 rounded p-3 backdrop-blur-sm">
          <div className="text-cyan-400 text-xs font-mono mb-1">SECTORS</div>
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded animate-pulse"></div>
            <div className="w-2 h-2 bg-red-400 rounded animate-pulse"></div>
            <div className="w-2 h-2 bg-green-400 rounded animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-cyan-500/50"></div>
      <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-cyan-500/50"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-cyan-500/50"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-cyan-500/50"></div>
    </div>
  );
};
