import logoImg from "@/assets/herat_mixer_logo.png";
import logoWhiteImg from "@/assets/herat_mixer white_logo.png";

type LogoVariant = "navy" | "white" | "mono" | "default";

interface HeratMixerLogoProps {
  size?: number;
  variant?: LogoVariant;
  className?: string;
}

export default function HeratMixerLogo({
  size = 64,
  variant = "default",
  className = "",
}: HeratMixerLogoProps) {
  const currentLogo = variant === "white" ? logoWhiteImg : logoImg;

  return (
    <div 
      className={`relative inline-block transition-all duration-500 ease-out transform ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src={currentLogo}
        alt="Herat Mixer CO.LTD Logo"
        className="w-full h-full object-contain filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.1)] group-hover:drop-shadow-[0_10px_15px_rgba(0,0,0,0.2)]"
        loading="eager"
        decoding="async"
        style={{ 
          imageRendering: "crisp-edges",
          WebkitBackfaceVisibility: "hidden" 
        }}
      />
    </div>
  );
}
