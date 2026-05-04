import { useEffect, useState } from "react";
import HeratMixerLogo from "./HeratMixerLogo";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setFadeOut(true);
          setTimeout(onComplete, 600);
          return 100;
        }
        return p + 2;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050a15] transition-opacity duration-1000 ease-in-out ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      <div className="flex flex-col items-center gap-12 animate-in fade-in zoom-in duration-1000">
        <div className="relative flex flex-col items-center">
          {/* Elegant Glow Effect */}
          <div className="absolute inset-0 bg-white/20 blur-[100px] rounded-full scale-150 animate-pulse" />
          
          <div className="mb-10 relative z-10 transform hover:scale-105 transition-transform duration-700">
            <HeratMixerLogo 
              size={180} 
              variant="white"
              className="drop-shadow-[0_0_40px_rgba(255,255,255,0.4)]" 
            />
          </div>
          
          <div className="flex flex-col items-center gap-3 relative z-10">
            <h1 className="text-4xl md:text-7xl font-heading font-black tracking-tight text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] uppercase">
              Herat Mixer
            </h1>
            <p className="text-center text-lg md:text-2xl tracking-[0.6em] text-gold-light/90 font-bold uppercase">
              .CO.LTD
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 w-full max-w-xs md:max-w-md relative z-10">
          <div className="w-full h-[1px] bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
            <div
              className="h-full bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <div className="flex flex-col items-center gap-3">
            <p className="text-[10px] md:text-xs text-white/40 tracking-[0.5em] uppercase font-medium animate-pulse">
              Establishing Excellence in Timber
            </p>
            <div className="text-[12px] text-white/20 font-mono tracking-widest">
              {Math.round(progress)}%
            </div>
          </div>
        </div>
      </div>
      
      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />
    </div>
  );
}