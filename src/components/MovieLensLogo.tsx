
import { Film } from "lucide-react";

interface MovieLensLogoProps {
  size?: "sm" | "md" | "lg";
}

const MovieLensLogo: React.FC<MovieLensLogoProps> = ({ size = "md" }) => {
  let logoClass = "font-bold text-white flex items-center";
  let iconSize: number;
  
  switch (size) {
    case "sm":
      logoClass += " text-lg";
      iconSize = 16;
      break;
    case "lg":
      logoClass += " text-3xl";
      iconSize = 30;
      break;
    case "md":
    default:
      logoClass += " text-2xl";
      iconSize = 24;
      break;
  }
  
  return (
    <div className={logoClass}>
      <div className="bg-movie-secondary rounded-lg p-1 mr-2">
        <Film size={iconSize} className="text-white" />
      </div>
      <span>Movie<span className="text-movie-secondary">Lens</span></span>
    </div>
  );
};

export default MovieLensLogo;
