
import { useState } from 'react';
import { ChevronDown, Home, User, Briefcase, Mail } from 'lucide-react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { icon: Home, label: 'Hub', id: 'home' },
    { icon: User, label: 'About', id: 'about' },
    { icon: Briefcase, label: 'Projects', id: 'projects' },
    { icon: Mail, label: 'Contact', id: 'contact' },
  ];

  return (
    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-40">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-black/80 border border-cyan-500/50 rounded-lg px-4 py-2 backdrop-blur-sm
                     hover:border-cyan-400 transition-colors duration-300"
        >
          <div className="flex items-center space-x-2 text-cyan-400">
            <span className="font-mono text-sm">NAVIGATION</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </div>
        </button>

        {isOpen && (
          <div className="absolute top-full mt-2 left-0 right-0 bg-black/90 border border-cyan-500/50 
                         rounded-lg backdrop-blur-sm overflow-hidden animate-fade-in">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                className="w-full px-4 py-3 flex items-center space-x-3 text-cyan-300 
                          hover:text-cyan-100 hover:bg-cyan-500/10 transition-colors duration-200
                          border-b border-cyan-500/20 last:border-b-0"
                onClick={() => {
                  setIsOpen(false);
                  // Add navigation logic here
                }}
              >
                <item.icon className="w-4 h-4" />
                <span className="font-mono text-sm">{item.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
