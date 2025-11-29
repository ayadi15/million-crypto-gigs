import millionPlusCoin from "@/assets/million-plus-coin.png";

interface MillionPlusCoinIconProps {
  size?: number;
  className?: string;
}

const MillionPlusCoinIcon = ({ size = 24, className = "" }: MillionPlusCoinIconProps) => {
  return (
    <img 
      src={millionPlusCoin} 
      alt="M+" 
      width={size} 
      height={size}
      className={`inline-block ${className}`}
    />
  );
};

export default MillionPlusCoinIcon;
