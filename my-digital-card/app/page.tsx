'use client';

import React, { useState, useEffect } from 'react';
import { Terminal, Copy, ExternalLink, Activity, Wifi, Battery, Pause, X, Play, Globe, Cpu, Brain, Zap } from 'lucide-react';

const DigitalCard = () => {
  const [time, setTime] = useState(new Date());
  const [copied, setCopied] = useState(false);
  const [zoneIndex, setZoneIndex] = useState(0);

  const zones = [
    { label: 'NASR CITY', timeZone: 'Africa/Cairo' },
    { label: 'OBOUR CITY', timeZone: 'Africa/Cairo' },
    { label: 'WEST READING', timeZone: 'America/New_York' },
    { label: 'NASHVILLE', timeZone: 'America/Chicago' },
    { label: 'NYC', timeZone: 'America/New_York' },
    { label: 'RHODE ISLAND', timeZone: 'America/New_York' },
    { label: 'HOLLYWOOD', timeZone: 'America/Los_Angeles' },
    { label: 'LONDON', timeZone: 'Europe/London' },
    { label: 'PARIS', timeZone: 'Europe/Paris' },
    { label: 'CARDIFF BAY', timeZone: 'Europe/London' }
  ];

  // Update clock every second
  useEffect(() => {
    // Set initial time to avoid hydration mismatch
    setTime(new Date());
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Cycle timezones every 7 seconds
  useEffect(() => {
    const zoneTimer = setInterval(() => {
      setZoneIndex((prev) => (prev + 1) % zones.length);
    }, 7000);
    return () => clearInterval(zoneTimer);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://yomnanasr.bio.link/');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Generate random heights for the barcode effect
const [bars, setBars] = useState<{ height: string; key: number }[]>([]);

  useEffect(() => {
    setBars(Array.from({ length: 40 }).map((_, i) => ({
      height: Math.floor(Math.random() * 60) + 20 + '%',
      key: i
    })));
  }, []);

  // Skills for the marquee
  const skills = [
    "FRONTEND (HTML/CSS/JS)",
    "PYTHON", 
    "VIBE CODING",
    "CANVA",
    "AI MODELS (CLAUDE/GEMINI/GPT)",
    "YOLO V11/V8",
    "OPENCV",
    "DATA SCIENCE (PANDAS/NUMPY)",
    "SQL",
    "C#",
    "C++/ARDUINO",
    "ML BASICS"
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-mono flex items-center justify-center p-4 selection:bg-white selection:text-black overflow-hidden">
      
      {/* Main Card Container */}
      <div className="w-full max-w-4xl border border-gray-800 bg-black/50 backdrop-blur-sm relative shadow-2xl shadow-blue-900/10">
        
        {/* TOP ROW */}
        <div className="grid grid-cols-1 md:grid-cols-12 border-b border-gray-800">
          
          {/* Top Left: Neural Engine */}
          <div className="md:col-span-3 border-b md:border-b-0 md:border-r border-gray-800 p-6 flex flex-col justify-between h-48 md:h-auto relative group">
            <div className="flex justify-between items-center mb-4">
              <div className="text-xs text-gray-400 uppercase tracking-widest">Neural Engine</div>
              <Brain size={14} className="text-purple-500 animate-pulse" />
            </div>
            
            {/* Animated Atom/Neural Node SVG */}
            <div className="flex-grow flex items-center justify-center relative">
              <svg viewBox="0 0 100 100" className="w-24 h-24">
                {/* Core */}
                <circle cx="50" cy="50" r="6" fill="white" className="animate-pulse" />
                
                {/* Rotating Orbits */}
                <g className="animate-spin-slow" style={{ transformOrigin: '50px 50px' }}>
                  <ellipse cx="50" cy="50" rx="40" ry="10" fill="none" stroke="#6b7280" strokeWidth="1" className="opacity-50" />
                </g>
                <g className="animate-spin-reverse" style={{ transformOrigin: '50px 50px' }}>
                  <ellipse cx="50" cy="50" rx="40" ry="10" fill="none" stroke="#a855f7" strokeWidth="1" transform="rotate(60 50 50)" className="opacity-80" />
                </g>
                <g className="animate-spin-slow delay-75" style={{ transformOrigin: '50px 50px' }}>
                  <ellipse cx="50" cy="50" rx="40" ry="10" fill="none" stroke="#fff" strokeWidth="1" transform="rotate(120 50 50)" className="opacity-60" />
                </g>

                {/* Decoration particles */}
                <circle cx="90" cy="50" r="2" fill="#a855f7" className="animate-ping" />
              </svg>
              
              {/* Scanline effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent h-full w-full animate-scan pointer-events-none"></div>
            </div>
            
            <div className="flex justify-between items-end mt-2">
              <div className="text-[10px] text-gray-500">EFFICIENCY: 98%</div>
              <div className="text-xs text-right text-purple-400 font-bold">OPTIMIZED</div>
            </div>
          </div>

          {/* Top Middle: User Profile (Moved from bottom) */}
          <div className="md:col-span-5 border-b md:border-b-0 md:border-r border-gray-800 p-6 flex flex-col h-auto justify-center">
            <div className="text-xs text-gray-400 uppercase tracking-widest mb-4">User Profile</div>
            
            <h1 className="text-3xl font-bold tracking-tight mb-2">YOMNA NASR</h1>
            
            {/* Sub-status lines adding ML/DL Vibe */}
            <div className="mb-4 text-[10px] font-mono space-y-1 tracking-wider">
              <div className="text-gray-500 flex items-center gap-2">
                <span>&gt; CLASS: CREATIVE_DEV</span>
              </div>
              <div className="text-purple-400 flex items-center gap-2">
                 <span>&gt; PROCESS: ML/DL_LEARNING...</span>
                 <span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse"></span>
              </div>
            </div>

            <p className="text-sm text-gray-400 mb-6 max-w-xs leading-relaxed">
              Digital Creator & Developer building immersive web experiences. 
              Connecting design with functional code.
            </p>

            <div className="mt-auto grid grid-cols-2 gap-4 text-[10px] text-gray-500">
              <div>
                <span className="block text-gray-700">FROM</span>
                LOCAL DRIVE
              </div>
              <div>
                <span className="block text-gray-700">TO</span>
                WORLD WIDE WEB
              </div>
            </div>
          </div>

          {/* Top Right: Connect/QR (Moved from bottom) */}
          <div className="md:col-span-4 p-6 flex flex-col h-auto justify-center">
            <div className="text-xs text-gray-400 uppercase tracking-widest mb-4">Connect</div>
            
            <div className="flex gap-4 h-full items-center">
              {/* QR Code Area */}
              <div className="bg-white p-2 w-24 h-24 md:w-28 md:h-28 flex-shrink-0">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://yomnanasr.bio.link/&color=000000&bgcolor=ffffff" 
                  alt="QR Code" 
                  className="w-full h-full object-contain mix-blend-multiply"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2 w-full justify-between h-24 md:h-28">
                <a 
                  href="https://yomnanasr.bio.link/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="group flex items-center justify-between px-3 py-2 border border-gray-700 hover:bg-white hover:text-black hover:border-white transition-all text-xs uppercase tracking-wider"
                >
                  <span>Open Bio</span>
                  <ExternalLink size={12} />
                </a>
                
                <button 
                  onClick={handleCopyLink}
                  className="group flex items-center justify-between px-3 py-2 border border-gray-700 hover:bg-white hover:text-black hover:border-white transition-all text-xs uppercase tracking-wider"
                >
                  <span>{copied ? 'Copied' : 'Copy Link'}</span>
                  <Copy size={12} />
                </button>

                <div className="text-[10px] text-gray-600 text-right mt-auto">
                  SCAN FOR DATA
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="grid grid-cols-1 md:grid-cols-12">
          
          {/* Bottom Left: Status/Role */}
          <div className="md:col-span-3 border-b md:border-b-0 md:border-r border-gray-800 p-6 flex flex-col justify-end h-40 md:h-auto">
            <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">Current Status</div>
            <div className="text-2xl font-medium text-white">OPEN TO WORK</div>
            <div className="w-full bg-gray-900 h-1 mt-4 relative overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-2/3 bg-white animate-pulse"></div>
            </div>
          </div>

          {/* Bottom Middle: Active Modules (Moved from top) */}
          <div className="md:col-span-5 border-b md:border-b-0 md:border-r border-gray-800 p-6 flex flex-col justify-between h-48 md:h-auto overflow-hidden">
            <div className="flex justify-between items-start mb-2">
              <div className="text-xs text-gray-400 uppercase tracking-widest">Active Modules</div>
              <Cpu size={14} className="text-gray-600" />
            </div>

            {/* Barcode Visualizer */}
            <div className="flex items-end justify-between h-16 gap-[1px] opacity-80 my-2">
              {bars.map((bar) => (
                <div 
                  key={bar.key} 
                  className="w-1 bg-gray-500 group-hover:bg-green-500 transition-colors duration-500"
                  style={{ height: bar.height }}
                ></div>
              ))}
            </div>

            {/* Scrolling Skills Marquee */}
            <div className="relative h-6 overflow-hidden w-full mt-4 mask-linear">
               <div className="absolute whitespace-nowrap animate-marquee flex gap-4 text-[10px] text-gray-400 font-bold tracking-wider">
                  {skills.map((skill, i) => (
                    <span key={i} className="flex items-center gap-4">
                      <span className="text-green-500/50 text-[8px]">■</span>
                      {skill}
                    </span>
                  ))}
                  {/* Duplicate for seamless loop */}
                  {skills.map((skill, i) => (
                    <span key={`dup-${i}`} className="flex items-center gap-4">
                      <span className="text-green-500/50 text-[8px]">■</span>
                      {skill}
                    </span>
                  ))}
               </div>
            </div>
          </div>

          {/* Bottom Right: World Time (Moved from top) */}
          <div className="md:col-span-4 p-6 flex flex-col justify-between h-48 md:h-auto relative overflow-hidden">
            <div className="flex justify-between items-center">
              <div className="text-xs text-gray-400 uppercase tracking-widest">World Time</div>
              <div className="text-[10px] text-green-500 font-bold border border-green-500/30 px-1 rounded animate-pulse">
                {zones[zoneIndex].label}
              </div>
            </div>
            
            <div className="text-4xl md:text-5xl font-light tracking-tighter mt-2 transition-all duration-300">
              {time.toLocaleTimeString('en-US', { hour12: false, timeZone: zones[zoneIndex].timeZone })}
            </div>
            
            <div className="mt-4 text-xs text-gray-500 uppercase flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              System Online
            </div>
          </div>

        </div>

        {/* Footer Decorative Details */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/50 -translate-x-1 -translate-y-1"></div>
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/50 translate-x-1 -translate-y-1"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/50 -translate-x-1 translate-y-1"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/50 translate-x-1 translate-y-1"></div>
      </div>
      
      {/* Background Noise/Grid */}
      <div className="fixed inset-0 pointer-events-none -z-10" style={{
        backgroundImage: 'radial-gradient(circle at center, #111 0%, #000 70%)'
      }}></div>
      
      <style jsx global>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 12s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .mask-linear {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </div>
  );
};

export default DigitalCard; 